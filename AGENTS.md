# Portfolio Website — Project Sync & Exclusion Rules

When scanning `/Users/max/Local/Projects` to add or update portfolio entries in this repository:

1. **Permanent Exclusions (NEVER Include):**
   - **`RelaisPalais Rework`** (`Relais Palais Rework`): Permanently excluded per user instruction. Never add it to `src/data.js`, `public/games/`, `public/assets/icons/`, or `TLDR` in future portfolio scans or updates.
2. **Playable vs. Demo Policy:**
   - All new projects from `/Users/max/Local/Projects` belong in the **Modern (Liquid Glass)** section (`MODERN_APPS` in `src/data.js`).
   - If a project has a playable build, bundle/upload it under `public/games/<slug>/`.
   - **If a project has a Demo version, ONLY upload the Demo version** (never the full game build).
   - If a project does not have a directly playable web build, interview the user first on how best to represent it as a portfolio piece.
3. **Strict Workspace Isolation & Privacy:**
   - Never add, modify, or delete any files outside `/Users/max/Local/Projects/Portfolio Website` when syncing sibling projects.
   - Never copy `.env` files, API keys, credentials, or real financial/patient data; trading simulators must use 100% synthetic/simulated data.
   - Keep `game-localization` (`Game-to-Spanish Localization Pipeline`) 100% generic and anonymized—never mention any confidential game title, character names, studio names, or genre labels (`RPG`).
4. **Deployment:**
   - After committing and pushing `main`, run `npm run deploy` so `gh-pages` (`https://mascaz.github.io/`) stays in sync with `main`.
