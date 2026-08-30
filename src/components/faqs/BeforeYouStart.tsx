import { BEFORE_YOU_START_ITEMS } from "@/lib/providerOnboardingGuide";

export function BeforeYouStart() {
  return (
    <section
      id="before-you-start"
      className="scroll-mt-28 rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8"
    >
      <h2 className="font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
        Before You Start
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        Gather this information before you open the application. You can continue
        if some documents are not immediately available.
      </p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {BEFORE_YOU_START_ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-navy-deep">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 rounded-2xl bg-navy-soft px-4 py-3 text-sm leading-relaxed text-navy-deep">
        You can continue signup if some documents are not immediately available,
        but your provider account cannot be approved until all required
        documentation has been submitted.
      </p>
    </section>
  );
}
