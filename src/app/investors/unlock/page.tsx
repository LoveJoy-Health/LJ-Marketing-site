import type { Metadata } from "next";
import { Suspense } from "react";
import { buildPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { InvestorUnlockForm } from "@/components/InvestorUnlockForm";

export const metadata: Metadata = buildPageMetadata({
  title: "Investor access",
  description: "Enter the password to view LoveJoy Health investor materials.",
  path: "/investors/unlock",
  index: false,
});

export default function InvestorUnlockPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="Password required."
        description="This section is for investors. Enter the password you were given to view the pitch deck."
      />
      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Suspense
            fallback={
              <p className="text-sm text-muted">Loading access form…</p>
            }
          >
            <InvestorUnlockForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
