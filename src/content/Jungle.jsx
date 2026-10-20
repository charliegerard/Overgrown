import { memo, useEffect, useRef, useState } from 'react';
import { buildJungle, growth, growthFraction, isLocked, randomBetween as rr } from '../shared/plants.js';
import { cursorFor } from './cursors.js';
import { Sound } from './sound.js';

const VIEWBOX = '0 0 200 260'; // every art file uses this box, rooted at the bottom-centre
const art = import.meta.glob('./art/*.svg', { query: '?raw', import: 'default', eager: true });
// The inside of each art file, to define as a <symbol>.
const SYMBOLS = Object.entries(art).map(([path, text]) => ({
  id: path.match(/(vine-\d+)\.svg$/)[1],
  body: text.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, ''),
}));

const LEAF_BITS = ['#3b4a1e', '#556b2f', '#4a5a22', '#6b5a2a'];
// Events on the overlay never reach the page's own listeners.
const SWALLOWED = ['click', 'dblclick', 'auxclick', 'mousedown', 'mouseup', 'contextmenu', 'dragstart', 'selectstart', 'touchstart', 'touchmove', 'touchend'];

export function Jungle({ host, shadow, state, settings, blade, slashing, onChange, onCleared, onHud }) {
  const jungle = buildJungle(state.seed);
  const snap = growth(jungle, state, growthFraction(state, settings.minutes));
  const walled = settings.enabled && isLocked(snap);
  const cut = new Set(state.cut);
  const viewport = useViewport();

  const rootRef = useRef(null);
  const sound = useRef(null);
  if (!sound.current) sound.current = new Sound();
  const fallDirection = useRef(new Map()); // cluster id → slash direction, for the fall
  const [trail, setTrail] = useState([]);
  const [bits, setBits] = useState([]);
  const [, redraw] = useState(0);

  // The slashing code below lives across renders, so it reads the latest values from here.
  const latest = useRef();
  latest.current = { state, jungle, snap, blade, walled, onChange, onCleared, onHud, minutes: settings.minutes };

  useEffect(() => {
    if (!slashing.current) host.style.pointerEvents = walled ? 'auto' : 'none';
  }, [walled]);

  useEffect(() => () => sound.current.close(), []);

  useEffect(() => {
    const root = rootRef.current;
    const selection = createSelectionLock();
    let last = null;
    let lastHitSound = 0;
    let trailPoints = [];
    let trailFrame = 0;

    const addTrailPoint = (x, y) => {
      trailPoints.push({ x, y, t: performance.now() });
      if (trailFrame) return;
      const step = () => {
        const now = performance.now();
        trailPoints = trailPoints.filter((p) => now - p.t < 170);
        setTrail(trailPoints);
        trailFrame = trailPoints.length ? requestAnimationFrame(step) : 0;
      };
      trailFrame = requestAnimationFrame(step);
    };

    const cutClusters = (ids, x, y, dx, speed) => {
      const { state, jungle, snap, blade, minutes } = latest.current;
      const fresh = ids.filter((id) => snap.grown[id] > 0 && !state.cut.includes(id));
      if (!fresh.length) return;
      const wasLocked = isLocked(growth(jungle, state, growthFraction(state, minutes)));
      for (const id of fresh) fallDirection.current.set(id, dx);
      state.cut.push(...fresh);

      const now = performance.now();
      if (now - lastHitSound > 70) {
        sound.current.hit(blade.sound, speed, dx, true);
        lastHitSound = now;
      }
      const colors = blade.bits || LEAF_BITS;
      const newBits = Array.from({ length: blade.sound === 'fire' ? 12 : 6 }, (_, k) => ({ id: Math.random(), x, y, color: colors[k % colors.length] }));
      setBits((b) => [...b, ...newBits].slice(-60));

      const after = growth(jungle, state, growthFraction(state, minutes));
      latest.current.onHud({ coverage: after.coverage, locked: isLocked(after) });
      // Slashed down to the 5% line: the last stragglers fall too, and growth starts over.
      if (wasLocked && !isLocked(after)) {
        for (const c of jungle.clusters) if (after.grown[c.id] > 0) {
          fallDirection.current.set(c.id, dx);
          state.cut.push(c.id);
        }
        latest.current.onCleared();
      }
      latest.current.onChange(state);
      redraw((v) => v + 1);
    };

    const begin = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.button !== 0) return;
      slashing.current = true;
      host.style.pointerEvents = 'auto';
      selection.lock();
      try {
        root.setPointerCapture(e.pointerId);
      } catch {
        // Pointer already released.
      }
      last = { x: e.clientX, y: e.clientY, t: performance.now() };
      sound.current.startRunning(latest.current.blade.sound);
      addTrailPoint(e.clientX, e.clientY);
      const { snap } = latest.current;
      latest.current.onHud({ coverage: snap.coverage, locked: isLocked(snap) });
    };

    const move = (e) => {
      if (!slashing.current) return;
      e.preventDefault();
      e.stopPropagation();
      const now = performance.now();
      const x = e.clientX, y = e.clientY;
      const speed = Math.hypot(x - last.x, y - last.y) / Math.max(1, now - last.t);
      sound.current.setIntensity(speed);
      const ids = clustersAlong(shadow, last.x, last.y, x, y, latest.current.blade.reach);
      if (ids.length) cutClusters(ids, x, y, x - last.x, speed);
      last = { x, y, t: now };
      addTrailPoint(x, y);
    };

    const end = (e) => {
      if (!slashing.current) return;
      slashing.current = false;
      selection.unlock();
      sound.current.stopRunning();
      try {
        root.releasePointerCapture(e.pointerId);
      } catch {
        // Already released.
      }
      host.style.pointerEvents = latest.current.walled ? 'auto' : 'none';
    };

    const swallow = (e) => {
      if (e.cancelable) e.preventDefault();
      e.stopPropagation();
    };
    // Chrome can still start a text selection despite the cancelled press; clear it.
    const onSelection = () => slashing.current && window.getSelection()?.removeAllRanges();

    root.addEventListener('pointerdown', begin);
    root.addEventListener('pointermove', move);
    root.addEventListener('pointerup', end);
    root.addEventListener('pointercancel', end);
    root.addEventListener('lostpointercapture', end);
    for (const type of SWALLOWED) root.addEventListener(type, swallow, { passive: false });
    document.addEventListener('selectionchange', onSelection);
    return () => {
      for (const type of SWALLOWED) root.removeEventListener(type, swallow);
      document.removeEventListener('selectionchange', onSelection);
      cancelAnimationFrame(trailFrame);
      selection.unlock();
    };
  }, []);

  const cursor = cursorFor(blade.id);
  return (
    <div ref={rootRef} style={{ position: 'absolute', inset: '0', touchAction: 'none', cursor }}>
      <ArtDefs />
      <Grime coverage={snap.coverage} />
      {jungle.clusters.map((c) => (
        <Cluster
          key={`${jungle.seed}-${c.id}`}
          c={c}
          grown={snap.grown[c.id]}
          isCut={cut.has(c.id)}
          fallDx={fallDirection.current.get(c.id) || 0}
          cursor={cursor}
          W={viewport.W}
          H={viewport.H}
        />
      ))}
      <Trail points={trail} style={blade.trail} />
      {bits.map((b) => (
        <Bit key={b.id} {...b} onDone={() => setBits((all) => all.filter((x) => x.id !== b.id))} />
      ))}
    </div>
  );
}

