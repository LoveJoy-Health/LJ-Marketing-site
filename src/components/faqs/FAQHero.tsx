import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";

export function FAQHero({
  title = "FAQs",
  description = "Answers about LoveJoy Health, including provider onboarding, accounts, connected behavioral healthcare, privacy, and using the LoveJoy platform.",
  eyebrow = "Resources",
  actions,
}: {
  title?: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
}) {
  return (
    <PageHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      actions={actions}
    />
  );
}
