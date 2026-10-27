// Bilingual (English / Spanish) UI Dictionary & 3rd Grade Word Clue Generator
// Note: UI instructions/titles switch between EN and ES, while spelling words are always in English.

window.I18N = {
  en: {
    appTitle: "BeeReady!",
    appSubtitle: "3rd Grade Spelling Bee Coach",
    langToggleLabel: "Idioma / Language",
    activeSetLabel: "Word Set:",
    manageSetsBtn: "Manage Sets",
    connectDeviceBtn: "iPad / Phone Link",
    backupBtn: "Backup / Restore",

    // Tabs
    tabWords: "1. Words & Difficulty",
    tabStudy: "2. Study Phase",
    tabTest: "3. Testing Phase",
    tabScores: "4. High Scores",

    // Word Sets Bar & Modal
    setSelectorTitle: "Current Competition / Grade List",
    newSetBtn: "+ New Word Set",
    renameSetBtn: "Rename",
    duplicateSetBtn: "Duplicate",
    deleteSetBtn: "Delete Set",
    createSetModalTitle: "Create or Manage Word Sets",
    setNamePlaceholder: "e.g., 3rd Grade Regional Bee 2026",
    setGradePlaceholder: "e.g., 3rd Grade / Room 12",
    createSetConfirm: "Create Word Set",
    cannotDeleteLastSet: "You must keep at least one word set!",
    confirmDeleteSet: "Are you sure you want to delete this word set and its scores?",

    // 3 Input Methods
    inputSectionTitle: "Add English Words to This Set",
    inputSectionDesc: "Add words manually, paste any text to extract words automatically, or snap a photo of a printed word sheet.",
    inputTabManual: "⌨️ Manual Input",
    inputTabPaste: "📋 Paste Text & Extract",
    inputTabCamera: "📸 Scan Word Sheet (Photo)",

    // Manual Input
    manualWordLabel: "English Word(s)",
    manualWordPlaceholder: "Type a word (e.g., butterfly) or comma-separated words...",
    manualHintLabel: "Optional Clue / Definition (for Crossword & Study)",
    manualHintPlaceholder: "e.g., A colorful insect with wings (optional)",
    manualAddBtn: "Add to Word List",
    manualAddedToast: "Added {count} word(s) to your set!",

    // Paste Text Extractor
    pasteLabel: "Paste any paragraph, email, homework list, or messy text:",
    pastePlaceholder: "Paste text here! For example:\n1. laughter - the sound of being happy\n2. mountain 3. whisper 4. calendar...",
    filterShortWords: "Ignore tiny words (1–2 letters like 'a', 'to', 'in')",
    filterCommonStop: "Ignore ultra-common sight words ('the', 'and', 'for')",
    extractWordsBtn: "🔍 Extract English Words",

    // Camera / Photo OCR
    cameraTitle: "Take a Picture of a Word Sheet or Upload a Photo",
    cameraDesc: "On iPad or iPhone, tap 'Take Photo / Choose Image' to use your camera or photo library. We will read the English words off the page so you can review them.",
    cameraBtn: "📷 Take Photo / Choose Image",
    cameraEnhanceLabel: "High-Contrast Sheet Filter (recommended for printed paper)",
    ocrRunning: "Reading words from photo... ({progress}%)",
    ocrComplete: "Photo scan complete! Review the extracted words below.",
    ocrError: "Could not read photo automatically. Try better lighting or paste text.",
    rescanBtn: "🔄 Re-Scan Photo",

    // Extracted Word Review Box
    extractedReviewTitle: "Review Extracted Words ({count} found)",
    extractedReviewDesc: "Tap words to select/deselect, edit any spelling, or click 'Add Selected Words' to import them with automatic difficulty scoring.",
    selectAllBtn: "Select All",
    deselectAllBtn: "Deselect All",
    addSelectedWordsBtn: "✅ Add Selected Words ({count})",
    noWordsExtracted: "No valid English words found yet. Try typing or pasting some words!",

    // Difficulty Groups Management
    diffSectionTitle: "Difficulty Groups & Individual Tuning",
    diffSectionDesc: "Difficulty is automatically calculated from Word Length + Character Variety (unique letters). You can add/remove groups or tune any word's difficulty for your child's specific struggles.",
    groupCountLabel: "Difficulty Groups:",
    addGroupBtn: "+ Add Group",
    removeGroupBtn: "− Remove Group",
    rebalanceBtn: "⚖️ Auto-Rebalance Untuned Words",
    resetAllTuningBtn: "↺ Reset All Custom Tuning",
    filterByGroupLabel: "Filter view:",
    allGroupsFilter: "All Groups ({count})",
    groupFilterItem: "Group {num}: {name} ({count})",
    searchWordsPlaceholder: "Search words in this set...",
    clearAllWordsBtn: "🗑️ Clear All Words",

    // Word Card
    lengthBadge: "{len} letters",
    varietyBadge: "{uniq} unique",
    scoreBadge: "Score: {score}",
    customTunedBadge: "📌 Tuned",
    autoAssignedBadge: "✨ Auto",
    makeEasierTip: "Move to easier group",
    makeHarderTip: "Move to harder group",
    editHintTip: "Edit clue/hint",
    deleteWordTip: "Remove word",
    emptyGroupMsg: "No words in this group yet.",

    // Difficulty Group Names (up to 10)
    groupNames: [
      "Honey Sprout",
      "Busy Worker",
      "Pollen Scout",
      "Hive Builder",
      "Royal Guard",
      "Golden Flyer",
      "Nectar Master",
      "Crown Speller",
      "Grand Champion",
      "Queen Bee Legend"
    ],

    // Study Phase
    studyTitle: "Study Phase — Learn by Difficulty Group",
    studySubtitle: "Pick a Difficulty Group to study! Fun activities are tailored to the words in your chosen group.",
    step1ChooseGroup: "Step 1: Choose a Difficulty Group to Study",
    step2ChooseActivity: "Step 2: Pick a Fun Activity (or Surprise Me!)",
    wordsInGroupCount: "{count} words",
    bestScoreBadge: "Best Test: {score}",
    noBestScoreYet: "No test yet",
    needWordsToStudy: "This difficulty group has no words yet! Add words or move some words into this group first.",

    // Activities List
    actRandomTitle: "🎲 Surprise Me! (Random Activity)",
    actRandomDesc: "Jump into a random fun game with this group's words!",
    actFillBlankTitle: "✏️ Fill in the Blank",
    actFillBlankDesc: "Complete the missing letters using the honeycomb letter bank.",
    actWordSoupTitle: "🍲 Word Soup (Word Search)",
    actWordSoupDesc: "Find the hidden spelling words horizontally, vertically, or diagonally!",
    actCrosswordTitle: "🧩 Crossword Puzzle",
    actCrosswordDesc: "Solve intersecting Across & Down clues to spell every word in the group.",
    actScrambleTitle: "🌪️ Honeycomb Scramble",
    actScrambleDesc: "Unscramble the mixed-up letter tiles to build the correct English word.",
    actBeeKeeperTitle: "🍯 Save the Honey Jars",
    actBeeKeeperDesc: "Guess letters of the alphabet before the bee runs out of 6 honey jars!",
    actFlashSpellTitle: "👀 Look, Cover & Spell",
    actFlashSpellDesc: "Study the word for 3 seconds before it hides, then spell it from memory!",

    // Inside Study Activity Controls
    backToActivitiesBtn: "← Change Activity / Group",
    switchRandomActivityBtn: "🎲 Next Random Game",
    progressWordOf: "Word {current} of {total}",
    streakLabel: "Streak: 🔥 {streak}",
    clueLabel: "Clue / Hint:",
    checkAnswerBtn: "Check Word",
    nextWordBtn: "Next Word →",
    tryAgainBtn: "Try Again",
    revealHintBtn: "💡 Give Me a Letter Hint",
    shuffleTilesBtn: "🔀 Shuffle Letters",
    clearLettersBtn: "⌫ Clear",
    correctCheers: [
      "🐝 Bee-rilliant! You nailed it!",
      "🍯 Sweet spelling! Awesome job!",
      "🌟 Superstar speller! Keep buzzing!",
      "🎉 Spot on! You're ready for the Bee!"
    ],
    tryAgainMsg: "Almost! Check the highlighted letters and try again.",
    activityCompletedTitle: "🎉 Group Activity Complete!",
    activityCompletedDesc: "Awesome work studying Group {group}! Want to play another activity or test this group?",
    playAgainBtn: "🔄 Play Again",
    tryAnotherGameBtn: "🎮 Pick Another Activity",
    goToGroupTestBtn: "🎤 Test This Group Now",

    // Specific Activity Instructions
    fillBlankInstr: "Tap the letter tiles below (or type on your keyboard) to fill in the missing letters!",
    wordSoupInstr: "Tap the FIRST letter and then the LAST letter of a hidden word (or drag across the letters)!",
    wordSoupFoundCount: "Found {found} of {total} words",
    wordSoupNewGridBtn: "🔄 Generate New Grid",
    crosswordInstr: "Tap any square in the crossword grid, read the Across or Down clue, and type or tap the letters!",
    crosswordAcross: "ACROSS (Horizontal)",
    crosswordDown: "DOWN (Vertical)",
    crosswordCheckBtn: "✔️ Check Puzzle",
    crosswordRevealLetterBtn: "💡 Reveal 1 Letter",
    scrambleInstr: "Tap the scrambled honeycomb letters in the right order to spell the word!",
    beeKeeperInstr: "Tap letters from A–Z to uncover the secret spelling word before all 6 honey jars are gone!",
    beeKeeperJarsLeft: "Honey Jars Left: {jars}",
    flashSpellInstr: "Look carefully at the word! When the curtain closes, spell the word from memory.",
    flashPeekBtn: "👀 Peek Again (3 sec)",
    flashLookNow: "Memorize the tricky letters! Hiding in {sec}s...",
    flashNowSpell: "Now spell the word from memory!",

    // Testing Phase
    testTitle: "Testing Phase — Oral Spelling Bee",
    testSubtitle: "A parent, teacher, or partner reads each word aloud. The child spells it out loud, and you mark it Right or Wrong!",
    testModeGroupCardTitle: "🎯 Group Test Mode",
    testModeGroupCardDesc: "Test one specific Difficulty Group. Saves the High Score for that group!",
    testModeMixedCardTitle: "🏆 Official Mixed Bee Mode",
    testModeMixedCardDesc: "Mixes words across ALL difficulty groups for a realistic competition test!",
    selectGroupForTest: "Select Difficulty Group to Test:",
    wordOrderLabel: "Word Order:",
    orderShuffled: "🔀 Shuffled (Recommended)",
    orderSequential: "📋 In List Order",
    mixedWordCountLabel: "Number of Words in Mixed Test:",
    mixedAllWords: "All Words in Set ({count})",
    mixed10Words: "10 Random Words",
    mixed15Words: "15 Random Words",
    mixed25Words: "25 Random Words",
    startGroupTestBtn: "🎤 Start Group {group} Test",
    startMixedTestBtn: "🏆 Start Mixed Spelling Bee Test",

    // Live Oral Test Screen
    proctorBanner: "📢 PROCTOR VIEW: Say the word below out loud. Listen to the student spell it, then mark Right or Wrong.",
    privacyShieldToggle: "🙈 Hide Word on Screen (Tap Card to Peek)",
    tapToPeekMsg: "🔒 Word Hidden from Student — Tap Here to Peek",
    sayOutLoudLabel: "SAY THIS ENGLISH WORD OUT LOUD:",
    spellBreakdownLabel: "Letter-by-Letter Check:",
    markRightBtn: "✅ Marked Right! (Correct)",
    markWrongBtn: "❌ Marked Wrong (Needs Practice)",
    undoLastMarkBtn: "↩️ Undo Previous Word",
    endTestEarlyBtn: "⏹️ Finish Test Early",
    testLiveRight: "Right: {count}",
    testLiveWrong: "Wrong: {count}",
    testLiveRemaining: "Left: {count}",

    // Test Results & High Score Screen
    testCompleteTitle: "Spelling Bee Test Results!",
    newHighScoreBanner: "🏆 NEW HIGH SCORE FOR THIS MODE! 🎉",
    highScoreMaintained: "Best High Score: {best}% ({bestRaw})",
    yourScoreLabel: "Score Achieved",
    rightWordsHeading: "✅ Words Spelled Correctly ({count})",
    wrongWordsHeading: "❌ Words to Practice ({count})",
    tuneStrugglePrompt: "💡 Did your child struggle with the missed words? Tune their difficulty group with one tap:",
    bumpAllMissedBtn: "🔼 Move All Missed Words +1 Difficulty Group",
    bumpedSuccessMsg: "Moved to Group {group}!",
    retakeTestBtn: "🔄 Retake This Test",
    studyMissedGroupBtn: "📚 Go to Study Phase",
    backToTestMenuBtn: "← Back to Test Menu",

    // High Scores & Progress Tab
    scoresTitle: "High Scores & Competition Progress",
    scoresSubtitle: "Saved high scores for each Difficulty Group and Mixed Mode in your active Word Set.",
    mixedHighScoreCardTitle: "🏆 Official Mixed Bee High Score (All Difficulties)",
    groupHighScoresTitle: "📊 High Scores by Difficulty Group",
    bestScoreStat: "High Score: {pct}% ({right}/{total})",
    attemptsStat: "Tests Completed: {attempts}",
    lastTestedStat: "Last Tested: {date}",
    noTestsRecorded: "No tests recorded yet — head to the Testing Phase!",
    recentHistoryTitle: "🕓 Recent Test History",
    clearScoresBtn: "Reset Scores for This Set",

    // Modals (Connect iPad/Phone & Backup)
    connectModalTitle: "📱 Use on iPad or iPhone",
    connectModalDesc: "To open this app on an iPad or iPhone on the same Wi-Fi network, open Safari on the device and enter the address below (or add to Home Screen for a full-screen app):",
     backupModalTitle: "💾 Save / Restore Backup File",
    backupModalDesc: "Your words and high scores are saved automatically in your browser and on the local server. You can also export a backup file to move between devices.",
    exportJsonBtn: "⬇️ Download Backup (.json)",
    importJsonBtn: "⬆️ Restore from Backup (.json)",
    closeModalBtn: "Close"
  },

  es: {
    appTitle: "¡BeeReady!",
    appSubtitle: "Entrenador de Spelling Bee (3.º de Primaria)",
    langToggleLabel: "Language / Idioma",
    activeSetLabel: "Lista Activa:",
    manageSetsBtn: "Listas de Palabras",
    connectDeviceBtn: "Conectar iPad / iPhone",
    backupBtn: "Respaldo",

    // Tabs
    tabWords: "1. Palabras y Dificultad",
    tabStudy: "2. Fase de Estudio",
    tabTest: "3. Fase de Prueba",
    tabScores: "4. Récords y Progreso",

    // Word Sets Bar & Modal
    setSelectorTitle: "Lista de Competencia o Grado Actual",
    newSetBtn: "+ Nueva Lista",
    renameSetBtn: "Renombrar",
    duplicateSetBtn: "Duplicar",
    deleteSetBtn: "Eliminar Lista",
    createSetModalTitle: "Crear o Administrar Listas de Palabras",
    setNamePlaceholder: "ej., Spelling Bee Regional 3.º Grado",
    setGradePlaceholder: "ej., 3.º de Primaria / Grupo A",
    createSetConfirm: "Crear Lista de Palabras",
    cannotDeleteLastSet: "¡Debes conservar al menos una lista de palabras!",
    confirmDeleteSet: "¿Seguro que deseas eliminar esta lista y sus récords?",

    // 3 Input Methods
    inputSectionTitle: "Agregar Palabras en Inglés a Esta Lista",
    inputSectionDesc: "Ingresa palabras manualmente, pega un texto para extraerlas automáticamente o toma una foto de la hoja de palabras.",
    inputTabManual: "⌨️ Entrada Manual",
    inputTabPaste: "📋 Pegar Texto y Extraer",
    inputTabCamera: "📸 Foto de Hoja (Escáner)",

    // Manual Input
    manualWordLabel: "Palabra(s) en Inglés",
    manualWordPlaceholder: "Escribe una palabra (ej., butterfly) o varias separadas por comas...",
    manualHintLabel: "Pista o Definición Opcional (para Crucigrama y Estudio)",
    manualHintPlaceholder: "ej., Insecto colorido con alas (opcional)",
    manualAddBtn: "Agregar a la Lista",
    manualAddedToast: "¡Se agregaron {count} palabra(s) a tu lista!",

    // Paste Text Extractor
    pasteLabel: "Pega cualquier párrafo, correo, tarea o lista de texto:",
    pastePlaceholder: "¡Pega el texto aquí! Por ejemplo:\n1. laughter 2. mountain 3. whisper 4. calendar...",
    filterShortWords: "Ignorar palabras muy cortas (1–2 letras como 'a', 'to', 'in')",
    filterCommonStop: "Ignorar conectores comunes ('the', 'and', 'for')",
    extractWordsBtn: "🔍 Extraer Palabras en Inglés",

    // Camera / Photo OCR
    cameraTitle: "Toma una Foto de la Hoja de Palabras o Sube una Imagen",
    cameraDesc: "En iPad o iPhone, toca 'Tomar Foto / Elegir Imagen' para usar tu cámara o galería. Leeremos las palabras en inglés de la hoja para que puedas revisarlas.",
    cameraBtn: "📷 Tomar Foto / Elegir Imagen",
    cameraEnhanceLabel: "Filtro de Alto Contraste (recomendado para hojas impresas)",
    ocrRunning: "Leyendo palabras de la foto... ({progress}%)",
    ocrComplete: "¡Escaneo completado! Revisa las palabras extraídas abajo.",
    ocrError: "No se pudo leer la foto automáticamente. Intenta con mejor luz o pega el texto.",
    rescanBtn: "🔄 Re-escanear Foto",

    // Extracted Word Review Box
    extractedReviewTitle: "Revisa las Palabras Extraídas ({count} encontradas)",
    extractedReviewDesc: "Toca las palabras para seleccionarlas o quitarlas, corrige cualquier letra o presiona 'Agregar Palabras Seleccionadas' para clasificarlas por dificultad.",
    selectAllBtn: "Seleccionar Todas",
    deselectAllBtn: "Quitar Selección",
    addSelectedWordsBtn: "✅ Agregar Seleccionadas ({count})",
    noWordsExtracted: "Aún no se encontraron palabras válidas en inglés. ¡Intenta escribir o pegar texto!",

    // Difficulty Groups Management
    diffSectionTitle: "Grupos de Dificultad y Ajuste Individual",
    diffSectionDesc: "La dificultad se calcula según la Longitud de la Palabra + Variedad de Letras (letras únicas). Puedes agregar/quitar grupos o ajustar la dificultad de cada palabra según lo que le cueste a cada niño.",
    groupCountLabel: "Grupos de Dificultad:",
    addGroupBtn: "+ Agregar Grupo",
    removeGroupBtn: "− Quitar Grupo",
    rebalanceBtn: "⚖️ Rebalancear Automáticas",
    resetAllTuningBtn: "↺ Restaurar Ajustes Manuales",
    filterByGroupLabel: "Ver grupo:",
    allGroupsFilter: "Todos los Grupos ({count})",
    groupFilterItem: "Grupo {num}: {name} ({count})",
    searchWordsPlaceholder: "Buscar palabras en esta lista...",
    clearAllWordsBtn: "🗑️ Vaciar Lista",

    // Word Card
    lengthBadge: "{len} letras",
    varietyBadge: "{uniq} únicas",
    scoreBadge: "Puntos: {score}",
    customTunedBadge: "📌 Ajustada",
    autoAssignedBadge: "✨ Auto",
    makeEasierTip: "Mover a un grupo más fácil",
    makeHarderTip: "Mover a un grupo más difícil",
    editHintTip: "Editar pista/definición",
    deleteWordTip: "Eliminar palabra",
    emptyGroupMsg: "Aún no hay palabras en este grupo.",

    // Difficulty Group Names (up to 10)
    groupNames: [
      "Abejita Inicial",
      "Obrera Activa",
      "Explorador de Polen",
      "Constructor del Panal",
      "Guardia Real",
      "Vuelo Dorado",
      "Maestro del Néctar",
      "Deletreador Real",
      "Gran Campeón",
      "Leyenda Abeja Reina"
    ],

    // Study Phase
    studyTitle: "Fase de Estudio — Actividades por Grupo de Dificultad",
    studySubtitle: "¡Elige un Grupo de Dificultad para estudiar! Los juegos usan únicamente las palabras de ese grupo.",
    step1ChooseGroup: "Paso 1: Elige el Grupo de Dificultad para Estudiar",
    step2ChooseActivity: "Paso 2: Elige una Actividad Divertida (¡o al Azar!)",
    wordsInGroupCount: "{count} palabras",
    bestScoreBadge: "Récord: {score}",
    noBestScoreYet: "Sin prueba aún",
    needWordsToStudy: "¡Este grupo de dificultad aún no tiene palabras! Agrega palabras o mueve algunas a este grupo.",

    // Activities List
    actRandomTitle: "🎲 ¡Sorpréndeme! (Actividad al Azar)",
    actRandomDesc: "¡Inicia un juego divertido al azar con las palabras de este grupo!",
    actFillBlankTitle: "✏️ Completa los Espacios",
    actFillBlankDesc: "Coloca las letras que faltan usando las fichas del panal.",
    actWordSoupTitle: "🍲 Sopa de Letras",
    actWordSoupDesc: "¡Encuentra las palabras ocultas en horizontal, vertical o diagonal!",
    actCrosswordTitle: "🧩 Crucigrama",
    actCrosswordDesc: "Resuelve las pistas horizontales y verticales para deletrear cada palabra.",
    actScrambleTitle: "🌪️ Letras Revueltas",
    actScrambleDesc: "Ordena las letras revueltas del panal para formar la palabra en inglés.",
    actBeeKeeperTitle: "🍯 Salva los Tarros de Miel",
    actBeeKeeperDesc: "¡Adivina las letras del abecedario antes de que se acaben los 6 tarros de miel!",
    actFlashSpellTitle: "👀 Mira, Cubre y Escribe",
    actFlashSpellDesc: "¡Observa la palabra por 3 segundos antes de que se oculte y escríbela de memoria!",

    // Inside Study Activity Controls
    backToActivitiesBtn: "← Cambiar Juego / Grupo",
    switchRandomActivityBtn: "🎲 Siguiente Juego al Azar",
    progressWordOf: "Palabra {current} de {total}",
    streakLabel: "Racha: 🔥 {streak}",
    clueLabel: "Pista / Definición:",
    checkAnswerBtn: "Comprobar",
    nextWordBtn: "Siguiente Palabra →",
    tryAgainBtn: "Intentar de Nuevo",
    revealHintBtn: "💡 Dame una Letra de Pista",
    shuffleTilesBtn: "🔀 Revolver Letras",
    clearLettersBtn: "⌫ Borrar",
    correctCheers: [
      "🐝 ¡Excelente! ¡La deletreaste perfecto!",
      "🍯 ¡Dulce victoria! ¡Muy bien hecho!",
      "🌟 ¡Súper campeón de Spelling Bee!",
      "🎉 ¡Correcto! ¡Sigue así!"
    ],
    tryAgainMsg: "¡Casi! Revisa las letras marcadas e inténtalo de nuevo.",
    activityCompletedTitle: "🎉 ¡Actividad del Grupo Completada!",
    activityCompletedDesc: "¡Gran trabajo estudiando el Grupo {group}! ¿Quieres jugar otra actividad o hacer la prueba de este grupo?",
    playAgainBtn: "🔄 Jugar de Nuevo",
    tryAnotherGameBtn: "🎮 Elegir Otra Actividad",
    goToGroupTestBtn: "🎤 Probar Este Grupo Ahora",

    // Specific Activity Instructions
    fillBlankInstr: "¡Toca las fichas de letras abajo (o usa el teclado) para completar las letras que faltan!",
    wordSoupInstr: "¡Toca la PRIMERA letra y luego la ÚLTIMA letra de una palabra oculta (o desliza tu dedo)!",
    wordSoupFoundCount: "Encontradas {found} de {total} palabras",
    wordSoupNewGridBtn: "🔄 Generar Nueva Sopa",
    crosswordInstr: "¡Toca cualquier casilla del crucigrama, lee la pista Horizontal o Vertical y escribe las letras!",
    crosswordAcross: "HORIZONTALES (Across)",
    crosswordDown: "VERTICALES (Down)",
    crosswordCheckBtn: "✔️ Revisar Crucigrama",
    crosswordRevealLetterBtn: "💡 Revelar 1 Letra",
    scrambleInstr: "¡Toca las letras del panal en el orden correcto para formar la palabra en inglés!",
    beeKeeperInstr: "¡Toca las letras de la A a la Z para descubrir la palabra secreta antes de perder los 6 tarros de miel!",
    beeKeeperJarsLeft: "Tarros de Miel: {jars}",
    flashSpellInstr: "¡Observa con atención la palabra! Cuando se cierre la cortina, escríbela de memoria.",
    flashPeekBtn: "👀 Ver de Nuevo (3 seg)",
    flashLookNow: "¡Memoriza las letras difíciles! Se oculta en {sec}s...",
    flashNowSpell: "¡Ahora deletrea la palabra de memoria!",

    // Testing Phase
    testTitle: "Fase de Prueba — Spelling Bee Oral",
    testSubtitle: "Un adulto o juez dice cada palabra en voz alta. El niño la deletrea en voz alta y tú marcas Correcto o Incorrecto.",
    testModeGroupCardTitle: "🎯 Prueba por Grupo de Dificultad",
    testModeGroupCardDesc: "Evalúa un Grupo de Dificultad específico y guarda el Récord (High Score) de ese grupo.",
    testModeMixedCardTitle: "🏆 Prueba Mezclada (Todos los Niveles)",
    testModeMixedCardDesc: "¡Mezcla palabras de TODOS los grupos de dificultad para un examen real de competencia!",
    selectGroupForTest: "Elige el Grupo de Dificultad a Evaluar:",
    wordOrderLabel: "Orden de las Palabras:",
    orderShuffled: "🔀 Orden Aleatorio (Recomendado)",
    orderSequential: "📋 En Orden de la Lista",
    mixedWordCountLabel: "Cantidad de Palabras en Prueba Mezclada:",
    mixedAllWords: "Todas las Palabras ({count})",
    mixed10Words: "10 Palabras al Azar",
    mixed15Words: "15 Palabras al Azar",
    mixed25Words: "25 Palabras al Azar",
    startGroupTestBtn: "🎤 Iniciar Prueba del Grupo {group}",
    startMixedTestBtn: "🏆 Iniciar Prueba Mezclada Oficial",

    // Live Oral Test Screen
    proctorBanner: "📢 VISTA DEL JUEZ/ADULTO: Di la palabra en voz alta. Escucha al niño deletrearla y marca Correcto o Incorrecto.",
    privacyShieldToggle: "🙈 Ocultar Palabra en Pantalla (Tocar para Ver)",
    tapToPeekMsg: "🔒 Palabra Oculta para el Niño — Toca Aquí para Verla",
    sayOutLoudLabel: "DI ESTA PALABRA EN INGLÉS EN VOZ ALTA:",
    spellBreakdownLabel: "Guía Letra por Letra:",
    markRightBtn: "✅ ¡Correcto! (Bien Deletreada)",
    markWrongBtn: "❌ Incorrecto (Necesita Práctica)",
    undoLastMarkBtn: "↩️ Deshacer Palabra Anterior",
    endTestEarlyBtn: "⏹️ Terminar Prueba Ahora",
    testLiveRight: "Correctas: {count}",
    testLiveWrong: "Incorrectas: {count}",
    testLiveRemaining: "Faltan: {count}",

    // Test Results & High Score Screen
    testCompleteTitle: "¡Resultados de la Prueba!",
    newHighScoreBanner: "🏆 ¡NUEVO RÉCORD (HIGH SCORE) EN ESTE MODO! 🎉",
    highScoreMaintained: "Mejor Récord Guardado: {best}% ({bestRaw})",
    yourScoreLabel: "Puntaje Obtenido",
    rightWordsHeading: "✅ Palabras Deletreadas Correctamente ({count})",
    wrongWordsHeading: "❌ Palabras para Practicar ({count})",
    tuneStrugglePrompt: "💡 ¿Al niño le costaron las palabras falladas? Sube su nivel de dificultad con un toque:",
    bumpAllMissedBtn: "🔼 Subir Todas las Falladas +1 Grupo de Dificultad",
    bumpedSuccessMsg: "¡Movida al Grupo {group}!",
    retakeTestBtn: "🔄 Repetir Esta Prueba",
    studyMissedGroupBtn: "📚 Ir a la Fase de Estudio",
    backToTestMenuBtn: "← Volver al Menú de Pruebas",

    // High Scores & Progress Tab
    scoresTitle: "Récords (High Scores) y Progreso",
    scoresSubtitle: "Récords guardados para cada Grupo de Dificultad y para el Modo Mezclado en tu lista activa.",
    mixedHighScoreCardTitle: "🏆 Récord de Prueba Mezclada (Todas las Dificultades)",
    groupHighScoresTitle: "📊 Récords por Grupo de Dificultad",
    bestScoreStat: "Mejor Récord: {pct}% ({right}/{total})",
    attemptsStat: "Pruebas Realizadas: {attempts}",
    lastTestedStat: "Última Prueba: {date}",
    noTestsRecorded: "Aún no hay pruebas registradas — ¡ve a la Fase de Prueba!",
    recentHistoryTitle: "🕓 Historial de Pruebas Recientes",
    clearScoresBtn: "Reiniciar Récords de Esta Lista",

    // Modals (Connect iPad/Phone & Backup)
    connectModalTitle: "📱 Usar en iPad o iPhone",
    connectModalDesc: "Para abrir esta app en un iPad o iPhone conectado al mismo Wi-Fi, abre Safari en el dispositivo y escribe la dirección de abajo (o agrégala a la Pantalla de Inicio):",
    backupModalTitle: "💾 Guardar o Restaurar Respaldo",
    backupModalDesc: "Tus listas de palabras y récords se guardan automáticamente en el navegador y en el servidor local. También puedes descargar un archivo de respaldo.",
    exportJsonBtn: "⬇️ Descargar Respaldo (.json)",
    importJsonBtn: "⬆️ Restaurar desde Archivo (.json)",
    closeModalBtn: "Cerrar"
  }
};

