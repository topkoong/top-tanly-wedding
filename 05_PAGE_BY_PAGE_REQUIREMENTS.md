# Page-by-Page Requirements

## Global requirements

- Use Next.js App Router.
- Use static-export-friendly routing only (no middleware language redirects).
- Use a responsive layout.
- Use static content first.
- Use placeholders where wedding information is not finalized.
- Use semantic headings.
- Use accessible alt text for all images.
- Do not create API routes.
- Do not use server actions.
- Do not create forms.
- Do not create chatbot UI.
- Do not create guest login.
- Do not create attendance workflows.
- Use Thai as default language routes and English under `/en`.
- All visible copy must come from `content/th/*.ts` and `content/en/*.ts`.

## Home page

### Purpose

Create a warm first impression and guide guests to the most important information.

### Required sections

1. Hero section
2. Date and venue summary
3. Quick action cards
4. Short welcome note
5. Small LINE OA supporting call-to-action
6. Footer

### Required quick action cards

- Schedule
- Venue
- Accommodation
- Gallery

### UX notes

The homepage should be elegant and uncluttered. It should not try to show every detail.
LINE should be discoverable but must not appear as a primary menu destination.

## Schedule page

### Purpose

Help guests understand when to arrive and what will happen.

### Required sections

1. Page intro
2. Recommended arrival time
3. Timeline
4. Dress code reminder
5. Venue link
6. Supporting LINE update reminder
7. Note: details may be updated closer to the date

### Timeline design

Use a clean vertical timeline.

### Required event content

- Engagement & Rubwai ceremony
  - Date: Sunday, 29 November 2026
  - Time: 07:00–11:00
  - Venue: Beverly Hills room, Conrad Bangkok
- Wedding Reception
  - Date: Sunday, 29 November 2026
  - Time: 11:00–14:00
  - Venue: Ballroom, Conrad Bangkok

### Localization requirement

- Thai default copy should be natural Thai, not direct word-for-word English translation.
- English copy should be concise and clear.

## Venue page

### Purpose

Help guests reach the venue without needing to contact the couple.

### Required sections

1. Venue overview
2. Main venue name: Conrad Bangkok
3. Event spaces:
   - Beverly Hills room (Engagement & Rubwai ceremony)
   - Ballroom (Wedding Reception)
4. Map CTA section:
   - Google Maps placeholder link
   - Apple Maps placeholder link
5. Parking section:
   - Conrad Bangkok parking
   - All Seasons Place parking
6. BTS/MRT guidance placeholder
7. Taxi/Grab guidance placeholder
8. Drop-off point placeholder
9. Hotel entrance/floor instruction placeholder
10. Accessibility or senior guest notes

### UX notes

Make map access highly visible. The first screen on mobile should include the venue name and map button.
Do not invent exact address, floor number, or transport details unless explicitly confirmed.

## Accommodation page

### Purpose

Help out-of-town or international guests decide where to stay.

### Required sections

1. Recommended accommodation summary
2. Main hotel / wedding venue hotel
3. Nearby premium options
4. Nearby practical options
5. Transport notes

### UX notes

Use cards with distance and travel time. Avoid overwhelming guests with too many hotels.

## Dress Code page

### Purpose

Give guests clear style guidance.

### Required sections

1. Dress code overview
2. Colour palette
3. Recommended outfit guidance
4. What to avoid
5. Example moodboard placeholders

### UX notes

This should be visual-first. Use colour swatches and short copy.

## Gallery page

### Purpose

Show photos before and after the wedding.

### Required sections

1. Gallery intro
2. Category filters or category sections
3. Placeholder image grid
4. Empty-state message for future wedding-day photos

### UX notes

Do not allow public uploads. Gallery management is manual.
Use intentional premium placeholders, never broken-image states.
Grid requirements:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

Phase 1 placeholder minimum:
- 18 items total
- 6 portrait (4:5)
- 6 landscape (3:2)
- 6 square (1:1)
- Categories: engagement, pre-wedding, wedding-day

## FAQ page

### Purpose

Reduce repeated questions.

### Required sections

1. FAQ intro
2. Grouped FAQ accordions or cards
3. Links to relevant pages
4. LINE reminder for official updates
5. CTA link to LINE supporting page (`/line` or `/en/line`)

### UX notes

FAQ must be static and deterministic. No AI-generated answers.

## LINE page

### Purpose

Explain how guests receive official updates.
LINE page is a supporting page only, not a main navigation destination.

### Required sections

1. LINE OA QR placeholder
2. Add LINE button
3. What guests will receive (official updates/reminders/announcements/notices)
4. What LINE is not used for
5. Urgent help instructions

### Important copy rule

Do not say “RSVP here.”

Use wording like:

```text
Add our official LINE account for wedding updates, map reminders, schedule highlights, and important announcements.
```

Do not present LINE as chatbot, AI assistant, or instant-answer channel.
