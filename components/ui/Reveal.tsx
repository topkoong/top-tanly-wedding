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

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait after the block scrolls into view — use small steps (≈0.08) to stagger siblings. */
  delay?: number;
  as?: keyof typeof revealTags;
};

/**
 * Soft fade-up the first time a block scrolls into view. Always renders the
 * motion element so server and client markup match; reduced motion only zeroes
 * the duration (swapping to a plain element would leave the server's inline
 * `opacity: 0` stuck after hydration).
 */
export default function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = revealTags[as];

  return (
    <Component
      className={cn("min-w-0", className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay, ease: REVEAL_EASE }
      }
    >
      {children}
    </Component>
  );
}
