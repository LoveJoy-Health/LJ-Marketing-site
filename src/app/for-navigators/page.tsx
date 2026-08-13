import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  Bell,
  CalendarCheck,
  Check,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  MessageSquare,
  Search,
  ShieldAlert,
  Users,
  type LucideIcon,
} from "lucide-react";
import { isExternalHref, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Care Navigators",
  description:
    "A connected workspace for care navigators — track assigned people, follow-ups, care gaps, and keep care moving forward.",
};

const heroStats = [
  { value: "12", label: "People Assigned", tone: "bg-sky-500 text-white" },
  { value: "4", label: "Follow-ups Due", tone: "bg-amber-400 text-navy-deep" },
  { value: "3", label: "Needs Attention", tone: "bg-rose-500 text-white" },
  { value: "5", label: "Tasks Today", tone: "bg-emerald-500 text-white" },
] as const;

const features: {
  title: string;
  body: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}[] = [
  {
    title: "Assigned People",
    body: "See everyone on your caseload in one place — with status, next steps, and what needs attention.",
    Icon: Users,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "Follow-ups",
    body: "Never lose track of a promised callback, referral check, or visit follow-through.",
    Icon: CalendarCheck,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    title: "Care Gaps",
    body: "Spot missing assessments, overdue outreach, and barriers before they become crises.",
    Icon: AlertTriangle,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    title: "Tasks",
    body: "Organize daily work across people and programs so nothing sits in a notebook or inbox.",
    Icon: CheckCircle2,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
  {
    title: "Risk & Escalations",
    body: "Flag rising risk early and loop in providers or organizations when someone needs more support.",
    Icon: ShieldAlert,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Messaging",
    body: "Stay connected with patients and care teams through secure, in-platform conversations.",
    Icon: MessageSquare,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
];

const impactSteps: {
  title: string;
  body: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Understand",
    body: "See the full picture — clinical context, social needs, and recent activity.",
    Icon: Search,
  },
  {
    title: "Coordinate",
    body: "Align next steps across providers, programs, and community resources.",
    Icon: ClipboardList,
  },
  {
    title: "Connect",
    body: "Reach the person and the people supporting them without switching tools.",
    Icon: Users,
  },
  {
    title: "Follow Up",
    body: "Track what was promised and confirm it actually happened.",
    Icon: Bell,
  },
  {
    title: "Close the Loop",
    body: "Document outcomes and hand off cleanly so care keeps moving.",
    Icon: CheckCircle2,
  },
];

const trackedItems: { label: string; Icon: LucideIcon; tone: string }[] = [
  { label: "Care Activity", Icon: Activity, tone: "bg-sky-100 text-sky-600" },
  {
    label: "Assessments",
    Icon: ClipboardList,
    tone: "bg-violet-100 text-violet-600",
  },
  {
    label: "SDOH Needs",
    Icon: HeartHandshake,
    tone: "bg-amber-100 text-amber-700",
  },
  {
    label: "Follow-ups",
    Icon: CalendarCheck,
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Messages",
    Icon: MessageSquare,
    tone: "bg-sky-100 text-sky-600",
  },
  {
    label: "Escalations",
    Icon: ShieldAlert,
    tone: "bg-rose-100 text-rose-600",
  },
];

const collabChecks = [
  "Share updates in real time",
  "Coordinate across roles without email chains",
  "See the same person context as providers",
  "Close gaps faster with clear ownership",
  "Keep people engaged between visits",
];

const collabRoles = [
  {
    label: "Provider",
    photo: "/images/providers-hero.png",
    photoClass: "object-[32%_28%]",
    position: "left-0 top-1/2 -translate-y-1/2",
  },
  {
    label: "Patient",
    photo: "/images/lady-daughter.png",
    photoClass: "object-[center_18%]",
    position: "left-1/2 top-0 -translate-x-1/2",
  },
  {
    label: "Organization",
    photo: "/images/organizations-hero.png",
    photoClass: "object-[55%_28%]",
    position: "right-0 top-1/2 -translate-y-1/2",
  },
  {
    label: "Navigator",
    photo: "/images/navigators-hero.png",
    photoClass: "object-[58%_20%]",
    position: "bottom-0 left-1/2 -translate-x-1/2",
  },
] as const;

function NavigatorCtas({
  variant = "light",
  showJoin = true,
}: {
  variant?: "light" | "dark";
  showJoin?: boolean;
}) {
  const outlined =
    variant === "dark"
      ? "inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
      : "inline-flex items-center gap-2 rounded-full border-2 border-navy px-5 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white";

  const joinIsExternal = isExternalHref(siteConfig.navigatorJoinUrl);

  return (
    <div className="flex flex-wrap gap-3">
      {showJoin ? (
        joinIsExternal ? (
          <a
            href={siteConfig.navigatorJoinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
          >
            Join LoveJoy
            <span aria-hidden>→</span>
          </a>
        ) : (
          <Link
            href={siteConfig.navigatorJoinUrl}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
          >
            Join LoveJoy
            <span aria-hidden>→</span>
          </Link>
        )
      ) : null}
      <a
        href={siteConfig.navigatorSignInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={outlined}
      >
        Sign in to Navigator Portal
      </a>
    </div>
  );
}

function StatusStack() {
  return (
    <ul className="flex w-[11.5rem] flex-col gap-2.5 sm:w-[12.5rem]">
      {heroStats.map((stat) => (
        <li
          key={stat.label}
          className={`rounded-2xl px-4 py-3 shadow-[0_12px_28px_rgba(2,24,72,0.16)] ${stat.tone}`}
        >
          <p className="text-2xl font-semibold leading-none tracking-tight">
            {stat.value}
          </p>
          <p className="mt-1 text-[11px] font-medium leading-snug opacity-95">
            {stat.label}
          </p>
        </li>
      ))}
    </ul>
  );
}

function NavigatorDashboardMock() {
  const followUps = [
    {
      name: "Jordan D.",
      detail: "Housing referral check-in",
      tag: "Due today",
      tagClass: "bg-rose-100 text-rose-700",
    },
    {
      name: "Talia S.",
      detail: "Confirm pharmacy pickup",
      tag: "Tomorrow",
      tagClass: "bg-amber-100 text-amber-800",
    },
    {
      name: "Casey M.",
      detail: "Post-visit outreach",
      tag: "This week",
      tagClass: "bg-sky-100 text-sky-700",
    },
  ];

  const activity = [
    { text: "Assessment completed — Jasmine R.", time: "12m" },
    { text: "Message from Dr. Patel", time: "1h" },
    { text: "Care gap closed — transportation", time: "3h" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_rgba(2,24,72,0.14)] ring-1 ring-black/[0.05]">
      <div className="flex min-h-[20rem]">
        <aside className="hidden w-[4.25rem] flex-col items-center gap-4 bg-navy-deep py-4 sm:flex">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/90">
            <HeartHandshake
              className="h-4 w-4 text-navy-deep"
              aria-hidden
              strokeWidth={1.75}
            />
          </span>
          {[Users, CalendarCheck, ClipboardList, MessageSquare].map((Icon, i) => (
            <span
              key={i}
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                i === 0 ? "bg-white/15 text-white" : "text-white/45"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden strokeWidth={1.75} />
            </span>
          ))}
        </aside>
        <div className="flex-1 bg-[#F4F7FC] p-3 sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                Navigator Dashboard
              </p>
              <p className="mt-0.5 text-sm font-semibold text-navy-deep">
                Good morning, Alex
              </p>
            </div>
            <span className="rounded-full bg-white px-2.5 py-1 text-[9px] font-semibold text-navy shadow-sm ring-1 ring-black/[0.04]">
              Today
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white px-2.5 py-2 shadow-sm ring-1 ring-black/[0.04]"
              >
                <p className="text-lg font-semibold leading-none text-navy-deep">
                  {stat.value}
                </p>
                <p className="mt-1 text-[9px] font-medium leading-snug text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/[0.04]">
              <p className="text-[10px] font-semibold text-navy-deep">
                My Follow-ups
              </p>
              <ul className="mt-2 space-y-1.5">
                {followUps.map((row) => (
                  <li
                    key={row.name}
                    className="flex items-center justify-between gap-2 rounded-lg bg-[#F4F7FC] px-2 py-1.5"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-[10px] font-semibold text-navy-deep">
                        {row.name}
                      </p>
                      <p className="truncate text-[9px] text-muted">{row.detail}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${row.tagClass}`}
                    >
                      {row.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/[0.04]">
              <p className="text-[10px] font-semibold text-navy-deep">
                Recent Activity
              </p>
              <ul className="mt-2 space-y-2">
                {activity.map((item) => (
                  <li key={item.text} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B9FE8]" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-medium leading-snug text-navy-deep">
                        {item.text}
                      </p>
                      <p className="text-[9px] text-muted">{item.time} ago</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PatientProfileMock() {
  const tags = [
    { label: "Housing Assistance", tone: "bg-amber-100 text-amber-800" },
    { label: "Transportation", tone: "bg-sky-100 text-sky-700" },
    { label: "Food Security", tone: "bg-emerald-100 text-emerald-800" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(2,24,72,0.12)] ring-1 ring-black/[0.05]">
      <div className="border-b border-border bg-[#F4F7FC] px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
            JR
          </span>
          <div>
            <p className="text-sm font-semibold text-navy-deep">Jasmine R.</p>
            <p className="text-[11px] text-muted">Assigned · Moderate priority</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-semibold">
          {["Overview", "Activity", "Assessments", "Needs", "Messages"].map(
            (tab, i) => (
              <span
                key={tab}
                className={`rounded-full px-2.5 py-1 ${
                  i === 0
                    ? "bg-navy text-white"
                    : "bg-white text-muted ring-1 ring-black/[0.05]"
                }`}
              >
                {tab}
              </span>
            ),
          )}
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
            Recent activity
          </p>
          <ul className="mt-2 space-y-1.5">
            <li className="rounded-lg bg-[#F4F7FC] px-2.5 py-2 text-[11px] text-navy-deep">
              Completed PHQ-9 · Score improved
            </li>
            <li className="rounded-lg bg-[#F4F7FC] px-2.5 py-2 text-[11px] text-navy-deep">
              Missed ride to appointment — rescheduled
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
            Needs &amp; Goals
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${tag.tone}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CollaborationDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem]">
      <svg
        aria-hidden
        viewBox="0 0 320 320"
        className="absolute inset-0 h-full w-full"
      >
        <circle
          cx="160"
          cy="160"
          r="88"
          fill="none"
          stroke="#D6E4F8"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <line x1="160" y1="48" x2="160" y2="120" stroke="#5B9FE8" strokeWidth="1.25" />
        <line x1="272" y1="160" x2="200" y2="160" stroke="#5B9FE8" strokeWidth="1.25" />
        <line x1="160" y1="272" x2="160" y2="200" stroke="#5B9FE8" strokeWidth="1.25" />
        <line x1="48" y1="160" x2="120" y2="160" stroke="#5B9FE8" strokeWidth="1.25" />
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_12px_32px_rgba(2,24,72,0.18)] ring-4 ring-white">
        <Image
          src="/images/logo.png"
          alt="LoveJoy"
          width={48}
          height={48}
          className="h-10 w-10 object-contain"
        />
      </div>

      {collabRoles.map((role) => (
        <div
          key={role.label}
          className={`absolute z-20 flex flex-col items-center ${role.position}`}
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-full shadow-[0_10px_24px_rgba(2,24,72,0.18)] ring-3 ring-white sm:h-[4.5rem] sm:w-[4.5rem]">
            <Image
              src={role.photo}
              alt=""
              fill
              sizes="72px"
              className={`photo-bw object-cover ${role.photoClass}`}
            />
          </div>
          <span className="mt-1.5 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-navy-deep shadow-sm ring-1 ring-black/[0.05]">
            {role.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ForNavigatorsPage() {
  return (
    <>
      <link rel="preload" as="image" href="/images/navigators-hero.png" />

      {/* Hero */}
      <section className="relative bg-white px-1 pb-10 pt-2 text-navy-deep md:px-1.5 md:pb-14 md:pt-3">
        <div className="hero-shell bg-navigators-hero-atmosphere relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(217,235,255,0.55),transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(105deg,#ffffff_0%,rgba(255,255,255,0.92)_20%,rgba(247,249,252,0.55)_38%,rgba(238,245,255,0.18)_52%,transparent_66%)]"
          />
          <div
            aria-hidden
            className="navigators-hero-photo-blend pointer-events-none absolute inset-x-0 bottom-0 top-[28%] z-[1] md:inset-y-0 md:left-auto md:right-0 md:top-0 md:w-[56%] lg:w-[60%]"
          />

          <div className="relative z-10">
            <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-3 pb-12 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:px-4 md:pb-14 md:pt-10 lg:pb-16">
              <div className="max-w-xl">
                <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
                  Care Navigators
                </p>
                <h1 className="animate-fade-up delay-100 mt-3 font-display text-4xl leading-[1.08] tracking-tight text-navy-deep md:text-5xl lg:text-[3.25rem]">
                  Help people keep moving{" "}
                  <em className="font-display italic text-[#B8960A]">forward.</em>
                </h1>
                <p className="animate-fade-up delay-200 mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                  LoveJoy gives care navigators a connected workspace to track
                  people, close gaps, and coordinate the next right step — so
                  support doesn&apos;t stop between visits.
                </p>
                <div className="animate-fade-up delay-300 mt-8">
                  <NavigatorCtas />
                </div>
              </div>

              <div
                className="animate-soft-rise relative mx-auto flex min-h-[16rem] w-full max-w-md items-center justify-end md:min-h-[22rem] md:max-w-none lg:min-h-[24rem]"
                role="img"
                aria-label="Care navigator meeting with a client, with caseload status summary"
              >
                <div className="pointer-events-none absolute right-0 top-4 z-20 hidden sm:block md:right-2 md:top-8 lg:right-6">
                  <div className="animate-float">
                    <StatusStack />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge + dashboard */}
      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <h2 className="max-w-xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
              Care coordination shouldn&apos;t require piecing everything
              together.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Navigators juggle spreadsheets, inboxes, and siloed systems just
              to keep people moving. LoveJoy brings assigned people, follow-ups,
              care gaps, and messaging into one workspace — so you spend less
              time hunting and more time helping.
            </p>
          </div>
          <NavigatorDashboardMock />
        </div>
      </section>

      {/* Built for navigators */}
      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
            Built for the way navigators actually work.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Everything you need to manage a caseload, act on what matters, and
            keep care connected across the journey.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[#F7F9FC] p-6 shadow-[0_10px_32px_rgba(2,24,72,0.06)] ring-1 ring-black/[0.04]"
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

      {/* Impact steps */}
      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
            Every step you take moves care{" "}
            <em className="font-display italic text-[#B8960A]">forward.</em>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            A clear flow from understanding needs to closing the loop — designed
            for navigators who keep people from falling through the cracks.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {impactSteps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-start">
                {index < impactSteps.length - 1 ? (
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

      {/* Whole picture */}
      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <PatientProfileMock />
          </div>
          <div>
            <h2 className="max-w-xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
              See the whole person, not just the appointment.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Clinical context, social determinants, assessments, and care
              activity live together — so you can address housing, transport,
              and follow-through with the same clarity as a visit note.
            </p>
            <ul className="mt-8 space-y-3">
              {trackedItems.map(({ label, Icon, tone }) => (
                <li key={label} className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${tone}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-semibold text-navy-deep">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Working together */}
      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="max-w-xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
              You shouldn&apos;t have to coordinate care alone.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              LoveJoy connects navigators with patients, providers, and
              organizations on one platform — so updates travel with the person,
              not through scattered threads.
            </p>
            <ul className="mt-8 space-y-3">
              {collabChecks.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-3.5 w-3.5" aria-hidden strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium text-navy-deep">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <CollaborationDiagram />
        </div>
      </section>

      {/* Final CTA */}
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
              src="/images/navigators-hero.png"
              alt=""
              fill
              sizes="50vw"
              className="photo-bw object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#042268] via-[#042268]/80 to-transparent" />
          </div>
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl tracking-tight md:text-5xl">
              Keep care moving{" "}
              <em className="font-display italic text-gold">forward.</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Access the Navigator Portal to manage your caseload — or learn how
              LoveJoy connects the whole care journey.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={siteConfig.navigatorPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
              >
                Access Navigator Portal
                <span aria-hidden>→</span>
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
              >
                Learn About LoveJoy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
