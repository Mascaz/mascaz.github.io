// Procedural floor generator: BSP rooms, irregular building footprint, doors, props, enemies and loot.
import { RNG, T, makeCanvas } from './util.js';

export const TILE = { FLOOR: 0, WALL: 1, PROP: 2, GROUND: 3, EDGE: 4 };

const FLOOR_STYLES = [
  { k: 'checker', c: ['#d8dcc6', '#3f6b45'] },
  { k: 'checker', c: ['#e7a3c2', '#2d1a3c'] },
  { k: 'checker', c: ['#e8e4d8', '#1e1e26'] },
  { k: 'checker', c: ['#f2d36b', '#c0392b'] },
  { k: 'small', c: ['#58a6a0', '#3b7f7a'] },
  { k: 'small', c: ['#e0e0e8', '#9aa0b8'] },
  { k: 'wood', c: ['#7d4c2b', '#6b3f22'] },
  { k: 'wood', c: ['#9a6a3c', '#86592f'] },
  { k: 'carpet', c: ['#5c2d71', '#4a2160'] },
  { k: 'carpet', c: ['#7b1f2e', '#681826'] },
  { k: 'carpet', c: ['#2b4f8a', '#21406f'] },
  { k: 'carpet', c: ['#2f6b4a', '#25573b'] },
  { k: 'tile', c: ['#c9b458', '#a8933f'] },
  { k: 'tile', c: ['#9fb8c4', '#7f98a4'] },
  { k: 'diag', c: ['#ff9a3c', '#d4642a'] },
  { k: 'diag', c: ['#3cc8ff', '#2a8ad4'] },
];
const WALL_COLORS = ['#efe3cc', '#f2c6d6', '#cfe6ef', '#ececec', '#f0d7a8', '#d9f0c8'];
const COUCH_COLORS = ['#a8324a', '#3a6aa8', '#3f8f5a', '#c08a2a', '#8a3aa8', '#2a2a2a'];
const PROP_TYPES = [
  { w: 2, h: 1, kind: 'table' }, { w: 3, h: 1, kind: 'couch' }, { w: 1, h: 3, kind: 'couch' },
  { w: 2, h: 2, kind: 'table' }, { w: 1, h: 1, kind: 'plant' }, { w: 1, h: 1, kind: 'plant' },
  { w: 3, h: 2, kind: 'pool' }, { w: 2, h: 1, kind: 'desk' }, { w: 1, h: 2, kind: 'desk' },
  { w: 2, h: 3, kind: 'bed' }, { w: 1, h: 2, kind: 'shelf' }, { w: 2, h: 1, kind: 'shelf' },
];

