import Image from "next/image";

import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Section from "@/components/ui/Section";
import type { GalleryPageContent, SiteContent } from "@/content/schema";

type GallerySectionProps = {
  site: SiteContent;
  content: GalleryPageContent;
};

export default function GallerySection({ site, content }: GallerySectionProps) {
  const isThai = site.locale === "th";

  return (
    <Section background="cream">
      <Container className={isThai ? "font-thai" : "font-body"}>
        <div className="space-y-8">
          <Heading
            as="h1"
            headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
          >
            {content.title}
          </Heading>
          <DecorativeDivider />
          <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
            {content.intro}
          </p>
          <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
            {content.note}
          </p>

          <div className="flex flex-wrap gap-2">
            {content.categoryTabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={
                  index === 0
                    ? "rounded-full border border-charcoal bg-charcoal px-4 py-2 text-body-s text-cream transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                    : "rounded-full border border-charcoal/30 bg-transparent px-4 py-2 text-body-s text-charcoal transition-colors duration-200 hover:border-charcoal/50 hover:bg-charcoal/8 hover:text-charcoal focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-1"
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.items.map((item) => (
              <div key={item.id}>
                {item.src ? (
                  <div
                    className="relative overflow-hidden rounded-xl bg-ivory"
                    style={{ aspectRatio: `${item.width}/${item.height}` }}
                  >
                    <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                ) : (
                  <PlaceholderImage
                    className="bg-ivory transition-transform duration-300 hover:-translate-y-0.5"
                    alt={item.alt}
                    caption={item.caption}
                    category={item.categoryLabel}
                    tone={item.tone}
                    showBorder
                    watermarkOpacityClass="text-charcoal/8"
                    categoryClassName="right-4 top-4 text-xs tracking-wide text-stone/70"
                    captionClassName="bottom-4 left-4 text-xs text-stone/75"
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
