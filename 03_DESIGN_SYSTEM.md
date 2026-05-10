# 03 — Design System

> **Position in reading order:** Insert between `02_BRANDING_LOGO_DOMAIN.md` and `04_CONTENT_MODEL.md`. Renumber the existing `04_CONTENT_MODEL.md` and onward to `04`, `05`, etc., or simply rename this file `02b_DESIGN_SYSTEM.md` if you want to avoid renumbering.
>
> **Purpose:** This file translates the brand direction in `02_BRANDING_LOGO_DOMAIN.md` into concrete design tokens Cursor can implement. Without this file, Cursor will invent its own colors, fonts, and spacing — and they won't be cohesive.

---

## 1. Aesthetic direction

Per `02_BRANDING_LOGO_DOMAIN.md`: elegant, modern, premium, minimal, warm, hotel-wedding appropriate.

**References to keep in mind:**
- Boutique hotel websites (Aman, Capella, Rosewood, COMO)
- Editorial magazine layouts
- Kinfolk-style minimalism with warmth

**Avoid:**
- Heavy floral graphics
- Cursive script fonts beyond the monogram
- Hard-edged corporate styling
- Glossy / shiny "wedding template" look

---

## 2. Color tokens

Translates the warm/premium palette from `02_BRANDING_LOGO_DOMAIN.md` into specific hex values.

### Primary palette
| Token | Hex | Usage |
|---|---|---|
| `cream` | `#FAF7F0` | Page background |
| `ivory` | `#F2EBDD` | Card / section background variant |
| `champagne` | `#E8DCC4` | Subtle decorative fills |
| `rose` | `#C99B8B` | Primary accent (decorative) |
| `rose-deep` | `#A87468` | Buttons, links, hover states |
| `sage` | `#9CAA7E` | Secondary accent (tags, subtle highlights) |
| `gold` | `#C9A961` | Decorative accents only (monogram, dividers) |
| `charcoal` | `#2D2620` | Body text, headings |
| `stone` | `#6B6058` | Muted text, captions |

### Functional tokens
| Token | Maps to |
|---|---|
| `--color-bg` | `cream` |
| `--color-bg-alt` | `ivory` |
| `--color-text` | `charcoal` |
| `--color-text-muted` | `stone` |
| `--color-accent` | `rose-deep` |
| `--color-accent-hover` | `charcoal` |
| `--color-border` | `rgba(45, 38, 32, 0.1)` |

### WCAG AA contrast verification
All body text/background pairings must pass 4.5:1 minimum:
- ✅ `charcoal` on `cream` → 13.4:1
- ✅ `charcoal` on `ivory` → 11.8:1
- ✅ `stone` on `cream` → 6.2:1
- ✅ `rose-deep` on `cream` → 4.6:1 (use this for body links — NOT `rose`)
- ❌ `rose` on `cream` → 3.1:1 (decorative only — never body text)

### Tailwind CSS v4 token setup
For Tailwind CSS v4, define the design tokens in `app/globals.css` using an `@theme` block as the primary source of truth. This should generate utilities such as `bg-cream`, `text-charcoal`, and `border-rose-deep`.

Keep `tailwind.config.ts` minimal unless a plugin or compatibility requirement needs it. Do not duplicate color definitions across multiple files unless there is a clear reason.

---

## 3. Typography

### Type families
- **Display:** Cormorant Garamond — weights 400, 500, 600
- **Body:** Inter — weights 400, 500, 600
- **Thai (Phase 2 / bilingual):** IBM Plex Sans Thai — weights 400, 500, 600

Load all via `next/font/google` to self-host with zero layout shift.

### Type scale (mobile → desktop)

| Class name | Mobile | Desktop | Usage |
|---|---|---|---|
| `display-xl` | 48px / 1.05 | 96px / 1.0 | Hero — couple names |
| `display-l` | 36px / 1.1 | 64px / 1.05 | Page heroes |
| `h1` | 32px / 1.15 | 48px / 1.1 | Page titles |
| `h2` | 24px / 1.2 | 32px / 1.2 | Section titles |
| `h3` | 20px / 1.3 | 24px / 1.3 | Card titles |
| `body-l` | 18px / 1.6 | 20px / 1.6 | Lead paragraphs |
| `body` | 16px / 1.6 | 16px / 1.65 | Default body |
| `body-s` | 14px / 1.5 | 14px / 1.5 | Captions, metadata |
| `eyebrow` | 12px / 1.4 | 12px / 1.4 | Uppercase labels (`tracking-[0.15em]`) |

### Rules
- **Headings** use Cormorant Garamond. **Body** uses Inter.
- The couple's names ("Theerut & Narueporn") always use Cormorant, weight 400 (regular). The elegance is in the letterform, not the weight.
- **Eyebrow** labels use Inter weight 500, all-caps, wide letter-spacing.
- Body line length max ~65 characters (`max-w-prose` or `max-w-[65ch]`).

---

## 4. Spacing scale

Use Tailwind's default scale. Settle on these for vertical rhythm:

| Use | Mobile | Desktop |
|---|---|---|
| Section vertical padding | `py-16` (64px) | `py-24` (96px) |
| Container horizontal padding | `px-5` (20px) | `px-8` (32px) |
| Element gap (within a section) | `gap-6` (24px) | `gap-8` (32px) |
| Card internal padding | `p-6` (24px) | `p-8` (32px) |

