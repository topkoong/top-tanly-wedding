# 03 — Design System

## Visual quality bar

The site must feel like a minimal luxury wedding invitation. Every page must have strong visual hierarchy, generous whitespace, warm colour usage, refined typography, and intentional card/placeholder styling. Plain documentation-style layouts are not acceptable.

## Brand mood

- Minimal, elegant, classy, warm, premium, modern Thai hotel wedding style.
- Feels like a luxury hotel wedding microsite, digital invitation, and editorial brochure.
- Avoid heavy floral graphics, dark corporate blocks, over-animation, and cursive-heavy typography.

## Colour palette (fixed)

- `cream`, `ivory`, `champagne`, `rose`, `rose-deep`, `sage`, `gold`, `charcoal`, `stone`
- Use warm light backgrounds by default.
- Use `charcoal`/`stone` for text hierarchy.
- Use `gold` for subtle accents only (divider, small decorative marks).

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
- Primary: rose-deep or charcoal background with cream/ivory text.
- Secondary: transparent/cream with thin border and soft fill hover.
- Tertiary: understated link-like action (subtle underline or arrow).
- Maintain WCAG AA contrast in every hover/active state.

### Navbar

- Refined lockup: TN monogram + `Tan & Top`.
- Warm cream/champagne translucent background.
- Subtle active route indication.
- Soft divider/hairline, elegant hover states, intentional language switch.

### Cards

- `rounded-2xl`, warm backgrounds, soft border, very restrained shadow.
- No generic blocky dashboard look.

### Footer

- Light footer only (cream background), thin top border, centered composition.
- Must feel like the closing page of a luxury wedding brochure.

## Page-level quality requirements

- Home must be the most beautiful page and strongest visual anchor.
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
