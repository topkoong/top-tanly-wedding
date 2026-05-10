import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
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
      <Container size="narrow" className={isThai ? "font-thai" : "font-body"}>
        <div className="space-y-8">
          <Heading
            as="h1"
            eyebrow={site.footer.lineLabel}
            headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
          >
            {content.title}
          </Heading>
          <DecorativeDivider />
          <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
            {content.intro}
          </p>
          <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
            {content.purpose}
          </p>

          <div className="rounded-2xl border border-charcoal/10 bg-ivory p-6">
            <h2 className={isThai ? "text-h3 font-thai text-charcoal" : "font-display text-h3 text-charcoal"}>
              {site.footer.lineLabel}
            </h2>
            <ul className={isThai ? "mt-3 space-y-2 text-body text-stone leading-[1.7]" : "mt-3 space-y-2 text-body text-stone"}>
              {content.updates.map((update) => (
                <li key={update}>- {update}</li>
              ))}
            </ul>
            <ul className={isThai ? "mt-4 space-y-2 text-body text-stone leading-[1.7]" : "mt-4 space-y-2 text-body text-stone"}>
              {content.notUsedFor.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
            {content.urgentHelp}
          </p>

          <Button href={content.lineOaUrl}>{content.ctaLabel}</Button>
          <p className={isThai ? "text-body-s text-stone leading-[1.7]" : "text-body-s text-stone"}>
            {content.helperText}
          </p>
        </div>
      </Container>
    </Section>
  );
}
