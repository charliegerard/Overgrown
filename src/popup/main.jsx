import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BLADES, tabKey } from '../shared/state.js';
import { useSettings } from '../shared/useSettings.js';
import { Card, CurrentTabCard, TabListCard } from './components.jsx';
import './popup.css';

const GROWTH_TIMES = [
  [5, '5 minutes'],
  [30, '30 minutes'],
  [60, '1 hour'],
  [180, '3 hours'],
  [480, '8 hours'],
  [1440, '24 hours'],
];

function App() {
  const [settings, updateSetting] = useSettings();
  const { tabs, activeTabId } = useOvergrownTabs();
  if (!settings) return null;

  const current = tabs.find((entry) => entry.tab.id === activeTabId);
  return (
    <>
      {/* Header: title and on/off switch */}
      <header>
        <h1>🌿 Overgrown</h1>
        <label className="switch" title="Let plants grow">
          <input type="checkbox" checked={settings.enabled} onChange={(e) => updateSetting('enabled', e.target.checked)} />
          <span />
        </label>
      </header>

      <CurrentTabCard entry={current} minutes={settings.minutes} />
      <TabListCard entries={tabs} minutes={settings.minutes} />

      {/* Weapon */}
      <Card title="Weapon">
        <div className="weapons">
          {BLADES.map((blade) => (
            <button
              key={blade.id}
              className={blade.id === settings.blade ? 'weapon on' : 'weapon'}
              aria-pressed={blade.id === settings.blade}
              onClick={() => updateSetting('blade', blade.id)}
            >
              <span className="weapon-emoji">{blade.emoji}</span>
              {blade.name}
            </button>
          ))}
        </div>
      </Card>

      {/* Settings */}
      <Card title="Settings">
        <label className="row">
          Fully overgrown after
          <select value={settings.minutes} onChange={(e) => updateSetting('minutes', Number(e.target.value))}>
            {GROWTH_TIMES.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </Card>
    </>
  );
}

function useOvergrownTabs() {
  const [data, setData] = useState({ tabs: [], activeTabId: null });

  useEffect(() => {
    let live = true;
    const reload = () => loadTabs().then((d) => live && setData(d));
    reload();
    const timer = setInterval(reload, 2000);
    const onStorage = (_changes, area) => area === 'local' && reload();
    chrome.storage.onChanged.addListener(onStorage);
    return () => {
      live = false;
      clearInterval(timer);
      chrome.storage.onChanged.removeListener(onStorage);
    };
  }, []);

  return data;
}

async function loadTabs() {
  const [[active], tabs] = await Promise.all([chrome.tabs.query({ active: true, currentWindow: true }), chrome.tabs.query({})]);
  const stored = await chrome.storage.local.get(tabs.map((t) => tabKey(t.id)));
  const entries = tabs.map((tab) => ({ tab, state: stored[tabKey(tab.id)] })).filter((entry) => entry.state);
  return { tabs: entries, activeTabId: active?.id };
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
