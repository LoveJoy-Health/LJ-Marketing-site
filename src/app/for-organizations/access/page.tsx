import type { Metadata } from "next";
import {
  BarChart3,
  HeartPulse,
  Network,
  Shield,
  type LucideIcon,
} from "lucide-react";
import {
  OrganizationInteriorCtaBand,
  OrganizationInteriorHero,
  OrganizationRelatedNav,
} from "@/components/OrganizationInterior";

export const metadata: Metadata = {
  title: "CMS ACCESS",
  description:
    "How LoveJoy supports organizations preparing for — and participating in — the CMS ACCESS Model for outcome-aligned behavioral health care.",
};

const CMS_ACCESS_URL =
  "https://www.cms.gov/priorities/innovation/innovation-models/access";

const capabilities: {
  title: string;
  body: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Connected depression and anxiety pathways",
    body: "Support technology-enabled behavioral health delivery with clear paths from access through ongoing engagement.",
    Icon: HeartPulse,
  },
  {
    title: "Visibility into engagement and progress",
    body: "Track assessments, check-ins, and progress over time so outcome-aligned care is measurable — not opaque.",
    Icon: BarChart3,
  },
  {
    title: "Clinical and navigation in one platform",
    body: "Coordinate providers and navigators so people stay supported between visits, not only at appointments.",
    Icon: Network,
  },
  {
    title: "Built for responsible care delivery",
    body: "HIPAA-aware tools designed for organizations accountable for access, engagement, and outcomes.",
    Icon: Shield,
  },
];

const whoItHelps = [
  {
    title: "Organizations preparing for ACCESS",
    body: "Establish connected workflows, reporting, and navigation before participation requirements intensify.",
  },
  {
    title: "Organizations already participating",
    body: "Operate day to day with visibility into engagement, assessments, and where people need help.",
  },
  {
    title: "Partners across the care journey",
    body: "Align clinical, navigation, and leadership teams around one picture of connected care.",
  },
];

export default function OrganizationAccessPage() {
  return (
    <>
      <OrganizationInteriorHero
        eyebrow="CMS ACCESS"
        title="Built for outcome-aligned care."
        description="LoveJoy supports organizations preparing for — and participating in — the CMS ACCESS Model, connecting technology-supported behavioral health delivery with the visibility needed to improve outcomes."
      />

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            How LoveJoy supports ACCESS
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {capabilities.map((item) => (
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
            Who this is for
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whoItHelps.map((item) => (
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

          <div className="mt-12 rounded-[1.75rem] bg-atmosphere p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
              Official CMS information
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              For model rules, eligibility, and CMS Innovation Center details,
              visit the official ACCESS Model page on CMS.gov.
            </p>
            <a
              href={CMS_ACCESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-navy px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              View CMS ACCESS Model
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <OrganizationRelatedNav
        links={[
          { href: "/for-organizations/insights", label: "Insights & Reporting" },
          { href: "/for-organizations/implementation", label: "Implementation" },
        ]}
      />

      <OrganizationInteriorCtaBand
        title="Talk through ACCESS with LoveJoy."
        description="Request a demo to see how connected care, navigation, and reporting support outcome-aligned behavioral health delivery."
      />
    </>
  );
}
