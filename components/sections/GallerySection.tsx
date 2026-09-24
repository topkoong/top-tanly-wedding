import Image from "next/image";

import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Section from "@/components/ui/Section";
import type { GalleryPageContent, SiteContent } from "@/content/schema";
import { publicAssetPath } from "@/lib/publicAssetPath";

type GallerySectionProps = {
  site: SiteContent;
  content: GalleryPageContent;
};

export default function GallerySection({ site, content }: GallerySectionProps) {
  const isThai = site.locale === "th";

  return (
    <Section background="cream">
      <Container className={isThai ? "font-thai" : "font-display"}>
        <div className="min-w-0 space-y-8">
          <Reveal>
            <Heading
              as="h1"
              headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
            >
              {content.title}
            </Heading>
          </Reveal>
          <Reveal delay={0.08}>
            <DecorativeDivider />
          </Reveal>
          <Reveal delay={0.16}>
            <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
              {content.intro}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
              {content.note}
            </p>
          </Reveal>

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.items.map((item, index) => (
              <Reveal key={item.id} variant="scale" delay={(index % 3) * 0.1} className="max-w-full">
                {item.src ? (
                  <div
                    className="relative min-w-0 max-w-full overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory shadow-[0_8px_24px_-16px_rgba(45,38,32,0.1)]"
                    style={{ aspectRatio: `${item.width}/${item.height}` }}
                  >
                    <Image src={publicAssetPath(item.src as `/${string}`)} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                ) : (
                  <PlaceholderImage
                    className="border-charcoal/10 bg-ivory transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none"
                    alt={item.alt}
                    caption={item.caption}
                    tone={item.tone}
                    showBorder
                    watermarkOpacityClass="text-olive/10"
                    captionClassName="bottom-4 left-4 text-xs text-stone/80"
                    aspectRatio={
                      item.width === item.height ? "1/1" : item.width > item.height ? "3/2" : "4/5"
                    }
                  />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
