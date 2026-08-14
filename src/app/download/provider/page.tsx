import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  Calendar,
  ClipboardList,
  MessageSquare,
  Shield,
  Video,
  type LucideIcon,
} from "lucide-react";
import { StoreBadges } from "@/components/StoreBadges";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Download the LoveJoy Provider App",
  description:
    "Get the LoveJoy Provider app — today's schedule, secure visits, messaging, and patient context on the go.",
  path: "/download/provider",
});

const valueProps: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Today's schedule",
    body: "See who's next, what's due, and walk into every visit prepared.",
    Icon: Calendar,
  },
  {
    title: "Secure visits",
    body: "Join telehealth sessions and keep care moving from anywhere.",
    Icon: Video,
  },
  {
    title: "Stay connected",
    body: "Message patients and review check-ins between sessions.",
    Icon: MessageSquare,
  },
  {
    title: "Documentation support",
    body: "Keep notes and follow-ups close so less of your day is spent chasing logistics.",
    Icon: ClipboardList,
  },
];

function ProviderSchedulePreview() {
  return (
    <div className="relative mx-auto w-[12rem] overflow-hidden rounded-[1.75rem] border-[5px] border-navy-deep bg-white shadow-[0_24px_50px_rgba(2,24,72,0.22)] sm:w-[13.5rem]">
      <div className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-navy-deep" />
      <div className="min-h-[24rem] bg-[#F4F7FC] px-3.5 pb-4 pt-7">
        <p className="text-[10px] text-muted">Wednesday</p>
        <p className="font-display text-xl text-navy-deep">Today</p>
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
                <p className="text-[11px] font-semibold text-navy-deep">
                  {appt.name}
                </p>
                <span className="text-[9px] text-muted">{appt.time}</span>
              </div>
              <p className="mt-0.5 text-[10px] text-muted">{appt.type}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-navy p-3 text-white">
          <p className="text-[9px] uppercase tracking-wide text-gold">Next up</p>
          <p className="mt-0.5 text-[12px] font-semibold">
            Video visit in 12 min
          </p>
          <p className="text-[10px] text-white/70">Jordan D. · Therapy</p>
        </div>
      </div>
    </div>
  );
}

export default function DownloadProviderPage() {
  return (
    <>
      <section className="bg-white px-3 pb-14 pt-6 md:px-4 md:pb-20 md:pt-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
              LoveJoy provider app
            </p>
            <h1 className="mt-3 max-w-xl font-display text-4xl leading-[1.08] tracking-tight text-navy-deep md:text-5xl lg:text-[3.25rem]">
              Your practice, on the go.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Download the LoveJoy Provider app for today&apos;s schedule,
              secure visits, and quick access to what matters between sessions.
            </p>
            <div className="mt-8">
              <StoreBadges
                iosUrl={siteConfig.providerAppStore.ios}
                androidUrl={siteConfig.providerAppStore.android}
              />
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <Shield className="h-4 w-4 text-navy" aria-hidden />
              HIPAA-aware tools built for behavioral health workflows.
            </p>
            <a
              href={siteConfig.providerPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
            >
              Prefer the web? Open the provider portal →
            </a>
          </div>
          <div className="relative mx-auto">
            <div
              aria-hidden
              className="absolute inset-8 rounded-full bg-gold/30 blur-3xl"
            />
            <ProviderSchedulePreview />
          </div>
        </div>
      </section>

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            Care workflow, wherever you are.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Stay productive between the desk and the day — schedule, visits,
            messaging, and context in one mobile app.
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
              Ready to practice on the go?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 md:mx-auto md:text-lg">
              Grab the provider app, sign in, or join LoveJoy if you&apos;re
              new to the network.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 md:justify-center">
              <StoreBadges
                iosUrl={siteConfig.providerAppStore.ios}
                androidUrl={siteConfig.providerAppStore.android}
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-3 md:justify-center">
              <a
                href={siteConfig.providerSignInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
              >
                Provider Sign In
                <span aria-hidden>→</span>
              </a>
              <a
                href={siteConfig.providerJoinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
              >
                Join LoveJoy
              </a>
              <Link
                href="/for-providers"
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
              >
                Back to Providers
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/60 md:text-center">
              Looking for the patient app?{" "}
              <Link
                href="/download/patient"
                className="font-medium text-gold underline decoration-gold/50 underline-offset-4 transition hover:decoration-gold"
              >
                Download LoveJoy Patient
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
