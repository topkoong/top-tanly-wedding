"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/** Vertical hairline that draws top → bottom when scrolled into view (timeline spine). */
export default function DrawLine({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden
      className={cn("absolute top-0 bottom-0 left-0 w-px origin-top bg-charcoal/20", className)}
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
