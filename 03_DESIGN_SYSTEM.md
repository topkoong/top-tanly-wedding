# 03 — Design System

## Visual quality bar

The site must feel like a minimal luxury wedding invitation. Every page must have strong visual hierarchy, generous whitespace, warm colour usage, refined typography, and intentional card/placeholder styling. Plain documentation-style layouts are not acceptable.

## Brand mood

- Minimal, elegant, classy, warm, premium, modern Thai hotel wedding style.
- Feels like a luxury hotel wedding microsite, digital invitation, and editorial brochure.
- Avoid heavy floral graphics, dark corporate blocks, over-animation, and cursive-heavy typography.

## Colour palette (fixed)

Core tokens in `app/globals.css` `@theme` (hex references for handoff parity):

| Token | Typical hex | Usage |
|-------|----------------|-------|
| `cream` | #F8F5EF | Page canvas |
| `ivory` | #FCFAF6 | Invite cards / raised surfaces |
| `olive` | #6F7654 | Primary actions, botanical silhouettes |
| `olive-deep` | #565E3F | Page titles (`h1`–`h3`), richer emphasis |
| `sage` / `sage-soft` | #A5AC8A / tinted wash | Whisper botanicals |
| `gold` | #CDBD8B | Divider hairlines only |
| `charcoal` | #3B382F | Default body hierarchy |
| `stone` | #7A766E | Secondary / meta copy |

Supporting: `champagne`, `rose` / `rose-deep` stay rare accents only.

Ceremony typography colour pattern:

- **Primary headings (`h1`–`h3`):** olive-deep invitations tone.
- **Body copy:** charcoal or stone depending on prominence.
- **Eyebrows / ceremonial labels:** olive-deep in display type; **do not** apply heavy tracking to Thai glyphs.

## Typography rules

- **Display titles & English ceremony labels:** Cormorant Garamond (weights 400–700) — invitation hero (“Tan & Top”), marquee headings (`h1`–`h3` default to olive-deep).
- Thai body / practical copy: IBM Plex Sans Thai (`font-thai`).
- English body/micro-copy: Inter.
- Maintain ~16 px Thai body sizing with relaxed line-height (≈1.65–1.7).
- Eyebrows: display font for Latin ceremony lines; tighter tracking defaults (`0.07–0.11em`) versus older wide settings—**never exaggerate spacing on Thai source strings.**

## Invitation botanical layering

1. **`BotanicalBackdrop` (hero only)** — four-corner clipped SVG washes; strongest presence; must stay `pointer-events-none` + inside `overflow-hidden` parents so **no horizontal bleed** occurs on 360 px canvases.
2. **`SoftPageBotanical`** — quieter corner silhouettes reused by `Section`’s optional `botanical` flag (`Schedule`, `Venue`, `Gallery`, `FAQ`, `LINE` pages).
3. **`InvitationBotanicalRule` / `DecorativeDivider`** — micro gold + olive motifs for in-card separators.

## Naming rule (non-negotiable)

Visible content must always be bride-first:

- `Tan & Top`
- `Narueporn & Theerut`

Never show `Top & Tan` or `Theerut & Narueporn` in visible UI copy.

## Layout and spacing

- Mobile-first composition.
- Generous section spacing and breathable card spacing.
- Strong contrast between heading, supporting copy, and metadata.
- Soft section transitions (cream/ivory/champagne shifts), never harsh dark jumps.

## Components

### Buttons

- Pill shape (`rounded-full`) for primary and secondary.
- Smooth colour transitions (`transition-colors duration-200`).
- **Primary:** `olive` / `olive-deep` background, cream text, soft botanical shadow.
- **Secondary:** ivory/cream with `olive`/`charcoal` border, charcoal text, soft hover fill (`olive-soft`).
- **Tertiary:** understated link with `olive` underline (not loud rose).
- Maintain WCAG AA contrast in every hover/active state.

### Navbar

- Refined lockup: TN monogram + `Tan & Top`; optional “Wedding” subline on larger breakpoints.
- Warm cream translucent background; optional olive-tinted hamburger on mobile.
- **Desktop:** subtle **olive** active state for current route.
- **Mobile:** hamburger panel stays light; primary wayfinding also via **bottom navigation** (see `06_RESPONSIVE_UX_SPEC.md`).

### Cards

- `rounded-2xl` / `rounded-3xl` for invitation-style surfaces; warm backgrounds (`ivory`, `cream`, light `olive-soft`), soft border, very restrained shadow.
- No generic blocky dashboard look.

### Footer

- **Light “closing pane”**: gradient (`ivory → cream`) with faint olive-soft wash plus `FooterBotanical` SVG echoes—still **readable on cream** and padded for the mobile nav safe area.
- Centered typography stack; avoid dark slabs or oversized monograms.

## Forbidden / safeguards

- **No RSVP**, Gift flows, Accommodation/Dress-code routes, or LINE in primary menus (see product docs).

## Page-level quality requirements

- Home must read as a **mobile wedding invitation** (ceremonial card, quick actions, botanical hints)—strongest visual anchor.
- Schedule must use premium event cards (not plain text timeline).
- Gallery must feel curated (not repetitive blank blocks).
- FAQ must be complete, clear, and fully answered.
- Venue must prioritise practical clarity and map action on mobile.

## Accessibility and interaction

- Keyboard-visible focus styles on all interactive elements.
- Tap targets at least 44x44.
- Respect `prefers-reduced-motion`.
- No essential info conveyed by colour alone.

## Animation policy

Animations should reinforce luxury calm, not divert attention.

**Allowed**

- Subtle fade-in and soft upward reveal on section entry.
- Gentle hover lift / scale on decorative cards or gallery placeholders.
- Refined pill button colour transitions (`transition-colors`).
- FAQ accordion expansions where content stays readable mid-motion.

**Allowed only with caution**

- Decorative flip-style interactions strictly on optional Home/Gallery motifs—never for schedule timelines or urgent venue facts.

**Forbidden**

- Parallax scrolling, marquee text, flashy 3D flips, looping autoplay gimmicks.
- Animations that delay access to schedules, venues, directions, or legal info.
- Motion that fights screenshot QA stability when left enabled—or that ignores **`prefers-reduced-motion`**.
