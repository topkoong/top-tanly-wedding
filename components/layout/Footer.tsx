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
        "border-t border-champagne bg-champagne pt-14 pb-10 md:pt-20 md:pb-12",
        localeTextClass,
        className,
      )}
    >
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <div className="space-y-3">
            <div className="flex justify-center text-charcoal/35">
              <TNMonogram className="h-10 w-10" title="" />
            </div>
            <p className="font-display text-h2 leading-tight text-charcoal">{siteContent.coupleFormalName}</p>
            <p className="text-body text-charcoal/60">{siteContent.coupleFriendlyName}</p>
            <div className="mx-auto h-px w-12 bg-gold/70" />
            <p className="text-body-s text-charcoal/70 md:whitespace-nowrap">
              {siteContent.weddingDate} · {siteContent.footer.venueLabel}
            </p>
            <p className="text-body text-charcoal/65">{siteContent.footer.thankYou}</p>
          </div>

          <nav aria-label="Footer" className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {siteContent.footer.footerLinks.map((item, index) => (
              <Fragment key={item.href}>
                {index > 0 ? (
                  <span className="text-charcoal/30 select-none" aria-hidden>
                    ·
                  </span>
                ) : null}
                <Link
                  href={item.href}
                  className="text-body-s text-charcoal/60 uppercase tracking-[0.1em] transition-colors duration-200 hover:text-charcoal focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-champagne"
                >
                  {item.label}
                </Link>
              </Fragment>
            ))}
          </nav>

          <p className="mt-4 text-xs tracking-[0.06em] text-charcoal/45">Tan & Top Wedding 2026</p>
        </div>
      </Container>
    </footer>
  );
}
