function makeCrackle(ctx, seconds) {
  const sr = ctx.sampleRate;
  const n = Math.floor(sr * seconds);
  const buf = ctx.createBuffer(1, n, sr);
  const d = buf.getChannelData(0);
  let i = 0;
  while (i < n) {
    const t = i / n;
    const len = Math.floor(sr * (0.0008 + Math.random() * 0.0035));
    const amp = (0.35 + Math.random() * 0.65) * (1 - t * 0.75);
    for (let j = 0; j < len && i + j < n; j++) d[i + j] += (Math.random() * 2 - 1) * amp * Math.exp(-j / (len * 0.3));
    i += len + Math.floor(sr * Math.random() * 0.004 * (0.3 + t * 2.5));
  }
  return buf;
}

function makeNoise(ctx, seconds) {
  const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return buf;
}

const clamp01 = (v) => Math.min(1, Math.max(0, v));

// Volume levels
const LEVELS = {
  // machete
  macheteSwish: 0.6, // the blade through the air/leaves (+0.25 on fast strokes)
  leafCrunch: 0.2, // leaves being cut (+0.1 on fast strokes)
  leafCrunchTail: 0.1,
  stemSnap: 0.22,
  // chainsaw
  engineIdle: 0.14, // while the mouse is held
  engineRev: 0.2, // extra when slashing fast
  sawRasp: 0.5, // the chain biting in
  sawRaspWoody: 0.6, // ...through a stem
  sawLeaves: 0.1,
  // flamethrower
  flameIdle: 0.24,
  flameSwell: 0.3,
  fireWhoosh: 0.7, // (+0.25 on fast strokes)
  burningLeaves: 0.22,
  burningLeavesTail: 0.12,
};

export class Sound {
  constructor() {
    this.ctx = null;
    this.running = null;
  }

  audio() {
    if (!this.ctx) {
      try {
        this.ctx = new AudioContext();
        this.noise = makeNoise(this.ctx, 2);
        this.crackles = [0, 1, 2, 3].map(() => makeCrackle(this.ctx, 0.22));
        // Everything plays through a compressor, so stacked sounds during a fast slash
        // don't clip.
        this.out = this.ctx.createDynamicsCompressor();
        this.out.threshold.value = -14;
        this.out.ratio.value = 6;
        this.out.attack.value = 0.003;
        this.out.release.value = 0.15;
        this.out.connect(this.ctx.destination);
      } catch {
        return null;
      }
    }
    if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
    return this.ctx;
  }

  // Routes a sound slightly left or right with the stroke direction.
  panned(dx) {
    const a = this.ctx;
    if (!a.createStereoPanner) return this.out;
    const pan = a.createStereoPanner();
    pan.pan.value = Math.max(-0.5, Math.min(0.5, dx * 0.02));
    pan.connect(this.out);
    return pan;
  }

  crackle({ t, gain, rate = 1, freq = 2300, out }) {
    const a = this.ctx;
    const src = a.createBufferSource();
    src.buffer = this.crackles[Math.floor(Math.random() * this.crackles.length)];
    src.playbackRate.value = rate * (0.85 + Math.random() * 0.3);
    const bp = a.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = freq * (0.85 + Math.random() * 0.3);
    bp.Q.value = 0.8;
    const lp = a.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 5000;
    const g = a.createGain();
    g.gain.value = gain;
    src.connect(bp).connect(lp).connect(g).connect(out);
    src.start(t);
  }

