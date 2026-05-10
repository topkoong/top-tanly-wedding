# 12 — Technical Stack & File Structure

> **Position in reading order:** Append after `11_DEPLOYMENT_SECURITY_NOTES.md`.
>
> **Purpose:** ChatGPT's `09_CURSOR_AGENT_INSTRUCTIONS.md` says "Next.js, Tailwind or equivalent" — that's underspecified. Cursor will pick versions and libraries inconsistently across sessions. This file pins concrete choices.

---

## 1. Stack decisions

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | Latest stable, best image optimization, supports static export |
| Language | **TypeScript** (strict mode) | Catches errors early, better Cursor autocomplete |
| Styling | **Tailwind CSS v4** | Mobile-first by default, fast iteration |
| Package manager | **pnpm** | Fast installs, deterministic lockfile |
| Fonts | `next/font/google` | Self-hosted, zero layout shift |
| Display font | **Cormorant Garamond** | Per `03_DESIGN_SYSTEM.md` |
| Body font | **Inter** | Per `03_DESIGN_SYSTEM.md` |
| Animation | **`motion`** (formerly framer-motion) | Lightweight, respects `prefers-reduced-motion` |
| Icons | **`lucide-react`** | Clean line icons, tree-shakeable |
| Image optimization | `next/image` | Built-in lazy load, blur placeholder, AVIF/WebP |
| Maps | Google Maps embed `<iframe>` | No API key needed for read-only |
| Deployment | **Vercel** | Zero-config for Next.js, free tier sufficient |
| Analytics | None for MVP | Per `10_ACCEPTANCE_CRITERIA_QA.md` constraints |

### Static export

Configure `next.config.ts` with `output: 'export'` so the site builds to fully static HTML. This satisfies the "no backend" constraint from `00_PRODUCT_BRIEF.md` and keeps hosting options open beyond Vercel.

### Language routing for static export

- Thai is default at root routes.
- English lives under `/en`.
- Do not use middleware for language routing.
- Keep route definitions explicit and static-export-safe.

Because static export and default Next.js image optimization can conflict, configure one of these approaches for MVP:

```text
Recommended MVP: output: 'export' + images.unoptimized = true
Alternative: output: 'export' + custom image loader
Later option: remove static export and use the normal Vercel Next.js runtime
```

For MVP, use `images.unoptimized = true` and compress real images before adding them to `/public/images`.

---

## 2. File structure

```
top-and-tan/
├── app/
│   ├── layout.tsx                # Root layout: fonts, metadata, nav, footer
│   ├── page.tsx                  # Home
│   ├── schedule/page.tsx
│   ├── venue/page.tsx
│   ├── accommodation/page.tsx
│   ├── dress-code/page.tsx
│   ├── gallery/page.tsx
│   ├── faq/page.tsx
│   ├── line/page.tsx
│   ├── en/page.tsx
│   ├── en/schedule/page.tsx
│   ├── en/venue/page.tsx
│   ├── en/accommodation/page.tsx
│   ├── en/dress-code/page.tsx
│   ├── en/gallery/page.tsx
│   ├── en/faq/page.tsx
│   ├── en/line/page.tsx
│   ├── globals.css               # Tailwind + design tokens
│   ├── not-found.tsx
│   └── opengraph-image.tsx       # Optional Phase 2 only; MVP uses public/og-image.jpg
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Countdown.tsx
│   │   ├── ScheduleTimeline.tsx
│   │   ├── VenueMap.tsx
│   │   ├── AccommodationCard.tsx
│   │   ├── DressCodePalette.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── FAQAccordion.tsx
│   │   └── LineQRCard.tsx
│   ├── ui/
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── Heading.tsx
│   │   ├── Button.tsx
│   │   ├── PlaceholderImage.tsx
│   │   └── FadeIn.tsx
│   └── icons/
│       └── Monogram.tsx          # SVG of TN monogram
│
├── content/
│   ├── th/
│   │   ├── couple.ts
│   │   ├── schedule.ts
│   │   ├── venue.ts
│   │   ├── accommodation.ts
│   │   ├── dressCode.ts
│   │   ├── gallery.ts
│   │   ├── faq.ts
│   │   └── line.ts
│   └── en/
│       ├── couple.ts
│       ├── schedule.ts
│       ├── venue.ts
│       ├── accommodation.ts
│       ├── dressCode.ts
│       ├── gallery.ts
│       ├── faq.ts
│       └── line.ts
│
├── lib/
│   ├── utils.ts                  # cn() helper, date formatters
│   └── ics.ts                    # Generate .ics calendar file (optional)
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── gallery/
│   │   ├── venue/
│   │   └── accommodation/
│   ├── line-qr.png               # LINE OA QR code
│   ├── favicon.ico
│   └── og-image.jpg
│
├── .cursor/
│   └── rules/
│       └── wedding-site.mdc      # Auto-loaded Cursor rules
│
├── tailwind.config.ts             # Minimal; Tailwind v4 tokens live in app/globals.css
├── next.config.ts
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

---

## 3. Naming conventions

- **Components:** PascalCase, one component per file. `components/sections/Hero.tsx` exports default `Hero`.
- **Content:** camelCase files under language folders. Example: `content/th/schedule.ts`, `content/en/schedule.ts`.
- **Types:** PascalCase. Define types co-located with content or in `types/index.ts` for shared types.
- **Hooks:** `use` prefix in `lib/hooks/`.
- **Utils:** lowercase in `lib/`. Always export named, never default.

---

## 4. Performance targets

Lighthouse mobile: **Performance 95+, Accessibility 100, Best Practices 100, SEO 100**.

| Metric | Target |
|---|---|
| LCP | < 2.0s on 4G |
| CLS | < 0.1 |
| Total JS bundle | < 150KB gzipped |

### How to hit them
- Use `next/image` for layout stability; with static export MVP, set `images.unoptimized = true` and pre-compress images
- Fonts via `next/font` with `display: 'swap'`
- Import individual icons: `import { Calendar } from 'lucide-react'` — never the whole library
- `priority` prop on `next/image` only for the hero image of each page
- Lazy-load Google Maps iframe (`loading="lazy"`)
- No client-side analytics in MVP (per `10_ACCEPTANCE_CRITERIA_QA.md`)

---

## 5. SEO & metadata

- `metadata` export on every page with title + description
- Open Graph image: static `public/og-image.jpg` for MVP.
- Dynamic generation via `app/opengraph-image.tsx` is a Phase 2 option only after confirming compatibility with the deployment mode.
- **Recommended:** `robots: { index: false, follow: false }` in root layout — most wedding sites are not meant to be discoverable via search

Per `11_DEPLOYMENT_SECURITY_NOTES.md`:
- OG title: `Top & Tan Wedding`
- OG description: `Wedding details, venue directions, accommodation guide, gallery, and official updates for Top & Tan's wedding.`

