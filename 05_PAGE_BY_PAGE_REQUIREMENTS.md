# 05 — Page-by-Page Requirements

## Global constraints

- Keep current IA and routes only.
- Thai routes: `/`, `/schedule`, `/venue`, `/gallery`, `/faq`, `/line`
- English routes: `/en`, `/en/schedule`, `/en/venue`, `/en/gallery`, `/en/faq`, `/en/line`
- Do not add Accommodation, Dress Code page, RSVP, Contact, chatbot, forms, API routes, server actions, database, auth, analytics, or middleware.
- Thai is default; English is under `/en`.
- All visible copy comes from `content/th/*.ts` and `content/en/*.ts`.
- Visible couple naming is bride-first only.

## Home (`/`, `/en`)

Home must be the most beautiful page.

Required:

- Elegant hero with strong `Tan & Top` display.
- Secondary formal name: `Narueporn & Theerut`.
- Date and `Conrad Bangkok` presented ceremonially.
- Premium hero image placeholder/frame with subtle TN mark.
- Exactly two hero CTAs:
  - Thai: `ดูกำหนดการ`, `ดูแผนที่`
  - English: `View Schedule`, `View Map`
- Wedding Day at a Glance section (3 refined cards).
- Short warm welcome section.
- LINE is supporting only (not primary hero action).

## Schedule (`/schedule`, `/en/schedule`)

Required:

- Elegant page header, large date display, short intro.
- Two premium event cards (01/02), not a plain vertical text timeline.
- Each card includes: large time range, event name, room badge, venue, short description, activity chips, understated venue link.
- Activities must be visually separated chips/cards, never plain concatenated text.
- Bottom update note about possible updates.

Event baseline:

- `01` Engagement & Rubwai Ceremony — `07:00–11:00`, Beverly Hills, Conrad Bangkok
- `02` Wedding Reception — `11:00–14:00`, Conrad Ballroom, Conrad Bangkok

## Venue (`/venue`, `/en/venue`)

Primary goal: help guests reach Conrad Bangkok quickly.

Required:

- Strong venue title (`Conrad Bangkok`).
- Room cards for Beverly Hills and Conrad Ballroom.
- Highlighted parking card.
- Integrated map card.
- Prominent map CTA near top on mobile.
- Map button labels:
  - Thai: `เปิด Google Maps`
  - English: `Open in Google Maps`
- Helper text:
  - Thai: `กดเพื่อเปิดเส้นทางใน Google Maps บนมือถือ`
  - English: `Tap to open directions in Google Maps on mobile.`
- Keep Google Maps search URL as map action destination.

Operational rule:

Operational venue details (floor numbers, shuttle, BTS/MRT, drop-off, exact hotel instructions) must be verified before final publication. If not verified, mark as to-be-confirmed or keep the page simple with map, room names, and parking only.

## Gallery (`/gallery`, `/en/gallery`)

Goal: curated photo wall quality.

Required:

- Elegant header and warm intro.
- Localized category tabs:
  - Thai: `ทั้งหมด`, `พิธีหมั้น`, `พรีเวดดิ้ง`, `วันงาน`
  - English: `All`, `Engagement`, `Pre-wedding`, `Wedding Day`
- At least 18 placeholders:
  - 6 portrait (4:5)
  - 6 landscape (3:2)
  - 6 square (1:1)
- Varied warm tones, TN watermark, category pill, caption, subtle hover refinement.
- “coming soon” style note for later photo updates.

## FAQ (`/faq`, `/en/faq`)

Required:

- Categorized FAQ:
  - Thai: `ข้อมูลทั่วไป`, `การเดินทางและที่จอดรถ`, `ภายในงาน`, `รูปภาพและการติดต่อ`
  - English: `General Information`, `Travel & Parking`, `During the Event`, `Photos & Contact`
- No question may appear without an answer.
- Complete Thai and English answers for date, event parts, arrival time, dress freedom, venue, maps, parking, Grab/taxi, joining both parts, children, what to bring, day-of contact, photos, website updates, LINE OA.
- Refined bottom CTA pointing to LINE OA as support channel.

## LINE (`/line`, `/en/line`)

- Supporting channel only.
- Explain official updates and contact pathway.
- Do not present LINE as chatbot or RSVP flow.

## Footer (all pages)

Required:

- Light cream footer, thin top border, centered content.
- Small TN monogram, formal name, friendly name, date + venue, thank-you text, elegant page links.
- No dark footer block, no giant monogram.
