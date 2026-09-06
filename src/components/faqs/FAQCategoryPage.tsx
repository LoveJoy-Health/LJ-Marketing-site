import Link from "next/link";
import { FAQAccordion } from "@/components/faqs/FAQAccordion";
import { FAQHero } from "@/components/faqs/FAQHero";
import type { FAQCategory, FAQItem } from "@/lib/faqs";

export function FAQCategoryPage({
  category,
  items,
}: {
  category: FAQCategory;
  items: FAQItem[];
}) {
  return (
    <>
      <FAQHero
        title={category.label}
        description={category.intro ?? ""}
        actions={
          category.id === "providers" ? (
            <div>
              <p className="max-w-xl text-sm leading-relaxed text-white/70">
                See every application screen, what to have ready, and what happens
                after you submit.
              </p>
              <Link
                href="/faqs/providers/onboarding"
                className="mt-4 inline-flex items-center type-button rounded-full bg-gold px-6 py-3 text-navy-deep transition hover:brightness-105"
              >
                Provider signup walkthrough
              </Link>
            </div>
          ) : undefined
        }
      />
      <section className="bg-atmosphere px-3 py-14 md:px-4 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/faqs"
            className="text-sm font-semibold text-navy transition hover:text-navy-deep"
          >
            ← All FAQ topics
          </Link>
          <div className="mt-6 max-w-3xl">
            <FAQAccordion items={items} />
          </div>
        </div>
      </section>
    </>
  );
}
