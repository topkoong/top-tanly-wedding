"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type DecorativeDividerProps = {
  className?: string;
};

/** Hairline that draws outward from the centre when it scrolls into view. */
export default function DecorativeDivider({ className }: DecorativeDividerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "mx-auto h-px w-[min(5.5rem,80%)] bg-gradient-to-r from-transparent via-gold/55 to-transparent",
        className,
      )}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    />
  );
}
