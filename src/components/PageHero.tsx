import { Breadcrumbs } from "@/components/Breadcrumbs";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="relative -mt-[4.5rem] bg-white pb-2 text-white md:-mt-[4.75rem]">
      <div className="hero-shell hero-shell-flush-top bg-navy-atmosphere relative overflow-hidden py-14 pt-[5.75rem] md:py-16 md:pt-28">
        <div
          aria-hidden
          className="bg-starfield pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="relative mx-auto max-w-7xl px-3 md:px-4">
          <Breadcrumbs variant="onNavy" embedded className="mb-6 md:mb-8" />
          {eyebrow ? (
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`animate-fade-up delay-100 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-white md:text-6xl ${
              eyebrow ? "mt-3" : ""
            }`}
          >
            {title}
          </h1>
          <p className="animate-fade-up delay-200 mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
