import { useId, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const HEART =
  "M50 88C22 68 6 50 6 31C6 16 17 6 30 6C39 6 46 11 50 19C54 11 61 6 70 6C83 6 94 16 94 31C94 50 78 68 50 88Z";

/** Olive heart with a ruffled lace edge and a brass pin — the collage save-the-date tag. */
export default function LaceHeart({ children, className }: { children: ReactNode; className?: string }) {
  const clipId = useId();

  return (
    <div className={cn("relative aspect-[100/94]", className)}>
      <svg
        aria-hidden
        viewBox="-6 -8 112 106"
        className="absolute inset-0 h-full w-full overflow-visible drop-shadow-[0_14px_14px_rgba(0,0,0,0.35)]"
      >
        <defs>
          <clipPath id={clipId}>
            <path d={HEART} />
          </clipPath>
        </defs>
        <path d={HEART} fill="none" className="stroke-paper" strokeWidth="13" strokeLinecap="round" strokeDasharray="0.01 4.6" />
        <path d={HEART} fill="none" className="stroke-paper" strokeWidth="8" strokeLinejoin="round" />
        <path d={HEART} fill="none" stroke="rgba(31,29,24,0.12)" strokeWidth="6" strokeDasharray="0.6 1.6" />
        <path d={HEART} className="fill-envelope" />
        <path
          d={HEART}
          fill="none"
          className="stroke-paper"
          strokeOpacity="0.55"
          strokeWidth="0.7"
          strokeDasharray="1.6 1.4"
          transform="translate(50 47) scale(0.86) translate(-50 -47)"
        />
        <g clipPath={`url(#${clipId})`}>
          <ellipse cx="34" cy="22" rx="26" ry="14" fill="rgba(255,255,255,0.06)" />
        </g>
        <g transform="translate(46 -6) rotate(18)">
          <rect x="-1.4" y="0" width="2.8" height="22" rx="1.4" fill="#b8a888" />
          <circle cx="0" cy="0" r="4.2" fill="none" stroke="#b8a888" strokeWidth="1.6" />
          <circle cx="0" cy="22" r="1.8" fill="#8b7a68" />
        </g>
      </svg>
      <div className="absolute inset-x-[16%] top-[18%] bottom-[26%] flex flex-col items-center justify-center text-center text-paper">
        {children}
      </div>
    </div>
  );
}
