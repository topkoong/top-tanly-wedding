# Maintaining the wedding site

This is the **current** handbook for developers and designers working on Tan & Top. When older numbered specs (`00`–`12`) or comments disagree with this file plus `app/globals.css`, **this file and the code win**.

Live site: [https://topkoong.github.io/top-tanly-wedding/](https://topkoong.github.io/top-tanly-wedding/)

---

## What this site is

A **static, read-only, bilingual** invitation. Guests read schedule, venue, gallery, and FAQ. They do not submit data here.

- Thai lives under **`/th/`**. English lives at the **root** (`/`, `/schedule/`, …).
- Production uses **`trailingSlash: true`**. Prefer links that match exported URLs (`/venue/`, `/th/venue/`).
- GitHub Pages hosts the site under **`/top-tanly-wedding`**. Local `pnpm dev` has no base path.

### Never add

- On-site RSVP, attendance counts, confirmation flows
- Any `<form>` that collects guest data (the home `#rsvp` band only links out to the couple’s Google Form)
- Chatbot / AI widget / LINE Official Account
- Public gallery upload, login, database, API routes, server actions
- Middleware locale redirects
- Analytics in MVP
- Accommodation or Dress-code routes unless the product charter changes

---

## Daily development

Use **pnpm only**.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint
pnpm build        # writes out/
pnpm photos       # resize photos-src → public WebP
```

### Change copy

1. Edit `content/th/*.ts` and the matching `content/en/*.ts`.
2. Keep both locales in lockstep. Types live in `content/schema.ts`.
3. **Never hardcode guest-facing strings in JSX.**

Visible naming is **bride-first** only: `Tan & Top`, `Narueporn & Theerut`. Never `Top & Tan` or `Theerut & Narueporn`.

Thai times should stay unambiguous (`7:09 น.`, not `07.09`). Do not add letter-spacing / uppercase transforms to Thai source strings.

### Change photos

1. Drop originals in `photos-src/home/<slot>.jpg` or `photos-src/gallery/…` (gitignored except `.gitkeep`).
2. Run `pnpm photos`.
3. Commit the generated files under `public/images/photos/` or `public/images/gallery/`.

Home slots and sizes are documented in `lib/photos.ts`. Missing files render a placeholder — do not invent “confirmed” venue claims in alt text.

Public assets on GitHub Pages must go through `publicAssetPath()` (`lib/publicAssetPath.ts`). A root-relative `/brand/logo.svg` 404s on Pages as `github.io/brand/…` instead of `github.io/top-tanly-wedding/brand/…`.

### Change colour

Edit tokens in **`app/globals.css`** `@theme` / `:root` only. Do not sprinkle hex in components.

After changing `@theme` colours, Tailwind v4 + Turbopack can keep the old token in `.next`. If the browser still shows the previous cream, delete `.next` and restart `pnpm dev`.

**Do not retint the olive envelope** when adjusting page cream. Envelope tokens (`envelope`, `envelope-deep`, `envelope-soft`, `backdrop`) stay independent of `cream` / `ivory` / `paper`.

---

## Design system

**Direction:** a letterpress invitation — warm paper, near-black ink, lots of air. No florals, watercolor leaves, or botanical SVG corners. Do not restore `BotanicalBackdrop`, `FooterBotanical`, or `SoftPageBotanical`.

### Colour (current)

Declared in `app/globals.css`. Prefer token class names (`bg-cream`, `text-charcoal`) over new hex.

| Token | Hex | Use |
|-------|-----|-----|
| `cream` / `paper` / page `bg` | `#fff6ef` | Page canvas, wax seal, letter stock |
| `ivory` | `#fff6ef` | Cards (same paper as the page for now) |
| `champagne` | `#f3e4d0` | Rare warm tint |
| `charcoal` | `#1f1d18` | Body ink, primary buttons |
| `stone` | `#6e6a61` | Secondary / muted copy |
| `olive` / `olive-deep` | `#2b2922` / `#16140f` | Legacy names → ink (not green) |
| `gold` | `#c8c1b2` | Quiet hairlines only |

**Envelope only** (intro + collage envelope — do not use these on cream pages):

| Token | Hex | Use |
|-------|-----|-----|
| `backdrop` | `#3d3824` | Full-screen intro / dark bands |
| `envelope` | `#544c35` | Pocket flaps |
| `envelope-deep` | `#463f2b` | Back panel, closed flap |
| `envelope-soft` | `#6b6348` | Fold highlights |
| `envelope-ink` | `#1f1c14` | Creases |
| `night` | `#25221a` | Deepest shade under photos |

No colored CTAs. Primary = charcoal pill, cream tracked label. Secondary = hairline `charcoal/30` outline. Cards `rounded-2xl` / `rounded-3xl`, media `rounded-xl`, buttons `rounded-full`. Shadows stay soft and warm.

### Typography

| Role | Face | Token / class |
|------|------|----------------|
| English display, invitation labels | Bellefair | `font-display` |
| English couple name (stacked) | Perandory Semi-Condensed | `CoupleScriptMark` |
| Thai couple name and Thai body | IBM Plex Sans Thai | `font-thai` |
| UI chrome | Inter | `font-body` |

`LeJourScript-Regular.otf` is still in `public/fonts/` but is **not** wired as the couple mark. Do not mix nickname script *and* formal names in the same lockup. Formal names live in content; the hero shows one stacked pair via `CoupleScriptMark`.

English eyebrows: letter-spaced uppercase Bellefair or Inter. **Never widen tracking on Thai.**

Bellefair is a single weight — do not fake bold (`font-synthesis-weight: none` is already set).

### Brand marks

- **NT monogram:** `TNMonogram` → `public/brand/logo.svg` via `publicAssetPath`. The wrapper must keep a real width (`aspect-ratio` or `size-*`). iOS Safari collapses an SVG `<img>` that only has a `viewBox` when the parent is `h-[%] w-auto`.
- **Navbar** is logo-only (no wordmark). Invert the mark on dark sections (`data-nav-theme="dark"`).
- Do not restore the old geometric T-over-N or Allura SVG monogram.

### Layout chrome

- **Desktop nav:** Schedule · Venue · Gallery · FAQ + `EN | TH`. Never list Home as a bullet; the monogram goes home.
- **Mobile (`lg` and below):** `MobileBottomNav` — Home · Schedule · Venue · Gallery · FAQ, with `env(safe-area-inset-bottom)`. Do not add RSVP, Gift, LINE, Accommodation, or Dress-code.
- **Navbar:** transparent over the dark hero; on scroll, cream + `backdrop-blur`. Ink flips to paper over `data-nav-theme="dark"`.
- **Footer:** monogram, thank-you line, `Tan & Top Wedding 2026`. No duplicate footer nav.
- **Section:** plain cream/ivory band. No decorative background layers. Decorative bits stay `pointer-events-none` inside `overflow-hidden` so ≥360px never gains horizontal bleed.

### Pages (what to protect)

| Page | Must stay true |
|------|----------------|
| Home | Envelope intro → collage → venue photo → `#rsvp` Google Form → timeline. One `<h1>`. |
| Schedule | Facts first. No ornamental motion on times. |
| Venue | Conrad photos, rooms, one-line directions, parking, map. |
| Gallery | Curated set from `content/*/gallery.ts`. No uploads. |
| FAQ | Deterministic answers only. |

---

## Animation

Motion is ornamental and quiet. It must never hide schedule times, map instructions, or RSVP.

Library: **`motion`** (`motion/react`). Shared ease: `[0.22, 1, 0.36, 1]`.

### Allowed

- Fade + soft upward / side / scale settle on first scroll (`Reveal`)
- Hero collage pieces settling after the envelope opens (`InvitationRevealItem`)
- Envelope open: seal pop → flap `rotateX` → letter rises → fade to page
- Timeline spine drawing downward (`DrawLine`)
- Language underline sliding (`layoutId`, spring)
- FAQ accordion that stays readable mid-motion
- Button colour fades (`transition-colors duration-200`)

### Forbidden

- Parallax loops, marquees, flashy 3D (except the envelope flap), bouncing overshoot
- Autoplay gag animation
- Motion on urgent venue / schedule facts
- Ignoring `prefers-reduced-motion`

### How to add a reveal

Wrap a block in `Reveal`. Stagger siblings with `delay` in ~0.08s steps. Variants: `up` (default), `left`, `right`, `scale`.

```tsx
<Reveal delay={0.08} variant="scale">
  …
</Reveal>
```

Always keep the motion element in the tree. Reduced motion **zeroes duration** — do not swap to a plain `div` or hydration can leave `opacity: 0` stuck.

Hero collage pieces use `InvitationRevealItem` and wait until `InvitationEnvelope` reports `revealed`. The envelope remembers “opened” in `sessionStorage` (`tan-top-invitation-opened`) and skips itself when reduced motion is on.

### Reduced motion

`useReducedMotion()` from `motion/react` everywhere you animate. Instant show, no flap, no pulse on the seal.

Screenshot QA (`pnpm screenshots`) disables CSS animations on purpose. That is not permission to add more motion in production.

---

## Locales and routing

| Locale | Home | Other pages |
|--------|------|-------------|
| English | `/` | `/schedule/`, `/venue/`, `/gallery/`, `/faq/` |
| Thai | `/th/` | `/th/schedule/`, `/th/venue/`, `/th/gallery/`, `/th/faq/` |

`lib/locale.ts` and `useLocale()` derive locale from the path. Do not add `middleware.ts` redirects. `LanguageToggle` writes the sibling locale path.

Older docs that say “Thai at `/` and English at `/en/`” are **wrong**.

---

## Files to touch (and not)

| Task | Files |
|------|--------|
| Copy | `content/th/*`, `content/en/*`, `content/schema.ts` |
| Colour / type tokens | `app/globals.css` |
| Fonts | `lib/fonts.ts`, `app/layout.tsx` |
| Photos | `photos-src/…` then `pnpm photos` → `public/images/…` |
| New UI | `components/{layout,sections,ui}/*` — PascalCase, default export, `cn()` |
| Public URLs in JSX | `publicAssetPath()` |

Default to Server Components. Add `"use client"` only for menus, accordions, motion, locale, or scroll.

---

## Deploy

`.github/workflows/deploy.yml`:

- **`push` to `main`** builds and publishes GitHub Pages automatically.
- **`workflow_dispatch`** can deploy any branch (used while the brown-envelope work lived on `feature/brown-gatefold-envelope`).

```bash
git push origin main
# or, from a feature branch:
gh workflow run deploy.yml --ref HEAD
```

Build env: `GITHUB_PAGES=true` → `basePath` + `assetPrefix` `/top-tanly-wedding`. After deploy, hard-refresh; confirm `/brand/logo.svg` and photos load under the repo prefix.

### After every deploy

- Home (open + skip envelope) in Thai and English
- Schedule times, venue photos + map, gallery, FAQ
- Mobile 375 / 390 / 430 and a desktop width
- iPhone: monogram visible on the wax seal
- No forms, chatbot, or groom-first names

---

## Accessibility

- One `<h1>` per route
- Tap targets ≥ 44×44
- Visible `focus-visible:ring-*`
- Contrast: body ~4.5:1, large type ~3:1
- Do not convey meaning by colour alone
