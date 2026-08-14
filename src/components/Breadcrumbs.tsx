"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { breadcrumbJsonLd } from "@/lib/seo";
import { getBreadcrumbs, hasInHeroBreadcrumbs } from "@/lib/site";

type BreadcrumbsProps = {
  /** `onNavy` for light text on navy heroes; `default` for white page chrome. */
  variant?: "default" | "onNavy";
  /** Skip outer padding / max-width when parent hero already provides them. */
  embedded?: boolean;
  className?: string;
};

export function Breadcrumbs({
  variant = "default",
  embedded = false,
  className = "",
}: BreadcrumbsProps) {
  const pathname = usePathname();
  const crumbs = getBreadcrumbs(pathname);

  if (!crumbs?.length) return null;

  const onNavy = variant === "onNavy";
  const navClass = [
    embedded ? "" : "px-3 pt-4 md:px-4 md:pt-5",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const listClass = embedded
    ? `flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${
        onNavy ? "text-white/70" : "text-navy/70"
      }`
    : `mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 text-sm ${
        onNavy ? "text-white/70" : "text-navy/70"
      }`;
  const separatorClass = onNavy
    ? "select-none text-white/40"
    : "select-none text-navy/35";
  const currentClass = onNavy
    ? "font-medium text-white"
    : "font-medium text-navy";
  const linkClass = onNavy
    ? "transition hover:text-white hover:underline hover:underline-offset-4"
    : "transition hover:text-navy hover:underline hover:underline-offset-4";

  return (
    <nav aria-label="Breadcrumb" className={navClass || undefined}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(crumbs, pathname)),
        }}
      />
      <ol className={listClass}>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li
              key={`${crumb.label}-${index}`}
              className="inline-flex items-center gap-x-2"
            >
              {index > 0 ? (
                <span aria-hidden className={separatorClass}>
                  /
                </span>
              ) : null}
              {crumb.current || !crumb.href || isLast ? (
                <span aria-current="page" className={currentClass}>
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className={linkClass}>
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

/** Layout chrome: hide when the page renders breadcrumbs inside its navy hero. */
export function LayoutBreadcrumbs() {
  const pathname = usePathname();
  if (hasInHeroBreadcrumbs(pathname)) return null;
  return <Breadcrumbs />;
}
