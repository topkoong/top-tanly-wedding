# LINE OA Rich Menu Specification

## Goal

Use LINE OA as a quick-access and announcement channel, not as a chatbot.
On the website, the LINE page is a supporting page only.

## Important rule

Do not implement AI chatbot behaviour. Do not ask guests to RSVP. Do not count attendance.
Do not describe LINE OA as "instant answers."

## Website placement decision

- LINE is not a main navigation item.
- Dedicated pages still exist:
  - Thai: `/line`
  - English: `/en/line`
- LINE page should be reachable from:
  - FAQ CTA
  - small CTA on home page
  - direct URL / QR code
  - optional small "Add LINE OA" button

> Footer link policy evolves in site content—the nav must never list LINE beside primary itinerary links.

## Recommended rich menu layout

Website IA no longer exposes `/accommodation`. Align shortcuts with shipped pages (`Schedule`, `Venue`, `Gallery`, `FAQ`, `LINE`/Help).

Example 2×3 grid:

```text
[ Schedule ] [ Venue ]
[ Gallery ]  [ FAQ ]
[ Website ]  [ Help / LINE ]
```

`Website` should deep-link guests to **`/`** or **`/en/`** depending on audience; **`Help`** can open a fixed message about contacting coordinators / official updates.

## Button behaviours

### Schedule

Preferred behaviour:

- Send a fixed LINE message or Flex-style schedule card.
- Include a button/link to the full Schedule page.

Purpose:

Guests can quickly see the event flow without opening the website.

### Venue

Preferred behaviour:

- Send location guidance.
- Include Google Maps link.
- Include a link to the full Venue page.

Purpose:

Guests can open maps quickly from their phone.

### Website shortcut

Preferred behaviour:

- Open the public wedding homepage for full context (`/` or localized `/en`).

Purpose:

Acts as fallback when richer Flex cards aren't ready.

### Gallery

Preferred behaviour:

- Open the Gallery page on the website.

Purpose:

Gallery is better viewed on the website.

### FAQ

Preferred behaviour:

- Send a fixed FAQ menu or link to FAQ page.
- Do not use AI-generated answers.

Purpose:

Reduce repeated questions.

### Help

Preferred behaviour:

- Send a fixed message explaining where to get official updates and who to contact for urgent wedding-day issues.

Purpose:

Give guests support without making the couple responsible for every question.

## Recommended Help message

```text
For official wedding updates, please follow this LINE account.
For schedule, venue, gallery, FAQ, and LINE details, please use the menu shortcuts or browse the wedding website directly.
For urgent wedding-day assistance, please contact [Coordinator name/contact placeholder].
```

## LINE OA usage

Use LINE OA for:

- Official updates
- Reminders
- Important announcements
- Venue/schedule notices
- Manual contact channel if needed

Do not use LINE OA for:

- AI chatbot answers
- Public RSVP collection
- Attendance counting
- Payment collection
- Sensitive family coordination

## Future enhancements

Only consider later:

- Rich menu switching by period: before wedding / wedding day / after wedding
- Separate Thai and English rich menus
- Broadcast schedule reminders
- Post-event gallery broadcast
