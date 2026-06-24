import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import type { SchedulePageContent, SiteContent } from "@/content/schema";
import { cn } from "@/lib/utils";

type ScheduleSectionProps = {
  site: SiteContent;
  content: SchedulePageContent;
};

export default function ScheduleSection({ site, content }: ScheduleSectionProps) {
  const isThai = site.locale === "th";

  return (
    <Section background="cream">
      <Container className={isThai ? "font-thai" : "font-body"}>
        <div className="min-w-0 space-y-8">
          <Heading
            as="h1"
            eyebrow={content.title}
            headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
          >
            {site.weddingDate}
          </Heading>
          <DecorativeDivider />
          <p className="max-w-full text-body-s font-medium leading-relaxed text-charcoal/90">{content.pageVenueSummary}</p>
          <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
            {content.intro}
          </p>

          <ol className="min-w-0 space-y-6 md:space-y-8">
            {content.events.map((event, index) => (
              <li
                key={event.id}
                className="relative min-w-0 max-w-full overflow-hidden rounded-2xl border border-charcoal/10 bg-gradient-to-br from-ivory via-cream/40 to-olive-soft/20 p-6 shadow-[0_8px_28px_-18px_rgba(45,38,32,0.08)] md:p-8"
              >
                <div
                  className={
                    index === 0
                      ? "absolute inset-x-0 top-0 h-[3px] bg-olive/70"
                      : "absolute inset-x-0 top-0 h-[3px] bg-gold/50"
                  }
                  aria-hidden
                />
                <p className="pointer-events-none absolute right-4 top-3 select-none font-display text-6xl leading-none text-olive/[0.08] sm:right-6 sm:top-4 sm:text-7xl md:text-8xl">
                  {event.number}
                </p>
                <div className="relative min-w-0 space-y-5 pr-10 sm:pr-14 md:pr-16">
                  <p className="max-w-full font-display text-3xl leading-none text-olive-deep sm:text-4xl md:text-5xl">
                    {event.time}
                  </p>
                  <h2
                    className={
                      isThai
                        ? "max-w-full text-pretty break-words text-h3 font-thai font-medium leading-snug text-olive-deep"
                        : "max-w-full text-pretty break-words font-display text-h3 font-medium leading-snug text-olive-deep"
                    }
                  >
                    {isThai ? event.thaiName : event.englishName}
                  </h2>
                  <div className="h-px w-full min-w-0 bg-charcoal/10" />
                  <p
                    className={cn(
                      "max-w-full text-pretty rounded-xl border border-olive/20 bg-olive-soft/45 px-4 py-3 text-body-s leading-snug text-charcoal",
                      isThai && "font-thai",
                    )}
                  >
                    {event.roomAccessLabel}
                  </p>
                  <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
                    {event.description}
                  </p>

                  <div className="flex min-w-0 flex-wrap content-start gap-x-2 gap-y-2.5">
                    {event.chips.map((chip) => (
                      <span
                        key={chip}
                        className="min-w-0 max-w-full rounded-full border border-charcoal/[0.08] bg-ivory/90 px-3 py-1.5 text-xs leading-snug text-charcoal break-words"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="min-w-0 pt-1">
                    <Button href={event.venuePageHref} variant="secondary" className="w-full min-w-0 sm:w-auto sm:max-w-full">
                      {content.venueButtonLabel}
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
            {content.arrivalNote}
          </p>

          <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
            {content.updateNote}
          </p>
        </div>
      </Container>
    </Section>
  );
}
