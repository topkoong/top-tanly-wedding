# 07 — Gallery Placeholder Specification

## Goal

The gallery must feel like a curated photo wall, not a repeated block grid.

## Core rules

- Use placeholders only until real photos are ready.
- Do not add public uploads.
- Avoid broken-image states entirely.

## Required categories

Thai labels:

- `ทั้งหมด`
- `พิธีหมั้น`
- `พรีเวดดิ้ง`
- `วันงาน`

English labels:

- `All`
- `Engagement`
- `Pre-wedding`
- `Wedding Day`

## Required quantity

At least 18 placeholders total:

- 6 portrait (4:5)
- 6 landscape (3:2)
- 6 square (1:1)

## Placeholder style

Each placeholder should include:

- Warm ivory/champagne/rose tone variation
- Subtle TN monogram watermark
- Localized category pill
- Localized caption
- Rounded corners (`rounded-xl` or `rounded-2xl`)
- Subtle border and refined hover lift

## Content/data shape

Each item includes:

- `id`
- `src: null` (until real image exists)
- `alt`
- `width`
- `height`
- `category`
- localized `categoryLabel` and `caption`

## Layout

- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Maintain stable dimensions to prevent layout shift.

## Notes and copy

Include elegant localized copy that photos will be added when available:

- Thai: real photos will be added later
- English: real photos will be added later

Keep wording warm and guest-friendly, not technical.

## Animation / interaction

Interactive polish should remain subtle:

- Fade / gentle hover lift on placeholders is desirable.
- No motion that hides category labels permanently or blocks reading on mobile data.
- Honor **`prefers-reduced-motion`** (reduce or skip non-essential motion).
