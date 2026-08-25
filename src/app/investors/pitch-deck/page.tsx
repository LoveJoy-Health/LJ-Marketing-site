import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { StoryDeck } from "@/components/StoryDeck";

export const metadata: Metadata = buildPageMetadata({
  title: "Pitch Deck",
  description:
    "LoveJoy Health seed pitch — the platform that manages the interval between behavioral health encounters, from referral to ongoing care.",
  path: "/investors/pitch-deck",
  index: false,
});

export default function InvestorPitchDeckPage() {
  return (
    <>
      <div className="print-hide">
        <PageHero
          eyebrow="Investors"
          title="Pitch deck."
          description="Use the arrows, dots, or keyboard to move through the deck. Open full screen for presenting, or download a PDF."
        />
      </div>

      <section className="bg-atmosphere px-3 py-10 md:px-4 md:py-14 print:bg-white print:px-0 print:py-0">
        <StoryDeck />
      </section>

      <div className="print-hide">
        <CtaBand
          title="Start a conversation."
          description="LoveJoy is a software-first behavioral health platform. Medicare care on the same rails is how we prove the workflow."
          primaryHref="/about/contact"
          primaryLabel="Contact LoveJoy"
          secondaryHref="/about/contact"
          secondaryLabel="Talk with the team"
        />
      </div>
    </>
  );
}
