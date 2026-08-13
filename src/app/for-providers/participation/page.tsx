import type { Metadata } from "next";
import {
  Building2,
  CreditCard,
  Handshake,
  HeartPulse,
  Shield,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import {
  ProviderInteriorCtaBand,
  ProviderInteriorHero,
  ProviderRelatedNav,
} from "@/components/ProviderInterior";

export const metadata: Metadata = {
  title: "Provider Participation",
  description:
    "How participating on LoveJoy works — insurance, self-pay, and organization-based care models, plus what we expect from network providers.",
};

const paymentModes: {
  title: string;
  body: string;
  detail: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Insurance",
    body: "Manage participating payers and eligibility in one place.",
    detail:
      "Support patients who use covered benefits while keeping eligibility and visit context close to your day-to-day workflow.",
    Icon: CreditCard,
  },
  {
    title: "Self-pay",
    body: "Offer services directly with clear pricing for patients.",
    detail:
      "Help people who prefer out-of-pocket care move forward quickly — with transparent offerings and fewer handoffs.",
    Icon: Wallet,
  },
  {
    title: "Organization-based care",
    body: "Provide services through partner organizations and programs.",
    detail:
      "Deliver care as part of employer, community, health system, or plan programs that expand access beyond traditional referral paths.",
    Icon: Building2,
  },
];

const expectations: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Professional standards",
    body: "Maintain active credentials, practice within your scope, and uphold the same clinical and ethical standards you bring to care today.",
    Icon: Shield,
  },
  {
    title: "Responsive connection",
    body: "Use LoveJoy tools to stay present between visits — messaging, check-ins, and follow-through that keep patients engaged.",
    Icon: HeartPulse,
  },
  {
    title: "Clear participation choices",
    body: "Set how you offer care (insurance, self-pay, programs) so patients understand options and your practice stays sustainable.",
    Icon: Handshake,
  },
];

const howItWorks = [
  {
    title: "Patients find support",
    body: "Individuals explore care types on LoveJoy and connect with providers who match their needs and availability.",
  },
  {
    title: "You deliver care",
    body: "Visits, documentation, and messaging happen in the provider portal and app — built for behavioral health workflows.",
  },
  {
    title: "Engagement continues",
    body: "Between sessions, check-ins and activity insights help you stay aware of what patients need next.",
  },
];

export default function ProviderParticipationPage() {
  return (
    <>
      <ProviderInteriorHero
        title="Flexible ways to participate on LoveJoy."
        description="Join a network built to support how you practice — whether you work with insurance, self-pay patients, organization programs, or a combination."
      />

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            Care models that fit your practice
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Participation isn&apos;t one-size-fits-all. Choose the paths that
            match your license, panel, and the communities you serve.
          </p>
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {paymentModes.map((mode) => (
              <li
                key={mode.title}
                className="rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-soft text-navy">
                  <mode.Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-deep">
                  {mode.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-navy">
                  {mode.body}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {mode.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            How participation works day to day
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <li key={step.title} className="border-t border-navy/15 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl text-navy-deep">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            What we expect from network providers
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            LoveJoy is a partnership: we provide the platform and patient
            pathways; you bring clinical excellence and consistent presence.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {expectations.map((item) => (
              <li
                key={item.title}
                className="rounded-[1.5rem] bg-white p-6 ring-1 ring-black/[0.04]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-soft text-navy">
                  <item.Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProviderRelatedNav
        links={[
          { href: "/for-providers/onboarding", label: "Next: Onboarding" },
          { href: "/for-providers/platform", label: "Platform" },
        ]}
      />

      <ProviderInteriorCtaBand
        title="Want to talk through participation options?"
        description="Join LoveJoy to start your application, or request a demo if you'd like to walk through insurance, self-pay, and organization models first."
      />
    </>
  );
}