export function generateLevel(seed, depth, modId, lookId) {
  const rng = new RNG(seed);
  const bw = Math.min(42 + depth * 3, 86) + rng.int(0, 10);
  const bh = Math.min(30 + depth * 2, 58) + rng.int(0, 8);
  const M = 14;
  const W = bw + M * 2 + 1, H = bh + M * 2 + 1;
  const grid = new Uint8Array(W * H).fill(TILE.GROUND);
  const I = (x, y) => y * W + x;
  const get = (x, y) => (x < 0 || y < 0 || x >= W || y >= H ? TILE.EDGE : grid[I(x, y)]);
  for (let x = 0; x < W; x++) for (const y of [0, 1, H - 2, H - 1]) grid[I(x, y)] = TILE.EDGE;
  for (let y = 0; y < H; y++) for (const x of [0, 1, W - 2, W - 1]) grid[I(x, y)] = TILE.EDGE;

  // ---- BSP ----
  const leaves = [];
  const MIN = 7, MAX = 19;
  const split = (x0, y0, x1, y1, d) => {
    const w = x1 - x0, h = y1 - y0;
    const canV = w >= MIN * 2, canH = h >= MIN * 2;
    if ((!canV && !canH) || (w <= MAX && h <= MAX && rng.chance(d > 2 ? 0.4 : 0.12))) {
      leaves.push({ x0, y0, x1, y1 });
      return;
    }
    let vert = canV && canH ? (w / h > 1.2 ? true : h / w > 1.2 ? false : rng.chance(0.5)) : canV;
    if (vert) {
      const s = rng.int(x0 + MIN, x1 - MIN);
      split(x0, y0, s, y1, d + 1);
      split(s, y0, x1, y1, d + 1);
    } else {
      const s = rng.int(y0 + MIN, y1 - MIN);
      split(x0, y0, x1, s, d + 1);
      split(x0, s, x1, y1, d + 1);
    }
  };
  split(M, M, M + bw, M + bh, 0);
  leaves.forEach((l, i) => (l.id = i));

  // ---- adjacency ----
  const adj = [];
  const adjOf = leaves.map(() => []);
  for (let i = 0; i < leaves.length; i++)
    for (let j = i + 1; j < leaves.length; j++) {
      const A = leaves[i], B = leaves[j];
      let e = null;
      if (A.x1 === B.x0 || B.x1 === A.x0) {
        const line = A.x1 === B.x0 ? A.x1 : A.x0;
        const o0 = Math.max(A.y0, B.y0), o1 = Math.min(A.y1, B.y1);
        if (o1 - o0 - 1 >= 5) e = { a: i, b: j, vert: true, line, o0, o1 };
      } else if (A.y1 === B.y0 || B.y1 === A.y0) {
        const line = A.y1 === B.y0 ? A.y1 : A.y0;
        const o0 = Math.max(A.x0, B.x0), o1 = Math.min(A.x1, B.x1);
        if (o1 - o0 - 1 >= 5) e = { a: i, b: j, vert: false, line, o0, o1 };
      }
      if (e) {
        adj.push(e);
        adjOf[i].push(e);
        adjOf[j].push(e);
      }
    }

  const connected = (set) => {
    const ids = [...set];
    if (!ids.length) return false;
    const seen = new Set([ids[0]]);
    const st = [ids[0]];
    while (st.length) {
      const a = st.pop();
      for (const e of adjOf[a]) {
        const b = e.a === a ? e.b : e.a;
        if (set.has(b) && !seen.has(b)) {
          seen.add(b);
          st.push(b);
        }
      }
    }
    return seen.size === set.size;
  };

  // ---- carve an irregular footprint by dropping some border rooms ----
  const kept = new Set(leaves.map((l) => l.id));
  if (!connected(kept)) {
    // extremely unlikely; fall back to keeping the largest connected chunk
    const seen = new Set([0]);
    const st = [0];
    while (st.length) { const a = st.pop(); for (const e of adjOf[a]) { const b = e.a === a ? e.b : e.a; if (!seen.has(b)) { seen.add(b); st.push(b); } } }
    for (const id of [...kept]) if (!seen.has(id)) kept.delete(id);
  }
  const border = rng.shuffle(leaves.filter((l) => l.x0 === M || l.y0 === M || l.x1 === M + bw || l.y1 === M + bh));
  const target = Math.floor(leaves.length * rng.range(0.1, 0.28));
  let removed = 0;
  for (const l of border) {
    if (removed >= target || kept.size <= 4) break;
    kept.delete(l.id);
    if (!connected(kept)) kept.add(l.id);
    else removed++;
  }
  const rooms = leaves.filter((l) => kept.has(l.id));

  // ---- paint ----
  for (const r of rooms) {
    for (let y = r.y0; y <= r.y1; y++)
      for (let x = r.x0; x <= r.x1; x++) {
        const edge = x === r.x0 || x === r.x1 || y === r.y0 || y === r.y1;
        if (edge) grid[I(x, y)] = TILE.WALL;
      }
  }
  for (const r of rooms) for (let y = r.y0 + 1; y < r.y1; y++) for (let x = r.x0 + 1; x < r.x1; x++) grid[I(x, y)] = TILE.FLOOR;

  // ---- connect rooms (spanning tree + loops) ----
  const parent = leaves.map((_, i) => i);
  const find = (a) => (parent[a] === a ? a : (parent[a] = find(parent[a])));
  const edges = rng.shuffle(adj.filter((e) => kept.has(e.a) && kept.has(e.b)));
  const openings = [];
  const doors = [];
  const openTiles = [];
  const carve = (vert, line, p, doorChance) => {
    const tiles = [];
    for (let k = 0; k < 3; k++) {
      const x = vert ? line : p + k, y = vert ? p + k : line;
      grid[I(x, y)] = TILE.FLOOR;
      tiles.push([x, y]);
      openTiles.push([x, y]);
    }
    openings.push({ vert, line, p, tiles });
    if (rng.chance(doorChance)) {
      const start = rng.chance(0.5);
      if (vert) {
        const hx = line * T + T / 2, hy = start ? p * T : (p + 3) * T;
        const closed = start ? Math.PI / 2 : -Math.PI / 2;
        doors.push({ hx, hy, closed, ang: closed, av: 0, len: 3 * T });
      } else {
        const hy = line * T + T / 2, hx = start ? p * T : (p + 3) * T;
        const closed = start ? 0 : Math.PI;
        doors.push({ hx, hy, closed, ang: closed, av: 0, len: 3 * T });
      }
    }
  };
  for (const e of edges) {
    const fa = find(e.a), fb = find(e.b);
    let use = false;
    if (fa !== fb) {
      parent[fa] = fb;
      use = true;
    } else if (rng.chance(0.28)) use = true;
    if (use) carve(e.vert, e.line, rng.int(e.o0 + 2, e.o1 - 4), 0.6);
  }

  // ---- entrance + getaway car ----
  const isGround = (x, y) => get(x, y) === TILE.GROUND;
  const cands = [];
  const sides = [
    { s: 'left', o: [-1, 0] }, { s: 'right', o: [1, 0] }, { s: 'top', o: [0, -1] }, { s: 'bottom', o: [0, 1] },
  ];
  for (const r of rooms) {
    for (const sd of sides) {
      const vert = sd.s === 'left' || sd.s === 'right';
      const line = sd.s === 'left' ? r.x0 : sd.s === 'right' ? r.x1 : sd.s === 'top' ? r.y0 : r.y1;
      const lo = vert ? r.y0 : r.x0, hi = vert ? r.y1 : r.x1;
      for (let p = lo + 2; p <= hi - 4; p++) {
        const mid = p + 1;
        const [ox, oy] = sd.o;
        const px = vert ? line : mid, py = vert ? mid : line;
        let ok = true;
        // clear corridor outward for the walk + car (with a 1-tile ring)
        for (let d = 1; d <= 12 && ok; d++)
          for (let w = -3; w <= 3 && ok; w++) {
            const tx = px + ox * d + (vert ? 0 : w), ty = py + oy * d + (vert ? w : 0);
            if (!isGround(tx, ty)) ok = false;
          }
        if (ok) cands.push({ r, sd, vert, line, p, px, py });
      }
    }
  }
  let entrance;
  if (cands.length) entrance = rng.pick(cands);
  else {
    // fallback: first room's left wall (should never happen thanks to the margin)
    const r = rooms[0];
    entrance = { r, sd: sides[0], vert: true, line: r.x0, p: r.y0 + 2, px: r.x0, py: r.y0 + 3 };
  }
  carve(entrance.vert, entrance.line, entrance.p, 0.35);
  const [eox, eoy] = entrance.sd.o;
  const spawn = { x: (entrance.px + eox * 5 + 0.5) * T, y: (entrance.py + eoy * 5 + 0.5) * T, a: Math.atan2(-eoy, -eox) };
  const carC = { tx: entrance.px + eox * 9, ty: entrance.py + eoy * 9 };
  const car = { x: (carC.tx + 0.5) * T, y: (carC.ty + 0.5) * T, rot: entrance.vert ? Math.PI / 2 : 0 };
  for (let a = -1; a <= 1; a++)
    for (let b = -2; b <= 2; b++) {
      const tx = carC.tx + (entrance.vert ? a : b), ty = carC.ty + (entrance.vert ? b : a);
      if (get(tx, ty) === TILE.GROUND) grid[I(tx, ty)] = TILE.PROP;
    }
  entrance.r.entrance = true;

  // ---- props ----
  const props = [];
  const nearOpening = (x0, y0, x1, y1, pad) => openTiles.some(([ox, oy]) => ox >= x0 - pad && ox <= x1 + pad && oy >= y0 - pad && oy <= y1 + pad);
  const overlapsProp = (x0, y0, x1, y1) => props.some((p) => x0 <= p.x + p.w - 1 + 2 && x1 >= p.x - 2 && y0 <= p.y + p.h - 1 + 2 && y1 >= p.y - 2);
  for (const r of rooms) {
    const iw = r.x1 - r.x0 - 1, ih = r.y1 - r.y0 - 1;
    const n = rng.int(0, iw * ih > 110 ? 3 : 1);
    let placed = 0;
    for (let att = 0; att < 30 && placed < n; att++) {
      const pt = rng.pick(PROP_TYPES);
      if (pt.w > iw - 3 || pt.h > ih - 3) continue;
      let x, y;
      if (rng.chance(0.6)) {
        const side = rng.int(0, 3);
        if (side === 0) { x = rng.int(r.x0 + 1, r.x1 - pt.w); y = r.y0 + 1; }
        else if (side === 1) { x = rng.int(r.x0 + 1, r.x1 - pt.w); y = r.y1 - pt.h; }
        else if (side === 2) { x = r.x0 + 1; y = rng.int(r.y0 + 1, r.y1 - pt.h); }
        else { x = r.x1 - pt.w; y = rng.int(r.y0 + 1, r.y1 - pt.h); }
      } else {
        if (r.x1 - 3 - pt.w < r.x0 + 3 || r.y1 - 3 - pt.h < r.y0 + 3) continue;
        x = rng.int(r.x0 + 3, r.x1 - 3 - pt.w);
        y = rng.int(r.y0 + 3, r.y1 - 3 - pt.h);
      }
      const x1 = x + pt.w - 1, y1 = y + pt.h - 1;
      let ok = true;
      for (let ty = y; ty <= y1 && ok; ty++) for (let tx = x; tx <= x1 && ok; tx++) if (get(tx, ty) !== TILE.FLOOR) ok = false;
      if (!ok || nearOpening(x, y, x1, y1, 3) || overlapsProp(x, y, x1, y1)) continue;
      for (let ty = y; ty <= y1; ty++) for (let tx = x; tx <= x1; tx++) grid[I(tx, ty)] = TILE.PROP;
      props.push({ x, y, w: pt.w, h: pt.h, kind: pt.kind, color: rng.pick(COUCH_COLORS) });
      placed++;
    }
  }

  // ---- reachability from spawn ----
  const solidMove = (t) => t === TILE.WALL || t === TILE.PROP || t === TILE.EDGE;
  const reach = new Uint8Array(W * H);
  {
    const sx = Math.floor(spawn.x / T), sy = Math.floor(spawn.y / T);
    const q = [I(sx, sy)];
    reach[q[0]] = 1;
    while (q.length) {
      const c = q.pop();
      const x = c % W, y = (c / W) | 0;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
        const ni = I(nx, ny);
        if (!reach[ni] && !solidMove(grid[ni])) {
          reach[ni] = 1;
          q.push(ni);
        }
      }
    }
  }
  const clearAt = (x, y) => {
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (solidMove(get(x + dx, y + dy))) return false;
    return true;
  };
  const roomTiles = (r) => {
    const out = [];
    for (let y = r.y0 + 1; y < r.y1; y++) for (let x = r.x0 + 1; x < r.x1; x++) if (grid[I(x, y)] === TILE.FLOOR && reach[I(x, y)] && clearAt(x, y)) out.push([x, y]);
    return out;
  };

  // ---- enemies ----
  const enemyRooms = rooms.filter((r) => !r.entrance);
  let count = Math.round((6 + depth * 1.6) * (modId === 'crowd' ? 1.4 : 1));
  count = Math.min(count, 34, enemyRooms.length * 4);
  const wT = {
    thug: 52,
    gunner: (24 + depth * 4) * (modId === 'armed' ? 3 : 1),
    dog: (depth >= 2 ? 8 : 0) + (modId === 'dogs' ? 45 : 0),
    heavy: (depth >= 3 ? 4 + depth : 0) * (modId === 'heavy' ? 3 : 1) + (modId === 'heavy' ? 10 : 0),
  };
  const meleeW = [['bat', 3], ['pipe', 3], ['knife', 2], ['katana', depth >= 3 ? 1.5 : 0.3]];
  const gunW = [['pistol', 5], ['shotgun', 2.5 + depth * 0.2], ['uzi', 2], ['rifle', depth >= 2 ? 1 + depth * 0.2 : 0]];
  const enemies = [];
  const tilesByRoom = new Map(enemyRooms.map((r) => [r, rng.shuffle(roomTiles(r))]));
  const used = new Set();
  const takeTile = (r) => {
    const list = tilesByRoom.get(r);
    while (list && list.length) {
      const [x, y] = list.pop();
      let bad = false;
      for (const k of used) {
        const ux = k % W, uy = (k / W) | 0;
        if (Math.abs(ux - x) < 3 && Math.abs(uy - y) < 3) { bad = true; break; }
      }
      if (!bad) { used.add(I(x, y)); return [x, y]; }
    }
    return null;
  };
  const roomPool = [];
  for (const r of enemyRooms) {
    const area = (r.x1 - r.x0 - 1) * (r.y1 - r.y0 - 1);
    const slots = Math.max(1, Math.round(area / 45));
    for (let i = 0; i < slots; i++) roomPool.push(r);
  }
  rng.shuffle(roomPool);
  let guard = 0;
  while (enemies.length < count && guard++ < 400) {
    const r = roomPool[guard % roomPool.length];
    const tt = takeTile(r);
    if (!tt) continue;
    const type = rng.weighted(Object.entries(wT));
    const weapon = type === 'gunner' ? rng.weighted(gunW) : type === 'thug' ? rng.weighted(meleeW) : type === 'heavy' ? 'fists' : 'fists';
    const behavior = type === 'dog' ? rng.pick(['patrol', 'idle']) : rng.weighted([['idle', 45], ['patrol', 40], ['wander', 15]]);
    const e = { type, weapon, behavior, x: (tt[0] + 0.5) * T, y: (tt[1] + 0.5) * T, a: rng.pick([0, Math.PI / 2, Math.PI, -Math.PI / 2]) + rng.range(-0.3, 0.3), patrol: null };
    if (behavior === 'patrol') {
      const list = tilesByRoom.get(r);
      const far = list.filter(([x, y]) => Math.abs(x - tt[0]) + Math.abs(y - tt[1]) > 5);
      if (far.length) {
        const [px2, py2] = rng.pick(far);
        e.patrol = [{ x: e.x, y: e.y }, { x: (px2 + 0.5) * T, y: (py2 + 0.5) * T }];
      } else e.behavior = 'idle';
    }
    enemies.push(e);
  }

  // ---- loose weapons ----
  const items = [];
  const nItems = 2 + rng.int(0, 2);
  for (let i = 0; i < nItems; i++) {
    const r = rng.pick(rooms);
    const list = roomTiles(r);
    if (!list.length) continue;
    const [x, y] = rng.pick(list);
    items.push({ id: rng.weighted([['bat', 3], ['pipe', 3], ['knife', 2], ['pistol', 2], ['shotgun', 1], ['katana', 0.6], ['uzi', 0.8]]), x: (x + 0.5) * T, y: (y + 0.5) * T, rot: rng.range(0, 6.28) });
  }

  // ---- render static layers ----
  const wallColor = rng.pick(WALL_COLORS);
  for (const r of rooms) r.style = rng.pick(FLOOR_STYLES);
  const floor = renderFloor(W, H, grid, rooms, props, openTiles, car, rng, get);
  const walls = renderWalls(W, H, grid, wallColor, get);
  const decal = makeCanvas(W * T, H * T);

  return { seed, W, H, grid, rooms, doors, spawn, car, enemies, items, floor, walls, decal, wallColor, look: lookId, props };
}

