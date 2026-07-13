import localFont from "next/font/local";
import { Bellefair, IBM_Plex_Sans_Thai, Inter } from "next/font/google";

/**
 * | Role              | Font                  | Site token      |
 * |-------------------|-----------------------|-----------------|
 * | English display   | Bellefair             | `font-display`  |
 * | Couple name stack | Perandory (SemiCond)  | `font-couple`   |
 * | UI / body         | Inter                 | `font-body`     |
 * | Thai              | IBM Plex Sans Thai    | `font-thai`     |
 */
export const perandory = localFont({
  src: "../public/fonts/PerandorySemiCondensed.woff",
  variable: "--font-perandory",
  display: "swap",
  fallback: ["serif"],
});

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
