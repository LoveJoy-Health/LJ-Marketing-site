import type { Metadata } from "next";
import Link from "next/link";
import { FAQHero } from "@/components/faqs/FAQHero";
import { ProviderOnboardingSection } from "@/components/faqs/ProviderOnboardingSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Provider Onboarding Walkthrough",
  description:
    "A screen-by-screen guide to the LoveJoy Health provider application, including what to have ready and what happens after you submit.",
  path: "/faqs/providers/onboarding",
});

export default function ProviderOnboardingFaqPage() {
  return (
    <>
      <FAQHero
        eyebrow="Providers"
        title="Provider Onboarding"
        description="A screen-by-screen guide to joining LoveJoy Health as a behavioral health provider."
      />
      <section className="bg-atmosphere px-3 py-14 md:px-4 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/faqs/providers"
            className="text-sm font-semibold text-navy transition hover:text-navy-deep"
          >
            ← Provider FAQs
          </Link>
          <div className="mt-8">
            <ProviderOnboardingSection />
          </div>
        </div>
      </section>
    </>
  );
}
