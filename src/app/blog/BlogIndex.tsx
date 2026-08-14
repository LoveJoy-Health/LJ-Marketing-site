"use client";

import Link from "next/link";
import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  getCategoryLabel,
  isValidCategorySlug,
} from "@/lib/blog";

const ALL = "all";

export default function BlogIndex() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const rawCategory = searchParams.get("category");
  const activeSlug = isValidCategorySlug(rawCategory) ? rawCategory! : ALL;

  const filteredPosts = useMemo(() => {
    if (activeSlug === ALL) return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.category === activeSlug);
  }, [activeSlug]);

  const setCategory = useCallback(
    (slug: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (slug === ALL) {
        params.delete("category");
      } else {
        params.set("category", slug);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  return (
    <>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter posts by topic"
      >
        <FilterChip
          label="All"
          pressed={activeSlug === ALL}
          onClick={() => setCategory(ALL)}
        />
        {BLOG_CATEGORIES.map((category) => (
          <FilterChip
            key={category.slug}
            label={category.label}
            pressed={activeSlug === category.slug}
            onClick={() => setCategory(category.slug)}
          />
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p
          className="mt-10 rounded-[1.75rem] bg-[#F7F9FC] px-6 py-10 text-center text-sm leading-relaxed text-muted ring-1 ring-black/[0.04] md:text-base"
          role="status"
        >
          No posts in this topic yet.
        </p>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-[1.75rem] bg-[#F7F9FC] p-6 shadow-[0_10px_32px_rgba(2,24,72,0.06)] ring-1 ring-black/[0.04] transition hover:shadow-[0_14px_36px_rgba(2,24,72,0.1)]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-navy-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy">
                  {getCategoryLabel(post.category)}
                </span>
              </div>
              <h2 className="mt-4 text-left font-display text-xl leading-snug tracking-tight text-navy-deep md:text-2xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition hover:text-navy"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-left text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/70 pt-4">
                <time
                  dateTime={post.date}
                  className="text-xs font-medium text-navy/70"
                >
                  {post.dateLabel}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-[#2563EB] transition hover:text-navy"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

function FilterChip({
  label,
  pressed,
  onClick,
}: {
  label: string;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={
        pressed
          ? "rounded-full bg-navy px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm ring-2 ring-gold transition md:text-sm"
          : "rounded-full bg-navy-soft px-3.5 py-1.5 text-xs font-semibold text-navy transition hover:bg-navy/10 md:text-sm"
      }
    >
      {label}
    </button>
  );
}