// --------------------------------------------------------------------------------------------
function renderFloor(W, H, grid, rooms, props, openTiles, car, rng, get) {
  const c = makeCanvas(W * T, H * T);
  const g = c.getContext('2d');
  // outside ground is translucent so the pulsing backdrop shows through
  for (let y = 2; y < H - 2; y++)
    for (let x = 2; x < W - 2; x++) {
      const t = grid[y * W + x];
      if (t !== TILE.GROUND && !(t === TILE.PROP && isCarTile(x, y, car))) continue;
      let nearWall = false;
      for (let dy = -2; dy <= 2 && !nearWall; dy++) for (let dx = -2; dx <= 2 && !nearWall; dx++) if (get(x + dx, y + dy) === TILE.WALL) nearWall = true;
      g.fillStyle = nearWall ? 'rgba(190,180,210,0.42)' : (x + y) % 7 === 0 ? 'rgba(10,4,22,0.62)' : 'rgba(10,4,22,0.55)';
      g.fillRect(x * T, y * T, T, T);
      if (nearWall && (x + y) % 2 === 0) {
        g.fillStyle = 'rgba(255,255,255,0.05)';
        g.fillRect(x * T, y * T, T, T);
      }
    }
  // parking lines by the car
  g.fillStyle = 'rgba(255,240,120,0.55)';
  if (car.rot) {
    g.fillRect(car.x - 16, car.y - 28, 32, 2);
    g.fillRect(car.x - 16, car.y + 26, 32, 2);
  } else {
    g.fillRect(car.x - 28, car.y - 16, 2, 32);
    g.fillRect(car.x + 26, car.y - 16, 2, 32);
  }
  // room floors
  for (const r of rooms) {
    const s = r.style;
    for (let y = r.y0 + 1; y < r.y1; y++) for (let x = r.x0 + 1; x < r.x1; x++) drawFloorTile(g, s, x, y, rng);
  }
  // door thresholds
  for (const [x, y] of openTiles) {
    g.fillStyle = '#3a2a24';
    g.fillRect(x * T, y * T, T, T);
    g.fillStyle = '#4a382e';
    g.fillRect(x * T + 1, y * T + 1, T - 2, T - 2);
  }
  // prop shadows + props
  g.fillStyle = 'rgba(0,0,0,0.35)';
  for (const p of props) g.fillRect(p.x * T + 3, p.y * T + 3, p.w * T, p.h * T);
  for (const p of props) drawProp(g, p, rng);
  // wall drop shadows
  const sh = makeCanvas(W * T, H * T);
  const sg = sh.getContext('2d');
  sg.fillStyle = '#000';
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (grid[y * W + x] === TILE.WALL) sg.fillRect(x * T + 3, y * T + 3, T, T);
  g.globalAlpha = 0.38;
  g.drawImage(sh, 0, 0);
  g.globalAlpha = 1;
  return c;
}

