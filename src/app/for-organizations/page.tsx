import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  Hospital,
  LineChart,
  Network,
  Route,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "For Organizations",
  description:
    "Connect people to care, coordinate support across teams, and understand the behavioral health journey — built for organizations responsible for outcomes.",
  path: "/for-organizations",
});

const valueProps: { label: string; Icon: LucideIcon }[] = [
  { label: "HIPAA compliant and secure", Icon: Shield },
  { label: "Built for complex care delivery", Icon: Network },
  { label: "Data you can act on to improve outcomes", Icon: LineChart },
];

const journeySteps: {
  title: string;
  body: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Access",
    body: "Help people find a starting point.",
    Icon: Route,
  },
  {
    title: "Coordinate",
    body: "Connect providers and resources.",
    Icon: Network,
  },
  {
    title: "Engage",
    body: "Keep people connected between visits.",
    Icon: HeartHandshake,
  },
  {
    title: "Understand",
    body: "See needs, activity, and progress.",
    Icon: BarChart3,
  },
];

const audiences: {
  title: string;
  body: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}[] = [
  {
    title: "FQHCs & Community Health Centers",
    body: "Expand behavioral health access for the communities you serve.",
    Icon: Hospital,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-700",
  },
  {
    title: "Behavioral Health Organizations",
    body: "Coordinate care teams, programs, and ongoing engagement.",
    Icon: HeartHandshake,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Health Systems",
    body: "Connect behavioral health across settings and care pathways.",
    Icon: Building2,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
  },
  {
    title: "Health Plans",
    body: "Improve member engagement and visibility into care participation.",
    Icon: ClipboardList,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    title: "Schools & Universities",
    body: "Support students with clearer paths to mental health resources.",
    Icon: GraduationCap,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    title: "Community Organizations",
    body: "Help people find support beyond clinical appointments alone.",
    Icon: Users,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
];

const roles: {
  label: string;
  image: string;
  alt: string;
}[] = [
  {
    label: "Individual",
    image: "/images/individuals-hero.png",
    alt: "Individual seeking mental health support",
  },
  {
    label: "Provider",
    image: "/images/providers-hero.png",
    alt: "Behavioral health provider",
  },
  {
    label: "Navigator",
    image: "/images/guy-hero.png",
    alt: "Care navigator supporting a person",
  },
  {
    label: "Organization",
    image: "/images/organizations-hero.png",
    alt: "Organization leaders reviewing care data",
  },
];

const portalFeatures = [
  "Population overview",
  "Care activity",
  "Needs & barriers",
  "Program performance",
  "Engagement trends",
] as const;

const navigationFeatures = [
  "Assignments",
  "Needs & barriers",
  "Follow-ups",
  "Care coordination",
  "Progress visibility",
] as const;

const understandMetrics: {
  title: string;
  items: string[];
  Icon: LucideIcon;
}[] = [
  {
    title: "Access",
    items: ["Entry points", "Time to care", "Referral completion"],
    Icon: Route,
  },
  {
    title: "Engagement",
    items: ["Check-ins", "Appointments kept", "Between-visit activity"],
    Icon: Activity,
  },
  {
    title: "Needs",
    items: ["Clinical priorities", "Social barriers", "Resource gaps"],
    Icon: ClipboardList,
  },
  {
    title: "Progress",
    items: ["Outcomes trends", "Program impact", "Where support helps most"],
    Icon: LineChart,
  },
];

const deliveryModels: { label: string; Icon: LucideIcon }[] = [
  { label: "Your providers", Icon: Users },
  { label: "LoveJoy network", Icon: Network },
  { label: "Your navigators", Icon: HeartHandshake },
  { label: "LoveJoy-supported navigation", Icon: Route },
  { label: "Your programs", Icon: Building2 },
];

const implementationSteps = [
  {
    n: "1",
    title: "Understand your program",
    body: "Clarify goals, populations, and how care should flow.",
  },
  {
    n: "2",
    title: "Configure your experience",
    body: "Set up pathways, roles, and the tools your teams need.",
  },
  {
    n: "3",
    title: "Launch with your teams",
    body: "Bring providers, navigators, and partners into one workflow.",
  },
  {
    n: "4",
    title: "Learn and improve",
    body: "Use real activity and outcomes to refine delivery over time.",
  },
] as const;

function PopulationOverviewCard() {
  const stats = [
    { label: "Individuals engaged", value: "2,842", delta: "↑ 12%" },
    { label: "Appointments", value: "1,125", delta: "↑ 8%" },
    { label: "Assessments", value: "642", delta: "↑ 15%" },
  ];
  return (
    <div className="animate-float w-[13.5rem] rounded-2xl bg-white/95 p-3.5 shadow-[0_16px_40px_rgba(2,24,72,0.18)] ring-1 ring-black/[0.06] backdrop-blur-sm sm:w-[15rem]">
      <p className="text-[11px] font-semibold text-navy-deep">
        Population Overview
      </p>
      <div className="mt-2.5 space-y-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-end justify-between gap-2 rounded-xl bg-[#F4F7FC] px-2.5 py-2"
          >
            <div>
              <p className="text-[9px] text-muted">{stat.label}</p>
              <p className="font-display text-lg leading-none text-navy-deep">
                {stat.value}
              </p>
            </div>
            <span className="text-[10px] font-semibold text-emerald-600">
              {stat.delta}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EngagementTrendCard() {
  return (
    <div className="animate-float-delayed w-[12.5rem] rounded-2xl bg-white/95 p-3.5 shadow-[0_16px_40px_rgba(2,24,72,0.18)] ring-1 ring-black/[0.06] backdrop-blur-sm sm:w-[14rem]">
      <p className="text-[11px] font-semibold text-navy-deep">Engagement Trend</p>
      <svg
        aria-hidden
        viewBox="0 0 160 64"
        className="mt-2 h-14 w-full"
        fill="none"
      >
        <path
          d="M4 48 C24 44, 36 28, 52 32 S78 52, 96 30 S128 14, 156 22"
          stroke="#04214A"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <path
          d="M4 40 C28 38, 40 22, 58 26 S84 46, 102 28 S130 18, 156 26"
          stroke="#5B9FE8"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M4 52 C30 50, 44 42, 62 44 S88 54, 108 40 S134 34, 156 38"
          stroke="#B8960A"
          strokeWidth="1.75"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
      <div className="mt-1 flex flex-wrap gap-2 text-[8px] text-muted">
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-navy-deep" /> Assessments
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5B9FE8]" /> Check-ins
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B8960A]" /> Appointments
        </span>
      </div>
    </div>
  );
}

function OrgLaptopMock() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-t-xl border-[3px] border-navy-deep bg-white shadow-[0_20px_50px_rgba(2,24,72,0.18)]">
        <div className="flex h-7 items-center gap-1.5 border-b border-border bg-[#F4F7FC] px-3">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
          <span className="ml-3 flex-1 rounded bg-white px-2 py-0.5 text-[8px] text-muted ring-1 ring-border">
            organizations.lovejoy.health
          </span>
        </div>
        <div className="grid min-h-[14rem] grid-cols-[4.5rem_1fr] sm:min-h-[16rem] sm:grid-cols-[5.5rem_1fr]">
          <aside className="bg-navy px-2 py-3 text-white">
            <p className="text-[8px] font-semibold tracking-wide text-gold sm:text-[9px]">
              LoveJoy
            </p>
            <ul className="mt-3 space-y-2 text-[8px] text-white/80 sm:text-[9px]">
              {["Overview", "Population", "Programs", "Reports"].map((item) => (
                <li
                  key={item}
                  className={`rounded px-1.5 py-1 ${item === "Overview" ? "bg-white/15 text-white" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
          <div className="bg-[#F4F7FC] p-3">
            <p className="text-[11px] font-semibold text-navy-deep">
              Population overview
            </p>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {[
                { label: "Engaged", value: "2.8k" },
                { label: "Visits", value: "1.1k" },
                { label: "Assess.", value: "642" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-white px-1.5 py-2 text-center shadow-sm ring-1 ring-black/[0.03]"
                >
                  <p className="text-[8px] text-muted">{stat.label}</p>
                  <p className="text-[10px] font-semibold text-navy-deep">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-2 rounded-lg bg-white p-2 shadow-sm ring-1 ring-black/[0.03]">
              <p className="text-[9px] font-medium text-navy-deep">
                Engagement trend
              </p>
              <svg
                aria-hidden
                viewBox="0 0 140 36"
                className="mt-1 h-8 w-full"
                fill="none"
              >
                <path
                  d="M2 28 C20 26, 30 14, 46 16 S70 30, 88 14 S116 8, 138 12"
                  stroke="#042268"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <div className="rounded-lg bg-white px-2 py-1.5 text-[9px] text-navy shadow-sm ring-1 ring-black/[0.03]">
                Top need · Anxiety
              </div>
              <div className="rounded-lg bg-white px-2 py-1.5 text-[9px] text-navy shadow-sm ring-1 ring-black/[0.03]">
                Active programs · 6
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-3 w-[92%] rounded-b-md bg-navy-deep" />
      <div className="mx-auto h-1.5 w-1/3 rounded-b-full bg-navy-deep/80" />
    </div>
  );
}

function NavigatorTabletMock() {
  const tasks = [
    { name: "Jordan D.", need: "Follow-up call", tone: "bg-amber-100 text-amber-800" },
    { name: "Talia S.", need: "Housing resource", tone: "bg-sky-100 text-sky-700" },
    { name: "Casey M.", need: "Appt reminder", tone: "bg-emerald-100 text-emerald-700" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.35rem] border-[5px] border-navy-deep bg-white shadow-[0_20px_50px_rgba(2,24,72,0.18)]">
      <div className="flex items-center justify-between border-b border-border bg-[#F4F7FC] px-3 py-2">
        <p className="text-[11px] font-semibold text-navy-deep">
          Navigator workspace
        </p>
        <span className="rounded-full bg-navy px-2 py-0.5 text-[8px] font-semibold text-white">
          Today
        </span>
      </div>
      <div className="min-h-[15rem] bg-[#F4F7FC] p-3">
        <p className="text-[10px] font-semibold text-navy">Assigned individuals</p>
        <div className="mt-2 space-y-2">
          {tasks.map((task) => (
            <div
              key={task.name}
              className="flex items-center justify-between gap-2 rounded-xl bg-white px-2.5 py-2 shadow-sm ring-1 ring-black/[0.03]"
            >
              <div>
                <p className="text-[11px] font-semibold text-navy-deep">
                  {task.name}
                </p>
                <p className="text-[9px] text-muted">{task.need}</p>
              </div>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${task.tone}`}
              >
                Open
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-navy p-2.5 text-white">
          <p className="text-[9px] uppercase tracking-wide text-gold">
            Needs spotlight
          </p>
          <p className="mt-0.5 text-[11px] font-semibold">
            3 people waiting on transportation support
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2.5 text-sm text-navy-deep">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-navy-soft text-navy">
            <ArrowRight className="h-3 w-3" aria-hidden strokeWidth={2} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function RoleNode({
  label,
  image,
  alt,
  showConnector,
}: {
  label: string;
  image: string;
  alt: string;
  showConnector: boolean;
}) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
      <div className="flex flex-col items-center gap-2">
        <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-navy/15 sm:h-20 sm:w-20">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="80px"
            className="photo-bw object-cover object-top"
          />
        </div>
        <p className="text-xs font-semibold text-navy-deep sm:text-sm">{label}</p>
      </div>
      {showConnector ? (
        <span
          aria-hidden
          className="mb-6 hidden h-px w-8 border-t border-dashed border-navy/25 sm:block sm:w-12 md:w-16"
        />
      ) : null}
    </div>
  );
}

function OrgCtas({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const outlined =
    variant === "dark"
      ? "inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
      : "inline-flex items-center rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white";

  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/about/contact"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
      >
        Request a Demo
        <span aria-hidden>→</span>
      </Link>
      {variant === "light" ? (
        <Link href="/for-organizations/platform" className={outlined}>
          Explore the Platform
        </Link>
      ) : (
        <Link href="/about/contact" className={outlined}>
          Talk to Our Team
        </Link>
      )}
    </div>
  );
}

export default function ForOrganizationsPage() {
  return (
    <>
      <link rel="preload" as="image" href="/images/organizations-hero.png" />

      {/* 1. Hero — inset rounded light card; photo blended into cool wash */}
      <section className="relative bg-white px-1 pb-10 pt-2 text-navy-deep md:px-1.5 md:pb-14 md:pt-3">
        <div className="hero-shell bg-organizations-hero-atmosphere relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(214,228,248,0.55),transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(105deg,#ffffff_0%,rgba(255,255,255,0.92)_20%,rgba(246,248,252,0.55)_38%,rgba(238,243,250,0.18)_52%,transparent_66%)]"
          />
          <div
            aria-hidden
            className="organizations-hero-photo-blend pointer-events-none absolute inset-x-0 bottom-0 top-[28%] z-[1] md:inset-y-0 md:left-auto md:right-0 md:top-0 md:w-[56%] lg:w-[60%]"
          />

          <div className="relative z-10">
            <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-3 pb-12 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:px-4 md:pb-14 md:pt-10 lg:pb-16">
              <div className="max-w-xl">
                <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
                  For organizations
                </p>
                <h1 className="animate-fade-up delay-100 mt-3 font-display text-4xl leading-[1.08] tracking-tight text-navy-deep md:text-5xl lg:text-[3.25rem]">
                  Build a more connected behavioral health experience.
                </h1>
                <p className="animate-fade-up delay-200 mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                  LoveJoy helps organizations connect people to care, coordinate
                  support across teams, and understand the journey — so access
                  turns into engagement, and engagement into better outcomes.
                </p>
                <div className="animate-fade-up delay-300 mt-8">
                  <OrgCtas />
                </div>
                <ul className="animate-fade-up delay-400 mt-10 grid gap-4 sm:grid-cols-3">
                  {valueProps.map(({ label, Icon }) => (
                    <li key={label} className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-soft text-navy">
                        <Icon className="h-4 w-4" aria-hidden strokeWidth={1.75} />
                      </span>
                      <span className="text-sm font-medium leading-snug text-navy-deep">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="animate-soft-rise relative mx-auto min-h-[16rem] w-full max-w-md md:min-h-[22rem] md:max-w-none lg:min-h-[24rem]"
                role="img"
                aria-label="Two professionals reviewing population health insights on a laptop in a modern office"
              >
                <div className="pointer-events-none absolute left-0 top-4 z-20 hidden sm:block md:left-2 md:top-8 lg:left-4">
                  <PopulationOverviewCard />
                </div>
                <div className="pointer-events-none absolute bottom-2 right-0 z-20 hidden sm:block md:bottom-6 md:right-2 lg:right-6">
                  <EngagementTrendCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Journey steps */}
      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
            Getting people into care is only the beginning.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            LoveJoy supports the full journey — from the first point of access
            through ongoing coordination, engagement, and insight.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-start">
                {index < journeySteps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute left-12 top-6 hidden h-px w-[calc(100%-1.5rem)] border-t border-dashed border-navy/20 lg:block"
                  />
                ) : null}
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy shadow-[0_8px_24px_rgba(2,24,72,0.1)] ring-1 ring-black/[0.04]">
                  <step.Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-xl text-navy-deep">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Audiences */}
      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
            Built for organizations responsible for behavioral health.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-atmosphere p-6 ring-1 ring-black/[0.03] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(2,24,72,0.08)]"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
                >
                  <item.Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. One platform */}
      <section
        id="platform"
        className="scroll-mt-28 bg-atmosphere px-3 py-16 md:px-4 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
            One platform across the care journey.
          </h2>
          <div className="mt-10 flex flex-wrap items-start justify-start gap-y-6">
            {roles.map((role, index) => (
              <RoleNode
                key={role.label}
                {...role}
                showConnector={index < roles.length - 1}
              />
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3 className="font-display text-2xl text-navy-deep">
                Organization Portal
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                See population health activity, program performance, and where
                people need support — in one connected view.
              </p>
              <FeatureList items={portalFeatures} />
              <Link
                href="/for-organizations/platform"
                className="mt-5 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
              >
                Explore the platform →
              </Link>
              <div className="mt-8">
                <OrgLaptopMock />
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl text-navy-deep">
                Care Navigation
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                Give navigators a workspace to follow needs, coordinate next
                steps, and keep people moving forward between visits.
              </p>
              <FeatureList items={navigationFeatures} />
              <Link
                href="/for-organizations/navigation"
                className="mt-5 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
              >
                See navigator workspace →
              </Link>
              <div className="mt-8">
                <NavigatorTabletMock />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Data & delivery */}
      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              Understand how people connect to care — and where they need help.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Turn activity into insight across access, engagement, needs, and
              progress so your teams can act with confidence.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {understandMetrics.map((metric) => (
                <div key={metric.title}>
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-navy-soft text-navy">
                      <metric.Icon
                        className="h-4 w-4"
                        aria-hidden
                        strokeWidth={1.75}
                      />
                    </span>
                    <h3 className="text-sm font-semibold text-navy-deep">
                      {metric.title}
                    </h3>
                  </div>
                  <ul className="mt-3 space-y-1.5 pl-[2.9rem]">
                    {metric.items.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href="/for-organizations/insights"
              className="mt-8 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
            >
              Explore reporting →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              Deliver care with the model that fits your organization.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Use your teams, LoveJoy network capacity, navigation support, and
              programs — in the combination that works for you.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {deliveryModels.map((model) => (
                <li key={model.label} className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-atmosphere text-navy ring-1 ring-navy/10">
                    <model.Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium text-navy-deep">
                    {model.label}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/for-organizations/platform"
              className="mt-8 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
            >
              See integration options →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CMS ACCESS */}
      <section className="px-1 py-2 md:px-1.5">
        <div className="bg-navy-atmosphere relative overflow-hidden rounded-[2rem] px-3 py-10 text-white md:rounded-[2.75rem] md:px-8 md:py-12">
          <div
            aria-hidden
            className="bg-starfield pointer-events-none absolute inset-0 opacity-30"
          />
          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[auto_1.2fr_1fr] lg:items-center lg:gap-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                CMS ACCESS
              </p>
              <p className="mt-2 font-display text-2xl text-white md:text-3xl">
                Built for outcome-aligned care.
              </p>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
              LoveJoy supports organizations preparing for — and participating
              in — the CMS ACCESS Model, connecting technology-supported
              behavioral health delivery with the visibility needed to improve
              outcomes.
            </p>
            <div>
              <ul className="space-y-2 text-sm text-white/85">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Support depression and anxiety pathways with connected care
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Track engagement, assessments, and progress over time
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  Coordinate clinical and navigation support in one platform
                </li>
              </ul>
              <Link
                href="/for-organizations/access"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-gold"
              >
                Learn more about ACCESS
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Implementation */}
      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
            From conversation to connected care.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            A proven approach to getting started and creating impact.
          </p>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((step, index) => (
              <li key={step.n} className="relative">
                {index < implementationSteps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute left-12 top-5 hidden h-px w-[calc(100%-1.5rem)] border-t border-dashed border-navy/20 lg:block"
                  />
                ) : null}
                <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-white">
                  {step.n}
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-deep">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="px-1 pb-2 md:px-1.5">
        <div className="bg-navy-atmosphere relative overflow-hidden rounded-[2rem] px-3 py-14 text-white md:rounded-[2.75rem] md:px-4 md:py-16">
          <div
            aria-hidden
            className="bg-starfield pointer-events-none absolute inset-0 opacity-35"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-20"
          >
            <Image
              src="/images/organizations-hero.png"
              alt=""
              fill
              sizes="50vw"
              className="photo-bw object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#042268] via-[#042268]/80 to-transparent" />
          </div>
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl tracking-tight md:text-5xl">
              Let&apos;s build a more connected behavioral health experience.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Partner with LoveJoy to expand access, coordinate support, and
              improve outcomes for the people you serve.
            </p>
            <div className="mt-8 flex justify-center">
              <OrgCtas variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
