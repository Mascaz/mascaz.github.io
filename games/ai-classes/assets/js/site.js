/* ==========================================================================
   Maxwell Montes Diaz — Practical AI Coaching (EN / ES)
   Central Configuration, Bilingual Dictionary & Interactive Widgets
   ========================================================================== */

const SITE_CONFIG = {
  instructorName: "Maxwell Montes Diaz",
  whatsappNumber: "16196347772",       // Digits only with country code for wa.me
  smsNumber: "+16196347772",           // E.164 format for sms: links
  phoneDisplay: "+1 (619) 634-7772",   // Human-readable display
  email: "maxwell_montes@yahoo.com",
  portfolioUrl: "https://mascaz.github.io",
  linkedinUrl: "https://www.linkedin.com/in/maxwell-montes-diaz/",
  githubUrl: "https://github.com/Mascaz",
  photos: {
    adults: [
      "/assets/images/adults-03-loft.jpg",
      "/assets/images/adults-04-outdoor.jpg"
    ],
    youth: [
      "/assets/images/youth-05-santorini.jpg",
      "/assets/images/youth-01-paris.jpg",
      "/assets/images/youth-02-positano.jpg"
    ]
  }
};

/* --------------------------------------------------------------------------
   Bilingual Copy Dictionary (English & Spanish)
   -------------------------------------------------------------------------- */
