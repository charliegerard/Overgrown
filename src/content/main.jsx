import { useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { FREE_AT, measure } from '../shared/plants.js';
import { bladeById, newTabState } from '../shared/state.js';
import { useSettings } from '../shared/useSettings.js';
import { Jungle } from './Jungle.jsx';
import { useNeglectClock } from './neglectClock.js';
import { useTabState } from './useTabState.js';

const HOST_ID = '__overgrowth';
const TAKEOVER = 'overgrowth:takeover';

function boot() {
  // Only the top page, and only while the extension is alive.
  if (window.top !== window || !chrome.runtime?.id) return;

  // A fresh injection (extension reload/update) replaces any older copy on the page.
  window.dispatchEvent(new CustomEvent(TAKEOVER));

  const { host, shadow, mount } = createHost();
  const root = createRoot(mount);
  let stopped = false;
  const stop = () => {
    if (stopped) return;
    stopped = true;
    clearInterval(watchdog);
    window.removeEventListener(TAKEOVER, stop);
    root.unmount();
    host.remove();
  };
  window.addEventListener(TAKEOVER, stop);
  // When the extension is reloaded or removed, this copy is orphaned: clean up.
  const watchdog = setInterval(() => !chrome.runtime?.id && stop(), 2000);

  root.render(<Overgrowth host={host} shadow={shadow} />);
}

// The overlay lives in a full-window element with a closed shadow root, so page styles
// can't reach it. Styles are set through CSSOM (element.style), which strict page CSPs allow.
function createHost() {
  document.getElementById(HOST_ID)?.remove();
  const host = document.createElement('div');
  host.id = HOST_ID;
  host.style.cssText =
    'all:initial;position:fixed;inset:0;z-index:2147483647;pointer-events:none;display:block;user-select:none;-webkit-user-select:none;';
  const shadow = host.attachShadow({ mode: 'closed' });
  const mount = document.createElement('div');
  mount.style.cssText = 'position:absolute;inset:0;';
  shadow.append(mount);
  document.documentElement.appendChild(host);
  return { host, shadow, mount };
}

function Overgrowth({ host, shadow }) {
  const [settings] = useSettings();
  const { state, persist, replace } = useTabState();
  const toast = useFlash();
  const hud = useFlash();
  const slashing = useRef(false);
  useNeglectClock(state, persist);
  const notify = (notice) => !document.hidden && toast.show(notice.text, notice.ms);

  const enabled = settings?.enabled;
  useEffect(() => {
    host.style.display = enabled === false ? 'none' : 'block';
  }, [enabled]);

  // Whenever the tab comes back into view: the hint.
  const snapshot = settings && state ? measure(state, settings.minutes) : null;
  useEffect(() => {
    if (!snapshot || !enabled || document.hidden) return;
    if (!host.isConnected) document.documentElement.appendChild(host);
    if (!state.hinted && snapshot.coverage > 0.06) {
      state.hinted = true;
      persist(state);
      notify(NOTICES.hint);
    }
  });

  // Slashed clear: once the last stragglers have fallen, a fresh jungle starts growing.
  const onCleared = () => {
    notify(NOTICES.cleared);
    setTimeout(() => replace({ ...newTabState(location.href), hinted: true, neglectSince: null }), 1500);
  };

  if (!settings || !state) return null;

  return (
    <>
      <Jungle
        host={host}
        shadow={shadow}
        state={state}
        settings={settings}
        blade={bladeById(settings.blade)}
        slashing={slashing}
        onChange={persist}
        onCleared={onCleared}
        onHud={(progress) => hud.show(progress, 2000)}
      />
      <Toast message={toast.value} visible={toast.visible} />
      <Hud progress={hud.value} visible={hud.visible} />
    </>
  );
}

const NOTICES = {
  hint: {
    text: "🌿 This tab is getting overgrown because you've left it alone. Slash through the vines to get to the page.",
    ms: 8000,
  },
  cleared: {
    text: '✨ Cleared! The page is yours again… until it grows back.',
    ms: 5000,
  },
};

// A value that shows for a while, then fades: show(value, ms).
function useFlash() {
  const [value, setValue] = useState(null);
  const [visible, setVisible] = useState(false);
  const timer = useRef(0);

  const show = useCallback((next, ms) => {
    setValue(next);
    setVisible(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), ms);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  return { value, visible, show };
}

// A dark rounded message bubble that fades in and out.
const pillStyle = {
  position: 'absolute',
  font: '600 14px/1.4 system-ui, -apple-system, sans-serif',
  color: '#e8f3d6',
  background: 'rgba(16,26,10,.92)',
  border: '1px solid rgba(140,190,90,.35)',
  boxShadow: '0 8px 30px rgba(0,0,0,.45)',
  borderRadius: '12px',
  padding: '10px 16px',
  transition: 'opacity .3s',
  pointerEvents: 'none',
};

function Pill({ visible, style, children }) {
  return <div style={{ ...pillStyle, ...style, opacity: visible ? 1 : 0 }}>{children}</div>;
}

// Messages at the bottom of the page (hints, "cleared!").
function Toast({ message, visible }) {
  return (
    <Pill visible={visible && !!message} style={{ left: '50%', bottom: '32px', transform: 'translateX(-50%)', maxWidth: '80vw', textAlign: 'center' }}>
      {message}
    </Pill>
  );
}

// Progress shown in the corner while slashing.
function Hud({ progress, visible }) {
  if (!progress) return null;
  const text = progress.locked
    ? `🌿 ${Math.round(progress.coverage * 100)}% overgrown · get it to ${Math.round(FREE_AT * 100)}% to free the page`
    : '✨ Clear enough — the page is free';
  return (
    <Pill visible={visible} style={{ right: '16px', top: '16px', fontSize: '13px', padding: '7px 12px' }}>
      {text}
    </Pill>
  );
}

boot();