// Which clusters lie under a stroke from (x1, y1) to (x2, y2). Bigger weapons (reach > 0)
// also check either side of the stroke.
function clustersAlong(shadow, x1, y1, x2, y2, reach) {
  const ids = new Set();
  const len = Math.hypot(x2 - x1, y2 - y1);
  const steps = Math.max(1, Math.ceil(len / 10));
  const nx = len ? -(y2 - y1) / len : 0, ny = len ? (x2 - x1) / len : 1;
  const offsets = reach > 0 ? [-reach, 0, reach] : [0];
  for (let i = 0; i <= steps; i++) {
    const px = x1 + ((x2 - x1) * i) / steps, py = y1 + ((y2 - y1) * i) / steps;
    for (const o of offsets) {
      for (const el of shadow.elementsFromPoint(px + nx * o, py + ny * o)) {
        const id = el.getAttribute?.('data-cluster');
        if (id != null) ids.add(Number(id));
      }
    }
  }
  return [...ids];
}

// ---------- Pieces of the picture ----------

// The art files, defined once as <symbol>s that every cluster <use>s.
const ArtDefs = memo(function ArtDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      {SYMBOLS.map((s) => (
        <symbol key={s.id} id={s.id} viewBox={VIEWBOX} dangerouslySetInnerHTML={{ __html: s.body }} />
      ))}
    </svg>
  );
});

