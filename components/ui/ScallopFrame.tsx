import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ScallopFrameProps = {
  children: ReactNode;
  className?: string;
  /** Distance between scallops in px (postage stamp ≈ 8, lace frame ≈ 16). */
  scallop?: number;
  /** Paper margin around the photo in px. */
  margin?: number;
};

/**
 * Paper mount with a perforated / scalloped edge (postage stamp, lace frame).
 * The edge is a CSS mask on a backing layer so the photo itself stays unmasked;
 * shadows go on the wrapper via `drop-shadow` so they follow the scallops.
 */
export default function ScallopFrame({
  children,
  className,
  scallop = 10,
  margin = 9,
}: ScallopFrameProps) {
  const radius = scallop * 0.34;
  const mask = `radial-gradient(circle at center, transparent ${radius}px, #000 ${radius + 0.6}px) ${-scallop / 2}px ${-scallop / 2}px / ${scallop}px ${scallop}px`;

  return (
    <div className={cn("relative", className)} style={{ padding: margin }}>
      <span
        aria-hidden
        className="absolute inset-0 bg-paper"
        style={{ WebkitMask: mask, mask }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
