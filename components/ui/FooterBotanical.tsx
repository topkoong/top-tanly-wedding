import { cn } from "@/lib/utils";

/** Extremely subtle botanical corners for footer — clipped, safe on narrow viewports */
export default function FooterBotanical({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute -bottom-2 -left-8 h-20 w-20 text-sage/[0.09] sm:-left-4 sm:h-28 sm:w-28">
        <svg viewBox="0 0 100 100" className="h-full w-full" fill="currentColor">
          <path d="M4 94c36-52 112-74 174-74-96 62-208 154-208 228 12-94 46-154 34-154z" opacity={0.5} />
        </svg>
      </div>
      <div className="absolute -bottom-4 -right-6 h-24 w-24 text-olive/[0.07] sm:-right-2 sm:h-32 sm:w-32">
        <svg viewBox="0 0 100 100" className="h-full w-full rotate-180" fill="currentColor">
          <path d="M4 94c36-52 112-74 174-74-96 62-208 154-208 228 12-94 46-154 34-154z" opacity={0.45} />
        </svg>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-sage-soft/15 via-transparent to-transparent" />
    </div>
  );
}
