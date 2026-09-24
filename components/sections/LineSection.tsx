import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import type { LineContent, SiteContent } from "@/content/schema";

type LineSectionProps = {
  site: SiteContent;
  content: LineContent;
};

export default function LineSection({ site, content }: LineSectionProps) {
  const isThai = site.locale === "th";

  return (
    <Section background="cream">
      <Container size="narrow" className={isThai ? "font-thai" : "font-display"}>
        <div className="min-w-0 space-y-8">
          <Reveal>
            <Heading
              as="h1"
              eyebrow={site.footer.lineLabel}
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
              {content.purpose}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="max-w-full rounded-2xl border border-charcoal/10 bg-ivory p-6 shadow-[0_8px_28px_-18px_rgba(45,38,32,0.06)]">
            <h2 className={isThai ? "text-h3 font-thai text-charcoal" : "font-display text-h3 text-charcoal"}>
              {site.footer.lineLabel}
            </h2>
            <ul className={isThai ? "mt-3 space-y-2 text-body leading-relaxed text-stone" : "mt-3 space-y-2 text-body leading-relaxed text-stone"}>
              {content.updates.map((update) => (
                <li key={update}>- {update}</li>
              ))}
            </ul>
            <ul className={isThai ? "mt-4 space-y-2 text-body leading-relaxed text-stone" : "mt-4 space-y-2 text-body leading-relaxed text-stone"}>
              {content.notUsedFor.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
              {content.urgentHelp}
            </p>
          </Reveal>

          <Reveal>
            <Button href={content.lineOaUrl} className="w-full shrink-0 sm:w-auto">
              {content.ctaLabel}
            </Button>
          </Reveal>
          <Reveal>
            <p className={isThai ? "max-w-full text-body-s leading-relaxed text-stone" : "max-w-full text-body-s leading-relaxed text-stone"}>
              {content.helperText}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
