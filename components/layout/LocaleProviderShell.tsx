"use client";

import type { ReactNode } from "react";

import { LocaleProvider } from "@/lib/hooks/useLocale";

export default function LocaleProviderShell({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
