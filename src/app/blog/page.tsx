import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, updates, and ideas from LoveJoy Health on connected behavioral healthcare.",
};

const posts = [
  {
    slug: "care-that-stays-with-you",
    title: "Care that stays with you — why continuity matters",
    excerpt:
      "Missed appointments and life between visits can break momentum. Here’s how continuous support changes outcomes for people and care teams.",
    date: "2026-07-22",
    dateLabel: "Jul 22, 2026",
    category: "Care Journey",
    placeholder: true,
  },
  {
    slug: "navigators-close-the-gap",
    title: "How care navigators close the gap between visits",
    excerpt:
      "From follow-ups to social needs, navigators keep people moving forward. A look at the workspace designed around that work.",
    date: "2026-06-10",
    dateLabel: "Jun 10, 2026",
    category: "Care Navigators",
    placeholder: true,
  },
  {
    slug: "connected-care-for-organizations",
    title: "What connected care looks like for organizations",
    excerpt:
      "Population health, reporting, and navigation on one platform — so programs can measure what matters and support people longer.",
    date: "2026-05-01",
    dateLabel: "May 1, 2026",
    category: "Organizations",
    placeholder: true,
  },
] as const;

export default function BlogPage() {
  return (
    <section className="bg-white px-3 pb-16 pt-6 md:px-4 md:pb-24 md:pt-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
          Resources
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-navy-deep md:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Updates and ideas on connected behavioral healthcare — for people,
          providers, navigators, and organizations. Full articles coming soon.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-[1.75rem] bg-[#F7F9FC] p-6 shadow-[0_10px_32px_rgba(2,24,72,0.06)] ring-1 ring-black/[0.04]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-navy-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy">
                  {post.category}
                </span>
                {post.placeholder ? (
                  <span className="rounded-full bg-gold-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy-deep">
                    Preview
                  </span>
                ) : null}
              </div>
              <h2 className="mt-4 font-display text-xl leading-snug tracking-tight text-navy-deep md:text-2xl">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/70 pt-4">
                <time
                  dateTime={post.date}
                  className="text-xs font-medium text-navy/70"
                >
                  {post.dateLabel}
                </time>
                <span className="text-xs font-semibold text-navy/50">
                  Coming soon
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-xl text-sm leading-relaxed text-muted">
          Want to stay in the loop?{" "}
          <Link
            href="/about/contact"
            className="font-semibold text-[#2563EB] transition hover:text-navy"
          >
            Talk to our team →
          </Link>
        </p>
      </div>
    </section>
  );
}
