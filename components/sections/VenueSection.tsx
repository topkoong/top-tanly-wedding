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
          <div className="order-2 space-y-6 lg:order-1">
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
            {content.address ? (
              <p className={isThai ? "text-body-s text-stone leading-[1.7]" : "text-body-s text-stone"}>
                {content.address}
              </p>
            ) : null}

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

            <section className="rounded-2xl border border-charcoal/10 bg-ivory p-5">
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

          <div className="order-1 space-y-3 lg:order-2 lg:sticky lg:top-24 lg:self-start">
            <iframe
              src={content.mapEmbedUrl}
              title={content.mainVenue}
              className="h-[300px] w-full rounded-2xl border border-charcoal/10 sm:h-[360px] lg:h-[520px]"
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
