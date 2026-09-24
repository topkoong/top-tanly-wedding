import { cn } from "@/lib/utils";

/** Hand-drawn ribbon bow — ink line art for the invitation card. */
export default function BowOrnament({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-10 w-auto text-charcoal/55", className)}
    >
      <path d="M40 16C34 6 20 2 14 8C9 14 16 22 28 20C33 19 37 18 40 16Z" />
      <path d="M40 16C46 6 60 2 66 8C71 14 64 22 52 20C47 19 43 18 40 16Z" />
      <path d="M22 11C27 12 33 14 38 16M58 11C53 12 47 14 42 16" opacity="0.6" />
      <ellipse cx="40" cy="17" rx="3.4" ry="3" />
      <path d="M38 20C35 27 30 34 24 41M42 20C45 27 50 34 57 40" />
      <path d="M24 41l-3-3M24 41l1 -4M57 40l3-3M57 40l-1-4" />
    </svg>
  );
}