function isCarTile(x, y, car) {
  return Math.abs((x + 0.5) * T - car.x) < 24 && Math.abs((y + 0.5) * T - car.y) < 24;
}

function drawFloorTile(g, s, tx, ty, rng) {
  const X = tx * T, Y = ty * T, [a, b] = s.c;
  switch (s.k) {
    case 'checker':
      g.fillStyle = (tx + ty) & 1 ? a : b;
      g.fillRect(X, Y, T, T);
      break;
    case 'small':
      for (let sy = 0; sy < 2; sy++) for (let sx = 0; sx < 2; sx++) { g.fillStyle = (sx + sy) & 1 ? a : b; g.fillRect(X + sx * 4, Y + sy * 4, 4, 4); }
      break;
    case 'wood':
      for (let r = 0; r < 2; r++) {
        const row = ty * 2 + r;
        g.fillStyle = row & 1 ? a : b;
        g.fillRect(X, Y + r * 4, T, 4);
        if ((tx * 3 + row * 5) % 4 === 0) { g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(X + ((row * 3) % 8), Y + r * 4, 1, 4); }
        g.fillStyle = 'rgba(0,0,0,0.12)';
        g.fillRect(X, Y + r * 4 + 3, T, 1);
      }
      break;
    case 'carpet':
      g.fillStyle = a;
      g.fillRect(X, Y, T, T);
      g.fillStyle = b;
      for (let i = 0; i < 4; i++) g.fillRect(X + rng.int(0, 7), Y + rng.int(0, 7), 1, 1);
      break;
    case 'tile':
      g.fillStyle = a;
      g.fillRect(X, Y, T, T);
      g.fillStyle = b;
      g.fillRect(X, Y, T, 1);
      g.fillRect(X, Y, 1, T);
      break;
    case 'diag':
      g.fillStyle = ((tx + ty) % 4 + 4) % 4 < 2 ? a : b;
      g.fillRect(X, Y, T, T);
      break;
  }
}

