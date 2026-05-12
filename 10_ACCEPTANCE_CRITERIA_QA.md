# 10 — Acceptance Criteria and QA Checklist

## Product constraints

All must be true:

- No Accommodation page.
- No Dress Code page.
- No RSVP page or workflow.
- No public forms/contact forms.
- No chatbot or AI chat UI.
- No API routes.
- No server actions.
- No database/auth/analytics.
- No middleware-based language routing.

## Route checks

Thai:

- `/`
- `/schedule`
- `/venue`
- `/gallery`
- `/faq`
- `/line`

English:

- `/en`
- `/en/schedule`
- `/en/venue`
- `/en/gallery`
- `/en/faq`
- `/en/line`

## Naming checks

Visible content must use bride-first:

- `Tan & Top`
- `Narueporn & Theerut`

Never show groom-first variants in UI copy.

## Design quality checks

- Site feels like a minimal luxury wedding invitation.
- Home is the most beautiful page.
- Navbar and footer feel refined and consistent with warm palette.
- No dark heavy corporate section blocks.
- Cards/placeholders look intentional and premium.

## Page checks

### Home

- Hero includes bride-first names, date, and Conrad Bangkok.
- Exactly two primary hero CTAs (Schedule + Map, localized).
- Includes at-a-glance section and short welcome section.

### Schedule

- Uses two premium event cards (not plain timeline text).
- Time ranges are prominent.
- Activities shown as chips/cards, not inline plain text.
- Includes understated venue link and update note.

### Venue

- Conrad Bangkok shown clearly.
- Room cards present for Beverly Hills and Conrad Ballroom.
- Google Maps CTA prominent and localized.
- Parking guidance present.
- Unverified operational details marked or removed.

### Gallery

- Contains all localized categories including Wedding Day.
- At least 18 placeholders (6 portrait, 6 landscape, 6 square).
- Placeholder styling includes watermark, caption, category pill, warm tone variation.
- Looks curated, not repetitive blank blocks.

### FAQ

- No question without an answer.
- Required guest questions fully covered in Thai and English.
- Bottom LINE OA support CTA present and refined.

### Footer

- Light cream footer with thin top border.
- Small centered monogram and centered text hierarchy.
- No dark block and no giant monogram.
- Footer links exclude LINE per latest footer direction.

## Responsive checks

Validate at:

- 375px
- 390px
- 430px
- 768px
- 1280px
- 1440px

Pass criteria:

- No horizontal scroll.
- No overlap/clipping.
- Buttons are tappable (44px+).
- Thai typography remains readable.
- Mobile layouts feel intentionally designed.

## Build and platform checks

- `pnpm build` passes.
- Static export output remains valid.
- GitHub Pages `basePath` behavior remains working.

## Motion / animation acceptance

Allowed:

- Fade / soft upward reveal for sections entering the viewport.
- Gentle hover lift on gallery placeholders or illustrative cards—not on sole schedule typography.
- Button / link colour transitions complying with WCAG contrast.
- FAQ accordion easing that never traps keyboard focus while animating.

Use with caution:

- Flip / rotate interactions limited to ornamental Home/Gallery flourishes supplied by motion components with reduced-motion safeguards.

Forbidden:

- Parallax backgrounds, marquee tickers, spinners unrelated to genuine loading necessity.
- Bouncing/elastic overshoot exaggerated enough to feel gimmicky versus premium calm.
- Autoplay looping animation that steals reading attention.
- Any animation violating **prefers-reduced-motion**.
- Blocking users from accessing schedule/map copy until kinetic choreography completes—always provide immediate readability.

Screenshots (`pnpm screenshots`) forcibly neuter CSS animation for deterministic PNG QA; this does **not** relax live-site motion rules above—it only stabilizes baseline captures.
