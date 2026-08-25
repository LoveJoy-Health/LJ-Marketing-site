import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = buildPageMetadata({
  title: "Investors",
  description:
    "LoveJoy Health investor materials — seed pitch deck and how to reach the team.",
  path: "/investors",
  index: false,
});

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="LoveJoy Health for investors."
        description="Software-first behavioral health infrastructure. We license the platform to community care organizations and operate a Medicare panel so the workflow is proven in production."
      />

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/investors/pitch-deck"
            className="group block max-w-xl rounded-[1.75rem] border border-border bg-white p-8 shadow-[0_16px_48px_rgba(2,24,72,0.08)] transition hover:border-navy/25"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
              Pitch deck
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-navy-deep">
              13-slide overview
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The problem, the platform, who we start with, and how an
              organization implements in 90 days.
            </p>
            <span className="mt-6 inline-flex text-sm font-semibold text-navy transition group-hover:text-navy-deep">
              Open the pitch deck →
            </span>
          </Link>
        </div>
      </section>

      <CtaBand
        title="Request a conversation."
        description="For diligence, data-room materials, or a live walkthrough of the platform."
        primaryHref="/about/contact"
        primaryLabel="Contact LoveJoy"
      />
    </>
  );
}
