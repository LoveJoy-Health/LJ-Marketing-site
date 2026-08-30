import { ScreenshotPanel } from "@/components/faqs/ScreenshotPanel";
import type { OnboardingGuideStep } from "@/lib/providerOnboardingGuide";
import { isExternalHref } from "@/lib/site";
import Link from "next/link";

export function OnboardingStep({ step }: { step: OnboardingGuideStep }) {
  return (
    <article
      id={step.id}
      className="scroll-mt-28 rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8"
    >
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">
            Step {step.numberLabel}
          </p>
          <h3 className="mt-2 font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            {step.description}
          </p>

          {step.fields?.length ? (
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#7a8ca8]">
                {step.needHeading ?? "Fields"}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {step.fields.map((field) => (
                  <li
                    key={field.label}
                    className="rounded-full border border-border bg-[#f8fbff] px-3 py-1 text-xs font-medium text-navy-deep"
                  >
                    {field.label}
                    {field.optional ? (
                      <span className="ml-1 font-normal text-muted">Optional</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {step.instructions?.length ? (
            <details className="mt-5 rounded-2xl border border-border bg-[#f8fbff] px-4 py-3">
              <summary className="cursor-pointer text-sm font-semibold text-navy-deep">
                {step.needHeading ?? "What to complete"}
              </summary>
              <ul className="mt-3 space-y-2">
                {step.instructions.map((instruction) => (
                  <li
                    key={instruction}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {instruction}
                  </li>
                ))}
              </ul>
            </details>
          ) : null}

          {step.explanations?.length ? (
            <details className="mt-4 rounded-2xl border border-border bg-[#f8fbff] px-4 py-3">
              <summary className="cursor-pointer text-sm font-semibold text-navy-deep">
                What to complete
              </summary>
              <dl className="mt-3 space-y-3">
                {step.explanations.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm font-semibold text-navy-deep">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </details>
          ) : null}

          {step.subsections?.map((subsection) => (
            <div key={subsection.title} className="mt-5">
              <h4 className="text-sm font-semibold text-navy-deep">
                {subsection.title}
              </h4>
              {subsection.body ? (
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {subsection.body}
                </p>
              ) : null}
              {subsection.items?.length ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {subsection.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-navy-deep"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {subsection.instructions?.length ? (
                <ul className="mt-3 space-y-2">
                  {subsection.instructions.map((instruction) => (
                    <li
                      key={instruction}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {instruction}
                    </li>
                  ))}
                </ul>
              ) : null}
              {subsection.notes?.map((note) => (
                <p
                  key={note}
                  className="mt-3 text-sm leading-relaxed text-muted"
                >
                  {note}
                </p>
              ))}
            </div>
          ))}

          {step.notes?.map((note) => (
            <p
              key={note}
              className="mt-4 text-sm leading-relaxed text-muted"
            >
              {note}
            </p>
          ))}

          {step.callout ? (
            <div className="mt-5 rounded-2xl bg-navy-soft px-4 py-3 text-sm leading-relaxed text-navy-deep">
              {step.callout.title ? (
                <p className="font-semibold">{step.callout.title}</p>
              ) : null}
              <p className={step.callout.title ? "mt-1" : undefined}>
                {step.callout.body}
              </p>
            </div>
          ) : null}

          {step.links?.length ? (
            <ul className="mt-4 flex flex-wrap gap-4">
              {step.links.map((link) => {
                const className =
                  "text-sm font-semibold text-navy underline-offset-2 hover:underline";
                if (isExternalHref(link.href) || link.external) {
                  return (
                    <li key={link.href}>
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
                  <li key={link.href}>
                    <Link href={link.href} className={className}>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>

        <ScreenshotPanel images={step.images} />
      </div>
    </article>
  );
}
