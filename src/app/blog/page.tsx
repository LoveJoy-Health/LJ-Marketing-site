import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import BlogIndex from "./BlogIndex";
import { PageHero } from "@/components/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Stories, updates, and ideas from LoveJoy Health on connected behavioral healthcare.",
  path: "/blog",
});

function BlogIndexFallback() {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="h-56 animate-pulse rounded-[1.75rem] bg-[#F7F9FC] ring-1 ring-black/[0.04]"
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Blog"
        description="Updates and ideas on connected behavioral healthcare — for people, providers, navigators, and organizations."
      />
      <section className="bg-white px-3 pb-16 pt-8 md:px-4 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <Suspense fallback={<BlogIndexFallback />}>
            <BlogIndex />
          </Suspense>

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
    </>
  );
}
