"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import TNMonogram from "@/components/icons/TNMonogram";
import MobileMenu from "@/components/layout/MobileMenu";
import Container from "@/components/ui/Container";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { getSiteContent } from "@/content/site";
import { useLocale } from "@/lib/hooks/useLocale";
import { getLocalizedHomeHref, getLocalizedPathname } from "@/lib/locale";
import { isRouteActive } from "@/lib/nav";
import { cn } from "@/lib/utils";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const locale = useLocale();
  const siteContent = getSiteContent(locale);
  const localeTextClass = locale === "th" ? "font-thai" : "font-display";
  const effectivePathname = getLocalizedPathname(pathname, locale);
  const isActive = (href: string) => isRouteActive(effectivePathname, href);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-charcoal/10 transition-colors duration-200",
        isScrolled
          ? "bg-cream/95 backdrop-blur-md"
          : "bg-cream/88 backdrop-blur-sm",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "relative flex min-h-16 min-w-0 items-center justify-between gap-2 sm:min-h-[5.5rem] sm:gap-4",
            localeTextClass,
          )}
        >
          <Link
            href={getLocalizedHomeHref(locale)}
            className="flex min-w-0 max-w-[calc(100%-8.5rem)] flex-1 items-center gap-2 rounded-full py-2 pl-1 pr-2 text-charcoal transition-colors duration-200 hover:bg-charcoal/8 hover:text-charcoal focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-1 sm:max-w-none sm:flex-none sm:gap-3 sm:px-2"
            aria-label={siteContent.siteName}
          >
            <TNMonogram className="h-12 w-auto shrink-0 sm:h-20" />
          </Link>

          <nav aria-label="Desktop" className="hidden items-center gap-1 md:flex">
            {siteContent.navDesktop.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-3 text-body-s font-medium tracking-[0.04em] text-charcoal transition-colors duration-200 hover:text-olive-deep focus-visible:ring-2 focus-visible:ring-olive/50 focus-visible:ring-offset-1",
                  isActive(item.href)
                    ? "font-medium text-olive-deep underline decoration-olive/45 underline-offset-4"
                    : "",
                )}
              >
                {item.label}
              </Link>
            ))}
            <LanguageToggle className="ml-1" />
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <LanguageToggle />
            <MobileMenu
              items={siteContent.navMobile}
              openLabel={siteContent.mobileMenuOpenLabel}
              closeLabel={siteContent.mobileMenuCloseLabel}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
