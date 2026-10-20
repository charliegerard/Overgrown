export const DEFAULTS = {
  enabled: true,
  minutes: 1440, // time until fully overgrown - 24h
  blade: 'rusty', // weapon: 'rusty' | 'chainsaw' | 'flamethrower' (see BLADES below)
};

export async function loadSettings() {
  return { ...DEFAULTS, ...(await chrome.storage.sync.get(DEFAULTS)) };
}

export function saveSetting(key, value) {
  return chrome.storage.sync.set({ [key]: value });
}

export function onSettingsChanged(callback) {
  const listener = (changes, area) => {
    if (area !== 'sync') return;
    const patch = {};
    let any = false;
    for (const key in DEFAULTS) {
      if (changes[key]) {
        patch[key] = changes[key].newValue ?? DEFAULTS[key];
        any = true;
      }
    }
    if (any) callback(patch);
  };
  chrome.storage.onChanged.addListener(listener);
  return () => chrome.storage.onChanged.removeListener(listener);
}

export const BLADES = [
  {
    id: 'rusty',
    name: 'Rusty machete',
    emoji: '🔪',
    reach: 0,
    trail: { glow: '190,255,170', core: '255,255,255', width: 1 },
    bits: null,
    sound: 'leaf',
  },
  {
    id: 'chainsaw',
    name: 'Chainsaw',
    emoji: '🪚',
    reach: 22,
    trail: { glow: '255,190,90', core: '255,240,200', width: 2.2 },
    bits: ['#f5c542', '#3e7a26', '#a3a3a3', '#4a5a22'],
    sound: 'saw',
  },
  {
    id: 'flamethrower',
    name: 'Flamethrower',
    emoji: '🔥',
    reach: 34,
    trail: { glow: '255,120,30', core: '255,220,120', width: 3.2 },
    bits: ['#ff6a00', '#ffb300', '#ff3d00', '#3a2a1a'],
    sound: 'fire',
  },
];

export const bladeById = (id) => BLADES.find((blade) => blade.id === id) || BLADES[0];

export const tabKey = (tabId) => `tab:${tabId}`;

export function newTabState(url) {
  return {
    seed: (Math.random() * 4294967296) >>> 0,
    neglect: 0,
    neglectSince: Date.now(), 
    cut: [], 
    url: url || '',
  };
}

export function normalizeTabState(state) {
  const { cuts, leafCuts, ...rest } = state; // left over from the canvas version
  const out = { ...rest, cut: state.cut || [] };
  if (out.neglect == null) {
    out.neglect = out.start ? Date.now() - out.start : 0;
    out.neglectSince = Date.now();
    delete out.start;
  }
  return out;
}
