import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Calendar,
  CalendarX,
  CheckCircle2,
  Heart,
  Headset,
  Home,
  MessageCircle,
  RotateCcw,
  Search,
  Smile,
  TriangleAlert,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { ConnectedDiagram } from "@/components/ConnectedDiagram";
import { siteConfig } from "@/lib/site";

const gapStats = [
  {
    value: "50%",
    label: "of patients stop attending after the first visit",
  },
  {
    value: "3x",
    label: "more likely to relapse without ongoing support",
  },
  {
    value: "$243B",
    label: "lost annually due to untreated mental health conditions",
  },
] as const;

const careCycleNodes: {
  label: string;
  Icon: LucideIcon;
}[] = [
  { label: "Appointment", Icon: Calendar },
  { label: "Life Happens", Icon: Users },
  {
    label: "Barriers (Transport, Housing, Cost, Time)",
    Icon: Home,
  },
  { label: "Missed Appointment", Icon: CalendarX },
  { label: "Crisis", Icon: TriangleAlert },
  { label: "ER / Hospital", Icon: Building2 },
  { label: "Back to Square One", Icon: RotateCcw },
];

const paths = [
  {
    href: "/for-individuals",
    title: "I'm looking for support",
    body: "Find care, track progress, and stay connected.",
    cta: "Get Started →",
    accent: "bg-gold text-navy-deep",
    photo: "/images/lady-daughter.png",
    photoClass: "object-[center_20%]",
    photoAlt: "Woman and child looking at a phone together",
    icon: "user" as const,
  },
  {
    href: "/for-providers",
    title: "I'm a provider",
    body: "Deliver connected care and see the whole picture.",
    cta: "Learn More →",
    accent: "bg-[#7EB6E8] text-navy-deep",
    photo: "/images/providers-hero.png",
    photoClass: "object-[center_28%]",
    photoAlt: "Clinicians collaborating at a desk over a laptop",
    icon: "stethoscope" as const,
  },
  {
    href: "/for-navigators",
    title: "I coordinate care",
    body: "Coordinate resources and remove barriers to care.",
    cta: "Learn More →",
    accent: "bg-[#9B8CF0] text-navy-deep",
    photo: "/images/navigators-hero.png",
    photoClass: "object-[center_22%]",
    photoAlt: "Care navigator in a supportive conversation with a client",
    icon: "people" as const,
  },
  {
    href: "/for-organizations",
    title: "I represent an organization",
    body: "Improve outcomes and create stronger communities.",
    cta: "Learn More →",
    accent: "bg-[#4DB6A0] text-navy-deep",
    photo: "/images/organizations-hero.png",
    photoClass: "object-[center_30%]",
    photoAlt: "Organization leaders reviewing population health data together",
    icon: "building" as const,
  },
] as const;

const connectedFeatures = [
  {
    label: "Share updates",
    accent: "bg-sky-100 text-sky-600",
    Icon: MessageCircle,
  },
  {
    label: "Coordinate care",
    accent: "bg-sky-100 text-sky-600",
    Icon: Calendar,
  },
  {
    label: "Track progress",
    accent: "bg-[#FFF4C2] text-[#B8960A]",
    Icon: TrendingUp,
  },
  {
    label: "Close gaps",
    accent: "bg-[#FFF4C2] text-[#B8960A]",
    Icon: CheckCircle2,
  },
  {
    label: "Improve outcomes",
    accent: "bg-teal-100 text-teal-700",
    Icon: Heart,
  },
] as const;

const steps = [
  {
    title: "Find Support",
    body: "Search providers and find the right fit.",
    mock: "search" as const,
  },
  {
    title: "Understand Needs",
    body: "Assessments and conversations create a complete picture.",
    mock: "assessment" as const,
  },
  {
    title: "Connect Care",
    body: "Book appointments and connect with your care team.",
    mock: "appointment" as const,
  },
  {
    title: "Stay Engaged",
    body: "Check-ins and messages keep you on track.",
    mock: "checkin" as const,
  },
  {
    title: "Measure Progress",
    body: "Track outcomes and adjust care as needed.",
    mock: "progress" as const,
  },
] as const;

