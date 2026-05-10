import type { LineContent } from "@/content/schema";

export const lineContentEn: LineContent = {
  title: "LINE OA",
  intro: "A supporting channel for official updates and announcements.",
  linePageHref: "/en/line",
  lineOaUrl: "https://line.me/R/ti/p/[LINE-OA-ID-placeholder]",
  purpose:
    "Our LINE Official Account is used for official updates, reminders, important announcements, and schedule/venue notices.",
  updates: [
    "Pre-wedding reminders",
    "Schedule and venue notices",
    "Important event-day announcements",
  ],
  notUsedFor: [
    "Not for attendance confirmation",
    "No attendance counting",
    "Not a chatbot or AI assistant",
  ],
  urgentHelp:
    "For urgent wedding-day matters, please follow the latest guidance through our LINE Official Account.",
  helperText: "This link is for official updates, reminders, and important announcements.",
  ctaLabel: "Go to LINE Official Account",
};
