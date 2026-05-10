# Responsive UX Specification

## Responsive principle

Design mobile-first. Most guests will open the website from LINE or a QR code on their phone.
Default language is Thai, with English pages under `/en`.

## Breakpoint behaviour

### Mobile

- One-column layout.
- Large tap targets.
- Short sections.
- Sticky or easy-access navigation.
- Thai primary menu: กำหนดการ, สถานที่, ที่พัก, แกลเลอรี, คำถาม, EN.
- English primary menu: Schedule, Venue, Accommodation, Gallery, FAQ, TH.
- Hero should not take the entire screen before showing useful actions.

### Tablet

- Two-column cards where useful.
- Timeline can remain vertical.
- Gallery can use 2–3 columns.

### Desktop

- Spacious layout.
- Thai full navigation: กำหนดการ, สถานที่, ที่พัก, การแต่งกาย, แกลเลอรี, คำถามที่พบบ่อย, EN.
- English full navigation: Schedule, Venue, Accommodation, Dress Code, Gallery, FAQ, TH.
- Gallery should use 3 columns.
- Content max-width should prevent overly long lines.

## Navigation requirements

### Desktop header

- Left: logo or couple names.
- Right: desktop menu.
- Logo links to language-specific homepage (`/` for Thai, `/en` for English).
- Do not include Home menu item.
- Do not include LINE in main menu.

### Mobile header

- Left: logo or couple names.
- Right: menu button.
- Menu should be easy to close.
- Menu should not feel crowded.
- Do not include LINE in main mobile menu.

## Touch target rules

- Buttons must be easy to tap.
- Avoid tiny text links for critical actions.
- Use large buttons for map and schedule actions.
- LINE CTA can be smaller supporting CTA (home/FAQ/footer), not primary nav.

## Content readability

- Avoid long paragraphs.
- Use cards, timelines, and short blocks.
- Important details should be visible without excessive scrolling.
- Use high contrast for text.

## Performance expectations

- Images should be optimized.
- Gallery placeholders should not cause layout shift.
- Avoid heavy animation.
- Avoid autoplay video.
- Use lazy loading for gallery images when implementation supports it.

## Accessibility expectations

- All images need alt text.
- Colour contrast must be readable.
- The site must be usable with keyboard navigation.
- Do not communicate important meaning using colour alone.
- Page titles must be clear.
- Link text should be descriptive.

## Mobile priority order

Top mobile guest priorities:

1. Schedule
2. Venue / map
3. Accommodation
4. Gallery
5. FAQ
6. Supporting LINE CTA

## Homepage mobile order

```text
Hero with names/date
Quick actions
Schedule preview
Venue preview
Small LINE CTA
Gallery teaser
Footer
```

## Avoid

- Full-screen intro animation.
- Music autoplay.
- Forced loading screen.
- Hidden map link.
- Public forms.
- Popups asking for information.
- Middleware-based language routing (not static-export-friendly).
