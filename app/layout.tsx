import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Navbar from "@/components/layout/Navbar";
import { cormorantGaramond, ibmPlexSansThai, inter, leJourScript } from "@/lib/fonts";
import "./globals.css";

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
      className={`light h-full ${cormorantGaramond.variable} ${leJourScript.variable} ${inter.variable} ${ibmPlexSansThai.variable} antialiased`}
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