// The window size, kept up to date, so clusters re-aim at the centre after a resize.
function useViewport() {
  const [size, setSize] = useState({ W: innerWidth, H: innerHeight });
  useEffect(() => {
    const onResize = () => setSize({ W: innerWidth, H: innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return size;
}

// Where a cluster is rooted (just off-screen along its edge, so the stems' ends are
// hidden) and which way it points (at the centre of a W×H window).
const OFFSCREEN = 6;
function placement(c, W, H) {
  const [x, y] =
    c.edge === 'top' ? [c.along * W, -OFFSCREEN]
    : c.edge === 'bottom' ? [c.along * W, H + OFFSCREEN]
    : c.edge === 'left' ? [-OFFSCREEN, c.along * H]
    : [W + OFFSCREEN, c.along * H];
  const towardsCentre = (Math.atan2(H / 2 - y, W / 2 - x) * 180) / Math.PI;
  // The drawings point up (-90°), so turn them to face the centre.
  return { left: `${x}px`, top: `${y}px`, rotate: towardsCentre + 90 + c.tilt };
}

// One vine cluster. It scales up from its root as it grows; once cut, it falls away.
const Cluster = memo(function Cluster({ c, grown, isCut, fallDx, cursor, W, H }) {
  const ref = useRef(null);
  const cutBeforeMount = useRef(isCut); // already cut when the page loaded: never shown
  const lastGrown = useRef(grown);
  if (!isCut) lastGrown.current = grown;

  useEffect(() => {
    if (!isCut || cutBeforeMount.current) return;
    const spin = (fallDx >= 0 ? 1 : -1) * rr(40, 120);
    ref.current.animate(
      [
        { translate: '0 0', rotate: '0deg', opacity: 1 },
        { translate: `${fallDx * 3}px 110vh`, rotate: `${spin}deg`, opacity: 0 },
      ],
      { duration: 1300, easing: 'cubic-bezier(.45,0,.9,.6)', fill: 'forwards' }
    );
  }, [isCut]);

  if (cutBeforeMount.current) return null;
  const g = lastGrown.current;
  const { left, top, rotate } = placement(c, W, H);
  return (
    <svg
      ref={ref}
      viewBox={VIEWBOX}
      style={{
        position: 'absolute',
        left,
        top,
        height: `${c.size}vmin`,
        width: `${(c.size * 200) / 260}vmin`,
        overflow: 'visible',
        transformOrigin: '50% 100%',
        transform: `translate(-50%, -100%) rotate(${rotate}deg) scale(${c.flip ? -g : g}, ${g})`,
        opacity: Math.min(1, g * 4),
        pointerEvents: 'none',
      }}
    >
      <use
        href={`#vine-${c.design}`}
        data-cluster={c.id}
        style={{ pointerEvents: isCut || g === 0 ? 'none' : 'visiblePainted', cursor }}
      />
    </svg>
  );
});

// Grime and shadow creeping in from the edges, like an abandoned building.
function Grime({ coverage }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: '0',
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(20,24,8,0) 30%, rgba(10,13,4,0.85) 100%), rgba(48,50,18,0.2)',
        opacity: Math.min(1, coverage),
      }}
    />
  );
}

// The bright streak behind the blade. style: { glow, core, width } from the weapon.
function Trail({ points, style }) {
  if (points.length < 2) return null;
  const line = points.map((p) => `${p.x},${p.y}`).join(' ');
  return (
    <svg style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}>
      <polyline points={line} fill="none" stroke={`rgba(${style.glow},0.35)`} strokeWidth={10 * style.width} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={line} fill="none" stroke={`rgba(${style.core},0.9)`} strokeWidth={3.5 * style.width} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// A little shred sprayed by a hit.
function Bit({ x, y, color, onDone }) {
  const ref = useRef(null);
  const [size] = useState(() => rr(3, 7));
  useEffect(() => {
    const dx = rr(-160, 160), dy = rr(-120, 220), spin = rr(-400, 400);
    const animation = ref.current.animate(
      [
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) rotate(${spin}deg)`, opacity: 0 },
      ],
      { duration: 700, easing: 'cubic-bezier(.2,.6,.6,1)' }
    );
    animation.onfinish = onDone;
  }, []);
  return (
    <div
      ref={ref}
      style={{ position: 'absolute', left: `${x}px`, top: `${y}px`, width: `${size}px`, height: `${size / 2}px`, background: color, pointerEvents: 'none' }}
    />
  );
}

// While slashing, nothing on the page may be text-selected.
function createSelectionLock() {
  let saved = null;
  return {
    lock() {
      if (saved) return;
      const st = document.documentElement.style;
      saved = [st.getPropertyValue('user-select'), st.getPropertyPriority('user-select')];
      st.setProperty('user-select', 'none', 'important');
      st.setProperty('-webkit-user-select', 'none', 'important');
      window.getSelection()?.removeAllRanges();
    },
    unlock() {
      if (!saved) return;
      const st = document.documentElement.style;
      st.setProperty('user-select', saved[0], saved[1]);
      st.removeProperty('-webkit-user-select');
      saved = null;
    },
  };
}
