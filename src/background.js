import { newTabState, tabKey } from './shared/state.js';

chrome.runtime.onInstalled.addListener(injectIntoOpenTabs);
chrome.runtime.onStartup.addListener(clearStaleTabState);

chrome.runtime.onMessage.addListener((message, sender, reply) => {
  const tabId = sender.tab?.id;
  if (tabId == null) return;
  if (message.type === 'hello') {
    handleHello(tabId, message.url).then(reply);
    return true; // reply asynchronously
  }
});

// A closed tab's jungle is forgotten.
chrome.tabs.onRemoved.addListener((tabId) => chrome.storage.local.remove(tabKey(tabId)));

// ---------- Tabs ----------

const read = async (key) => (await chrome.storage.local.get(key))[key];
const write = (key, value) => chrome.storage.local.set({ [key]: value });

// A page's overlay says hello when it loads; it gets back its tab id and that tab's
// jungle, creating one if this tab doesn't have one yet.
async function handleHello(tabId, url) {
  const key = tabKey(tabId);
  let state = await read(key);
  if (!state) {
    state = newTabState(url);
    await write(key, state);
  }
  return { tabId, state };
}

// Start growing on every tab that's already open, not just new ones. The overlay says
// hello once it's in, which gives the tab its jungle. Pages Chrome won't let extensions
// into just fail quietly.
async function injectIntoOpenTabs() {
  for (const tab of await chrome.tabs.query({})) {
    chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ['content.js'] }).catch(() => {});
  }
}

// Tab ids don't survive a browser restart, so old records are meaningless.
async function clearStaleTabState() {
  const all = await chrome.storage.local.get(null);
  // ("respawn:" records are left over from an older version.)
  const stale = Object.keys(all).filter((k) => k.startsWith('tab:') || k.startsWith('respawn:'));
  if (stale.length) await chrome.storage.local.remove(stale);
}
