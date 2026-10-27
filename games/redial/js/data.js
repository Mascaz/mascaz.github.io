// Static game data: weapons, masks (roguelike perks), modifiers, enemy palettes, phone calls.

export const WEAPONS = {
  fists: { name: 'FISTS', type: 'melee', lethal: false, range: 15, arc: 1.4, cd: 0.28, exec: 0.9, pose: 'fists' },
  bat: { name: 'BAT', type: 'melee', lethal: true, range: 20, arc: 1.7, cd: 0.4, exec: 0.5, pose: 'melee' },
  pipe: { name: 'LEAD PIPE', type: 'melee', lethal: true, range: 19, arc: 1.6, cd: 0.36, exec: 0.5, pose: 'melee' },
  knife: { name: 'KNIFE', type: 'melee', lethal: true, range: 15, arc: 1.3, cd: 0.22, exec: 0.35, pose: 'melee', throwLethal: true },
  katana: { name: 'KATANA', type: 'melee', lethal: true, range: 24, arc: 1.9, cd: 0.32, exec: 0.35, pose: 'melee', throwLethal: true },
  pistol: { name: 'PISTOL', type: 'gun', ammo: 12, cd: 0.24, spread: 0.035, pellets: 1, auto: false, noise: 320, snd: 'pistol', shake: 2, muzzle: 10, pose: 'gun', ecd: 0.65 },
  shotgun: { name: 'SHOTGUN', type: 'gun', ammo: 6, cd: 0.72, spread: 0.3, pellets: 7, auto: false, noise: 400, snd: 'shotgun', shake: 5, muzzle: 15, pose: 'gun', ecd: 1.15 },
  uzi: { name: 'UZI', type: 'gun', ammo: 30, cd: 0.075, spread: 0.14, pellets: 1, auto: true, noise: 320, snd: 'uzi', shake: 1.5, muzzle: 10, pose: 'gun', ecd: 0.09, burst: 4 },
  rifle: { name: 'M-16', type: 'gun', ammo: 24, cd: 0.11, spread: 0.05, pellets: 1, auto: true, noise: 380, snd: 'rifle', shake: 2, muzzle: 17, pose: 'gun', ecd: 0.12, burst: 3 },
};

