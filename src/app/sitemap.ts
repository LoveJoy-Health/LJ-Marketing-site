import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const PUBLIC_PATHS = [
  "/",
  "/for-individuals",
  "/for-providers",
  "/for-providers/requirements",
  "/for-providers/platform",
  "/for-providers/participation",
  "/for-providers/onboarding",
  "/for-navigators",
  "/for-organizations",
  "/for-organizations/platform",
  "/for-organizations/navigation",
  "/for-organizations/insights",
  "/for-organizations/implementation",
  "/for-organizations/access",
  "/about",
  "/about/team",
  "/about/contact",
  "/download",
  "/download/patient",
  "/download/provider",
  "/blog",
  "/osiris",
  "/the-porch",
  "/resources/crisis",
  "/terms",
  "/privacy-policy",
  "/cookie-policy",
  "/security-compliance",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = PUBLIC_PATHS.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: path === "/" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/blog") ? 0.8 : 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: new URL(`/blog/${slug}`, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