// Built-in 3rd Grade Spelling Bee Dictionary with English & Spanish Clues
window.WORD_CLUES_DB = {
  "apple": { en: "A round red or green fruit that grows on trees.", es: "Fruta redonda roja o verde (manzana)." },
  "happy": { en: "Feeling joy and smiling.", es: "Sentirse alegre y sonriente (feliz)." },
  "water": { en: "Clear liquid that falls as rain and fills rivers.", es: "Líquido transparente que bebemos (agua)." },
  "paper": { en: "Thin sheets you write or draw on.", es: "Hoja delgada donde escribes o dibujas (papel)." },
  "music": { en: "Sounds made by singing or playing instruments.", es: "Sonidos de canciones e instrumentos (música)." },
  "tiger": { en: "A large wild cat with orange fur and black stripes.", es: "Gran felino con rayas negras (tigre)." },
  "cloud": { en: "A white or gray fluffy shape floating in the sky.", es: "Forma blanca o gris que flota en el cielo (nube)." },
  "train": { en: "A vehicle that rides on railway tracks.", es: "Transporte que viaja sobre rieles (tren)." },
  "smile": { en: "What your mouth does when you are happy.", es: "Gesto alegre de la boca (sonrisa)." },
  "plant": { en: "A living green thing with leaves and roots.", es: "Ser vivo verde con hojas y raíces (planta)." },
  "pencil": { en: "A wooden tool with lead used for writing and drawing.", es: "Útil escolar para escribir y borrar (lápiz)." },
  "garden": { en: "A piece of land where flowers and vegetables grow.", es: "Lugar donde crecen flores y plantas (jardín)." },
  "rabbit": { en: "A furry animal with long ears that hops.", es: "Animal peludo de orejas largas que salta (conejo)." },
  "window": { en: "An opening in a wall with glass that lets light in.", es: "Abertura con vidrio en la pared (ventana)." },
  "yellow": { en: "The bright color of lemons, sunflowers, and bees.", es: "El color brillante del sol y los limones (amarillo)." },
  "monkey": { en: "A playful animal with a long tail that climbs trees.", es: "Animal juguetón que trepa árboles (mono)." },
  "winter": { en: "The coldest season of the year when snow falls.", es: "La estación más fría del año (invierno)." },
  "summer": { en: "The warmest season of the year, great for swimming.", es: "La estación más calurosa del año (verano)." },
  "planet": { en: "A large round world in space that orbits a star, like Earth.", es: "Mundo grande que gira alrededor del sol (planeta)." },
  "bridge": { en: "A structure built over a river or road so people can cross.", es: "Estructura para cruzar sobre un río (puente)." },
  "castle": { en: "A huge stone building with towers where kings and queens lived.", es: "Gran edificio de piedra para reyes (castillo)." },
  "island": { en: "Land that is completely surrounded by water.", es: "Tierra rodeada completamente de agua (isla)." },
  "forest": { en: "A large area of land covered with many trees.", es: "Gran lugar lleno de árboles (bosque)." },
  "friend": { en: "Someone you like and enjoy playing with.", es: "Persona con la que compartes y juegas (amigo)." },
  "school": { en: "The place where children go to learn with teachers.", es: "Lugar donde los niños van a aprender (escuela)." },
  "holiday": { en: "A special day of celebration or vacation.", es: "Día festivo o de vacaciones." },
  "kitchen": { en: "The room in a house where food is cooked.", es: "Habitación donde se prepara la comida (cocina)." },
  "morning": { en: "The early part of the day when the sun rises.", es: "Primera parte del día al salir el sol (mañana)." },
  "balloon": { en: "A colorful rubber bag filled with air that floats at parties.", es: "Bolsa colorida inflada con aire en fiestas (globo)." },
  "dolphin": { en: "A smart, friendly ocean mammal that jumps out of the waves.", es: "Mamífero marino muy inteligente (delfín)." },
  "whisper": { en: "To speak very softly using your breath instead of your voice.", es: "Hablar muy bajito al oído (susurrar)." },
  "blanket": { en: "A soft warm cover you put over yourself in bed.", es: "Cobija suave para abrigarse en la cama (manta)." },
  "thunder": { en: "The loud booming sound that follows lightning in a storm.", es: "Sonido fuerte durante una tormenta (trueno)." },
  "library": { en: "A quiet building or room full of books you can borrow.", es: "Lugar lleno de libros para leer (biblioteca)." },
  "captain": { en: "The leader of a ship, airplane, or sports team.", es: "El líder de un barco o equipo (capitán)." },
  "laughter": { en: "The happy sound people make when something is funny.", es: "El sonido alegre cuando algo da gracia (risa)." },
  "mountain": { en: "A very high hill of rock and earth reaching toward the sky.", es: "Elevación natural muy alta de tierra (montaña)." },
  "calendar": { en: "A chart showing the days, weeks, and months of the year.", es: "Tabla con los días y meses del año (calendario)." },
  "treasure": { en: "A chest or collection of gold, jewels, and valuable things.", es: "Cofre con oro y joyas valiosas (tesoro)." },
  "umbrella": { en: "Something you hold over your head to stay dry in the rain.", es: "Objeto para protegerse de la lluvia (paraguas)." },
  "hospital": { en: "A place where doctors and nurses care for sick people.", es: "Lugar donde médicos cuidan a los enfermos (hospital)." },
  "elephant": { en: "The largest land animal, with big ears and a long trunk.", es: "Gran animal con trompa larga (elefante)." },
  "sandwich": { en: "Two slices of bread with tasty fillings in between.", es: "Dos rebanadas de pan con relleno (sándwich)." },
  "surprise": { en: "Something unexpected that makes you say 'Wow!'", es: "Algo inesperado que asombra (sorpresa)." },
  "neighbor": { en: "A person who lives next door or near your home.", es: "Persona que vive cerca de tu casa (vecino)." },
  "butterfly": { en: "An insect with four large, brightly colored wings.", es: "Insecto con alas grandes y coloridas (mariposa)." },
  "adventure": { en: "An exciting and daring journey or experience.", es: "Un viaje emocionante e increíble (aventura)." },
  "chocolate": { en: "A sweet brown treat made from roasted cacao beans.", es: "Dulce delicioso hecho de cacao (chocolate)." },
  "astronaut": { en: "A person trained to travel in a spacecraft into outer space.", es: "Viajero del espacio exterior (astronauta)." },
  "celebrate": { en: "To do something special and fun for an important event.", es: "Festejar un día o logro especial (celebrar)." },
  "important": { en: "Having great value or meaning; something that matters a lot.", es: "Algo de gran valor o que importa mucho (importante)." },
  "beautiful": { en: "Wonderful to look at or listen to; very pretty.", es: "Algo muy bonito o hermoso (hermoso/bello)." },
  "knowledge": { en: "Facts, skills, and understanding gained through learning.", es: "Sabiduría y lo que aprendemos (conocimiento)." },
  "vegetable": { en: "A healthy plant food like carrots, broccoli, or spinach.", es: "Alimento saludable como zanahoria o brócoli (verdura)." },
  "crocodile": { en: "A large reptile with scaly skin and big jaws that lives near rivers.", es: "Gran reptil de río con mandíbulas fuertes (cocodrilo)." },
  "scientist": { en: "A person who studies nature and does experiments in a lab.", es: "Persona que investiga y hace experimentos (científico)." },
  "dangerous": { en: "Likely to cause harm if you are not careful.", es: "Algo que puede causar daño (peligroso)." },
  "wonderful": { en: "Extremely good, marvelous, and delightful.", es: "Maravilloso, fantástico y excelente." },
  "telescope": { en: "An instrument with lenses used to look at distant stars and planets.", es: "Instrumento para ver las estrellas y planetas (telescopio)." },
  "strawberry": { en: "A sweet, bright red berry with tiny seeds on the outside.", es: "Fruta roja dulce con semillitas por fuera (fresa)." }
};

