# Maxwell's Professional Life — Portfolio (`mascaz.github.io`)

Live site: **`https://mascaz.github.io/`**

Interactive dual-era portfolio website for **Maxwell Montes Diaz**:
1. **Device Selector Hub (`"Maxwell's Professional Life"`):** Choose between a classic desktop/iPhone or a modern laptop/iPhone, or click the **Stack of Paper & Pen (`TLDR`)** beneath the devices for a plain-text summary.
2. **Classic Skeuomorphic OS (Mac OS X 10.0–10.9 & iOS 1–6):** Showcases earlier commercial/studio projects (`CLASSIC_APPS`).
3. **Modern Liquid Glass OS:** Showcases modern projects (`MODERN_APPS`) with embedded playable builds inside [`public/games/`](./public/games).

---

## How to Update Information or Add a Project Yourself

All text, bio details, links, icons, and the `TLDR` paper sheet are driven from a single file: **[`src/data.js`](./src/data.js)**.

### 1. Updating Bio, Links, or Project Text
- Open [`src/data.js`](./src/data.js):
  - Edit `PROFILE` to update your email, phone, GitHub, LinkedIn, CV link, or bio paragraphs.
  - Edit `MODERN_APPS` or `CLASSIC_APPS` to change any project's title, `tldr` (used in the TLDR paper modal), or `description`.

### 2. Adding a New Modern Liquid Glass Project
1. **Icon:** Place the icon image in `public/assets/icons/<id>.png` (or `.svg`).
2. **Screenshots (Optional):** Place screenshots in `public/assets/screenshots/<id>/`.
3. **Playable Web Build:** Copy the project's static web build (`index.html` and assets, built with relative paths `base: './'`) into `public/games/<id>/`.
   - *Note for Expo Web builds:* If an Expo export creates `assets/node_modules/`, rename that subfolder to `assets/vendor/` and update `"/assets/node_modules/` to `"/games/<id>/assets/vendor/` in its entry JS so Git/GitHub Pages doesn't ignore font files inside `node_modules`.
4. **Register in [`src/data.js`](./src/data.js):** Add an object to the `MODERN_APPS` array:
   ```js
   {
     id: 'my-new-game',
     name: 'My New Game',
     shortName: 'New Game',
     folder: 'My-New-Game-Folder',
     category: 'Genre • Tech Stack',
     iconUrl: './assets/icons/my-new-game.png',
     playUrl: './games/my-new-game/index.html?v=1',
     playLabel: 'Play Live',
     tldr: 'One-sentence summary for the TLDR paper sheet.',
     description: 'Full description shown in the Info & Screenshots tab.',
     tech: ['TypeScript', 'Vite'],
     screenshots: ['./assets/screenshots/my-new-game/01.png']
   }
   ```

### 3. Preview Locally & Deploy to `https://mascaz.github.io/`
```bash
# Preview locally at http://localhost:5173
npm run dev

# Save source changes to main branch
git add . && git commit -m "Update portfolio" && git push origin main

# Build and publish live to https://mascaz.github.io/ (gh-pages branch)
npm run deploy
```