function drawProp(g, p, rng) {
  const X = p.x * T, Y = p.y * T, w = p.w * T, h = p.h * T;
  const ol = '#0b0610';
  g.fillStyle = ol;
  g.fillRect(X - 1, Y - 1, w + 2, h + 2);
  switch (p.kind) {
    case 'table':
      g.fillStyle = '#7a4a28'; g.fillRect(X, Y, w, h);
      g.fillStyle = '#9a6238'; g.fillRect(X + 1, Y + 1, w - 2, h - 2);
      g.fillStyle = '#f0f0f0'; g.fillRect(X + 3, Y + 2, 3, 2);
      if (w > 8) { g.fillStyle = '#d04040'; g.fillRect(X + w - 6, Y + h - 5, 3, 3); }
      break;
    case 'couch':
      g.fillStyle = p.color; g.fillRect(X, Y, w, h);
      g.fillStyle = 'rgba(255,255,255,0.18)';
      if (w > h) for (let i = 0; i < p.w; i++) g.fillRect(X + i * T + 1, Y + 2, T - 2, h - 3);
      else for (let i = 0; i < p.h; i++) g.fillRect(X + 2, Y + i * T + 1, w - 3, T - 2);
      break;
    case 'plant':
      g.fillStyle = '#6a3a1a'; g.fillRect(X, Y, w, h);
      g.fillStyle = '#2f9a3a'; g.fillRect(X - 1, Y + 1, w + 2, h - 2); g.fillRect(X + 1, Y - 1, w - 2, h + 2);
      g.fillStyle = '#5fd060'; g.fillRect(X + 2, Y + 2, 2, 2);
      break;
    case 'pool':
      g.fillStyle = '#5a3418'; g.fillRect(X, Y, w, h);
      g.fillStyle = '#1f8a4a'; g.fillRect(X + 2, Y + 2, w - 4, h - 4);
      g.fillStyle = '#111';
      for (const [cx, cy] of [[1, 1], [w - 3, 1], [1, h - 3], [w - 3, h - 3], [w / 2 - 1, 1], [w / 2 - 1, h - 3]]) g.fillRect(X + cx, Y + cy, 2, 2);
      g.fillStyle = '#fff'; g.fillRect(X + 6, Y + h / 2 - 1, 2, 2);
      g.fillStyle = '#e0c020'; g.fillRect(X + w - 9, Y + h / 2 - 2, 2, 2);
      break;
    case 'desk':
      g.fillStyle = '#8a8a96'; g.fillRect(X, Y, w, h);
      g.fillStyle = '#a8a8b4'; g.fillRect(X + 1, Y + 1, w - 2, h - 2);
      g.fillStyle = '#f4f4e8'; g.fillRect(X + 2, Y + 2, 3, 4);
      break;
    case 'bed':
      g.fillStyle = '#e8e0f0'; g.fillRect(X, Y, w, h);
      g.fillStyle = p.color; g.fillRect(X, Y + 7, w, h - 7);
      g.fillStyle = '#ffffff'; g.fillRect(X + 1, Y + 1, w / 2 - 2, 5); g.fillRect(X + w / 2 + 1, Y + 1, w / 2 - 2, 5);
      break;
    case 'shelf':
      g.fillStyle = '#4a2e1a'; g.fillRect(X, Y, w, h);
      for (let i = 0; i < 6; i++) { g.fillStyle = rng.pick(['#d04040', '#40a0d0', '#e0c040', '#60c060', '#e080c0']); g.fillRect(X + 1 + (i % 3) * (w / 3), Y + 1 + Math.floor(i / 3) * (h / 2), 2, 3); }
      break;
  }
}

function renderWalls(W, H, grid, color, get) {
  const c = makeCanvas(W * T, H * T);
  const g = c.getContext('2d');
  const isW = (x, y) => get(x, y) === TILE.WALL;
  const rects = [];
  for (let y = 0; y < H; y++)
    for (let x = 0; x < W; x++) {
      if (grid[y * W + x] !== TILE.WALL) continue;
      let x0 = x * T + 1, x1 = x * T + 7, y0 = y * T + 1, y1 = y * T + 7;
      if (isW(x - 1, y)) x0 = x * T;
      if (isW(x + 1, y)) x1 = x * T + T;
      if (isW(x, y - 1)) y0 = y * T;
      if (isW(x, y + 1)) y1 = y * T + T;
      rects.push([x0, y0, x1 - x0, y1 - y0]);
    }
  g.fillStyle = '#0b0610';
  for (const [x, y, w, h] of rects) g.fillRect(x - 1, y - 1, w + 2, h + 2);
  g.fillStyle = color;
  for (const [x, y, w, h] of rects) g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(255,255,255,0.35)';
  for (const [x, y, w] of rects) g.fillRect(x, y, w, 1);
  return c;
}
