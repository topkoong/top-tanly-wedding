import { BusFront, Car, TrainFront, type LucideIcon } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import type { SiteContent, TransportOption, VenueContent } from "@/content/schema";

const transportIcons: Record<TransportOption["icon"], LucideIcon> = {
  train: TrainFront,
  car: Car,
  shuttle: BusFront,
};

type VenueSectionProps = {
  site: SiteContent;
  content: VenueContent;
};

export default function VenueSection({ site, content }: VenueSectionProps) {
  const isThai = site.locale === "th";

  return (
    <Section background="cream">
      <Container className={isThai ? "font-thai" : "font-body"}>
        <div className="grid min-w-0 gap-8 lg:grid-cols-2">
          <div className="order-2 min-w-0 space-y-6 lg:order-1">
            <Heading
              as="h1"
              eyebrow={content.mainVenue}
              headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
            >
              {content.title}
            </Heading>
            <DecorativeDivider className="mx-0" />
            <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
              {content.summary}
            </p>
            {content.address ? (
              <p className={isThai ? "max-w-full text-body-s leading-relaxed text-stone" : "max-w-full text-body-s leading-relaxed text-stone"}>
                {content.address}
              </p>
            ) : null}

            <div className="space-y-4">
              {content.eventSpacesTitle ? (
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone">{content.eventSpacesTitle}</p>
              ) : null}
              <div className="space-y-3">
                {content.eventSpaces.map((space) => (
                  <article key={space.room} className="min-w-0 max-w-full rounded-2xl border border-charcoal/10 bg-ivory p-4 shadow-[0_8px_28px_-18px_rgba(45,38,32,0.06)]">
                    <p className="text-body-s uppercase tracking-[0.12em] text-stone">
                      {space.room}
                      {space.floor && (
                        <span className="ml-2 font-normal normal-case tracking-normal text-stone/60">
                          · {space.floor}
                        </span>
                      )}
                    </p>
                    <p className={isThai ? "mt-1 max-w-full text-body leading-relaxed text-charcoal" : "mt-1 max-w-full text-body leading-relaxed text-charcoal"}>
                      {space.eventName}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {content.transport && content.transport.length > 0 && content.gettingHereTitle ? (
              <section className="min-w-0 max-w-full space-y-5 rounded-2xl border border-charcoal/10 bg-ivory p-5 shadow-[0_8px_28px_-18px_rgba(45,38,32,0.06)]">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-stone">{content.gettingHereTitle}</p>
                <ul className="space-y-5">
                  {content.transport.map((item, index) => {
                    const Icon = transportIcons[item.icon];
                    return (
                      <li key={`${item.label}-${index}`} className="flex min-w-0 gap-3">
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-olive-deep" aria-hidden />
                        <div className="min-w-0 space-y-2">
                          <p className="text-body font-medium text-charcoal">{item.label}</p>
                          <p className="max-w-full text-body leading-relaxed text-stone">{item.detail}</p>
                          {item.steps && item.steps.length > 0 ? (
                            <ol className="mt-2 list-decimal space-y-1 pl-5 text-body-s leading-relaxed text-stone">
                              {item.steps.map((step, stepIndex) => (
                                <li key={stepIndex}>{step}</li>
                              ))}
                            </ol>
                          ) : null}
                          {item.note ? (
                            <p className="max-w-full text-body-s leading-relaxed text-stone/90">{item.note}</p>
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ) : null}

            <section className="min-w-0 max-w-full rounded-2xl border border-charcoal/10 bg-ivory p-5">
              <p className="text-xs uppercase tracking-[0.12em] text-stone">{isThai ? "ที่จอดรถ" : "Parking"}</p>
              <p className={isThai ? "mt-2 text-body text-charcoal leading-[1.7]" : "mt-2 text-body text-charcoal"}>
                {content.parkingNote}
              </p>
              <ul className={isThai ? "mt-3 list-disc space-y-1 pl-5 text-body-s text-stone leading-[1.7]" : "mt-3 list-disc space-y-1 pl-5 text-body-s text-stone"}>
                {content.parking.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="order-1 min-w-0 max-w-full space-y-3 lg:order-2 lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-cream shadow-[0_8px_28px_-18px_rgba(45,38,32,0.08)]">
              <iframe
                src={content.mapEmbedUrl}
                title={content.mainVenue}
                className="block h-[260px] w-full max-w-full sm:h-[340px] lg:h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Button href={content.mapButtonUrl} className="w-full">
              {content.mapButtonLabel}
            </Button>
            <p className={isThai ? "max-w-full text-xs leading-relaxed text-stone" : "max-w-full text-xs leading-relaxed text-stone"}>
              {content.helperText}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