const I18N = {
  en: {
    // Global Header & Navigation
    nav_role: "1-on-1 AI & Game/App Coach",
    nav_adults_pill: "Daily Life & Busy Pros",
    nav_youth_pill: "Students & Career Starters",
    nav_home_pill: "All Tracks",

    // Contact CTA Labels
    cta_whatsapp_audit: "WhatsApp Maxwell — Free 15-Min AI Intro Call",
    cta_whatsapp_short: "WhatsApp (Free 15-Min Intro)",
    cta_sms_label: "Or text my number (SMS only):",
    cta_email_label: "Or email me (slowest reply)",
    cta_sticky_sms: "SMS Text",

    // Pre-filled Messages (WhatsApp / SMS / Email)
    msg_adults_audit: "Hi Maxwell! I scanned your card and saw the Daily Life & Work AI website. I'd love to book the Free 15-Minute AI Audit / Intro Call to see how AI can save me time on the computer.",
    msg_adults_book: "Hi Maxwell! I'd like to book a 1-on-1 AI session ($50 Zoom / or ask about in-person rates) to help me automate my daily computer tasks.",
    msg_youth_audit: "Hey Maxwell! I checked out your Students & Career Starters AI website. I'd love to do the Free 15-Minute AI Intro Call to talk about building games/apps and leveling up my study tools!",
    msg_youth_book: "Hey Maxwell! I want to book a 1-on-1 session ($50 Zoom / or ask about in-person) to learn how to build my own games, apps, and AI study workflows.",
    msg_gateway_audit: "Hi Maxwell! I found your AI Classes website and would love to schedule the Free 15-Minute AI Intro Call.",
    email_subject: "1-on-1 AI Classes / Free 15-Min Intro Call",

    // Shared Credibility Showcase
    cred_eyebrow: "WHO IS TEACHING YOU? • REAL INDUSTRY ENGINEERING",
    cred_title: "Learn From a Senior Engineer Building at 500M+ Scale & On the AI Frontier",
    cred_subtitle: "To keep my day job private, I don't name my current employer on this page—but here are 3 real-world facts about what I build and why my classes cut straight to what works:",
    stat1_num: "500M+",
    stat1_title: "Downloads on a Single App I Engineer",
    stat1_desc: "I engineer production code for a global consumer hit with over 500 million downloads—more than the entire population of the United States, Canada, and Mexico combined. At that scale, every feature has to work seamlessly for hundreds of millions of everyday people.",
    stat2_num: "Months → 1 Day",
    stat2_title: "Building with the Latest Frontier AI Models",
    stat2_desc: "As part of my daily engineering work, I use the latest frontier AI models to build, test, and ship in a single day what used to take months of work. I don't teach generic internet tips—I teach the exact AI workflows transforming top tech teams right now.",
    stat3_num: "Microsoft AR",
    stat3_title: "Helped Build the Microsoft Campus with AR Glasses",
    stat3_desc: "I worked on the Augmented Reality app that helped construction workers physically build one of the Microsoft Campus buildings using AR glasses—projecting 3D engineering blueprints directly onto real-world job sites.",
    exp1_title: "Ex-Microsoft & Enterprise AR",
    exp1_desc: "Past software engineering experience at Microsoft alongside building massive-scale consumer apps and hands-free Augmented Reality systems.",
    exp2_title: "5 Games Shipped (+5 in the Works)",
    exp2_desc: "Shipped 5 games across iOS, Android, and AR—and currently building 5 new games in record time using modern frontier AI workflows.",
    exp3_title: "Plain Language, Zero Tech Ego",
    exp3_desc: "Great engineers make complex tools feel effortless. Every class is 100% tailored to your pace, your computer/phone, and your real daily life.",

    // Shared Pricing & 20% Social Share Discount Section
    price_eyebrow: "SIMPLE, TRANSPARENT PRICING • RISK-FREE INTRO",
    price_heading: "Start With a Free 15-Minute AI Audit—Then Learn 1-on-1 at Your Pace",
    price_sub: "No subscriptions or confusing packages. Book a single personalized session whenever you need it.",
    audit_card_badge: "STEP 1 • 100% FREE",
    audit_card_title: "Free 15-Minute AI Audit / Intro Call",
    audit_card_desc: "Not sure what AI can actually do for you? Tell me what eats up your week (or what you want to build), and in 15 minutes we'll map out a custom game plan—completely free.",
    audit_bullet1: "Zero pressure—see if my teaching style clicks with you first",
    audit_bullet2: "Find out the exact 2–3 AI tools worth using (and which ones to ignore)",
    audit_bullet3: "Fastest response via WhatsApp (or SMS text)",
    audit_card_btn: "Message on WhatsApp for Free 15-Min Call",

    session_card_badge: "1-ON-1 PERSONALIZED CLASS",
    session_card_title: "Live 1-on-1 Coaching Session",
    session_price_regular: "$50 USD",
    session_price_discount_badge: "$40 USD with 20% Social Share Discount!",
    session_format_zoom: "1-on-1 Online via Zoom (Fastest to schedule & lowest rate: $50 USD)",
    session_format_inperson: "In-Person Local Session available at a slightly higher rate (ask on WhatsApp!)",
    session_bullet_custom: "We share screens and set everything up live on your own tasks, files, or project",
    session_bullet_discount: "20% OFF ($40 USD) if you feel like you learned a lot and share my site on social media after the session (and if possible, show off what you learned to do or built)!",
    session_card_btn: "Book a 1-on-1 Session on WhatsApp",

    share_box_title: "🎁 Love Your Session? Share & Get 20% Off ($40 USD)",
    share_box_desc: "If you finish our class feeling like you learned a ton, share this website on your social media or group chats—and if possible, share the cool thing you learned to do or built—to get 20% off your session!",
    share_btn_native: "Share Page",
    share_btn_wa: "Share on WhatsApp",
    share_btn_copy: "Copy Link",
    share_copied_toast: "Copied link!",

    // ========================================================================
    // ADULTS PAGE (/adults/) — Daily Life, Busy People & Professionals
    // ========================================================================
    adults_eyebrow: "FOR BUSY PEOPLE, PROFESSIONALS & EVERYDAY LIFE • 1-ON-1 PRACTICAL AI COACHING",
    adults_hero_title: "Spend Less Time at the Computer. <span class='highlight-adults'>More Time Living.</span>",
    adults_hero_lead: "You don't need to become a 'tech person.' In one personalized 1-on-1 session, I'll show you how to hand off your tedious writing, email/file clutter, spreadsheets, and simple custom software to AI—so you can close your laptop hours earlier.",
    adults_offer_strong: "Free 15-Minute AI Audit / Intro Call Included",
    adults_offer_span: "Send me a quick WhatsApp message first. We'll chat for 15 minutes for free to see exactly how much computer time AI can save you.",
    adults_photo_badge: "Your 1-on-1 Coach",
    adults_photo_bio: "Senior Software Engineer (500M+ download app, Microsoft Campus AR & daily frontier AI builder) teaching practical, jargon-free AI.",

    adults_usecases_eyebrow: "WHAT WE'LL AUTOMATE TOGETHER",
    adults_usecases_title: "6 Everyday Ways AI Gets You Away From Your Desk",
    adults_usecases_sub: "Forget complicated tech tutorials. We focus strictly on real tasks that eat up your mornings, evenings, and weekends.",

    acard1_title: "1. Effortless Writing & Tough Replies",
    acard1_desc: "Draft warm client emails, firm boundary messages, proposals, letters, or announcements in 30 seconds—sounding 100% like yourself, not a robot.",
    acard1_before: "Before: 40 mins staring at a blank screen rewriting one careful email",
    acard1_after: "After: 45 seconds speaking your thoughts out loud into a polished draft",

    acard2_title: "2. Email, File & Paperwork Triage",
    acard2_desc: "Drop in 50-page PDFs, contracts, insurance policies, HOA rules, medical documents, or messy folders and get a plain-English summary + action checklist.",
    acard2_before: "Before: 2 hours reading fine print and hunting for lost attachments",
    acard2_after: "After: Instant 5-bullet summary and exact answers with page numbers",

    acard3_title: "3. Simple Custom Software & Trackers",
    acard3_desc: "Need a custom budget tracker, small-business calculator, client organizer, or clean spreadsheet without learning Excel formulas? Build it just by describing it.",
    acard3_before: "Before: Paying for clunky apps or fighting broken spreadsheet formulas",
    acard3_after: "After: Your own simple tool built to fit your exact workflow in minutes",

    acard4_title: "4. Voice-First 'Hands-Free' Workflows",
    acard4_desc: "Why sit at a desk at all? Learn to talk to AI by voice while walking the dog or driving so your emails, to-do lists, and plans are done before you get home.",
    acard4_before: "Before: Chained to your keyboard catching up on admin after dinner",
    acard4_after: "After: Knocking out your admin hands-free on a 15-minute walk outside",

    acard5_title: "5. Household, Travel & Quote Comparisons",
    acard5_desc: "Compare 3 contractor or insurance quotes side-by-side, plan a complete family trip itinerary, or snap a photo of your fridge for a weekly meal plan & grocery list.",
    acard5_before: "Before: 15 browser tabs open all weekend trying to compare options",
    acard5_after: "After: One clean comparison table and ready-to-use checklist in 2 minutes",

    acard6_title: "6. Meeting, Call & Voice-Note Summaries",
    acard6_desc: "Turn rambling meetings, community board calls, or long voice notes into organized notes, decisions, and ready-to-send follow-up messages automatically.",
    acard6_before: "Before: Scrambling to take notes and forgetting follow-up items",
    acard6_after: "After: Automatic summary and next steps ready the second the call ends",

    acard_cta: "Ask Maxwell to teach me this →",

    // Adults Interactive Time-Back Calculator
    calc_eyebrow: "INTERACTIVE TIME-BACK ESTIMATOR",
    calc_title: "How Many Hours Will You Reclaim Each Week?",
    calc_sub: "Tap the computer chores that drain your week right now. We'll focus our 1-on-1 session on eliminating them:",
    calc_item1: "Writing & replying to emails / messages (saves ~3 hrs/wk)",
    calc_item2: "Reading long PDFs, contracts & paperwork (saves ~2 hrs/wk)",
    calc_item3: "Organizing files, spreadsheets & budgets (saves ~2.5 hrs/wk)",
    calc_item4: "Building a simple custom app or business tracker (saves ~3 hrs/wk)",
    calc_item5: "Doing tasks by voice while walking/driving (saves ~2 hrs/wk)",
    calc_item6: "Planning trips, meals & comparing quotes (saves ~1.5 hrs/wk)",
    calc_result_label: "Estimated screen time you'll get back:",
    calc_result_unit: "hours / week (~{yearly} hrs/year!)",
    calc_cta_btn: "Send My Selected Tasks to Maxwell on WhatsApp",

    // ========================================================================
    // YOUTH PAGE (/youth/) — Students, Creators & Career Starters
    // ========================================================================
    youth_eyebrow: "FOR STUDENTS, CREATORS & CAREER STARTERS • AI, GAME DEV & APPS",
    youth_hero_title: "Skip the Busywork. <span class='highlight-youth'>Build Games, Apps & Your Future.</span>",
    youth_hero_lead: "Don't just use AI to get by—use it to learn 3x faster, crush homework & research, and build your own real video games and apps so you can focus 100% on what you actually want to do.",
    youth_offer_strong: "Free 15-Minute AI & Game/App Intro Call",
    youth_offer_span: "Hit me up on WhatsApp first. We'll hop on a free 15-min call to talk about what you want to build, study, or launch.",
    youth_photo_badge: "Game & AI Dev Mentor",
    youth_photo_bio: "500M+ download app engineer, Microsoft Campus AR dev, frontier AI builder & creator of 5 shipped games (+5 in the works).",

    youth_studio_eyebrow: "INTERACTIVE WORKFLOW PREVIEW",
    youth_studio_title: "Pick What You Want to Master or Build First",
    youth_studio_sub: "Tap a track below to see what we can build together in a single 1-on-1 session:",
    ytab_games: "🎮 Create Your Own Games",
    ytab_study: "🧠 24/7 Study & Exam Tools",
    ytab_research: "🔍 Homework & Deep Research",
    ytab_apps: "⚡ Build Real Apps & Tools",
    ytab_slides: "🎤 Standout Presentations",

    ycards_eyebrow: "6 UNFAIR ADVANTAGES FOR STUDENTS, CREATORS & CAREER STARTERS",
    ycards_title: "Everything School Doesn't Teach You About Using AI Like a Builder",
    ycards_sub: "Whether you want to finish schoolwork in half the time or launch your own game or startup, you'll learn workflows 99% of students don't know exist.",

    ycard1_title: "1. Create Your Own Video Games",
    ycard1_desc: "Learn directly from a professional game developer (5 shipped games + 5 in the works). Use AI + game engines to design gameplay loops, code mechanics, generate assets, and play your own game with friends.",
    ycard1_before: "Old way: Stuck watching 40-hour tutorials without finishing a playable level",
    ycard1_after: "With AI + Pro Mentoring: Prototype a real playable game you designed yourself",

    ycard2_title: "2. Custom Study Tools & 24/7 Exam Tutor",
    ycard2_desc: "Turn messy lecture slides, textbook PDFs, or class recordings into interactive quizzes, flashcards, and a Socratic AI tutor that explains hard subjects using analogies you actually care about.",
    ycard2_before: "Old way: Re-reading highlighters at 1:00 AM hoping it sticks",
    ycard2_after: "With AI: A custom interactive tutor trained on your exact class syllabus",

    ycard3_title: "3. Smart Homework & Hallucination-Proof Research",
    ycard3_desc: "Investigate complex topics, find real verifiable academic sources (never fake AI citations), structure essays, and debug math/code step-by-step while actually understanding the material.",
    ycard3_before: "Old way: Drowning in 30 search tabs or getting burned by bad AI answers",
    ycard3_after: "With AI: Verified research outlines, real citations, and crystal-clear explanations",

    ycard4_title: "4. 'Vibe Code' Real Web & Mobile Apps",
    ycard4_desc: "Have an idea for a study tool, club platform, side hustle, or utility app? Build and deploy a working app in an afternoon—even if you've never written a line of code before.",
    ycard4_before: "Old way: Great app ideas sitting in your Notes app forever",
    ycard4_after: "With AI: A live link to a real working app on your phone to show friends or colleges",

    ycard5_title: "5. Next-Level Presentations & Pitch Decks",
    ycard5_desc: "Go from a blank screen to a killer visual storyline, slide structure, data charts, and confident speaker notes in 15 minutes so your projects look like a pro agency made them.",
    ycard5_before: "Old way: Spending all Sunday fighting bullet points and ugly slide templates",
    ycard5_after: "With AI: Compelling slides, visuals, and a tight script ready in minutes",

    ycard6_title: "6. Future-Proof Portfolio & Career Launchpad",
    ycard6_desc: "Build your own personal portfolio site, prep for internships or college interviews with realistic AI voice mock-interviews, and free up your schedule to chase your real passions.",
    ycard6_before: "Old way: Generic resume that looks identical to every other applicant",
    ycard6_after: "With AI: A live portfolio of real games, apps, and projects you built",

    ycard_cta: "Learn this 1-on-1 with Maxwell →",

    // ========================================================================
    // GATEWAY PAGE (/)
    // ========================================================================
    gate_eyebrow: "MAXWELL MONTES DIAZ • 1-ON-1 PRACTICAL AI COACHING",
    gate_title: "Real-World AI Coaching—Tailored to Your Goals & Daily Life",
    gate_sub: "Choose your track below. Both include a Free 15-Minute AI Intro Call, 1-on-1 Zoom or In-Person coaching, and a 20% discount when you share on social media.",
    gate_adults_badge: "EDITION 1 • FOR BUSY PEOPLE, WORK & EVERYDAY LIFE",
    gate_adults_title: "Spend Less Time at the Computer. More Time Living.",
    gate_adults_desc: "Learn to hand off writing, email & file management, spreadsheets, voice-first tasks, and simple software creation to AI—explained in plain, jargon-free language.",
    gate_adults_btn: "Explore Daily Life & Work Edition →",
    gate_youth_badge: "EDITION 2 • FOR STUDENTS, CREATORS & CAREER STARTERS",
    gate_youth_title: "Build Your Own Games, Apps & Future Skills.",
    gate_youth_desc: "Crush homework & deep research, build custom 24/7 study tools, design standout presentations, and create your own real video games & apps.",
    gate_youth_btn: "Explore Students & Career Starters Edition →",

    hero_pill_price: "$50 USD ($40 w/ Share Discount)",
    hero_pill_format: "1-on-1 Zoom or In-Person",
    hero_pill_free: "Free 15-Min Intro Call",

    footer_ai_photos_fact: "✨ <strong>Fun Fact:</strong> Every single photo of me on this website was 100% generated with AI—sorry if I fooled you into thinking they were real! (Just one more cool thing I can teach you how to do.)",
    footer_qr_btn: "📱 Get QR Codes for Physical Business Cards",
    footer_portfolio: "Game Dev Portfolio",
    footer_rights: "© Maxwell Montes Diaz. 1-on-1 Practical AI Classes."
  },

  es: {
    // Global Header & Navigation
    nav_role: "Clases 1-a-1 de IA, Apps y Juegos",
    nav_adults_pill: "Vida Diaria y Trabajo",
    nav_youth_pill: "Estudiantes y Creadores",
    nav_home_pill: "Inicio",

    // Contact CTA Labels
    cta_whatsapp_audit: "WhatsApp a Maxwell — Llamada Intro de 15 Min Gratis",
    cta_whatsapp_short: "WhatsApp (15 Min Gratis)",
    cta_sms_label: "O envíame un mensaje de texto (solo SMS):",
    cta_email_label: "O envíame un correo (respuesta más lenta)",
    cta_sticky_sms: "Texto SMS",

    // Pre-filled Messages (WhatsApp / SMS / Email)
    msg_adults_audit: "¡Hola Maxwell! Escaneé tu tarjeta y vi la página de IA para la Vida Diaria y el Trabajo. Me encantaría agendar la Llamada Intro gratuita de 15 minutos para ver cómo la IA me puede ahorrar tiempo frente a la computadora.",
    msg_adults_book: "¡Hola Maxwell! Me gustaría reservar una clase 1-a-1 de IA ($500 MXN por Zoom / o preguntar por sesión presencial) para automatizar mis tareas del día a día.",
    msg_youth_audit: "¡Hola Maxwell! Vi tu página de IA para Estudiantes y Creadores. ¡Me gustaría agendar la Llamada Intro gratuita de 15 minutos para platicar sobre cómo crear videojuegos/apps y mejorar mis herramientas de estudio!",
    msg_youth_book: "¡Hola Maxwell! Quiero reservar una clase 1-a-1 ($500 MXN por Zoom / o presencial) para aprender a crear mis propios videojuegos, apps y herramientas de estudio con IA.",
    msg_gateway_audit: "¡Hola Maxwell! Vi tu sitio web de clases de IA y me gustaría agendar la Llamada Intro gratuita de 15 minutos.",
    email_subject: "Clases 1-a-1 de IA / Llamada Intro de 15 Min Gratis",

    // Shared Credibility Showcase
    cred_eyebrow: "¿QUIÉN TE ENSEÑA? • EXPERIENCIA REAL EN LA INDUSTRIA",
    cred_title: "Aprende con un Ingeniero que Construye a Escala de +500M de Usuarios y en la Frontera de la IA",
    cred_subtitle: "Por privacidad profesional, no menciono el nombre de mi empresa actual en esta página—pero aquí tienes 3 datos reales sobre mi trabajo y por qué mis clases van directo a lo que funciona:",
    stat1_num: "+500 Millones",
    stat1_title: "De Descargas en una Sola App en la que Trabajo",
    stat1_desc: "Desarrollo código en producción para un éxito global con más de 500 millones de descargas—superando a toda la población de Estados Unidos, México y Canadá combinada. A esa escala, cada función debe ser impecable y fácil de usar para cientos de millones de personas.",
    stat2_num: "Meses → 1 Día",
    stat2_title: "Construyendo con los Modelos de IA Más Avanzados",
    stat2_desc: "Como parte de mi trabajo diario, utilizo los modelos de IA de última generación (frontier models) para construir en un solo día lo que antes tomaba meses de trabajo. No enseño trucos genéricos de internet: te enseño los flujos de trabajo reales que hoy usan los equipos de élite.",
    stat3_num: "Microsoft AR",
    stat3_title: "Construcción del Campus de Microsoft con Lentes AR",
    stat3_desc: "Trabajé en la aplicación de Realidad Aumentada que ayudó a los trabajadores de la construcción a levantar uno de los edificios del Campus de Microsoft usando lentes de AR—proyectando planos digitales directamente sobre la obra real.",
    exp1_title: "Ex-Microsoft y Realidad Aumentada Empresarial",
    exp1_desc: "Experiencia previa trabajando en Microsoft, además de desarrollar aplicaciones de escala masiva y sistemas de Realidad Aumentada para campo.",
    exp2_title: "5 Videojuegos Lanzados (+5 en Camino)",
    exp2_desc: "He trabajado en 5 videojuegos publicados para iOS, Android y AR—y actualmente estoy desarrollando 5 juegos más en tiempo récord con flujos de IA.",
    exp3_title: "Explicado en Tu Idioma, Cero Tecnicismos",
    exp3_desc: "Un buen ingeniero hace que la tecnología compleja se sienta sencilla. Cada clase se adapta 100% a tu ritmo, tu teléfono/computadora y tu vida diaria.",

    // Shared Pricing & 20% Social Share Discount Section
    price_eyebrow: "PRECIOS CLAROS Y ACCESIBLES • INTRO SIN COSTO",
    price_heading: "Empieza con una Auditoría de IA de 15 Minutos Gratis—Y Aprende 1-a-1 a Tu Ritmo",
    price_sub: "Sin suscripciones ni paquetes complicados. Toma una sesión personalizada cuando la necesites.",
    audit_card_badge: "PASO 1 • 100% GRATIS",
    audit_card_title: "Auditoría / Llamada Intro de IA de 15 Min Gratis",
    audit_card_desc: "¿No estás seguro de qué puede hacer la IA por ti? Platícame qué tareas te quitan tiempo (o qué quieres crear) y en 15 minutos armamos un plan a tu medida, totalmente gratis.",
    audit_bullet1: "Cero compromiso: conoce mi forma de enseñar antes de decidir",
    audit_bullet2: "Descubre exactamente las 2 o 3 herramientas que sí valen la pena para ti",
    audit_bullet3: "Respuesta rápida por WhatsApp (o mensaje de texto SMS)",
    audit_card_btn: "Mandar WhatsApp para mis 15 Min Gratis",

    session_card_badge: "CLASE 1-A-1 PERSONALIZADA",
    session_card_title: "Sesión Práctica 1-a-1 en Vivo",
    session_price_regular: "$500 MXN",
    session_price_discount_badge: "¡$400 MXN con 20% de Descuento al Compartir!",
    session_format_zoom: "1-a-1 en línea por Zoom (La opción más rápida y económica: $500 pesos)",
    session_format_inperson: "Sesión Presencial disponible por una tarifa ligeramente mayor (¡pregunta por WhatsApp!)",
    session_bullet_custom: "Compartimos pantalla y configuramos todo en vivo con tus propios archivos, correos o proyecto",
    session_bullet_discount: "¡20% DE DESCUENTO ($400 pesos) si sientes que aprendiste mucho y compartes mi página en tus redes sociales después de la sesión (y si es posible, muestras lo que aprendiste a hacer)!",
    session_card_btn: "Reservar Clase 1-a-1 por WhatsApp",

    share_box_title: "🎁 ¿Aprendiste Mucho? Comparte y Obtén 20% de Descuento ($400 MXN)",
    share_box_desc: "Si al terminar tu clase sientes que aprendiste muchísimo, comparte este sitio en tus redes sociales—y si te es posible, comparte también lo que aprendiste a hacer o creaste—para recibir un 20% de descuento en tu sesión.",
    share_btn_native: "Compartir Página",
    share_btn_wa: "Compartir en WhatsApp",
    share_btn_copy: "Copiar Enlace",
    share_copied_toast: "¡Enlace copiado!",

    // ========================================================================
    // ADULTS PAGE (/adults/) — Vida Diaria, Trabajo y Personas Ocupadas
    // ========================================================================
    adults_eyebrow: "PARA PERSONAS OCUPADAS, PROFESIONALES Y EL DÍA A DÍA • CLASES PRÁCTICAS 1-A-1",
    adults_hero_title: "Pasa Menos Tiempo Frente a la Computadora. <span class='highlight-adults'>Y Más Tiempo Viviendo.</span>",
    adults_hero_lead: "No necesitas volverte un experto en tecnología. En una sesión 1-a-1 te enseño paso a paso cómo delegarle a la IA tu redacción, el orden de tus archivos y correos, tablas de gastos y pequeños programas a tu medida—para que cierres la computadora horas antes.",
    adults_offer_strong: "Incluye Llamada Intro / Auditoría de 15 Minutos Gratis",
    adults_offer_span: "Mándame un WhatsApp primero. Platicamos 15 minutos sin costo para ver exactamente cuántas horas frente a la pantalla te puedes ahorrar.",
    adults_photo_badge: "Tu Instructor 1-a-1",
    adults_photo_bio: "Ingeniero de Software Senior (app con +500M de descargas, AR para el Campus de Microsoft e IA de última generación) que enseña IA sin tecnicismos.",

    adults_usecases_eyebrow: "LO QUE AUTOMATIZAREMOS JUNTOS",
    adults_usecases_title: "6 Formas Reales en que la IA te Libera de la Computadora",
    adults_usecases_sub: "Olvídate de cursos teóricos eternos. Nos enfocamos directamente en las tareas que hoy te quitan tus tardes y fines de semana.",

    acard1_title: "1. Redacción Rápida con Tu Propio Estilo",
    acard1_desc: "Redacta correos importantes, respuestas difíciles, cartas, propuestas o avisos en 30 segundos—sonando 100% como tú, natural y profesional.",
    acard1_before: "Antes: 40 minutos frente a la pantalla pensando cómo redactar un correo delicado",
    acard1_after: "Ahora: 45 segundos explicando tu idea en voz alta para obtener un borrador impecable",

    acard2_title: "2. Orden de Correos, Archivos y Documentos Largos",
    acard2_desc: "Sube PDFs de 50 páginas, contratos, pólizas de seguro, estados de cuenta o carpetas desordenadas y obtén un resumen claro en español con los puntos clave.",
    acard2_before: "Antes: 2 horas leyendo letra chiquita y buscando archivos perdidos",
    acard2_after: "Ahora: Resumen de 5 puntos al instante y respuestas exactas sin leer todo el documento",

    acard3_title: "3. Creación de Software Simple y Tablas Sin Fórmulas",
    acard3_desc: "¿Necesitas un control de gastos, inventario para tu negocio, agenda de clientes o calculadora personalizada sin pelear con Excel? Créalo solo describiéndolo.",
    acard3_before: "Antes: Pagar programas complicados o frustrarte con fórmulas rotas de Excel",
    acard3_after: "Ahora: Tu propia herramienta simple hecha exactamente a tu medida en minutos",

    acard4_title: "4. Todo por Voz (Lejos del Teclado)",
    acard4_desc: "¿Por qué estar sentado en el escritorio? Aprende a hablar con la IA desde tu celular mientras caminas o manejas para dejar listos tus pendientes antes de llegar a casa.",
    acard4_before: "Antes: Atado al teclado contestando pendientes después de cenar",
    acard4_after: "Ahora: Resolver tus pendientes hablando con tu teléfono en una caminata de 15 minutos",

    acard5_title: "5. Logística Familiar, Viajes y Comparación de Cotizaciones",
    acard5_desc: "Compara 3 cotizaciones de proveedores o seguros lado a lado, planea un viaje familiar completo o tómale foto a tu refrigerador para armar el menú y la lista del súper.",
    acard5_before: "Antes: 15 pestañas abiertas todo el fin de semana comparando opciones",
    acard5_after: "Ahora: Una tabla comparativa clara y lista de pasos en 2 minutos",

    acard6_title: "6. Resúmenes de Juntas, Llamadas y Notas de Voz",
    acard6_desc: "Convierte reuniones largas, llamadas de trabajo o notas de voz en resúmenes ordenados con acuerdos y lista de tareas automáticamente.",
    acard6_before: "Antes: Tomar notas a las prisas y olvidar qué quedó pendiente",
    acard6_after: "Ahora: Resumen automático y mensajes de seguimiento listos al terminar la llamada",

    acard_cta: "Pedirle a Maxwell aprender esto →",

    // Adults Interactive Time-Back Calculator
    calc_eyebrow: "CALCULADORA DE TIEMPO LIBRE",
    calc_title: "¿Cuántas Horas a la Semana Quieres Recuperar?",
    calc_sub: "Selecciona las tareas que más tiempo te quitan hoy en la computadora. En nuestra sesión nos enfocaremos en quitarlas de tu camino:",
    calc_item1: "Redactar y responder correos o mensajes (ahorra ~3 hrs/sem)",
    calc_item2: "Leer PDFs largos, contratos y trámites (ahorra ~2 hrs/sem)",
    calc_item3: "Ordenar archivos, gastos y tablas de Excel (ahorra ~2.5 hrs/sem)",
    calc_item4: "Crear un programa o herramienta simple para mi trabajo (ahorra ~3 hrs/sem)",
    calc_item5: "Avanzar pendientes por voz mientras camino o manejo (ahorra ~2 hrs/sem)",
    calc_item6: "Planear viajes, comidas y comparar cotizaciones (ahorra ~1.5 hrs/sem)",
    calc_result_label: "Tiempo frente a la pantalla que puedes recuperar:",
    calc_result_unit: "horas / semana (~{yearly} hrs al año)",
    calc_cta_btn: "Enviar Mis Tareas a Maxwell por WhatsApp",

    // ========================================================================
    // YOUTH PAGE (/youth/) — Estudiantes, Creadores y Nuevos Profesionales
    // ========================================================================
    youth_eyebrow: "PARA ESTUDIANTES, CREADORES Y NUEVOS PROFESIONALES • IA, VIDEOJUEGOS Y APPS",
    youth_hero_title: "Deja el Trabajo Repetitivo. <span class='highlight-youth'>Crea Videojuegos, Apps y Tu Futuro.</span>",
    youth_hero_lead: "No uses la IA solo para salir del paso—úsala para aprender 3 veces más rápido, dominar tareas e investigaciones, y crear tus propios videojuegos y apps reales para enfocarte en lo que de verdad te apasiona.",
    youth_offer_strong: "Llamada Intro de 15 Minutos Gratis (IA, Apps y Videojuegos)",
    youth_offer_span: "Mándame un WhatsApp primero. Platicamos 15 minutos gratis sobre qué videojuegos, apps o herramientas de estudio quieres crear.",
    youth_photo_badge: "Mentor de Juegos e IA",
    youth_photo_bio: "Ingeniero de app con +500M de descargas, AR en el Campus de Microsoft, creador con IA de frontera y 5 videojuegos lanzados (+5 en desarrollo).",

    youth_studio_eyebrow: "VISTA PREVIA INTERACTIVA",
    youth_studio_title: "Elige Qué Quieres Dominar o Construir Primero",
    youth_studio_sub: "Toca una opción para ver lo que podemos construir juntos en una sola sesión 1-a-1:",
    ytab_games: "🎮 Crear Tus Propios Videojuegos",
    ytab_study: "🧠 Tutor y Exámenes 24/7",
    ytab_research: "🔍 Tareas e Investigación Pro",
    ytab_apps: "⚡ Crear Apps Reales",
    ytab_slides: "🎤 Presentaciones Increíbles",

    ycards_eyebrow: "6 VENTAJAS PARA ESTUDIANTES, CREADORES Y NUEVOS PROFESIONALES",
    ycards_title: "Todo lo que la Escuela No Te Enseña Sobre Usar IA Como Creador",
    ycards_sub: "Ya sea para terminar tus tareas en la mitad del tiempo o lanzar tu propio videojuego o proyecto, aprenderás flujos de trabajo que el 99% no conoce.",

    ycard1_title: "1. Crea Tus Propios Videojuegos",
    ycard1_desc: "Aprende directamente de un desarrollador profesional (5 juegos publicados y 5 más en camino). Usa IA + motores de juego para diseñar mecánicas, programar, crear niveles y jugar tu propio juego con tus amigos.",
    ycard1_before: "Antes: Ver tutoriales de 40 horas sin lograr terminar un nivel jugable",
    ycard1_after: "Con IA + Mentor Pro: Crea un prototipo jugable real diseñado por ti mismo",

    ycard2_title: "2. Herramientas de Estudio y Tutor Personal 24/7",
    ycard2_desc: "Convierte tus apuntes, diapositivas o libros en PDF en exámenes de práctica, flashcards interactivas y un tutor con IA que te explica temas difíciles con ejemplos que sí te interesan.",
    ycard2_before: "Antes: Releer apuntes a la 1:00 AM esperando memorizar algo",
    ycard2_after: "Con IA: Un simulador de examen y tutor entrenado con el temario exacto de tu clase",

    ycard3_title: "3. Tareas e Investigaciones con Fuentes Reales",
    ycard3_desc: "Investiga temas complejos a fondo, encuentra fuentes académicas verificables (sin citas falsas inventadas por IA), estructura ensayos y resuelve problemas paso a paso entendiendo el porqué.",
    ycard3_before: "Antes: Perder horas en 30 pestañas o entregar datos inventados por error",
    ycard3_after: "Con IA: Investigaciones sólidas con fuentes reales y explicaciones claras",

    ycard4_title: "4. Crea Apps Web y Móviles ('Vibe Coding')",
    ycard4_desc: "¿Tienes una idea para una app de estudio, un proyecto escolar, un negocio o una herramienta? Construye y publica una app funcional en una tarde, aunque nunca hayas programado.",
    ycard4_before: "Antes: Grandes ideas guardadas en tus notas sin saber cómo programarlas",
    ycard4_after: "Con IA: Una app real funcionando en tu celular lista para compartir",

    ycard5_title: "5. Presentaciones Visuales en Minutos",
    ycard5_desc: "Pasa de una hoja en blanco a una presentación con estructura visual, gráficas claras y guion para exponer con seguridad en 15 minutos.",
    ycard5_before: "Antes: Perder todo el domingo acomodando diapositivas aburridas",
    ycard5_after: "Con IA: Diapositivas impactantes y guion listo en una fracción del tiempo",

    ycard6_title: "6. Portafolio de Proyectos y Preparación Profesional",
    ycard6_desc: "Construye tu propio sitio web/portafolio, practica entrevistas en inglés o español con voz por IA y libera tu tiempo para dedicarte a tus verdaderas metas.",
    ycard6_before: "Antes: Un CV igual al de todos los demás estudiantes",
    ycard6_after: "Con IA: Un portafolio vivo con videojuegos, apps y proyectos hechos por ti",

    ycard_cta: "Aprender esto 1-a-1 con Maxwell →",

    // ========================================================================
    // GATEWAY PAGE (/)
    // ========================================================================
    gate_eyebrow: "MAXWELL MONTES DIAZ • CLASES 1-A-1 DE IA PRÁCTICA",
    gate_title: "Clases Prácticas de IA—Adaptadas a Tus Metas y Día a Día",
    gate_sub: "Elige tu edición abajo. Ambas incluyen una Llamada Intro de 15 Minutos Gratis, clases 1-a-1 por Zoom o Presenciales y 20% de descuento al compartir en redes sociales.",
    gate_adults_badge: "EDICIÓN 1 • PARA PERSONAS OCUPADAS, TRABAJO Y VIDA DIARIA",
    gate_adults_title: "Pasa Menos Tiempo en la Computadora. Y Más Tiempo Viviendo.",
    gate_adults_desc: "Aprende a delegarle a la IA tu redacción, el orden de correos y archivos, tablas de gastos, tareas por voz y creación de programas simples—explicado paso a paso y sin tecnicismos.",
    gate_adults_btn: "Ver Edición Vida Diaria y Trabajo →",
    gate_youth_badge: "EDICIÓN 2 • PARA ESTUDIANTES, CREADORES Y NUEVOS PROFESIONALES",
    gate_youth_title: "Crea Tus Propios Videojuegos, Apps y Domina Tu Futuro.",
    gate_youth_desc: "Domina tareas e investigaciones, crea herramientas de estudio personalizadas 24/7, diseña presentaciones increíbles y programa tus propios videojuegos y apps.",
    gate_youth_btn: "Ver Edición Estudiantes y Creadores →",

    hero_pill_price: "$500 MXN ($400 al Compartir)",
    hero_pill_format: "1-a-1 por Zoom o Presencial",
    hero_pill_free: "15 Min Intro Gratis",

    footer_ai_photos_fact: "✨ <strong>Dato curioso:</strong> ¡Todas las fotos mías en este sitio web fueron generadas 100% con IA! Una disculpa si pensaste que eran reales (es una cosa más que te puedo enseñar a hacer).",
    footer_qr_btn: "📱 Ver Códigos QR para Tarjetas Impresas",
    footer_portfolio: "Portafolio de Videojuegos",
    footer_rights: "© Maxwell Montes Diaz. Clases Prácticas 1-a-1 de IA."
  }
};

