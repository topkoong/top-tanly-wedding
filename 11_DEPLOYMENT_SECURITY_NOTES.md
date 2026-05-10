# Deployment and Security Notes

## Recommended deployment direction

Deploy as a static-first Next.js site. Vercel is a practical option for Next.js projects, especially when connected to a Git repository for preview deployments.

Language routing must remain static-export-friendly:

- Thai default routes at root (`/`, `/schedule`, etc.)
- English under `/en` (`/en`, `/en/schedule`, etc.)
- No middleware-based locale routing in MVP

## MVP security posture

The safest MVP is a read-only static website.

Avoid:

- Forms
- API routes
- Server actions
- Database
- Public upload
- Chatbot
- Comments
- Login system

This reduces spam, abuse, maintenance, and privacy risks.


## Static export and image handling

For MVP, keep the site fully static. If `output: 'export'` is enabled in `next.config.ts`, configure image handling safely:

```text
Use `next/image` for layout stability and accessibility, but set `images.unoptimized = true` for MVP static export, or explicitly configure a custom image loader.
```

Do not rely on default Next.js image optimization if the site is exported as static HTML. Compress real gallery and hero images before adding them to `/public/images`.

## Open Graph image

MVP should use a static file:

```text
public/og-image.jpg
```

Only add `app/opengraph-image.tsx` later if it is confirmed to work with the final deployment mode.

## Privacy notes

Be careful with:

- Personal phone numbers
- Family contact details
- Exact private schedules
- Unpublished venue arrangements
- Guest photos

Only publish what you are comfortable sharing publicly.

## Gallery privacy

Recommended approach:

- Publish selected photos only.
- Do not allow public uploads.
- Review all photos manually before adding them to the site.
- Consider a private gallery link or password later if needed.

## Domain checklist

Before buying a domain:

1. Check spelling carefully.
2. Prefer `.com` if available.
3. Avoid hyphens unless necessary.
4. Avoid numbers unless the domain is clearly wedding-specific.
5. Buy early to avoid losing the preferred name.
6. Consider buying both primary and backup domains if affordable.

Recommended first choice:

```text
topandtanwedding.com
```

## SEO and sharing notes

Set social sharing title to:

```text
Top & Tan Wedding
```

Set social description to:

```text
Wedding details, venue directions, accommodation guide, gallery, and official updates for Top & Tan's wedding.
```

Use a soft, elegant Open Graph image with:

```text
Top & Tan
Theerut & Narueporn
[Wedding date placeholder]
```

## Launch checklist

Before sharing the QR code:

- Confirm all placeholder text is either finalized or intentionally left generic.
- Confirm confirmed details are correct:
  - Sunday, 29 November 2026
  - Conrad Bangkok
  - Engagement & Rubwai ceremony (07:00–11:00, Beverly Hills room)
  - Wedding Reception (11:00–14:00, Ballroom)
  - Parking: Conrad Bangkok / All Seasons Place
- Test website on iPhone and Android.
- Test LINE OA links.
- Test Google Maps link.
- Test Apple Maps link.
- Test gallery placeholders.
- Confirm no RSVP/form/chatbot exists.
- Confirm no attendance workflow exists.
- Confirm no API routes, server actions, or middleware locale routing exists.
- Confirm footer and LINE page wording do not imply attendance counting.
- Confirm LINE is not a main nav item and is treated as a supporting page.
- Confirm QR code opens the correct domain.
