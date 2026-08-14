import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  BarChart3,
  Building2,
  HeartHandshake,
  Laptop,
  Network,
  Route,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  OrganizationInteriorCtaBand,
  OrganizationInteriorHero,
  OrganizationRelatedNav,
} from "@/components/OrganizationInterior";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Organization Platform",
  description:
    "Explore the LoveJoy organization platform — one connected experience across access, coordination, engagement, and insight for behavioral health programs.",
  path: "/for-organizations/platform",
});

const journey: {
  title: string;
  body: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Access",
    body: "Help people find a clear starting point into care and support.",
    Icon: Route,
  },
  {
    title: "Coordinate",
    body: "Connect providers, navigators, and resources around each person.",
    Icon: Network,
  },
  {
    title: "Engage",
    body: "Keep people connected between visits with check-ins and follow-through.",
    Icon: HeartHandshake,
  },
  {
    title: "Understand",
    body: "See needs, activity, and progress so teams can improve outcomes.",
    Icon: BarChart3,
  },
];

const portalFeatures = [
  "Population overview",
  "Care activity",
  "Needs & barriers",
  "Program performance",
  "Engagement trends",
] as const;

const deliveryModels: { label: string; Icon: LucideIcon }[] = [
  { label: "Your providers", Icon: Users },
  { label: "LoveJoy network", Icon: Network },
  { label: "Your navigators", Icon: HeartHandshake },
  { label: "LoveJoy-supported navigation", Icon: Route },
  { label: "Your programs", Icon: Building2 },
];

const roles = [
  "Individuals",
  "Providers",
  "Navigators",
  "Organization leaders",
] as const;

export default function OrganizationPlatformPage() {
  return (
    <>
      <OrganizationInteriorHero
        title="One platform across the care journey."
        description="LoveJoy connects people, providers, navigators, and organization teams in a single behavioral health experience — from first access through ongoing insight."
      />

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            Built for every role in the journey
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Getting people into care is only the beginning. LoveJoy supports the
            full path — access, coordination, engagement, and understanding.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step) => (
              <li key={step.title}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy shadow-[0_8px_24px_rgba(2,24,72,0.1)] ring-1 ring-black/[0.04]">
                  <step.Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-xl text-navy-deep">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ul>
          <ul className="mt-10 flex flex-wrap gap-3">
            {roles.map((role) => (
              <li
                key={role}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy-deep ring-1 ring-navy/10"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-soft text-navy">
              <Laptop className="h-5 w-5" aria-hidden strokeWidth={1.75} />
            </span>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              Organization Portal
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              See population health activity, program performance, and where
              people need support — in one connected view at{" "}
              <span className="font-medium text-navy-deep">
                organizations.lovejoy.health
              </span>
              .
            </p>
            <ul className="mt-6 space-y-2.5">
              {portalFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-navy-deep"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.organizationPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
            >
              Open Organization Portal →
            </a>
          </div>

          <div>
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              Deliver care with the model that fits
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Use your teams, LoveJoy network capacity, navigation support, and
              programs — in the combination that works for your organization.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {deliveryModels.map((model) => (
                <li key={model.label} className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-atmosphere text-navy ring-1 ring-navy/10">
                    <model.Icon
                      className="h-5 w-5"
                      aria-hidden
                      strokeWidth={1.75}
                    />
                  </span>
                  <span className="text-sm font-medium text-navy-deep">
                    {model.label}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/for-organizations/implementation"
              className="mt-8 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
            >
              See how implementation works →
            </Link>
          </div>
        </div>
      </section>

      <OrganizationRelatedNav
        links={[
          {
            href: "/for-organizations/navigation",
            label: "Next: Care Navigation",
          },
          { href: "/for-organizations/insights", label: "Insights & Reporting" },
        ]}
      />

      <OrganizationInteriorCtaBand
        title="See the platform in action."
        description="Request a demo to walk through the organization portal, care journey tools, and delivery models with our team."
      />
    </>
  );
}
