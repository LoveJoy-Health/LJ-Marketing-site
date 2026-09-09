import type { Metadata } from "next";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

const ONE_PAGER_PDF = "/investors/LoveJoy_Health_Investor_One_Pager_v6.pdf";

export const metadata: Metadata = buildPageMetadata({
  title: "Investor One-Pager",
  description:
    "LoveJoy Health Pre-Seed one-pager — behavioral health technology and care delivery infrastructure.",
  path: "/investors/one-pager",
});

export default function InvestorOnePagerPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="One-pager."
        description="A single-page overview of LoveJoy Health for investor introductions. Read it here or download the PDF."
        actions={
          <a
            href={ONE_PAGER_PDF}
            download="LoveJoy_Health_Investor_One_Pager_v6.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-white"
          >
            Download one-pager PDF
            <span aria-hidden>→</span>
          </a>
        }
      />

      <section className="bg-atmosphere px-3 py-10 md:px-4 md:py-14">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_80px_rgba(2,24,72,0.16)] md:rounded-[2.5rem]">
            <Image
              src="/images/investor-one-pager.png"
              alt="LoveJoy Health investor one-pager"
              width={1632}
              height={2112}
              priority
              className="h-auto w-full"
            />
          </div>
          <p className="mt-5 text-center">
            <a
              href="/investors/pitch-deck"
              className="text-sm font-semibold text-navy hover:text-navy-deep"
            >
              Open the 13-slide pitch deck →
            </a>
          </p>
        </div>
      </section>

      <CtaBand
        title="Start a conversation."
        description="For diligence, data-room materials, or a live walkthrough of the platform."
        primaryHref="/about/contact"
        primaryLabel="Contact LoveJoy"
      />
    </>
  );
}
