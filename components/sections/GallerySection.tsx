import Image from "next/image";

import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Section from "@/components/ui/Section";
import type { GalleryItem, GalleryPageContent, SiteContent } from "@/content/schema";
import { publicAssetPath } from "@/lib/publicAssetPath";
import { cn } from "@/lib/utils";

type GallerySectionProps = {
  site: SiteContent;
  content: GalleryPageContent;
};

/** Desktop masonry: each photo drops into the currently shortest column, keeping list order row by row. */
function balanceColumns(items: GalleryItem[], count: number) {
  const heights = Array<number>(count).fill(0);
  const columns: { item: GalleryItem; index: number }[][] = Array.from({ length: count }, () => []);
  items.forEach((item, index) => {
    const target = heights.indexOf(Math.min(...heights));
    columns[target].push({ item, index });
    heights[target] += item.height / item.width;
  });
  return columns;
}

export default function GallerySection({ site, content }: GallerySectionProps) {
  const isThai = site.locale === "th";

  const renderTile = (item: GalleryItem, index: number, className?: string) => (
    <Reveal key={item.id} variant="scale" delay={(index % 3) * 0.1} className={cn("max-w-full", className)}>
      {item.src ? (
        <div
          className="group relative min-w-0 max-w-full overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory shadow-[0_8px_24px_-16px_rgba(45,38,32,0.1)]"
          style={{ aspectRatio: `${item.width}/${item.height}` }}
        >
          <Image
            src={publicAssetPath(item.src as `/${string}`)}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
          />
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
          aspectRatio={item.width === item.height ? "1/1" : item.width > item.height ? "3/2" : "4/5"}
        />
      )}
    </Reveal>
  );

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

          <div className="min-w-0 columns-1 gap-4 sm:columns-2 lg:hidden">
            {content.items.map((item, index) => renderTile(item, index, "mb-4 break-inside-avoid"))}
          </div>
          <div className="hidden min-w-0 items-start gap-4 lg:flex">
            {balanceColumns(content.items, 3).map((column, columnIndex) => (
              <div key={columnIndex} className="flex min-w-0 flex-1 flex-col gap-4">
                {column.map(({ item, index }) => renderTile(item, index))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
