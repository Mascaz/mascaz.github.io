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
 * Era 2: Modern Liquid Glass Projects (8 local repositories)
 * Styled after Apple's Liquid Glass design system (visionOS / macOS Tahoe / iOS 26)
 */
export const MODERN_APPS = [
  {
    id: 'sumten',
    name: 'SumTen',
    shortName: 'SumTen',
    folder: 'AI-Sumten',
    category: 'Retro Pixel-Art Number Puzzle • TypeScript & Expo',
    iconUrl: './assets/icons/sumten.png',
    playUrl: './games/sumten/index.html',
    playLabel: 'Play SumTen Live',
    tldr: 'A fast-paced 16×10 number-grid puzzle where you drag rectangles over digits that sum to exactly 10 before the 120-second clock runs out. Features backwards-generated solvable boards, ×8 combo multipliers, powerups, and procedural chiptune audio.',
    description:
      'Drag a rectangle over numbers that add up to 10 to clear them, and race to clear the entire 16×10 board before the timer runs out. Every board is constructed backwards from a guaranteed full solution—including nested moves where inner tiles must be cleared first. Built as a clean monorepo separating pure TypeScript rules (@sumten/core), mock/RevenueCat commerce (@sumten/commerce), bilingual EN/ES i18n, and procedural pixel-art & chiptune SFX generators.',
    tech: ['TypeScript', 'Expo / React Native', 'Procedural Chiptune SFX', 'Deterministic Solver'],
    screenshots: ['./assets/screenshots/sumten/header.png']
  },
  {
    id: 'juice-sort',
    name: 'Aesthetic Juice Sort',
    shortName: 'Juice Sort',
    folder: 'AI-JuiceSort',
    category: 'Liquid Physics Puzzle • React Native Skia & WebAudio',
    iconUrl: './assets/icons/juice-sort.png',
    playUrl: './games/juice-sort/index.html?v=2',
    playLabel: 'Play Juice Sort Live',
    tldr: 'A tactile liquid-pouring puzzle game featuring custom Skia shaders, straw transfer mechanics, celebratory floppy burst animations, and interactive WebAudio sound synthesis.',
    description:
      'Pour and sort vibrant layered fruit juices across glass bottles until each bottle holds a single pure flavor. Built with Expo Router, React Native Skia for fluid glass highlights and liquid surface waves, Reanimated 4, Zustand state management, and custom multi-layered sound effects.',
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
    category: 'Found-Footage Forensic Triage Horror • React & Vite',
    iconUrl: './assets/icons/netwatch.png',
    playUrl: './games/netwatch/index.html',
    playLabel: 'Play NetWatch Live',
    tldr: 'A late-1990s/mid-2000s "Doors XP" forensic desktop simulator where you inspect flash Polaroids, MiniDV camcorder frames, EVP audio, and trail-cam anomalies to triage hoaxes vs. lethal threats.',
    description:
      'Step into the night shift at the NetWatch Anomaly Hotline inside a nostalgic CRT "Doors XP Service Pack 2" operating system. Answer dispatch calls, cross-reference the Field Encyclopedia, run forensic contrast/gamma/EVP spectral filters on photorealistic 1990s/2000s found-footage evidence, and survive system intrusions.',
    tech: ['React 18', 'TypeScript', 'Vite', 'Capacitor (iOS/Android)', 'WebAudio EVP Synth'],
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
    category: 'N64 Low-Poly 3D Survival Roguelite • Three.js & TypeScript',
    iconUrl: './assets/icons/wild-peak.svg',
    playUrl: './games/wild-peak/index.html',
    playLabel: 'Play Wild Peak 3D Live',
    tldr: 'An N64-style low-poly 3D survival roguelite built with Three.js where 100% of the geometry, vertex-colored terrain, landmarks, and audio are generated procedurally in code.',
    description:
      'Spawn in a procedurally generated low-poly wilderness with one towering landmark (Volcano, Castle, Snowy Peak, Waterfall, or Desert Pyramid) visible on the horizon. Scavenge weapons, gather Wild Whispers for permanent progression, battle scaling enemies, and climb to the summit—rendered at authentic nearest-neighbor N64 resolution.',
    tech: ['Three.js', 'TypeScript', 'Simplex Noise Terrain', '100% Procedural Assets', 'N64 Shader'],
    screenshots: []
  },
  {
    id: 'spelling-bee',
    name: 'Spelling Bee Coach',
    shortName: 'Spelling Bee',
    folder: 'Spelling Bee tool',
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
    folder: 'Argon-Oanda-Bot',
    category: '3-Layer Algorithmic FX & Gemini LLM Strategy Engine • Python',
    iconUrl: './assets/icons/argon-bot.svg',
    playUrl: './games/argon-bot/index.html',
    playLabel: 'Launch Synthetic Simulator',
    tldr: 'A 3-layer algorithmic FX trading architecture separating 1-second reflex stop-loss execution (Micro), 1-minute 8-major currency strength matrix signals (Meso), and event-driven Gemini LLM strategy optimization (Macro).',
    description:
      'Separates high-frequency data ingestion from signal generation and macro strategy rethinking so microstructure noise never causes whipsawing:\n• Micro Layer (Every 1s): Bounded ring-buffer tick ingestion, hard stop-losses, profit-locking trailing stops, and drawdown circuit breakers.\n• Meso Layer (Every 1m): Computes an 8-major cross-sectional currency strength matrix, session-aware regime switching (Asian Mean-Reversion vs. London/NY Breakout), and a strict 2.5× spread friction filter.\n• Macro Layer (Event/Session): Uses the Google Gemini API to evaluate hypothesis performance and update strategy parameters.\n\n(Note: The interactive portfolio demo runs on 100% synthetic/simulated data.)',
    tech: ['Python', 'OANDA REST-v20', 'Google Gemini API', '3-Layer Quant Architecture', 'Synthetic Sandbox'],
    screenshots: []
  }
];
