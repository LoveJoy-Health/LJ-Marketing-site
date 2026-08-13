import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Heart,
  MessageCircle,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Osiris",
  description:
    "Osiris is LoveJoy’s guided AI support — a thoughtful companion for reflection, next steps, and between-visit care.",
};

const whenItHelps: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Between appointments",
    body: "When something comes up mid-week and you want a calm place to start thinking it through.",
    Icon: Clock,
  },
  {
    title: "When you’re stuck",
    body: "Osiris can help you name what’s going on and suggest a small next step — without pressure.",
    Icon: Sparkles,
  },
  {
    title: "For everyday check-ins",
    body: "Use it as a gentle companion for mood, stress, or figuring out what kind of support you need.",
    Icon: Heart,
  },
];

function OsirisChatPreview() {
  return (
    <div className="relative mx-auto w-[12rem] overflow-hidden rounded-[1.75rem] border-[5px] border-navy-deep bg-white shadow-[0_24px_50px_rgba(2,24,72,0.2)] sm:w-[13.5rem]">
      <div className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-navy-deep" />
      <div className="min-h-[24rem] bg-gradient-to-b from-[#EFE8FF] to-white px-3.5 pb-4 pt-7">
        <p className="text-center text-sm font-semibold text-navy-deep">
          Osiris
        </p>
        <p className="mt-1 text-center text-[10px] text-muted">
          Guided support
        </p>
        <div className="mt-4 space-y-2.5">
          <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-white px-3 py-2.5 text-[11px] leading-snug text-navy shadow-sm">
            What&apos;s been weighing on you today?
          </div>
          <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-navy px-3 py-2.5 text-[11px] leading-snug text-white">
            I&apos;ve been feeling overwhelmed at work.
          </div>
          <div className="max-w-[94%] rounded-2xl rounded-bl-md bg-white px-3 py-2.5 text-[11px] leading-snug text-navy shadow-sm">
            That makes sense. Want to unpack what&apos;s driving it — or look at
            a next step?
          </div>
          <div className="ml-auto max-w-[70%] rounded-2xl rounded-br-md bg-navy/10 px-3 py-2 text-[11px] font-medium text-navy">
            A next step…
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OsirisPage() {
  return (
    <>
      <section className="bg-white px-3 pb-14 pt-6 md:px-4 md:pb-20 md:pt-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
              Osiris
            </p>
            <h1 className="mt-3 max-w-xl font-display text-4xl leading-[1.08] tracking-tight text-navy-deep md:text-5xl lg:text-[3.25rem]">
              Support when you need a little guidance.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Osiris is your AI companion inside LoveJoy — built for reflection,
              clarity, and next steps between visits. Not a hype chatbot. Just a
              calm place to start.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/download/patient"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
              >
                Chat with Osiris in the app
                <span aria-hidden>→</span>
              </Link>
              <a
                href={siteConfig.patientPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Open patient portal
              </a>
            </div>
          </div>
          <div className="relative mx-auto">
            <div
              aria-hidden
              className="absolute inset-6 rounded-full bg-[#EDE6F8] blur-2xl"
            />
            <OsirisChatPreview />
          </div>
        </div>
      </section>

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            What Osiris is
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Osiris helps you pause, reflect, and move one step forward. It can
            help you explore what’s going on, prepare for a visit, or simply find
            words when things feel heavy.
          </p>
          <ul className="mt-8 max-w-2xl space-y-3 text-base text-navy-deep">
            <li className="border-l-2 border-gold pl-4">
              Guided conversations for reflection and practical next steps.
            </li>
            <li className="border-l-2 border-gold pl-4">
              Available in the LoveJoy patient experience alongside your real
              care team.
            </li>
            <li className="border-l-2 border-gold pl-4">
              Designed to support — never to replace — licensed providers.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            When it helps
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {whenItHelps.map(({ title, body, Icon }) => (
              <div key={title} className="flex flex-col gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-soft text-navy">
                  <Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="text-base font-semibold text-navy-deep">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              Privacy & human care
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Osiris is built to support your journey — with clear boundaries. It
              is not emergency care, and it doesn’t replace conversations with
              your clinician.
            </p>
          </div>
          <ul className="space-y-4">
            <li className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/[0.04]">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden />
              <div>
                <p className="font-semibold text-navy-deep">Your privacy matters</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  LoveJoy is designed with privacy and security in mind. Learn
                  more in our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-navy underline decoration-navy/30 underline-offset-2 hover:decoration-navy"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </li>
            <li className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/[0.04]">
              <MessageCircle
                className="mt-0.5 h-5 w-5 shrink-0 text-navy"
                aria-hidden
              />
              <div>
                <p className="font-semibold text-navy-deep">
                  Humans stay in the loop
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Osiris helps you get oriented. Your care team remains the place
                  for clinical decisions, diagnosis, and treatment.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="px-1 pb-2 md:px-1.5">
        <div className="overflow-hidden rounded-[2rem] bg-[#EDE6F8] px-3 py-14 md:rounded-[2.75rem] md:px-4 md:py-16">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              Ready when you need a starting point.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/80 md:text-lg">
              Open Osiris in the LoveJoy app, or continue through the patient
              portal. For providers and appointments, you can explore care
              anytime.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/download/patient"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
              >
                Get the LoveJoy App
                <span aria-hidden>→</span>
              </Link>
              <a
                href={siteConfig.findProviderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Find a Provider
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
