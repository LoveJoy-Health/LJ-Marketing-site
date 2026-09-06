import Link from "next/link";

type CtaBandProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  title,
  description,
  primaryHref = "/about/contact",
  primaryLabel = "Talk with us",
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="bg-atmosphere px-3 py-20 md:px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="type-section text-navy-deep">
          {title}
        </h2>
        <p className="type-body mx-auto mt-4 max-w-2xl text-muted">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={primaryHref}
            className="type-button rounded-full bg-navy px-6 py-3 text-white transition hover:bg-navy-deep"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="type-button rounded-full border border-border bg-white/70 px-6 py-3 text-navy transition hover:border-navy/30"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
