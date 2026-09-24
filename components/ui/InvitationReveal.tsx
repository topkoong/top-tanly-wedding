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

type InvitationRevealItemProps = {
  children: ReactNode;
  className?: string;
  /** Seconds after the envelope finishes opening. */
  delay?: number;
};

/**
 * One piece of the hero collage: fades in and settles once the sealed envelope
 * dissolves. Stagger pieces with `delay` so the flat lay builds top to bottom.
 */
export function InvitationRevealItem({
  children,
  className,
  delay = 0,
}: InvitationRevealItemProps) {
  const revealed = useInvitationRevealed();
  const shouldReduceMotion = useReducedMotion();

  /* Same element tree for reduced motion so server HTML hydrates cleanly. */
  return (
    <motion.div
      className={cn("min-w-0 max-w-full", className)}
      initial={false}
      animate={
        revealed
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 10, scale: 0.97 }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              delay: revealed ? 0.1 + delay : 0,
              duration: 0.55,
              ease: REVEAL_EASE,
            }
      }
    >
      {children}
    </motion.div>
  );
}
