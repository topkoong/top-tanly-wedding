import { cn } from "@/lib/utils";

/** Thin horizontal botanical rule for inside invitation cards (SVG, no images). */
export default function InvitationBotanicalRule({ className }: { className?: string }) {
  return (
    <svg
      className={cn("mx-auto h-6 w-full max-w-[200px] text-olive/35", className)}
      viewBox="0 0 200 24"
      fill="none"
      aria-hidden
    >
      <path d="M8 12h48M144 12h48" stroke="currentColor" strokeWidth={1} strokeLinecap="round" />
      <path
        d="M60 12c4-6 12-8 18-4M122 12c-4-6-12-8-18-4"
        stroke="currentColor"
        strokeWidth={0.75}
        fill="none"
      />
      <path d="M92 18c8-10 16-12 20-8s4 10-4 6" fill="currentColor" opacity={0.35} />
      <path d="M104 14c6-8 14-10 18-6" stroke="currentColor" strokeWidth={0.6} fill="none" opacity={0.5} />
    </svg>
  );
}
