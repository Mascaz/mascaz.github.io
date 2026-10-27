// The REDIAL original soundtrack — seven synthwave tracks written as data for the sequencer in audio.js.
//
// Notation (one token = one 16th note, '|' is ignored and only aids readability):
//   number  -> note. For `lead`/`counter`: absolute scale degree. For `bass`: degree relative to the bar's chord root.
//              For `arp`: index into the chord-tone ladder [root, 3rd, 5th, 8ve, 10th, 12th, 15th, 17th].
//   -       -> hold previous note
//   .       -> rest
// Drum strings are 16 chars: x = hit, o = open hat / accent, . = nothing.
// Section layers: k kick, s snare, h hats, b bass, p pad, a arp, l lead, c counter-melody.

const P = {
  bassSaw: { wave: 'sawtooth', voices: 1, gain: 0.3, a: 0.004, d: 0.18, s: 0.5, r: 0.06, cutoff: 240, fenv: 1500, fdec: 0.12, q: 6, oct: 0 },
  bassSoft: { wave: 'sawtooth', voices: 1, gain: 0.28, a: 0.01, d: 0.3, s: 0.7, r: 0.12, cutoff: 200, fenv: 600, fdec: 0.2, q: 3, oct: 0 },
  bassDist: { wave: 'sawtooth', voices: 2, detune: 9, gain: 0.2, a: 0.003, d: 0.1, s: 0.55, r: 0.05, cutoff: 380, fenv: 2400, fdec: 0.07, q: 9, oct: 0, drive: 4 },
  sub: { wave: 'triangle', voices: 1, gain: 0.45, a: 0.02, d: 0.4, s: 0.9, r: 0.4, cutoff: 500, fenv: 0, fdec: 0.1, q: 0.7, oct: 0 },
  pad: { wave: 'sawtooth', voices: 2, detune: 16, gain: 0.05, a: 0.5, d: 0.6, s: 0.8, r: 1.0, cutoff: 1100, fenv: 400, fdec: 1.2, q: 1, oct: 1, rev: 0.6 },
  padDark: { wave: 'sawtooth', voices: 2, detune: 20, gain: 0.05, a: 0.8, d: 1, s: 0.8, r: 1.4, cutoff: 650, fenv: 250, fdec: 2, q: 2, oct: 1, rev: 0.7 },
  padGlass: { wave: 'triangle', voices: 3, detune: 12, gain: 0.07, a: 0.6, d: 0.8, s: 0.85, r: 1.5, cutoff: 2600, fenv: 0, fdec: 1, q: 0.7, oct: 1, rev: 0.8, del: 0.15 },
  leadSaw: { wave: 'sawtooth', voices: 2, detune: 9, gain: 0.07, a: 0.01, d: 0.25, s: 0.65, r: 0.18, cutoff: 2200, fenv: 1800, fdec: 0.2, q: 2, oct: 2, rev: 0.35, del: 0.32 },
  leadSquare: { wave: 'square', voices: 2, detune: 6, gain: 0.055, a: 0.005, d: 0.15, s: 0.5, r: 0.1, cutoff: 1700, fenv: 2000, fdec: 0.1, q: 3, oct: 2, rev: 0.25, del: 0.35 },
  leadHaze: { wave: 'triangle', voices: 2, detune: 14, gain: 0.11, a: 0.04, d: 0.4, s: 0.7, r: 0.4, cutoff: 1800, fenv: 600, fdec: 0.3, q: 1, oct: 2, rev: 0.6, del: 0.35 },
  arpPluck: { wave: 'square', voices: 1, gain: 0.05, a: 0.002, d: 0.11, s: 0, r: 0.05, cutoff: 1300, fenv: 3000, fdec: 0.07, q: 5, oct: 2, rev: 0.2, del: 0.38 },
  arpSaw: { wave: 'sawtooth', voices: 1, gain: 0.045, a: 0.002, d: 0.14, s: 0.1, r: 0.06, cutoff: 900, fenv: 3500, fdec: 0.09, q: 7, oct: 2, rev: 0.2, del: 0.3 },
  bell: { fm: true, ratio: 3.5, index: 3, gain: 0.085, a: 0.002, d: 1.1, s: 0, r: 0.6, oct: 2, rev: 0.5, del: 0.3 },
  bellHi: { fm: true, ratio: 7, index: 1.8, gain: 0.055, a: 0.002, d: 0.5, s: 0, r: 0.4, oct: 3, rev: 0.4, del: 0.4 },
};

