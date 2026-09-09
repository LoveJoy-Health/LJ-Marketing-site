import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { StoryDeck } from "@/components/StoryDeck";

export const metadata: Metadata = buildPageMetadata({
  title: "Pitch Deck",
  description:
    "LoveJoy Health Pre-Seed pitch — behavioral health technology and care delivery infrastructure, from referral through ongoing care.",
  path: "/investors/pitch-deck",
});

export default function InvestorPitchDeckPage() {
  return (
    <>
      <div className="print-hide">
        <PageHero
          eyebrow="Investors"
          title="Pitch deck."
          description="Use the arrows, dots, or keyboard to move through the deck. Open full screen for presenting, or download the Pre-Seed PDF."
        />
        <div className="bg-atmosphere px-3 pb-2 md:px-4">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="/investors/LoveJoy_Health_Investor_Deck_v6.pdf"
              download="LoveJoy_Health_Investor_Deck_v6.pdf"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-navy-deep"
            >
              Download investor deck PDF
              <span aria-hidden>→</span>
            </a>
            <a
              href="/investors/one-pager"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy-deep"
            >
              One-pager
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      <section className="bg-atmosphere px-3 py-10 md:px-4 md:py-14 print:bg-white print:px-0 print:py-0">
        <StoryDeck />
      </section>

      <div className="print-hide">
        <CtaBand
          title="Start a conversation."
          description="LoveJoy is behavioral health technology and care delivery infrastructure for organizations and the people they serve."
          primaryHref="/about/contact"
          primaryLabel="Contact LoveJoy"
          secondaryHref="/about/contact"
          secondaryLabel="Talk with the team"
        />
      </div>
    </>
  );
}
