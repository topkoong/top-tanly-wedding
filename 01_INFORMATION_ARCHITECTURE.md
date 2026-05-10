# Information Architecture

## Core navigation decisions

- Do not include Home as a menu item.
- Do not include LINE as a main menu item.
- Logo/couple name links to language-specific home:
  - Thai default: `/`
  - English: `/en`
- LINE remains a dedicated supporting page (`/line`, `/en/line`) reachable from CTA surfaces only.

## Thai navigation

### Desktop

```text
กำหนดการ · สถานที่ · ที่พัก · การแต่งกาย · แกลเลอรี · คำถามที่พบบ่อย · EN
```

### Mobile

```text
กำหนดการ · สถานที่ · ที่พัก · แกลเลอรี · คำถาม · EN
```

## English navigation

### Desktop

```text
Schedule · Venue · Accommodation · Dress Code · Gallery · FAQ · TH
```

### Mobile

```text
Schedule · Venue · Accommodation · Gallery · FAQ · TH
```

Dress Code remains accessible in English and Thai, but can be omitted from mobile primary menu.

## Site map

```text
/
├── Schedule
├── Venue
├── Accommodation
├── Dress Code
├── Gallery
├── FAQ
└── LINE (supporting page only)

/en
├── /en/schedule
├── /en/venue
├── /en/accommodation
├── /en/dress-code
├── /en/gallery
├── /en/faq
└── /en/line
```

## Page purpose

### Home
A warm landing page with couple names, confirmed date, venue summary, hero placeholder, quick links, and a small LINE supporting CTA.

### Schedule
A timeline-style page showing the event flow and recommended arrival time.

### Venue
A practical location guide with map links, parking information, transport guidance, room guidance, and drop-off instructions.

### Accommodation
A curated guide for guests who may need to stay nearby.

### Dress Code
A visual guidance page for colour theme, outfit style, and what to avoid.

### Gallery
A placeholder gallery initially. Later, replace placeholders with pre-wedding and wedding-day photos.

### FAQ
A static, deterministic FAQ page. No chatbot.

### LINE
A supporting page explaining official LINE OA updates, reminders, announcements, and manual contact guidance if needed. It is not a chatbot page.

## Recommended homepage sections

```text
Hero
↓
Wedding date / venue summary
↓
Quick action cards: Schedule, Venue, Accommodation, Gallery
↓
Short welcome message
↓
Small LINE OA supporting call-to-action
↓
Footer
```

## Header behaviour

- Logo/couple names on the left.
- Desktop menu on the right.
- Mobile hamburger or bottom-friendly menu.
- Sticky header is acceptable if subtle and not too tall.
- Header should not cover page anchors.
- No LINE item in primary header menu.

## Footer content

Footer should include:

- Top & Tan Wedding
- Formal names: Theerut & Narueporn
- Wedding date: Sunday, 29 November 2026
- LINE OA link placeholder
- Optional short thank-you message

## Naming guidance

Use `LINE`, not `Contact` or `RSVP`.

Reason:

- `Contact` implies a form.
- `RSVP` implies attendance confirmation and counting.
- `LINE` clearly tells guests where to receive official updates and notices.