---

## 6. Build & deployment commands

```bash
# Local development
pnpm dev

# Production build (static export)
pnpm build

# The static output ends up in `out/` — drop into Vercel, Cloudflare Pages, Netlify, or any static host
```

Lockfile policy:

- Keep `pnpm-lock.yaml`
- Do not add `package-lock.json`
- Do not add `yarn.lock`
- Do not add `bun.lockb`

Vercel will auto-detect Next.js and configure previews. If the project uses `output: 'export'`, verify that the generated `out/` directory works as expected and that image handling follows the static-export guidance above.

---

## 7. What NOT to install

To keep the bundle small and the constraints from `10_ACCEPTANCE_CRITERIA_QA.md` enforced, do not add:

- ❌ Form libraries (`react-hook-form`, `formik`) — there are no forms
- ❌ State management (`redux`, `zustand`, `jotai`) — site is static
- ❌ Auth libraries (`next-auth`, `clerk`) — no login system
- ❌ Database clients (`prisma`, `drizzle`) — no database
- ❌ Chatbot SDKs — no AI chatbot in MVP. LINE OA is used only for rich menu, manual replies, official updates, and fixed shortcut actions per `08_LINE_OA_RICH_MENU_SPEC.md`
- ❌ Middleware locale routing solutions for MVP static export
- ❌ Non-pnpm lockfiles (`package-lock.json`, `yarn.lock`, `bun.lockb`)
- ❌ CSS-in-JS (`styled-components`, `emotion`) — Tailwind only
- ❌ Component libraries (`MUI`, `Chakra`, `shadcn` full install) — too heavy for this scope. If you want shadcn, copy individual components only.

---

## 8. Implementation phases

Aligns with the 4-agent workflow in `09_CURSOR_AGENT_INSTRUCTIONS.md`:

### Phase 1 — Foundation (Agent 1)
Project setup, fonts, design tokens (`03_DESIGN_SYSTEM.md`), navbar + footer + mobile menu, base layout. No pages yet.

### Phase 2 — Pages (Agent 2)
All Thai and English pages per `05_PAGE_BY_PAGE_REQUIREMENTS.md`. Content from `content/th/*.ts` and `content/en/*.ts`.

### Phase 3 — Polish (Agent 3)
Gallery placeholders per `07_GALLERY_PLACEHOLDER_SPEC.md`, fade-in animations, responsive QA per `06_RESPONSIVE_UX_SPEC.md`.

### Phase 4 — QA & Deploy (Agent 4)
Audit against `10_ACCEPTANCE_CRITERIA_QA.md`. Lighthouse audit. Deploy to Vercel per `11_DEPLOYMENT_SECURITY_NOTES.md`.

### Phase 5 — Bilingual content expansion
Thai + English are required from day one. This phase expands content quality only, not routing architecture.

### Phase 6 — Post-wedding (later)
Real photos in gallery. "Thank you" page. Updated metadata.
