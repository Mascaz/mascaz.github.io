// Web Audio engine: a lookahead step sequencer for the soundtrack plus synthesized sound effects.
// Nothing is sampled — every sound is built from oscillators, filtered noise and FM.
import { SONGS, SCALES } from './music.js';
import { settings } from './util.js';

const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
const ARP_LADDER = [0, 2, 4, 7, 9, 11, 14, 16];

function parseSeq(str) {
  const toks = str.replace(/\|/g, ' ').trim().split(/\s+/);
  const n = toks.length;
  const ev = new Array(n).fill(null);
  for (let i = 0; i < n; i++) {
    const tk = toks[i];
    if (tk === '.' || tk === '-') continue;
    const v = parseInt(tk, 10);
    if (Number.isNaN(v)) continue;
    let len = 1;
    while (i + len < n && toks[i + len] === '-') len++;
    ev[i] = { n: v, len };
  }
  return ev;
}

function parseGroup(group) {
  const out = {};
  for (const k in group || {}) out[k] = parseSeq(group[k]);
  return out;
}

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.current = null;
    this.songId = null;
    this.pendingSong = null;
    this.parsed = new Map();
    this.driveCurves = new Map();
    this.muffled = false;
  }

  get ready() {
    return !!this.ctx;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    this.master.gain.value = 0.9;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -12;
    comp.knee.value = 10;
    comp.ratio.value = 4;
    comp.attack.value = 0.003;
    comp.release.value = 0.25;
    this.master.connect(comp);
    comp.connect(ctx.destination);

    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = settings.music;
    this.muffle = ctx.createBiquadFilter();
    this.muffle.type = 'lowpass';
    this.muffle.frequency.value = 20000;
    this.muffle.Q.value = 0.8;
    this.musicBus.connect(this.muffle);
    this.muffle.connect(this.master);
    this.analyser = ctx.createAnalyser();
    this.analyser.fftSize = 128;
    this.analyser.smoothingTimeConstant = 0.75;
    this.muffle.connect(this.analyser);
    this.freq = new Uint8Array(this.analyser.frequencyBinCount);

    this.sfxBus = ctx.createGain();
    this.sfxBus.gain.value = settings.sfx;
    this.sfxBus.connect(this.master);

    const len = ctx.sampleRate * 2;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const nd = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) nd[i] = Math.random() * 2 - 1;

    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.makeImpulse(2.6, 2.4);
    this.reverb.connect(this.musicBus);

    this.sfxReverb = ctx.createConvolver();
    this.sfxReverb.buffer = this.makeImpulse(1.1, 3);
    this.sfxReverb.connect(this.sfxBus);
    this.sfxRevSend = ctx.createGain();
    this.sfxRevSend.gain.value = 0.3;
    this.sfxRevSend.connect(this.sfxReverb);

    this.delay = ctx.createDelay(3);
    this.delayFb = ctx.createGain();
    this.delayFb.gain.value = 0.38;
    this.delayLp = ctx.createBiquadFilter();
    this.delayLp.type = 'lowpass';
    this.delayLp.frequency.value = 2600;
    this.delay.connect(this.delayLp);
    this.delayLp.connect(this.delayFb);
    this.delayFb.connect(this.delay);
    this.delayLp.connect(this.musicBus);

    // Tape wobble: a slow shared LFO patched into every music oscillator's detune.
    this.lfo = ctx.createOscillator();
    this.lfo.frequency.value = 0.33;
    this.lfoGain = ctx.createGain();
    this.lfoGain.gain.value = 5;
    this.lfo.connect(this.lfoGain);
    this.lfo.start();

    this.timer = setInterval(() => this.tick(), 25);
    if (this.pendingSong) {
      const id = this.pendingSong;
      this.pendingSong = null;
      this.play(id);
    }
  }

  makeImpulse(sec, decay) {
    const ctx = this.ctx, r = ctx.sampleRate, len = Math.floor(r * sec);
    const buf = ctx.createBuffer(2, len, r);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }

  driveCurve(k) {
    if (this.driveCurves.has(k)) return this.driveCurves.get(k);
    const n = 1024, c = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const x = (i / (n - 1)) * 2 - 1;
      c[i] = Math.tanh(x * k) / Math.tanh(k);
    }
    this.driveCurves.set(k, c);
    return c;
  }

  setMusicVolume(v) {
    settings.music = v;
    if (this.musicBus) this.musicBus.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05);
  }
  setSfxVolume(v) {
    settings.sfx = v;
    if (this.sfxBus) this.sfxBus.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05);
  }
  setMuffle(on) {
    this.muffled = on;
    if (!this.ctx) return;
    this.muffle.frequency.setTargetAtTime(on ? 650 : 20000, this.ctx.currentTime, on ? 0.08 : 0.25);
  }
  suspend() {
    if (this.ctx && this.ctx.state === 'running') this.ctx.suspend();
  }
  resume() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  // 0..1 pulse that peaks on every beat of the current song (for visuals).
  beatPulse() {
    const c = this.current;
    if (!c || !this.ctx) return 0;
    const beat = 60 / c.song.bpm;
    const ph = (((this.ctx.currentTime - c.start) / beat) % 1 + 1) % 1;
    return Math.exp(-ph * 6);
  }

  spectrum() {
    if (!this.analyser) return null;
    this.analyser.getByteFrequencyData(this.freq);
    return this.freq;
  }

  // ---------------- music ----------------
  play(id, restart = false) {
    if (!this.ctx) {
      this.pendingSong = id;
      return;
    }
    if (this.songId === id && this.current && !restart) return;
    this.stopSong(0.7);
    const song = SONGS[id];
    if (!song) return;
    const ctx = this.ctx, now = ctx.currentTime;
    this.songId = id;
    if (!this.parsed.has(id)) {
      this.parsed.set(id, { bass: parseGroup(song.bass), arp: parseGroup(song.arp), lead: parseGroup(song.lead) });
    }
    const out = ctx.createGain();
    out.gain.setValueAtTime(0.0001, now);
    out.gain.linearRampToValueAtTime(1, now + 0.4);
    out.connect(this.musicBus);
    const revSend = ctx.createGain();
    revSend.connect(this.reverb);
    const delSend = ctx.createGain();
    delSend.connect(this.delay);
    const mkBus = (rev = 0, del = 0) => {
      const g = ctx.createGain();
      g.connect(out);
      if (rev) { const r = ctx.createGain(); r.gain.value = rev; g.connect(r); r.connect(revSend); }
      if (del) { const d = ctx.createGain(); d.gain.value = del; g.connect(d); d.connect(delSend); }
      return g;
    };
    const I = song.inst;
    const buses = {
      kick: mkBus(0, 0),
      snare: mkBus(song.kit.snare.rev, 0),
      hat: mkBus(0.1, 0.1),
      bass: mkBus(I.bass.rev || 0, I.bass.del || 0),
      pad: mkBus(I.pad.rev || 0, I.pad.del || 0),
      arp: mkBus(I.arp.rev || 0, I.arp.del || 0),
      lead: mkBus(I.lead.rev || 0, I.lead.del || 0),
    };
    this.delay.delayTime.setValueAtTime((60 / song.bpm) * song.delayBeats, now);
    this.lfoGain.gain.setTargetAtTime(song.wobble, now, 0.2);
    const start = now + 0.1;
    this.current = { id, song, out, revSend, delSend, buses, step: 0, sec: 0, barInSec: 0, next: start, start, parsed: this.parsed.get(id) };
  }

  stopSong(fade = 0.6) {
    const c = this.current;
    this.current = null;
    this.songId = null;
    if (!c || !this.ctx) return;
    const now = this.ctx.currentTime;
    for (const g of [c.out, c.revSend, c.delSend]) {
      g.gain.cancelScheduledValues(now);
      g.gain.setValueAtTime(g.gain.value, now);
      g.gain.linearRampToValueAtTime(0, now + fade);
    }
    setTimeout(() => {
      try {
        c.out.disconnect();
        c.revSend.disconnect();
        c.delSend.disconnect();
      } catch {}
    }, (fade + 0.5) * 1000);
  }

  tick() {
    const c = this.current;
    if (!c || !this.ctx || this.ctx.state !== 'running') return;
    const ctx = this.ctx, song = c.song;
    const stepDur = 60 / song.bpm / 4;
    if (c.next < ctx.currentTime - 0.3) {
      // we fell behind (tab hidden etc.) — resync instead of machine-gunning old notes
      const behind = Math.ceil((ctx.currentTime - c.next) / stepDur);
      c.next += behind * stepDur;
    }
    while (c.next < ctx.currentTime + 0.15) {
      this.scheduleStep(c, c.next, stepDur);
      c.next += stepDur;
      c.step++;
      if (c.step % 16 === 0) {
        c.barInSec++;
        if (c.barInSec >= song.sections[c.sec].bars) {
          c.barInSec = 0;
          c.sec++;
          if (c.sec >= song.sections.length) c.sec = song.loopFrom || 0;
        }
      }
    }
  }

  deg(s, d) {
    const sc = SCALES[s.scale] || SCALES.minor;
    const o = Math.floor(d / 7);
    const i = ((d % 7) + 7) % 7;
    return s.root + sc[i] + 12 * o;
  }

  scheduleStep(c, time, stepDur) {
    const s = c.song, sec = s.sections[c.sec], L = sec.layers;
    const sib = c.step % 16;
    const sis = c.barInSec * 16 + sib;
    const t = time + (sib & 1 ? s.swing * stepDur : 0);
    const chords = sec.chords || s.chords;
    const chord = chords[c.barInSec % chords.length];
    const lastBar = c.barInSec === sec.bars - 1;
    const dp = (sec.fill && lastBar && s.drums.F) || s.drums[sec.drum || 'A'] || s.drums.A;
    const B = c.buses, I = s.inst;
    if (L.includes('k') && dp.k[sib] === 'x') this.kick(t, s.kit.kick, B.kick);
    if (L.includes('s') && dp.s[sib] === 'x') this.snare(t, s.kit.snare, B.snare);
    if (L.includes('h') && dp.h[sib] !== '.') this.hat(t, dp.h[sib] === 'o', s.kit.hat, B.hat);
    if (L.includes('p') && sib === 0) {
      for (const d of [chord, chord + 2, chord + 4]) this.voice(t, this.deg(s, d) + 12 * I.pad.oct, stepDur * 16, I.pad, B.pad);
    }
    if (L.includes('b')) {
      const seq = c.parsed.bass[sec.bass || 'A'] || c.parsed.bass.A;
      const e = seq[sis % seq.length];
      if (e) this.voice(t, this.deg(s, chord + e.n) + 12 * I.bass.oct, e.len * stepDur * 0.92, I.bass, B.bass);
    }
    if (L.includes('a')) {
      const seq = c.parsed.arp[sec.arp || 'A'] || c.parsed.arp.A;
      const e = seq[sis % seq.length];
      if (e) this.voice(t, this.deg(s, chord + ARP_LADDER[e.n % 8]) + 12 * I.arp.oct, e.len * stepDur, I.arp, B.arp);
    }
    if (L.includes('l')) {
      const seq = c.parsed.lead[sec.lead || 'A'] || c.parsed.lead.A;
      const e = seq[sis % seq.length];
      if (e) this.voice(t, this.deg(s, e.n) + 12 * I.lead.oct, e.len * stepDur, I.lead, B.lead);
    }
  }

  voice(t, midi, dur, p, bus) {
    const ctx = this.ctx;
    const f = mtof(midi);
    const g = ctx.createGain();
    const voices = p.voices || 1;
    const peak = p.gain / Math.sqrt(voices);
    const end = t + Math.max(dur, p.a + 0.01);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(peak, t + p.a);
    g.gain.setTargetAtTime(peak * p.s, t + p.a, Math.max(0.01, p.d / 3));
    g.gain.setTargetAtTime(0, end, Math.max(0.01, p.r / 3));
    const stopAt = end + p.r * 2 + 0.05;
    const lfo = this.lfoGain;
    const hookLfo = (o) => {
      lfo.connect(o.detune);
      o.onended = () => {
        try { lfo.disconnect(o.detune); } catch {}
      };
    };
    if (p.fm) {
      const car = ctx.createOscillator();
      const mod = ctx.createOscillator();
      const mg = ctx.createGain();
      car.frequency.value = f;
      mod.frequency.value = f * p.ratio;
      mg.gain.setValueAtTime(f * p.index, t);
      mg.gain.setTargetAtTime(f * p.index * 0.1, t, Math.max(0.02, p.d / 3));
      mod.connect(mg);
      mg.connect(car.frequency);
      car.connect(g);
      hookLfo(car);
      car.start(t); mod.start(t);
      car.stop(stopAt); mod.stop(stopAt);
    } else {
      const filt = ctx.createBiquadFilter();
      filt.type = 'lowpass';
      filt.Q.value = p.q || 1;
      filt.frequency.setValueAtTime(Math.min(16000, p.cutoff + (p.fenv || 0)), t);
      filt.frequency.setTargetAtTime(p.cutoff, t, Math.max(0.01, (p.fdec || 0.1) / 2));
      if (p.drive) {
        const sh = ctx.createWaveShaper();
        sh.curve = this.driveCurve(p.drive);
        filt.connect(sh);
        sh.connect(g);
      } else filt.connect(g);
      for (let v = 0; v < voices; v++) {
        const o = ctx.createOscillator();
        o.type = p.wave;
        o.frequency.value = f;
        o.detune.value = voices > 1 ? (v / (voices - 1) - 0.5) * 2 * (p.detune || 0) : 0;
        o.connect(filt);
        hookLfo(o);
        o.start(t);
        o.stop(stopAt);
      }
    }
    g.connect(bus);
  }

  noiseSrc(t, dur) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    src.start(t, Math.random() * 1.5);
    src.stop(t + dur + 0.02);
    return src;
  }

  kick(t, k, bus) {
    const ctx = this.ctx;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(k.f0, t);
    o.frequency.exponentialRampToValueAtTime(k.f1, t + 0.12);
    g.gain.setValueAtTime(k.gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + k.dec);
    o.connect(g);
    g.connect(bus);
    o.start(t);
    o.stop(t + k.dec + 0.05);
  }

  snare(t, sn, bus) {
    const ctx = this.ctx;
    const n = this.noiseSrc(t, sn.dec);
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = sn.hz;
    f.Q.value = 0.7;
    const g = ctx.createGain();
    g.gain.setValueAtTime(sn.gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + sn.dec);
    n.connect(f); f.connect(g); g.connect(bus);
    const o = ctx.createOscillator(), og = ctx.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(sn.tone, t);
    o.frequency.exponentialRampToValueAtTime(sn.tone * 0.6, t + 0.1);
    og.gain.setValueAtTime(sn.gain * 0.7, t);
    og.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    o.connect(og); og.connect(bus);
    o.start(t); o.stop(t + 0.15);
  }

  hat(t, open, h, bus) {
    const ctx = this.ctx;
    const dur = open ? 0.22 : 0.045;
    const n = this.noiseSrc(t, dur);
    const f = ctx.createBiquadFilter();
    f.type = 'highpass';
    f.frequency.value = 7000;
    const g = ctx.createGain();
    g.gain.setValueAtTime(h.gain * (open ? 1.1 : 1), t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    n.connect(f); f.connect(g); g.connect(bus);
  }

  // ---------------- sound effects ----------------
  _out(vol, rev = 0) {
    const g = this.ctx.createGain();
    g.gain.value = vol;
    g.connect(this.sfxBus);
    if (rev) {
      const r = this.ctx.createGain();
      r.gain.value = rev;
      g.connect(r);
      r.connect(this.sfxRevSend);
    }
    return g;
  }

  _noise(t, out, { dur = 0.1, type = 'lowpass', hz = 2000, to = null, q = 1, gain = 0.5 }) {
    const ctx = this.ctx;
    const n = this.noiseSrc(t, dur);
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.Q.value = q;
    f.frequency.setValueAtTime(hz, t);
    if (to) f.frequency.exponentialRampToValueAtTime(to, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    n.connect(f); f.connect(g); g.connect(out);
  }

  _tone(t, out, { type = 'sine', f0 = 440, f1 = null, dur = 0.1, gain = 0.5, attack = 0.002 }) {
    const ctx = this.ctx;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(out);
    o.start(t); o.stop(t + dur + 0.05);
    return o;
  }

  sfx(name, vol = 1) {
    if (!this.ctx || vol <= 0.01) return;
    const t = this.ctx.currentTime;
    switch (name) {
      case 'pistol': { const o = this._out(vol, 0.5); this._noise(t, o, { dur: 0.2, hz: 3000, to: 300, gain: 0.9 }); this._tone(t, o, { f0: 170, f1: 45, dur: 0.12, gain: 0.9 }); break; }
      case 'shotgun': { const o = this._out(vol, 0.6); this._noise(t, o, { dur: 0.42, hz: 2200, to: 150, gain: 1.1 }); this._tone(t, o, { f0: 130, f1: 35, dur: 0.22, gain: 1 }); break; }
      case 'uzi': { const o = this._out(vol * 0.8, 0.35); this._noise(t, o, { dur: 0.09, hz: 3500, to: 600, gain: 0.7 }); this._tone(t, o, { f0: 190, f1: 60, dur: 0.06, gain: 0.5 }); break; }
      case 'rifle': { const o = this._out(vol * 0.85, 0.4); this._noise(t, o, { dur: 0.13, hz: 4000, to: 500, gain: 0.8 }); this._tone(t, o, { f0: 150, f1: 50, dur: 0.08, gain: 0.7 }); break; }
      case 'swing': { const o = this._out(vol * 0.6); this._noise(t, o, { dur: 0.13, type: 'bandpass', hz: 500, to: 2600, q: 2, gain: 0.5 }); break; }
      case 'throw': { const o = this._out(vol * 0.6); this._noise(t, o, { dur: 0.22, type: 'bandpass', hz: 350, to: 1500, q: 3, gain: 0.5 }); break; }
      case 'hit': { const o = this._out(vol, 0.15); this._tone(t, o, { f0: 130, f1: 45, dur: 0.12, gain: 1 }); this._noise(t, o, { dur: 0.07, hz: 1500, gain: 0.6 }); break; }
      case 'splat': { const o = this._out(vol, 0.2); this._noise(t, o, { dur: 0.3, hz: 1100, to: 180, q: 2, gain: 0.8 }); this._tone(t, o, { f0: 95, f1: 38, dur: 0.22, gain: 0.7 }); break; }
      case 'exec': { const o = this._out(vol, 0.3); this._tone(t, o, { f0: 100, f1: 30, dur: 0.25, gain: 1.1 }); this._noise(t, o, { dur: 0.35, hz: 900, to: 120, gain: 0.9 }); break; }
      case 'door': { const o = this._out(vol * 0.7, 0.2); this._tone(t, o, { f0: 210, f1: 90, dur: 0.07, gain: 0.5 }); this._noise(t, o, { dur: 0.05, type: 'bandpass', hz: 900, gain: 0.3 }); break; }
      case 'doorbash': { const o = this._out(vol, 0.3); this._tone(t, o, { f0: 180, f1: 50, dur: 0.15, gain: 1 }); this._noise(t, o, { dur: 0.12, type: 'bandpass', hz: 700, gain: 0.8 }); break; }
      case 'pickup': { const o = this._out(vol * 0.5); this._tone(t, o, { type: 'square', f0: 660, dur: 0.04, gain: 0.25 }); this._tone(t + 0.05, o, { type: 'square', f0: 990, dur: 0.05, gain: 0.25 }); break; }
      case 'empty': { const o = this._out(vol * 0.6); this._tone(t, o, { type: 'square', f0: 1800, f1: 1200, dur: 0.02, gain: 0.3 }); break; }
      case 'ricochet': { const o = this._out(vol * 0.35); this._noise(t, o, { dur: 0.04, type: 'highpass', hz: 3000, gain: 0.4 }); break; }
      case 'death': { const o = this._out(vol, 0.6); this._tone(t, o, { type: 'sawtooth', f0: 320, f1: 40, dur: 0.9, gain: 0.35 }); this._noise(t, o, { dur: 0.5, hz: 800, to: 100, gain: 0.7 }); break; }
      case 'armor': { const o = this._out(vol, 0.4); this._tone(t, o, { type: 'triangle', f0: 1400, f1: 900, dur: 0.35, gain: 0.5 }); this._tone(t, o, { type: 'square', f0: 2100, dur: 0.1, gain: 0.15 }); break; }
      case 'bark': { const o = this._out(vol * 0.8, 0.2); for (const dt of [0, 0.14]) { this._tone(t + dt, o, { type: 'sawtooth', f0: 520, f1: 260, dur: 0.08, gain: 0.35 }); this._noise(t + dt, o, { dur: 0.08, type: 'bandpass', hz: 800, q: 3, gain: 0.6 }); } break; }
      case 'alert': { const o = this._out(vol * 0.35); this._tone(t, o, { type: 'square', f0: 1320, dur: 0.05, gain: 0.2 }); break; }
      case 'combo': { const o = this._out(vol * 0.4, 0.3); this._tone(t, o, { type: 'square', f0: 880, dur: 0.06, gain: 0.2 }); this._tone(t + 0.06, o, { type: 'square', f0: 1320, dur: 0.08, gain: 0.2 }); break; }
      case 'ring': {
        const o = this._out(vol * 0.3, 0.2);
        const am = this.ctx.createGain();
        am.gain.value = 0.5;
        am.connect(o);
        const trem = this.ctx.createOscillator();
        trem.type = 'square';
        trem.frequency.value = 20;
        const tg = this.ctx.createGain();
        tg.gain.value = 0.5;
        trem.connect(tg);
        tg.connect(am.gain);
        const env = this.ctx.createGain();
        env.gain.setValueAtTime(0, t);
        env.gain.linearRampToValueAtTime(0.5, t + 0.02);
        env.gain.setValueAtTime(0.5, t + 1.2);
        env.gain.linearRampToValueAtTime(0, t + 1.25);
        for (const f of [440, 480]) {
          const osc = this.ctx.createOscillator();
          osc.frequency.value = f;
          osc.connect(env);
          osc.start(t); osc.stop(t + 1.3);
        }
        env.connect(am);
        trem.start(t); trem.stop(t + 1.3);
        break;
      }
      case 'beep': { const o = this._out(vol * 0.3); this._tone(t, o, { f0: 1000, dur: 0.45, gain: 0.4, attack: 0.01 }); break; }
      case 'menu': { const o = this._out(vol * 0.35); this._tone(t, o, { type: 'square', f0: 520, dur: 0.035, gain: 0.25 }); break; }
      case 'confirm': { const o = this._out(vol * 0.4, 0.2); this._tone(t, o, { type: 'square', f0: 520, dur: 0.05, gain: 0.25 }); this._tone(t + 0.05, o, { type: 'square', f0: 780, dur: 0.09, gain: 0.25 }); break; }
      case 'back': { const o = this._out(vol * 0.4); this._tone(t, o, { type: 'square', f0: 420, f1: 260, dur: 0.08, gain: 0.25 }); break; }
      case 'type': { const o = this._out(vol * 0.15); this._tone(t, o, { type: 'square', f0: 900 + Math.random() * 300, dur: 0.012, gain: 0.2 }); break; }
      case 'clear': {
        const o = this._out(vol * 0.5, 0.6);
        [57, 60, 64, 69].forEach((m, i) => this._tone(t + i * 0.07, o, { type: 'sawtooth', f0: mtof(m + 12), dur: 0.7, gain: 0.12, attack: 0.01 }));
        break;
      }
      case 'tally': { const o = this._out(vol * 0.3); this._tone(t, o, { type: 'square', f0: 1200, dur: 0.02, gain: 0.15 }); break; }
      case 'grade': { const o = this._out(vol * 0.8, 0.5); this._tone(t, o, { f0: 90, f1: 40, dur: 0.4, gain: 1 }); this._noise(t, o, { dur: 0.4, hz: 3000, to: 200, gain: 0.5 }); break; }
    }
  }
}
