import { useId, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ScallopFrameProps = {
  children: ReactNode;
  className?: string;
  /** Distance between perforations in px (postage stamp ≈ 8, lace frame ≈ 16). */
  scallop?: number;
  /** Paper margin around the photo in px. */
  margin?: number;
};

/**
 * Paper mount with a postage-stamp edge: semicircle bites on the outer
 * silhouette only. The inner paper stays solid (no holes around the photo).
 * Shadows go on the wrapper via `drop-shadow` so they follow the scallops.
 */
export default function ScallopFrame({
  children,
  className,
  scallop = 10,
  margin = 9,
}: ScallopFrameProps) {
  const maskId = `scallop-${useId().replace(/:/g, "")}`;
  const diameter = scallop * 0.72;

  return (
    <div className={cn("relative", className)} style={{ padding: margin }}>
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full text-paper">
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
            <rect width="100%" height="100%" fill="white" />
            <rect
              width="100%"
              height="100%"
              fill="none"
              stroke="black"
              strokeWidth={diameter}
              strokeDasharray={`0 ${scallop}`}
              strokeLinecap="round"
            />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="currentColor" mask={`url(#${maskId})`} />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}
