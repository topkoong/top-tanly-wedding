import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Section from "@/components/ui/Section";
import type { SiteContent } from "@/content/schema";

type HomeShellProps = {
  content: SiteContent;
};

export default function HomeShell({ content }: HomeShellProps) {
  const isThai = content.locale === "th";

  return (
    <>
      <Section
        background="cream"
        className="bg-gradient-to-b from-cream via-ivory/45 to-cream py-20 md:py-32"
      >
        <Container>
          <FadeIn className="grid min-w-0 max-w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="order-1 min-w-0 space-y-6 lg:order-none">
              <div className="inline-flex max-w-full items-center gap-3 text-stone">
                <span className="h-px w-10 shrink-0 bg-charcoal/25" />
                <p className="min-w-0 text-body-s uppercase tracking-[0.08em] text-stone sm:tracking-[0.15em]">
                  {content.siteName}
                </p>
              </div>
              <Heading
                as="h1"
                headingClassName={
                  isThai
                    ? "font-display text-display-xl leading-[0.98]"
                    : "font-display text-display-xl leading-[0.98]"
                }
              >
                {content.coupleFriendlyName}
              </Heading>
              <p className="max-w-full text-body-s uppercase tracking-[0.08em] text-stone sm:tracking-[0.12em]">
                {content.homeShell.formalNames}
              </p>
              <div className="space-y-1">
                <p className="max-w-full text-body text-charcoal">{content.homeShell.dateLabel}</p>
                <p className="max-w-full text-body text-stone">{content.homeShell.locationLabel}</p>
              </div>
              <p
                className={
                  isThai ? "max-w-full text-body leading-relaxed text-stone [text-wrap:pretty]" : "max-w-full text-body leading-relaxed text-stone [text-wrap:pretty]"
                }
              >
                {content.homeShell.intro}
              </p>
              <div className="flex w-full max-w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={content.homeShell.primaryCtaHref} className="w-full shrink-0 sm:w-auto">
                  {content.homeShell.primaryCtaLabel}
                </Button>
                <Button href={content.homeShell.secondaryCtaHref} variant="secondary" className="w-full shrink-0 sm:w-auto">
                  {content.homeShell.secondaryCtaLabel}
                </Button>
              </div>
            </div>
            <div className="order-2 min-w-0 w-full max-w-full lg:order-none">
              <PlaceholderImage
                rounded="2xl"
                watermarkOpacityClass="text-charcoal/6"
                className="shadow-[0_16px_36px_-18px_rgba(45,38,32,0.45)]"
                alt={content.homeShell.heroImageAlt}
                caption={content.homeShell.heroImageCaption}
                category={content.homeShell.heroImageCategory}
                aspectRatio="4/5"
              />
            </div>
          </FadeIn>
        </Container>
      </Section>
      <div className="px-4 sm:px-5 md:px-8">
        <div className="mx-auto h-px max-w-6xl bg-charcoal/10" />
      </div>
      <DecorativeDivider />

      <Section background="transparent" className="pt-0">
        <Container>
          <div className="min-w-0 space-y-8">
            <Heading
              as="h2"
              eyebrow={content.homeShell.quickLinksLabel}
              headingClassName={isThai ? "font-thai text-h2 leading-[1.35]" : "font-display text-h2"}
            >
              {content.homeShell.glanceTitle}
            </Heading>
            <DecorativeDivider />
            <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
              {content.homeShell.glanceCards.map((card) => (
                <article
                  key={card.label}
                  className="min-w-0 max-w-full rounded-2xl border border-charcoal/10 bg-gradient-to-br from-ivory to-champagne/35 p-5 md:p-6"
                >
                  <p className="text-body-s uppercase tracking-[0.06em] text-stone sm:tracking-[0.08em]">{card.label}</p>
                  <p className={isThai ? "mt-2 max-w-full text-body leading-relaxed text-charcoal" : "mt-2 max-w-full text-body leading-relaxed text-charcoal"}>
                    {card.value}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <DecorativeDivider />

      <Section background="transparent" className="pt-0">
        <Container size="narrow">
          <div className="min-w-0 max-w-full space-y-4 rounded-2xl border border-charcoal/10 bg-ivory/65 p-5 shadow-[0_8px_28px_-18px_rgba(45,38,32,0.08)] sm:p-6 md:p-8">
            <Heading
              as="h3"
              headingClassName={isThai ? "font-thai text-h3 leading-[1.35]" : "font-display text-h3"}
            >
              {content.homeShell.welcomeTitle}
            </Heading>
            <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
              {content.homeShell.welcomeMessage}
            </p>
            <Button href={content.linePageHref} variant="tertiary" className="max-w-full text-left">
              {content.homeShell.supportLineLabel}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
