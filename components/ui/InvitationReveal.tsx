"use client";

import { createContext, useContext, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

const InvitationRevealContext = createContext(true);

/** Whether the invitation envelope has finished opening (always true when reduced-motion). */
export function useInvitationRevealed() {
  return useContext(InvitationRevealContext);
}

export function InvitationRevealProvider({
  revealed,
  children,
}: {
  revealed: boolean;
  children: ReactNode;
}) {
  return (
    <InvitationRevealContext.Provider value={revealed}>{children}</InvitationRevealContext.Provider>
  );
}

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

type RevealFrom = { x?: number; y?: number; rotate?: number; scale?: number };

type InvitationRevealItemProps = {
  children: ReactNode;
  className?: string;
  /** Seconds after the envelope finishes opening. */
  delay?: number;
  /** Offset the piece starts from before settling (px / deg). */
  from?: RevealFrom;
};

/**
 * One piece of the hero collage: slides, turns and settles into place once
 * the envelope opens. Stagger pieces with `delay` so the flat lay builds up.
 */
export function InvitationRevealItem({
  children,
  className,
  delay = 0,
  from,
}: InvitationRevealItemProps) {
  const revealed = useInvitationRevealed();
  const shouldReduceMotion = useReducedMotion();
  const start = { x: 0, y: 36, rotate: 0, scale: 0.9, ...from };

  /* Same element tree for reduced motion so server HTML hydrates cleanly. */
  return (
    <motion.div
      className={cn("min-w-0 max-w-full", className)}
      initial={false}
      animate={
        revealed
          ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }
          : { opacity: 0, ...start }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              delay: revealed ? 0.05 + delay : 0,
              duration: 0.85,
              ease: REVEAL_EASE,
            }
      }
    >
      {children}
    </motion.div>
  );
}
