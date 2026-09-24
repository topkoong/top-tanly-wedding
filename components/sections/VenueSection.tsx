import { BusFront, Car, SquareParking, TrainFront, type LucideIcon } from "lucide-react";

import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import VenueMapEmbed from "@/components/ui/VenueMapEmbed";
import type { SiteContent, TransportOption, VenueContent } from "@/content/schema";
import { cn } from "@/lib/utils";

const transportIcons: Record<TransportOption["icon"], LucideIcon> = {
  train: TrainFront,
  car: Car,
  shuttle: BusFront,
};

const CARD = "min-w-0 rounded-2xl border border-charcoal/10 bg-ivory shadow-[0_8px_28px_-18px_rgba(31,29,24,0.1)]";

type VenueSectionProps = {
  site: SiteContent;
  content: VenueContent;
};

export default function VenueSection({ site, content }: VenueSectionProps) {
  const isThai = site.locale === "th";
  const eyebrow = isThai
    ? "font-thai text-body-s text-stone"
    : "font-display text-[0.6875rem] uppercase tracking-[0.2em] text-stone sm:text-xs";
  const body = isThai ? "font-thai" : "font-display";

  const directions = [
    ...(content.transport ?? []).map((item) => ({ ...item, Icon: transportIcons[item.icon] })),
    { label: content.parkingTitle, detail: content.parkingNote, Icon: SquareParking },
  ];

  return (
    <Section background="cream">
      <Container className={body}>
        <div className="mx-auto min-w-0 max-w-3xl space-y-8">
          <Reveal>
            <Heading
              as="h1"
              eyebrow={content.title}
              headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
            >
              {content.mainVenue}
            </Heading>
            {content.address ? (
              <p className={cn("mt-3 text-body leading-relaxed text-stone", body)}>{content.address}</p>
            ) : null}
          </Reveal>

          <Reveal delay={0.08}>
            <DecorativeDivider />
          </Reveal>

          <Reveal variant="scale" delay={0.12}>
            <VenueMapEmbed
              venueName={content.mainVenue}
              embedUrl={content.mapEmbedUrl}
              buttonUrl={content.mapButtonUrl}
              buttonLabel={content.mapButtonLabel}
              helperText={content.helperText}
              isThai={isThai}
            />
          </Reveal>

          {content.eventSpaces.length > 0 ? (
            <Reveal as="section" className={CARD}>
              {content.eventSpacesTitle ? (
                <h2 className={cn("px-5 pt-6 sm:px-7", eyebrow)}>{content.eventSpacesTitle}</h2>
              ) : null}
              <div className="grid divide-y divide-charcoal/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                {content.eventSpaces.map((space) => (
                  <div key={space.room} className="px-5 py-5 sm:px-7 sm:py-6">
                    {space.sessionLabel ? <p className={eyebrow}>{space.sessionLabel}</p> : null}
                    <p className={cn("mt-2 text-h3 leading-tight text-charcoal", body)}>{space.room}</p>
                    {space.floor ? (
                      <p className={cn("mt-1 text-body leading-snug text-stone", body)}>{space.floor}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </Reveal>
          ) : null}

          <Reveal as="section" delay={0.08} className={CARD}>
            {content.gettingHereTitle ? (
              <h2 className={cn("px-5 pt-6 sm:px-7", eyebrow)}>{content.gettingHereTitle}</h2>
            ) : null}
            <ul className="divide-y divide-charcoal/10">
              {directions.map(({ label, detail, Icon }) => (
                <li key={label} className="flex min-w-0 gap-4 px-5 py-4 sm:px-7">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-charcoal/60" strokeWidth={1.5} aria-hidden />
                  <div className="min-w-0">
                    <p className={cn("text-body leading-snug text-charcoal", body)}>{label}</p>
                    <p className={cn("mt-0.5 text-body-s leading-relaxed text-stone", body)}>{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
