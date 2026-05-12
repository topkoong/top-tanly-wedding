# Architecture

## Overview

Tan & Top Wedding ships as a **Next.js App Router** app configured for **`output: "export"`** (static HTML/JS/CSS in `out/`). There is **no server runtime**, **no API routes**, **no server actions**, **no database**, and **no auth** in-repo.

Pinned versions live in **`package.json`** (currently Next **16.2.6**, React **19.2.4**, Tailwind **v4**, TypeScript **5.x**, Playwright dev **1.x**).

## App structure (`app/`)

- **`layout.tsx`** — Root shell: fonts (`next/font/google`: Cormorant Garamond, Inter, IBM Plex Sans Thai), metadata, Navbar, Footer, global styles.
- **`page.tsx`** — Thai home (`/`).
- **`schedule/page.tsx`**, **`venue/page.tsx`**, **`gallery/page.tsx`**, **`faq/page.tsx`**, **`line/page.tsx`** — Thai routes.
- **`en/`** — Mirrors the above under `/en/...`.

**Not present:** dynamic API routes, `middleware.ts` locale redirects, RSVP or form endpoints.

## Route structure & i18n

- **Thai:** root paths (`/` … `/line/`).
- **English:** prefixed with `/en/`.
- **No middleware.** Locale follows the URL segment only.

`next.config.ts` sets `trailingSlash: true` for static-export-friendly canonical URLs matching GitHub Pages.

## Content structure (`content/`)

- **`content/schema.ts`** — Shared TypeScript types for page content objects.
- **`content/site.ts`** — `getSiteContent(locale)` router.
- **`content/th/*.ts`** — Thai copy (single source per page).
- **`content/en/*.ts`** — English copy.

**Rule:** visible strings belong in content files—not inline in JSX—for parity and translation safety.

Branding constants also exist under `content/th/couple.ts` and `content/en/couple.ts` where useful.

## Component structure

```
components/layout/   Navbar, Footer, MobileMenu
components/sections/ HomeShell, ScheduleSection, VenueSection, GallerySection,
                     FaqSection, LineSection
components/ui/       Button, Container, Section, Heading, PlaceholderImage, FadeIn, …
components/icons/    TNMonogram (and similar)
```

- Prefer **React Server Components**; use **`"use client"`** where state/browser APIs are needed (Navbar scroll, MobileMenu, FAQ accordion, FadeIn wrappers using `motion`).
- Compose with **`cn()`** (`clsx` + `tailwind-merge`).

## Styling

Tailwind CSS **v4** with design tokens declared in **`app/globals.css`** (`@theme`). No CSS-in-JS.

## Static export strategy

From `next.config.ts` (conceptually):

```ts
output: "export"
trailingSlash: true
images: { unoptimized: true }
```

`next/image` remains valid for sizing and markup; optimisation is delegated to export-friendly config.

### GitHub Pages `basePath` / `assetPrefix`

When **`GITHUB_PAGES=true`** at build time:

- `basePath: "/top-tanly-wedding"`
- `assetPrefix: "/top-tanly-wedding/"`

Local **`pnpm dev`** / default **`pnpm build`** omit these so URLs stay at the site root (`/`).

See [DEPLOYMENT.md](./DEPLOYMENT.md).

## Visual QA tooling

Optional **Playwright** full-page screenshots: **`pnpm screenshots`** (`scripts-capture-screenshots.mjs`). Output: **`docs/screenshots/{mobile-390,tablet-768,desktop-1440}/`**.

Install browsers when needed:

```bash
pnpm exec playwright install chromium
```

## Constraints summary

| Area | Policy |
|------|--------|
| Backend / API | None |
| Forms / RSVP | Not allowed |
| Database / Auth | Not allowed |
| Analytics (MVP) | Not configured |
| Public uploads | Not allowed |
| Locale routing | Explicit paths only |
