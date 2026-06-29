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
      <Container className={isThai ? "font-thai" : "font-display"}>
        <div className="min-w-0 space-y-8">
          <Heading
            as="h1"
            eyebrow={content.title}
            headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
          >
            {site.weddingDate}
          </Heading>
          <DecorativeDivider />
          <p className={cn("max-w-full text-body leading-relaxed text-stone", isThai && "font-thai")}>
            {content.intro}
          </p>

          <p
            className={cn(
              "text-center font-display text-[clamp(1.75rem,6vw,2.5rem)] font-medium leading-tight text-charcoal",
              isThai && "font-thai",
            )}
          >
            {content.venueHeadline}
          </p>

          <div className="min-w-0 space-y-6">
            {content.locationGroups.map((group) => (
              <section
                key={group.id}
                className="min-w-0 overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory shadow-[0_8px_28px_-18px_rgba(31,29,24,0.1)]"
              >
                <div className="border-b border-charcoal/10 bg-cream/60 px-5 py-6 sm:px-7 sm:py-7">
                  <p
                    className={cn(
                      "text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-stone sm:text-xs",
                      isThai && "font-thai normal-case tracking-normal sm:tracking-normal",
                    )}
                  >
                    {group.sessionLabel}
                  </p>
                  <p
                    className={cn(
                      "mt-2 font-display text-[clamp(1.5rem,5vw,2rem)] font-medium leading-tight text-charcoal",
                      isThai && "font-thai",
                    )}
                  >
                    {group.roomName}
                  </p>
                  <p
                    className={cn(
                      "mt-1.5 text-[clamp(1.0625rem,3.5vw,1.375rem)] font-medium leading-snug text-charcoal/85",
                      isThai && "font-thai",
                    )}
                  >
                    {group.floorLabel}
                  </p>
                </div>

                <ol className="min-w-0 divide-y divide-charcoal/10">
                  {group.timeline.map((entry) => (
                    <li
                      key={entry.id}
                      className="flex min-w-0 flex-col gap-2 px-5 py-5 sm:flex-row sm:items-baseline sm:gap-6 sm:px-7 sm:py-6"
                    >
                      <p
                        className={cn(
                          "shrink-0 font-display text-[clamp(1.75rem,5vw,2.25rem)] font-medium tabular-nums leading-none text-charcoal",
                          isThai && "font-thai",
                        )}
                      >
                        {entry.time}
                      </p>
                      <p
                        className={cn(
                          "min-w-0 text-pretty text-[clamp(1.125rem,3.5vw,1.5rem)] font-medium leading-snug text-charcoal",
                          isThai ? "font-thai" : "font-display",
                        )}
                      >
                        {entry.title}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>

          <div className="min-w-0 pt-1">
            <Button href={content.venuePageHref} variant="secondary" className="w-full min-w-0 sm:w-auto sm:max-w-full">
              {content.venueButtonLabel}
            </Button>
          </div>

          <p className={cn("max-w-full text-body leading-relaxed text-stone", isThai && "font-thai")}>
            {content.arrivalNote}
          </p>

          <p className={cn("max-w-full text-body leading-relaxed text-stone", isThai && "font-thai")}>
            {content.updateNote}
          </p>
        </div>
      </Container>
    </Section>
  );
}
