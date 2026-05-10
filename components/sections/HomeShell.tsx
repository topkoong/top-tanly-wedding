import Link from "next/link";

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
          <FadeIn className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-3 text-stone">
                <span className="h-px w-10 bg-charcoal/25" />
                <p className="text-body-s uppercase tracking-[0.15em]">{content.siteName}</p>
              </div>
              <p className="text-[12px] uppercase tracking-[0.2em] text-stone">{content.homeShell.title}</p>
              <Heading
                as="h1"
                headingClassName={
                  isThai
                    ? "font-display text-display-xl leading-[1]"
                    : "font-display text-display-xl leading-[1]"
                }
              >
                {content.homeShell.formalNames}
              </Heading>
              <DecorativeDivider className="mx-0" />
              <div className="flex flex-wrap items-center gap-2 text-body-s text-stone">
                <p>{content.homeShell.dateLabel}</p>
                <span aria-hidden>•</span>
                <p>{content.homeShell.locationLabel}</p>
              </div>
              <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
                {content.homeShell.intro}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={content.homeShell.primaryCtaHref}>{content.homeShell.primaryCtaLabel}</Button>
                <Button href={content.homeShell.secondaryCtaHref} variant="secondary">
                  {content.homeShell.secondaryCtaLabel}
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                {content.homeShell.quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-charcoal underline underline-offset-4 decoration-charcoal/30 transition-colors duration-200 hover:text-charcoal hover:decoration-charcoal"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
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
      <div className="mx-auto h-px max-w-6xl bg-charcoal/10" />
      <DecorativeDivider />

      <Section background="transparent" className="pt-0">
        <Container>
          <div className="space-y-8 rounded-2xl border border-charcoal/10 bg-ivory/80 p-6 md:p-8">
            <Heading
              as="h2"
              eyebrow={content.homeShell.quickLinksLabel}
              headingClassName={isThai ? "font-thai text-h2 leading-[1.4]" : "font-display text-h2"}
            >
              {content.homeShell.glanceTitle}
            </Heading>
            <DecorativeDivider />
            <div className="grid gap-4 md:grid-cols-3">
              {content.homeShell.glanceCards.map((card) => (
                <article key={card.label} className="rounded-2xl border border-charcoal/10 bg-cream p-5">
                  <p className="text-body-s uppercase tracking-[0.12em] text-stone">{card.label}</p>
                  <p className={isThai ? "mt-2 text-body text-charcoal leading-[1.7]" : "mt-2 text-body text-charcoal"}>
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
          <div className="space-y-4 rounded-2xl border border-charcoal/10 bg-cream p-6 md:p-8">
            <Heading
              as="h3"
              headingClassName={isThai ? "font-thai text-h3 leading-[1.4]" : "font-display text-h3"}
            >
              {content.homeShell.welcomeTitle}
            </Heading>
            <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
              {content.homeShell.welcomeMessage}
            </p>
            <Button href={content.linePageHref} variant="tertiary">
              {content.homeShell.supportLineLabel}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
