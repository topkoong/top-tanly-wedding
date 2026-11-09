# Maintaining the wedding site

This is the **current** handbook for developers and designers working on Tan & Top. When older numbered specs (`00`–`12`) or comments disagree with this file plus `app/globals.css`, **this file and the code win**. Cursor agents start from [`AGENTS.md`](../AGENTS.md) and [`.cursor/rules/wedding-site.mdc`](../.cursor/rules/wedding-site.mdc); photo work should go through the **`wedding-photos`** subagent ([`.cursor/agents/wedding-photos.md`](../.cursor/agents/wedding-photos.md)).

Live site: [https://topkoong.github.io/top-tanly-wedding/](https://topkoong.github.io/top-tanly-wedding/)

---

## Handover (read this if months have passed)

This repo is meant to survive a cold start. You do not need the original author on a call if the access list below is filled in.

### What you are inheriting

A **static invitation**. Next.js exports HTML to `out/`; GitHub Pages hosts it at `/top-tanly-wedding`. Guests never submit data here. The wedding date in content is **29 November 2026**.

| Still true later              | Not in this repo                  |
| ----------------------------- | --------------------------------- |
| Copy, photos, colours, FAQ    | Guest RSVP answers (Google Sheet) |
| Schedule, Conrad map, gallery | Form edit rights (Google Form)    |
| Envelope intro + cream theme  | Any server, database, or secrets  |

### Access to transfer before you leave

Fill names in when you hand over. None of these live in git.

| Asset                                    | Where                                                 | Who should own it                                          |
| ---------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------- |
| GitHub repo `topkoong/top-tanly-wedding` | github.com                                            | Admin who can push `main` and edit Actions / Pages         |
| GitHub Pages                             | Settings → Pages (source: GitHub Actions)             | Same admin                                                 |
| RSVP Google Form                         | URL in `content/en/site.ts` → `homeShell.rsvpFormUrl` | Couple or planner                                          |
| RSVP Google Sheet                        | Linked from that form                                 | Couple or planner                                          |
| Fonts                                    | `public/fonts/` (Perandory, Le Jour Script if reused) | Keep the license files; do not re-upload from random sites |

There is **no `.env`**, no hosting bill beyond GitHub, and no LINE OA.

### First hour

1. `pnpm install && pnpm dev` — English `/`, Thai `/th/`.
2. Open home, skip or tap the envelope, play the `#film` reel, follow `#rsvp` and confirm the form still opens.
3. Skim `content/th/schedule.ts`, `content/th/venue.ts`, `content/th/faq.ts` (and the `en` twins). That is the guest-facing truth.
4. Push a no-op or docs commit to a branch if you need to prove Actions still deploys. **`main` auto-deploys.** Feature branches need `gh workflow run deploy.yml --ref <branch>`.

### After the wedding

The site can stay up as a thank-you / gallery. Typical edits:

- Close or unlink the Google Form; change the RSVP band copy in `content/*/site.ts` if replies should stop.
- Do not add a contact form or guestbook.
- Do not “modernise” by restoring florals, a chatbot, or `/en/` routes. English is already `/`.

### Docs to trust vs ignore

| Trust                               | Ignore unless debugging history           |
| ----------------------------------- | ----------------------------------------- |
| This file, `README.md`, `AGENTS.md` | `00_`–`12_` numbered specs                |
| `app/globals.css` for colour        | `03_DESIGN_SYSTEM.md` hex tables          |
| `lib/locale.ts` for routes          | Any doc that says English lives at `/en/` |

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

Thai “Save the date” is the idiom **จองวันไว้เลยนะ** (`invitationCardEyebrow`, `saveTheDateLabel`, `homeShell.reel.title`). Do not use เซฟเดอะเดท or บันทึกวันสำคัญ. English stays “Save the date”.

### Change photos

1. Drop originals in `photos-src/home/<slot>.jpg`, `photos-src/gallery/…`, or `photos-src/video/save-the-date.mp4` (gitignored except `.gitkeep`). A dump folder `photos-src/all-photos/` is fine; copy chosen files into `home/` or `gallery/` before converting.
2. Run `pnpm photos`. If Corepack fails, `node scripts/optimize-photos.mjs`.
3. Commit the generated files under `public/images/` and `public/videos/save-the-date.mp4`. Never commit originals.

Home slots and sizes are documented in `lib/photos.ts`. Crop anchors live in `HOME_POSITION` inside `scripts/optimize-photos.mjs`. Missing files render a placeholder — do not invent “confirmed” venue claims in alt text.

**Do not overwrite** Conrad `venue` / `venue-2`. Prefer no-glasses portraits on home. `strip-2` is the large strip print. The three-still band after the timeline (`band-1…3`) must mix **different sets** (studio ชุดไทย + first-outing rings), not three studio frames.

Gallery order is curated in `content/*/gallery.ts`. Rebuild street tiles from the dump (delete existing `*-street-*` copies first, then copy every `photos-src/all-photos/street` file). Open on motion-blur stills (`street-34`, `street-289`, `street-278`, `street-260`), shuffle the rest of that street set, then studio and older sets. Do **not** open on ชุดไทย; `21-studio-thai` sits later, before the older shutterbooth set.

The save-the-date reel is **home-only** (`HomeShell` `#film`, after Conrad `#invitation`, before `#rsvp`). Tap-to-play with sound; no muted autoplay. Reduced motion shows the poster. Copy is `homeShell.reel` in `content/*/site.ts`.

Public assets on GitHub Pages must go through `publicAssetPath()` (`lib/publicAssetPath.ts`). A root-relative `/brand/logo.svg` 404s on Pages as `github.io/brand/…` instead of `github.io/top-tanly-wedding/brand/…`.

Below-the-fold photos will not load if they sit in `aria-hidden` + `Reveal` (`opacity: 0`) + `loading="lazy"`. Keep `PhotoFrame` eager on home; do not hide the scallop or band sections from the accessibility tree just to skip them in a screenshot.

### Change colour

Edit tokens in **`app/globals.css`** `@theme` / `:root` only. Do not sprinkle hex in components.

After changing `@theme` colours, Tailwind v4 + Turbopack can keep the old token in `.next`. If the browser still shows the previous cream, delete `.next` and restart `pnpm dev`.

**Do not retint the olive envelope** when adjusting page cream. Envelope tokens (`envelope`, `envelope-deep`, `envelope-soft`, `backdrop`) stay independent of `cream` / `ivory` / `paper`.

---

## Design system

**Direction:** a letterpress invitation — warm paper, near-black ink, lots of air. No florals, watercolor leaves, or botanical SVG corners. Do not restore `BotanicalBackdrop`, `FooterBotanical`, or `SoftPageBotanical`.

### Colour (current)

Declared in `app/globals.css`. Prefer token class names (`bg-cream`, `text-charcoal`) over new hex.

| Token                                   | Hex                   | Use                              |
| --------------------------------------- | --------------------- | -------------------------------- |
| `cream` / `ivory` / `paper` / page `bg` | `#fff5e6`             | Page canvas, cards, letter stock |
| `champagne`                             | `#f3e4d0`             | Rare warm tint                   |
| `charcoal`                              | `#1f1d18`             | Body ink, primary buttons        |
| `stone`                                 | `#6e6a61`             | Secondary / muted copy           |
| `olive` / `olive-deep`                  | `#2b2922` / `#16140f` | Legacy names → ink (not green)   |
| `gold`                                  | `#c8c1b2`             | Quiet hairlines only             |

**Envelope only** (intro + collage envelope — do not use these on cream pages):

| Token           | Hex       | Use                            |
| --------------- | --------- | ------------------------------ |
| `backdrop`      | `#3d3824` | Full-screen intro / dark bands |
| `envelope`      | `#544c35` | Pocket flaps                   |
| `envelope-deep` | `#463f2b` | Back panel, closed flap        |
| `envelope-soft` | `#6b6348` | Fold highlights                |
| `envelope-ink`  | `#1f1c14` | Creases                        |
| `night`         | `#25221a` | Deepest shade under photos     |

No colored CTAs. Primary = charcoal pill, cream tracked label. Secondary = hairline `charcoal/30` outline. Cards `rounded-2xl` / `rounded-3xl`, media `rounded-xl`, buttons `rounded-full`. Shadows stay soft and warm.

### Typography

| Role                               | Face                     | Token / class      |
| ---------------------------------- | ------------------------ | ------------------ |
| English display, invitation labels | Bellefair                | `font-display`     |
| English couple name (stacked)      | Perandory Semi-Condensed | `CoupleScriptMark` |
| Thai couple name and Thai body     | IBM Plex Sans Thai       | `font-thai`        |
| UI chrome                          | Inter                    | `font-body`        |

`LeJourScript-Regular.otf` is still in `public/fonts/` but is **not** wired as the couple mark. Do not mix nickname script _and_ formal names in the same lockup. Formal names live in content; the hero shows one stacked pair via `CoupleScriptMark`.

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

| Page     | Must stay true                                                                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home     | Envelope → collage → Conrad `#invitation` → save-the-date film `#film` → `#rsvp` Google Form → scallop frame → timeline → mixed photo band. One `<h1>`. |
| Schedule | Facts first. No ornamental motion on times.                                                                                                             |
| Venue    | Conrad photos, rooms, one-line directions, parking, map.                                                                                                |
| Gallery  | Curated stills from `content/*/gallery.ts`. No uploads, no reel.                                                                                        |
| FAQ      | Deterministic answers only.                                                                                                                             |

---

## Animation

Motion is ornamental and quiet. It must never hide schedule times, map instructions, or RSVP.

Library: **`motion`** (`motion/react`). Shared ease: `[0.22, 1, 0.36, 1]`.

### Allowed

- Fade + soft upward / side / scale settle on first scroll (`Reveal`)
- Hero collage pieces settling after the envelope opens (`InvitationRevealItem`)
- Envelope open: seal pop → flap `rotateX` → letter rises → fade to page
- Save-the-date reel: tap-to-play with sound (poster only when reduced motion)
- Timeline spine drawing downward (`DrawLine`)
- Language underline sliding (`layoutId`, spring)
- FAQ accordion that stays readable mid-motion
- Button colour fades (`transition-colors duration-200`)

### Forbidden

- Parallax loops, marquees, flashy 3D (except the envelope flap), bouncing overshoot
- Autoplay gag animation (the save-the-date reel is tap-to-play with sound, never muted autoplay)
- Motion on urgent venue / schedule facts
- Ignoring `prefers-reduced-motion`

### How to add a reveal

Wrap a block in `Reveal`. Stagger siblings with `delay` in ~0.08s steps. Variants: `up` (default), `left`, `right`, `scale`.

```tsx
<Reveal delay={0.08} variant='scale'>
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

| Locale  | Home   | Other pages                                               |
| ------- | ------ | --------------------------------------------------------- |
| English | `/`    | `/schedule/`, `/venue/`, `/gallery/`, `/faq/`             |
| Thai    | `/th/` | `/th/schedule/`, `/th/venue/`, `/th/gallery/`, `/th/faq/` |

`lib/locale.ts` and `useLocale()` derive locale from the path. Do not add `middleware.ts` redirects. `LanguageToggle` writes the sibling locale path.

Older docs that say “Thai at `/` and English at `/en/`” are **wrong**.

---

## Files to touch (and not)

| Task                     | Files                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------- |
| Copy                     | `content/th/*`, `content/en/*`, `content/schema.ts`                                   |
| Colour / type tokens     | `app/globals.css`                                                                     |
| Fonts                    | `lib/fonts.ts`, `app/layout.tsx`                                                      |
| Photos                   | `photos-src/…` then `pnpm photos` → `public/images/…` (reel → `public/videos/`)       |
| Gallery order / captions | `content/en/gallery.ts` + `content/th/gallery.ts`                                     |
| Reel labels              | `homeShell.reel` in `content/*/site.ts`; player `components/sections/GalleryReel.tsx` |
| New UI                   | `components/{layout,sections,ui}/*` — PascalCase, default export, `cn()`              |
| Public URLs in JSX       | `publicAssetPath()`                                                                   |

Default to Server Components. Add `"use client"` only for menus, accordions, motion, locale, video, or scroll.

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

- Home (open + skip envelope) in Thai and English: film, RSVP, scallop frame, three-band stills
- Schedule times, venue photos + map, gallery (first tile is not ชุดไทย), FAQ
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
