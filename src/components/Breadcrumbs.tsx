"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { breadcrumbJsonLd } from "@/lib/seo";
import { getBreadcrumbs } from "@/lib/site";

export function Breadcrumbs() {
  const pathname = usePathname();
  const crumbs = getBreadcrumbs(pathname);

  if (!crumbs?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="px-3 pt-4 md:px-4 md:pt-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(crumbs, pathname)),
        }}
      />
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 text-sm text-navy/70">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={`${crumb.label}-${index}`} className="inline-flex items-center gap-x-2">
              {index > 0 ? (
                <span aria-hidden className="select-none text-navy/35">
                  /
                </span>
              ) : null}
              {crumb.current || !crumb.href || isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-navy"
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="transition hover:text-navy hover:underline hover:underline-offset-4"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
