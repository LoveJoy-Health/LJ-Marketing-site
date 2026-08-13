type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="px-0.5 pb-2 pt-2 md:px-1">
      <div className="bg-navy-atmosphere relative overflow-hidden rounded-[2rem] py-14 md:rounded-[2.5rem] md:py-16">
        <div
          aria-hidden
          className="bg-starfield pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="relative mx-auto max-w-screen-2xl px-3 lg:px-4">
          {eyebrow ? (
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="animate-fade-up delay-100 mt-3 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-white md:text-6xl">
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
