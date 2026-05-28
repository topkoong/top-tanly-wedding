"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Section from "@/components/ui/Section";
import type { GalleryPageContent, SiteContent } from "@/content/schema";
import { cn } from "@/lib/utils";

type GallerySectionProps = {
  site: SiteContent;
  content: GalleryPageContent;
};

const FILTER_KEYS = ["all", "engagement", "pre-wedding", "wedding-day"] as const;

export default function GallerySection({ site, content }: GallerySectionProps) {
  const isThai = site.locale === "th";
  const [tabIndex, setTabIndex] = useState(0);

  const visibleItems = useMemo(() => {
    const key = FILTER_KEYS[tabIndex];
    if (key === "all") {
      return content.items;
    }
    return content.items.filter((item) => item.category === key);
  }, [content.items, tabIndex]);

  return (
    <Section background="cream" botanical="balanced">
      <Container className={isThai ? "font-thai" : "font-body"}>
        <div className="min-w-0 space-y-8">
          <Heading
            as="h1"
            headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
          >
            {content.title}
          </Heading>
          <DecorativeDivider />
          <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
            {content.intro}
          </p>
          <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
            {content.note}
          </p>

          <div className="-mx-1 min-w-0 px-1">
            <div
              className="flex flex-nowrap gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label={content.title}
            >
              {content.categoryTabs.map((tab, index) => (
                <button
                  key={`${tab}-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={tabIndex === index}
                  onClick={() => setTabIndex(index)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2.5 text-body-s transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-olive-deep focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
                    tabIndex === index
                      ? "border border-olive bg-olive text-cream shadow-[0_6px_16px_-10px_rgba(86,94,63,0.45)]"
                      : "border border-charcoal/25 bg-ivory/80 text-charcoal hover:border-olive/40 hover:bg-olive-soft/50",
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <div key={item.id} className="min-w-0 max-w-full">
                {item.src ? (
                  <div
                    className="relative min-w-0 max-w-full overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory shadow-[0_8px_24px_-16px_rgba(45,38,32,0.1)]"
                    style={{ aspectRatio: `${item.width}/${item.height}` }}
                  >
                    <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                ) : (
                  <PlaceholderImage
                    className="border-charcoal/10 bg-ivory transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none"
                    alt={item.alt}
                    caption={item.caption}
                    category={item.categoryLabel}
                    tone={item.tone}
                    showBorder
                    watermarkOpacityClass="text-olive/10"
                    categoryClassName="right-4 top-4 text-xs tracking-wide text-olive/70"
                    captionClassName="bottom-4 left-4 text-xs text-stone/80"
                    aspectRatio={
                      item.width === item.height ? "1/1" : item.width > item.height ? "3/2" : "4/5"
                    }
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
