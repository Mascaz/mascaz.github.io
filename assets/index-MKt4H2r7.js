(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const k of a.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&n(k)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const i={email:"maxwell_montes@yahoo.com",phone:"619-634-7772",linkedin:"https://www.linkedin.com/in/maxwell-montes-diaz/",github:"https://github.com/Mascaz",carrd:"https://maxwell-montes-diaz.carrd.co",cvUrl:"https://www.dropbox.com/scl/fi/ph6yjzz4koy7w70gxfond/Resume.pdf?rlkey=t8x5w8d5rygg1ius8x3jwavvp&st=jyump0z1&dl=0",bioParagraphs:["Video games have always been a source of happiness for me and making them is no different. I have played video games ever since I can remember and I always loved dissecting them and learning how they worked with either glitches, exploits or testing of my own. Making games feels like a natural extension of what I have done throughout my entire life and because of that I thoroughly enjoy every aspect of game development.","My programming skillset is ever growing and my game and software development tool set is ever expanding. Starting out as a simple terminal C++ application programmer in college, I quickly learned Unity development in C# only a year after barely learning to program. Shortly after that I adopted the skills necessary to model, texture, rig and animate using Maya and Photoshop.","In less than a year and a half after being introduced to C# I was asked by the San Diego District Attorney to help with a small game development project (Life Map). Only half a year after that I landed my first job as a contractor at Namazu Studios where I supported around 4 projects, and worked at Spectar as a core developer for their app which uses Unity and HoloLens to create AR tools for construction workers.","I have consistently put my heart and soul on all of the projects I have been involved in and I plan on continuing to do so wherever I work."],bioPhotos:["./assets/classic/image06.jpg","./assets/classic/image02.jpg","./assets/classic/image04.jpg"]},I=[{id:"spectar",name:"Spectar AR",shortName:"Spectar",category:"HoloLens Augmented Reality • Unity / C#",tldr:"Core developer on a Microsoft HoloLens AR application for field construction workers, focusing on spatial World Anchors and persistence.",description:"An AR app powered by the Microsoft HoloLens used as a tool for construction workers in the field. Part of the core development team mainly focused on better experiences for the user using World Anchors and spatial persistence.",youtubeEmbed:"https://www.youtube-nocookie.com/embed/UOmoHMfityY?rel=0&loop=0&controls=1",screenshots:[],links:[{label:"Microsoft Store",url:"https://www.microsoft.com/en-us/p/spectar/9n6ms7txmjr7"},{label:"Spectar.io",url:"https://www.spectar.io"}],iconSvg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"drop-squad",name:"Drop Squad",shortName:"Drop Squad",category:"Board Game Adaptation • UI & AWS GameOn",tldr:"Digital adaptation of the Drop Squad board game. Built almost all UI, AWS GameOn tournament integration, server endpoint testing, achievements, and analytics.",description:"Unreleased digital board game adaptation of Drop Squad. Responsible for almost all UI, AWS GameOn features, server endpoint testing, and core game features including achievements, social integration, and analytics.",youtubeEmbed:"https://www.youtube-nocookie.com/embed/bXH20BCfRkc?rel=0&loop=0&controls=1",screenshots:[],links:[{label:"TheDropSquad.com",url:"https://www.thedropsquad.com"},{label:"Namazu Studios",url:"https://namazustudios.com"}],iconSvg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"lazy-eye",name:"Lazy Eye Galactic Bounty Hunter",shortName:"Galactic Bounty",category:"Therapeutic Mobile Game • iOS & Android",tldr:"Amblyopia (lazy eye) therapy space shooter created in ~2 months. Built the core gameplay loop, UI layout, animations, and particle effects.",description:"Lazy eye therapy game used as a clinical/home tool to treat amblyopia (lazy eye). Small-budget game created in around 2 months. Responsible for the core gameplay loop, all UI layout, animations, and particle effects.",youtubeEmbed:"https://www.youtube-nocookie.com/embed/kJTVD1gpHHk?rel=0&loop=0&controls=1",screenshots:[],links:[{label:"App Store (iOS)",url:"https://apps.apple.com/us/app/lazy-eye-galactic-bounty-hunt/id1488547747"},{label:"Google Play (Android)",url:"https://play.google.com/store/apps/details?id=com.eyesright.amb"}],iconSvg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"life-map",name:"Life Map (San Diego DA Youth Group)",shortName:"Life Map",category:"Civic Youth Game • iOS & Android",tldr:"Volunteer mobile game developed for the San Diego District Attorney Youth Group. Programmed and implemented all UI from the Youth Group’s concept.",description:"Volunteer work done for the San Diego District Attorney Youth Group (DAYAB). Programmed and implemented all UI and interactive flows while the Youth Group led the game design and concept.",youtubeEmbed:null,screenshots:["./assets/classic/image05.png"],links:[{label:"App Store (iOS)",url:"https://apps.apple.com/us/app/life-map-dayab/id1392890874"},{label:"Google Play (Android)",url:"https://play.google.com/store/apps/details?id=com.grace.yab&hl=en_SG"}],iconSvg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"easy-ask",name:"Easy Ask / Pregunta Fácil",shortName:"Easy Ask",category:"iOS Utility App • Swift & SwiftUI",tldr:"Conversation-starter utility app built 100% in Swift and SwiftUI. Designed all color palettes, logo, and layout; localized to English and Latin American Spanish.",description:"Utility app for helping people socialize by providing curated conversation questions. Coded entirely using Swift and SwiftUI. Color palettes, logo, and app layout designed entirely by me. Localized to English and Latin American Spanish.",youtubeEmbed:null,screenshots:["./assets/classic/image01.jpg"],links:[{label:"App Store (English)",url:"https://apps.apple.com/us/app/easy-ask/id1564034736"},{label:"App Store (Español)",url:"https://apps.apple.com/mx/app/pregunta-f%C3%A1cil/id1564034736"}],iconSvg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"about-me",name:"A More Personal Look (Bio)",shortName:"About Me",category:"TextEdit Note • Personal Journey",tldr:"Personal background from college C++ terminal apps to Unity/C#, Maya 3D modeling, volunteer DA work, Namazu Studios, and Spectar.",description:i.bioParagraphs.join(`

`),youtubeEmbed:null,screenshots:i.bioPhotos,links:[{label:"LinkedIn",url:i.linkedin},{label:"GitHub (@Mascaz)",url:i.github},{label:"Download CV (PDF)",url:i.cvUrl}],iconSvg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"contact-cv",name:"Address Book & Resume",shortName:"Contact & CV",category:"Contact Details • Links & Resume",tldr:"Direct links to LinkedIn, GitHub, Email, Phone, and downloadable PDF Resume.",description:"Get in touch directly via email, phone, LinkedIn, or GitHub, or view my full CV/Resume PDF.",youtubeEmbed:null,screenshots:["./assets/classic/image03.jpg"],links:[{label:"LinkedIn Profile",url:i.linkedin},{label:"GitHub (@Mascaz)",url:i.github},{label:`Email (${i.email})`,url:`mailto:${i.email}`},{label:`Phone (${i.phone})`,url:"tel:6196347772"},{label:"View Resume / CV (PDF)",url:i.cvUrl},{label:"Original Carrd Site",url:i.carrd}],iconSvg:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ab-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a1683a"/>
          <stop offset="100%" stop-color="#5e3618"/>
        </linearGradient>
      </defs>
      <rect x="14" y="8" width="92" height="104" rx="14" fill="url(#ab-bg)" stroke="#d7a173" stroke-width="3"/>
      <rect x="24" y="14" width="76" height="92" rx="8" fill="none" stroke="#e8c39e" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="62" y="76" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="52" fill="#f7e4d0" text-anchor="middle">@</text>
    </svg>`}],g=[{id:"sumten",name:"SumTen",shortName:"SumTen",folder:"AI-Sumten",category:"Retro Pixel-Art Number Puzzle • TypeScript & Expo",iconUrl:"./assets/icons/sumten.png",playUrl:"./games/sumten/index.html",playLabel:"Play SumTen Live",tldr:"A fast-paced 16×10 number-grid puzzle where you drag rectangles over digits that sum to exactly 10 before the 120-second clock runs out. Features backwards-generated solvable boards, ×8 combo multipliers, powerups, and procedural chiptune audio.",description:"Drag a rectangle over numbers that add up to 10 to clear them, and race to clear the entire 16×10 board before the timer runs out. Every board is constructed backwards from a guaranteed full solution—including nested moves where inner tiles must be cleared first. Built as a clean monorepo separating pure TypeScript rules (@sumten/core), mock/RevenueCat commerce (@sumten/commerce), bilingual EN/ES i18n, and procedural pixel-art & chiptune SFX generators.",tech:["TypeScript","Expo / React Native","Procedural Chiptune SFX","Deterministic Solver"],screenshots:["./assets/screenshots/sumten/header.png"]},{id:"juice-sort",name:"Aesthetic Juice Sort",shortName:"Juice Sort",folder:"AI-JuiceSort",category:"Liquid Physics Puzzle • React Native Skia & WebAudio",iconUrl:"./assets/icons/juice-sort.png",playUrl:"./games/juice-sort/index.html?v=2",playLabel:"Play Juice Sort Live",tldr:"A tactile liquid-pouring puzzle game featuring custom Skia shaders, straw transfer mechanics, celebratory floppy burst animations, and interactive WebAudio sound synthesis.",description:"Pour and sort vibrant layered fruit juices across glass bottles until each bottle holds a single pure flavor. Built with Expo Router, React Native Skia for fluid glass highlights and liquid surface waves, Reanimated 4, Zustand state management, and custom multi-layered sound effects.",tech:["React Native Skia","Expo Router","Reanimated","Zustand","WebAudio"],screenshots:["./assets/screenshots/juice-sort/feature.png","./assets/screenshots/juice-sort/01.png","./assets/screenshots/juice-sort/02.png","./assets/screenshots/juice-sort/03.png","./assets/screenshots/juice-sort/04.png"]},{id:"netwatch",name:"NetWatch Anomaly Hotline",shortName:"NetWatch",folder:"AI-Creepypasta-Hotline",category:"Found-Footage Forensic Triage Horror • React & Vite",iconUrl:"./assets/icons/netwatch.png",playUrl:"./games/netwatch/index.html",playLabel:"Play NetWatch Live",tldr:'A late-1990s/mid-2000s "Doors XP" forensic desktop simulator where you inspect flash Polaroids, MiniDV camcorder frames, EVP audio, and trail-cam anomalies to triage hoaxes vs. lethal threats.',description:'Step into the night shift at the NetWatch Anomaly Hotline inside a nostalgic CRT "Doors XP Service Pack 2" operating system. Answer dispatch calls, cross-reference the Field Encyclopedia, run forensic contrast/gamma/EVP spectral filters on photorealistic 1990s/2000s found-footage evidence, and survive system intrusions.',tech:["React 18","TypeScript","Vite","Capacitor (iOS/Android)","WebAudio EVP Synth"],screenshots:["./assets/screenshots/netwatch/01.png","./assets/screenshots/netwatch/02.png","./assets/screenshots/netwatch/03.png","./assets/screenshots/netwatch/04.png"]},{id:"cat-capsules",name:"Cat Capsules",shortName:"Cat Capsules",folder:"AI-Cat-Merge",category:"2D Reactive Physics Merge Game • PixiJS v8 & Rapier2D",iconUrl:"./assets/icons/cat-capsules.png",playUrl:"./games/cat-capsules/index.html",playLabel:"Play Cat Capsules Live",tldr:"A Suika-style physics merge game powered by Rapier2D and PixiJS v8 featuring a custom 2D skeletal cat animation rig with real-time gaze tracking, impact squish deformation, and autonomous emotions.",description:"Drop and merge expressive cats inside glossy capsules! Combines a deterministic Rapier2D physics world with a custom ReactivityController and procedural 2D skeletal animation rig (head/ear/tail/paw bone hierarchy, cursor gaze tracking, spring-damper upright recovery, directional collision squish, and unlockable boutique themes & breeds).",tech:["PixiJS v8","Rapier2D WASM","TypeScript","Procedural 2D Bone Rig","Capacitor"],screenshots:["./assets/screenshots/cat-capsules/banner.png","./assets/screenshots/cat-capsules/01.png","./assets/screenshots/cat-capsules/02.png","./assets/screenshots/cat-capsules/03.png","./assets/screenshots/cat-capsules/04.png"]},{id:"redial",name:"REDIAL",shortName:"REDIAL",folder:"AI-Hotline-Miami",category:"Neon One-Hit-Kill Action Roguelike • HTML5 Canvas & Capacitor",iconUrl:"./assets/icons/redial.png",playUrl:"./games/redial/index.html",playLabel:"Play REDIAL Live",tldr:'"Do you like starting over?" A neon-soaked, top-down, one-hit-kill roguelike with procedurally generated floors, stackable animal masks, and a custom synthwave soundtrack.',description:"Every floor is generated from scratch. One hit kills you, and one hit kills them. Between calls you draft animal masks whose perks stack across the run, while floor modifiers (Blackout, Armed to the Teeth, Heavy Hitters) escalate the chaos. Features full keyboard+mouse, gamepad, and twin-stick mobile touch controls.",tech:["Vanilla ES Modules","HTML5 Canvas","Procedural Level Gen","Synthwave Jukebox","Capacitor"],screenshots:["./assets/screenshots/redial/header.png","./assets/screenshots/redial/01.png","./assets/screenshots/redial/02.png","./assets/screenshots/redial/03.png","./assets/screenshots/redial/04.png"]},{id:"wild-peak",name:"Wild Peak",shortName:"Wild Peak",folder:"Wild-Peak",category:"N64 Low-Poly 3D Survival Roguelite • Three.js & TypeScript",iconUrl:"./assets/icons/wild-peak.svg",playUrl:"./games/wild-peak/index.html",playLabel:"Play Wild Peak 3D Live",tldr:"An N64-style low-poly 3D survival roguelite built with Three.js where 100% of the geometry, vertex-colored terrain, landmarks, and audio are generated procedurally in code.",description:"Spawn in a procedurally generated low-poly wilderness with one towering landmark (Volcano, Castle, Snowy Peak, Waterfall, or Desert Pyramid) visible on the horizon. Scavenge weapons, gather Wild Whispers for permanent progression, battle scaling enemies, and climb to the summit—rendered at authentic nearest-neighbor N64 resolution.",tech:["Three.js","TypeScript","Simplex Noise Terrain","100% Procedural Assets","N64 Shader"],screenshots:[]},{id:"spelling-bee",name:"Spelling Bee Coach",shortName:"Spelling Bee",folder:"Spelling Bee tool",category:"Bilingual (EN/ES) EdTech Study & Testing App • Web Speech API",iconUrl:"./assets/icons/spelling-bee.svg",playUrl:"./games/spelling-bee/index.html",playLabel:"Launch Spelling Bee App",tldr:"A bilingual (English & Spanish) 3rd-grade Spelling Bee study, practice, and mock-testing application with spoken word pronunciation, definitions, and mastery tracking.",description:"Built for iOS/iPadOS and web browsers to help students master Spelling Bee word lists in both English and Spanish. Includes interactive practice activities, spoken TTS word & sentence prompts, custom word-list extraction, and per-word accuracy analytics.",tech:["JavaScript ES6+","Web Speech API (TTS)","Bilingual EN/ES","PWA / Responsive UI"],screenshots:[]},{id:"argon-bot",name:"Argon OANDA Bot",shortName:"Argon FX Bot",folder:"Argon-Oanda-Bot",category:"3-Layer Algorithmic FX & Gemini LLM Strategy Engine • Python",iconUrl:"./assets/icons/argon-bot.svg",playUrl:"./games/argon-bot/index.html",playLabel:"Launch Synthetic Simulator",tldr:"A 3-layer algorithmic FX trading architecture separating 1-second reflex stop-loss execution (Micro), 1-minute 8-major currency strength matrix signals (Meso), and event-driven Gemini LLM strategy optimization (Macro).",description:`Separates high-frequency data ingestion from signal generation and macro strategy rethinking so microstructure noise never causes whipsawing:
• Micro Layer (Every 1s): Bounded ring-buffer tick ingestion, hard stop-losses, profit-locking trailing stops, and drawdown circuit breakers.
• Meso Layer (Every 1m): Computes an 8-major cross-sectional currency strength matrix, session-aware regime switching (Asian Mean-Reversion vs. London/NY Breakout), and a strict 2.5× spread friction filter.
• Macro Layer (Event/Session): Uses the Google Gemini API to evaluate hypothesis performance and update strategy parameters.

(Note: The interactive portfolio demo runs on 100% synthetic/simulated data.)`,tech:["Python","OANDA REST-v20","Google Gemini API","3-Layer Quant Architecture","Synthetic Sandbox"],screenshots:[]}],O=document.getElementById("hubView"),r=document.getElementById("classicOsView"),l=document.getElementById("modernOsView"),w=document.getElementById("hubHeading"),x=document.getElementById("classicHeading"),E=document.getElementById("modernHeading"),F=document.getElementById("selectClassicBtn"),Y=document.getElementById("selectModernBtn"),c=document.getElementById("classicDesktopScreen"),d=document.getElementById("modernDesktopScreen"),D=document.getElementById("classicIconsGrid"),W=document.getElementById("classicDock"),A=document.getElementById("classicWindow"),J=document.getElementById("classicWinTitle"),X=document.getElementById("classicWinCategory"),H=document.getElementById("classicWinBody"),Z=document.getElementById("classicWinCloseBtn"),_=document.getElementById("classicWinMinBtn"),V=document.getElementById("classicWinMaxBtn"),K=document.getElementById("ios6BackBtn"),Q=document.getElementById("classicZoomOutBtn"),ee=document.getElementById("classicToModernBtn"),te=document.getElementById("classicTldrMenuBtn"),y=document.getElementById("liquidAppDrawer"),$=document.getElementById("modernIconsGrid"),G=document.getElementById("modernDock"),h=document.getElementById("modernWindow"),N=document.getElementById("modernWinIcon"),oe=document.getElementById("modernWinTitle"),se=document.getElementById("modernWinCloseBtn"),ne=document.getElementById("modernWinMinBtn"),ie=document.getElementById("modernWinMaxBtn"),ae=document.getElementById("modernMobileBackBtn"),v=document.getElementById("tabPlayBtn"),S=document.getElementById("tabInfoBtn"),re=document.getElementById("openStandaloneLink"),j=document.getElementById("panelPlay"),le=document.getElementById("panelInfo"),m=document.getElementById("gameIframe"),ce=document.getElementById("modernInfoContent"),de=document.getElementById("modernZoomOutBtn"),pe=document.getElementById("modernToClassicBtn"),me=document.getElementById("modernTldrBtn"),ue=document.getElementById("openTldrBtn"),p=document.getElementById("tldrDialog"),he=document.getElementById("tldrBodyContent");let B="hub",f=null;function b(){[c,d,r,l].forEach(e=>{e==null||e.classList.remove("vt-active-screen")})}function R(e){if(B=e,document.body.dataset.view=e,O.hidden=e!=="hub",r.hidden=e!=="classic",l.hidden=e!=="modern",e!=="modern"&&!h.hidden)m.src="about:blank";else if(e==="modern"&&f&&!h.hidden&&!j.hidden){const t=g.find(o=>o.id===f);t&&m.getAttribute("src")!==t.playUrl&&(m.src=t.playUrl)}}function U(e){e==="hub"?w==null||w.focus():e==="classic"?x==null||x.focus():e==="modern"&&(E==null||E.focus())}function u(e){if(e===B)return;const t=B;if(b(),t==="hub"&&e==="classic"?c==null||c.classList.add("vt-active-screen"):t==="hub"&&e==="modern"?d==null||d.classList.add("vt-active-screen"):t==="classic"&&e==="hub"?r==null||r.classList.add("vt-active-screen"):t==="modern"&&e==="hub"&&(l==null||l.classList.add("vt-active-screen")),!document.startViewTransition){R(e),b(),U(e);return}document.startViewTransition(()=>{b(),e==="classic"?r==null||r.classList.add("vt-active-screen"):e==="modern"?l==null||l.classList.add("vt-active-screen"):e==="hub"&&(t==="classic"&&(c==null||c.classList.add("vt-active-screen")),t==="modern"&&(d==null||d.classList.add("vt-active-screen"))),R(e)}).finished.finally(()=>{b(),U(e)})}F.addEventListener("click",()=>u("classic"));Y.addEventListener("click",()=>u("modern"));Q.addEventListener("click",()=>u("hub"));de.addEventListener("click",()=>u("hub"));ee.addEventListener("click",()=>u("modern"));pe.addEventListener("click",()=>u("classic"));function fe(){D.innerHTML="",W.innerHTML="",I.forEach(e=>{const t=document.createElement("button");t.type="button",t.className="classic-app-icon-btn",t.setAttribute("role","listitem"),t.innerHTML=`
      <div class="skeuo-icon-box" aria-hidden="true">${e.iconSvg}</div>
      <span class="classic-icon-label">${e.shortName}</span>
    `,t.addEventListener("click",()=>L(e.id)),D.appendChild(t);const o=document.createElement("button");o.type="button",o.className="classic-dock-item",o.dataset.appId=e.id,o.title=e.name,o.setAttribute("aria-label",e.name),o.innerHTML=`<div class="skeuo-icon-box" aria-hidden="true">${e.iconSvg}</div>`,o.addEventListener("click",()=>L(e.id)),W.appendChild(o)})}function L(e){const t=I.find(n=>n.id===e);if(!t)return;J.textContent=t.name,X.textContent=t.category;let o=`<div class="classic-desc-box">${t.description}</div>`;t.links&&t.links.length>0&&(o+=`<div class="classic-links-row">
      ${t.links.map(n=>`<a href="${n.url}" target="_blank" rel="noopener noreferrer" class="aqua-gel-link">${n.label} &#8599;</a>`).join("")}
    </div>`),t.youtubeEmbed&&(o+=`
      <iframe
        class="classic-video-frame"
        src="${t.youtubeEmbed}"
        title="${t.name} Video Demo"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `),t.screenshots&&t.screenshots.length>0&&(o+=`<div class="classic-screenshots-grid">
      ${t.screenshots.map((n,s)=>`<img src="${n}" alt="${t.name} screenshot ${s+1}" loading="lazy" width="480" height="320" />`).join("")}
    </div>`),H.innerHTML=o,A.hidden=!1,document.querySelectorAll(".classic-dock-item").forEach(n=>{n.classList.toggle("active",n.dataset.appId===e)})}function C(){A.hidden=!0,H.innerHTML="",document.querySelectorAll(".classic-dock-item").forEach(e=>e.classList.remove("active"))}Z.addEventListener("click",C);_.addEventListener("click",C);K.addEventListener("click",C);V.addEventListener("click",()=>{A.classList.toggle("maximized")});document.querySelectorAll("[data-classic-open]").forEach(e=>{e.addEventListener("click",()=>L(e.dataset.classicOpen))});function ge(){$.innerHTML="",G.innerHTML="",g.forEach((e,t)=>{const o=document.createElement("button");o.type="button",o.className="liquid-app-card",o.setAttribute("role","listitem");const n=t===0?'fetchpriority="high"':"";o.innerHTML=`
      <div class="liquid-icon-squircle">
        <img src="${e.iconUrl}" alt="${e.name} icon" width="72" height="72" ${n} />
      </div>
      <span class="liquid-app-name">${e.name}</span>
      <span class="liquid-app-badge">${e.id==="argon-bot"?"Synthetic Sim":"Playable"}</span>
    `,o.addEventListener("click",()=>z(e.id,"play")),$.appendChild(o);const s=document.createElement("button");s.type="button",s.className="liquid-dock-btn",s.dataset.appId=e.id,s.title=e.name,s.setAttribute("aria-label",e.name),s.innerHTML=`<img src="${e.iconUrl}" alt="${e.name}" width="42" height="42" />`,s.addEventListener("click",()=>z(e.id,"play")),G.appendChild(s)})}function P(e){const t=e==="play";v.classList.toggle("active",t),v.setAttribute("aria-selected",String(t)),S.classList.toggle("active",!t),S.setAttribute("aria-selected",String(!t)),j.hidden=!t,le.hidden=t;const o=g.find(n=>n.id===f);o&&t&&m.getAttribute("src")!==o.playUrl&&(m.src=o.playUrl)}function z(e,t="play"){const o=g.find(s=>s.id===e);if(!o)return;f=e,N.src=o.iconUrl,N.alt=`${o.name} icon`,oe.textContent=o.name,v.innerHTML=`&#9654; ${o.playLabel||"Play Live"}`,re.href=o.playUrl;let n="";o.screenshots&&o.screenshots.length>0&&(n=`
      <div>
        <h3 style="font-size:14px;margin-bottom:10px;color:#cbd5e1">Screenshots &amp; Visuals</h3>
        <div class="info-screenshots-grid">
          ${o.screenshots.map((s,a)=>`<img src="${s}" alt="${o.name} screenshot ${a+1}" loading="lazy" fetchpriority="low" width="520" height="320" />`).join("")}
        </div>
      </div>
    `),ce.innerHTML=`
    <div class="info-hero-card">
      <div style="font-size:12px;color:#93c5fd;font-weight:600">${o.category}</div>
      <h3 style="font-size:20px">${o.name} <span style="font-size:12px;font-weight:400;color:#94a3b8">(${o.folder})</span></h3>
      <p style="font-size:14px;line-height:1.65;color:#e2e8f0;white-space:pre-line">${o.description}</p>
      <div class="tech-pills">
        ${o.tech.map(s=>`<span class="tech-pill">${s}</span>`).join("")}
      </div>
    </div>
    ${n}
  `,h.hidden=!1,P(t),document.querySelectorAll(".liquid-dock-btn").forEach(s=>{s.classList.toggle("active",s.dataset.appId===e)})}function M(){h.hidden=!0,m.src="about:blank",f=null,document.querySelectorAll(".liquid-dock-btn").forEach(e=>e.classList.remove("active"))}se.addEventListener("click",M);ne.addEventListener("click",M);ae.addEventListener("click",M);ie.addEventListener("click",()=>{h.classList.toggle("maximized")});v.addEventListener("click",()=>P("play"));S.addEventListener("click",()=>P("info"));y.addEventListener("pointermove",e=>{const t=y.getBoundingClientRect(),o=(e.clientX-t.left)/t.width*100,n=(e.clientY-t.top)/t.height*100;y.style.setProperty("--mouse-x",`${o}%`),y.style.setProperty("--mouse-y",`${n}%`)});function ye(){const e=g.map(o=>`
      <li class="paper-item">
        <strong>${o.name}</strong> <span class="paper-item-meta">[${o.category}]</span><br/>
        ${o.tldr}
      </li>
    `).join(""),t=I.filter(o=>o.id!=="about-me"&&o.id!=="contact-cv").map(o=>`
      <li class="paper-item">
        <strong>${o.name}</strong> <span class="paper-item-meta">[${o.category}]</span><br/>
        ${o.tldr}
      </li>
    `).join("");he.innerHTML=`
    <section class="paper-section">
      <h3>1. New Projects (Liquid Glass Era)</h3>
      <ul class="paper-list">${e}</ul>
    </section>

    <section class="paper-section">
      <h3>2. Earlier Commercial &amp; Studio Work (Classic Era)</h3>
      <ul class="paper-list">${t}</ul>
    </section>

    <section class="paper-section">
      <h3>3. A More Personal Look</h3>
      <p>${i.bioParagraphs.join(" ")}</p>
    </section>

    <section class="paper-section">
      <h3>4. Direct Links &amp; Contact</h3>
      <div class="paper-links">
        <a href="${i.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        <a href="${i.github}" target="_blank" rel="noopener">GitHub (@Mascaz)</a>
        <a href="mailto:${i.email}">${i.email}</a>
        <a href="tel:6196347772">${i.phone}</a>
        <a href="${i.cvUrl}" target="_blank" rel="noopener">Resume / CV (PDF)</a>
        <a href="${i.carrd}" target="_blank" rel="noopener">Legacy Carrd Site</a>
      </div>
    </section>
  `}function T(){typeof p.showModal=="function"&&p.showModal()}ue.addEventListener("click",T);te.addEventListener("click",T);me.addEventListener("click",T);"closedBy"in HTMLDialogElement.prototype||p.addEventListener("click",e=>{if(e.target!==p)return;const t=p.getBoundingClientRect();t.top<=e.clientY&&e.clientY<=t.top+t.height&&t.left<=e.clientX&&e.clientX<=t.left+t.width||p.close()});function q(){const t=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),o=document.getElementById("classicClock"),n=document.getElementById("modernClock");o&&(o.textContent=t),n&&(n.textContent=t)}fe();ge();ye();q();setInterval(q,15e3);
