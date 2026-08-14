import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import {
  ClipboardList,
  HeartHandshake,
  ListChecks,
  Route,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  OrganizationInteriorCtaBand,
  OrganizationInteriorHero,
  OrganizationRelatedNav,
} from "@/components/OrganizationInterior";

export const metadata: Metadata = buildPageMetadata({
  title: "Care Navigation",
  description:
    "Give navigators a workspace to follow needs, coordinate next steps, and keep people moving forward between visits.",
  path: "/for-organizations/navigation",
});

const workspaceFeatures: {
  title: string;
  body: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Assignments",
    body: "See who is assigned to each navigator and prioritize the people who need attention today.",
    Icon: Users,
  },
  {
    title: "Needs & barriers",
    body: "Surface clinical priorities and social barriers — housing, transportation, follow-ups — in one place.",
    Icon: ClipboardList,
  },
  {
    title: "Follow-ups",
    body: "Track open tasks, reminders, and next steps so nothing falls through the cracks between visits.",
    Icon: ListChecks,
  },
  {
    title: "Care coordination",
    body: "Connect navigators with providers, programs, and resources around each person's plan.",
    Icon: HeartHandshake,
  },
  {
    title: "Progress visibility",
    body: "Understand whether people are moving forward — and where support helps most.",
    Icon: Route,
  },
];

const dayInLife = [
  {
    title: "Start with today's caseload",
    body: "Open the navigator workspace to see assigned individuals, open needs, and priority follow-ups.",
  },
  {
    title: "Act on what matters",
    body: "Reach out, schedule next steps, and connect people to clinical or community resources.",
  },
  {
    title: "Close the loop",
    body: "Update progress so care teams and organization leaders share the same picture of engagement.",
  },
];

export default function OrganizationNavigationPage() {
  return (
    <>
      <OrganizationInteriorHero
        title="A workspace built for care navigation."
        description="Give navigators the tools to follow needs, coordinate next steps, and keep people moving forward between visits — so access turns into lasting engagement."
      />

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            What navigators can do
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Navigation is where connected care becomes real for people. LoveJoy
            gives your team a focused workspace — not another disconnected
            spreadsheet.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workspaceFeatures.map((item) => (
              <li
                key={item.title}
                className="rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-soft text-navy">
                  <item.Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-deep">
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

      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            How navigation fits the day
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {dayInLife.map((step, index) => (
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

      <OrganizationRelatedNav
        links={[
          {
            href: "/for-organizations/insights",
            label: "Next: Insights & Reporting",
          },
          { href: "/for-organizations/platform", label: "Platform" },
        ]}
      />

      <OrganizationInteriorCtaBand
        title="See the navigator workspace."
        description="Request a demo to walk through assignments, needs, and care coordination with your navigation and program teams."
      />
    </>
  );
}
