"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import TNMonogram from "@/components/icons/TNMonogram";
import Container from "@/components/ui/Container";
import { getSiteContent } from "@/content/site";
import { getLocaleFromPathname } from "@/lib/locale";
import { cn } from "@/lib/utils";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const siteContent = getSiteContent(locale);
  const localeTextClass = locale === "th" ? "font-thai" : "font-body";

  return (
    <footer
      className={cn(
        "relative overflow-hidden border-t border-charcoal/10 bg-cream pt-12 pb-[calc(6rem+env(safe-area-inset-bottom))] md:pt-16 md:pb-12 lg:pb-10",
        localeTextClass,
        className,
      )}
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto max-w-lg space-y-3">
            <div className="flex justify-center text-charcoal/65">
              <TNMonogram className="h-11 w-auto" title="" />
            </div>
            <p className="mx-auto max-w-full text-pretty font-script leading-[1.1] text-charcoal text-[clamp(1.875rem,7vw,2.75rem)]">
              {siteContent.coupleFormalName}
            </p>
            <p className="max-w-full text-body-s uppercase tracking-[0.18em] text-stone">
              {siteContent.coupleFriendlyName}
            </p>
            <div className="mx-auto h-px max-w-[3rem] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <p className="max-w-full text-pretty text-body-s leading-relaxed text-stone">
              {siteContent.weddingDate} · {siteContent.footer.venueLabel}
            </p>
            <p className="mx-auto max-w-sm text-body leading-relaxed text-stone/80">
              {siteContent.footer.thankYou}
            </p>
          </div>

          <nav aria-label="Footer" className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {siteContent.footer.footerLinks.map((item, index) => (
              <Fragment key={item.href}>
                {index > 0 ? (
                  <span className="text-charcoal/30 select-none" aria-hidden>
                    ·
                  </span>
                ) : null}
                <Link
                  href={item.href}
                  className="max-w-full text-pretty text-body-s leading-snug text-charcoal transition-colors duration-200 hover:text-olive-deep focus-visible:ring-2 focus-visible:ring-olive-deep focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
                >
                  {item.label}
                </Link>
              </Fragment>
            ))}
          </nav>

          <p className="mt-4 text-xs tracking-[0.06em] text-stone/55">Tan & Top Wedding 2026</p>
        </div>
      </Container>
    </footer>
  );
}
