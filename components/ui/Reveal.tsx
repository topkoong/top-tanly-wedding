"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

const revealTags = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article,
} as const;

const hiddenStates = {
  up: { opacity: 0, y: 36 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  scale: { opacity: 0, scale: 0.9, y: 16 },
} as const;

export type RevealVariant = keyof typeof hiddenStates;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait after the block scrolls into view — use small steps (≈0.08) to stagger siblings. */
  delay?: number;
  variant?: RevealVariant;
  as?: keyof typeof revealTags;
};

/**
 * Slides/fades a block in the first time it scrolls into view. Always renders
 * the motion element so server and client markup match; reduced motion only
 * zeroes the duration (swapping to a plain element would leave the server's
 * inline `opacity: 0` stuck after hydration).
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = revealTags[as];

  return (
    <Component
      className={cn("min-w-0", className)}
      initial={hiddenStates[variant]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay, ease: REVEAL_EASE }
      }
    >
      {children}
    </Component>
  );
}
