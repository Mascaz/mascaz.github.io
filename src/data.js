export const PROFILE = {
  name: 'Maxwell Montes Diaz',
  title: 'Game & Software Developer',
  headline: "Maxwell's Professional Life",
  avatar: './assets/classic/image03.jpg',
  email: 'maxwell_montes@yahoo.com',
  phone: '619-634-7772',
  linkedin: 'https://www.linkedin.com/in/maxwell-montes-diaz/',
  github: 'https://github.com/Mascaz',
  carrd: 'https://maxwell-montes-diaz.carrd.co',
  cvUrl: 'https://www.dropbox.com/scl/fi/ph6yjzz4koy7w70gxfond/Resume.pdf?rlkey=t8x5w8d5rygg1ius8x3jwavvp&st=jyump0z1&dl=0',
  bioParagraphs: [
    'Video games have always been a source of happiness for me and making them is no different. I have played video games ever since I can remember and I always loved dissecting them and learning how they worked with either glitches, exploits or testing of my own. Making games feels like a natural extension of what I have done throughout my entire life and because of that I thoroughly enjoy every aspect of game development.',
    'My programming skillset is ever growing and my game and software development tool set is ever expanding. Starting out as a simple terminal C++ application programmer in college, I quickly learned Unity development in C# only a year after barely learning to program. Shortly after that I adopted the skills necessary to model, texture, rig and animate using Maya and Photoshop.',
    'In less than a year and a half after being introduced to C# I was asked by the San Diego District Attorney to help with a small game development project (Life Map). Only half a year after that I landed my first job as a contractor at Namazu Studios where I supported around 4 projects, and worked at Spectar as a core developer for their app which uses Unity and HoloLens to create AR tools for construction workers.',
    'I have consistently put my heart and soul on all of the projects I have been involved in and I plan on continuing to do so wherever I work.'
  ],
  bioPhotos: [
    './assets/classic/image06.jpg',
    './assets/classic/image02.jpg',
    './assets/classic/image04.jpg'
  ]
};

/**
 * Era 1: Classic Skeuomorphic Projects (from maxwell-montes-diaz.carrd.co)
 * Styled after Mac OS X 10.0–10.9 (Aqua / Brushed Metal) & iOS 1–6
 */
