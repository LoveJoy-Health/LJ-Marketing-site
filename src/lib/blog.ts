export type BlogCategory = {
  slug: string;
  label: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  category: string;
  placeholder: boolean;
};

/** Fixed topic filters — slug used in `/blog?category=` */
export const BLOG_CATEGORIES: readonly BlogCategory[] = [
  { slug: "care-journeys", label: "Care journeys" },
  { slug: "providers", label: "For providers" },
  { slug: "organizations", label: "For organizations" },
  { slug: "product", label: "Product" },
  { slug: "company", label: "Company" },
  { slug: "mental-health", label: "Mental health" },
] as const;

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "care-that-stays-with-you",
    title: "Care that stays with you — why continuity matters",
    excerpt:
      "Missed appointments and life between visits can break momentum. Here’s how continuous support changes outcomes for people and care teams.",
    date: "2026-07-22",
    dateLabel: "Jul 22, 2026",
    category: "care-journeys",
    placeholder: true,
  },
  {
    slug: "navigators-close-the-gap",
    title: "How care navigators close the gap between visits",
    excerpt:
      "From follow-ups to social needs, navigators keep people moving forward. A look at the workspace designed around that work.",
    date: "2026-06-10",
    dateLabel: "Jun 10, 2026",
    category: "care-journeys",
    placeholder: true,
  },
  {
    slug: "connected-care-for-organizations",
    title: "What connected care looks like for organizations",
    excerpt:
      "Population health, reporting, and navigation on one platform — so programs can measure what matters and support people longer.",
    date: "2026-05-01",
    dateLabel: "May 1, 2026",
    category: "organizations",
    placeholder: true,
  },
  {
    slug: "providers-in-the-loop",
    title: "Keeping providers in the loop without more admin",
    excerpt:
      "Clinical context should travel with the person — not live in another inbox. How LoveJoy surfaces the right signal for care teams.",
    date: "2026-04-18",
    dateLabel: "Apr 18, 2026",
    category: "providers",
    placeholder: true,
  },
  {
    slug: "product-check-in-summer",
    title: "Product check-in: building for the moments between visits",
    excerpt:
      "A look at what we’re shipping next — from journey visibility to quieter tools that help people stay engaged on their terms.",
    date: "2026-04-02",
    dateLabel: "Apr 2, 2026",
    category: "product",
    placeholder: true,
  },
  {
    slug: "why-we-built-lovejoy",
    title: "Why we built LoveJoy",
    excerpt:
      "Behavioral healthcare is fragmented by design. Our founding story — and the people who shaped how we think about connected care.",
    date: "2026-03-12",
    dateLabel: "Mar 12, 2026",
    category: "company",
    placeholder: true,
  },
  {
    slug: "mental-health-beyond-the-appointment",
    title: "Mental health beyond the appointment",
    excerpt:
      "Support doesn’t stop when the session ends. Ideas for sustaining progress in daily life with the right touchpoints.",
    date: "2026-02-20",
    dateLabel: "Feb 20, 2026",
    category: "mental-health",
    placeholder: true,
  },
] as const;

export function getCategoryLabel(slug: string): string {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export function isValidCategorySlug(slug: string | undefined | null): boolean {
  if (!slug) return false;
  return BLOG_CATEGORIES.some((c) => c.slug === slug);
}
