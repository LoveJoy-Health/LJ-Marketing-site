"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBreadcrumbs } from "@/lib/site";

export function Breadcrumbs() {
  const pathname = usePathname();
  const crumbs = getBreadcrumbs(pathname);

  if (!crumbs?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="px-4 pt-4 md:px-6 xl:px-8 md:pt-5">
      <ol className="site-container flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-navy/70">
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