// Masks: each one is a stackable/unique perk. Animal masks are the homage.
export const MASKS = [
  { id: 'wolf', name: 'LUPO', animal: 'THE WOLF', desc: 'Your punches kill.', color: '#8a8f99', accent: '#dfe3e8', ears: 'pointy', snout: 'muzzle' },
  { id: 'owl', name: 'HOOTS', animal: 'THE OWL', desc: 'See enemies through walls. Look further ahead.', color: '#8b5a2b', accent: '#f2c230', ears: 'tufts', snout: 'beak', eyes: 'big' },
  { id: 'cobra', name: 'SLINK', animal: 'THE COBRA', desc: 'Start every floor holding a knife.', color: '#3f8f3a', accent: '#e8d24a', ears: 'none', snout: 'none', extra: 'hood' },
  { id: 'moth', name: 'DUST', animal: 'THE MOTH', desc: 'Move 15% faster.', color: '#d8cfa8', accent: '#7a6a4a', ears: 'none', snout: 'none', extra: 'antennae', stack: true },
  { id: 'bear', name: 'GRIZ', animal: 'THE BEAR', desc: 'Shrug off one hit per floor.', color: '#5a3a22', accent: '#c89a6a', ears: 'round', snout: 'muzzle', stack: true },
  { id: 'fox', name: 'VIXEN', animal: 'THE FOX', desc: 'Doors you slam are lethal.', color: '#e07020', accent: '#fff4e0', ears: 'pointy', snout: 'muzzle' },
  { id: 'shark', name: 'GREAT', animal: 'THE SHARK', desc: 'Combo window lasts 1.5s longer.', color: '#6f8fa8', accent: '#f4f4f4', ears: 'none', snout: 'jaw', extra: 'fin', stack: true },
  { id: 'raven', name: 'NEVER', animal: 'THE RAVEN', desc: 'Thrown weapons kill.', color: '#24242e', accent: '#c8c8b0', ears: 'none', snout: 'beak' },
  { id: 'rat', name: 'SQUEAK', animal: 'THE RAT', desc: 'Guns you find hold 50% more ammo.', color: '#9a8f8a', accent: '#f0a0b0', ears: 'round', snout: 'muzzle', extra: 'whiskers' },
  { id: 'panther', name: 'ONYX', animal: 'THE PANTHER', desc: 'Faster attacks. Instant executions.', color: '#1a1a22', accent: '#50e070', ears: 'small', snout: 'muzzle' },
  { id: 'bull', name: 'TORO', animal: 'THE BULL', desc: 'Start with a bat. Melee reach +30%.', color: '#4a2a1a', accent: '#f0e8d8', ears: 'small', snout: 'muzzle', extra: 'horns' },
  { id: 'elephant', name: 'TUSK', animal: 'THE ELEPHANT', desc: '+1 Redial, right now.', color: '#8f8f9a', accent: '#f0f0e8', ears: 'big', snout: 'trunk', stack: true },
  { id: 'frog', name: 'CROAK', animal: 'THE FROG', desc: 'Enemies react 60% slower.', color: '#5fbf3a', accent: '#f0e040', ears: 'none', snout: 'none', eyes: 'bulge' },
  { id: 'bat', name: 'ECHO', animal: 'THE BAT', desc: 'See enemy vision cones. Immune to Blackouts.', color: '#3a2a3a', accent: '#ff5070', ears: 'big', snout: 'none' },
  { id: 'hyena', name: 'GIGGLES', animal: 'THE HYENA', desc: '+50% score.', color: '#b89a5a', accent: '#3a2a1a', ears: 'round', snout: 'muzzle', extra: 'spots', stack: true },
  { id: 'mantis', name: 'PRAY', animal: 'THE MANTIS', desc: 'Guns fire 35% faster and spray less.', color: '#9fd860', accent: '#f04040', ears: 'none', snout: 'none', eyes: 'bulge', extra: 'antennae' },
];

export const BONUS_CARDS = [
  { id: 'spare', name: 'SPARE CHANGE', animal: 'A QUARTER', desc: '+1 Redial for the payphone.', color: '#d8d8e0', accent: '#888', bonus: true },
  { id: 'tip', name: 'TIP JAR', animal: 'CASH', desc: '+5000 points.', color: '#4fbf5a', accent: '#1f6f2a', bonus: true },
];

export const MASK_BY_ID = Object.fromEntries([...MASKS, ...BONUS_CARDS].map((m) => [m.id, m]));

export function computeStats(masks) {
  const n = (id) => masks.filter((m) => m === id).length;
  return {
    punchLethal: n('wolf') > 0,
    wallhack: n('owl') > 0,
    startWeapon: n('cobra') ? 'knife' : n('bull') ? 'bat' : null,
    speedMult: 1 + 0.15 * n('moth'),
    armor: n('bear'),
    doorLethal: n('fox') > 0,
    comboWindow: 3 + 1.5 * n('shark'),
    throwLethal: n('raven') > 0,
    ammoMult: n('rat') ? 1.5 : 1,
    atkSpeed: n('panther') ? 0.72 : 1,
    instantExec: n('panther') > 0,
    reachMult: n('bull') ? 1.3 : 1,
    reactMult: n('frog') ? 1.6 : 1,
    cones: n('bat') > 0,
    scoreMult: 1 + 0.5 * n('hyena'),
    gunRate: n('mantis') ? 0.65 : 1,
    gunSpread: n('mantis') ? 0.65 : 1,
    lookMult: n('owl') ? 1.5 : 1,
  };
}

