import { BusFront, Car, TrainFront, type LucideIcon } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import type { SiteContent, TransportOption, VenueContent } from "@/content/schema";
import { cn } from "@/lib/utils";

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
      <Container className={isThai ? "font-thai" : "font-display"}>
        <div className="grid min-w-0 gap-8 lg:grid-cols-2">
          <div className="order-2 min-w-0 space-y-6 lg:order-1">
            <Heading
              as="h1"
              eyebrow={content.title}
              headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
            >
              {content.mainVenue}
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
                <p
                  className={
                    isThai
                      ? "text-xs font-thai font-medium tracking-normal text-olive-deep"
                      : "text-[0.6875rem] font-display uppercase tracking-[0.07em] text-olive-deep sm:text-xs sm:tracking-[0.09em]"
                  }
                >
                  {content.eventSpacesTitle}
                </p>
              ) : null}
              <ul className="min-w-0 space-y-4 rounded-2xl border border-charcoal/10 bg-ivory p-5 shadow-[0_8px_28px_-18px_rgba(31,29,24,0.08)] sm:p-6">
                {content.eventSpaces.map((space) => (
                  <li key={space.room} className="min-w-0 max-w-full border-b border-charcoal/10 pb-5 last:border-0 last:pb-0">
                    {space.sessionLabel ? (
                      <p
                        className={
                          isThai
                            ? "text-[0.6875rem] font-thai font-medium text-stone"
                            : "text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-stone"
                        }
                      >
                        {space.sessionLabel}
                      </p>
                    ) : null}
                    <p
                      className={cn(
                        "font-medium leading-snug text-charcoal text-[clamp(1.25rem,4vw,1.625rem)]",
                        space.sessionLabel && "mt-2",
                        isThai ? "font-thai" : "font-display",
                      )}
                    >
                      {space.room}
                      {space.floor ? (
                        <span className="font-normal text-stone"> · {space.floor}</span>
                      ) : null}
                    </p>
                    <p
                      className={
                        isThai
                          ? "mt-1.5 max-w-full text-body leading-relaxed text-stone"
                          : "mt-1.5 max-w-full text-body leading-relaxed text-stone"
                      }
                    >
                      {space.eventName}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {content.transport && content.transport.length > 0 && content.gettingHereTitle ? (
              <section className="min-w-0 max-w-full space-y-5 rounded-2xl border border-charcoal/10 bg-ivory p-5 shadow-[0_8px_28px_-18px_rgba(45,38,32,0.06)]">
                <p
                  className={
                    isThai
                      ? "text-xs font-thai font-medium tracking-normal text-olive-deep"
                      : "text-[0.6875rem] font-display uppercase tracking-[0.07em] text-olive-deep sm:text-xs sm:tracking-[0.09em]"
                  }
                >
                  {content.gettingHereTitle}
                </p>
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
              <p
                className={
                  isThai
                    ? "text-xs font-thai font-medium tracking-normal text-olive-deep"
                    : "text-[0.6875rem] font-display uppercase tracking-[0.07em] text-olive-deep sm:text-xs sm:tracking-[0.09em]"
                }
              >
                {isThai ? "ที่จอดรถ" : "Parking"}
              </p>
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
            <div className="overflow-hidden rounded-2xl border border-charcoal/[0.08] bg-ivory shadow-[0_8px_28px_-18px_rgba(86,94,63,0.12)]">
              <iframe
                src={content.mapEmbedUrl}
                title={content.mainVenue}
                className="block h-[260px] w-full max-w-full sm:h-[340px] lg:h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Button
              href={content.mapButtonUrl}
              variant="secondary"
              className="w-full shadow-[0_6px_20px_-12px_rgba(86,94,63,0.22)] hover:shadow-[0_8px_24px_-12px_rgba(86,94,63,0.26)]"
            >
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