// Generate a smart clue in EN or ES for any word
window.getWordClue = function(wordObj, lang = 'en') {
  const clean = (wordObj.word || '').toLowerCase().trim();
  if (wordObj.hint && wordObj.hint.trim().length > 0) {
    return wordObj.hint.trim();
  }
  if (window.WORD_CLUES_DB[clean] && window.WORD_CLUES_DB[clean][lang]) {
    return window.WORD_CLUES_DB[clean][lang];
  }
  // Auto-generate a kid-friendly structural clue when a custom word has no manual definition
  const len = clean.length;
  const first = clean.charAt(0).toUpperCase();
  const last = clean.charAt(len - 1).toUpperCase();
  const vowels = (clean.match(/[aeiou]/g) || []).length;
  const consonants = len - vowels;
  const hasDouble = /(.)\1/.test(clean);

  if (lang === 'es') {
    const dblText = hasDouble ? ' • Tiene letras dobles seguidas' : '';
    return `Palabra en inglés de ${len} letras: empieza con "${first}", termina con "${last}" (${vowels} vocales, ${consonants} consonantes${dblText}).`;
  } else {
    const dblText = hasDouble ? ' • Has double letters' : '';
    return `${len}-letter word starting with "${first}" and ending with "${last}" (${vowels} vowels, ${consonants} consonants${dblText}).`;
  }
};
