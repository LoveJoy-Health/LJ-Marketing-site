import type { FAQItem } from "@/lib/faqs";
import { isExternalHref } from "@/lib/site";
import Link from "next/link";

function FAQLinkList({ item }: { item: FAQItem }) {
  if (!item.links?.length) return null;

  return (
    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
      {item.links.map((link) => {
        const className =
          "text-sm font-semibold text-navy underline-offset-2 hover:underline";
        if (isExternalHref(link.href) || link.external) {
          return (
            <li key={`${item.id}-${link.href}`}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {link.label}
              </a>
            </li>
          );
        }

        return (
          <li key={`${item.id}-${link.href}`}>
            <Link href={link.href} className={className}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function FAQAccordion({
  items,
  heading,
}: {
  items: FAQItem[];
  heading?: string;
}) {
  if (!items.length) return null;

  return (
    <div>
      {heading ? (
        <h3 className="font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
          {heading}
        </h3>
      ) : null}
      <div className={heading ? "mt-5 divide-y divide-border rounded-2xl border border-border bg-white" : "divide-y divide-border rounded-2xl border border-border bg-white"}>
        {items.map((item) => (
          <details key={item.id} className="group px-5 py-4 md:px-6">
            <summary className="cursor-pointer list-none text-base font-semibold text-navy-deep marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span
                  aria-hidden
                  className="mt-0.5 text-lg leading-none text-navy transition group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              {item.answer}
            </p>
            <FAQLinkList item={item} />
          </details>
        ))}
      </div>
    </div>
  );
}
