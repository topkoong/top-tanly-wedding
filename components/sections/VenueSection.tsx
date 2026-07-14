import { BusFront, Car, TrainFront, type LucideIcon } from "lucide-react";

import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import VenueMapEmbed from "@/components/ui/VenueMapEmbed";
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
        <div className="min-w-0 space-y-8">
          <Heading
            as="h1"
            eyebrow={content.title}
            headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
          >
            {content.mainVenue}
          </Heading>
          <DecorativeDivider />
          <p className={cn("max-w-full text-body leading-relaxed text-stone", isThai && "font-thai")}>
            {content.summary}
          </p>

          {content.address ? (
            <p
              className={cn(
                "text-center font-display text-[clamp(1.0625rem,3.5vw,1.375rem)] font-medium leading-snug text-charcoal/85",
                isThai && "font-thai",
              )}
            >
              {content.address}
            </p>
          ) : null}

          {content.eventSpaces.length > 0 ? (
            <div className="min-w-0 space-y-6">
              {content.eventSpacesTitle ? (
                <p
                  className={cn(
                    "text-center text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-stone sm:text-xs",
                    isThai && "font-thai normal-case tracking-normal sm:tracking-normal",
                  )}
                >
                  {content.eventSpacesTitle}
                </p>
              ) : null}

              {content.eventSpaces.map((space) => (
                <section
                  key={`${space.room}-${space.floor ?? ""}`}
                  className="min-w-0 overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory shadow-[0_8px_28px_-18px_rgba(31,29,24,0.1)]"
                >
                  <div className="border-b border-charcoal/10 bg-cream/60 px-5 py-6 sm:px-7 sm:py-7">
                    {space.sessionLabel ? (
                      <p
                        className={cn(
                          "text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-stone sm:text-xs",
                          isThai && "font-thai normal-case tracking-normal sm:tracking-normal",
                        )}
                      >
                        {space.sessionLabel}
                      </p>
                    ) : null}
                    <p
                      className={cn(
                        "font-display text-[clamp(1.5rem,5vw,2rem)] font-medium leading-tight text-charcoal",
                        space.sessionLabel && "mt-2",
                        isThai && "font-thai",
                      )}
                    >
                      {space.room}
                    </p>
                    {space.floor ? (
                      <p
                        className={cn(
                          "mt-1.5 text-[clamp(1.0625rem,3.5vw,1.375rem)] font-medium leading-snug text-charcoal/85",
                          isThai && "font-thai",
                        )}
                      >
                        {space.floor}
                      </p>
                    ) : null}
                  </div>
                  <div className="px-5 py-5 sm:px-7 sm:py-6">
                    <p
                      className={cn(
                        "text-pretty text-[clamp(1.125rem,3.5vw,1.5rem)] font-medium leading-snug text-charcoal",
                        isThai ? "font-thai" : "font-display",
                      )}
                    >
                      {space.eventName}
                    </p>
                  </div>
                </section>
              ))}
            </div>
          ) : null}

          <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:items-start">
            <div className="order-2 min-w-0 space-y-6 lg:order-1">
              {content.transport && content.transport.length > 0 && content.gettingHereTitle ? (
                <section className="min-w-0 overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory shadow-[0_8px_28px_-18px_rgba(31,29,24,0.1)]">
                  <div className="border-b border-charcoal/10 bg-cream/60 px-5 py-5 sm:px-7">
                    <p
                      className={cn(
                        "text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-stone sm:text-xs",
                        isThai && "font-thai normal-case tracking-normal sm:tracking-normal",
                      )}
                    >
                      {content.gettingHereTitle}
                    </p>
                  </div>
                  <ul className="min-w-0 divide-y divide-charcoal/10">
                    {content.transport.map((item, index) => {
                      const Icon = transportIcons[item.icon];
                      return (
                        <li key={`${item.label}-${index}`} className="min-w-0 px-5 py-5 sm:px-7 sm:py-6">
                          <div className="flex min-w-0 gap-3">
                            <Icon className="mt-1 h-5 w-5 shrink-0 text-charcoal/70" aria-hidden />
                            <div className="min-w-0 space-y-2">
                              <p
                                className={cn(
                                  "text-[clamp(1.125rem,3.5vw,1.375rem)] font-medium leading-snug text-charcoal",
                                  isThai ? "font-thai" : "font-display",
                                )}
                              >
                                {item.label}
                              </p>
                              <p
                                className={cn(
                                  "max-w-full text-body leading-relaxed text-stone",
                                  isThai && "font-thai",
                                )}
                              >
                                {item.detail}
                              </p>
                              {item.steps && item.steps.length > 0 ? (
                                <ol
                                  className={cn(
                                    "list-decimal space-y-1.5 pl-5 text-body-s leading-relaxed text-stone",
                                    isThai && "font-thai",
                                  )}
                                >
                                  {item.steps.map((step, stepIndex) => (
                                    <li key={stepIndex}>{step}</li>
                                  ))}
                                </ol>
                              ) : null}
                              {item.note ? (
                                <p
                                  className={cn(
                                    "max-w-full text-body-s leading-relaxed text-stone/90",
                                    isThai && "font-thai",
                                  )}
                                >
                                  {item.note}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ) : null}

              <section className="min-w-0 rounded-2xl border border-charcoal/10 bg-cream/40 px-5 py-5 sm:px-7">
                <p
                  className={cn(
                    "text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-stone sm:text-xs",
                    isThai && "font-thai normal-case tracking-normal sm:tracking-normal",
                  )}
                >
                  {isThai ? "ที่จอดรถ" : "Parking"}
                </p>
                <p
                  className={cn(
                    "mt-3 text-body leading-relaxed text-charcoal",
                    isThai && "font-thai",
                  )}
                >
                  {content.parkingNote}
                </p>
                <ul
                  className={cn(
                    "mt-3 list-disc space-y-1 pl-5 text-body-s leading-relaxed text-stone",
                    isThai && "font-thai",
                  )}
                >
                  {content.parking.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="order-1 min-w-0 max-w-full lg:sticky lg:top-24 lg:order-2 lg:self-start">
              <VenueMapEmbed
                venueName={content.mainVenue}
                embedUrl={content.mapEmbedUrl}
                buttonUrl={content.mapButtonUrl}
                buttonLabel={content.mapButtonLabel}
                helperText={content.helperText}
                isThai={isThai}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
