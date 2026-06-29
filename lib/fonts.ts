import localFont from "next/font/local";
import { Bellefair, IBM_Plex_Sans_Thai, Inter } from "next/font/google";

/**
 * Canva invitation typography — Le Jour Script from Din Studio
 * (self-hosted; sourced via https://www.dafont.com/le-jour-script.font).
 *
 * | Role              | Font             | Site token      |
 * |-------------------|------------------|-----------------|
 * | Script names      | Le Jour Script   | `font-script`   |
 * | English serif     | Bellefair        | `font-display`  |
 */
export const leJourScript = localFont({
  src: "../public/fonts/LeJourScript-Regular.otf",
  variable: "--font-le-jour-script",
  display: "swap",
  fallback: ["cursive"],
});

/** Matches Canva Bellefair on pages 3 & 7 (schedule / location detail). */
export const bellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
