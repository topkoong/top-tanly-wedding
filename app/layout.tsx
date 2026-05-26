import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Sans_Thai, Inter } from "next/font/google";

import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Navbar from "@/components/layout/Navbar";
import BotanicalBackdrop from "@/components/ui/BotanicalBackdrop";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`light h-full ${cormorant.variable} ${inter.variable} ${ibmPlexSansThai.variable} antialiased`}
    >
      <body className="min-h-full min-w-0 bg-cream text-charcoal font-body">
        <div className="relative isolate min-h-screen min-w-0 bg-cream">
          <BotanicalBackdrop
            className="fixed inset-0 z-0"
            imageClassName="opacity-[0.86] md:opacity-[0.9]"
          />
          <div className="relative z-10 flex min-h-screen min-w-0 flex-col">
            <Navbar />
            <main className="min-w-0 flex-1 overflow-x-clip pb-[calc(4.75rem+env(safe-area-inset-bottom))] lg:pb-0">
              {children}
            </main>
            <Footer />
            <MobileBottomNav />
          </div>
        </div>
      </body>
    </html>
  );
}
