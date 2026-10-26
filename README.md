# visual-proof-kit

One shared [Remotion](https://remotion.dev) project that renders a **visual-proof kit** for every MelodicBloom repo:

| Output | Composition | Size |
|---|---|---|
| `out/<slug>/hero.mp4` | `HeroLoop` — 8 s @ 30 fps, seamless loop (phase-driven, frame 240 ≡ frame 0) | 1280×720 |
| `out/<slug>/hero-poster.jpg` | `HeroLoop` frame 36 | 1280×720 |
| `out/<slug>/og.png` | `OgCard` (Still) | 1200×630 |

Look: grain + paper-fiber noise, a rotating thin-film iridescent sheen, and a tilting frosted "material" card — tactile, not SaaS gradient spam.

## Props
```json
{ "repo": "wildfire-iridescent",
  "tagline": "One-line value prop",
  "homepage": "https://wildfire-iridescent.vercel.app",
  "palette": ["#120d16", "#ff7a45", "#b38cff", "#fff1e6"] }
```
`palette` = `[base, accentA, accentB, ink]`.

## Usage
```bash
npm i
npm run studio                                   # preview
npm run render:hero -- --props=props/<slug>.json # hero.mp4 + hero-poster.jpg
npm run render:og   -- --props=props/<slug>.json # og.png
npm run render:all  -- --props=props/<slug>.json
```
`--props` also accepts inline JSON.

## Adding the next repo
1. `gh api repos/MelodicBloom/<repo> --jq '{homepage,description}'`
2. Create `props/<repo>.json` (rewrite the description into a tight tagline; pick a palette that matches the repo's own tokens).
3. `npm run render:all -- --props=props/<repo>.json`
4. In the target repo, copy `out/<repo>/*` to `docs/visual-proof/` and paste the README snippets below. Open a PR with only those changes.

## README snippets
**Live demo badge**
```md
[![Live demo](https://img.shields.io/badge/live%20demo-<repo>.vercel.app-111?style=for-the-badge&logo=vercel)](https://<repo>.vercel.app)
```
**Hero poster → video** (GitHub doesn't autoplay repo MP4s in README; poster links to the loop)
```md
[![<repo> hero loop](docs/visual-proof/hero-poster.jpg)](docs/visual-proof/hero.mp4)
```
**OG image** — point `og:image` / Next.js `metadata.openGraph.images` at `og.png` if you want it as the social card.

**Lighthouse** — no score is published unless one was actually measured:
```md
Lighthouse: run locally — `npx lighthouse https://<repo>.vercel.app --view`
```
