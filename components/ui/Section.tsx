"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import BotanicalBackdrop from "@/components/ui/BotanicalBackdrop";
import { publicAssetPath } from "@/lib/publicAssetPath";
import { cn } from "@/lib/utils";

type SectionBackground = "cream" | "ivory" | "transparent";
type BotanicalVariant = "upperRight" | "upperLeft" | "lowerRight" | "lowerLeft" | "balanced" | "gallery";

type SectionProps = {
  className?: string;
  children: ReactNode;
  background?: SectionBackground;
  id?: string;
  /** Subtle flower artwork variants for inner invitation pages */
  botanical?: boolean | BotanicalVariant;
};

const backgroundClasses: Record<SectionBackground, string> = {
  cream: "bg-cream",
  ivory: "bg-ivory",
  transparent: "bg-transparent",
};

const botanicalImageClasses: Record<BotanicalVariant, string> = {
  upperRight: "object-cover object-[82%_top] opacity-[0.24] sm:opacity-[0.28] md:opacity-[0.32]",
  upperLeft: "object-cover object-[18%_top] opacity-[0.22] sm:opacity-[0.26] md:opacity-[0.3]",
  lowerRight: "object-cover object-[84%_bottom] opacity-[0.22] sm:opacity-[0.26] md:opacity-[0.3]",
  lowerLeft: "object-cover object-[16%_bottom] opacity-[0.22] sm:opacity-[0.26] md:opacity-[0.3]",
  balanced: "object-cover object-[72%_center] opacity-[0.22] sm:opacity-[0.26] md:opacity-[0.3]",
  gallery: "object-cover object-[56%_42%] opacity-[0.14] sm:opacity-[0.17] md:opacity-[0.2]",
};

const botanicalImageSources: Record<BotanicalVariant, string> = {
  upperRight: publicAssetPath("/images/wedding-flower-background-schedule.png"),
  upperLeft: publicAssetPath("/images/wedding-flower-background-faq.png"),
  lowerRight: publicAssetPath("/images/wedding-flower-background-line.png"),
  lowerLeft: publicAssetPath("/images/wedding-flower-background-venue.png"),
  balanced: publicAssetPath("/images/wedding-flower-background-gallery.png"),
  gallery: publicAssetPath("/images/minimal-flower-wedding-background.png"),
};

export default function Section({
  className,
  children,
  background = "transparent",
  id,
  botanical,
}: SectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const botanicalVariant: BotanicalVariant = botanical === true || !botanical ? "upperRight" : botanical;

  const sectionClass = cn(
    "min-w-0 py-16 md:py-24",
    botanical && "group relative overflow-hidden",
    backgroundClasses[background],
    className,
  );

  const inner = botanical ? (
    <>
      <BotanicalBackdrop
        imageSrc={botanicalImageSources[botanicalVariant]}
        imageClassName={botanicalImageClasses[botanicalVariant]}
      />
      <div className="relative z-10">{children}</div>
    </>
  ) : (
    children
  );

  if (shouldReduceMotion) {
    return (
      <section id={id} className={sectionClass}>
        {inner}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={sectionClass}
      initial={{ opacity: 0.88 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      {inner}
    </motion.section>
  );
}
