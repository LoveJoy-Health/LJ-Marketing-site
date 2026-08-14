import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogContent } from "@/components/BlogContent";
import { JsonLd } from "@/components/JsonLd";
import {
  BLOG_POSTS,
  getAllPostSlugs,
  getCategoryLabel,
  getPostBySlug,
} from "@/lib/blog";
import { articleJsonLd, buildPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found" };
  }

  return buildPageMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug,
  ).slice(0, 2);

  return (
    <article className="bg-white px-3 pb-16 pt-6 md:px-4 md:pb-24 md:pt-8">
      <JsonLd data={articleJsonLd(post)} />
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/blog?category=${post.category}`}
            className="rounded-full bg-navy-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy transition hover:bg-navy/10"
          >
            {getCategoryLabel(post.category)}
          </Link>
        </div>

        <h1 className="mt-4 text-left font-display text-4xl tracking-tight text-navy-deep md:text-5xl">
          {post.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <span className="font-medium text-navy/80">{post.author}</span>
          <span aria-hidden className="text-navy/30">
            ·
          </span>
          <time dateTime={post.date}>{post.dateLabel}</time>
        </div>

        <p className="mt-6 text-left text-lg leading-relaxed text-navy/75 md:text-xl">
          {post.excerpt}
        </p>

        <div className="mt-10 border-t border-border/70 pt-10">
          <BlogContent markdown={post.content} />
        </div>

        {related.length > 0 ? (
          <aside className="mt-14 border-t border-border/70 pt-10">
            <h2 className="font-display text-xl tracking-tight text-navy-deep md:text-2xl">
              More in {getCategoryLabel(post.category)}
            </h2>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="font-semibold text-[#2563EB] transition hover:text-navy"
                  >
                    {item.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}

        <p className="mt-12 text-sm leading-relaxed text-muted">
          <Link
            href="/blog"
            className="font-semibold text-[#2563EB] transition hover:text-navy"
          >
            ← Back to blog
          </Link>
        </p>
      </div>
    </article>
  );
}
