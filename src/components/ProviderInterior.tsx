import Link from "next/link";
import { Smartphone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export type ProviderRelatedLink = {
  href: string;
  label: string;
};

export function ProviderInteriorHero({
  eyebrow = "For providers",
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-white px-3 pb-10 pt-6 md:px-4 md:pb-14 md:pt-10">
      <div className="mx-auto max-w-7xl">
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

export function ProviderInteriorCtas({
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
      <a
        href={siteConfig.providerJoinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
      >
        Join LoveJoy
        <span aria-hidden>→</span>
      </a>
      <a
        href={siteConfig.providerSignInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={outlined}
      >
        Provider Sign In
      </a>
      <Link href="/download/provider" className={outlined}>
        <Smartphone className="h-4 w-4" aria-hidden strokeWidth={1.75} />
        Get the Provider App
      </Link>
      <Link href="/about/contact" className={outlined}>
        Request Demo
      </Link>
    </div>
  );
}

export function ProviderRelatedNav({
  links,
}: {
  links: readonly ProviderRelatedLink[];
}) {
  if (!links.length) return null;
  return (
    <section className="border-t border-border bg-white px-3 py-10 md:px-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/for-providers"
          className="text-sm font-semibold text-navy transition hover:text-navy-deep"
        >
          ← Back to Providers
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

export function ProviderInteriorCtaBand({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="px-1 pb-2 md:px-1.5">
      <div className="bg-navy-atmosphere relative overflow-hidden rounded-[2rem] px-3 py-14 text-white md:rounded-[2.75rem] md:px-4 md:py-16">
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
            <ProviderInteriorCtas variant="dark" />
          </div>
          <Link
            href="/for-providers"
            className="mt-6 inline-flex text-sm font-medium text-white/85 underline decoration-white/40 underline-offset-4 transition hover:text-gold hover:decoration-gold"
          >
            Back to Providers overview
          </Link>
        </div>
      </div>
    </section>
  );
}
