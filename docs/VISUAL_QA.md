# Visual QA Guide

## Purpose

How designers, developers, and QA should visually verify the Tan & Top wedding website before sharing changes or deploying.

Goals: minimal, elegant, warm, premium, **mobile-first**, readable Thai/English, no regressions against product constraints.

## Viewports checklist

Manual review (Developer Tools responsive mode or real devices):

| Width | Typical use |
|-------|--------------|
| 375px | Small phone |
| 390px | Many modern phones |
| 430px | Large phone |
| 768px | Tablet |
| 1280px | Laptop |
| 1440px | Desktop |

Pages to open (production or local)—use **both** locales:

**Thai**

- `/`
- `/schedule/`
- `/venue/`
- `/gallery/`
- `/faq/`
- `/line/`

**English**

- `/en/`
- `/en/schedule/`
- `/en/venue/`
- `/en/gallery/`
- `/en/faq/`
- `/en/line/`

---

## Mobile-first acceptance criteria

- No horizontal scrolling at audited widths (unless an intentional swipe area is added—currently none).
- Tap targets roughly **≥ 44×44 px** on primary navigation and CTAs.
- Thai body text readable (~16px, comfortable line-height).
- Bride-first naming in visible content: **Tan & Top**, **Narueporn & Theerut**.
- Primary nav excludes LINE, Accommodation, Dress Code, RSVP.
- Footer is light—not a heavy dark slab; typography centered and calm.

### Page-specific quick checks

- **Home:** Invitational hierarchy; hero CTAs localized; LINE not the primary hero driver.
- **Schedule:** Two main events understandable quickly; prominent times; chips not wall-of-text.
- **Venue:** Strong Conrad Bangkok labeling; localized Google Maps CTA (`เปิด Google Maps` / `Open in Google Maps`); sensible map embed height on small screens.
- **Gallery:** Premium placeholders; captions legible; category labels localized.
- **FAQ:** Every question answered; accordion readable; LINE CTA is supporting secondary.
- **LINE:** Describes official updates / manual channel—never “chatbot AI” framing.

---

## Animation and motion QA

Review with **animations on** first, then with OS **Reduce motion** enabled.

### Allowed (default)

- Subtle fade-in and soft upward reveal (e.g. section enter).
- Gentle hover lift on cards/images that are **decorative/non-critical**.
- Refined button color/border transitions.
- Gallery hover/focus affordances that do not hide captions permanently.
- FAQ accordion expand/collapse that keeps content readable during motion.

### Allowed only with caution

- Decorative **flip-card** gestures on Home or Gallery only—must not hide essential copy; must degrade gracefully without motion bugs.

### Forbidden

- Flashy **3D** flips, parallax scroll, marquees, spinning loaders, exaggerated bounce/elastic motion.
- Autoplay looping motion that distracts from reading.
- Motion that hides **critical guest information** until animation completes—schedule times, venue, map access must remain discoverable immediately.
- Motion that systematically produces bad screenshots (**inconsistent layouts**)—Playwright scripts may disable animations for capture; prod UX must stay calm.
- Any motion that ignores **`prefers-reduced-motion: reduce`**—non-essential animation should be suppressed.

### Reduced motion

- Respect `prefers-reduced-motion`.
- Fade/slide durations should shorten or skip; FAQs should still reveal content statically if motion is off.

Implementation note: **`scripts-capture-screenshots.mjs`** injects CSS to zero-out transitions/animations for stable PNGs—that is a **QA tooling** choice, not a product mandate to strip motion from the live site.

---

## Playwright screenshot QA

**Purpose:** full-page screenshots across Thai + English routes and three breakpoints for regression spotting (layout overflows, typography breaks, regressions).

**Dependencies:** Playwright listed in **`devDependencies`**; script runs via **`pnpm screenshots`** → `node scripts-capture-screenshots.mjs`.

### Install / repair

```bash
pnpm add -D playwright   # usually already installed
pnpm exec playwright install chromium
```

### Run

```bash
pnpm screenshots
```

Default `BASE_URL` is the deployed site (`https://topkoong.github.io/top-tanly-wedding`).

**Local** (site must be running: `pnpm dev`):

```bash
BASE_URL=http://localhost:3000 pnpm screenshots
```

**Deployed:**

```bash
BASE_URL=https://topkoong.github.io/top-tanly-wedding pnpm screenshots
```

### Output folders

Generated under:

```text
docs/screenshots/mobile-390/
docs/screenshots/tablet-768/
docs/screenshots/desktop-1440/
```

One PNG per route per viewport (`home.png`, `en-home.png`, `schedule.png`, …).

### Commit policy

Screenshots may be large binary artifacts. Track them in Git only when the team wants history; otherwise omit them or regenerate on demand before reviews.

See also **README → Playwright Screenshot QA** and [DOCUMENTATION_AUDIT.md](./DOCUMENTATION_AUDIT.md).
