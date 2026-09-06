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
});

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="LoveJoy Health for investors."
        description="Behavioral health technology and care delivery infrastructure. Organizations use LoveJoy with their own patients and providers, and LoveJoy-affiliated clinicians can add capacity."
      />

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/investors/pitch-deck"
            className="group block max-w-xl rounded-[1.75rem] border border-border bg-white p-8 shadow-[0_16px_48px_rgba(2,24,72,0.08)] transition hover:border-navy/25"
          >
            <p className="type-eyebrow text-navy">
              Pitch deck
            </p>
            <h2 className="mt-3 type-section text-navy-deep">
              13-slide overview
            </h2>
            <p className="mt-3 type-body-sm text-muted">
              The problem, the platform, customers, market, team, and the
              Pre-Seed raise.
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
