import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Activity,
  Building2,
  Calendar,
  ClipboardList,
  CreditCard,
  HeartPulse,
  MessageSquare,
  Shield,
  Smartphone,
  Stethoscope,
  Users,
  Video,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { StoreBadges } from "@/components/StoreBadges";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Providers",
  description:
    "Deliver care, manage workflows, and stay connected with patients between visits — built for behavioral health providers.",
};

const valueProps: { label: string; Icon: LucideIcon }[] = [
  { label: "HIPAA-compliant and secure", Icon: Shield },
  { label: "Built for behavioral health workflows", Icon: ClipboardList },
  { label: "Support when you need it", Icon: HeartPulse },
];

const audiences: {
  title: string;
  body: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}[] = [
  {
    title: "Therapists & Counselors",
    body: "LCSW, LPC, LMFT and other licensed clinicians",
    Icon: MessageSquare,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Psychiatric Providers",
    body: "Psychiatrists, PMH-NPs and other prescribing professionals",
    Icon: Stethoscope,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "Psychologists",
    body: "Assessment, therapy and specialized behavioral care",
    Icon: Activity,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    title: "Coaches & Support Professionals",
    body: "Approved non-clinical support roles across the care journey",
    Icon: Users,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
];

const insights: { label: string; Icon: LucideIcon }[] = [
  { label: "Assessments", Icon: ClipboardList },
  { label: "Mood & check-ins", Icon: HeartPulse },
  { label: "Social needs", Icon: Building2 },
  { label: "Care activity", Icon: Activity },
  { label: "Care team context", Icon: Users },
];

const workflowColumns: { title: string; items: string[] }[] = [
  {
    title: "Before the visit",
    items: ["Schedule", "Patient context", "Assessments", "Insurance & eligibility"],
  },
  {
    title: "During care",
    items: ["Telehealth", "Clinical tools", "Secure messaging", "In-session notes"],
  },
  {
    title: "After the visit",
    items: ["Documentation", "Treatment plans", "Tasks & follow-ups", "Visit summaries"],
  },
];

const onboardingSteps = [
  { n: "1", title: "Create your account" },
  { n: "2", title: "Complete your profile" },
  { n: "3", title: "Get reviewed" },
  { n: "4", title: "Start providing care" },
] as const;

const paymentModes: {
  title: string;
  body: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Insurance",
    body: "Manage participating payers and eligibility in one place.",
    Icon: CreditCard,
  },
  {
    title: "Self-pay",
    body: "Offer services directly with clear pricing for patients.",
    Icon: Wallet,
  },
  {
    title: "Organization-based care",
    body: "Provide services through partner organizations and programs.",
    Icon: Building2,
  },
];