/* --------------------------------------------------------------------------
   Youth Interactive Studio Data (Bilingual)
   -------------------------------------------------------------------------- */
const YOUTH_STUDIO_DATA = {
  games: {
    en: {
      badge: "🎮 GAME DEVELOPMENT WITH A PRO DEV",
      title: "Design, Code & Play Your Own Video Game",
      desc: "Having shipped 5 games (with 5 more on the way), engineered on a 500M+ download global app, and used frontier AI models at work to build in a day what used to take months, I'll show you how to combine AI tools with game engines (Unity, web canvas, or 2D/3D frameworks) so you can turn your game ideas into playable reality.",
      steps: [
        "Brainstorm your core gameplay loop, rules, and character mechanics with AI in 10 minutes",
        "Generate working C# / JS movement, physics, and UI scripts—and actually understand how they work",
        "Package a playable build you can send to your friends or put on your college/career portfolio"
      ],
      terminal: [
        "> Prompt: \"Create a 2D gravity-flip platformer controller with dash cooldown and particle trails\"",
        "✓ Generated PlayerController.cs + level hazard spawner",
        "✓ Tuned jump physics & camera shake with Maxwell live on Zoom",
        "🚀 Output: Playable web/mobile prototype ready in 1 session!"
      ],
      waText: "Hey Maxwell! I want to learn how to create my own video games using AI in a 1-on-1 session!"
    },
    es: {
      badge: "🎮 CREACIÓN DE VIDEOJUEGOS CON UN DESARROLLADOR PRO",
      title: "Diseña, Programa y Juega Tu Propio Videojuego",
      desc: "Después de haber lanzado 5 videojuegos (con 5 más en desarrollo), trabajar en una app con +500M de descargas y usar los modelos más avanzados de IA para construir en un día lo que antes tomaba meses, te enseñaré a combinar IA con motores de juego para convertir tus ideas en un juego real y jugable.",
      steps: [
        "Diseña las mecánicas, reglas y niveles de tu juego en 10 minutos con ayuda de IA",
        "Genera código funcional (movimiento, física, enemigos y menús) entendiendo cómo funciona cada parte",
        "Publica una versión jugable para compartir con tus amigos o incluir en tu portafolio"
      ],
      terminal: [
        "> Prompt: \"Crea un juego 2D de plataformas con cambio de gravedad, dash y efectos de partículas\"",
        "✓ Generado controlador de jugador + generador de niveles",
        "✓ Física y cámara ajustadas en vivo con Maxwell por Zoom",
        "🚀 Resultado: ¡Tu propio prototipo jugable listo en 1 sesión!"
      ],
      waText: "¡Hola Maxwell! Quiero aprender a crear mis propios videojuegos usando IA en una sesión 1-a-1."
    }
  },
  study: {
    en: {
      badge: "🧠 24/7 CUSTOM STUDY TOOLS",
      title: "Turn Messy Class Notes Into an Interactive Exam Simulator",
      desc: "Stop passively re-reading textbook chapters. We'll build a personal AI study partner trained on your exact class slides and syllabus that quizzes you, spots your weak areas, and explains tough concepts simply.",
      steps: [
        "Upload your lecture PDFs, slides, or handwritten note photos into a dedicated study workspace",
        "Generate realistic practice midterms with step-by-step grading and hints",
        "Use voice mode to have the AI quiz you out loud before exam day"
      ],
      terminal: [
        "> Input: Biology_Ch4_to_Ch8_Slides.pdf + Syllabus.pdf",
        "✓ Generated 25-question mock exam matching your professor's style",
        "✓ Created interactive flashcards & analogy explanations",
        "🚀 Output: Cut exam study time in half with higher retention"
      ],
      waText: "Hey Maxwell! I'd love to learn how to build custom AI study tools and exam simulators!"
    },
    es: {
      badge: "🧠 HERRAMIENTAS DE ESTUDIO 24/7",
      title: "Convierte Tus Apuntes en un Simulador de Exámenes Interactivo",
      desc: "Deja de solo releer páginas. Configuraremos un tutor de IA entrenado con las diapositivas y temario exacto de tu materia que te hace preguntas, detecta tus puntos débiles y te explica con ejemplos claros.",
      steps: [
        "Sube tus PDFs, presentaciones o fotos de apuntes a tu espacio de estudio",
        "Genera exámenes de prueba idénticos al estilo de tu profesor con retroalimentación paso a paso",
        "Usa el modo de voz para que la IA te pregunte en voz alta antes del examen"
      ],
      terminal: [
        "> Entrada: Diapositivas_Unidades_1_a_4.pdf + Temario.pdf",
        "✓ Creado examen simulacro de 25 preguntas clave",
        "✓ Generadas flashcards interactivas y explicaciones sencillas",
        "🚀 Resultado: Estudia en la mitad del tiempo y llega seguro al examen"
      ],
      waText: "¡Hola Maxwell! Quiero aprender a crear mis propias herramientas de estudio y simuladores de examen con IA."
    }
  },
  research: {
    en: {
      badge: "🔍 DEEP RESEARCH & HOMEWORK",
      title: "Investigate Any Topic Fast—With 100% Real Citations",
      desc: "Learn how to use research-grade AI tools to map out literature reviews, compare arguments, debug math/science problems, and verify every source so you never get caught by AI hallucinations.",
      steps: [
        "Search across real academic papers and primary sources in seconds",
        "Synthesize counter-arguments and structure a rock-solid outline before you write",
        "Use AI as a step-by-step coach for math, coding, or science homework so you master the logic"
      ],
      terminal: [
        "> Task: 8-page investigation on renewable grid storage economics",
        "✓ Cross-checked 12 peer-reviewed sources (0 fake citations)",
        "✓ Built structured section outline + data comparison table",
        "🚀 Output: Research phase completed in 25 mins instead of 6 hours"
      ],
      waText: "Hey Maxwell! I want to learn your workflow for homework and deep research with real sources!"
    },
    es: {
      badge: "🔍 TAREAS E INVESTIGACIÓN PRO",
      title: "Investiga Cualquier Tema a Fondo—Con Fuentes 100% Reales",
      desc: "Aprende a usar herramientas de investigación con IA para encontrar artículos reales, estructurar ensayos, resolver problemas de matemáticas/ciencias paso a paso y verificar cada cita.",
      steps: [
        "Encuentra fuentes académicas reales y artículos verificados en segundos",
        "Compara posturas y arma un esquema impecable antes de empezar a redactar",
        "Usa la IA como guía paso a paso en matemáticas, física o programación entendiendo cada resultado"
      ],
      terminal: [
        "> Tarea: Investigación sobre almacenamiento de energía renovable",
        "✓ 12 fuentes reales verificadas (0 citas inventadas)",
        "✓ Esquema completo + tabla comparativa de datos lista",
        "🚀 Resultado: Investigación terminada en 25 min en vez de 6 horas"
      ],
      waText: "¡Hola Maxwell! Quiero aprender tu método para hacer tareas e investigaciones con fuentes reales usando IA."
    }
  },
  apps: {
    en: {
      badge: "⚡ NO-CODE / VIBE-CODED APPS",
      title: "Launch a Real Working Web or Mobile App in One Afternoon",
      desc: "Want to build a custom tracker, an app for your school club, an AI tool, or a startup prototype? I'll teach you how to go from napkin sketch to a live URL on your phone.",
      steps: [
        "Turn your idea into a clean UI and feature spec using structured prompts",
        "Build, test, and customize the app live with an experienced software engineer guiding you",
        "Publish it online for free so anyone can open it via link or QR code"
      ],
      terminal: [
        "> Idea: Campus study-group finder & flashcard sharer web app",
        "✓ Generated responsive UI + local storage & share links",
        "✓ Deployed live to a free cloud URL in 4 minutes",
        "🚀 Output: Real app live on your phone ready to share!"
      ],
      waText: "Hey Maxwell! I want to learn how to build and launch my own web/mobile apps with AI!"
    },
    es: {
      badge: "⚡ CREACIÓN DE APPS REALES",
      title: "Construye y Publica una App Funcional en una Tarde",
      desc: "¿Tienes una idea para una herramienta de estudio, una app para tu club, un negocio o un proyecto personal? Te enseño a pasar de la idea a un enlace real funcionando en tu celular.",
      steps: [
        "Convierte tu idea en un diseño limpio y funcional paso a paso",
        "Construye y personaliza la app en vivo con la guía de un ingeniero de software",
        "Súbela gratis a internet para que cualquiera pueda abrirla desde su teléfono"
      ],
      terminal: [
        "> Idea: App web para organizar grupos de estudio y compartir tarjetas",
        "✓ Interfaz moderna generada y probada en móvil",
        "✓ Publicada gratis en internet en 4 minutos",
        "🚀 Resultado: ¡Tu propia app funcionando en tu celular!"
      ],
      waText: "¡Hola Maxwell! Quiero aprender a construir y publicar mis propias apps con ayuda de IA."
    }
  },
  slides: {
    en: {
      badge: "🎤 PRESENTATIONS & STORYTELLING",
      title: "Design Standout Slide Decks & Pitch Scripts in 15 Minutes",
      desc: "Never stare at an empty PowerPoint or Google Slides deck again. Learn to turn rough notes into a persuasive narrative, clean visual slides, and a natural speaking script.",
      steps: [
        "Transform your research or project notes into a clear 8–10 slide story arc",
        "Generate custom visuals, diagrams, and concise bullet points that don't bore the room",
        "Practice your delivery with AI feedback so you nail the Q&A"
      ],
      terminal: [
        "> Topic: 7-minute class pitch on biotech & AI diagnostics",
        "✓ Generated 9-slide visual deck outline + custom graphics",
        "✓ Created 60-second hook + anticipated Q&A answers",
        "🚀 Output: Best presentation in the class, finished in 20 mins"
      ],
      waText: "Hey Maxwell! I want to learn how to make standout presentations and pitch decks fast with AI!"
    },
    es: {
      badge: "🎤 PRESENTACIONES DE IMPACTO",
      title: "Crea Presentaciones Visuales y Guiones en 15 Minutos",
      desc: "Nunca vuelvas a sufrir frente a una diapositiva en blanco. Aprende a transformar tus notas en una historia clara, diapositivas limpias y un guion seguro para exponer.",
      steps: [
        "Convierte tus apuntes en una estructura visual de 8 a 10 diapositivas claras",
        "Genera gráficos, diagramas e ideas visuales que capten la atención de todos",
        "Practica tu exposición y posibles preguntas con retroalimentación por IA"
      ],
      terminal: [
        "> Tema: Exposición de 7 minutos sobre biotecnología e IA",
        "✓ Estructura de 9 diapositivas visuales + gráficos listos",
        "✓ Guion de introducción + respuestas a preguntas frecuentes",
        "🚀 Resultado: La mejor exposición del grupo, lista en 20 minutos"
      ],
      waText: "¡Hola Maxwell! Quiero aprender a crear presentaciones increíbles en poco tiempo con IA."
    }
  }
};