export const CLASSIC_APPS = [
  {
    id: 'spectar',
    name: 'Spectar AR',
    shortName: 'Spectar',
    category: 'HoloLens Augmented Reality • Unity / C#',
    tldr: 'Core developer on a Microsoft HoloLens AR application for field construction workers, focusing on spatial World Anchors and persistence.',
    description:
      'An AR app powered by the Microsoft HoloLens used as a tool for construction workers in the field. Part of the core development team mainly focused on better experiences for the user using World Anchors and spatial persistence.',
    youtubeEmbed: 'https://www.youtube-nocookie.com/embed/UOmoHMfityY?rel=0&loop=0&controls=1',
    screenshots: [],
    links: [
      { label: 'Microsoft Store', url: 'https://www.microsoft.com/en-us/p/spectar/9n6ms7txmjr7' },
      { label: 'Spectar.io', url: 'https://www.spectar.io' }
    ],
    iconSvg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4facfe"/>
          <stop offset="50%" stop-color="#0061ff"/>
          <stop offset="100%" stop-color="#002b7f"/>
        </linearGradient>
        <linearGradient id="sp-visor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#b8f2ff"/>
          <stop offset="50%" stop-color="#00d2ff"/>
          <stop offset="100%" stop-color="#0052a3"/>
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="108" height="108" rx="24" fill="url(#sp-bg)" stroke="#a3d8ff" stroke-width="3"/>
      <!-- 3D Wireframe Cube Hologram -->
      <polygon points="60,22 90,38 90,72 60,88 30,72 30,38" fill="rgba(0,255,255,0.18)" stroke="#70ffff" stroke-width="2.5"/>
      <line x1="60" y1="22" x2="60" y2="55" stroke="#70ffff" stroke-width="2"/>
      <line x1="60" y1="55" x2="90" y2="38" stroke="#70ffff" stroke-width="2"/>
      <line x1="60" y1="55" x2="30" y2="38" stroke="#70ffff" stroke-width="2"/>
      <!-- HoloLens Visor Silhouette -->
      <path d="M18,62 C18,46 102,46 102,62 C102,78 86,86 60,80 C34,86 18,78 18,62 Z" fill="url(#sp-visor)" stroke="#ffffff" stroke-width="2.5"/>
    </svg>`
  },
  {
    id: 'drop-squad',
    name: 'Drop Squad',
    shortName: 'Drop Squad',
    category: 'Board Game Adaptation • UI & AWS GameOn',
    tldr: 'Digital adaptation of the Drop Squad board game. Built almost all UI, AWS GameOn tournament integration, server endpoint testing, achievements, and analytics.',
    description:
      'Unreleased digital board game adaptation of Drop Squad. Responsible for almost all UI, AWS GameOn features, server endpoint testing, and core game features including achievements, social integration, and analytics.',
    youtubeEmbed: 'https://www.youtube-nocookie.com/embed/bXH20BCfRkc?rel=0&loop=0&controls=1',
    screenshots: [],
    links: [
      { label: 'TheDropSquad.com', url: 'https://www.thedropsquad.com' },
      { label: 'Namazu Studios', url: 'https://namazustudios.com' }
    ],
    iconSvg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ds-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ff9944"/>
          <stop offset="55%" stop-color="#d63816"/>
          <stop offset="100%" stop-color="#6b0f04"/>
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="108" height="108" rx="24" fill="url(#ds-bg)" stroke="#ffcc99" stroke-width="3"/>
      <!-- Parachute / Drop Pod Emblem -->
      <path d="M28,52 C28,26 92,26 92,52 Z" fill="#fff3d6" stroke="#4a1205" stroke-width="2.5"/>
      <line x1="34" y1="52" x2="52" y2="76" stroke="#fff3d6" stroke-width="2.5"/>
      <line x1="60" y1="52" x2="60" y2="76" stroke="#fff3d6" stroke-width="2.5"/>
      <line x1="86" y1="52" x2="68" y2="76" stroke="#fff3d6" stroke-width="2.5"/>
      <rect x="46" y="74" width="28" height="22" rx="6" fill="#ffd15c" stroke="#4a1205" stroke-width="2.5"/>
    </svg>`
  },
  {
    id: 'lazy-eye',
    name: 'Lazy Eye Galactic Bounty Hunter',
    shortName: 'Galactic Bounty',
    category: 'Therapeutic Mobile Game • iOS & Android',
    tldr: 'Amblyopia (lazy eye) therapy space shooter created in ~2 months. Built the core gameplay loop, UI layout, animations, and particle effects.',
    description:
      'Lazy eye therapy game used as a clinical/home tool to treat amblyopia (lazy eye). Small-budget game created in around 2 months. Responsible for the core gameplay loop, all UI layout, animations, and particle effects.',
    youtubeEmbed: 'https://www.youtube-nocookie.com/embed/kJTVD1gpHHk?rel=0&loop=0&controls=1',
    screenshots: [],
    links: [
      { label: 'App Store (iOS)', url: 'https://apps.apple.com/us/app/lazy-eye-galactic-bounty-hunt/id1488547747' },
      { label: 'Google Play (Android)', url: 'https://play.google.com/store/apps/details?id=com.eyesright.amb' }
    ],
    iconSvg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="le-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5d26c1"/>
          <stop offset="50%" stop-color="#30106b"/>
          <stop offset="100%" stop-color="#11042b"/>
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="108" height="108" rx="24" fill="url(#le-bg)" stroke="#b388ff" stroke-width="3"/>
      <!-- Retro Spaceship + Red/Cyan Dichoptic Rings -->
      <circle cx="52" cy="60" r="26" fill="none" stroke="#ff3366" stroke-width="4" opacity="0.85"/>
      <circle cx="68" cy="60" r="26" fill="none" stroke="#00e5ff" stroke-width="4" opacity="0.85"/>
      <polygon points="60,26 80,82 60,72 40,82" fill="#ffd54f" stroke="#ffffff" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'life-map',
    name: 'Life Map (San Diego DA Youth Group)',
    shortName: 'Life Map',
    category: 'Civic Youth Game • iOS & Android',
    tldr: 'Volunteer mobile game developed for the San Diego District Attorney Youth Group. Programmed and implemented all UI from the Youth Group’s concept.',
    description:
      'Volunteer work done for the San Diego District Attorney Youth Group (DAYAB). Programmed and implemented all UI and interactive flows while the Youth Group led the game design and concept.',
    youtubeEmbed: null,
    screenshots: ['./assets/classic/image05.png'],
    links: [
      { label: 'App Store (iOS)', url: 'https://apps.apple.com/us/app/life-map-dayab/id1392890874' },
      { label: 'Google Play (Android)', url: 'https://play.google.com/store/apps/details?id=com.grace.yab&hl=en_SG' }
    ],
    iconSvg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lm-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4cd964"/>
          <stop offset="55%" stop-color="#1f9e38"/>
          <stop offset="100%" stop-color="#0b5219"/>
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="108" height="108" rx="24" fill="url(#lm-bg)" stroke="#a8ffba" stroke-width="3"/>
      <!-- Skeuomorphic Compass / Map Pin -->
      <circle cx="60" cy="60" r="34" fill="#fffdf5" stroke="#d4af37" stroke-width="5"/>
      <polygon points="60,30 70,60 60,54 50,60" fill="#e53935"/>
      <polygon points="60,90 70,60 60,66 50,60" fill="#3949ab"/>
      <circle cx="60" cy="60" r="5" fill="#d4af37"/>
    </svg>`
  },
  {
    id: 'easy-ask',
    name: 'Easy Ask / Pregunta Fácil',
    shortName: 'Easy Ask',
    category: 'iOS Utility App • Swift & SwiftUI',
    tldr: 'Conversation-starter utility app built 100% in Swift and SwiftUI. Designed all color palettes, logo, and layout; localized to English and Latin American Spanish.',
    description:
      'Utility app for helping people socialize by providing curated conversation questions. Coded entirely using Swift and SwiftUI. Color palettes, logo, and app layout designed entirely by me. Localized to English and Latin American Spanish.',
    youtubeEmbed: null,
    screenshots: ['./assets/classic/image01.jpg'],
    links: [
      { label: 'App Store (English)', url: 'https://apps.apple.com/us/app/easy-ask/id1564034736' },
      { label: 'App Store (Español)', url: 'https://apps.apple.com/mx/app/pregunta-f%C3%A1cil/id1564034736' }
    ],
    iconSvg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ea-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ff6b9d"/>
          <stop offset="55%" stop-color="#c92a68"/>
          <stop offset="100%" stop-color="#690a30"/>
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="108" height="108" rx="24" fill="url(#ea-bg)" stroke="#ffb3cf" stroke-width="3"/>
      <!-- Glossy Chat Bubbles -->
      <path d="M26,46 C26,31 74,31 74,46 C74,56 62,62 46,62 L32,72 L34,60 C29,57 26,52 26,46 Z" fill="#ffffff" opacity="0.95"/>
      <path d="M48,60 C48,47 94,47 94,60 C94,69 88,74 82,76 L85,88 L70,78 C56,78 48,71 48,60 Z" fill="#ffe082" stroke="#ffffff" stroke-width="2"/>
      <text x="69" y="67" font-family="Georgia, serif" font-weight="bold" font-size="22" fill="#880e4f" text-anchor="middle">?</text>
    </svg>`
  },
  {
    id: 'about-me',
    name: 'A More Personal Look (Bio)',
    shortName: 'About Me',
    category: 'TextEdit Note • Personal Journey',
    tldr: 'Personal background from college C++ terminal apps to Unity/C#, Maya 3D modeling, volunteer DA work, Namazu Studios, and Spectar.',
    description: PROFILE.bioParagraphs.join('\n\n'),
    youtubeEmbed: null,
    screenshots: PROFILE.bioPhotos,
    links: [
      { label: 'LinkedIn', url: PROFILE.linkedin },
      { label: 'GitHub (@Mascaz)', url: PROFILE.github },
      { label: 'Download CV (PDF)', url: PROFILE.cvUrl }
    ],
    iconSvg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="np-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff9b0"/>
          <stop offset="100%" stop-color="#f2d65b"/>
        </linearGradient>
      </defs>
      <rect x="14" y="8" width="92" height="104" rx="14" fill="url(#np-bg)" stroke="#b58d2b" stroke-width="3"/>
      <rect x="14" y="8" width="92" height="24" rx="10" fill="#6b3a1e"/>
      <line x1="28" y1="48" x2="92" y2="48" stroke="#d4b44a" stroke-width="2"/>
      <line x1="28" y1="64" x2="92" y2="64" stroke="#d4b44a" stroke-width="2"/>
      <line x1="28" y1="80" x2="92" y2="80" stroke="#d4b44a" stroke-width="2"/>
      <line x1="28" y1="96" x2="74" y2="96" stroke="#d4b44a" stroke-width="2"/>
      <line x1="34" y1="32" x2="34" y2="112" stroke="#e57373" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'contact-cv',
    name: 'Address Book & Resume',
    shortName: 'Contact & CV',
    category: 'Contact Details • Links & Resume',
    tldr: 'Direct links to LinkedIn, GitHub, Email, Phone, and downloadable PDF Resume.',
    description:
      'Get in touch directly via email, phone, LinkedIn, or GitHub, or view my full CV/Resume PDF.',
    youtubeEmbed: null,
    screenshots: ['./assets/classic/image03.jpg'],
    links: [
      { label: 'LinkedIn Profile', url: PROFILE.linkedin },
      { label: 'GitHub (@Mascaz)', url: PROFILE.github },
      { label: `Email (${PROFILE.email})`, url: `mailto:${PROFILE.email}` },
      { label: `Phone (${PROFILE.phone})`, url: 'tel:6196347772' },
      { label: 'View Resume / CV (PDF)', url: PROFILE.cvUrl },
      { label: 'Original Carrd Site', url: PROFILE.carrd }
    ],
    iconSvg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ab-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a1683a"/>
          <stop offset="100%" stop-color="#5e3618"/>
        </linearGradient>
      </defs>
      <rect x="14" y="8" width="92" height="104" rx="14" fill="url(#ab-bg)" stroke="#d7a173" stroke-width="3"/>
      <rect x="24" y="14" width="76" height="92" rx="8" fill="none" stroke="#e8c39e" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="62" y="76" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="52" fill="#f7e4d0" text-anchor="middle">@</text>
    </svg>`
  }
];

/**
 * Era 2: Modern Liquid Glass Projects (Playable Games, Official Demos & Interactive Apps)
 * Styled after Apple's Liquid Glass design system (visionOS / macOS Tahoe / iOS 26)
 *
 * Standing Exclusion Note: Do NOT add "RelaisPalais Rework" or empty scaffolds ("Fototecateca")
 * when scanning /Users/max/Local/Projects for future portfolio updates (see AGENTS.md).
 */
export const MODERN_APPS = [
  {
    id: 'world-strikers',
    name: 'World Strikers',
    shortName: 'World Strikers',
    folder: 'AI-Mario-Strikers',
    group: 'games',
    badge: 'Playable Demo',
    category: 'Arcade Cage Soccer • TypeScript, Canvas & WebRTC',
    iconUrl: './assets/icons/world-strikers.png',
    playUrl: './games/world-strikers/index.html',
    playLabel: 'Play World Strikers Demo',
    tldr: 'High-voltage walled-cage arcade soccer featuring 20,000V electric perimeter fences, X-ray shock skeletons, cultural chaos items, charged Super Shots, and a 9-track festival EDM soundtrack. (Hosted build is the official Spain vs. France Web Demo.)',
    description:
      'An arcade walled-cage soccer brawler inspired by Mario Strikers! Smash rivals into the 20,000V electric perimeter fence, unleash cultural chaos items (baguettes, bratwursts, espressos, siesta pillows), and charge slow-motion Super Shots.\n\n• Web Playable Demo: Features an exhibition showdown locking 🇪🇸 Spain vs. 🇫🇷 France, showcasing core cage physics, AI tactics, Super Shots, and post-match MVP box scores (while reserving full 4-nation rosters, custom rules, and 4-digit WebRTC online lobbies for the full release).',
    tech: ['TypeScript', 'HTML5 Canvas', 'Custom Match Sim', '9-Track EDM Synth OST', 'Capacitor'],
    screenshots: [
      './assets/screenshots/world-strikers/01-gameplay-super-shot.png',
      './assets/screenshots/world-strikers/02-electric-fence-shock.png',
      './assets/screenshots/world-strikers/06-web-demo-main-menu.png',
      './assets/screenshots/world-strikers/05-box-score-and-demo-banner.png'
    ]
  },
  {
    id: 'ai-pikmin',
    name: 'Pikmin: PNF-404 Sim',
    shortName: 'PNF-404 Sim',
    folder: 'AI-Pikmin',
    group: 'games',
    badge: 'Playable',
    category: 'Top-Down Squad RTS & 4P Co-op • TypeScript & PeerJS',
    iconUrl: './assets/icons/ai-pikmin.png',
    playUrl: './games/ai-pikmin/index.html',
    playLabel: 'Play Pikmin Sim Live',
    tldr: 'A top-down Pikmin 1 squad-tactics recreation across 5 sectors, 15 ship modules, boss encounters, Time Attack speed drills, 3 endings, and serverless 1–4 player WebRTC co-op.',
    description:
      'Help Captain Olimar pass his late-night Hocotate Freight Deep-Space Salvage Certification! Command Red, Yellow, and Blue squads with whistle/throw micro-controls across 5 distinct planetary sectors to recover 15 ship parts within a 30-cycle quota. Includes Normal Story Mode, 15-Cycle Executive Evaluation (Hard Mode), 4-minute Time Attack drills, and PeerJS WebRTC 1–4 player online co-op.',
    tech: ['TypeScript', 'HTML5 Canvas', 'Squad AI & Pathing', 'PeerJS WebRTC Co-op', 'Procedural Audio'],
    screenshots: [
      './assets/screenshots/ai-pikmin/screenshot-1-gameplay-squad.png',
      './assets/screenshots/ai-pikmin/screenshot-2-bosses-and-enemies.png',
      './assets/screenshots/ai-pikmin/screenshot-3-sim-story-and-sectors.png'
    ]
  },
  {
    id: 'sumten',
    name: 'SumTen',
    shortName: 'SumTen',
    folder: 'AI-Sumten • Sumten',
    group: 'games',
    badge: 'Playable',
    category: 'Retro Pixel-Art Number Puzzle • TypeScript & Expo',
    iconUrl: './assets/icons/sumten.png',
    playUrl: './games/sumten/index.html',
    playLabel: 'Play SumTen Live',
    tldr: 'A fast-paced 16×10 number-grid puzzle where you drag rectangles over digits that sum to exactly 10 before the 120-second clock runs out. Features backwards-generated solvable boards, ×8 combo multipliers, powerups, and procedural chiptune audio.',
    description:
      'Drag a rectangle over numbers that add up to 10 to clear them, and race to clear the entire 16×10 board before the timer runs out. Every board is constructed backwards from a guaranteed full solution—including nested moves where inner tiles must be cleared first. Built as a clean monorepo separating pure TypeScript rules (@sumten/core), mock/RevenueCat commerce (@sumten/commerce), bilingual EN/ES i18n, and procedural pixel-art & chiptune SFX generators.\n\n• Evolution / Version History: Evolved from an earlier native Swift & SpriteKit Xcode build for iOS and macOS (Sumten) featuring StoreKit 2 IAP, HapticsManager, and seeded deterministic board validation before expanding into the cross-platform TypeScript/Expo monorepo.',
    tech: ['TypeScript', 'Expo / React Native', 'Swift / SpriteKit Origin', 'Procedural Chiptune SFX', 'Deterministic Solver'],
    screenshots: [
      './assets/screenshots/sumten/header.png',
      './assets/screenshots/sumten/ipad_1_gameplay.png',
      './assets/screenshots/sumten/ipad_2_combo_and_hint.png',
      './assets/screenshots/sumten/ipad_4_board_clear_shop.png'
    ]
  },
  {
    id: 'juice-sort',
    name: 'Aesthetic Juice Sort',
    shortName: 'Juice Sort',
    folder: 'AI-JuiceSort • AI-Argon-JuiceSort',
    group: 'games',
    badge: 'Playable',
    category: 'Liquid Physics Puzzle • React Native Skia & WebAudio',
    iconUrl: './assets/icons/juice-sort.png',
    playUrl: './games/juice-sort/index.html?v=2',
    playLabel: 'Play Juice Sort Live',
    tldr: 'A tactile liquid-pouring puzzle game featuring custom Skia shaders, straw transfer mechanics, celebratory floppy burst animations, and interactive WebAudio sound synthesis.',
    description:
      'Pour and sort vibrant layered fruit juices across glass bottles until each bottle holds a single pure flavor. Built with Expo Router, React Native Skia for fluid glass highlights and liquid surface waves, Reanimated 4, Zustand state management, and custom multi-layered sound effects.\n\n• Evolution / Version History: Evolved from an earlier Frutiger Aero / Y2K web prototype (AI-Argon-JuiceSort) featuring procedural 1–3 loop SVG twisty-straws, synthesized ASMR straw-slurp harmonics, and silent Dynamic Difficulty Adjustment (DDA).',
    tech: ['React Native Skia', 'Expo Router', 'Reanimated', 'Zustand', 'WebAudio'],
    screenshots: [
      './assets/screenshots/juice-sort/feature.png',
      './assets/screenshots/juice-sort/01.png',
      './assets/screenshots/juice-sort/02.png',
      './assets/screenshots/juice-sort/03.png',
      './assets/screenshots/juice-sort/04.png'
    ]
  },
  {
    id: 'netwatch',
    name: 'NetWatch Anomaly Hotline',
    shortName: 'NetWatch',
    folder: 'AI-Creepypasta-Hotline',
    group: 'games',
    badge: 'Playable Demo',
    category: 'Found-Footage Forensic Triage Horror • React & Vite',
    iconUrl: './assets/icons/netwatch.png',
    playUrl: './games/netwatch/index.html?v=demo',
    playLabel: 'Play NetWatch Demo',
    tldr: 'A late-1990s/mid-2000s "Doors XP" forensic desktop simulator where you inspect flash Polaroids, MiniDV camcorder frames, EVP audio, and trail-cam anomalies to triage hoaxes vs. lethal threats. (Hosted build is the official Browser Demo.)',
    description:
      'Step into the night shift at the NetWatch Anomaly Hotline inside a nostalgic CRT "Doors XP Service Pack 2" operating system. Answer dispatch calls, cross-reference the Field Encyclopedia, run forensic contrast/gamma/EVP spectral filters on photorealistic 1990s/2000s found-footage evidence, and survive system intrusions.\n\n• Hosted Build: Official itch.io Browser Demo edition.',
    tech: ['React 18', 'TypeScript', 'Vite', 'Capacitor & Electron', 'WebAudio EVP Synth'],
    screenshots: [
      './assets/screenshots/netwatch/01.png',
      './assets/screenshots/netwatch/02.png',
      './assets/screenshots/netwatch/03.png',
      './assets/screenshots/netwatch/04.png'
    ]
  },
  {
    id: 'cat-capsules',
    name: 'Cat Capsules',
    shortName: 'Cat Capsules',
    folder: 'AI-Cat-Merge',
    group: 'games',
    badge: 'Playable',
    category: '2D Reactive Physics Merge Game • PixiJS v8 & Rapier2D',
    iconUrl: './assets/icons/cat-capsules.png',
    playUrl: './games/cat-capsules/index.html',
    playLabel: 'Play Cat Capsules Live',
    tldr: 'A Suika-style physics merge game powered by Rapier2D and PixiJS v8 featuring a custom 2D skeletal cat animation rig with real-time gaze tracking, impact squish deformation, and autonomous emotions.',
    description:
      'Drop and merge expressive cats inside glossy capsules! Combines a deterministic Rapier2D physics world with a custom ReactivityController and procedural 2D skeletal animation rig (head/ear/tail/paw bone hierarchy, cursor gaze tracking, spring-damper upright recovery, directional collision squish, and unlockable boutique themes & breeds).',
    tech: ['PixiJS v8', 'Rapier2D WASM', 'TypeScript', 'Procedural 2D Bone Rig', 'Capacitor'],
    screenshots: [
      './assets/screenshots/cat-capsules/banner.png',
      './assets/screenshots/cat-capsules/01.png',
      './assets/screenshots/cat-capsules/02.png',
      './assets/screenshots/cat-capsules/03.png',
      './assets/screenshots/cat-capsules/04.png'
    ]
  },
  {
    id: 'redial',
    name: 'REDIAL',
    shortName: 'REDIAL',
    folder: 'AI-Hotline-Miami',
    group: 'games',
    badge: 'Playable',
    category: 'Neon One-Hit-Kill Action Roguelike • HTML5 Canvas & Capacitor',
    iconUrl: './assets/icons/redial.png',
    playUrl: './games/redial/index.html',
    playLabel: 'Play REDIAL Live',
    tldr: '"Do you like starting over?" A neon-soaked, top-down, one-hit-kill roguelike with procedurally generated floors, stackable animal masks, and a custom synthwave soundtrack.',
    description:
      'Every floor is generated from scratch. One hit kills you, and one hit kills them. Between calls you draft animal masks whose perks stack across the run, while floor modifiers (Blackout, Armed to the Teeth, Heavy Hitters) escalate the chaos. Features full keyboard+mouse, gamepad, and twin-stick mobile touch controls.',
    tech: ['Vanilla ES Modules', 'HTML5 Canvas', 'Procedural Level Gen', 'Synthwave Jukebox', 'Capacitor'],
    screenshots: [
      './assets/screenshots/redial/header.png',
      './assets/screenshots/redial/01.png',
      './assets/screenshots/redial/02.png',
      './assets/screenshots/redial/03.png',
      './assets/screenshots/redial/04.png'
    ]
  },
  {
    id: 'wild-peak',
    name: 'Wild Peak',
    shortName: 'Wild Peak',
    folder: 'Wild-Peak',
    group: 'games',
    badge: 'Playable',
    category: 'N64 Low-Poly 3D Survival Roguelite • Three.js & TypeScript',
    iconUrl: './assets/icons/wild-peak.svg',
    playUrl: './games/wild-peak/index.html?v=2',
    playLabel: 'Play Wild Peak 3D Live',
    tldr: 'An N64-style low-poly 3D survival roguelite built with Three.js where 100% of the geometry, vertex-colored terrain, landmarks, IK character poses, splitscreen race mode, and chiptune audio are generated procedurally in code.',
    description:
      'Spawn in a procedurally generated low-poly wilderness with towering landmarks (Volcano, Castle, Snowy Peak, Waterfall, or Desert Pyramid) on the horizon. Scavenge weapons, unlock cosmetics & permanent upgrades in the Hub, battle scaling enemies, or race head-to-head in local splitscreen—rendered with a custom N64 shader and procedural synth sequencer.',
    tech: ['Three.js', 'TypeScript', 'Procedural IK & Landmarks', 'Splitscreen Mode', 'N64 Shader'],
    screenshots: []
  },
  {
    id: 'your-rooms',
    name: 'Your Rooms',
    shortName: 'Your Rooms',
    folder: 'Your Rooms • Rooms',
    group: 'games',
    badge: '3D Spatial Sim',
    category: 'visionOS 26 Spatial Backrooms Horror • Swift, RealityKit & ARKit',
    iconUrl: './assets/icons/your-rooms.svg',
    playUrl: './games/your-rooms/index.html',
    playLabel: 'Launch 3D Room-to-Backrooms Sim',
    tldr: 'A visionOS 26 Full Space psychological horror experience where ARKit Scene Reconstruction meshes your real walls, floor, and ceiling and glitches them panel-by-panel into an endless Euclidean Backrooms labyrinth with 60Hz spatial audio.',
    description:
      'Built natively for Apple Vision Pro (visionOS 26) using ARKit SceneReconstructionProvider, PlaneDetectionProvider, and WorldTrackingProvider. Starts in your actual physical room before corrupting detected wall/floor/ceiling patches into yellowed mono-wallpaper, damp carpet, and buzzing fluorescent panels—opening non-Euclidean RealityKit PortalComponent doorways into procedural corridors across 4 escalating anomalous phases.\n\n• Interactive Web Preview & Precursor: Includes an interactive Three.js 3D portal & corruption simulator using the game’s actual textures and 60Hz spatial audio stems, uniting Your Rooms with its earlier Reality Composer Pro spatial prototype (Rooms).',
    tech: ['visionOS 26', 'Swift & RealityKit', 'ARKit Scene Mesh', 'PortalComponent', 'Spatial Audio'],
    screenshots: [
      './games/your-rooms/assets/wallpaper_yellow.png',
      './games/your-rooms/assets/carpet_damp.png',
      './games/your-rooms/assets/ceiling_tiles.png',
      './games/your-rooms/assets/door_exit.png'
    ]
  },
  {
    id: 'human-climb',
    name: 'Human Climb Pictures',
    shortName: 'Human Climb',
    folder: 'Unity / Human Climb Pictures',
    group: 'games',
    badge: '3D AR Sandbox',
    category: 'AR Tabletop Ragdoll Co-op • Unity 6, AR Foundation & Netcode',
    iconUrl: './assets/icons/human-climb.svg',
    playUrl: './games/human-climb/index.html',
    playLabel: 'Launch 3D Island & Ragdoll Sandbox',
    tldr: 'A Unity 6 multiplayer AR party climber that converts real-world desk photos and depth maps into climbable 3D tabletop islands for 1–4 networked Active Ragdoll climbers ("Bob") with physics reach-and-grab hands.',
    description:
      'Snap a photo of your desk or room clutter and turn it into a Miniature AR Mountain! Built in Unity 6 (URP) with AR Foundation 6, Netcode for GameObjects, and Unity Relay:\n• Photo-to-Mountain Pipeline: DepthEstimator & TerrainMeshBuilder convert monocular depth maps into vertex-colored 3D terrain while IslandDecorator auto-places Start Pads, Summit Beacons, BouncyPads, MovingPlatforms, SpinningBars, and Physics Toybox props.\n• Active Ragdoll ("Bob"): ConfigurableJoint muscle torque balancing paired with independent left/right GrabHand reach-and-latch climbing.\n\n(Interactive Web Sandbox reconstructs the actual sample heightmaps—or any photo you upload—in real-time 3D.)',
    tech: ['Unity 6 (C#)', 'AR Foundation 6', 'Netcode for GameObjects', 'Active Ragdoll Physics', 'Depth-to-Mesh Gen'],
    screenshots: [
      './games/human-climb/assets/Sample1_GrandCanyonDesk.png',
      './games/human-climb/assets/Sample3_GiantTabletop.png',
      './games/human-climb/assets/Sample2_SpiralPeak.png'
    ]
  },
  {
    id: 'roblox-pipeline',
    name: 'Roblox MCP Factory & Aether Strike',
    shortName: 'Aether Strike',
    folder: 'Roblox',
    group: 'games',
    badge: 'MCP + RNG Sim',
    category: 'Autonomous 5-Phase Roblox Studio MCP Pipeline • Luau & Open Cloud',
    iconUrl: './assets/icons/roblox-pipeline.png',
    playUrl: './games/roblox-pipeline/index.html',
    playLabel: 'Explore MCP Pipeline & RNG Sim',
    tldr: 'An autonomous 5-phase Antigravity + Roblox Studio MCP production pipeline (Trend Research → Luau Greybox → 3D/Audio Polish → Multi-Agent Playtest QA → Store Kit Packaging) showcased alongside its flagship experience, Aether Strike RNG.',
    description:
      'Combines an automated 5-phase Roblox Studio MCP development pipeline with an interactive slice of its flagship Luau experience, Aether Strike RNG:\n• 5-Phase Autonomous Pipeline: Automates genre/retention research, strict Server-Authoritative Luau greyboxing, procedural 3D asset & PBR material generation, multi-agent playtest & RemoteEvent security auditing, and complete 512×512 / 1920×1080 Store Kit packaging.\n• Aether Strike RNG Sim: Test the active-skill Overcharge Anvil timing ring, roll across 7 rarity tiers (up to 1-in-12,500 Celestial), equip your 6×4 Relic Altar & 3D Sanctum Pedestals, and inspect the generated Game Passes, DevProducts, and Badges.',
    tech: ['Luau (Roblox)', 'Roblox Studio MCP', 'Open Cloud API', '5-Phase Agentic Pipeline', 'Store Kit Automation'],
    screenshots: [
      './games/roblox-pipeline/assets/hero_banner.png',
      './games/roblox-pipeline/assets/pipeline_infographic.png',
      './games/roblox-pipeline/assets/experience_thumbnail_1920x1080.png'
    ]
  },
  {
    id: 'ai-airbrush',
    name: 'AI Airbrush',
    shortName: 'AI Airbrush',
    folder: 'AI-Airbrush',
    group: 'apps',
    badge: 'GPU Shader Studio',
    category: 'iOS Metal & Vision Portrait Retouch Studio • SwiftUI, Metal & WebGL',
    iconUrl: './assets/icons/ai-airbrush.png',
    playUrl: './games/ai-airbrush/index.html',
    playLabel: 'Launch WebGL Retouch Studio',
    tldr: 'An on-device iOS portrait studio built with SwiftUI, Apple Vision 76-point face landmarks, CoreImage, and custom Metal shaders for frequency-preserved skin retouching, 3D normal-field relighting, and cumulative UV Liquify sculpting.',
    description:
      'Processes high-resolution portraits 100% on-device with zero cloud uploads. On iOS, FaceAnalyzer combines VNDetectFaceLandmarksRequest (76-point facial contour & eye/lip exclusion masks) and VNGeneratePersonSegmentationRequest with custom Metal compute/fragment kernels (Shaders.metal) for bilateral skin smoothing, 3D directional studio relighting across 6 presets, and cumulative RGFloat UV displacement Liquify brushes (Push, Slim, Plump, Swirl, Restore).\n\n• Interactive WebGL Port: Ports the Metal fragment shaders directly to WebGL so you can drag the 3D light orb, paint UV Liquify warps, apply film LUTs, upload custom photos, and compare via a live Before/After split slider.',
    tech: ['SwiftUI & Metal', 'Apple Vision Framework', 'CoreImage', 'WebGL GLSL Port', 'UV Liquify Displacement'],
    screenshots: ['./games/ai-airbrush/default-portrait.jpg']
  },
  {
    id: 'kids-video-gen',
    name: "Kids' Bilingual Video Engine",
    shortName: 'Kids Video Gen',
    folder: 'Generate Youtube Videos For Kids',
    group: 'apps',
    badge: 'Interactive Studio',
    category: 'Automated Story-JSON to Bilingual MP4 Pipeline • Python, FFmpeg & TTS',
    iconUrl: './assets/icons/kids-video-gen.svg',
    playUrl: './games/kids-video-gen/index.html',
    playLabel: 'Launch Story-to-Video Studio',
    tldr: 'An automated Python + FFmpeg + Neural TTS production pipeline that compiles declarative bilingual (English & Spanish) story.json scripts into 1080p read-along children’s videos with Ken Burns camera motion and synchronized vocabulary cards.',
    description:
      'Turns structured story.json manifests into broadcast-ready 1080p bilingual educational episodes in a single command. The pipeline synthesizes paired English and Latin American Spanish voiceovers, animates storybook illustrations with smooth Ken Burns zoom/pan filtergraphs, overlays phonetic lower-third vocabulary callouts, and muxes gentle background music—showcased here with the rendered Reading Spanish: Colors & Shapes episode synchronized to its live JSON scene timeline.',
    tech: ['Python', 'FFmpeg Filtergraphs', 'Bilingual EN/ES TTS', 'Declarative Story JSON', '1080p MP4 Pipeline'],
    screenshots: [
      './games/kids-video-gen/assets/teacher_scene.png',
      './games/kids-video-gen/assets/page_rainbow.png',
      './games/kids-video-gen/assets/page_shapes.png'
    ]
  },
  {
    id: 'game-localization',
    name: 'Game-to-Spanish Localization Pipeline',
    shortName: 'ES Localization',
    folder: 'Localization Pipeline',
    group: 'apps',
    badge: 'Interactive Pipeline',
    category: 'Automated Game Dialogue Localization & QA Engine • Python & Gemini',
    iconUrl: './assets/icons/game-localization.svg',
    playUrl: './games/game-localization/index.html',
    playLabel: 'Launch Localization Workbench',
    tldr: 'A general-purpose game-to-Spanish localization pipeline and QA workbench that translates dialogue JSON/CSV bundles into natural Latin American Spanish while strictly preserving inline engine control tags, variables, and dialogue-box line limits.',
    description:
      'An end-to-end localization engineering pipeline built to translate any narrative or dialogue-heavy game into Latin American Spanish (es-419) without breaking runtime scripting:\n• Control-Tag & Placeholder Shielding: Freezes inline engine control sequences (color switches %c, wait/shake triggers %ws, hard line breaks %n, and dynamic {player} variables) prior to batch translation and enforces 100% token parity in automated QA.\n• Glossary & Register Consistency: Locks recurring terminology, UI labels, and per-speaker formality (tú vs. usted) across string tables.\n• Live Overflow & Typewriter Preview: Audits ~22% Spanish text expansion against per-line character budgets and simulates real-time dialogue rendering with typewriter cadence and screen-shake triggers.',
    tech: ['Python', 'LLM Batch Translation', 'Inline Control-Tag QA', 'es-419 Glossary Lock', 'Dialogue Box Validator'],
    screenshots: []
  },
  {
    id: 'emoji-shield',
    name: 'EmojiShield Studio',
    shortName: 'EmojiShield',
    folder: 'EmojiShield',
    group: 'apps',
    badge: 'Interactive App',
    category: 'On-Device AI Auto-Censor Studio • ONNX Runtime Web WASM',
    iconUrl: './assets/icons/emoji-shield.png',
    playUrl: './games/emoji-shield/index.html',
    playLabel: 'Launch EmojiShield Studio',
    tldr: 'A 100% client-side privacy studio that runs YOLOv8 (320n.onnx) locally in the browser via ONNX Runtime Web WASM to detect sensitive regions or faces and composite customizable emoji stickers in batches—zero server uploads.',
    description:
      'Processes photos entirely on-device so private images never leave your browser. Uses ONNX Runtime Web SIMD WebAssembly to run a YOLOv8 detector locally, pairs detections with a customizable pool of 24 crisp vector emoji stickers, and includes an interactive Touch-Up canvas editor for manual sticker placement, scaling, rotation, and batch export.',
    tech: ['React', 'TypeScript', 'ONNX Runtime Web (WASM)', 'YOLOv8 320n', 'Tailwind CSS'],
    screenshots: []
  },
  {
    id: 'med-study-guide',
    name: '2026 NCLEX-RN Study Hub',
    shortName: 'NCLEX QBank',
    folder: 'Med Study Guide',
    group: 'apps',
    badge: 'Interactive App',
    category: 'Medical EdTech & Offline QBank • 1,786 Clinical Questions',
    iconUrl: './assets/icons/med-study-guide.svg',
    playUrl: './games/med-study-guide/index.html',
    playLabel: 'Launch NCLEX QBank (1,786 Qs)',
    tldr: 'A self-contained, 100% offline-capable 2026 NCLEX-RN & Next Generation NCLEX (NGN) practice application packing 1,786 categorized clinical questions, step-by-step rationales, bookmarking, and a Normal Lab Values reference sidebar.',
    description:
      'Aligned with the April 2026 – March 2029 NCSBN NCLEX-RN Test Plan. Students can filter across 18 nursing categories (Prioritization/Delegation, Pharmacology, NGN Unfolding Case Studies, SATA, ABGs, Emergency Triage, Maternity, Pediatrics, and more), review full rationales for every option, reference Normal Lab Values & Therapeutic Drug Levels on the fly, and persist scores locally.',
    tech: ['Self-Contained HTML5', 'Vanilla JS', 'Light/Dark Adaptive UI', '1,786-Item Clinical QBank'],
    screenshots: []
  },
  {
    id: 'dropshipping-made-easy',
    name: 'Dropshipping Made Easy',
    shortName: 'Dropship Guide',
    folder: 'Dropshipping-Made-Easy',
    group: 'apps',
    badge: 'Interactive App',
    category: 'Bilingual E-Commerce Launchpad & Profit Simulator • React & Gemini',
    iconUrl: './assets/icons/dropshipping-made-easy.svg',
    playUrl: './games/dropshipping-made-easy/index.html',
    playLabel: 'Launch Dropshipping Playbook',
    tldr: 'A plain-English & Spanish interactive e-commerce launchpad featuring curated product niches, real-margin calculators, store copy & brand builders, TikTok/Reels viral script generators, and printable launch blueprints.',
    description:
      'Guides beginners step-by-step through launching an organic or paid-ads e-commerce store in English or Español without hype or hidden traps. Includes a live unit-economics profit simulator, supplier vetting checklists, brand & boutique copywriter tools, short-form video hook generators, and shareable URL state. (Portfolio build runs 100% client-side using its built-in smart curation fallback with zero API keys exposed.)',
    tech: ['React 19', 'Next.js Architecture', 'TypeScript', 'Bilingual EN/ES', 'Tailwind CSS'],
    screenshots: []
  },
  {
    id: 'doctor-calendar',
    name: 'Montes Orthopedics Portal',
    shortName: 'Doctor Calendar',
    folder: 'Doctor Calendar',
    group: 'apps',
    badge: 'Interactive App',
    category: 'Bilingual Medical Booking & Clinic Roster • Accessible Web UI',
    iconUrl: './assets/icons/doctor-calendar.svg',
    playUrl: './games/doctor-calendar/index.html',
    playLabel: 'Launch Clinic Scheduler',
    tldr: 'A bilingual (English & Español) orthopedic surgery appointment booking wizard and staff roster portal featuring insurance filtering, interactive time-slot scheduling, deferred form validation, and container-responsive admin tables.',
    description:
      'Designed for an orthopedic & sports medicine clinic with instant EN/ES language switching, PPO/EPO/Medicare insurance verification badges, body-region visit triage, real-time calendar slot picking, and a toggleable Clinic Admin Roster view. Built with modern accessible web primitives (native <dialog>, :user-invalid validation, @container queries, and 100% synthetic demo data).',
    tech: ['HTML5 <dialog>', 'CSS @container', 'Bilingual EN/ES', 'Tailwind CSS', 'Synthetic Mock Data'],
    screenshots: []
  },
  {
    id: 'ai-classes',
    name: '1-on-1 AI Coaching Portal',
    shortName: 'AI Classes',
    folder: 'AI Classes Website',
    group: 'apps',
    badge: 'Interactive Site',
    category: 'Bilingual Dual-Track Coaching Website & Print Kit • HTML/CSS/JS',
    iconUrl: './assets/icons/ai-classes.svg',
    playUrl: './games/ai-classes/index.html',
    playLabel: 'Explore Coaching Portal',
    tldr: 'A dual-edition bilingual (EN/ES) coaching website for 1-on-1 practical AI, app, and game development lessons—tailored separately for Busy Professionals & Daily Life vs. Students & Career Starters, complete with printable business cards.',
    description:
      'Splits visitors into two tailored curricula: Edition 1 (Daily Life & Busy Pros—automating workflows and saving hours each week) and Edition 2 (Students & Career Starters—building real apps, games, and standout portfolios). Features instant EN/ES localization, curriculum accordions, social-share discount flows, and a print-ready bilingual card studio.',
    tech: ['Semantic HTML5', 'Custom Editorial CSS', 'Bilingual EN/ES i18n', 'Print-Ready Card Studio'],
    links: [
      { label: 'Live Coaching Site', url: 'https://mascaz.github.io/AI-Lessons-Website/' }
    ],
    screenshots: [
      './games/ai-classes/assets/images/og-main.jpg',
      './games/ai-classes/assets/cards/adults-front-en.png',
      './games/ai-classes/assets/cards/youth-front-en.png'
    ]
  },
  {
    id: 'spelling-bee',
    name: 'Spelling Bee Coach',
    shortName: 'Spelling Bee',
    folder: 'Spelling Bee tool',
    group: 'apps',
    badge: 'Interactive App',
    category: 'Bilingual (EN/ES) EdTech Study & Testing App • Web Speech API',
    iconUrl: './assets/icons/spelling-bee.svg',
    playUrl: './games/spelling-bee/index.html',
    playLabel: 'Launch Spelling Bee App',
    tldr: 'A bilingual (English & Spanish) 3rd-grade Spelling Bee study, practice, and mock-testing application with spoken word pronunciation, definitions, and mastery tracking.',
    description:
      'Built for iOS/iPadOS and web browsers to help students master Spelling Bee word lists in both English and Spanish. Includes interactive practice activities, spoken TTS word & sentence prompts, custom word-list extraction, and per-word accuracy analytics.',
    tech: ['JavaScript ES6+', 'Web Speech API (TTS)', 'Bilingual EN/ES', 'PWA / Responsive UI'],
    screenshots: []
  },
  {
    id: 'argon-bot',
    name: 'Argon OANDA Bot',
    shortName: 'Argon FX Bot',
    folder: 'Argon-Oanda-Bot • Gemini-Oanda-Bot',
    group: 'apps',
    badge: 'Synthetic Sim',
    category: '3-Layer Algorithmic FX & Gemini LLM Strategy Engine • Python',
    iconUrl: './assets/icons/argon-bot.svg',
    playUrl: './games/argon-bot/index.html',
    playLabel: 'Launch Synthetic Simulator',
    tldr: 'A 3-layer algorithmic FX trading architecture separating 1-second reflex stop-loss execution (Micro), 1-minute 8-major currency strength matrix signals (Meso), and event-driven Gemini LLM strategy optimization (Macro).',
    description:
      'Separates high-frequency data ingestion from signal generation and macro strategy rethinking so microstructure noise never causes whipsawing:\n• Micro Layer (Every 1s): Bounded ring-buffer tick ingestion, hard stop-losses, profit-locking trailing stops, and drawdown circuit breakers.\n• Meso Layer (Every 1m): Computes an 8-major cross-sectional currency strength matrix, session-aware regime switching (Asian Mean-Reversion vs. London/NY Breakout), and a strict 2.5× spread friction filter.\n• Macro Layer (Event/Session): Uses the Google Gemini API to evaluate hypothesis performance and update strategy parameters.\n\n• Evolution / Version History: Evolved from an initial single-loop Python + Gemini FX analyzer prototype (Gemini-Oanda-Bot) into the decoupled 3-layer Micro/Meso/Macro architecture.\n\n(Note: The interactive portfolio demo runs on 100% synthetic/simulated data.)',
    tech: ['Python', 'OANDA REST-v20', 'Google Gemini API', '3-Layer Quant Architecture', 'Synthetic Sandbox'],
    screenshots: []
  }
];
