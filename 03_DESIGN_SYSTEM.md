# 03 — Design System

## Visual quality bar

The site must feel like a minimal luxury wedding invitation. Every page must have strong visual hierarchy, generous whitespace, warm colour usage, refined typography, and intentional card/placeholder styling. Plain documentation-style layouts are not acceptable.

## Brand mood

- Minimal, elegant, classy, warm, premium, modern Thai hotel wedding style.
- Feels like a luxury hotel wedding microsite, digital invitation, and editorial brochure.
- Avoid heavy floral graphics, dark corporate blocks, over-animation, and cursive-heavy typography.

## Colour palette (fixed)

Core tokens in `app/globals.css` `@theme`:

- **Surfaces:** `cream`, `ivory`, `champagne`, `olive-soft`
- **Botanical / primary accent:** `olive`, `olive-deep` — primary buttons, mobile nav active state, key icon circles, subtle borders
- **Supporting green:** `sage`
- **Warm accent (not dominant):** `rose`, `rose-deep` — tertiary links, rare warmth; do **not** default every CTA to rose
- **Ceremony:** `gold` — thin dividers, hairlines, tiny decorative marks only
- **Text:** `charcoal`, `stone`

Use warm light backgrounds by default. Use `charcoal`/`stone` for hierarchy. Avoid harsh full-width dark blocks.

## Typography rules

- Display names: Cormorant Garamond (`Tan & Top`, `Narueporn & Theerut`)
- Thai body: IBM Plex Sans Thai
- English body: Inter
- Thai body should remain readable (about 16px with generous line-height around 1.7).
- Avoid excessive letter spacing in Thai labels.

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

- Light footer only (cream background), thin top border, centered composition; extra bottom padding on small screens so content clears the **fixed bottom nav**.
- Must feel like the closing page of a luxury wedding brochure.

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