/* --------------------------------------------------------------------------
   Device Language Detection (with hidden ?lang=es or ?lang=en override)
   -------------------------------------------------------------------------- */
function detectPreferredLanguage() {
  // Hidden URL parameter for testing or direct sharing (?lang=es or ?lang=en)
  const params = new URLSearchParams(window.location.search);
  const urlLang = (params.get("lang") || "").toLowerCase();
  if (urlLang === "es" || urlLang === "en") {
    // Keep ?lang=... when clicking between internal edition links
    document.querySelectorAll("a[href*='adults/'], a[href*='youth/'], a.brand-link").forEach((a) => {
      const href = a.getAttribute("href");
      if (href && !href.includes("lang=")) {
        a.setAttribute("href", `${href}${href.includes("?") ? "&" : "?"}lang=${urlLang}`);
      }
    });
    return urlLang;
  }

  const navLangs = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "en"];

  for (const l of navLangs) {
    const code = String(l).toLowerCase();
    if (code.startsWith("es")) return "es";
    if (code.startsWith("en")) return "en";
  }

  return "en";
}

let currentLang = "en";
let activeYouthTab = "games";

/* --------------------------------------------------------------------------
   Build Contact Links (WhatsApp #1, SMS #2, Email #3)
   -------------------------------------------------------------------------- */
