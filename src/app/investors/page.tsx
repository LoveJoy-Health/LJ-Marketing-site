import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

const DECK_PDF = "/investors/LoveJoy_Health_Investor_Deck_v6.pdf";
const ONE_PAGER_PDF = "/investors/LoveJoy_Health_Investor_One_Pager_v6.pdf";

export const metadata: Metadata = buildPageMetadata({
  title: "Investors",
  description:
    "LoveJoy Health investor materials — seed pitch deck, one-pager, and how to reach the team.",
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
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <article className="rounded-[1.75rem] border border-border bg-white p-8 shadow-[0_16px_48px_rgba(2,24,72,0.08)]">
            <p className="type-eyebrow text-navy">Pitch deck</p>
            <h2 className="mt-3 type-section text-navy-deep">
              13-slide overview
            </h2>
            <p className="mt-3 type-body-sm text-muted">
              The problem, the platform, customers, market, team, and the
              Pre-Seed raise.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                href="/investors/pitch-deck"
                className="text-sm font-semibold text-navy transition hover:text-navy-deep"
              >
                Open the pitch deck →
              </Link>
              <a
                href={DECK_PDF}
                download="LoveJoy_Health_Investor_Deck_v6.pdf"
                className="text-sm font-semibold text-navy/70 transition hover:text-navy-deep"
              >
                Download PDF
              </a>
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-border bg-white p-8 shadow-[0_16px_48px_rgba(2,24,72,0.08)]">
            <p className="type-eyebrow text-navy">One-pager</p>
            <h2 className="mt-3 type-section text-navy-deep">
              One-page overview
            </h2>
            <p className="mt-3 type-body-sm text-muted">
              A single-page introduction for outreach and first meetings.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                href="/investors/one-pager"
                className="text-sm font-semibold text-navy transition hover:text-navy-deep"
              >
                Open the one-pager →
              </Link>
              <a
                href={ONE_PAGER_PDF}
                download="LoveJoy_Health_Investor_One_Pager_v6.pdf"
                className="text-sm font-semibold text-navy/70 transition hover:text-navy-deep"
              >
                Download PDF
              </a>
            </div>
          </article>
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
