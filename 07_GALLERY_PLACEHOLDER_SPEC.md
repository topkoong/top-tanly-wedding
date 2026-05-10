# Gallery Placeholder Specification

## Goal

Create a gallery page that looks complete even before real photos are available.

## Important rule

Use placeholders only. Do not implement public guest uploads.

## Gallery categories

```text
Engagement
Pre-wedding
Wedding-day
```

## Placeholder strategy

Use elegant placeholder cards with warm brand-color blocks (ivory/rose/champagne), optional captions, and TN monogram watermark styling. The layout should make it easy to replace placeholders with real images later.

## Required Phase 1 placeholder items

Create at least 18 placeholder items:

- 6 portrait placeholders with aspect ratio 4:5
- 6 landscape placeholders with aspect ratio 3:2
- 6 square placeholders with aspect ratio 1:1

Distribute across categories:

- engagement
- pre-wedding
- wedding-day

## Data shape requirement

Each gallery item should include:

- `id`
- `src: null` (in Phase 1)
- `alt`
- `width`
- `height`
- `category`

Alt text must exist in both language content files (`content/th/*.ts`, `content/en/*.ts`).

## Rendering rule

- If `src` is `null`, render `PlaceholderImage`.
- If `src` exists later, render real image.
- No broken image state should ever appear.

## Empty-state copy

Use copy like:

```text
Wedding day photos will be added here after the celebration.
```

or:

```text
Our gallery is coming soon. Please check back after the wedding for selected moments from the day.
```

## Gallery behaviour

- Mobile: 1 column.
- Tablet: 2 columns.
- Desktop: 3 columns.
- Cards should maintain consistent aspect ratio.
- Layout should not shift when images load.
- Each image/card must have alt text.
- Placeholders must look intentional and premium, not loading/fallback errors.

## Future enhancement, not MVP

Possible future gallery features:

- Lightbox preview
- Category filter
- Download selected photos
- Password-protected album
- Integration with professional photographer album

Do not implement these in MVP unless explicitly requested.
