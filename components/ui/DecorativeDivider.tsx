import { cn } from "@/lib/utils";

type DecorativeDividerProps = {
  className?: string;
};

export default function DecorativeDivider({ className }: DecorativeDividerProps) {
  return <div className={cn("mx-auto h-px w-16 bg-gold/60", className)} aria-hidden />;
}