Container max-widths:
- `max-w-3xl` (768px) — prose-heavy pages (FAQ)
- `max-w-6xl` (1152px) — most pages (default)
- `max-w-7xl` (1280px) — gallery, full-bleed sections

---

## 5. Border radius & shadows

### Radius vocabulary
- Cards & panels: `rounded-2xl` (16px)
- Buttons: `rounded-full` (pill)
- Images in gallery: `rounded-xl` (12px)
- Tags: `rounded-full`

### Shadows
Keep shadows soft and warm-toned, not the default cool gray.
- Card hover: `shadow-[0_8px_24px_-8px_rgba(45,38,32,0.12)]`
- Floating CTA: `shadow-[0_12px_32px_-8px_rgba(45,38,32,0.18)]`
- Default: no shadow. Lean on borders (`border border-charcoal/10`) instead.

---

## 6. Reusable component patterns

### Button
- **Primary:** `bg-rose-deep text-cream`, pill, `px-6 py-3`. Hover → `bg-charcoal`.
- **Secondary:** outlined `border-charcoal text-charcoal`, transparent. Hover fills.
- **Tertiary / link-style:** underlined, `text-rose-deep`. Hover → `text-charcoal`.
- All buttons: visible focus ring `focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-cream`.

### Card
- Background: `bg-ivory` or `bg-cream` with `border border-charcoal/10`.
- Padding: `p-6 md:p-8`.
- Radius: `rounded-2xl`.
- Hover (interactive only): subtle lift via shadow change.

### Section + Container
Reusable wrappers:
```
<Section bg="cream" | "ivory" | "transparent">
  <Container size="narrow" | "default" | "wide">
    {children}
  </Container>
</Section>
```

### Heading
Renders semantic `h1`–`h4` with consistent display font, sizes, and an optional eyebrow above:
```
<Heading as="h2" eyebrow="When">
  The Schedule
</Heading>
```

### PlaceholderImage
The single most important component for Phase 1 (see `07_GALLERY_PLACEHOLDER_SPEC.md` for behaviour). Renders a styled box that:
- Accepts `aspectRatio` prop (`"4/5"`, `"3/2"`, `"16/9"`, `"1/1"`)
- Background: `bg-ivory` with subtle inner pattern (TN monogram SVG at 8% opacity, centered) OR `bg-rose/10`
- Optional caption rendered as small eyebrow text in the bottom-left
- Optional category label
- `rounded-xl`
- Looks intentional, never broken or "loading"
- Accessibility-friendly label handling (always provide meaningful `alt`/`aria-label`)

### FadeIn
Wrapper using `motion`. Children fade in + translate up 8px when scrolled into view. **Respects `prefers-reduced-motion`** (no animation when reduced).

---

## 7. Iconography

- **Library:** `lucide-react`
- **Stroke width:** `1.5` (consistent across the site)
- **Sizes:** 16px (inline body), 20px (default), 24px (section icons)
- **Color:** inherits `currentColor`

Common icons used: `Calendar`, `MapPin`, `Hotel` / `BedDouble`, `Shirt`, `ImageIcon`, `HelpCircle`, `MessageCircle`, `Copy`, `ExternalLink`.

---

## 8. Imagery treatment

- Slight warm tone (avoid cool blue-toned photos)
- Soft contrast, not crunchy / oversaturated
- Aspect ratios: prefer 4:5, 3:2, 1:1 — avoid extremes
- Hero images: full-bleed with subtle dark gradient overlay (`bg-gradient-to-t from-charcoal/40 via-charcoal/10 to-transparent`) for text readability
- Gallery: mixed orientations look better than uniform — don't force everything to squares

---

## 9. Animation principles

- **Subtle, never showy.** All animations under 600ms.
- Easing: `ease-out` for enter, `ease-in` for exit.
- Always respect `prefers-reduced-motion: reduce` — disable all non-essential animation.

### Approved
- Fade-in + 8px translate-up on viewport entry
- Subtle scale (1 → 1.02) on interactive card hover
- Smooth scroll on anchor links
- Mobile menu slide-in

### Forbidden
- Parallax (jittery in LINE in-app browser on mobile)
- Auto-playing video in hero
- Counters that animate constantly
- Marquee / ticker effects
- Full-screen intro animation (per `06_RESPONSIVE_UX_SPEC.md`)

---

## 10. Logo usage (TN monogram)

Per `02_BRANDING_LOGO_DOMAIN.md`: TN monogram is primary.

- Build as an SVG component (`components/icons/Monogram.tsx`) — scales without quality loss, inherits color
- Default color: `currentColor` (inherits `charcoal` on light backgrounds)
- Sizes: 24px (navbar), 48px (footer), 96px+ (hero / placeholder watermark)
- Always preserve aspect ratio
- No shadows, gradients, or effects on the monogram

---

## 11. Dark mode

**Skip it.** A wedding site has one canonical look. Force light mode in the root HTML: `<html lang="en" className="light">`.

---

## 12. Implementation hint

Define color values as CSS variables in `app/globals.css` using the Tailwind CSS v4 `@theme` block. Treat that block as the single source of truth for color tokens, typography aliases, and reusable design variables. This way, design tweaks happen in one place.