export const MODIFIERS = [
  { id: 'none', name: 'BUSINESS AS USUAL', desc: 'Nothing out of the ordinary.' },
  { id: 'dogs', name: 'LET THE DOGS OUT', desc: 'Dogs roam every floor.' },
  { id: 'armed', name: 'ARMED TO THE TEETH', desc: 'Most of them carry guns.' },
  { id: 'heavy', name: 'HEAVY HITTERS', desc: 'The big guys showed up.' },
  { id: 'dark', name: 'BLACKOUT', desc: 'Somebody cut the power.' },
  { id: 'crowd', name: 'FULL HOUSE', desc: 'Forty percent more guests.' },
  { id: 'edge', name: 'ON EDGE', desc: 'They react twice as fast.' },
];

// Enemy wardrobe changes every call.
export const LOOKS = {
  player: { body: '#7a4423', bodyDark: '#5a2f17', sleeve: '#efe6d2', skin: '#e2a47c', hair: '#1b1410' },
  white: { body: '#ece6da', bodyDark: '#bfb7a8', sleeve: '#ddd6c8', skin: '#e2a47c', hair: '#1b1410', pants: '#d8d0c0' },
  black: { body: '#2a2a33', bodyDark: '#17171d', sleeve: '#34343f', skin: '#e0a582', hair: '#d8c08a', pants: '#1c1c22' },
  tan: { body: '#bc9d6a', bodyDark: '#937a50', sleeve: '#ab8f5f', skin: '#a8704a', hair: '#1b1410', pants: '#7a6440' },
  track: { body: '#2a4fa8', bodyDark: '#1d3a80', sleeve: '#f0f0f0', skin: '#e8b08a', hair: '#3a2a1a', pants: '#2a4fa8' },
  hawaii: { body: '#e8405a', bodyDark: '#b02a40', sleeve: '#f0e0a0', skin: '#c88a5a', hair: '#1b1410', pants: '#f0e8d8' },
};
export const LOOK_CYCLE = ['white', 'black', 'tan', 'track', 'hawaii'];

export const CALL_TITLES = ['WRONG NUMBER', 'COLLECT CALL', 'BUSY SIGNAL', 'CALL WAITING', 'HOLD MUSIC', 'LONG DISTANCE', 'PARTY LINE', 'OFF THE HOOK', 'STATIC', 'LAST CALL', 'CROSSED WIRES', 'DEAD AIR'];

const NAMES = ['Dennis', 'Carla', 'Marty', 'Gloria', 'Vince', 'Pam', 'Lou', 'Trish', 'Ray', 'Dolores'];
const BUSINESS = ['the dry cleaners', 'Sunset Pet Grooming', 'the video rental place', "your landlord's office", 'Coastal Pest Control', 'the ice cream truck co-op', 'Palm Court Dental', 'Starlite Lanes', 'the flower shop on 5th', 'Neptune Pool Service'];
const LINES = [
  'Your order is ready for pickup.',
  'We have a pest problem. A big one. Several, actually.',
  'Some guests have overstayed their welcome.',
  'There is a mess that needs cleaning up. Bring your own supplies.',
  'A few late fees need collecting.',
  'We need you to return some tapes. All of them.',
  'The neighbors are being way too loud again.',
  'Your appointment has been moved up to tonight.',
  'We found a few problems during the inspection.',
];
const STREETS = ['Ocean Drive', 'Collins Ave', 'Flamingo Rd', 'Biscayne Blvd', 'Coral Way', 'Calle Ocho', 'Palmetto St', 'Lincoln Rd'];
const CLOSINGS = ['Dress appropriately.', "Don't be late.", 'Please be discreet.', 'Wear something nice.', "We'll know if you don't show.", 'No need to call back.', 'Bye now.'];

export function phoneMessage(rng) {
  const name = rng.pick(NAMES);
  return `Hi, this is ${name} from ${rng.pick(BUSINESS)}. ${rng.pick(LINES)} The address is ${rng.int(100, 9999)} ${rng.pick(STREETS)}. ${rng.pick(CLOSINGS)}`;
}
