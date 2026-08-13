import type { Metadata } from "next";
import {
  Activity,
  ClipboardList,
  LineChart,
  Route,
  type LucideIcon,
} from "lucide-react";
import {
  OrganizationInteriorCtaBand,
  OrganizationInteriorHero,
  OrganizationRelatedNav,
} from "@/components/OrganizationInterior";

export const metadata: Metadata = {
  title: "Insights & Reporting",
  description:
    "Understand how people connect to care — and where they need help — with reporting across access, engagement, needs, and progress.",
};

const metrics: {
  title: string;
  body: string;
  items: string[];
  Icon: LucideIcon;
}[] = [
  {
    title: "Access",
    body: "See how people enter care and whether they complete the path.",
    items: ["Entry points", "Time to care", "Referral completion"],
    Icon: Route,
  },
  {
    title: "Engagement",
    body: "Track what happens between visits — not only appointments booked.",
    items: ["Check-ins", "Appointments kept", "Between-visit activity"],
    Icon: Activity,
  },
  {
    title: "Needs",
    body: "Surface clinical and social barriers so teams know where to help.",
    items: ["Clinical priorities", "Social barriers", "Resource gaps"],
    Icon: ClipboardList,
  },
  {
    title: "Progress",
    body: "Connect activity to outcomes your programs can improve over time.",
    items: ["Outcomes trends", "Program impact", "Where support helps most"],
    Icon: LineChart,
  },
];

const outcomes = [
  {
    title: "Act with confidence",
    body: "Turn population activity into decisions — where to staff, which barriers to remove, and which programs are working.",
  },
  {
    title: "Share one picture of care",
    body: "Leaders, navigators, and clinical partners work from the same view of engagement and need.",
  },
  {
    title: "Improve over time",
    body: "Use real trends — not anecdotal reports — to refine pathways and demonstrate impact.",
  },
];

export default function OrganizationInsightsPage() {
  return (
    <>
      <OrganizationInteriorHero
        title="Data you can act on to improve outcomes."
        description="Understand how people connect to care — and where they need help — across access, engagement, needs, and progress."
      />

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            Connection metrics that matter
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Reporting is organized around the behavioral health journey — so
            insight maps to the work your teams already do.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {metrics.map((metric) => (
              <li
                key={metric.title}
                className="rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-soft text-navy">
                    <metric.Icon
                      className="h-5 w-5"
                      aria-hidden
                      strokeWidth={1.75}
                    />
                  </span>
                  <h3 className="font-display text-2xl text-navy-deep">
                    {metric.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {metric.body}
                </p>
                <ul className="mt-4 space-y-2">
                  {metric.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-navy-deep"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            From activity to better outcomes
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {outcomes.map((item) => (
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
          {
            href: "/for-organizations/implementation",
            label: "Next: Implementation",
          },
          { href: "/for-organizations/access", label: "CMS ACCESS" },
        ]}
      />

      <OrganizationInteriorCtaBand
        title="Explore reporting with our team."
        description="Request a demo to see population overview, engagement trends, and the metrics your programs can act on."
      />
    </>
  );
}
