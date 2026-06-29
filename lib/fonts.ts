import localFont from "next/font/local";
import { Cormorant_Garamond, IBM_Plex_Sans_Thai, Inter } from "next/font/google";

/**
 * | Role              | Font               | Site token      |
 * |-------------------|--------------------|-----------------|
 * | Script names      | Le Jour Script     | `font-script`   |
 * | English display   | Cormorant Garamond | `font-display`  |
 * | UI / body         | Inter              | `font-body`     |
 * | Thai              | IBM Plex Sans Thai | `font-thai`     |
 */
export const leJourScript = localFont({
  src: "../public/fonts/LeJourScript-Regular.otf",
  variable: "--font-le-jour-script",
  display: "swap",
  fallback: ["cursive"],
});

export const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
