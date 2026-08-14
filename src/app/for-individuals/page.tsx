import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Calendar,
  CheckSquare,
  FolderHeart,
  Heart,
  MessageCircle,
  Pill,
  Search,
  Shield,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { StoreBadges } from "@/components/StoreBadges";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "For Individuals",
  description:
    "Find the mental health support that feels right for you — therapy, medication support, community, and tools to stay connected with care.",
  path: "/for-individuals",
});

const valueProps: { label: string; Icon: LucideIcon }[] = [
  { label: "Your privacy is our priority", Icon: Shield },
  { label: "People-first care", Icon: Users },
  { label: "Many ways to get started", Icon: CheckSquare },
];

const goals: {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}[] = [
  {
    title: "I want someone to talk to",
    subtitle: "Therapy & counseling",
    Icon: MessageCircle,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "I need help with medication",
    subtitle: "Medication support",
    Icon: Pill,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
  },
  {
    title: "I want help with life challenges",
    subtitle: "Coaching & navigation",
    Icon: Heart,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "I want to connect with others",
    subtitle: "Peer & community support",
    Icon: Users,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "I need help beyond healthcare",
    subtitle: "Housing, transport & more",
    Icon: FolderHeart,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "I'm not sure yet",
    subtitle: "We'll help you figure it out",
    Icon: Sparkles,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

const careSteps: {
  number: string;
  title: string;
  body: string;
  Icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Find the right support",
    body: "Explore providers and care options that match what you need — at your pace.",
    Icon: Search,
  },
  {
    number: "02",
    title: "Connect with care",
    body: "Book appointments, message your team, and get started without the runaround.",
    Icon: Calendar,
  },
  {
    number: "03",
    title: "Keep moving forward",
    body: "Check-ins, mood tracking, and community keep you supported between visits.",
    Icon: Heart,
  },
];

const careFeatures: {
  title: string;
  body: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}[] = [
  {
    title: "Appointments",
    body: "Book, reschedule, and prepare for visits in one place.",
    Icon: Calendar,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "Messages",
    body: "Stay in touch with your care team between sessions.",
    Icon: MessageCircle,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Check-ins",
    body: "Simple mood and wellness prompts that help you notice patterns.",
    Icon: Heart,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
  },
  {
    title: "Your care",
    body: "See your plan, providers, and next steps at a glance.",
    Icon: FolderHeart,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Community",
    body: "Join The Porch for peer connection when you need it.",
    Icon: Users,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "Osiris",
    body: "An AI guide that helps you reflect and take the next step.",
    Icon: Sparkles,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
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

function HomePhoneMock() {
  return (
    <PhoneFrame className="z-30">
      <div className="px-3 pb-3">
        <p className="text-[10px] text-muted">Good morning,</p>
        <p className="font-display text-lg text-navy-deep">Maya</p>
        <p className="mt-3 text-[10px] font-semibold text-navy">
          How are you feeling?
        </p>
        <div className="mt-2 flex justify-between gap-1">
          {["😔", "😐", "🙂", "😊", "🤩"].map((emoji) => (
            <span
              key={emoji}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm shadow-sm ring-1 ring-black/[0.04]"
            >
              {emoji}
            </span>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-navy p-2.5 text-white">
          <p className="text-[9px] uppercase tracking-wide text-gold">
            Upcoming
          </p>
          <p className="mt-0.5 text-[11px] font-semibold">Therapy · Thu 2:30</p>
          <p className="text-[10px] text-white/70">With Dr. Rivera</p>
        </div>
        <div className="mt-3 space-y-1.5">
          <p className="text-[10px] font-semibold text-navy">Today</p>
          {["Mood check-in", "Evening walk", "Journal 5 min"].map((task) => (
            <div
              key={task}
              className="flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 text-[10px] text-navy shadow-sm ring-1 ring-black/[0.03]"
            >
              <span className="h-3 w-3 rounded-full border border-navy/30" />
              {task}
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function MessagesPhoneMock() {
  return (
    <PhoneFrame className="z-20">
      <div className="px-3 pb-3">
        <p className="font-display text-base text-navy-deep">Messages</p>
        <div className="mt-3 space-y-2">
          {[
            { name: "Dr. Rivera", preview: "See you Thursday!", time: "2m" },
            { name: "Care Team", preview: "Your plan was updated", time: "1h" },
            { name: "Osiris", preview: "Want a quick check-in?", time: "3h" },
          ].map((thread) => (
            <div
              key={thread.name}
              className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-black/[0.03]"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold text-navy-deep">
                  {thread.name}
                </p>
                <span className="text-[9px] text-muted">{thread.time}</span>
              </div>
              <p className="mt-0.5 text-[10px] text-muted">{thread.preview}</p>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function ProgressPhoneMock() {
  return (
    <PhoneFrame className="z-10">
      <div className="px-3 pb-3">
        <p className="font-display text-base text-navy-deep">Progress</p>
        <div className="mt-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/[0.03]">
          <p className="text-[10px] font-semibold text-navy">Mood trend</p>
          <svg
            aria-hidden
            viewBox="0 0 120 56"
            className="mt-2 h-14 w-full"
            fill="none"
          >
            <path
              d="M4 42 C20 40, 28 28, 40 30 S60 48, 74 28 S96 12, 116 18"
              stroke="#042268"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M4 42 C20 40, 28 28, 40 30 S60 48, 74 28 S96 12, 116 18 V56 H4 Z"
              fill="url(#moodFill)"
              opacity="0.25"
            />
            <defs>
              <linearGradient id="moodFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFE612" />
                <stop offset="100%" stopColor="#FFE612" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mt-1 text-[10px] text-muted">Trending steadier this week</p>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-black/[0.03]">
            <p className="text-[9px] text-muted">Check-ins</p>
            <p className="font-display text-xl text-navy-deep">12</p>
          </div>
          <div className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-black/[0.03]">
            <p className="text-[9px] text-muted">Streak</p>
            <p className="font-display text-xl text-navy-deep">5d</p>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function OsirisChatMock() {
  return (
    <div className="relative mx-auto w-[11rem] overflow-hidden rounded-[1.5rem] border-[5px] border-navy-deep bg-white shadow-[0_18px_40px_rgba(2,24,72,0.18)] sm:w-[12rem]">
      <div className="absolute left-1/2 top-0 z-10 h-3.5 w-16 -translate-x-1/2 rounded-b-lg bg-navy-deep" />
      <div className="min-h-[17rem] bg-gradient-to-b from-[#EFE8FF] to-white px-3 pb-3 pt-6">
        <p className="text-center text-[11px] font-semibold text-navy-deep">
          Osiris
        </p>
        <div className="mt-3 space-y-2">
          <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-white px-2.5 py-2 text-[10px] leading-snug text-navy shadow-sm">
            What&apos;s been weighing on you today?
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-navy px-2.5 py-2 text-[10px] leading-snug text-white">
            I&apos;ve been feeling overwhelmed at work.
          </div>
          <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-white px-2.5 py-2 text-[10px] leading-snug text-navy shadow-sm">
            That makes sense. Want to unpack what&apos;s driving it — or look at
            a next step?
          </div>
        </div>
      </div>
    </div>
  );
}

function PorchPhoneMock() {
  const posts = [
    {
      name: "Jordan",
      initial: "J",
      time: "2h",
      message: "Feeling less alone this week. Grateful for this space.",
      reactions: "12",
      accent: "bg-[#E8F0FF] text-navy",
    },
    {
      name: "Sam",
      initial: "S",
      time: "5h",
      message: "Small win — I made it to my walk today.",
      reactions: "28",
      accent: "bg-[#FFF6D6] text-navy-deep",
    },
    {
      name: "Avery",
      initial: "A",
      time: "1d",
      message: "Anyone else find check-ins help on hard days?",
      reactions: "9",
      accent: "bg-[#F0E8DF] text-navy",
    },
  ];

  return (
    <div className="relative mx-auto w-[11rem] overflow-hidden rounded-[1.5rem] border-[5px] border-navy-deep bg-white shadow-[0_18px_40px_rgba(2,24,72,0.18)] sm:w-[12rem]">
      <div className="absolute left-1/2 top-0 z-10 h-3.5 w-16 -translate-x-1/2 rounded-b-lg bg-navy-deep" />
      <div className="min-h-[17rem] bg-gradient-to-b from-[#F7F1E8] to-white px-2.5 pb-3 pt-5">
        <div className="flex items-center justify-between px-0.5 text-[8px] font-medium text-navy/50">
          <span>9:41</span>
          <span className="flex items-center gap-0.5">
            <span className="h-1.5 w-2.5 rounded-[1px] bg-navy/40" />
            <span className="h-2 w-1 rounded-[1px] bg-navy/40" />
          </span>
        </div>
        <p className="mt-1 text-center font-display text-[13px] text-navy-deep">
          The Porch
        </p>
        <div className="mt-2 flex gap-1 overflow-hidden">
          {["Peer support", "Wins", "Check-ins"].map((chip) => (
            <span
              key={chip}
              className="shrink-0 rounded-full bg-white px-1.5 py-0.5 text-[8px] font-medium text-navy shadow-sm ring-1 ring-navy/10"
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-2.5 space-y-2">
          {posts.map((post) => (
            <div
              key={post.name}
              className="rounded-xl bg-white p-2 shadow-sm ring-1 ring-black/[0.04]"
            >
              <div className="flex items-center gap-1.5">
                <span
                  className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[8px] font-semibold ${post.accent}`}
                >
                  {post.initial}
                </span>
                <p className="text-[10px] font-semibold text-navy-deep">
                  {post.name}
                </p>
                <span className="ml-auto text-[8px] text-muted">{post.time}</span>
              </div>
              <p className="mt-1 text-[9px] leading-snug text-navy/80">
                {post.message}
              </p>
              <div className="mt-1.5 flex items-center gap-2 text-[8px] text-muted">
                <span className="inline-flex items-center gap-0.5">
                  <Heart className="h-2.5 w-2.5 text-[#B8960A]" aria-hidden />
                  {post.reactions}
                </span>
                <span className="inline-flex items-center gap-0.5">
                  <MessageCircle className="h-2.5 w-2.5" aria-hidden />
                  Reply
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ForIndividualsPage() {
  return (
    <>
      {/* Preload blended hero portrait (CSS background, not next/image) */}
      <link rel="preload" as="image" href="/images/individuals-hero.png" />

      {/* Hero — navy atmosphere + photo blend (same family as homepage) */}
      <section className="relative bg-white px-1 pb-10 pt-2 text-white md:px-1.5 md:pb-14 md:pt-3">
        <div className="hero-shell bg-navy-atmosphere relative overflow-hidden">
          <div
            aria-hidden
            className="bg-starfield pointer-events-none absolute inset-0 opacity-55"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(2,24,72,0.4),transparent_55%)]"
          />
          {/* Soft left wash — keeps copy legible without burying the portrait */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(105deg,#042268_0%,rgba(4,34,104,0.45)_22%,rgba(4,34,104,0.12)_42%,transparent_58%)]"
          />
          <div
            aria-hidden
            className="individuals-hero-photo-blend pointer-events-none absolute inset-x-0 bottom-0 top-[22%] z-[1] md:inset-y-0 md:left-auto md:right-0 md:top-0 md:w-[58%] lg:w-[62%]"
          />

          <div className="relative z-10">
            <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-3 pb-12 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:px-4 md:pb-14 md:pt-10 lg:pb-16">
              <div className="max-w-xl">
                <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-gold md:text-xs">
                  For individuals
                </p>
                <h1 className="animate-fade-up delay-100 mt-3 font-display text-4xl leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.35rem]">
                  Find the support that feels right for{" "}
                  <em className="font-display italic text-gold">you.</em>
                </h1>
                <p className="animate-fade-up delay-200 mt-5 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
                  LoveJoy makes it easier to find care that fits — and stay
                  connected with support between visits. Therapy, coaching,
                  community, or simply someone to talk to.
                </p>
                <div className="animate-fade-up delay-300 mt-8 flex flex-wrap gap-3">
                  <a
                    href={siteConfig.findProviderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
                  >
                    Find a Provider
                    <span aria-hidden>→</span>
                  </a>
                  <Link
                    href="/download/patient"
                    className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
                  >
                    Get the LoveJoy App
                  </Link>
                </div>
                <ul className="animate-fade-up delay-400 mt-10 grid gap-4 sm:grid-cols-3">
                  {valueProps.map(({ label, Icon }) => (
                    <li key={label} className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
                        <Icon className="h-4 w-4" aria-hidden strokeWidth={1.75} />
                      </span>
                      <span className="text-sm font-medium leading-snug text-white/90">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="animate-soft-rise relative mx-auto min-h-[14rem] w-full max-w-md md:min-h-[20rem] md:max-w-none lg:min-h-[22rem]"
                role="img"
                aria-label="Woman relaxing at home with a warm drink, representing personal mental health support"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Goals */}
      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
            Not sure where to start? That&apos;s okay.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Tell us what you&apos;re looking for — we&apos;ll help you explore
            options that fit.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {goals.map((goal) => (
              <a
                key={goal.title}
                href={siteConfig.findProviderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-white p-6 text-center shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(2,24,72,0.12)]"
              >
                <span
                  className={`mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full ${goal.iconBg} ${goal.iconColor}`}
                >
                  <goal.Icon className="h-6 w-6" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug text-navy-deep">
                  {goal.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{goal.subtitle}</p>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={siteConfig.findProviderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-semibold text-[#2563EB] transition hover:text-navy"
            >
              Explore Providers →
            </a>
          </div>
        </div>
      </section>

      {/* 3. Care made easier */}
      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
            Care made easier from the first step forward.
          </h2>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8">
            <ol className="space-y-8">
              {careSteps.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold font-display text-sm font-semibold text-navy-deep shadow-md">
                      {step.number}
                    </span>
                    {step.number !== "03" ? (
                      <span
                        aria-hidden
                        className="mt-2 h-full min-h-[2rem] w-px border-l border-dashed border-navy/20"
                      />
                    ) : null}
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-2">
                      <step.Icon
                        className="h-4 w-4 text-navy"
                        aria-hidden
                        strokeWidth={1.75}
                      />
                      <h3 className="font-display text-xl text-navy-deep">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted md:text-base">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div id="download" className="scroll-mt-28">
              <div className="relative mx-auto flex h-[24rem] max-w-md items-end justify-center sm:h-[28rem] sm:max-w-lg">
                <div className="absolute left-0 top-10 hidden scale-90 rotate-[-8deg] sm:left-[4%] sm:top-8 sm:block sm:scale-95 md:left-[8%]">
                  <MessagesPhoneMock />
                </div>
                <div className="absolute right-0 top-6 hidden scale-90 rotate-[8deg] sm:right-[2%] sm:top-4 sm:block sm:scale-95 md:right-[6%]">
                  <ProgressPhoneMock />
                </div>
                <div className="relative z-30 scale-[0.95] sm:scale-100">
                  <HomePhoneMock />
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <StoreBadges />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Your care, in one place */}
      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
            Your care, in one place.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Everything you need to stay connected with support — without
            juggling apps or portals.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {careFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <span
                  className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${feature.iconBg} ${feature.iconColor}`}
                >
                  <feature.Icon
                    className="h-5 w-5"
                    aria-hidden
                    strokeWidth={1.75}
                  />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-navy-deep">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {feature.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Osiris & The Porch */}
      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-[1.75rem] bg-[#EDE6F8] p-6 md:p-8">
            <div className="grid h-full items-center gap-6 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">
                  Osiris
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
                  Support when you need a little guidance.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/80 md:text-base">
                  Osiris is your AI companion for reflection, next steps, and
                  moments when you just need somewhere to start.
                </p>
                <Link
                  href="/osiris"
                  className="mt-6 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
                >
                  Chat with Osiris →
                </Link>
              </div>
              <OsirisChatMock />
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] bg-[#F3EBE0] p-6 md:p-8">
            <div className="grid h-full items-center gap-6 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">
                  The Porch
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
                  Care can include community, too.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/80 md:text-base">
                  The Porch is a welcoming space to connect with others who
                  understand — peer support beyond the appointment.
                </p>
                <Link
                  href="/the-porch"
                  className="mt-6 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
                >
                  Explore The Porch →
                </Link>
              </div>
              <PorchPhoneMock />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Page CTA band */}
      <section className="px-1 pb-2 md:px-1.5">
        <div className="bg-navy-atmosphere relative overflow-hidden rounded-[2rem] px-3 py-14 text-white md:rounded-[2.75rem] md:px-4 md:py-16">
          <div
            aria-hidden
            className="bg-starfield pointer-events-none absolute inset-0 opacity-35"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl tracking-tight md:text-5xl">
              Ready when you are.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Find a provider, download the app, or pick up where you left off.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={siteConfig.findProviderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
              >
                Find a Provider
                <span aria-hidden>→</span>
              </a>
              <Link
                href="/download/patient"
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
              >
                Download the App
              </Link>
            </div>
            <a
              href={siteConfig.patientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-medium text-gold underline decoration-gold/60 underline-offset-4 transition hover:decoration-gold"
            >
              Already have an account? Sign in
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
