"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <footer className={cn("relative overflow-hidden bg-charcoal py-14", localeTextClass, className)}>
      <div className="pointer-events-none absolute left-4 top-4 text-cream/20">
        <TNMonogram className="h-20 w-20" title="" />
      </div>
      <Container>
        <div className="space-y-8 text-center">
          <div className="space-y-3">
            <p className="font-display text-3xl font-normal text-cream">{siteContent.coupleFormalName}</p>
            <p className="text-body text-cream/80">{siteContent.coupleFriendlyName}</p>
            <div className="mx-auto h-px w-12 bg-gold/50" />
            <p className="text-body-s text-cream/70">{siteContent.weddingDate}</p>
            <p className="text-body-s text-cream/70">{siteContent.footer.venueLabel}</p>
            <p className="text-body text-cream/80">{siteContent.footer.thankYou}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-2 text-cream/60">
            {siteContent.footer.footerLinks.map((item, index) => (
              <span key={item.href} className="inline-flex items-center gap-2">
                <Link
                  href={item.href}
                  className="text-xs uppercase tracking-[0.18em] text-cream/60 transition-colors duration-200 hover:text-cream focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                >
                  {item.label}
                </Link>
                {index < siteContent.footer.footerLinks.length - 1 ? <span aria-hidden>·</span> : null}
              </span>
            ))}
          </nav>

          <p className="text-xs text-cream/40">Tan & Top Wedding 2026</p>
        </div>
      </Container>
    </footer>
  );
}