const notifications: {
  title: string;
  detail: string;
  time: string;
  accent: string;
  iconClass: string;
  delayClass: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Care Team",
    detail: "New message from your navigator",
    time: "2m",
    accent: "bg-gold",
    iconClass: "text-navy-deep",
    delayClass: "animate-float",
    Icon: Users,
  },
  {
    title: "Mood Check",
    detail: "How are you feeling today?",
    time: "Now",
    accent: "bg-sky-400",
    iconClass: "text-navy-deep",
    delayClass: "animate-float-delayed",
    Icon: Smile,
  },
  {
    title: "Therapy Session",
    detail: "Tomorrow · 10:00 AM",
    time: "1h",
    accent: "bg-emerald-400",
    iconClass: "text-navy-deep",
    delayClass: "animate-float",
    Icon: Calendar,
  },
  {
    title: "Navigator Check-in",
    detail: "Weekly progress review ready",
    time: "3h",
    accent: "bg-violet-400",
    iconClass: "text-white",
    delayClass: "animate-float-delayed",
    Icon: Headset,
  },
];

function LoveJoyHeartMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 48 44" className={className} fill="none">
      <defs>
        <clipPath id="lj-heart-clip">
          <path d="M24 40.5S4.5 28.2 4.5 15.8C4.5 9.4 9.2 4.5 15.2 4.5c3.6 0 6.8 1.8 8.8 4.6 2-2.8 5.2-4.6 8.8-4.6 6 0 10.7 4.9 10.7 11.3C43.5 28.2 24 40.5 24 40.5Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#lj-heart-clip)">
        <rect x="0" y="0" width="24" height="44" fill="#042268" />
        <rect x="24" y="0" width="24" height="44" fill="#E6C200" />
      </g>
      <path
        d="M19 30c3.4-5.2 7.4-7.8 12.6-8.8-3 2-4.9 4.8-5.7 8.8-.7 1.5-2.5 2.2-4.2 1.5-1.4-.6-2.2-1.8-2.7-1.5Z"
        fill="white"
      />
    </svg>
  );
}

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function CareGapCycle() {
  const count = careCycleNodes.length;
  const step = 360 / count;
  const ringR = 38;
  const nodeR = 42;
  const arcPad = 9;

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-[30rem]"
      role="img"
      aria-label="Cycle showing how care gaps lead from appointment through barriers, missed visits, crisis, and hospital back to square one — LoveJoy Health closes the gap"
    >
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <marker
            id="care-cycle-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="4.5"
            markerHeight="4.5"
            orient="auto-start-reverse"
          >
            <path d="M0 1.2 L8.5 5 L0 8.8 Z" fill="#7EB6E8" />
          </marker>
        </defs>
        {careCycleNodes.map((_, index) => {
          const start = -90 + index * step + arcPad;
          const end = -90 + (index + 1) * step - arcPad;
          const from = polar(50, 50, ringR, start);
          const to = polar(50, 50, ringR, end);
          return (
            <path
              key={`arc-${index}`}
              d={`M ${from.x.toFixed(2)} ${from.y.toFixed(2)} A ${ringR} ${ringR} 0 0 1 ${to.x.toFixed(2)} ${to.y.toFixed(2)}`}
              fill="none"
              stroke="#8FBFED"
              strokeWidth="0.85"
              strokeDasharray="2.2 2.4"
              strokeLinecap="round"
              markerEnd="url(#care-cycle-arrow)"
            />
          );
        })}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 flex h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white px-4 text-center shadow-[0_14px_40px_rgba(2,24,72,0.14)] ring-1 ring-black/[0.04] sm:px-5 md:h-[44%] md:w-[44%]">
        <LoveJoyHeartMark className="h-8 w-9 shrink-0 sm:h-9 sm:w-10" />
        <p className="mt-2 text-[10px] leading-snug text-[#042268] sm:text-[11px] md:text-xs md:leading-relaxed">
          <span className="font-bold">LoveJoy Health</span> closes the gap with
          continuous support, navigation, and care that stays with people.
        </p>
      </div>

      {careCycleNodes.map(({ label, Icon }, index) => {
        const angle = -90 + index * step;
        const { x, y } = polar(50, 50, nodeR, angle);
        return (
          <div
            key={label}
            className="absolute z-10 flex w-[5.75rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 sm:w-[6.5rem]"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#3B82F6] shadow-[0_6px_16px_rgba(2,24,72,0.1)] ring-1 ring-black/[0.04] sm:h-10 sm:w-10">
              <Icon className="h-[1.15rem] w-[1.15rem] sm:h-5 sm:w-5" strokeWidth={1.85} />
            </span>
            <span className="text-center text-[9px] font-semibold leading-tight text-[#042268] sm:text-[10px] md:text-[11px]">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function PathIcon({ name }: { name: (typeof paths)[number]["icon"] }) {
  const common = "h-4 w-4";
  if (name === "user") {
    return (
      <svg aria-hidden viewBox="0 0 20 20" className={common} fill="none">
        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4.5 16c1.2-2.4 3-3.5 5.5-3.5s4.3 1.1 5.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "stethoscope") {
    return (
      <svg aria-hidden viewBox="0 0 20 20" className={common} fill="none">
        <path
          d="M5 3.5v5a5 5 0 0 0 10 0v-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="15" cy="12.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (name === "people") {
    return (
      <svg aria-hidden viewBox="0 0 20 20" className={common} fill="none">
        <circle cx="7" cy="6.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M2.75 15c.7-2 2-3 4.25-3s3.55 1 4.25 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12.5 12.1c1.55-.35 2.85.2 3.75 1.9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={common} fill="none">
      <path
        d="M3.5 16.5V8L10 3.5 16.5 8v8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 16.5v-5h4v5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function StepMock({ type }: { type: (typeof steps)[number]["mock"] }) {
  if (type === "search") {
    return (
      <div className="rounded-xl border border-border bg-white p-3 shadow-sm">
        <div className="flex items-center gap-2 rounded-lg bg-navy-soft px-2.5 py-2">
          <Search className="h-3.5 w-3.5 text-navy" aria-hidden />
          <span className="text-[11px] text-muted">Search providers…</span>
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="h-2 rounded bg-navy-soft" />
          <div className="h-2 w-3/4 rounded bg-navy-soft/70" />
        </div>
      </div>
    );
  }
  if (type === "assessment") {
    return (
      <div className="rounded-xl border border-border bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold text-navy-deep">
            Needs Check-in
          </span>
          <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden />
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="h-2 rounded bg-emerald-100" />
          <div className="h-2 w-2/3 rounded bg-navy-soft" />
        </div>
      </div>
    );
  }
  if (type === "appointment") {
    return (
      <div className="rounded-xl border border-border bg-white p-3 shadow-sm">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
          Upcoming
        </p>
        <p className="mt-1 text-[11px] font-semibold text-navy-deep">
          Therapy · Thu 2:30
        </p>
        <div className="mt-2 flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-sky-600" aria-hidden />
          <span className="text-[10px] text-muted">With care team</span>
        </div>
      </div>
    );
  }
  if (type === "checkin") {
    return (
      <div className="rounded-xl border border-border bg-white p-3 shadow-sm">
        <p className="text-[11px] font-semibold text-navy-deep">Care check-in</p>
        <div className="mt-2 space-y-1.5">
          <div className="ml-auto w-[85%] rounded-lg rounded-br-sm bg-navy-soft px-2 py-1.5 text-[10px] text-navy">
            How are you today?
          </div>
          <div className="w-[75%] rounded-lg rounded-bl-sm bg-gold-soft px-2 py-1.5 text-[10px] text-navy-deep">
            Feeling steadier
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-border bg-white p-3 shadow-sm">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
        Progress
      </p>
      <p className="mt-1 font-display text-2xl text-navy-deep">8</p>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy-soft">
        <div className="h-full w-[55%] rounded-full bg-gold" />
      </div>
      <p className="mt-1.5 text-[10px] text-muted">Trending better</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Preload blended hero portrait (CSS background, not next/image) */}
      <link rel="preload" as="image" href="/images/guy-hero.png" />

      {/* Hero — inset rounded navy card on white page; portrait blended into navy */}
      <section className="relative bg-white px-1 pt-2 text-white md:px-1.5 md:pt-3">
        <div className="hero-shell bg-navy-atmosphere relative overflow-hidden">
          <div
            aria-hidden
            className="bg-starfield pointer-events-none absolute inset-0 opacity-55"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(2,24,72,0.4),transparent_55%)]"
          />
          {/* Soft left wash only — keeps copy legible without burying the portrait */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(105deg,#042268_0%,rgba(4,34,104,0.45)_22%,rgba(4,34,104,0.12)_42%,transparent_58%)]"
          />

          {/* Portrait as feathered background layer (right), dissolves into navy */}
          <div
            aria-hidden
            className="hero-photo-blend pointer-events-none absolute inset-x-0 bottom-0 top-[22%] z-[1] md:inset-y-0 md:left-auto md:right-0 md:top-0 md:w-[58%] lg:w-[62%]"
          />

          <div className="relative z-10">
            <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-3 pb-12 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:px-4 md:pb-14 md:pt-10 lg:pb-16">
              <div className="max-w-xl">
                <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-gold md:text-xs">
                  Connected Behavioral Healthcare
                </p>
                <h1 className="animate-fade-up delay-100 mt-3 font-display text-4xl leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
                  Care that stays with{" "}
                  <em className="font-display italic text-gold">you.</em>
                </h1>
                <p className="animate-fade-up delay-200 mt-4 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
                  LoveJoy connects people, providers, and organizations on one
                  platform — so support is easier to find, easier to deliver, and
                  stays continuous over time.
                </p>
                <div className="animate-fade-up delay-300 mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/for-individuals"
                    className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
                  >
                    Find Support →
                  </Link>
                  <a
                    href={siteConfig.providerJoinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/35 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Join Provider Network
                  </a>
                </div>
              </div>

              <div
                className="animate-soft-rise delay-200 relative mx-auto min-h-[16rem] w-full max-w-md md:min-h-[20rem] md:max-w-none lg:min-h-[22rem]"
                role="img"
                aria-label="Young man outdoors holding a phone, looking upward with hope"
              >
                <div className="pointer-events-none absolute inset-y-2 right-0 flex w-[11.5rem] flex-col justify-center gap-2 sm:w-56 md:inset-y-4 md:-right-1 lg:-right-2">
                  {notifications.map((note, index) => {
                    const Icon = note.Icon;
                    return (
                      <div
                        key={note.title}
                        className={`${note.delayClass} rounded-2xl border border-white/15 bg-navy-deep/75 p-2.5 shadow-lg backdrop-blur-md sm:p-3 ${
                          index > 2 ? "hidden sm:block" : ""
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <span
                            className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${note.accent} ${note.iconClass}`}
                          >
                            <Icon
                              aria-hidden
                              className="h-3.5 w-3.5"
                              strokeWidth={2.25}
                            />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline justify-between gap-2">
                              <p className="truncate text-xs font-semibold text-white">
                                {note.title}
                              </p>
                              <span className="shrink-0 text-[10px] text-white/45">
                                {note.time}
                              </span>
                            </div>
                            <p className="mt-0.5 truncate text-[11px] text-white/65">
                              {note.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue at bottom center of the inset card */}
        <a
          href="#care-continues"
          aria-label="Continue to content"
          className="absolute bottom-0 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-gold text-navy-deep shadow-[0_10px_28px_rgba(2,24,72,0.28)] transition hover:brightness-105 md:h-14 md:w-14"
        >
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
          >
            <path
              d="M5 8.5 10 13.5 15 8.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      {/* Care doesn't stop — copy + stats left, care-gap cycle right */}
      <section
        id="care-continues"
        className="scroll-mt-28 bg-white px-3 py-16 md:px-4 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <h2 className="font-display text-3xl leading-[1.15] tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem] xl:text-5xl">
              Care doesn&apos;t stop when the appointment ends.
            </h2>
            <div
              aria-hidden
              className="mt-5 h-1 w-14 rounded-full bg-gold md:w-16"
            />
            <p className="mt-6 text-base leading-relaxed text-navy md:text-lg">
              Life happens in between. Missed appointments, new challenges, and
              everyday stress can get in the way. LoveJoy keeps people connected
              to support that adapts to real life.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex text-sm font-semibold text-[#2563EB] transition hover:text-navy md:text-base"
            >
              Learn more about our approach →
            </Link>

            <div className="mt-8 rounded-2xl bg-white p-4 shadow-[0_10px_32px_rgba(2,24,72,0.1)] ring-1 ring-black/[0.04] sm:p-5">
              <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0">
                {gapStats.map(({ value, label }, index) => (
                  <div
                    key={value}
                    className={`px-1 text-center sm:px-3 ${
                      index > 0
                        ? "border-t border-[#E2E8F0] pt-5 sm:border-l sm:border-t-0 sm:pt-0"
                        : ""
                    }`}
                  >
                    <dt className="font-display text-2xl font-bold tracking-tight text-[#042268] md:text-3xl">
                      {value}
                    </dt>
                    <dd className="mt-1.5 text-xs leading-snug text-[#042268]/90 md:text-[13px] md:leading-relaxed">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-3 text-center text-[11px] text-[#8A97A8] sm:text-left">
              Sources: NIH, Milliman, CDC
            </p>
          </div>

          <CareGapCycle />
        </div>
      </section>

      {/* Choose your path */}
      <section
        id="choose-path"
        className="scroll-mt-28 bg-white px-3 py-16 md:px-4 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
            Who are you?
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-navy-deep md:text-5xl">
            Choose your path. We&apos;ll meet you there.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {paths.map((path) => (
              <Link
                key={path.title}
                href={path.href}
                className="group rounded-[1.75rem] bg-white text-navy-deep shadow-[0_12px_36px_rgba(2,24,72,0.1)] ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.75rem]">
                    <Image
                      src={path.photo}
                      alt={path.photoAlt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className={`photo-bw object-cover transition duration-500 group-hover:scale-[1.03] ${path.photoClass}`}
                    />
                  </div>
                  <span
                    className={`absolute bottom-0 left-4 z-10 inline-flex h-11 w-11 translate-y-1/2 items-center justify-center rounded-full ${path.accent} shadow-[0_6px_16px_rgba(2,24,72,0.16)] ring-[3px] ring-white`}
                  >
                    <PathIcon name={path.icon} />
                  </span>
                </div>
                <div className="rounded-b-[1.75rem] px-5 pb-5 pt-8">
                  <h3 className="text-lg font-bold leading-snug text-navy-deep md:text-xl">
                    {path.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy">
                    {path.body}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-[#2563EB] transition group-hover:text-navy">
                    {path.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* One connected experience — 3-column: copy | diagram | features */}
      <section
        id="platform"
        className="scroll-mt-28 bg-white px-3 py-16 md:px-4 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_1.1fr_0.85fr] lg:gap-10 xl:gap-14">
          <div className="max-w-md lg:max-w-none">
            <p className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
              <span
                aria-hidden
                className="inline-block h-1 w-6 rounded-full bg-[#C4A000]"
              />
              Our platform
            </p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] tracking-tight text-navy-deep md:text-4xl xl:text-[2.75rem]">
              One connected experience. Many people working{" "}
              <em className="font-display italic text-[#B8960A] underline decoration-[#C4A000]/30 decoration-2 underline-offset-[0.18em]">
                together.
              </em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy md:text-[1.05rem]">
              LoveJoy brings patients, providers, navigators, and organizations
              together in one platform so care stays coordinated and people stay
              engaged—from the first step to ongoing support.
            </p>
            <Link
              href="/for-providers"
              className="mt-7 inline-flex text-sm font-semibold text-[#2563EB] transition hover:text-navy md:text-base"
            >
              See the platform in action →
            </Link>
          </div>

          <ConnectedDiagram />

          <ul className="w-full max-w-xs space-y-5 lg:max-w-none lg:justify-self-end">
            {connectedFeatures.map(({ label, accent, Icon }) => (
              <li key={label} className="flex items-center gap-3.5">
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${accent}`}
                >
                  <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden strokeWidth={2} />
                </span>
                <span className="text-base font-medium text-navy-deep md:text-[1.05rem]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Every step feels connected */}
      <section
        id="how-it-works"
        className="scroll-mt-28 bg-[linear-gradient(180deg,#ffffff_0%,#eaf2ff_12%,#eaf2ff_88%,#ffffff_100%)] px-3 py-16 md:px-4 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-gold"
              />
              How LoveJoy works
            </span>
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-navy-deep md:text-5xl">
            Every step feels connected.
          </h2>

          <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[6%] right-[6%] top-7 hidden border-t border-dashed border-navy/20 lg:block"
            />
            {steps.map((step, index) => (
              <li key={step.title} className="relative text-center">
                <span className="relative z-10 mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold font-display text-lg font-semibold text-navy-deep shadow-md">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-lg text-navy-deep md:text-xl">
                  {step.title}
                </h3>
                <div className="mx-auto mt-4 max-w-[11rem]">
                  <StepMock type={step.mock} />
                </div>
                <p className="mx-auto mt-3 max-w-[12rem] text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Healthcare is personal / mission */}
      <section
        id="mission"
        className="scroll-mt-28 bg-white px-3 py-16 md:px-4 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-gold"
                />
                Our mission
              </span>
            </p>
            <h2 className="mt-3 font-display text-3xl leading-[1.12] tracking-tight text-navy-deep md:text-5xl">
              Healthcare is personal. So is{" "}
              <em className="font-display italic text-navy underline decoration-gold decoration-2 underline-offset-[0.2em]">
                our mission.
              </em>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
              We believe everyone deserves care that feels human — especially
              communities that have been underserved for too long. LoveJoy exists
              to make compassionate, coordinated support easier to find and easier
              to stay with.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
            >
              Learn about our mission →
            </Link>
          </div>

          <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] md:rounded-[2rem]">
            <Image
              src="/images/family.png"
              alt="A multi-generational family embracing and smiling together outdoors"
              fill
              sizes="(max-width: 1024px) 90vw, 55vw"
              className="photo-bw object-cover object-center"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-1 pb-6 pt-2 md:px-1.5 md:pb-8">
        <div className="bg-navy-atmosphere relative overflow-hidden rounded-[2rem] px-3 py-14 text-white md:rounded-[2.75rem] md:px-4 md:py-16">
          <div
            aria-hidden
            className="bg-starfield pointer-events-none absolute inset-0 opacity-35"
          />
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <h2 className="max-w-xl font-display text-3xl leading-[1.12] tracking-tight md:text-5xl">
              Let&apos;s build connected care—
              <em className="font-display italic text-gold">together.</em>
            </h2>
            <div className="max-w-md">
              <p className="text-base leading-relaxed text-white/70">
                Join forward-thinking organizations bringing guided behavioral
                healthcare to the communities they serve.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
                >
                  Download Our Apps →
                </Link>
                <Link
                  href="/about/contact"
                  className="rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
