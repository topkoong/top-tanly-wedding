import { Bus, MapPin, TrainFront } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import type { SiteContent, VenueContent } from "@/content/schema";

type VenueSectionProps = {
  site: SiteContent;
  content: VenueContent;
};

export default function VenueSection({ site, content }: VenueSectionProps) {
  const isThai = site.locale === "th";

  return (
    <Section background="cream">
      <Container className={isThai ? "font-thai" : "font-body"}>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Heading
              as="h1"
              eyebrow={content.mainVenue}
              headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
            >
              {content.title}
            </Heading>
            <DecorativeDivider className="mx-0" />
            <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
              {content.summary}
            </p>
            <p className={isThai ? "text-body-s text-stone leading-[1.7]" : "text-body-s text-stone"}>
              {content.address}
            </p>

            <div className="space-y-3">
              {content.eventSpaces.map((space) => (
                <article key={space.room} className="rounded-2xl border border-charcoal/10 bg-ivory p-4">
                  <p className="text-body-s uppercase tracking-[0.12em] text-stone">
                    {space.room}
                    {space.floor && (
                      <span className="ml-2 font-normal normal-case tracking-normal text-stone/60">
                        · {space.floor}
                      </span>
                    )}
                  </p>
                  <p className={isThai ? "mt-1 text-body text-charcoal leading-[1.7]" : "mt-1 text-body text-charcoal"}>
                    {space.eventName}
                  </p>
                </article>
              ))}
            </div>

            <section className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-stone">
                {isThai ? "ที่จอดรถ" : "Parking"}
              </p>
              <ul className={isThai ? "list-disc space-y-1 pl-5 text-sm text-charcoal leading-[1.7]" : "list-disc space-y-1 pl-5 text-sm text-charcoal"}>
                {content.parking.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={isThai ? "text-sm italic text-stone leading-[1.7]" : "text-sm italic text-stone"}>
                {content.parkingNote}
              </p>
            </section>

            <section className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-stone">
                {isThai ? "ตัวเลือกการเดินทางอื่น ๆ" : "Getting Here — Other Options"}
              </p>
              {content.transport && content.transport.length > 0 ? (
                <div className="space-y-3">
                  {content.transport.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      {item.icon === "train" ? (
                        <TrainFront size={16} />
                      ) : item.icon === "car" ? (
                        <MapPin size={16} />
                      ) : (
                        <Bus size={16} />
                      )}
                      <div>
                        <p className="text-sm text-charcoal">{item.label}</p>
                        <p className={isThai ? "text-sm text-stone leading-[1.7]" : "text-sm text-stone"}>
                          {item.detail}
                        </p>
                        {item.steps && item.steps.length > 0 ? (
                          <ul className="mt-1 list-disc space-y-1 pl-5">
                            {item.steps.map((step, i) => (
                              <li key={i} className="text-xs leading-relaxed text-stone">
                                {step}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {item.note ? <p className="mt-1 text-xs italic text-stone/60">{item.note}</p> : null}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          </div>

          <div className="space-y-3 lg:sticky lg:top-24 lg:self-start">
            <iframe
              src={content.mapEmbedUrl}
              title={content.mainVenue}
              className="h-[420px] w-full rounded-2xl border border-charcoal/10 lg:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <Button href={content.mapButtonUrl} className="w-full">
              {content.mapButtonLabel}
            </Button>
            <p className={isThai ? "text-xs text-stone leading-[1.7]" : "text-xs text-stone"}>
                {content.helperText}
              </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
