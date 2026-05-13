import { cn } from "@/lib/utils";

/**
 * Corner floral framing for the home hero — SVG only, clipped, no overflow.
 * Intensity scales up slightly from mobile → desktop without widening layout.
 */
export default function BotanicalBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden
    >
      {/* Top-left: layered leaves + rose-like bloom */}
      <div className="absolute -left-8 top-0 h-44 w-44 text-olive/[0.2] sm:left-0 sm:h-56 sm:w-56 md:h-60 md:w-60 md:text-olive/[0.24]">
        <svg viewBox="0 0 140 140" className="h-full w-full" fill="none">
          <ellipse cx="48" cy="108" rx="28" ry="18" fill="currentColor" opacity={0.12} transform="rotate(-25 48 108)" />
          <path
            d="M22 94c14-34 42-54 74-54-14 22-10 54 12 74-38-10-74 4-86-20z"
            fill="currentColor"
            opacity={0.55}
          />
          <ellipse cx="78" cy="46" rx="22" ry="26" fill="currentColor" opacity={0.2} />
          <ellipse cx="94" cy="58" rx="14" ry="16" fill="currentColor" opacity={0.15} transform="rotate(15 94 58)" />
          <path d="M38 72c22-36 62-52 92-42" stroke="currentColor" strokeWidth={0.6} opacity={0.45} />
        </svg>
      </div>

      {/* Top-right: mirror cluster */}
      <div className="absolute -right-10 top-2 h-40 w-40 text-sage/[0.18] sm:right-0 sm:h-52 sm:w-52 md:h-56 md:w-56 md:text-sage/[0.22]">
        <svg viewBox="0 0 140 140" className="h-full w-full" fill="none">
          <path
            d="M118 90c-12-34-42-54-74-54 12 22 8 52-14 74 36-12 74 4 88-20z"
            fill="currentColor"
            opacity={0.5}
          />
          <ellipse cx="62" cy="44" rx="20" ry="24" fill="currentColor" opacity={0.16} />
          <ellipse cx="48" cy="56" rx="12" ry="14" fill="currentColor" opacity={0.12} transform="rotate(-12 48 56)" />
        </svg>
      </div>

      {/* Bottom-left */}
      <div className="absolute -bottom-4 -left-6 h-40 w-40 text-olive/[0.14] sm:bottom-0 sm:h-48 sm:w-48 md:text-olive/[0.17]">
        <svg viewBox="0 0 120 120" className="h-full w-full" fill="none">
          <path
            d="M18 104c28-42 74-62 112-54-36 44-94 74-154 112 18-42 42-74 42-58z"
            fill="currentColor"
            opacity={0.4}
          />
          <ellipse cx="44" cy="88" rx="16" ry="10" fill="currentColor" opacity={0.12} />
        </svg>
      </div>

      {/* Bottom-right */}
      <div className="absolute -bottom-8 -right-8 h-44 w-44 text-sage/[0.14] sm:bottom-2 sm:right-0 sm:h-52 sm:w-52 md:text-sage/[0.18]">
        <svg viewBox="0 0 120 120" className="h-full w-full" fill="none">
          <path
            d="M102 18c28 58-26 138-134 174 42-74 138-174 134-174z"
            fill="currentColor"
            opacity={0.35}
          />
          <ellipse cx="88" cy="96" rx="18" ry="12" fill="currentColor" opacity={0.1} />
        </svg>
      </div>

      {/* Whisper line framing near vertical centre (behind cards) */}
      <div className="absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-olive/10 to-transparent" />
      <div className="absolute inset-x-0 top-3/4 h-px bg-gradient-to-r from-transparent via-sage/10 to-transparent" />
    </div>
  );
}
