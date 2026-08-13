"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { LoveJoyLogo } from "@/components/LoveJoyLogo";
import { isExternalHref, isNavLink, primaryNav, siteConfig } from "@/lib/site";

type SiteHeaderProps = {
  /** `standalone` (default) is the sticky full-width bar sitewide; `embedded` is for in-hero use if needed. */
  variant?: "embedded" | "standalone";
};

function NavAnchor({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

/** True when pathname is this nav href or a nested route under it. */
function isHrefActive(pathname: string, href: string): boolean {
  if (isExternalHref(href)) return false;
  const pathOnly = href.split("#")[0] || "/";
  if (pathOnly === "/") return false;
  return pathname === pathOnly || pathname.startsWith(`${pathOnly}/`);
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      className={`h-3 w-3 transition ${open ? "rotate-180" : ""}`}
      fill="none"
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavDropdown({
  label,
  href,
  items,
  active,
}: {
  label: string;
  href?: string;
  items: readonly { href: string; label: string }[];
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const highlight = active || open;

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const labelClass = `text-sm font-medium tracking-wide transition-colors ${
    highlight ? "text-gold" : "text-white/85 hover:text-white"
  }`;

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlurCapture={(event) => {
        if (!ref.current?.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <div className={`inline-flex items-center gap-0.5 ${labelClass}`}>
        {href ? (
          <NavAnchor href={href} className={labelClass}>
            {label}
          </NavAnchor>
        ) : (
          <span className={labelClass}>{label}</span>
        )}
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={menuId}
          aria-label={`${label} menu`}
          className={`inline-flex items-center justify-center rounded p-0.5 transition-colors ${
            highlight ? "text-gold" : "text-white/85 hover:text-white"
          }`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setOpen((value) => !value);
          }}
        >
          <ChevronIcon open={open} />
        </button>
      </div>
      {open ? (
        <div
          id={menuId}
          className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3"
        >
          <div className="rounded-2xl border border-white/10 bg-navy-deep/95 p-2 shadow-xl backdrop-blur-md">
            {items.map((child) => (
              <NavAnchor
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                {child.label}
              </NavAnchor>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileNavDropdown({
  label,
  href,
  items,
  onNavigate,
}: {
  label: string;
  href?: string;
  items: readonly { href: string; label: string }[];
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const menuId = useId();

  return (
    <div className="py-1">
      <div className="flex items-center gap-1">
        {href ? (
          <NavAnchor
            href={href}
            onClick={onNavigate}
            className="min-w-0 flex-1 rounded-2xl px-3 py-3 text-2xl font-display text-white transition hover:bg-white/5"
          >
            {label}
          </NavAnchor>
        ) : (
          <span className="min-w-0 flex-1 px-3 py-3 text-2xl font-display text-white">
            {label}
          </span>
        )}
        <button
          type="button"
          aria-expanded={expanded}
          aria-haspopup="true"
          aria-controls={menuId}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${label} menu`}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
          onClick={() => setExpanded((value) => !value)}
        >
          <ChevronIcon open={expanded} />
        </button>
      </div>
      {expanded ? (
        <div id={menuId} className="mt-1 flex flex-col pl-2">
          {items.map((child) => (
            <NavAnchor
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className="rounded-2xl px-3 py-3 text-xl font-display text-white/85 transition hover:bg-white/5 hover:text-white"
            >
              {child.label}
            </NavAnchor>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function HeaderCta({
  label,
  href,
  onNavigate,
}: {
  label: string;
  href: string;
  onNavigate?: () => void;
}) {
  const className =
    "group inline-flex items-center gap-2.5 rounded-full bg-gold py-2 pl-5 pr-2 text-sm font-semibold text-navy-deep transition hover:brightness-105";
  const arrow = (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white transition group-hover:translate-x-0.5">
      <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={className}
      >
        {label}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onNavigate} className={className}>
      {label}
      {arrow}
    </Link>
  );
}

export function SiteHeader({ variant = "standalone" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isStandalone = variant === "standalone";
  /** Homepage: overlay nav on hero (full-width navy flush with hero). */
  const isHome = pathname === "/";
  const isIndividuals =
    pathname === "/for-individuals" ||
    pathname.startsWith("/for-individuals/");
  const ctaLabel = isIndividuals ? "Find a Provider" : "Download Our Apps";
  const ctaHref = isIndividuals ? siteConfig.findProviderUrl : "/download";

  useEffect(() => {
    if (!isStandalone) return;
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isStandalone]);

  const shellClass = isStandalone
    ? isHome
      ? `sticky top-0 z-50 w-full transition-[background-color,backdrop-filter] ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md"
            : "bg-transparent"
        }`
      : `sticky top-0 z-50 w-full bg-navy-atmosphere transition-[background-color,box-shadow,backdrop-filter] ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-[0_8px_30px_rgba(2,24,72,0.25)]"
            : ""
        }`
    : "relative z-30";

  const innerClass = isStandalone
    ? "site-container flex items-center justify-between gap-4 px-3 py-4 md:px-4"
    : "site-container flex items-center justify-between gap-4 px-3 py-5 md:px-4 md:py-6";

  return (
    <header className={shellClass}>
      <div className={innerClass}>
        <Link
          href="/"
          className="relative z-50 flex shrink-0 items-center transition-opacity hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <LoveJoyLogo className="h-10 w-auto md:h-11" />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {primaryNav.map((item) => {
            if (!isNavLink(item)) {
              const active =
                (item.href ? isHrefActive(pathname, item.href) : false) ||
                item.children.some((child) =>
                  isHrefActive(pathname, child.href),
                );
              return (
                <NavDropdown
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  items={item.children}
                  active={active}
                />
              );
            }

            const active = isHrefActive(pathname, item.href);
            return (
              <NavAnchor
                key={item.href + item.label}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-gold" : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </NavAnchor>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <HeaderCta label={ctaLabel} href={ctaHref} />
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur xl:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-navy-deep/95 px-6 pt-24 backdrop-blur-md transition xl:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {primaryNav.map((item) => {
            if (!isNavLink(item)) {
              return (
                <MobileNavDropdown
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  items={item.children}
                  onNavigate={() => setOpen(false)}
                />
              );
            }

            return (
              <NavAnchor
                key={item.href + item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-2xl font-display text-white transition hover:bg-white/5"
              >
                {item.label}
              </NavAnchor>
            );
          })}
          <div className="mt-4">
            <HeaderCta
              label={ctaLabel}
              href={ctaHref}
              onNavigate={() => setOpen(false)}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
