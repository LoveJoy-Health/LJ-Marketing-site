import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";

type LegalDocumentProps = {
  title: string;
  description: string;
  eyebrow?: string;
  children: ReactNode;
};

export function LegalDocument({
  title,
  description,
  eyebrow = "Legal",
  children,
}: LegalDocumentProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <article className="legal-document mx-auto max-w-3xl">{children}</article>
      </section>
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-muted marker:text-navy">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