  // A short envelope: silent → peak → silent.
  envelope(t, peak, attack, release) {
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + release);
    return g;
  }

  // ---------- while the mouse is held ----------

  startRunning(weapon) {
    this.stopRunning();
    const a = this.audio();
    if (!a || weapon === 'leaf') return;
    this.running = weapon === 'saw' ? this.engineLoop() : this.flameLoop();
  }

  // speed in px/ms; quiet when still, full when slashing fast.
  setIntensity(speed) {
    this.running?.setIntensity(clamp01(speed / 2.5));
  }

  stopRunning() {
    this.running?.stop();
    this.running = null;
  }

  // Chainsaw engine: two buzzing oscillators with a fast "chug", revving with intensity.
  engineLoop() {
    const a = this.ctx;
    const t = a.currentTime;
    const out = a.createGain();
    out.gain.setValueAtTime(0.0001, t);
    out.gain.exponentialRampToValueAtTime(LEVELS.engineIdle, t + 0.08);
    const lp = a.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 900;
    lp.connect(out).connect(this.out);

    const low = a.createOscillator();
    low.type = 'sawtooth';
    low.frequency.value = 55;
    const high = a.createOscillator();
    high.type = 'square';
    high.frequency.value = 111;
    const highGain = a.createGain();
    highGain.gain.value = 0.4;
    low.connect(lp);
    high.connect(highGain).connect(lp);

    // The two-stroke chug.
    const chug = a.createOscillator();
    chug.frequency.value = 22;
    const chugDepth = a.createGain();
    chugDepth.gain.value = 0.03;
    chug.connect(chugDepth).connect(out.gain);

    for (const osc of [low, high, chug]) osc.start(t);
    return {
      setIntensity: (k) => {
        const now = a.currentTime;
        low.frequency.setTargetAtTime(55 + 55 * k, now, 0.05);
        high.frequency.setTargetAtTime(111 + 110 * k, now, 0.05);
        chug.frequency.setTargetAtTime(22 + 18 * k, now, 0.05);
        lp.frequency.setTargetAtTime(900 + 1300 * k, now, 0.05);
        out.gain.setTargetAtTime(LEVELS.engineIdle + LEVELS.engineRev * k, now, 0.05);
      },
      stop: () => {
        const now = a.currentTime;
        chugDepth.gain.setValueAtTime(0, now);
        out.gain.setTargetAtTime(0.0001, now, 0.06);
        for (const osc of [low, high, chug]) osc.stop(now + 0.4);
      },
    };
  }

  // Flamethrower: rushing low noise that swells with intensity.
  flameLoop() {
    const a = this.ctx;
    const t = a.currentTime;
    const src = a.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    const lp = a.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 500;
    const body = a.createBiquadFilter();
    body.type = 'peaking';
    body.frequency.value = 180;
    body.gain.value = 8;
    const out = a.createGain();
    out.gain.setValueAtTime(0.0001, t);
    out.gain.exponentialRampToValueAtTime(LEVELS.flameIdle, t + 0.12);
    src.connect(lp).connect(body).connect(out).connect(this.out);
    src.start(t);
    return {
      setIntensity: (k) => {
        const now = a.currentTime;
        lp.frequency.setTargetAtTime(500 + 1100 * k, now, 0.06);
        out.gain.setTargetAtTime(LEVELS.flameIdle + LEVELS.flameSwell * k, now, 0.06);
      },
      stop: () => {
        const now = a.currentTime;
        out.gain.setTargetAtTime(0.0001, now, 0.08);
        src.stop(now + 0.5);
      },
    };
  }

  // ---------- when the blade cuts plants ----------

  // weapon: 'leaf' | 'saw' | 'fire'; speed in px/ms; dx stroke direction; woody when a
  // stem was severed.
  hit(weapon, speed, dx, woody) {
    const a = this.audio();
    if (!a) return;
    const t = a.currentTime;
    const k = clamp01((speed - 0.3) / 3);
    const out = this.panned(dx);
    if (weapon === 'saw') this.sawHit(t, k, woody, out);
    else if (weapon === 'fire') this.fireHit(t, k, out);
    else this.macheteHit(t, k, woody, out);
  }

  // Machete: a quick swish through the leaves, a leafy crunch, a green snap on stems.
  macheteHit(t, k, woody, out) {
    const a = this.ctx;
    const swish = a.createBufferSource();
    swish.buffer = this.crackles[Math.floor(Math.random() * this.crackles.length)];
    swish.playbackRate.value = 1.3 + Math.random() * 0.3;
    const sweep = a.createBiquadFilter();
    sweep.type = 'bandpass';
    sweep.Q.value = 1.1;
    sweep.frequency.setValueAtTime(3200 + 800 * k, t);
    sweep.frequency.exponentialRampToValueAtTime(1100, t + 0.09);
    swish.connect(sweep).connect(this.envelope(t, LEVELS.macheteSwish + 0.25 * k, 0.012, 0.1)).connect(out);
    swish.start(t);
    swish.stop(t + 0.12);

    this.crackle({ t: t + 0.008, gain: LEVELS.leafCrunch + 0.1 * k, out });
    this.crackle({ t: t + 0.02, gain: LEVELS.leafCrunchTail, out });
    if (woody) this.stemSnap(t + 0.01, out);
  }

  stemSnap(t, out) {
    const a = this.ctx;
    const src = a.createBufferSource();
    src.buffer = this.noise;
    const bp = a.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1800 + Math.random() * 500;
    bp.Q.value = 4;
    src.connect(bp).connect(this.envelope(t, LEVELS.stemSnap, 0.002, 0.025)).connect(out);
    src.start(t, Math.random() * 1.5);
    src.stop(t + 0.03);
  }

  // Chainsaw: the chain bites in (a gritty rising rasp) and spits out shredded leaves.
  sawHit(t, k, woody, out) {
    const a = this.ctx;
    const rasp = a.createOscillator();
    rasp.type = 'sawtooth';
    rasp.frequency.setValueAtTime(160 + 40 * k, t);
    rasp.frequency.linearRampToValueAtTime(240 + 60 * k, t + 0.05);
    rasp.frequency.linearRampToValueAtTime(170, t + 0.16);
    const grit = a.createBufferSource();
    grit.buffer = this.noise;
    const gritBand = a.createBiquadFilter();
    gritBand.type = 'bandpass';
    gritBand.frequency.value = 1400;
    gritBand.Q.value = 1.5;
    const lp = a.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 2600;
    const env = this.envelope(t, woody ? LEVELS.sawRaspWoody : LEVELS.sawRasp, 0.01, 0.16);
    rasp.connect(lp);
    grit.connect(gritBand).connect(lp);
    lp.connect(env).connect(out);
    rasp.start(t);
    grit.start(t, Math.random() * 1.5);
    rasp.stop(t + 0.18);
    grit.stop(t + 0.18);

    this.crackle({ t: t + 0.01, gain: LEVELS.sawLeaves, rate: 1.4, out });
  }

  // Flamethrower: a fiery whoosh as leaves catch, then burning crackle.
  fireHit(t, k, out) {
    const a = this.ctx;
    const whoosh = a.createBufferSource();
    whoosh.buffer = this.noise;
    const lp = a.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(400, t);
    lp.frequency.exponentialRampToValueAtTime(1800 + 600 * k, t + 0.05);
    lp.frequency.exponentialRampToValueAtTime(500, t + 0.25);
    whoosh.connect(lp).connect(this.envelope(t, LEVELS.fireWhoosh + 0.25 * k, 0.03, 0.22)).connect(out);
    whoosh.start(t, Math.random() * 1.5);
    whoosh.stop(t + 0.28);

    // Burning: slower, lower crackle, a little delayed.
    this.crackle({ t: t + 0.04, gain: LEVELS.burningLeaves, rate: 0.6, freq: 1500, out });
    this.crackle({ t: t + 0.12, gain: LEVELS.burningLeavesTail, rate: 0.5, freq: 1200, out });
  }

  close() {
    this.stopRunning();
    this.ctx?.close().catch(() => {});
  }
}
