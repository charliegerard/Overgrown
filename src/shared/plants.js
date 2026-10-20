// The jungle itself: which vine clusters a tab grows, and how much of it is showing at a
// given moment. Used by every part of the extension.
//   1. Randomness  seeded, so the same seed always grows the same jungle
//   2. Clusters    where each vine cluster grows and when it sprouts
//   3. Growth      the neglect clock, how grown each cluster is, and the 5% line

// ---------- 1. Randomness ----------

// Sequential generator (mulberry32): call it repeatedly for a stream of numbers in [0, 1).
export function rng(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Unseeded, for one-off effects (falling pieces, sounds).
export const randomBetween = (a, b) => a + (b - a) * Math.random();

// ---------- 2. Clusters ----------
// A cluster is one of the vine drawings in src/content/art, rooted just off-screen
// somewhere along one of the four edges and pointing at the middle of the window. Early
// clusters are small and stay near the edges; later ones are bigger and reach further in,
// so the jungle spreads from the sides towards the centre. Timing is in fractions of the
// full-growth time.

const CLUSTERS = 110;
export const DESIGNS = 8; // vine-1.svg … vine-8.svg
const EDGES = ['top', 'right', 'bottom', 'left'];
// Fraction of the full-growth time before the first sprout appears.
const GRACE = 0.04;
const LAST_SPROUT = 0.65; // the last clusters sprout this far through the full-growth time

const cache = new Map();

export function buildJungle(seed) {
  const cached = cache.get(seed);
  if (cached) return cached;
  const r = rng(seed);
  const rr = (a, b) => a + (b - a) * r();

  const clusters = [];
  for (let id = 0; id < CLUSTERS; id++) {
    const lateness = Math.pow(r(), 1.2); // 0 = sprouts first, 1 = sprouts last
    clusters.push({
      id,
      design: 1 + Math.floor(r() * DESIGNS),
      edge: EDGES[Math.floor(r() * 4)],
      along: rr(0, 1), // where along that edge, 0..1
      size: 20 + lateness * 65 + rr(-5, 5), // height in vmin: later ones reach further in
      tilt: rr(-20, 20), // degrees away from pointing straight at the centre
      flip: r() < 0.5,
      birth: GRACE + lateness * (LAST_SPROUT - GRACE),
      grow: rr(0.12, 0.3), // how long it takes to grow fully
    });
  }
  const jungle = { seed, clusters, totalArea: clusters.reduce((sum, c) => sum + c.size * c.size, 0) };
  cache.set(seed, jungle);
  if (cache.size > 60) cache.delete(cache.keys().next().value);
  return jungle;
}

// ---------- 3. Growth ----------

// Above this, the page is walled off (nothing on it can be clicked); at or below, it's free.
export const FREE_AT = 0.05;

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

// How long a tab has effectively been neglected, in ms. Growth is driven by this, not by
// how long the tab has been open:
//   neglect       time spent out of view so far (page-owned)
//   neglectSince  when the tab last went out of view, or null while it's being looked at
export function neglectedMs(state, now = Date.now()) {
  // Records from before the neglect clock only have an open time.
  if (state.neglect == null && state.start) return Math.max(0, now - state.start);
  const running = state.neglectSince ? now - state.neglectSince : 0;
  return Math.max(0, (state.neglect || 0) + running);
}

// How far through the full-growth time a tab is (1 = fully overgrown).
export function growthFraction(state, minutes, now = Date.now()) {
  return neglectedMs(state, now) / (minutes * 60000);
}

// How grown each cluster is (0..1, 0 once it's been cut) at growth fraction f, and how
// much of the window the jungle covers (weighted by cluster size).
export function growth(jungle, state, f) {
  const cut = new Set(state.cut || []);
  const grown = new Float32Array(jungle.clusters.length);
  let area = 0;
  for (const c of jungle.clusters) {
    const g = cut.has(c.id) ? 0 : clamp01((f - c.birth) / c.grow);
    grown[c.id] = g;
    area += g * c.size * c.size;
  }
  return { f, grown, coverage: area / jungle.totalArea };
}

export const isLocked = (snapshot) => snapshot.coverage > FREE_AT;

// Convenience for places that only have the stored state (background, popup).
export function measure(state, minutes, now = Date.now()) {
  return growth(buildJungle(state.seed), state, growthFraction(state, minutes, now));
}
