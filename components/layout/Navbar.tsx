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
  const locale = useLocale();
  const siteContent = getSiteContent(locale);
  const localeTextClass = locale === "th" ? "font-thai" : "font-display";
  const effectivePathname = getLocalizedPathname(pathname, locale);
  const isActive = (href: string) => isRouteActive(effectivePathname, href);
  const isHome = getLocaleNeutralPathname(pathname) === "/";
  const [overDark, setOverDark] = useState<boolean | null>(null);
  /* The bar stays transparent; its ink flips to light over sections marked data-nav-theme="dark". Home opens on one. */
  const onDark = overDark ?? isHome;

  useEffect(() => {
    const update = () => {
      const header = document.querySelector("header");
      const probe = header ? header.getBoundingClientRect().height / 2 : 40;
      const dark = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-theme="dark"]')).some((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= probe && rect.bottom >= probe;
      });
      setOverDark(dark);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-transparent transition-colors duration-300",
        onDark ? "text-paper" : "text-charcoal",
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
                : "hover:bg-charcoal/8 focus-visible:ring-charcoal/40",
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
                  onDark ? "focus-visible:ring-paper/50" : "focus-visible:ring-charcoal/40",
                  isActive(item.href)
                    ? "underline decoration-current/45 underline-offset-[6px]"
                    : "opacity-80 hover:opacity-100",
                )}
              >
                {item.label}
              </Link>
            ))}
            <LanguageToggle className="ml-3" />
          </nav>

          <div className={cn("flex shrink-0 items-center gap-2 md:hidden", localeTextClass)}>
            <LanguageToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
