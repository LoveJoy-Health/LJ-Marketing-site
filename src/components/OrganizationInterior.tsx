import Link from "next/link";
import { siteConfig } from "@/lib/site";

export type OrganizationRelatedLink = {
  href: string;
  label: string;
};

export function OrganizationInteriorHero({
  eyebrow = "For organizations",
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-white px-3 pb-10 pt-6 lg:px-4 md:pb-14 md:pt-10">
      <div className="mx-auto max-w-screen-2xl">
        <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
          {eyebrow}
        </p>
        <h1 className="animate-fade-up delay-100 mt-3 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-navy-deep md:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>
        <p className="animate-fade-up delay-200 mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export function OrganizationInteriorCtas({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const outlined =
    variant === "dark"
      ? "inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
      : "inline-flex items-center gap-2 rounded-full border-2 border-navy px-5 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white";

  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/about/contact"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
      >
        Request a Demo
        <span aria-hidden>→</span>
      </Link>
      <Link href="/about/contact" className={outlined}>
        Talk to Our Team
      </Link>
      <a
        href={siteConfig.organizationPortalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={outlined}
      >
        Organization Portal
      </a>
    </div>
  );
}

export function OrganizationRelatedNav({
  links,
}: {
  links: readonly OrganizationRelatedLink[];
}) {
  if (!links.length) return null;
  return (
    <section className="border-t border-border bg-white px-3 py-10 lg:px-4">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/for-organizations"
          className="text-sm font-semibold text-navy transition hover:text-navy-deep"
        >
          ← Back to Organizations
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-semibold text-navy transition hover:text-navy-deep"
              >
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function OrganizationInteriorCtaBand({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="px-0.5 pb-2 md:px-1">
      <div className="bg-navy-atmosphere relative overflow-hidden rounded-[2rem] px-3 py-14 text-white md:rounded-[2.75rem] lg:px-4 md:py-16">
        <div
          aria-hidden
          className="bg-starfield pointer-events-none absolute inset-0 opacity-35"
        />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-display text-3xl tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            {description}
          </p>
          <div className="mt-8">
            <OrganizationInteriorCtas variant="dark" />
          </div>
          <Link
            href="/for-organizations"
            className="mt-6 inline-flex text-sm font-medium text-white/85 underline decoration-white/40 underline-offset-4 transition hover:text-gold hover:decoration-gold"
          >
            Back to Organizations overview
          </Link>
        </div>
      </div>
    </section>
  );
}
