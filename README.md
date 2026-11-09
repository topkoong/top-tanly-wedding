# Tan & Top Wedding Website

Static, read-only, bilingual wedding information website for **Tan & Top**.

## If you are new, or opening this in six months

Read this first, then [AGENTS.md](AGENTS.md) and [docs/MAINTAINING.md](docs/MAINTAINING.md). Ignore numbered specs `00`–`12` unless something here points you there.

**Wedding day:** Sunday 29 November 2026 · Conrad Bangkok.

1. Install [pnpm](https://pnpm.io/) (this repo is pnpm-only).
2. `pnpm install && pnpm dev` → [http://localhost:3000](http://localhost:3000) (English). Thai is `/th/`.
3. Change guest copy in `content/th/` **and** `content/en/`. Never hardcode strings in JSX.
4. Drop photo originals in `photos-src/` (gitignored) and run `pnpm photos`. Commit the `public/` WebP / mp4 output only.
5. Ship by merging to **`main`**. GitHub Actions publishes [the live site](https://topkoong.github.io/top-tanly-wedding/). Hard-refresh if images look stale.
6. RSVP is **not** on this site. The home `#rsvp` button opens a Google Form (`homeShell.rsvpFormUrl` in `content/en/site.ts` and `content/th/site.ts`). Responses land in the couple’s Google Sheet.

There is no database, `.env`, login, or API. The only access to hand over is **GitHub repo + Pages**, the **Google Form / Sheet**, and whoever pays for the GitHub account.

If the wedding has already happened: you can leave the site as a keepsake, close or unlink the form, and you still must not add an on-site RSVP.

## Live site

[https://topkoong.github.io/top-tanly-wedding/](https://topkoong.github.io/top-tanly-wedding/)

## Current product decisions

- **Languages:** English at the root (`/`). Thai routes live under `/th/`.
- **Visible naming (bride-first):** Friendly **Tan & Top** · Formal **Narueporn & Theerut**.
- **RSVP is external only:** the home page links to the couple's Google Form (`homeShell.rsvpFormUrl`); the site itself stores or counts nothing.
- **Save the date:** English “Save the date”; Thai **จองวันไว้เลยนะ**. The 30s film sits on home (`#film`), after Conrad and before RSVP — not on the gallery.
- **No forms** (no public contact RSVPs or guest uploads).
- **No chatbot** / AI assistant on the website.
- **No backend surfaces:** no API routes, server actions, database, or authentication.
- **No analytics** in MVP.
- **No middleware** for locale routing (explicit `/` English + `/th/` Thai only).
- **No LINE Official Account** — guest support is the FAQ page only.

## Visual direction (summary)

Warm paper invitation (`#fff5e6`) and near-black ink. No florals. Olive tokens are ink, not green; the brown envelope is intro-only — do not retint it when changing cream. Mobile-first: fixed **bottom navigation** (Home · Schedule · Venue · Gallery · FAQ) below `lg` with safe-area padding. Full handbook: [docs/MAINTAINING.md](docs/MAINTAINING.md).

## Wedding details

| | |
|--|--|
| **Date (English)** | Sunday, 29 November 2026 |
| **Date (Thai)** | วันอาทิตย์ที่ 29 พฤศจิกายน 2569 |
| **Venue** | Conrad Bangkok |
| **Engagement & Rubwai** | 07:00–11:00 · Beverly Hills |
| **Wedding reception** | 11:00–14:00 · Conrad Ballroom |
| **Parking** | Conrad Bangkok · All Seasons Place |

## Active routes

**English (root)**

- `/`
- `/schedule/`
- `/venue/`
- `/gallery/`
- `/faq/`

**Thai**

- `/th/`
- `/th/schedule/`
- `/th/venue/`
- `/th/gallery/`
- `/th/faq/`

> Production uses `trailingSlash: true`; paths above match deployed URLs.

**Not implemented (do not document as active)**

- `/accommodation`, `/dress-code`, RSVP, contact forms, chatbot routes.

**Primary navigation**

- Thai: กำหนดการ · สถานที่ · แกลเลอรี · คำถามที่พบบ่อย · EN  
- English: Schedule · Venue · Gallery · FAQ · TH

## Tech stack

From `package.json` (exact versions):

| Package | Version |
|---------|---------|
| [Next.js](https://nextjs.org/) | 16.2.6 |
| [React](https://react.dev/) | 19.2.4 |
| [TypeScript](https://www.typescriptlang.org/) | ^5 |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 |
| [pnpm](https://pnpm.io/) | 9.15.0 (see `packageManager` field) |
| [motion](https://motion.dev/) | ^12.38.0 |
| [lucide-react](https://lucide.dev/) | ^1.14.0 |
| [Playwright](https://playwright.dev/) (dev) | ^1.59.1 |

- **Fonts:** Bellefair (display), Perandory (couple name), Inter (UI), IBM Plex Sans Thai. See `lib/fonts.ts`.
- **Output:** static export (`out/`), GitHub Pages under project path `/top-tanly-wedding` when `GITHUB_PAGES=true`.
- **`next.config.ts`:** `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`, conditional `basePath` / `assetPrefix`.

## Local development

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) (no base path locally). Thai is `/th/`.

Photo originals: `photos-src/home/`, `photos-src/gallery/`, `photos-src/video/save-the-date.mp4`. Convert with `pnpm photos` (or `node scripts/optimize-photos.mjs` if Corepack fails). Do not commit originals.

Static export output: `out/`.

## Deployment

- **CI:** `.github/workflows/deploy.yml` — pnpm setup, Node LTS cache, `pnpm install --frozen-lockfile`, **`pnpm build`** with **`GITHUB_PAGES=true`**, `touch out/.nojekyll`, upload `out/`, deploy to GitHub Pages.
- **Published URL:** [https://topkoong.github.io/top-tanly-wedding/](https://topkoong.github.io/top-tanly-wedding/)

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Playwright screenshot QA

Full-page screenshots for Developer / QA (Thai + English routes, three viewports).

**Install / repair Chromium (first time or after upgrading Playwright):**

```bash
pnpm exec playwright install chromium
```

**Run (default BASE_URL is the deployed GitHub Pages site):**

```bash
pnpm screenshots
```

**Capture against local dev** (ensure `pnpm dev` is running):

```bash
BASE_URL=http://localhost:3000 pnpm screenshots
```

**Capture against deployed production:**

```bash
BASE_URL=https://topkoong.github.io/top-tanly-wedding pnpm screenshots
```

**Expected output:**

- `docs/screenshots/mobile-390/`
- `docs/screenshots/tablet-768/`
- `docs/screenshots/desktop-1440/`

The script disables CSS animations/transitions during capture so motion does not yield half-rendered shots. Screenshots can be large—commit selectively or `.gitignore` if preferred.

Implementation: [`scripts-capture-screenshots.mjs`](scripts-capture-screenshots.mjs). Script command: **`pnpm screenshots`** (`package.json`).

## Documentation index

| Document | Purpose |
|----------|---------|
| [AGENTS.md](AGENTS.md) | Short agent brief; points at the photos subagent |
| [docs/MAINTAINING.md](docs/MAINTAINING.md) | **Current** design system, motion, content, photos, deploy |
| [docs/PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md) | Purpose, decisions, wedding facts |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | App, content, components, static export |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | GitHub Pages, env, workflow, post-deploy QA |
| [docs/VISUAL_QA.md](docs/VISUAL_QA.md) | Viewports, Playwright, motion acceptance |
| [docs/DOCUMENTATION_AUDIT.md](docs/DOCUMENTATION_AUDIT.md) | What was audited and updated |

Legacy numbered specs (`00_PRODUCT_BRIEF.md` … `12_TECH_STACK.md`) are audited in the documentation audit; **`09_CURSOR_AGENT_INSTRUCTIONS.md`** is **historical**—use README + `docs/` for agent truth.

## AI / Cursor guardrails

Cursor loads [`.cursor/rules/wedding-site.mdc`](.cursor/rules/wedding-site.mdc) on every chat and [`AGENTS.md`](AGENTS.md) as the repo brief.

For gallery, home slots, or the reel, Agent should use the **`wedding-photos`** subagent ([`.cursor/agents/wedding-photos.md`](.cursor/agents/wedding-photos.md)), or you can invoke `/wedding-photos`.

Human-readable rule summary: [`CURSOR_RULES_COPY.md`](CURSOR_RULES_COPY.md).

## Repository

[https://github.com/topkoong/top-tanly-wedding](https://github.com/topkoong/top-tanly-wedding)