function buildWhatsAppUrl(text) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

function buildSmsUrl(text) {
  // iOS & modern Android support sms:+16196347772?&body=...
  return `sms:${SITE_CONFIG.smsNumber}?&body=${encodeURIComponent(text)}`;
}

function buildEmailUrl(subject, body) {
  return `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* --------------------------------------------------------------------------
   Apply Translations & Update All Dynamic Links
   -------------------------------------------------------------------------- */
function applyLanguage(lang) {
  currentLang = lang === "es" ? "es" : "en";
  const dict = I18N[currentLang];
  document.documentElement.lang = currentLang;

  // Update text elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Determine current page track ('adults' | 'youth' | 'gateway')
  const pageTrack = document.body.getAttribute("data-track") || "gateway";
  const defaultAuditMsg =
    pageTrack === "adults"
      ? dict.msg_adults_audit
      : pageTrack === "youth"
      ? dict.msg_youth_audit
      : dict.msg_gateway_audit;

  const defaultBookMsg =
    pageTrack === "adults"
      ? dict.msg_adults_book
      : pageTrack === "youth"
      ? dict.msg_youth_book
      : dict.msg_gateway_audit;

  // Bind primary WhatsApp links
  document.querySelectorAll("[data-contact='wa-audit']").forEach((el) => {
    el.setAttribute("href", buildWhatsAppUrl(defaultAuditMsg));
  });

  document.querySelectorAll("[data-contact='wa-book']").forEach((el) => {
    el.setAttribute("href", buildWhatsAppUrl(defaultBookMsg));
  });

  // Bind card-specific WhatsApp links
  document.querySelectorAll("[data-wa-topic-en]").forEach((el) => {
    const topicMsg = currentLang === "es"
      ? el.getAttribute("data-wa-topic-es")
      : el.getAttribute("data-wa-topic-en");
    el.setAttribute("href", buildWhatsAppUrl(topicMsg || defaultAuditMsg));
  });

  // Bind SMS links (#2 contact alternative)
  document.querySelectorAll("[data-contact='sms']").forEach((el) => {
    el.setAttribute("href", buildSmsUrl(defaultAuditMsg));
  });

  // Bind Email links (#3 slowest alternative)
  document.querySelectorAll("[data-contact='email']").forEach((el) => {
    el.setAttribute("href", buildEmailUrl(dict.email_subject, defaultAuditMsg));
  });

  // Refresh interactive widgets
  updateAdultsCalculator();
  renderYouthStudioTab(activeYouthTab);
}

/* --------------------------------------------------------------------------
   Adults Interactive "Weekly Time Reclaimed" Calculator
   -------------------------------------------------------------------------- */
function initAdultsCalculator() {
  const items = document.querySelectorAll(".task-check-item");
  if (!items.length) return;

  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("selected");
      const isSelected = item.classList.contains("selected");
      item.setAttribute("aria-checked", String(isSelected));
      const box = item.querySelector(".task-check-box");
      if (box) box.textContent = isSelected ? "✓" : "";
      updateAdultsCalculator();
    });

    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        item.click();
      }
    });
  });

  updateAdultsCalculator();
}

function updateAdultsCalculator() {
  const numEl = document.getElementById("calc-hours-output");
  const ctaEl = document.getElementById("calc-wa-cta");
  if (!numEl) return;

  const selected = Array.from(document.querySelectorAll(".task-check-item.selected"));
  let totalHours = 0;
  const labels = [];

  selected.forEach((el) => {
    totalHours += parseFloat(el.getAttribute("data-hours") || "2");
    const textSpan = el.querySelector("[data-i18n]");
    if (textSpan) labels.push(textSpan.textContent.replace(/\s*\(.*?\)\s*/g, "").trim());
  });

  if (totalHours === 0) totalHours = 2; // Minimum baseline if all unchecked
  const yearly = Math.round(totalHours * 50);
  const unitTemplate = I18N[currentLang].calc_result_unit || "hours / week";
  numEl.textContent = `${totalHours} ${unitTemplate.replace("{yearly}", String(yearly))}`;

  if (ctaEl) {
    const msg =
      currentLang === "es"
        ? `¡Hola Maxwell! Usé la calculadora de tu sitio (Vida Diaria y Trabajo) y quiero ahorrar ~${totalHours} hrs/semana en: ${labels.join(", ")}. ¿Podemos agendar la Llamada Intro de 15 min gratis?`
        : `Hi Maxwell! I used the calculator on your Daily Life & Work site and want to save ~${totalHours} hrs/week on: ${labels.join(", ")}. Can we book the Free 15-Min AI Intro Call?`;
    ctaEl.setAttribute("href", buildWhatsAppUrl(msg));
  }
}

/* --------------------------------------------------------------------------
   Youth Interactive Studio Switcher (Games, Study, Research, Apps, Slides)
   -------------------------------------------------------------------------- */
function initYouthStudio() {
  const tabs = document.querySelectorAll("[data-studio-tab]");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.getAttribute("data-studio-tab");
      if (key) renderYouthStudioTab(key);
    });
  });

  renderYouthStudioTab(activeYouthTab);
}

function renderYouthStudioTab(tabKey) {
  const container = document.getElementById("youth-studio-content");
  if (!container || !YOUTH_STUDIO_DATA[tabKey]) return;

  activeYouthTab = tabKey;
  document.querySelectorAll("[data-studio-tab]").forEach((btn) => {
    const active = btn.getAttribute("data-studio-tab") === tabKey;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", String(active));
  });

  const data = YOUTH_STUDIO_DATA[tabKey][currentLang];
  const badgeEl = document.getElementById("studio-badge");
  const titleEl = document.getElementById("studio-title");
  const descEl = document.getElementById("studio-desc");
  const stepsEl = document.getElementById("studio-steps");
  const termEl = document.getElementById("studio-terminal-lines");
  const ctaEl = document.getElementById("studio-wa-cta");

  if (badgeEl) badgeEl.textContent = data.badge;
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.desc;

  if (stepsEl) {
    stepsEl.innerHTML = data.steps
      .map(
        (step, idx) =>
          `<li><span class="step-num">${idx + 1}</span><span>${step}</span></li>`
      )
      .join("");
  }

  if (termEl) {
    termEl.innerHTML = data.terminal
      .map((line, i) => {
        const color =
          i === 0 ? "#38BDF8" : i === data.terminal.length - 1 ? "#A3E635" : "#CBD5E1";
        return `<div style="color:${color};margin-bottom:8px;">${line}</div>`;
      })
      .join("");
  }

  if (ctaEl) {
    ctaEl.setAttribute("href", buildWhatsAppUrl(data.waText));
    ctaEl.textContent =
      currentLang === "es"
        ? "💬 Aprender esto con Maxwell por WhatsApp (15 Min Gratis)"
        : "💬 Learn this with Maxwell on WhatsApp (Free 15-Min Intro)";
  }
}

/* --------------------------------------------------------------------------
   20% Social Media Share Discount Widget
   -------------------------------------------------------------------------- */
function initShareButtons() {
  const shareUrl = window.location.href.split("?")[0];

  const getShareText = () =>
    currentLang === "es"
      ? "¡Les recomiendo muchísimo las clases 1-a-1 de IA, creación de apps y videojuegos con Maxwell Montes Diaz! Tiene una llamada intro de 15 min gratis:"
      : "Highly recommend Maxwell Montes Diaz's 1-on-1 AI, app & game creation classes! He offers a Free 15-Minute AI Intro Call:";

  const nativeBtn = document.getElementById("btn-share-native");
  if (nativeBtn) {
    nativeBtn.addEventListener("click", async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "Maxwell Montes Diaz — 1-on-1 AI Classes",
            text: getShareText(),
            url: shareUrl
          });
          return;
        } catch (_) {}
      }
      // Fallback to copy
      copyShareLink(shareUrl);
    });
  }

  const waShareBtn = document.getElementById("btn-share-wa");
  if (waShareBtn) {
    waShareBtn.addEventListener("click", () => {
      const url = `https://wa.me/?text=${encodeURIComponent(getShareText() + " " + shareUrl)}`;
      window.open(url, "_blank", "noopener");
    });
  }

  const copyBtn = document.getElementById("btn-share-copy");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => copyShareLink(shareUrl));
  }
}

