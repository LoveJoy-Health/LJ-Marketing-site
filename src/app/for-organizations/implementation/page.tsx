import type { Metadata } from "next";
import {
  CheckCircle2,
  LineChart,
  Settings2,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  OrganizationInteriorCtaBand,
  OrganizationInteriorHero,
  OrganizationRelatedNav,
} from "@/components/OrganizationInterior";

export const metadata: Metadata = {
  title: "Implementation",
  description:
    "From conversation to connected care — how LoveJoy helps organizations launch behavioral health programs with clarity and impact.",
};

const steps: {
  n: string;
  title: string;
  body: string;
  tips: string[];
  Icon: LucideIcon;
}[] = [
  {
    n: "1",
    title: "Understand your program",
    body: "Clarify goals, populations, and how care should flow across providers, navigators, and partners.",
    tips: [
      "Define success metrics early — access, engagement, and outcomes.",
      "Map who owns each step of the journey today.",
    ],
    Icon: Users,
  },
  {
    n: "2",
    title: "Configure your experience",
    body: "Set up pathways, roles, and the tools your teams need in the organization portal and navigation workspace.",
    tips: [
      "Align roles for leaders, navigators, and clinical partners.",
      "Configure programs and reporting views that match your model.",
    ],
    Icon: Settings2,
  },
  {
    n: "3",
    title: "Launch with your teams",
    body: "Bring providers, navigators, and partners into one workflow so people experience connected care from day one.",
    tips: [
      "Train navigators and clinical partners on shared workflows.",
      "Start with a focused population, then expand.",
    ],
    Icon: CheckCircle2,
  },
  {
    n: "4",
    title: "Learn and improve",
    body: "Use real activity and outcomes to refine delivery — pathways, staffing, and where support helps most.",
    tips: [
      "Review engagement and barrier trends with leadership regularly.",
      "Adjust programs based on what the data shows.",
    ],
    Icon: LineChart,
  },
];

const afterLaunch = [
  {
    title: "One operating picture",
    body: "Leaders see population health; navigators act on needs; providers stay connected to the journey.",
  },
  {
    title: "Flexible delivery",
    body: "Combine your teams, LoveJoy network capacity, and navigation support as your program evolves.",
  },
  {
    title: "Partnership, not a handoff",
    body: "Our team stays engaged through launch and optimization — so you are not figuring it out alone.",
  },
];

export default function OrganizationImplementationPage() {
  return (
    <>
      <OrganizationInteriorHero
        title="From conversation to connected care."
        description="A proven approach to getting started and creating impact — four clear steps from program design to continuous improvement."
      />

      <section className="bg-atmosphere px-4 py-16 md:px-6 xl:px-8 md:py-20">
        <div className="site-container">
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
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-6 xl:px-8 md:py-20">
        <div className="site-container">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            After you launch
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Implementation is the start of a partnership — not a one-time
            install.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {afterLaunch.map((item) => (
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

      <OrganizationRelatedNav
        links={[
          { href: "/for-organizations/access", label: "Next: CMS ACCESS" },
          { href: "/for-organizations/platform", label: "Platform" },
        ]}
      />

      <OrganizationInteriorCtaBand
        title="Ready to plan your launch?"
        description="Talk with our team about your populations, care model, and timeline — and see how LoveJoy fits from conversation to connected care."
      />
    </>
  );
}
