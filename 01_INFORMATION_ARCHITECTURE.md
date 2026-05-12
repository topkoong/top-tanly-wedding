# Information Architecture

**Current implementation baseline:** [`README.md`](README.md) · [`docs/PROJECT_OVERVIEW.md`](docs/PROJECT_OVERVIEW.md)

## Routing principles

- **No middleware**-driven locale swaps—URL alone determines Thai vs English.
- **Trailing slashes** intentionally enabled for static-export + GitHub Pages harmony.
- **LINE** stays out of primary navigation (`Navbar`/`MobileMenu`).
- Dedicated supporting URLs: **`/line/`**, **`/en/line/`**.

## Primary navigation labels

Desktop + mobile intentionally match (only language switch abbreviation differs visually):

### Thai navigation

```text
กำหนดการ · สถานที่ · แกลเลอรี · คำถามที่พบบ่อย · EN
```

Logo / couple marker links **`/`**.

### English navigation

```text
Schedule · Venue · Gallery · FAQ · TH
```

Logo / couple marker links **`/en`**.

Notes:

- **Never** expose `Home` as a menu bullet—the lockup transports guests home.
- **Never** expose `LINE` next to FAQ as a sibling nav shortcut (LINE remains ancillary).

## Implemented site tree

### Thai routes

```text
/                Home
/schedule        Schedule
/venue           Venue + map
/gallery         Gallery placeholders
/faq             FAQ
/line            LINE OA supporting explainer (not main nav)
```

### English routes

```text
/en
/en/schedule
/en/venue
/en/gallery
/en/faq
/en/line
```

### Explicitly excluded from scope

`/accommodation`, `/dress-code`, RSVP pages, authenticated areas, dashboards.

## Footer expectations

Footer emphasises graceful closure (names, gratitude, contextual links aligned with simplified IA). Exact link list evolves in `content/*/site.ts`—maintain consonance with spec constraints (no Accommodation/Dress pseudo routes surfaced).

LINE may appear outside primary nav surfaces (FAQ CTA text, HOME secondary CTA) per product direction—not as a bulky corporate footer takeover.

## Page-level intent (mirror build)

| Page | Goal |
|------|------|
| Home | Emotional invitation framing + directional CTAs (Schedule/Venue) |
| Schedule | Quickly communicate two marquee blocks with supporting chips |
| Venue | Directions + Conrad clarity + localized Google Maps CTA |
| Gallery | Editorial placeholder masonry-style grid awaiting real photos |
| FAQ | deterministic copy w/ categorical grouping |
| LINE | Official-update narrative (no RSVP / no chat promises) |

## Header behaviour guidelines

Sticky, subtle navbar with transparent/cream interplay; respects mobile tap targets (~44 px).

## Homepage structure (conceptual—not prescriptive JSX)

Hero → ceremonial date & venue cues → succinct supporting copy → two primary CTAs → optional tertiary LINE mention → Footer.
