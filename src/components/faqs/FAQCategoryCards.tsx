import Link from "next/link";
import {
  Building2,
  Compass,
  KeyRound,
  Shield,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FAQ_CATEGORIES, getFaqCategoryItems } from "@/lib/faqs";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  individuals: Users,
  providers: Stethoscope,
  "care-navigators": Compass,
  organizations: Building2,
  "account-access": KeyRound,
  "privacy-security": Shield,
};

export function FAQCategoryCards() {
  return (
    <section className="bg-atmosphere px-3 py-14 md:px-4 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="type-section text-navy-deep">
          Browse by topic
        </h2>
        <p className="mt-3 max-w-2xl type-body-sm text-muted">
          Choose a category to see questions and answers.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FAQ_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] ?? Users;
            const count = getFaqCategoryItems(category).length;

            return (
              <li key={category.id}>
                <Link
                  href={`/faqs/${category.id}`}
                  className="flex h-full flex-col rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(2,24,72,0.12)] md:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-soft text-navy">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-5 type-heading text-navy-deep">
                    {category.label}
                  </h3>
                  {category.intro ? (
                    <p className="mt-3 flex-1 type-body-sm text-muted">
                      {category.intro}
                    </p>
                  ) : null}
                  <p className="mt-5 text-sm font-semibold text-navy">
                    {count} {count === 1 ? "question" : "questions"} →
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
