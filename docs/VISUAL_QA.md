# Visual QA Guide

## Purpose

This guide defines how to visually review the Tan & Top wedding website before publishing changes.

The site should feel minimal, elegant, classy, warm, premium, and mobile-first.

## Viewports to Check

Mobile-first review:

```text
375px
390px
430px
768px
```

Desktop review:

```text
1280px
1440px
```

## Pages to Check

Thai:

```text
/
/schedule
/venue
/gallery
/faq
/line
```

English:

```text
/en
/en/schedule
/en/venue
/en/gallery
/en/faq
/en/line
```

## Key Checks

### Global

- No horizontal scroll.
- No clipped Thai text.
- No text overlap.
- Buttons are at least 44px tall.
- Thai typography is readable.
- English typography is refined.
- Bride-first naming is used everywhere:
  - Tan & Top
  - Narueporn & Theerut

### Navbar

- Main nav does not include LINE.
- Main nav does not include Accommodation.
- Main nav does not include Dress Code.
- Main nav does not include RSVP.
- Mobile menu is easy to tap.
- Language switch works.

### Home

- Home feels like a premium digital invitation.
- Tan & Top is the strongest visual element.
- Date and Conrad Bangkok are clearly visible.
- CTAs are limited and elegant.
- Image placeholder feels intentional.

### Schedule

- Schedule uses strong event cards, not a plain timeline.
- Time ranges are prominent.
- Activity chips are visually separated.
- User can understand the two main events within 5 seconds.

### Venue

- Google Maps button is prominent.
- Thai button says `เปิด Google Maps`.
- English button says `Open in Google Maps`.
- Room and parking details are clear.
- Unverified operational details are not presented as final facts.

### Gallery

- Gallery feels curated, not like repeated blank blocks.
- There are at least 18 placeholders.
- Categories are localized.
- Placeholder cards include warm tones, subtle TN watermark, caption, and category label.

### FAQ

- No question appears without an answer.
- Categories are easy to scan.
- Answers are complete in Thai and English.
- FAQ does not introduce RSVP/form/chatbot behaviour.

### Footer

- Footer is light and elegant.
- No dark footer block.
- No giant monogram.
- Footer feels like the closing page of a wedding invitation.

## Screenshot Capture

If Playwright is installed:

```bash
pnpm screenshots
```

Default output:

```text
docs/screenshots/mobile-390/
docs/screenshots/tablet-768/
docs/screenshots/desktop-1440/
```

For local capture:

```bash
BASE_URL=http://localhost:3000 pnpm screenshots
```

For deployed GitHub Pages capture:

```bash
BASE_URL=https://topkoong.github.io/top-tanly-wedding pnpm screenshots
```
