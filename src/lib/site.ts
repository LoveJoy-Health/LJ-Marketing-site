export const siteConfig = {
  name: "LoveJoy Health",
  shortName: "LoveJoy",
  description:
    "LoveJoy Health is a digital front door for mental health—connecting people to providers, supportive communities, and tools for continuous care and better outcomes.",
  url: "https://lovejoy.health",
  address: "24 Greenway Plz, Houston, TX 77046",
  contactEmail: "business@lovejoy.health",
  social: {
    facebook: "https://www.facebook.com/lovejoyhealthinc/",
    instagram: "https://www.instagram.com/lovejoy.health/",
    linkedin: "https://www.linkedin.com/company/lovejoy-health",
  },
  /** Patient portal — find providers, sign in, explore care */
  patientPortalUrl: "https://patients.lovejoy.health/",
  findProviderUrl: "https://patients.lovejoy.health/",
  /** Patient app store links from https://lovejoy.health/app-download/ */
  appStore: {
    ios: "https://apps.apple.com/us/app/lovejoy-patient/id6535655626",
    android:
      "https://play.google.com/store/apps/details?id=health.lovejoy.patient",
  },
  /** Provider portal — onboarding, sign in, practice tools */
  providerPortalUrl: "https://providers.lovejoy.health/",
  providerSignInUrl: "https://providers.lovejoy.health/login",
  providerJoinUrl: "https://providers.lovejoy.health/signup",
  /** Provider app store links from LJ-Provider-Web-Portal */
  providerAppStore: {
    ios: "https://apps.apple.com/us/app/lovejoy-providers-app/id6615077861",
    android:
      "https://play.google.com/store/apps/details?id=health.lovejoy.provider",
  },
  /** Organization portal — population health, programs, reporting */
  organizationPortalUrl: "https://organizations.lovejoy.health/",
} as const;

export type NavLink = {
  href: string;
  label: string;
};

/** Dropdown nav item. Optional `href` is the overview/landing page for the parent label. */
export type NavDropdownItem = {
  label: string;
  href?: string;
  children: readonly NavLink[];
};

export type NavItem = NavLink | NavDropdownItem;

export const primaryNav: readonly NavItem[] = [
  {
    label: "Individuals",
    href: "/for-individuals",
    children: [
      { href: "/for-individuals", label: "For Individuals" },
      { href: "/osiris", label: "Osiris" },
      { href: "/the-porch", label: "The Porch" },
      { href: "/download/patient", label: "Download patient app" },
      { href: siteConfig.findProviderUrl, label: "Find a Provider" },
    ],
  },
  {
    label: "Providers",
    href: "/for-providers",
    children: [
      { href: "/for-providers", label: "For Providers" },
      { href: "/for-providers/requirements", label: "Requirements" },
      { href: "/for-providers/platform", label: "Platform" },
      { href: "/for-providers/participation", label: "Participation" },
      { href: "/for-providers/onboarding", label: "Onboarding" },
      { href: "/download/provider", label: "Download provider app" },
    ],
  },
  {
    label: "Organizations",
    href: "/for-organizations",
    children: [
      { href: "/for-organizations", label: "For Organizations" },
      { href: "/for-organizations/platform", label: "Platform" },
      { href: "/for-organizations/navigation", label: "Care Navigation" },
      { href: "/for-organizations/insights", label: "Insights & Reporting" },
      { href: "/for-organizations/implementation", label: "Implementation" },
      { href: "/for-organizations/access", label: "CMS ACCESS" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/about/team", label: "Team" },
      { href: "/about/contact", label: "Contact" },
    ],
  },
  {
    label: "Resources",
    // No dedicated landing page — chevron-only parent; children remain the entry points.
    children: [
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#platform", label: "Platform" },
      { href: "/download", label: "Download the apps" },
    ],
  },
] as const;

export const footerNav: readonly NavLink[] = [
  { href: "/for-individuals", label: "Individuals" },
  { href: "/for-providers", label: "Providers" },
  { href: "/for-organizations", label: "Organizations" },
  { href: "/about", label: "About" },
  { href: "/about/team", label: "Team" },
  { href: "/about/contact", label: "Contact" },
] as const;

export const resourcesNav: readonly NavLink[] = [
  { href: "/download", label: "Download the apps" },
  { href: "/the-porch", label: "The Porch" },
  { href: "/osiris", label: "Osiris" },
  { href: "/about/contact", label: "Contact" },
] as const;

/** Interior provider marketing pages — footer “For providers” group. */
export const providerNav: readonly NavLink[] = [
  { href: "/for-providers", label: "For Providers" },
  { href: "/for-providers/requirements", label: "Requirements" },
  { href: "/for-providers/platform", label: "Platform" },
  { href: "/for-providers/participation", label: "Participation" },
  { href: "/for-providers/onboarding", label: "Onboarding" },
] as const;

/** Interior organization marketing pages — footer “For organizations” group. */
export const organizationNav: readonly NavLink[] = [
  { href: "/for-organizations", label: "For Organizations" },
  { href: "/for-organizations/platform", label: "Platform" },
  { href: "/for-organizations/navigation", label: "Care Navigation" },
  { href: "/for-organizations/insights", label: "Insights & Reporting" },
  { href: "/for-organizations/implementation", label: "Implementation" },
  { href: "/for-organizations/access", label: "CMS ACCESS" },
] as const;

/** Legal pages — slugs aligned with live lovejoy.health where available. */
export const legalNav: readonly NavLink[] = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/security-compliance", label: "Security & Compliance" },
] as const;

