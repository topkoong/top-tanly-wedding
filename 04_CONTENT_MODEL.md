# Content Model

This file defines the content the website should support in Thai and English from day one.

## Language and structure requirements

- Default language is Thai.
- English pages live under `/en`.
- All visible copy must come from content files.
- Do not hardcode Thai or English copy inside components.
- Use language-specific content structure:

```text
content/th/*.ts
content/en/*.ts
```

## Global content

```text
Couple friendly name: Top & Tan
Groom first name: Theerut
Groom nickname: Top
Bride first name: Narueporn
Bride nickname: Tan
Wedding date: Sunday, 29 November 2026
Primary venue: Conrad Bangkok
Event 1 venue: Beverly Hills room, Conrad Bangkok
Event 2 venue: Ballroom, Conrad Bangkok
Parking: Conrad Bangkok parking / All Seasons Place parking
LINE OA URL: [LINE OA URL placeholder]
Google Maps URL: [Google Maps URL placeholder]
Apple Maps URL: [Apple Maps URL placeholder]
```

## Home page content

Fields:

- Hero eyebrow text
- Couple name
- Wedding date
- Venue summary
- Short welcome message
- Primary CTA: View Schedule
- Secondary small CTA: Add LINE OA
- Hero image placeholder

## Schedule content

Each schedule item should have:

- Time
- Date
- Title
- Short description
- Venue
- Guest note if applicable
- Venue link (to Venue page)

Required event items:

```text
07:00–11:00 — Engagement & Rubwai ceremony — Beverly Hills room, Conrad Bangkok
11:00–14:00 — Wedding Reception — Ballroom, Conrad Bangkok
```

Also include:

- Recommended arrival note placeholder
- Note: "Details may be updated closer to the date"

## Venue content

Fields:

- Venue name in English
- Venue name in Thai
- Main venue: Conrad Bangkok
- Ceremony room: Beverly Hills room
- Reception room: Ballroom
- Address in English placeholder
- Address in Thai placeholder
- Google Maps URL
- Apple Maps URL
- Parking information for Conrad Bangkok
- Parking information for All Seasons Place
- BTS/MRT guidance placeholder
- Grab/taxi drop-off guidance
- Drop-off point placeholder
- Hotel entrance / floor instruction placeholder
- Accessibility notes
- Emergency venue contact placeholder, if needed

## Accommodation content

Each accommodation option should have:

- Hotel name
- Distance from venue
- Estimated travel time
- Price range placeholder, optional
- Booking link placeholder, optional
- Notes

Group accommodation by:

```text
Recommended
Nearby premium options
Nearby practical options
```

## Dress Code content

Fields:

- Dress code title
- Recommended style
- Recommended colours
- Colours to avoid
- Outfit examples
- Notes for men
- Notes for women
- Notes for family members

## Gallery content

Use placeholder content first.

Gallery groups:

```text
Engagement
Pre-wedding
Wedding-day
```

Each item should have:

- id
- src: null
- Alt text
- Category
- width
- height
- Optional caption

Gallery Phase 1 minimum:

- 6 portrait placeholders (4:5)
- 6 landscape placeholders (3:2)
- 6 square placeholders (1:1)
- Total: at least 18 placeholders

## FAQ content

Each FAQ item should have:

- Question
- Answer
- Related page link, if useful

Recommended FAQ categories:

```text
Arrival and schedule
Venue and parking
Accommodation
Dress code
Photos and gallery
LINE updates and notices
```

## LINE page content

Fields:

- LINE OA QR image placeholder
- LINE OA link placeholder
- Explanation of why guests should add LINE
- What updates will be sent
- Reminder and announcement examples
- Urgent help instructions
- Coordinator contact placeholder, if any

## Content rules

- Keep copy short.
- Use clear headings.
- Avoid long paragraphs.
- Do not mention attendance counting.
- Do not ask guests to RSVP.
- Do not include forms.
- Do not include chatbot prompts.
- Do not position LINE as a chatbot or AI assistant.
- Avoid exposing personal phone numbers unless intentional.
- Use the spelling `Venue` (not `Vanue`).