const KIT = {
  punchy: { kick: { gain: 0.95, f0: 150, f1: 42, dec: 0.36 }, snare: { gain: 0.42, tone: 190, hz: 1800, dec: 0.17, rev: 0.45 }, hat: { gain: 0.1 } },
  gated: { kick: { gain: 0.9, f0: 130, f1: 40, dec: 0.45 }, snare: { gain: 0.5, tone: 170, hz: 1400, dec: 0.28, rev: 0.85 }, hat: { gain: 0.08 } },
  hard: { kick: { gain: 1.0, f0: 170, f1: 45, dec: 0.3 }, snare: { gain: 0.45, tone: 210, hz: 2200, dec: 0.14, rev: 0.3 }, hat: { gain: 0.11 } },
  soft: { kick: { gain: 0.6, f0: 110, f1: 40, dec: 0.5 }, snare: { gain: 0.25, tone: 160, hz: 1200, dec: 0.25, rev: 0.9 }, hat: { gain: 0.05 } },
};

export const SONGS = {
  payphone: {
    title: 'PAYPHONE STATIC', mood: 'Title theme', bpm: 92, root: 42, scale: 'minor', swing: 0.06, wobble: 9, delayBeats: 0.75,
    kit: KIT.gated,
    chords: [0, 5, 2, 6],
    drums: { A: { k: 'x.........x.....', s: '........x.......', h: '..x...x...x...x.' } },
    bass: { A: '0 - - - - - - - 0 - - 0 4 - - .' },
    arp: { A: '0 . 1 . 2 . 3 . 2 . 1 . 3 . 4 .' },
    lead: {
      A: '4 - - - 2 - 3 - 4 - - - 7 - - - | 5 - - - 4 - 2 - 0 - - - - - - - | 2 - - - 4 - 6 - 7 - - - 9 - - - | 8 - - - 7 - 6 - 4 - - - - - . .',
      B: '11 - - - 9 - 10 - 11 - - - 14 - - - | 12 - - - 11 - 9 - 7 - - - - - - - | 9 - - - 11 - 13 - 14 - - - 16 - - - | 15 - - - 14 - 13 - 11 - - - 9 - - -',
    },
    inst: { bass: P.bassSoft, pad: P.pad, arp: P.arpPluck, lead: P.bell },
    sections: [
      { bars: 4, layers: 'pa' },
      { bars: 8, layers: 'pabkhl', lead: 'A' },
      { bars: 8, layers: 'pabkshl', lead: 'B' },
      { bars: 4, layers: 'pl', lead: 'A' },
    ],
    loopFrom: 1,
  },

  neon: {
    title: 'NEON REQUIEM', mood: 'Driving', bpm: 118, root: 45, scale: 'minor', swing: 0, wobble: 4, delayBeats: 0.75,
    kit: KIT.punchy,
    chords: [0, 5, 3, 6],
    drums: {
      A: { k: 'x...x...x...x...', s: '....x.......x...', h: '..x...x...x...x.' },
      B: { k: 'x...x...x...x...', s: '....x.......x...', h: 'x.o.x.o.x.o.x.o.' },
      F: { k: 'x...x...x...x...', s: '....x...x.x.xxxx', h: 'x.x.x.x.x.x.....' },
    },
    bass: { A: '0 . 7 . 0 . 7 . 0 . 7 . 0 . 7 .', B: '0 0 7 0 0 7 0 0 0 0 7 0 4 7 4 7' },
    arp: { A: '0 1 2 1 3 2 1 2 0 1 2 1 4 2 1 2' },
    lead: {
      A: '7 - - 6 7 - 9 - 8 - 7 - 4 - - - | 5 - - 4 5 - 7 - 9 - - - 8 - 7 - | 3 - - 4 5 - 7 - 10 - 9 - 7 - 5 - | 6 - - - 8 - - - 7 - - - - - . .',
      B: '11 . 11 . 12 - 11 - 9 - 7 - 9 - 11 - | 12 . 12 . 11 - 9 - 7 - - - 5 - 7 - | 10 . 10 . 9 - 7 - 5 - 7 - 9 - 10 - | 11 - - - 13 - - - 14 - - - - - - -',
    },
    inst: { bass: P.bassSaw, pad: P.pad, arp: P.arpSaw, lead: P.leadSaw },
    sections: [
      { bars: 4, layers: 'pa' },
      { bars: 4, layers: 'pakhb', drum: 'A' },
      { bars: 8, layers: 'pakshbl', drum: 'A', lead: 'A', fill: true },
      { bars: 8, layers: 'pakshbl', drum: 'B', lead: 'B', bass: 'B', fill: true },
      { bars: 4, layers: 'pal', lead: 'A' },
      { bars: 8, layers: 'pakshbl', drum: 'B', lead: 'B', bass: 'B', fill: true },
    ],
    loopFrom: 1,
  },

  vice: {
    title: 'VICE LOOP', mood: 'Dark & mean', bpm: 126, root: 40, scale: 'phrygian', swing: 0, wobble: 3, delayBeats: 0.5,
    kit: KIT.hard,
    chords: [0, 1, 0, 6],
    drums: {
      A: { k: 'x...x...x...x...', s: '....x.......x..x', h: 'x.o.x.o.x.o.x.o.' },
      B: { k: 'x.......x.x.....', s: '........x.......', h: 'x.x.x.x.x.x.x.x.' },
      F: { k: 'x...x...x...x...', s: '....x.......xxxx', h: 'x.o.x.o.x.o.....' },
    },
    bass: { A: '0 0 7 0 0 7 0 0 1 0 7 0 0 7 1 0' },
    arp: { A: '0 . 2 . 1 . . 0 . 2 . 1 . 3 . .' },
    lead: {
      A: '7 . 7 . 8 . 7 . 4 . . . 5 . 4 . | 3 . 3 . 4 . 3 . 1 . . . 0 - - -',
      B: '11 - - - - - 10 - 9 - - - 8 - - - | 8 - - - - - 9 - 10 - - - 11 - - - | 12 - - - 11 - 10 - 11 - - - 7 - - - | 10 - - - 9 - 8 - 7 - - - - - - -',
    },
    inst: { bass: P.bassDist, pad: P.padDark, arp: P.bellHi, lead: P.leadSquare },
    sections: [
      { bars: 4, layers: 'khb', drum: 'A' },
      { bars: 8, layers: 'kshba', drum: 'A', lead: 'A' },
      { bars: 8, layers: 'kshbal', drum: 'A', lead: 'A', fill: true },
      { bars: 8, layers: 'pkshbl', drum: 'B', lead: 'B' },
      { bars: 8, layers: 'kshbal', drum: 'A', lead: 'A', fill: true },
    ],
    loopFrom: 1,
  },

  motel: {
    title: 'BLOOD MOON MOTEL', mood: 'Hazy, swung', bpm: 100, root: 38, scale: 'minor', swing: 0.18, wobble: 15, delayBeats: 0.75,
    kit: KIT.gated,
    chords: [0, 6, 5, 4],
    drums: { A: { k: 'x.....x...x.....', s: '....x.......x...', h: 'x.x.x.x.x.x.x.x.' }, F: { k: 'x.....x...x.....', s: '....x.......x.xx', h: 'x.x.x.x.x.x.x...' } },
    bass: { A: '0 - - 0 . . 0 - 7 - . 0 4 - 3 -' },
    arp: { A: '0 . . 2 . . 1 . 3 . . 2 . . 1 .' },
    lead: {
      A: '4 - - - - - 3 - 2 - - - 0 - - - | 6 - - - 4 - 6 - 7 - - - 8 - - - | 9 - - - 7 - 5 - 4 - - - 2 - 4 - | 4 - - - - - - - 1 - 2 - 4 - - -',
      B: '11 - 9 - 7 - 9 - 11 - - - 12 - 11 - | 10 - - - 9 - 7 - 6 - - - 4 - - - | 5 - 7 - 9 - 12 - 11 - - - 9 - - - | 8 - - - - - 7 - 8 - - - 11 - - -',
    },
    inst: { bass: P.bassSoft, pad: P.pad, arp: P.bell, lead: P.leadHaze },
    sections: [
      { bars: 4, layers: 'pa' },
      { bars: 8, layers: 'pakshbl', lead: 'A', fill: true },
      { bars: 8, layers: 'pakshbl', lead: 'B', fill: true },
      { bars: 4, layers: 'pal', lead: 'A' },
    ],
    loopFrom: 1,
  },

  crystal: {
    title: 'CRYSTAL OVERDRIVE', mood: 'Relentless', bpm: 138, root: 37, scale: 'minor', swing: 0, wobble: 3, delayBeats: 0.75,
    kit: KIT.hard,
    chords: [0, 5, 6, 4],
    drums: {
      A: { k: 'x...x...x...x...', s: '....x.......x...', h: 'x.x.x.x.x.x.x.x.' },
      B: { k: 'x...x...x...x.x.', s: '....x.......x...', h: 'xxoxxxoxxxoxxxox' },
      F: { k: 'x...x...x...x...', s: '....x...x.x.xxxx', h: 'x.x.x.x.x.......' },
    },
    bass: { A: '0 0 7 0 0 7 0 0 0 0 7 0 0 7 0 7' },
    arp: { A: '0 2 4 2 3 2 4 5 0 2 4 2 3 4 5 6' },
    lead: {
      A: '7 - 9 - 11 - 9 - 7 - 6 - 7 - - - | 5 - 7 - 9 - 12 - 11 - - - 9 - - - | 6 - 8 - 10 - 13 - 12 - - - 10 - 11 - | 11 - - - 10 - - - 9 - - - 8 - - -',
      B: '14 - 14 - 13 - 11 - 14 - 14 - 16 - 14 - | 12 - 12 - 11 - 9 - 12 - 11 - 9 - 7 - | 13 - 13 - 12 - 10 - 13 - 12 - 10 - 8 - | 11 - - - 13 - - - 14 - - - - - - -',
    },
    inst: { bass: P.bassSaw, pad: P.pad, arp: P.bell, lead: P.leadSaw },
    sections: [
      { bars: 4, layers: 'ka', drum: 'A' },
      { bars: 8, layers: 'kshba', drum: 'A', fill: true },
      { bars: 8, layers: 'kshbapl', drum: 'A', lead: 'A', fill: true },
      { bars: 8, layers: 'kshbapl', drum: 'B', lead: 'B', fill: true },
      { bars: 4, layers: 'pa' },
    ],
    loopFrom: 1,
  },

  afterglow: {
    title: 'AFTERGLOW', mood: 'Score screen', bpm: 84, root: 39, scale: 'major', swing: 0.05, wobble: 10, delayBeats: 0.75,
    kit: KIT.soft,
    chords: [0, 3, 5, 4],
    drums: { A: { k: 'x.........x.....', s: '........x.......', h: '..x...x...x...x.' } },
    bass: { A: '0 - - - - - - - 0 - - - 4 - - -' },
    arp: { A: '0 . 1 . 2 . 3 . 4 . 3 . 2 . 1 .' },
    lead: { A: '4 - - - 2 - - - 1 - 2 - 4 - - - | 5 - - - 4 - - - 2 - - - 0 - - - | 7 - - - 6 - 5 - 4 - - - 2 - - - | 4 - - - - - - - 6 - - - 5 - - -' },
    inst: { bass: P.sub, pad: P.padGlass, arp: P.arpPluck, lead: P.bell },
    sections: [
      { bars: 4, layers: 'pa' },
      { bars: 8, layers: 'pabl', lead: 'A' },
      { bars: 8, layers: 'pabkhsl', lead: 'A' },
    ],
    loopFrom: 0,
  },

  deadair: {
    title: 'DEAD AIR', mood: 'Floor cleared', bpm: 70, root: 33, scale: 'minor', swing: 0, wobble: 18, delayBeats: 1.5,
    kit: KIT.soft,
    chords: [0, 5, 0, 3],
    drums: { A: { k: 'x..x............', s: '................', h: '................' } },
    bass: { A: '0 - - - - - - - - - - - - - - -' },
    arp: { A: '0 . . . . . . . . . . . . . . .' },
    lead: { A: '7 - - - - - - - . . . . . . . . | . . . . . . . . 4 - - - - - - - | 9 - - - - - - - . . . . . . . . | . . . . . . . . 8 - - - - - - -' },
    inst: { bass: P.sub, pad: P.padDark, arp: P.bellHi, lead: P.bell },
    sections: [{ bars: 8, layers: 'pbkl', lead: 'A' }],
    loopFrom: 0,
  },
};

export const GAMEPLAY_SONGS = ['neon', 'vice', 'motel', 'crystal'];
export const TRACKLIST = ['payphone', 'neon', 'vice', 'motel', 'crystal', 'afterglow', 'deadair'];

export const SCALES = {
  minor: [0, 2, 3, 5, 7, 8, 10],
  major: [0, 2, 4, 5, 7, 9, 11],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  dorian: [0, 2, 3, 5, 7, 9, 10],
};