function copyShareLink(url) {
  const copyBtn = document.getElementById("btn-share-copy");
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).catch(() => {});
  }
  if (copyBtn) {
    const orig = copyBtn.textContent;
    copyBtn.textContent = I18N[currentLang].share_copied_toast;
    setTimeout(() => {
      copyBtn.textContent = orig;
    }, 2000);
  }
}

/* --------------------------------------------------------------------------
   QR Code Generator Modal (For Maxwell's Printed Business Cards!)
   -------------------------------------------------------------------------- */
function initQrModal() {
  const openBtn = document.getElementById("open-qr-modal");
  const closeBtn = document.getElementById("close-qr-modal");
  const dialog = document.getElementById("qr-dialog");
  if (!openBtn || !dialog) return;

  openBtn.addEventListener("click", () => {
    const baseUrl =
      window.location.protocol.startsWith("http")
        ? window.location.href.split("?")[0].replace(/\/index\.html$/, "/").replace(/\/?$/, "/")
        : "https://mascaz.github.io/AI-Lessons-Website/";

    const adultsUrl = new URL("adults/", baseUrl).href;
    const youthUrl = new URL("youth/", baseUrl).href;

    const adultsUrlEl = document.getElementById("qr-url-adults");
    const youthUrlEl = document.getElementById("qr-url-youth");
    const adultsImg = document.getElementById("qr-img-adults");
    const youthImg = document.getElementById("qr-img-youth");

    if (adultsUrlEl) adultsUrlEl.textContent = adultsUrl;
    if (youthUrlEl) youthUrlEl.textContent = youthUrl;
    if (adultsImg) {
      adultsImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=8&data=${encodeURIComponent(adultsUrl)}`;
    }
    if (youthImg) {
      youthImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=8&data=${encodeURIComponent(youthUrl)}`;
    }

    dialog.showModal();
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => dialog.close());
  }

  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();
    const inDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;
    if (!inDialog) dialog.close();
  });
}

