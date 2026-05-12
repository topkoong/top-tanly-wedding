import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerSize = "narrow" | "default" | "wide";

type ContainerProps = {
  className?: string;
  children: ReactNode;
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export default function Container({
  className,
  children,
  size = "default",
}: ContainerProps) {
  return (
    <div className={cn("mx-auto min-w-0 max-w-full px-4 sm:px-5 md:px-8", sizeClasses[size], className)}>
      {children}
    </div>
  );
}
