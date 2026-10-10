"use client";

import TNMonogram from "@/components/icons/TNMonogram";
import Container from "@/components/ui/Container";
import { getSiteContent } from "@/content/site";
import { useLocale } from "@/lib/hooks/useLocale";
import { cn } from "@/lib/utils";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const locale = useLocale();
  const siteContent = getSiteContent(locale);
  const localeTextClass = locale === "th" ? "font-thai" : "font-display";

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
          <div className="mx-auto max-w-lg space-y-4">
            <div className="flex justify-center text-charcoal/65">
              <TNMonogram className="h-24 w-auto sm:h-32" title="" />
            </div>
            <p className="mx-auto max-w-sm text-body leading-relaxed text-stone/80">
              {siteContent.footer.thankYou}
            </p>
          </div>

          <p className="mt-8 text-xs tracking-[0.06em] text-stone/55">Tan & Top Wedding 2026</p>
        </div>
      </Container>
    </footer>
  );
}
