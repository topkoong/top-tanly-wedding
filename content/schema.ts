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
  /** Machine-readable wedding date/time (ISO 8601 with offset) for the countdown. */
  weddingDateISO: string;
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
    /** Ceremonial line above couple names (e.g. together with our families). */
    invitationLeadIn: string;
    formalNames: string;
    /** Short sentence before the save-the-date card (e.g. we invite you…). */
    invitationInviteLine: string;
    /** Invitation-style date stack — weekday, day/month, year (printed card reference). */
    invitationDateDisplay: {
      weekday: string;
      dayMonth: string;
      year: string;
    };
    /** Short field label above the date (e.g. Date / วันที่). */
    dateHeading: string;
    locationLabel: string;
    /** Short field label above the venue (e.g. Venue / สถานที่). */
    venueHeading: string;
    /** Recognizable address line under the venue name. */
    locationDetail: string;
    /** Ceremony and reception start times shown under the date. */
    invitationTimeSummary: string;
    /** Link to the venue page from the invitation card. */
    invitationVenueHref: string;
    /** One line under the date inside the invitation card (main day summary). */
    invitationProgrammeSummary: string;
    invitationCtaLabel: string;
    /** Hash link to on-page section, e.g. /#quick-actions */
    invitationCtaHref: string;
    /** Prompt on the sealed envelope before it is opened (e.g. "Tap to open"). */
    invitationOpenLabel: string;
    /** Short heading above the countdown (e.g. "Counting down to our day"). */
    countdownTitle: string;
    /** Localized unit labels for the countdown cells. */
    countdownLabels: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
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

export type ScheduleTimelineEntry = {
  id: string;
  /** Display time (locale-specific formatting, e.g. 07.09 or 07:09). */
  time: string;
  title: string;
};

/** One venue room with its programme times (morning vs reception, etc.). */
export type ScheduleLocationGroup = {
  id: string;
  /** Session label, e.g. morning ceremonies / luncheon reception. */
  sessionLabel: string;
  /** Room name shown large, e.g. Beverly Hills. */
  roomName: string;
  /** Floor and building line, e.g. Floor 2 · Annex Building. */
  floorLabel: string;
  timeline: ScheduleTimelineEntry[];
};

export type SchedulePageContent = {
  title: string;
  intro: string;
  /** Hotel / overall venue name, e.g. Conrad Bangkok. */
  venueHeadline: string;
  locationGroups: ScheduleLocationGroup[];
  arrivalNote: string;
  updateNote: string;
  venueButtonLabel: string;
  venuePageHref: string;
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
    /** Session label, e.g. morning ceremonies. */
    sessionLabel?: string;
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
