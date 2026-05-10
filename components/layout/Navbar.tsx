"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import TNMonogram from "@/components/icons/TNMonogram";
import MobileMenu from "@/components/layout/MobileMenu";
import Container from "@/components/ui/Container";
import { getSiteContent } from "@/content/site";
import {
  getLanguageSwitchHref,
  getLocalizedHomeHref,
  getLocaleFromPathname,
} from "@/lib/locale";
import { cn } from "@/lib/utils";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const locale = getLocaleFromPathname(pathname);
  const siteContent = getSiteContent(locale);
  const languageSwitchHref = getLanguageSwitchHref(pathname);
  const localeTextClass = locale === "th" ? "font-thai" : "font-body";
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-charcoal/8 transition-colors",
        isScrolled ? "bg-cream/90 backdrop-blur-sm" : "bg-cream",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "relative flex h-18 items-center justify-between gap-4",
            localeTextClass,
          )}
        >
          <Link
            href={getLocalizedHomeHref(locale)}
            className="inline-flex items-center gap-3 rounded-full px-2 py-2 text-charcoal transition-colors duration-200 hover:bg-charcoal/8 hover:text-charcoal focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-1"
            aria-label={siteContent.siteName}
          >
            <TNMonogram className="h-7 w-7" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl">{siteContent.coupleFriendlyName}</span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-stone">
                Wedding
              </span>
            </div>
          </Link>

          <nav aria-label="Desktop" className="hidden items-center gap-1 md:flex">
            {siteContent.navDesktop.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-3 text-body tracking-wide text-charcoal transition-colors duration-200 hover:text-rose-deep focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-1",
                  isActive(item.href) ? "font-medium text-rose-deep" : "",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={languageSwitchHref}
              className="rounded-full border border-charcoal/30 px-3 py-1.5 text-xs font-medium tracking-wide text-charcoal transition-colors duration-200 hover:border-charcoal/50 hover:bg-charcoal/8 hover:text-charcoal focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-1"
            >
              {siteContent.languageSwitchLabel}
            </Link>
          </nav>

          <MobileMenu
            items={siteContent.navMobile}
            languageSwitchHref={languageSwitchHref}
            languageSwitchLabel={siteContent.languageSwitchLabel}
            openLabel={siteContent.mobileMenuOpenLabel}
            closeLabel={siteContent.mobileMenuCloseLabel}
          />
        </div>
      </Container>
    </header>
  );
}
