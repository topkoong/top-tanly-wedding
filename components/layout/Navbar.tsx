"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import TNMonogram from "@/components/icons/TNMonogram";
import Container from "@/components/ui/Container";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { getSiteContent } from "@/content/site";
import { useLocale } from "@/lib/hooks/useLocale";
import { getLocaleNeutralPathname, getLocalizedHomeHref, getLocalizedPathname } from "@/lib/locale";
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
  const isHome = getLocaleNeutralPathname(pathname) === "/";
  const [overHero, setOverHero] = useState(true);
  /* Home opens on a dark photo hero: the bar floats over it in light ink until the hero scrolls away. */
  const onDark = isHome && overHero;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
      const hero = document.getElementById("home-hero");
      setOverHero(hero ? hero.getBoundingClientRect().bottom > 72 : false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300",
        onDark
          ? "border-paper/10 bg-transparent"
          : isScrolled
            ? "border-charcoal/10 bg-cream shadow-[0_8px_24px_-20px_rgba(31,29,24,0.35)]"
            : "border-charcoal/10 bg-cream",
        className,
      )}
    >
      <Container>
        <div className="relative flex min-h-16 min-w-0 items-center justify-between gap-2 sm:min-h-[5.5rem] sm:gap-4">
          <Link
            href={getLocalizedHomeHref(locale)}
            className={cn(
              "flex min-w-[3rem] max-w-[calc(100%-8.5rem)] shrink-0 flex-1 items-center gap-2 rounded-full py-2 pl-1 pr-2 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-1 sm:max-w-none sm:flex-none sm:gap-3 sm:px-2",
              onDark
                ? "hover:bg-paper/10 focus-visible:ring-paper/50 focus-visible:ring-offset-transparent"
                : "text-charcoal hover:bg-charcoal/8 hover:text-charcoal focus-visible:ring-charcoal/40",
            )}
            aria-label={siteContent.siteName}
          >
            <TNMonogram className={cn("h-12 w-auto shrink-0 transition-[filter] duration-300 sm:h-20", onDark && "invert")} />
          </Link>

          <nav
            aria-label="Desktop"
            className={cn("hidden items-center gap-1 md:flex", localeTextClass)}
          >
            {siteContent.navDesktop.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-3 text-body-s font-medium tracking-[0.04em] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-1",
                  onDark
                    ? "text-paper/90 hover:text-paper focus-visible:ring-paper/50"
                    : "text-charcoal hover:text-olive-deep focus-visible:ring-olive/50",
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

          <div className={cn("flex shrink-0 items-center gap-2 md:hidden", localeTextClass)}>
            <LanguageToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
