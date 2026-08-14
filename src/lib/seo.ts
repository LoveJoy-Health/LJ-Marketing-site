import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const siteUrl = siteConfig.url;

/**
 * Default share image until a dedicated 1200×630 OG asset exists.
 * `logo-icon-circle.png` is a real public file; a designed social card is still preferred.
 */
export const defaultOgImage = {
  url: "/images/logo-icon-circle.png",
  alt: `${siteConfig.name} logo`,
} as const;

export const DEFAULT_OG_IMAGE = defaultOgImage;

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  const pathname = path.startsWith("/") ? path : `/${path}`;
  return new URL(pathname, `${siteConfig.url}/`).toString();
}

type OgType = "website" | "article";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: OgType;
  /** Skip the root layout `%s | LoveJoy Health` title template. */
  absoluteTitle?: boolean;
  images?: { url: string; alt?: string }[];
  publishedTime?: string;
  authors?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  absoluteTitle = false,
  images,
  publishedTime,
  authors,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImages = (images ?? [defaultOgImage]).map((image) => ({
    url: image.url,
    alt: image.alt ?? defaultOgImage.alt,
  }));

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: ogImages,
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors?.length ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.map((image) => image.url),
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/images/logo-icon-circle.png"),
    email: siteConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: "24 Greenway Plz",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77046",
      addressCountry: "US",
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function breadcrumbJsonLd(
  crumbs: { href?: string; label: string }[],
  currentPath: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => {
      const isLast = index === crumbs.length - 1;
      const itemPath = crumb.href ?? (isLast ? currentPath : undefined);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        ...(itemPath ? { item: absoluteUrl(itemPath) } : {}),
      };
    }),
  };
}

export function articleJsonLd(post: {
  title: string;
  metaDescription: string;
  date: string;
  author: string;
  slug: string;
}) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo-icon-circle.png"),
      },
    },
    url,
    mainEntityOfPage: url,
    image: absoluteUrl(defaultOgImage.url),
  };
}
