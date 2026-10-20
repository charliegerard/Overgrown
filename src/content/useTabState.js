import { useCallback, useEffect, useRef, useState } from 'react';
import { normalizeTabState, tabKey } from '../shared/state.js';

export function useTabState() {
  const [tab, setTab] = useState(null); // { id, state }
  const pending = useRef(null);
  const timer = useRef(0);
  const tabId = tab?.id;

  useEffect(() => {
    let live = true;
    sayHello()
      .then((res) => live && res && setTab({ id: res.tabId, state: normalizeTabState(res.state) }))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  const flush = useCallback(() => {
    clearTimeout(timer.current);
    const state = pending.current;
    if (!state || tabId == null || !chrome.runtime?.id) return;
    pending.current = null;
    chrome.storage.local.set({ [tabKey(tabId)]: state }).catch(() => {});
  }, [tabId]);

  // Writes are batched (slashing changes the state many times a second).
  const persist = useCallback(
    (state, immediate) => {
      pending.current = state;
      clearTimeout(timer.current);
      if (immediate) flush();
      else timer.current = setTimeout(flush, 250);
    },
    [flush]
  );

  const replace = useCallback(
    (state) => {
      setTab((t) => ({ ...t, state }));
      persist(state, true);
    },
    [persist]
  );

  useEffect(() => {
    window.addEventListener('pagehide', flush);
    return () => window.removeEventListener('pagehide', flush);
  }, [flush]);

  return { state: tab?.state ?? null, persist, replace };
}

// Returns { tabId, state } for this tab (creating its jungle if it has none).
function sayHello() {
  return chrome.runtime.sendMessage({ type: 'hello', url: location.href });
}