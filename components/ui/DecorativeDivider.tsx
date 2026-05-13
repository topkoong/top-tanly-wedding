import { cn } from "@/lib/utils";

type DecorativeDividerProps = {
  className?: string;
};

export default function DecorativeDivider({ className }: DecorativeDividerProps) {
  return (
    <div
      className={cn(
        "mx-auto h-px w-[min(5.5rem,80%)] bg-gradient-to-r from-transparent via-gold/55 to-transparent",
        className,
      )}
      aria-hidden
    />
  );
}
