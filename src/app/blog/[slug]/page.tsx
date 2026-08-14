import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogContent } from "@/components/BlogContent";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
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
    <>
      <JsonLd data={articleJsonLd(post)} />
      <PageHero
        eyebrow={getCategoryLabel(post.category)}
        title={post.title}
        description={post.excerpt}
      />

      <article className="bg-white px-3 pb-16 pt-10 md:px-4 md:pb-24 md:pt-14">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span className="font-medium text-navy/80">{post.author}</span>
            <span aria-hidden className="text-navy/30">
              ·
            </span>
            <time dateTime={post.date}>{post.dateLabel}</time>
          </div>

          <div className="mt-8 border-t border-border/70 pt-10">
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
    </>
  );
}
