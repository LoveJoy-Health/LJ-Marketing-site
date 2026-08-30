import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FAQCategoryPage } from "@/components/faqs/FAQCategoryPage";
import { JsonLd } from "@/components/JsonLd";
import {
  FAQ_CATEGORIES,
  getFaqCategory,
  getFaqCategoryItems,
  getFaqSchemaItems,
} from "@/lib/faqs";
import { buildPageMetadata, faqPageJsonLd } from "@/lib/seo";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return FAQ_CATEGORIES.map((category) => ({ category: category.id }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = getFaqCategory(categoryId);
  if (!category) return {};

  return buildPageMetadata({
    title: `${category.label} FAQs`,
    description:
      category.intro ??
      "Find answers about LoveJoy Health, including accounts, connected behavioral healthcare, and using the LoveJoy platform.",
    path: `/faqs/${category.id}`,
  });
}

export default async function FaqCategoryRoute({ params }: CategoryPageProps) {
  const { category: categoryId } = await params;
  const category = getFaqCategory(categoryId);
  if (!category) notFound();

  const items = getFaqCategoryItems(category);

  return (
    <>
      <JsonLd data={faqPageJsonLd(getFaqSchemaItems(items))} />
      <FAQCategoryPage category={category} items={items} />
    </>
  );
}
