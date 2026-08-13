import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Heart,
  MessageCircle,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { StoreBadges } from "@/components/StoreBadges";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download the LoveJoy Patient App",
  description:
    "Get the LoveJoy patient app — care in one place with check-ins, messages, appointments, and support between visits.",
};

const valueProps: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Care in one place",
    body: "Appointments, messages, and your care plan — without juggling portals.",
    Icon: Calendar,
  },
  {
    title: "Check-ins that help",
    body: "Simple mood and wellness prompts so you can notice patterns over time.",
    Icon: Heart,
  },
  {
    title: "Stay connected",
    body: "Message your care team and get support between visits when you need it.",
    Icon: MessageCircle,
  },
  {
    title: "Guidance & community",
    body: "Reflect with Osiris and connect with peers on The Porch — in the same app.",
    Icon: Sparkles,
  },
];

function HomePreview() {
  return (
    <div className="relative mx-auto w-[12rem] overflow-hidden rounded-[1.75rem] border-[5px] border-navy-deep bg-white shadow-[0_24px_50px_rgba(2,24,72,0.22)] sm:w-[13.5rem]">
      <div className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-navy-deep" />
      <div className="min-h-[24rem] bg-[#F4F7FC] px-3.5 pb-4 pt-7">
        <p className="text-[10px] text-muted">Good morning,</p>
        <p className="font-display text-xl text-navy-deep">Maya</p>
        <p className="mt-3 text-[11px] font-semibold text-navy">
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
        <div className="mt-3 rounded-xl bg-navy p-3 text-white">
          <p className="text-[9px] uppercase tracking-wide text-[#B8960A]">
            Upcoming
          </p>
          <p className="mt-0.5 text-[12px] font-semibold">Therapy · Thu 2:30</p>
          <p className="text-[10px] text-white/70">With Dr. Rivera</p>
        </div>
        <div className="mt-3 space-y-1.5">
          <p className="text-[10px] font-semibold text-navy">Today</p>
          {["Mood check-in", "Evening walk", "Journal 5 min"].map((task) => (
            <div
              key={task}
              className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-2 text-[11px] text-navy shadow-sm ring-1 ring-black/[0.03]"
            >
              <span className="h-3 w-3 rounded-full border border-navy/30" />
              {task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DownloadPatientPage() {
  return (
    <>
      <section className="bg-white px-3 pb-14 pt-6 md:px-4 md:pb-20 md:pt-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
              LoveJoy patient app
            </p>
            <h1 className="mt-3 max-w-xl font-display text-4xl leading-[1.08] tracking-tight text-navy-deep md:text-5xl lg:text-[3.25rem]">
              Your care, in your pocket.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Download the LoveJoy app to find support, stay connected with your
              care team, and keep moving forward between visits — all in one
              place.
            </p>
            <div className="mt-8">
              <StoreBadges
                iosUrl={siteConfig.appStore.ios}
                androidUrl={siteConfig.appStore.android}
              />
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <Shield className="h-4 w-4 text-navy" aria-hidden />
              Private, secure, and built for real care journeys.
            </p>
            <a
              href={siteConfig.patientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
            >
              Prefer the web? Open the patient portal →
            </a>
          </div>
          <div className="relative mx-auto">
            <div
              aria-hidden
              className="absolute inset-8 rounded-full bg-gold/30 blur-3xl"
            />
            <HomePreview />
          </div>
        </div>
      </section>

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            Everything you need between visits.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            LoveJoy brings appointments, messages, check-ins, and supportive
            tools together — so care feels continuous, not fragmented.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {valueProps.map(({ title, body, Icon }) => (
              <div key={title} className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy-soft text-navy">
                  <Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-navy-deep">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-1 pb-2 md:px-1.5">
        <div className="bg-navy-atmosphere relative overflow-hidden rounded-[2rem] px-3 py-14 text-white md:rounded-[2.75rem] md:px-4 md:py-16">
          <div
            aria-hidden
            className="bg-starfield pointer-events-none absolute inset-0 opacity-35"
          />
          <div className="relative mx-auto max-w-3xl text-left md:text-center">
            <h2 className="font-display text-3xl tracking-tight md:text-5xl">
              Ready to get started?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 md:mx-auto md:text-lg">
              Grab the app, explore providers, or continue where you left off in
              the patient portal.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 md:justify-center">
              <StoreBadges
                iosUrl={siteConfig.appStore.ios}
                androidUrl={siteConfig.appStore.android}
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-3 md:justify-center">
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
                href="/for-individuals"
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
              >
                Learn more for individuals
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/60 md:text-center">
              Looking for the provider app?{" "}
              <Link
                href="/download/provider"
                className="font-medium text-gold underline decoration-gold/50 underline-offset-4 transition hover:decoration-gold"
              >
                Download LoveJoy Provider
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
