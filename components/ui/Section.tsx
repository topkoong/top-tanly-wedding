"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type SectionBackground = "cream" | "ivory" | "transparent";

type SectionProps = {
  className?: string;
  children: ReactNode;
  background?: SectionBackground;
  id?: string;
};

const backgroundClasses: Record<SectionBackground, string> = {
  cream: "bg-cream",
  ivory: "bg-ivory",
  transparent: "bg-transparent",
};

export default function Section({
  className,
  children,
  background = "transparent",
  id,
}: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const sectionClass = cn("min-w-0 py-16 md:py-24", backgroundClasses[background], className);

  if (shouldReduceMotion) {
    return (
      <section id={id} className={sectionClass}>
        {children}
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
      {children}
    </motion.section>
  );
}