/* --------------------------------------------------------------------------
   Interactive Photo Collages & Section-Adaptive Top-Left Brand Icon
   -------------------------------------------------------------------------- */
function initPhotoCollagesAndAvatar() {
  const headerAvatar = document.getElementById("header-brand-avatar");

  // Interactive swap inside Youth 3-photo collage & Adults 2-photo collage
  ["youth-photo-collage", "adults-photo-collage"].forEach((collageId) => {
    const collage = document.getElementById(collageId);
    if (!collage) return;
    const tiles = Array.from(collage.querySelectorAll(".collage-tile img"));
    if (tiles.length < 2) return;

    tiles.forEach((imgEl, index) => {
      imgEl.parentElement.addEventListener("click", () => {
        if (index === 0) return;
        const mainImg = tiles[0];
        const tmpSrc = mainImg.src;
        const tmpAlt = mainImg.alt;
        mainImg.src = imgEl.src;
        mainImg.alt = imgEl.alt;
        imgEl.src = tmpSrc;
        imgEl.alt = tmpAlt;
        if (headerAvatar) {
          headerAvatar.src = mainImg.src;
        }
      });
    });
  });

  // On Gateway page, adapt top-left icon when hovering/focusing a section card or nav pill
  if (headerAvatar) {
    document.querySelectorAll("[data-avatar-preview]").forEach((card) => {
      const previewSrc = card.getAttribute("data-avatar-preview");
      if (!previewSrc) return;
      card.addEventListener("mouseenter", () => {
        headerAvatar.src = previewSrc;
      });
      card.addEventListener("focusin", () => {
        headerAvatar.src = previewSrc;
      });
    });
  }
}

/* --------------------------------------------------------------------------
   Boot on DOMContentLoaded
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Handle instant QR query redirect on root if ?v=adults or ?v=youth is used
  const params = new URLSearchParams(window.location.search);
  const v = params.get("v");
  if (v === "adults" && !window.location.pathname.includes("/adults")) {
    window.location.replace("./adults/" + window.location.search);
    return;
  }
  if (v === "youth" && !window.location.pathname.includes("/youth")) {
    window.location.replace("./youth/" + window.location.search);
    return;
  }

  // Detect device language automatically without manual language switcher
  const initialLang = detectPreferredLanguage();
  initAdultsCalculator();
  initYouthStudio();
  initShareButtons();
  initQrModal();
  initPhotoCollagesAndAvatar();
  applyLanguage(initialLang);
});
