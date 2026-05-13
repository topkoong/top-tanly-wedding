# Tan & Top Wedding Website

Static, read-only, bilingual wedding information website for **Tan & Top**.

## Live site

[https://topkoong.github.io/top-tanly-wedding/](https://topkoong.github.io/top-tanly-wedding/)

## Current product decisions

- **Languages:** Thai is the default. English routes live under `/en`.
- **Visible naming (bride-first):** Friendly **Tan & Top** · Formal **Narueporn & Theerut**.
- **No RSVP** and no attendance counting.
- **No forms** (no public contact RSVPs or guest uploads).
- **No chatbot** / AI assistant on the website.
- **No backend surfaces:** no API routes, server actions, database, or authentication.
- **No analytics** in MVP.
- **No middleware** for locale routing (explicit Thai + `/en` routes only).
- **LINE:** supporting pages `/line` and `/en/line` only—not in primary navigation. LINE is for official updates, reminders, and manual support—**not** for describing instant answers or automated RSVP.

## Visual direction (summary)

Cream/ivory invitation surfaces, **olive** as the primary interactive accent (buttons, mobile bottom nav, icon wells), **gold** for thin dividers only, subtle SVG botanical hints on the home hero. Mobile-first: fixed **bottom navigation** (Home · Schedule · Venue · Gallery · FAQ) below the `lg` breakpoint with safe-area padding.

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

**Thai (default)**

- `/`
- `/schedule/`
- `/venue/`
- `/gallery/`
- `/faq/`
- `/line/`

**English**

- `/en/`
- `/en/schedule/`
- `/en/venue/`
- `/en/gallery/`
- `/en/faq/`
- `/en/line/`

> Production uses `trailingSlash: true`; paths above match deployed URLs.

**Not implemented (do not document as active)**

- `/accommodation`, `/dress-code`, RSVP, contact forms, chatbot routes.

**Primary navigation**

- Thai: กำหนดการ · สถานที่ · แกลเลอรี · คำถามที่พบบ่อย · EN  
- English: Schedule · Venue · Gallery · FAQ · TH  

LINE is not a main-nav item.

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

- **Fonts:** `next/font/google` — Cormorant Garamond, Inter, IBM Plex Sans Thai (`app/layout.tsx`).
- **Output:** static export (`out/`), GitHub Pages under project path `/top-tanly-wedding` when `GITHUB_PAGES=true`.
- **`next.config.ts`:** `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`, conditional `basePath` / `assetPrefix`.

## Local development

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) (no base path locally).

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
| [docs/PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md) | Purpose, decisions, routes, wedding facts |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | App, content, components, static export |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | GitHub Pages, env, workflow, post-deploy QA |
| [docs/VISUAL_QA.md](docs/VISUAL_QA.md) | Viewports, Playwright, motion acceptance |
| [docs/DOCUMENTATION_AUDIT.md](docs/DOCUMENTATION_AUDIT.md) | What was audited and updated |

Legacy numbered specs (`00_PRODUCT_BRIEF.md` … `12_TECH_STACK.md`) are audited in the documentation audit; **`09_CURSOR_AGENT_INSTRUCTIONS.md`** is **historical**—use README + `docs/` for agent truth.

## AI / Cursor guardrails

Cursor loads [`.cursor/rules/wedding-site.mdc`](.cursor/rules/wedding-site.mdc).

Human-readable duplicate: [`CURSOR_RULES_COPY.md`](CURSOR_RULES_COPY.md).

## Repository

[https://github.com/topkoong/top-tanly-wedding](https://github.com/topkoong/top-tanly-wedding)
