import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import {
  CheckCircle2,
  ClipboardList,
  ShieldCheck,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import {
  ProviderInteriorCtaBand,
  ProviderInteriorHero,
  ProviderRelatedNav,
} from "@/components/ProviderInterior";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Provider Onboarding",
  description:
    "Learn how joining LoveJoy works — create your account, complete your profile, get reviewed, and start providing care.",
  path: "/for-providers/onboarding",
});

const steps: {
  n: string;
  title: string;
  body: string;
  tips: string[];
  Icon: LucideIcon;
}[] = [
  {
    n: "1",
    title: "Create your account",
    body: "Start at the provider portal signup. You'll set up secure access and begin your LoveJoy provider profile.",
    tips: [
      "Use a professional email you check regularly.",
      "You can continue setup on web; the provider app is available once you're ready.",
    ],
    Icon: UserPlus,
  },
  {
    n: "2",
    title: "Complete your profile",
    body: "Add credentials, specialties, practice details, and how you participate — so patients and our review team understand your care offering.",
    tips: [
      "Upload license documentation when prompted.",
      "Describe modalities, populations served, and availability patterns clearly.",
    ],
    Icon: ClipboardList,
  },
  {
    n: "3",
    title: "Get reviewed",
    body: "Our provider team verifies eligibility and credentials before you go live. If anything is missing, we'll reach out with next steps.",
    tips: [
      "Review typically happens after your profile is complete.",
      "Respond promptly to requests so activation isn't delayed.",
    ],
    Icon: ShieldCheck,
  },
  {
    n: "4",
    title: "Start providing care",
    body: "Once approved, use the portal and provider app for schedule, visits, documentation, and staying connected between sessions.",
    tips: [
      "Confirm notification preferences so you don't miss messages or visits.",
      "Explore today's schedule and patient context before your first sessions.",
    ],
    Icon: CheckCircle2,
  },
];

const afterJoin = [
  {
    title: "Portal for the desk",
    body: "Run documentation, messaging, and day planning from providers.lovejoy.health.",
  },
  {
    title: "App for the go",
    body: "Keep today's schedule and secure visits close when you're away from your desk.",
  },
  {
    title: "Support when you need it",
    body: "Questions about joining or tools? Reach the provider team through Contact anytime.",
  },
];

export default function ProviderOnboardingPage() {
  return (
    <>
      <ProviderInteriorHero
        title="Joining LoveJoy is straightforward."
        description="Four clear steps from account creation to providing care — with review built in so patients and providers can trust the network."
      />

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <ol className="grid gap-6 lg:grid-cols-2">
            {steps.map((step) => (
              <li
                key={step.n}
                className="rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-white">
                    {step.n}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <h2 className="font-display text-2xl text-navy-deep">
                        {step.title}
                      </h2>
                      <span className="hidden h-9 w-9 items-center justify-center rounded-xl bg-navy-soft text-navy sm:inline-flex">
                        <step.Icon
                          className="h-4 w-4"
                          aria-hidden
                          strokeWidth={1.75}
                        />
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                      {step.body}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {step.tips.map((tip) => (
                        <li
                          key={tip}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <a
              href={siteConfig.providerJoinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
            >
              Start your application
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            After you&apos;re approved
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Onboarding doesn&apos;t end at approval — it sets you up to practice
            with the full LoveJoy toolkit.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {afterJoin.map((item) => (
              <div key={item.title} className="border-t border-navy/15 pt-5">
                <h3 className="font-display text-xl text-navy-deep">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProviderRelatedNav
        links={[
          { href: "/for-providers/requirements", label: "Requirements" },
          { href: "/for-providers/participation", label: "Participation" },
        ]}
      />

      <ProviderInteriorCtaBand
        title="Ready to begin onboarding?"
        description="Create your provider account, or contact us if you'd like a walkthrough before you apply."
      />
    </>
  );
}
