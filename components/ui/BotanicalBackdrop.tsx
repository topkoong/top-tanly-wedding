import Image from "next/image";

import { cn } from "@/lib/utils";

/** Matches quiet-luxury home reference; clipped corners only (asset is a tall frame). */
const FLORAL_QUIET_LUXURY = "/images/home-floral-quiet-luxury.png";
/** 1024×682 sprite sheet — soft watercolor florals (white background; blend on cream). */
const WATERCOLOR_SPRITE = "/images/home-watercolor-florals.png";

/**
 * Home hero botanical stack: watercolor sprite (corners + bottom band), photoreal corner whispers,
 * radial cream veil, SVG line art. Keeps centre clear for Tan & Top.
 */
export default function BotanicalBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden
    >
      {/* Watercolor sprite — bottom band for extra floral mass (quiet blend) */}
      <div className="absolute inset-x-0 -bottom-16 h-[min(42vw,280px)] overflow-hidden md:h-[min(36vw,260px)]">
        <Image
          src={WATERCOLOR_SPRITE}
          alt=""
          fill
          className="object-cover object-[52%_94%] mix-blend-multiply opacity-[0.32] saturate-[1.02] md:opacity-[0.36]"
          sizes="100vw"
        />
      </div>

      {/* Watercolor corners — different sprite regions per corner */}
      <div className="absolute -left-10 -top-2 h-[min(56vw,340px)] w-[min(74vw,340px)] overflow-hidden sm:left-0 sm:h-[min(50vw,380px)] sm:w-[min(60vw,400px)]">
        <Image
          src={WATERCOLOR_SPRITE}
          alt=""
          fill
          className="object-cover object-[14%_26%] mix-blend-multiply opacity-[0.38] saturate-[1.04] brightness-[1.04] md:opacity-[0.44]"
          sizes="(max-width:768px) 74vw, 400px"
        />
      </div>
      <div className="absolute -right-12 top-0 h-[min(54vw,330px)] w-[min(74vw,340px)] overflow-hidden sm:right-0 sm:h-[min(48vw,360px)] sm:w-[min(58vw,390px)]">
        <Image
          src={WATERCOLOR_SPRITE}
          alt=""
          fill
          className="object-cover object-[86%_28%] mix-blend-multiply opacity-[0.36] saturate-[1.04] brightness-[1.04] md:opacity-[0.42]"
          sizes="(max-width:768px) 74vw, 390px"
        />
      </div>
      <div className="absolute -bottom-6 -left-12 h-[min(58vw,360px)] w-[min(76vw,380px)] overflow-hidden sm:bottom-0 sm:left-0">
        <Image
          src={WATERCOLOR_SPRITE}
          alt=""
          fill
          className="object-cover object-[18%_74%] mix-blend-multiply opacity-[0.34] saturate-[1.04] brightness-[1.03] md:opacity-[0.4]"
          sizes="(max-width:768px) 76vw, 420px"
        />
      </div>
      <div className="absolute -bottom-12 -right-12 h-[min(60vw,380px)] w-[min(78vw,400px)] overflow-hidden sm:-bottom-6 sm:right-0">
        <Image
          src={WATERCOLOR_SPRITE}
          alt=""
          fill
          className="object-cover object-[84%_78%] mix-blend-multiply opacity-[0.34] saturate-[1.04] brightness-[1.03] md:opacity-[0.4]"
          sizes="(max-width:768px) 78vw, 440px"
        />
      </div>

      {/* Photoreal lilac whisper — corner crops from authored reference */}
      <div className="absolute -left-8 -top-6 h-[min(46vw,300px)] w-[min(64vw,320px)] overflow-hidden sm:left-0 sm:h-[min(42vw,360px)] sm:w-[min(52vw,400px)]">
        <Image
          src={FLORAL_QUIET_LUXURY}
          alt=""
          fill
          className="object-cover object-[4%_2%] opacity-[0.14] saturate-[0.92] brightness-[1.03] contrast-[0.97] md:opacity-[0.17]"
          sizes="(max-width: 768px) 64vw, 420px"
        />
      </div>
      <div className="absolute -right-8 -top-4 h-[min(46vw,300px)] w-[min(64vw,320px)] overflow-hidden sm:right-0 sm:h-[min(42vw,360px)] sm:w-[min(52vw,400px)]">
        <Image
          src={FLORAL_QUIET_LUXURY}
          alt=""
          fill
          className="object-cover object-[96%_4%] opacity-[0.14] saturate-[0.92] brightness-[1.03] contrast-[0.97] md:opacity-[0.17]"
          sizes="(max-width: 768px) 64vw, 420px"
        />
      </div>
      <div className="absolute -bottom-4 -left-10 h-[min(48vw,320px)] w-[min(66vw,340px)] overflow-hidden sm:bottom-0 sm:left-0 sm:h-[min(44vw,380px)] sm:w-[min(54vw,420px)]">
        <Image
          src={FLORAL_QUIET_LUXURY}
          alt=""
          fill
          className="object-cover object-[8%_100%] opacity-[0.12] saturate-[0.92] brightness-[1.03] contrast-[0.97] md:opacity-[0.15]"
          sizes="(max-width: 768px) 66vw, 440px"
        />
      </div>
      <div className="absolute -bottom-10 -right-10 h-[min(52vw,340px)] w-[min(70vw,360px)] overflow-hidden sm:-bottom-4 sm:right-0 sm:h-[min(46vw,400px)] sm:w-[min(56vw,440px)]">
        <Image
          src={FLORAL_QUIET_LUXURY}
          alt=""
          fill
          className="object-cover object-[92%_98%] opacity-[0.12] saturate-[0.92] brightness-[1.03] contrast-[0.97] md:opacity-[0.15]"
          sizes="(max-width: 768px) 70vw, 460px"
        />
      </div>

      {/* Centre veil keeps hero typography calm */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_min(92%,96%)_at_50%_38%,rgb(248_245_239/0.88)_42%,transparent_72%)]" />

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
