# Acceptance Criteria and QA Checklist

## Product constraints

The website passes if all are true:

- No RSVP page exists.
- No RSVP form exists.
- No attendance counting exists.
- No guest confirmation workflow exists.
- No chatbot exists.
- No AI chat UI exists.
- No public contact form exists.
- No public gallery upload exists.
- No login/auth system exists.
- No database dependency exists for MVP.
- No API routes exist.
- No server actions exist.
- No middleware-based language routing exists.

## Navigation acceptance criteria

Thai desktop:

- Header shows: กำหนดการ, สถานที่, ที่พัก, การแต่งกาย, แกลเลอรี, คำถามที่พบบ่อย, EN.
- Home is not a visible menu item.
- LINE is not a visible menu item.
- Logo/couple names link to `/`.

Thai mobile:

- Menu shows: กำหนดการ, สถานที่, ที่พัก, แกลเลอรี, คำถาม, EN.
- Dress Code is accessible from the site but not required in mobile primary nav.
- Menu is easy to open and close.
- LINE is not in primary mobile menu.

English desktop:

- Header shows: Schedule, Venue, Accommodation, Dress Code, Gallery, FAQ, TH.
- Logo/couple names link to `/en`.
- LINE is not a visible menu item.

English mobile:

- Menu shows: Schedule, Venue, Accommodation, Gallery, FAQ, TH.
- Dress Code remains accessible.
- LINE is not in primary mobile menu.

## Page acceptance criteria

### Home

- Shows Top & Tan or Theerut & Narueporn clearly.
- Shows wedding date: Sunday, 29 November 2026.
- Shows Conrad Bangkok venue summary.
- Provides quick links to Schedule, Venue, Accommodation, Gallery.
- Provides supporting (small) LINE OA CTA.

### Schedule

- Shows recommended arrival time placeholder.
- Shows a clear timeline.
- Includes both confirmed events and time ranges.
- Includes dress code reminder.
- Links to Venue and LINE.
- Shows note that details may be updated closer to the date.
- Thai copy reads naturally in Thai; English copy is concise.

### Venue

- Shows Conrad Bangkok as main venue.
- Shows Beverly Hills room and Ballroom references.
- Shows Google Maps and Apple Maps placeholders.
- Shows parking guidance for Conrad Bangkok and All Seasons Place.
- Shows BTS/MRT, taxi/Grab, drop-off, and entrance/floor placeholders.

### Accommodation

- Shows accommodation categories.
- Uses hotel cards or clear blocks.
- Shows distance/travel-time placeholders.

### Dress Code

- Shows colour palette guidance.
- Shows outfit guidance.
- Uses short, visual-first content.

### Gallery

- Shows placeholder gallery cards.
- Uses stable image/card dimensions.
- Does not allow uploads.
- Includes coming-soon copy.
- Contains at least 18 placeholders (6 portrait 4:5, 6 landscape 3:2, 6 square 1:1).
- Uses categories: engagement, pre-wedding, wedding-day.

### FAQ

- Uses static FAQ content.
- Does not use AI answers.
- Links to relevant pages where useful.

### LINE

- Shows LINE OA QR/link placeholders.
- Explains official update purpose.
- Does not ask guests to RSVP.
- Does not present LINE as chatbot or AI instant-answer channel.
- Page is reachable from footer, FAQ CTA, home small CTA, and direct URL.

## Responsive acceptance criteria

- Mobile layout works at 360px width.
- Tablet layout works around 768px width.
- Desktop layout works at 1280px width and above.
- No horizontal scrolling.
- Header does not cover content.
- Buttons are easy to tap.
- Gallery grid is 1 column (mobile), 2 columns (tablet), 3 columns (desktop).

## Accessibility acceptance criteria

- Each page has one clear H1.
- Headings follow a logical order.
- Images have meaningful alt text or decorative handling.
- Links have descriptive labels.
- Text contrast is readable.
- Keyboard navigation works for menus and links.

## Performance acceptance criteria

- No heavy autoplay video.
- No full-screen loading gate.
- Gallery placeholders do not shift layout.
- Images are optimized or prepared for optimization.
- Unused dependencies are avoided.

## Content acceptance criteria

- Placeholder content is obvious and easy to replace.
- No invented final wedding details.
- Tone is warm, elegant, and clear.
- Copy is short and scannable.
- No hardcoded visible copy in components; all copy comes from `content/th/*.ts` and `content/en/*.ts`.
