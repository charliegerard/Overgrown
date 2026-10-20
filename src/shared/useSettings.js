import { useCallback, useEffect, useState } from 'react';
import { DEFAULTS, loadSettings, onSettingsChanged, saveSetting } from './state.js';

export function useSettings() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    let live = true;
    loadSettings().then((s) => live && setSettings(s));
    const unsubscribe = onSettingsChanged((patch) => setSettings((s) => ({ ...(s || DEFAULTS), ...patch })));
    return () => {
      live = false;
      unsubscribe();
    };
  }, []);

  const updateSetting = useCallback((key, value) => {
    setSettings((s) => ({ ...s, [key]: value }));
    saveSetting(key, value);
  }, []);

  return [settings, updateSetting];
}
