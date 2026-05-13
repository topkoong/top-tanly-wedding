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

- Site feels like a minimal luxury **mobile wedding invitation**: cream/ivory canvas, botanical SVG framing, olive/sage washes, serif display titles tinted **olive-deep**, soft **gold-only** divider hairlines (never chunky gold banners).
- Home is the most visually striking page.
- **Primary CTAs and mobile bottom-nav active states** use **olive** (`olive` / `olive-deep`); rose remains a secondary warm accent only.
- On viewports below **`lg`**, fixed **bottom navigation** (5 items) is present with safe-area padding; **no** horizontal overflow caused by nav or page content.
- Navbar and footer remain refined—footer uses a whisper **ivory→cream gradient** (`FooterBotanical`) instead of dark slabs while keeping extra bottom padding for the mobile navigation.
- No dark heavy corporate section blocks.
- Cards/placeholders look intentional and premium.
- Supporting pages may enable **light** `SoftPageBotanical` accents (`Section` prop) yet must stay overflow-safe from 360 px widths upward.

## Page checks

### Home

- Invitation-style hero: bride-first names, formal names, ceremonial date card (date + programme line + venue) and localized **View Details** control scrolling to on-page quick links (not a modal).
- Quick-action cards for Schedule, Venue, Gallery, FAQ (large rows, icons, subtitles). **No** at-a-glance three-column grid requirement; **no** RSVP/Gift.
- Welcome / thank-you copy block with **supporting** LINE tertiary link.

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
- Questions collapse/expand inside **ivory cards** with subdued gold/olive category markers—expanded panels rest on whisper cream washes.
- Bottom LINE OA support CTA present and refined.

### Footer

- Invitations-style footer plane: translucent **ivory→cream gradient**, subtle botanical echoes, centered monogram + couple stack.
- Typography stays subdued (formal olive-deep serif line, charcoal friendly line, stone meta).
- No dark block and no giant monogram.
- Footer links exclude LINE per latest footer direction.

## Responsive checks

Validate at:

- 360px
- 375px
- 390px
- 393px
- 414px
- 430px
- 768px
- 1024px
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
