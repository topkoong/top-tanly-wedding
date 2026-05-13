import type { Locale } from "@/lib/locale";

export type NavigationItem = {
  href: string;
  label: string;
};

export type QuickActionIconKey = "calendar" | "mapPin" | "images" | "circleHelp";

export type BottomNavIconKey = "home" | "calendar" | "mapPin" | "images" | "circleHelp";

export type SiteContent = {
  locale: Locale;
  htmlLang: "th" | "en";
  siteName: string;
  coupleFriendlyName: string;
  coupleFormalName: string;
  weddingDate: string;
  logoHref: string;
  linePageHref: string;
  navDesktop: NavigationItem[];
  navMobile: NavigationItem[];
  /** Fixed bottom navigation (mobile / small tablet only); 5 items, no LINE. */
  bottomNav: Array<{
    href: string;
    label: string;
    icon: BottomNavIconKey;
  }>;
  languageSwitchLabel: string;
  mobileMenuOpenLabel: string;
  mobileMenuCloseLabel: string;
  homeShell: {
    /** Short label above the date inside the invitation card. */
    invitationCardEyebrow: string;
    formalNames: string;
    dateLabel: string;
    locationLabel: string;
    /** One line under the date inside the invitation card (main day summary). */
    invitationProgrammeSummary: string;
    invitationCtaLabel: string;
    /** Hash link to on-page section, e.g. /#quick-actions */
    invitationCtaHref: string;
    supportLineLabel: string;
    quickActionCards: Array<{
      href: string;
      title: string;
      subtitle: string;
      icon: QuickActionIconKey;
    }>;
    welcomeTitle: string;
    welcomeMessage: string;
  };
  footer: {
    thankYou: string;
    lineLabel: string;
    lineLinkText: string;
    venueLabel: string;
    footerLinks: NavigationItem[];
  };
};

export type CoupleContent = {
  groomFirstName: string;
  groomNickname: string;
  brideFirstName: string;
  brideNickname: string;
  friendlyDisplayName: string;
  formalDisplayName: string;
  weddingDate: string;
};

export type ScheduleItem = {
  id: string;
  number: string;
  thaiName?: string;
  englishName?: string;
  title: string;
  date: string;
  time: string;
  room: string;
  floor?: string;
  navigationNote?: string;
  venue: string;
  venuePageHref: string;
  description: string;
  chips: string[];
};

export type SchedulePageContent = {
  title: string;
  intro: string;
  arrivalNote: string;
  updateNote: string;
  events: ScheduleItem[];
  venueButtonLabel: string;
};

export type VenueContent = {
  title: string;
  summary: string;
  mainVenue: string;
  address?: string;
  /** Section heading; shown only when `transport` has at least one item. */
  gettingHereTitle?: string;
  /** Label above ceremony / reception room cards. */
  eventSpacesTitle?: string;
  eventSpaces: Array<{
    room: string;
    floor?: string;
    eventName: string;
  }>;
  transport?: TransportOption[];
  parking: string[];
  parkingNote: string;
  mapEmbedUrl: string;
  mapButtonUrl: string;
  mapButtonLabel: string;
  helperText: string;
};

export type TransportOption = {
  icon: "train" | "car" | "shuttle";
  label: string;
  detail: string;
  steps?: string[];
  note?: string;
};

export type GalleryItem = {
  id: string;
  src: string | null;
  alt: string;
  caption: string;
  categoryLabel: string;
  width: number;
  height: number;
  tone: "ivory" | "champagne" | "rose";
  category: "engagement" | "pre-wedding" | "wedding-day";
};

export type GalleryPageContent = {
  title: string;
  intro: string;
  note: string;
  categoryTabs: string[];
  items: GalleryItem[];
};

export type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
  relatedHref?: string;
};

export type FaqPageContent = {
  title: string;
  intro: string;
  categories: string[];
  lineCtaLabel: string;
  items: FaqItem[];
};

export type LineContent = {
  title: string;
  intro: string;
  linePageHref: string;
  lineOaUrl: string;
  purpose: string;
  updates: string[];
  notUsedFor: string[];
  urgentHelp: string;
  helperText: string;
  ctaLabel: string;
};
