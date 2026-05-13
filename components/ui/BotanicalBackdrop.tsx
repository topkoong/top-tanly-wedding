import { cn } from "@/lib/utils";

/** Lightweight corner botanical hints — SVG only, low opacity, no layout overflow. */
export default function BotanicalBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <svg
        className="absolute -left-4 top-6 h-36 w-36 text-olive/28 sm:left-0 sm:h-44 sm:w-44"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M8 88c12-28 32-44 58-48-8-18-26-30-46-32 4 22 0 48-12 80zM40 24c10 18 10 38 2 56 18-6 32-20 38-38-16 4-32 2-40-18z"
          fill="currentColor"
        />
        <ellipse cx="24" cy="100" rx="14" ry="8" fill="currentColor" opacity={0.12} transform="rotate(-15 24 100)" />
      </svg>
      <svg
        className="absolute -right-6 bottom-12 h-40 w-40 text-olive/22 sm:right-0 sm:h-48 sm:w-48"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M112 32c-14 26-36 40-64 42 10 16 28 26 48 26-6-24-2-50 16-68zM72 96c-8-20-6-42 4-60-20 4-36 16-44 34 18-2 34 8 40 26z"
          fill="currentColor"
        />
        <ellipse cx="96" cy="22" rx="12" ry="7" fill="currentColor" opacity={0.1} transform="rotate(12 96 22)" />
      </svg>
    </div>
  );
}
