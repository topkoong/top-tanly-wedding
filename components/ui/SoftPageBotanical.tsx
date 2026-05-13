import { cn } from "@/lib/utils";

/** Lighter corner blooms for inner pages — does not expand layout. */
export default function SoftPageBotanical({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute -left-6 top-8 h-28 w-28 text-olive/[0.12] sm:h-36 sm:w-36">
        <svg viewBox="0 0 100 100" className="h-full w-full fill-current">
          <path d="M12 78c10-24 32-40 58-38-6-16-26-22-44-16 4 22-4 38-14 54z" opacity={0.7} />
          <circle cx="72" cy="32" r="10" opacity={0.12} />
        </svg>
      </div>
      <div className="absolute -right-5 top-24 h-28 w-28 text-sage/[0.11] sm:right-0 sm:h-32 sm:w-32">
        <svg viewBox="0 0 100 100" className="h-full w-full fill-current">
          <path d="M88 24c-14 30-48 48-78 44 18-18 48-50 78-44z" opacity={0.65} />
        </svg>
      </div>
    </div>
  );
}
