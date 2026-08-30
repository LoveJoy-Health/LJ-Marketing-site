import {
  PROVIDER_SIGN_IN_URL,
  PROVIDER_SIGNUP_URL,
  PROVIDER_SUPPORT_EMAIL,
} from "@/lib/providerOnboardingGuide";

export function ProviderCTA({
  title,
  description,
  support = false,
}: {
  title: string;
  description: string;
  support?: boolean;
}) {
  return (
    <div className="rounded-[1.75rem] bg-navy-atmosphere relative overflow-hidden px-6 py-8 text-white md:px-8 md:py-10">
      <div
        aria-hidden
        className="bg-starfield pointer-events-none absolute inset-0 opacity-35"
      />
      <div className="relative">
        <h2 className="font-display text-2xl tracking-tight md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={PROVIDER_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
          >
            Start Provider Application
          </a>
          <a
            href={PROVIDER_SIGN_IN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
          >
            Provider Sign In
          </a>
        </div>
        {support ? (
          <a
            href={`mailto:${PROVIDER_SUPPORT_EMAIL}`}
            className="mt-5 inline-flex text-sm font-medium text-white/85 underline decoration-white/40 underline-offset-4 transition hover:text-gold hover:decoration-gold"
          >
            Need help with onboarding? Contact LoveJoy Support.
          </a>
        ) : null}
      </div>
    </div>
  );
}
