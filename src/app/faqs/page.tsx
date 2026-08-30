import type { Metadata } from "next";
import { FAQPage } from "@/components/faqs/FAQPage";
import { JsonLd } from "@/components/JsonLd";
import { getFaqSchemaItems } from "@/lib/faqs";
import { buildPageMetadata, faqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "LoveJoy Health FAQs | Patients, Providers & Organizations",
  description:
    "Find answers about LoveJoy Health, including provider onboarding, accounts, connected behavioral healthcare, privacy, and using the LoveJoy platform.",
  path: "/faqs",
  absoluteTitle: true,
});

export default function FaqsRoute() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(getFaqSchemaItems())} />
      <FAQPage />
    </>
  );
}