export const supportTypes = [
  "Therapy",
  "Medication Support",
  "Coaching",
  "Peer Support",
  "Holistic Support",
] as const;

export function isNavLink(item: NavItem): item is NavLink {
  return !("children" in item);
}

export function isNavDropdown(item: NavItem): item is NavDropdownItem {
  return "children" in item;
}

export function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

/** Path → breadcrumb label for marketing pages (flat: Home / Page). */
export const breadcrumbLabels: Record<string, string> = {
  "/": "Home",
  "/for-individuals": "Individuals",
  "/for-providers": "Providers",
  "/for-providers/requirements": "Requirements",
  "/for-providers/platform": "Platform",
  "/for-providers/participation": "Participation",
  "/for-providers/onboarding": "Onboarding",
  "/for-organizations": "Organizations",
  "/for-organizations/platform": "Platform",
  "/for-organizations/navigation": "Care Navigation",
  "/for-organizations/insights": "Insights & Reporting",
  "/for-organizations/implementation": "Implementation",
  "/for-organizations/access": "CMS ACCESS",
  "/about": "About",
  "/about/team": "Team",
  "/about/contact": "Contact",
  "/download": "Download",
  "/download/patient": "Patient App",
  "/download/provider": "Provider App",
  "/the-porch": "The Porch",
  "/osiris": "Osiris",
  "/terms": "Terms & Conditions",
  "/privacy-policy": "Privacy Policy",
  "/cookie-policy": "Cookie Policy",
  "/security-compliance": "Security & Compliance",
  // Redirect aliases (canonical destinations are preferred after Next redirects)
  "/privacy": "Privacy Policy",
  "/security": "Security & Compliance",
  "/app-download": "Download",
};

export type BreadcrumbCrumb = {
  href?: string;
  label: string;
  current?: boolean;
};

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

function humanizeSegment(segment: string): string {
  return segment
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/**
 * Builds breadcrumb crumbs from the App Router pathname.
 * Returns `null` for the homepage (no breadcrumbs) or empty paths.
 * Single-segment mapped routes: Home / Page.
 * Nested routes: Home / Segment / … (using breadcrumbLabels when available).
 */
export function getBreadcrumbs(pathname: string): BreadcrumbCrumb[] | null {
  const path = normalizePathname(pathname);
  if (path === "/") return null;

  const segments = path.split("/").filter(Boolean);

  // Flat marketing pages: Home / Label
  if (segments.length === 1) {
    const mapped = breadcrumbLabels[path];
    if (mapped) {
      return [
        { href: "/", label: breadcrumbLabels["/"] },
        { label: mapped, current: true },
      ];
    }
  }

  // Nested (and unknown) routes: Home → each segment
  const crumbs: BreadcrumbCrumb[] = [
    { href: "/", label: breadcrumbLabels["/"] },
  ];

  let href = "";
  segments.forEach((segment, index) => {
    href += `/${segment}`;
    const isLast = index === segments.length - 1;
    const label = breadcrumbLabels[href] ?? humanizeSegment(segment);
    crumbs.push(isLast ? { label, current: true } : { href, label });
  });

  return crumbs;
}
