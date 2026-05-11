# 06 — Responsive UX Specification

## Mobile-first principle

Most guests will open the site from LINE or a mobile browser. Mobile design is the primary experience. Desktop polish is important, but mobile usability and elegance come first.

Every page must be reviewed at:

- 375px
- 390px
- 430px
- 768px

Also validate desktop at 1280px and 1440px.

## Navigation behavior

Desktop and mobile main nav should include only:

- Thai: `กำหนดการ`, `สถานที่`, `แกลเลอรี`, `คำถามที่พบบ่อย`, `EN`
- English: `Schedule`, `Venue`, `Gallery`, `FAQ`, `TH`

Do not include Home, LINE, Accommodation, Dress Code, RSVP, Contact in main nav.

## Mobile quality requirements

- No horizontal scrolling at target widths.
- No clipped buttons, cut-off Thai text, or overlap.
- Tap targets minimum 44px.
- Comfortable side padding and section spacing.
- Thai body text should remain readable (about 16px minimum).
- Thai line-height around 1.7.
- Avoid excessive Thai letter-spacing.

## Home on mobile

- `Tan & Top` remains strongest visual anchor.
- Date and Conrad Bangkok visible early.
- Two primary CTAs should stack/wrap gracefully.
- Hero image should feel premium but not dominate first screen.

## Schedule on mobile

- Priority page for scanability.
- Event cards stacked with strong separation.
- Time ranges visually prominent.
- Event number decorative but unobtrusive.
- Activity chips wrap cleanly and stay legible.

## Venue on mobile

- Google Maps CTA visible near top.
- Map embed height controlled for small screens.
- Room and parking cards stack clearly.
- No cramped side-by-side content.

## Gallery on mobile

- One-column intentional photo wall.
- Category tabs fit or scroll gracefully.
- Thai tab labels must not clip.
- Captions stay readable.

## FAQ on mobile

- Categories easy to scan.
- Question/answer spacing comfortable.
- Answers remain complete and readable.
- LINE CTA subtle and secondary.

## Motion and performance

- Respect `prefers-reduced-motion`.
- Keep animation subtle and non-essential.
- Avoid effects that can degrade in in-app browsers.
