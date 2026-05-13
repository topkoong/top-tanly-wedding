import { cn } from "@/lib/utils";

/** Lightweight corner botanical hints — SVG only, low opacity, no layout overflow. */
export default function BotanicalBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <svg
        className="absolute -left-4 top-8 h-32 w-32 text-olive/20 sm:left-0 sm:h-40 sm:w-40"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M8 88c12-28 32-44 58-48-8-18-26-30-46-32 4 22 0 48-12 80zM40 24c10 18 10 38 2 56 18-6 32-20 38-38-16 4-32 2-40-18z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="absolute -right-6 bottom-16 h-36 w-36 text-olive/15 sm:right-0 sm:h-44 sm:w-44"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M112 32c-14 26-36 40-64 42 10 16 28 26 48 26-6-24-2-50 16-68zM72 96c-8-20-6-42 4-60-20 4-36 16-44 34 18-2 34 8 40 26z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
