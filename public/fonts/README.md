# Invitation fonts

| Role | Font | Site token | File |
|------|------|------------|------|
| English display | **Perandory** (Semi-Condensed) | `font-display` | `PerandorySemiCondensed.woff` |
| UI body | **Inter** | `font-body` | Google Fonts |
| Thai | **IBM Plex Sans Thai** | `font-thai` | Google Fonts |

**Perandory** matches the printed invitation (Kulturë Type). The site uses the Semi-Condensed cut for headings, nav, and the stacked **Tan / Top** couple name.

## Licensing

Perandory is **free for personal use** via [Kulturë Type on Gumroad](https://kulture.gumroad.com/l/onpto). For a public wedding website, confirm personal-use coverage or purchase a [commercial license](https://creativemarket.com/kulturefoundry/6953752-Perandory-Display-Type).

## Replace the font file

1. Export or download `Perandory-Regular.otf` / `.woff` from your Canva font kit or Gumroad.
2. Save as `public/fonts/PerandorySemiCondensed.woff` (or add a second `localFont` entry in `lib/fonts.ts`).
3. Rebuild: `pnpm build`
