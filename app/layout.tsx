import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, IBM_Plex_Sans_Thai, Inter, Pinyon_Script } from "next/font/google";

import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tan & Top Wedding",
  description:
    "Wedding schedule, venue details, gallery, FAQ, and official updates for Tan & Top's wedding.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`light h-full ${cormorant.variable} ${allura.variable} ${pinyon.variable} ${inter.variable} ${ibmPlexSansThai.variable} antialiased`}
    >
      <body className="min-h-full min-w-0 bg-cream text-charcoal font-body">
        <div className="flex min-h-screen min-w-0 flex-col">
          <Navbar />
          <main className="min-w-0 flex-1 overflow-x-clip pb-[calc(4.75rem+env(safe-area-inset-bottom))] lg:pb-0">
            {children}
          </main>
          <Footer />
          <MobileBottomNav />
        </div>
      </body>
    </html>
  );
}