function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[11.5rem] overflow-hidden rounded-[1.65rem] border-[5px] border-navy-deep bg-white shadow-[0_20px_50px_rgba(2,24,72,0.22)] sm:w-[12.5rem] ${className}`}
    >
      <div className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-navy-deep" />
      <div className="min-h-[22rem] bg-[#F4F7FC] pt-6 sm:min-h-[24rem]">{children}</div>
    </div>
  );
}

function ScheduleMock() {
  const rows = [
    { name: "Jordan D.", time: "9:00 AM", tag: "High", tagClass: "bg-rose-100 text-rose-700" },
    { name: "Talia S.", time: "10:30 AM", tag: "Medium", tagClass: "bg-amber-100 text-amber-800" },
    { name: "Casey M.", time: "1:00 PM", tag: "Due", tagClass: "bg-sky-100 text-sky-700" },
  ];
  return (
    <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/[0.04]">
      <p className="text-[10px] font-semibold text-navy-deep">Today&apos;s schedule</p>
      <div className="mt-2 space-y-1.5">
        {rows.map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between gap-2 rounded-lg bg-[#F4F7FC] px-2 py-1.5"
          >
            <div>
              <p className="text-[10px] font-semibold text-navy-deep">{row.name}</p>
              <p className="text-[9px] text-muted">{row.time}</p>
            </div>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${row.tagClass}`}
            >
              {row.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VideoCallMock() {
  return (
    <div className="overflow-hidden rounded-xl bg-navy-deep shadow-sm ring-1 ring-black/[0.04]">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-navy to-navy-deep">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white">
            <Video className="h-6 w-6" aria-hidden strokeWidth={1.75} />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
          <span className="rounded-md bg-black/40 px-2 py-0.5 text-[9px] text-white">
            Secure visit
          </span>
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
      </div>
    </div>
  );
}

function ProgressNoteMock() {
  return (
    <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/[0.04]">
      <div className="flex gap-2 border-b border-border pb-2 text-[9px] font-semibold">
        <span className="text-navy">Progress Note</span>
        <span className="text-muted">Care Plan</span>
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="h-2 w-full rounded bg-navy-soft" />
        <div className="h-2 w-4/5 rounded bg-navy-soft" />
        <div className="h-2 w-3/5 rounded bg-navy-soft" />
      </div>
      <div className="mt-3 inline-flex rounded-md bg-navy px-2.5 py-1 text-[9px] font-semibold text-white">
        Save Note
      </div>
    </div>
  );
}

function ActivityFeedMock() {
  const items = [
    { label: "Mood check-in", detail: "Jordan · Improving", tone: "text-emerald-700" },
    { label: "Task completed", detail: "Talia · Sleep log", tone: "text-navy" },
    { label: "Message", detail: "Casey · Follow-up Q", tone: "text-sky-700" },
  ];
  return (
    <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/[0.04]">
      <p className="text-[10px] font-semibold text-navy-deep">Recent activity</p>
      <div className="mt-2 space-y-1.5">
        {items.map((item) => (
          <div key={item.label} className="rounded-lg bg-[#F4F7FC] px-2 py-1.5">
            <p className={`text-[10px] font-semibold ${item.tone}`}>{item.label}</p>
            <p className="text-[9px] text-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProviderSchedulePhone() {
  return (
    <PhoneFrame>
      <div className="px-3 pb-3">
        <p className="text-[10px] text-muted">Wednesday</p>
        <p className="font-display text-lg text-navy-deep">Today</p>
        <div className="mt-3 space-y-2">
          {[
            { name: "Jordan D.", time: "9:00", type: "Therapy" },
            { name: "Talia S.", time: "10:30", type: "Follow-up" },
            { name: "Casey M.", time: "1:00", type: "Intake" },
          ].map((appt) => (
            <div
              key={appt.name}
              className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-black/[0.03]"
            >
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold text-navy-deep">{appt.name}</p>
                <span className="text-[9px] text-muted">{appt.time}</span>
              </div>
              <p className="mt-0.5 text-[10px] text-muted">{appt.type}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-navy p-2.5 text-white">
          <p className="text-[9px] uppercase tracking-wide text-gold">Next up</p>
          <p className="mt-0.5 text-[11px] font-semibold">Video visit in 12 min</p>
        </div>
      </div>
    </PhoneFrame>
  );
}

function LaptopPortalMock() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-t-xl border-[3px] border-navy-deep bg-white shadow-[0_20px_50px_rgba(2,24,72,0.18)]">
        <div className="flex h-7 items-center gap-1.5 border-b border-border bg-[#F4F7FC] px-3">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
          <span className="ml-3 flex-1 rounded bg-white px-2 py-0.5 text-[8px] text-muted ring-1 ring-border">
            providers.lovejoy.health
          </span>
        </div>
        <div className="grid min-h-[14rem] grid-cols-[4.5rem_1fr] sm:min-h-[16rem] sm:grid-cols-[5.5rem_1fr]">
          <aside className="bg-navy px-2 py-3 text-white">
            <p className="text-[8px] font-semibold tracking-wide text-gold sm:text-[9px]">
              LoveJoy
            </p>
            <ul className="mt-3 space-y-2 text-[8px] text-white/80 sm:text-[9px]">
              {["Today", "Patients", "Messages", "Notes"].map((item) => (
                <li
                  key={item}
                  className={`rounded px-1.5 py-1 ${item === "Today" ? "bg-white/15 text-white" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
          <div className="bg-[#F4F7FC] p-3">
            <p className="text-[11px] font-semibold text-navy-deep">Dashboard</p>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {["4 visits", "2 notes", "3 msgs"].map((stat) => (
                <div
                  key={stat}
                  className="rounded-lg bg-white px-1.5 py-2 text-center text-[8px] font-medium text-navy shadow-sm ring-1 ring-black/[0.03]"
                >
                  {stat}
                </div>
              ))}
            </div>
            <div className="mt-2 space-y-1.5">
              {["Jordan D. · 9:00 AM", "Talia S. · 10:30 AM"].map((row) => (
                <div
                  key={row}
                  className="rounded-lg bg-white px-2 py-1.5 text-[9px] text-navy shadow-sm ring-1 ring-black/[0.03]"
                >
                  {row}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-3 w-[92%] rounded-b-md bg-navy-deep" />
      <div className="mx-auto h-1.5 w-1/3 rounded-b-full bg-navy-deep/80" />
    </div>
  );
}

function PhqChart() {
  return (
    <div className="mt-6 rounded-2xl bg-white p-4 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04]">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-semibold text-navy-deep">PHQ-9 Score</p>
        <p className="text-xs text-muted">Improving</p>
      </div>
      <svg aria-hidden viewBox="0 0 200 80" className="mt-3 h-20 w-full" fill="none">
        <path
          d="M8 18 C40 22, 55 48, 80 42 S120 18, 145 28 S175 55, 192 50"
          stroke="#042268"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M8 18 C40 22, 55 48, 80 42 S120 18, 145 28 S175 55, 192 50 V80 H8 Z"
          fill="url(#phqFill)"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="phqFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE612" />
            <stop offset="100%" stopColor="#FFE612" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <p className="mt-1 text-xs text-muted">Trend across recent assessments</p>
    </div>
  );
}

function ProviderCtas({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const outlined =
    variant === "dark"
      ? "inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
      : "inline-flex items-center gap-2 rounded-full border-2 border-navy px-5 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={siteConfig.providerJoinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
      >
        Join LoveJoy
        <span aria-hidden>→</span>
      </a>
      <a
        href={siteConfig.providerSignInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={outlined}
      >
        Provider Sign In
      </a>
      <Link href="/download/provider" className={outlined}>
        <Smartphone className="h-4 w-4" aria-hidden strokeWidth={1.75} />
        Get the Provider App
      </Link>
    </div>
  );
}

export default function ForProvidersPage() {
  const workflowSteps = [
    {
      number: "01",
      title: "Prepare",
      body: "See today's schedule, review patient context, and know what needs attention before the visit.",
      mock: <ScheduleMock />,
    },
    {
      number: "02",
      title: "Deliver",
      body: "Connect through secure video and keep the session focused on care — not logistics.",
      mock: <VideoCallMock />,
    },
    {
      number: "03",
      title: "Document",
      body: "Complete notes, care plans, and follow-ups without leaving your workflow.",
      mock: <ProgressNoteMock />,
    },
    {
      number: "04",
      title: "Stay connected",
      body: "Message patients, review check-ins, and stay aware of what happens between visits.",
      mock: <ActivityFeedMock />,
    },
  ];

  return (
    <>
      {/* Preload blended hero portrait (CSS background, not next/image) */}
      <link rel="preload" as="image" href="/images/providers-hero.png" />

      {/* Hero — inset rounded light card; portrait blended into soft wash */}
      <section className="relative bg-white px-1 pb-10 pt-2 text-navy-deep md:px-1.5 md:pb-14 md:pt-3">
        <div className="hero-shell bg-providers-hero-atmosphere relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(217,235,255,0.55),transparent_55%)]"
          />
          {/* Soft left wash — keeps navy copy legible without a hard photo edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(105deg,#ffffff_0%,rgba(255,255,255,0.92)_20%,rgba(247,249,252,0.55)_38%,rgba(238,245,255,0.18)_52%,transparent_66%)]"
          />

          {/* Portrait as feathered background layer (right), dissolves into light shell */}
          <div
            aria-hidden
            className="providers-hero-photo-blend pointer-events-none absolute inset-x-0 bottom-0 top-[28%] z-[1] md:inset-y-0 md:left-auto md:right-0 md:top-0 md:w-[56%] lg:w-[60%]"
          />

          <div className="relative z-10">
            <div className="site-container relative grid items-center gap-8 px-4 pb-12 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:px-6 md:pb-14 md:pt-10 lg:pb-16 xl:px-8">
              <div className="max-w-xl">
                <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
                  For providers
                </p>
                <h1 className="animate-fade-up delay-100 mt-3 font-display text-4xl leading-[1.08] tracking-tight text-navy-deep md:text-5xl lg:text-[3.25rem]">
                  Care doesn&apos;t end with the session.{" "}
                  <em className="font-display italic text-[#5B9FE8]">Neither</em>{" "}
                  should your connection.
                </h1>
                <p className="animate-fade-up delay-200 mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                  LoveJoy gives behavioral health providers the tools to deliver
                  care, stay connected between visits, and manage the workflows that
                  keep your practice running.
                </p>
                <div className="animate-fade-up delay-300 mt-8">
                  <ProviderCtas />
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
                className="animate-soft-rise relative mx-auto min-h-[14rem] w-full max-w-md md:min-h-[20rem] md:max-w-none lg:min-h-[22rem]"
                role="img"
                aria-label="Behavioral health provider at a desk with a laptop, smiling thoughtfully"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Audiences */}
      <section className="bg-atmosphere px-4 py-16 md:px-6 xl:px-8 md:py-20">
        <div className="site-container">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
            Built for the people delivering behavioral healthcare
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04]"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
                >
                  <item.Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/for-providers/requirements"
              className="inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
            >
              See provider requirements →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Connected care workflow */}
      <section className="bg-white px-4 py-16 md:px-6 xl:px-8 md:py-20">
        <div className="site-container">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
            Everything you need to deliver connected care.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {workflowSteps.map((step) => (
              <div key={step.number} className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-white">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl text-navy-deep">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
                <div className="mt-4 flex-1">{step.mock}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-end">
            <Link
              href="/for-providers/platform"
              className="inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
            >
              Explore the platform →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Portal + App */}
      <section
        id="practice"
        className="scroll-mt-28 bg-atmosphere px-4 py-16 md:px-6 xl:px-8 md:py-20"
      >
        <div className="site-container">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
            Your practice. Wherever you need it.
          </h2>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3 className="font-display text-2xl text-navy-deep">Provider Portal</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                Run your day from the web — schedule, documentation, messaging,
                and patient context in one place.
              </p>
              <a
                href={siteConfig.providerPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
              >
                Open Provider Portal →
              </a>
              <div className="mt-8">
                <LaptopPortalMock />
              </div>
            </div>

            <div id="provider-app" className="scroll-mt-28">
              <h3 className="font-display text-2xl text-navy-deep">
                LoveJoy Provider App
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                Stay productive on the go with today&apos;s schedule, secure
                visits, and quick access to what matters between sessions.
              </p>
              <div className="mt-5">
                <StoreBadges
                  iosUrl={siteConfig.providerAppStore.ios}
                  androidUrl={siteConfig.providerAppStore.android}
                />
              </div>
              <Link
                href="/download/provider"
                className="mt-4 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
              >
                Provider app download page →
              </Link>
              <div className="mt-8 flex justify-center lg:justify-start">
                <ProviderSchedulePhone />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Insights + workflow relief */}
      <section className="bg-white px-4 py-16 md:px-6 xl:px-8 md:py-20">
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              Know more than what happens in the appointment.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              See assessments, mood trends, and care activity so you can
              prepare — and follow through — with fuller context.
            </p>
            <ul className="mt-8 space-y-3">
              {insights.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-navy-soft text-navy">
                    <Icon className="h-4 w-4" aria-hidden strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium text-navy-deep">{label}</span>
                </li>
              ))}
            </ul>
            <PhqChart />
          </div>

          <div>
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              Spend more time on care. Less time managing it.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Tools that support the full visit cycle — before, during, and
              after — so less of your day is spent chasing logistics.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {workflowColumns.map((col) => (
                <div key={col.title}>
                  <h3 className="text-sm font-semibold text-navy-deep">{col.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <Calendar
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy"
                          aria-hidden
                          strokeWidth={1.75}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href="/for-providers/platform"
              className="mt-8 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
            >
              Explore all features →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Onboarding + payment */}
      <section className="bg-atmosphere px-4 py-16 md:px-6 xl:px-8 md:py-20">
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8">
            <h2 className="font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
              Joining LoveJoy is straightforward.
            </h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {onboardingSteps.map((step) => (
                <li key={step.n} className="flex gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-white">
                    {step.n}
                  </span>
                  <span className="pt-1.5 text-sm font-medium text-navy-deep">
                    {step.title}
                  </span>
                </li>
              ))}
            </ol>
            <Link
              href="/for-providers/onboarding"
              className="mt-8 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
            >
              Learn more about the onboarding process →
            </Link>
          </div>

          <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8">
            <h2 className="font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
              Flexible ways to provide care.
            </h2>
            <ul className="mt-8 space-y-5">
              {paymentModes.map((mode) => (
                <li key={mode.title} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy-soft text-navy">
                    <mode.Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy-deep">
                      {mode.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {mode.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/for-providers/participation"
              className="mt-8 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
            >
              Learn about provider participation →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="px-1 pb-2 md:px-1.5">
        <div className="bg-navy-atmosphere relative overflow-hidden rounded-[2rem] px-4 py-14 text-white md:rounded-[2.75rem] md:px-6 xl:px-8 md:py-16">
          <div
            aria-hidden
            className="bg-starfield pointer-events-none absolute inset-0 opacity-35"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-20"
          >
            <Image
              src="/images/providers-hero.png"
              alt=""
              fill
              sizes="50vw"
              className="photo-bw object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#042268] via-[#042268]/80 to-transparent" />
          </div>
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl tracking-tight md:text-5xl">
              Ready to provide care with LoveJoy?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Join a network built to support you and the patients you serve.
            </p>
            <div className="mt-8 flex justify-center">
              <ProviderCtas variant="dark" />
            </div>
            <Link
              href="/about/contact"
              className="mt-6 inline-flex text-sm font-medium text-white/85 underline decoration-white/40 underline-offset-4 transition hover:text-gold hover:decoration-gold"
            >
              Questions about joining? Contact our provider team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
