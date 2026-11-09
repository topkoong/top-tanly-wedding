# Agent instructions — Tan & Top wedding site

Read this, then [`docs/MAINTAINING.md`](docs/MAINTAINING.md) and [`.cursor/rules/wedding-site.mdc`](.cursor/rules/wedding-site.mdc). Ignore numbered specs `00`–`12` unless something here points you there.

This is a **static, read-only** invitation. Guests never submit data here.

## Delegate photos

For gallery order, home slots, the save-the-date reel, `pnpm photos`, crops, or mixing photo sets, use the **`wedding-photos`** subagent (`.cursor/agents/wedding-photos.md`). Invoke with `/wedding-photos` or spawn it when the task is photo-heavy.

## Product truth

- Bride-first only: **Tan & Top**, **Narueporn & Theerut**
- English at `/`. Thai at `/th/`. Production `trailingSlash: true`
- RSVP is the home `#rsvp` link to a Google Form. No on-site form, chatbot, LINE OA, database, or API
- Paper cream is **`#fff5e6`**. Do not retint the olive envelope
- Thai save-the-date copy is **จองวันไว้เลยนะ**
- Home film (`#film`) sits after Conrad and before RSVP. It does **not** belong on the gallery page

## Do

- Edit copy in `content/th/` **and** `content/en/` (types in `content/schema.ts`)
- Send public asset URLs through `publicAssetPath()`
- Convert originals with `pnpm photos`; commit `public/` output only
- Keep `prefers-reduced-motion` instant (do not unmount `Reveal`)

## Do not

- Overwrite Conrad `venue` / `venue-2` photos
- Start the gallery with ชุดไทย
- Put three home-band stills from the same studio set
- Mute-autoplay the reel (tap-to-play with sound)
- Restore florals, `/en/` routes, Accommodation, or Dress-code
