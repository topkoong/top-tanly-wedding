# Invitation fonts

**Canva design:** https://www.canva.com/design/DAHNaD5h7rk/JQ_1xL50NlIlAXdn7L0aZA/edit (pages 3 & 7)

| Role | Font | Site token | File |
|------|------|------------|------|
| Script (`Tan & Top`) | **Le Jour Script** | `font-script` | `LeJourScript-Regular.otf` |
| English serif | **Bellefair** | `font-display` | Google Fonts |

**Le Jour Script** is self-hosted from Din Studio ([dafont reference](https://www.dafont.com/le-jour-script.font)). The hero nickname also uses `public/brand/tan-top.png`.

## Licensing

The dafont package is **personal use only**. For a public wedding website, purchase a commercial/web license from [Din Studio](https://din-studio.com/product/le-jour-font-duo/) if required by their terms.

The same dafont download also includes **Le Jour Serif** (the script’s paired serif). If your Canva pages use that instead of Bellefair, add `LeJourSerif-Regular.otf` and we can wire it as `font-display`.

## Replace the script file

1. Save as `public/fonts/LeJourScript-Regular.otf`
2. Rebuild: `pnpm build`
