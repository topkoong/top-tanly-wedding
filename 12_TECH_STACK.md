# 12 — Technical Stack

> **Pinned versions** — read `package.json` when updating this table. Snapshot at documentation pass: Next **16.2.6**, React **19.2.4**, TypeScript **^5**, Tailwind **^4**, Playwright dev **^1.59**.

## Core stack

- **Next.js** 16.2.x App Router (static-export friendly)
- **React** 19.x
- **TypeScript** (strict)
- **Tailwind CSS** v4
- **`pnpm`** (required package manager — see `"packageManager": "pnpm@…"`)
- **`next/font/google`** — Cormorant Garamond, Inter, **IBM Plex Sans Thai**
- **`lucide-react`**
- **`motion`** (subtle animations; respect `prefers-reduced-motion`)
- **`clsx`** + **`tailwind-merge`** (`cn()` helper)
- **`playwright`** (**devDependency**) — optional deterministic screenshot QA via `pnpm screenshots`

## Export and routing

- Use static export (**`output: "export"`**).
- **`trailingSlash: true`** aligns with hosted URLs ending in `/`.
- **`images.unoptimized: true`** for static hosting compatibility (`next/image` still usable for sizing/markup).

Thai routes at root (`/schedule/`, `/venue/`, …); English under **`/en/...`**.
**No middleware locale routing.**

### GitHub Pages base path wiring

Production builds exporting to **`topkoong.github.io/top-tanly-wedding/`** set:

```txt
GITHUB_PAGES=true → basePath = "/top-tanly-wedding"
                 → assetPrefix = "/top-tanly-wedding/"
```

Local **`pnpm dev`** omits extra base segments.

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Route surface

Thai `/`, `/schedule/`, `/venue/`, `/gallery/`, `/faq/`, `/line/` mirrored under `/en/...`.

Excluded from scope: Accommodation, Dress Code, RSVP/contact surfaces, authenticated dashboards.

## Non-goals

Accommodation routes, Dress Code routes, RSVP, contact forms/chatbots/uploads, databases, auth/session stores, middleware locale switching, MVP analytics instrumentation.

(See **`10_ACCEPTANCE_CRITERIA_QA.md`** for QA enforcement.)

## Tooling conventions

- Components PascalCase modules default-exported (`components/**/*`).
- Content modules camelCase with named exports typed via **`content/schema.ts`**.
- Utilities live under **`lib/`** lowercase named exports only.
- Scripts: Playwright screenshot driver `scripts-capture-screenshots.mjs` executed through **`pnpm screenshots`**.

## Performance expectations

Maintain mobile readability under ~150 KB critical JS guideline from earlier planning docs; Lighthouse targets aspirational—not blocking—during content freeze but chase regressions proactively.

Lazy-load heavyweight embeds (Google Maps iframe) with `loading="lazy"`.

Use icon tree-shaken imports (`import { MapPin } from 'lucide-react'` patterns).

Run **`pnpm lint`** / **`pnpm build`** after materially touching UI or routing.
