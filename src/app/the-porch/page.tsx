import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Heart, MessageCircle, Shield, Users, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "The Porch",
  description:
    "The Porch is LoveJoy’s peer community — a warm space to connect with others who understand, beyond the appointment.",
  path: "/the-porch",
});

const whoItsFor: { title: string; body: string }[] = [
  {
    title: "Anyone looking for connection",
    body: "Whether you’re just starting care or further along, community can make the journey feel less lonely.",
  },
  {
    title: "People between visits",
    body: "Share small wins, ask gentle questions, and feel supported on ordinary — and hard — days.",
  },
  {
    title: "Those who want peer support",
    body: "Talk with others who get it — without replacing your clinical care team.",
  },
];

const howItHelps: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Feel less alone",
    body: "See that others are navigating similar moments — and celebrate progress together.",
    Icon: Users,
  },
  {
    title: "Share at your pace",
    body: "Post when you’re ready. Listen when you need quiet company. There’s no pressure to perform.",
    Icon: MessageCircle,
  },
  {
    title: "Stay engaged with care",
    body: "Community sits alongside check-ins, messages, and appointments in the LoveJoy app.",
    Icon: Heart,
  },
];

function PorchFeedPreview() {
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
    <div className="relative mx-auto w-[12rem] overflow-hidden rounded-[1.75rem] border-[5px] border-navy-deep bg-white shadow-[0_24px_50px_rgba(2,24,72,0.2)] sm:w-[13.5rem]">
      <div className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-navy-deep" />
      <div className="min-h-[24rem] bg-gradient-to-b from-[#F7F1E8] to-white px-3 pb-4 pt-6">
        <p className="text-center font-display text-base text-navy-deep">
          The Porch
        </p>
        <div className="mt-2 flex gap-1.5 overflow-hidden">
          {["Peer support", "Wins", "Check-ins"].map((chip) => (
            <span
              key={chip}
              className="shrink-0 rounded-full bg-white px-2 py-0.5 text-[9px] font-medium text-navy shadow-sm ring-1 ring-navy/10"
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-3 space-y-2.5">
          {posts.map((post) => (
            <div
              key={post.name}
              className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-black/[0.04]"
            >
              <div className="flex items-center gap-1.5">
                <span
                  className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold ${post.accent}`}
                >
                  {post.initial}
                </span>
                <p className="text-[11px] font-semibold text-navy-deep">
                  {post.name}
                </p>
                <span className="ml-auto text-[9px] text-muted">{post.time}</span>
              </div>
              <p className="mt-1.5 text-[10px] leading-snug text-navy/80">
                {post.message}
              </p>
              <div className="mt-1.5 flex items-center gap-2 text-[9px] text-muted">
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

export default function ThePorchPage() {
  return (
    <>
      <section className="bg-white px-3 pb-14 pt-6 md:px-4 md:pb-20 md:pt-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
              The Porch
            </p>
            <h1 className="mt-3 max-w-xl font-display text-4xl leading-[1.08] tracking-tight text-navy-deep md:text-5xl lg:text-[3.25rem]">
              Care can include community, too.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              The Porch is a welcoming peer space inside LoveJoy — a place to
              connect with others who understand, share what’s on your mind, and
              feel a little less alone between appointments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/download/patient"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition hover:brightness-105"
              >
                Get started in the app
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
              className="absolute inset-6 rounded-full bg-[#F3EBE0] blur-2xl"
            />
            <PorchFeedPreview />
          </div>
        </div>
      </section>

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            What The Porch is
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Think of it as a front-porch conversation — warm, human, and optional.
            It’s peer community designed to sit alongside your care, not replace
            clinical support.
          </p>
          <ul className="mt-8 max-w-2xl space-y-3 text-base text-navy-deep">
            <li className="border-l-2 border-gold pl-4">
              Share wins, questions, and everyday moments with people who get it.
            </li>
            <li className="border-l-2 border-gold pl-4">
              Browse topics like peer support, wins, and check-ins when you need
              them.
            </li>
            <li className="border-l-2 border-gold pl-4">
              Join from the LoveJoy patient app — community where your care
              already lives.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            Who it’s for
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whoItsFor.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-atmosphere p-6 ring-1 ring-black/[0.04]"
              >
                <h3 className="text-base font-semibold text-navy-deep">
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

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            How it helps
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {howItHelps.map(({ title, body, Icon }) => (
              <div key={title} className="flex flex-col gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-navy shadow-sm ring-1 ring-black/[0.04]">
                  <Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="text-base font-semibold text-navy-deep">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 flex max-w-2xl items-start gap-2 text-sm text-muted">
            <Shield className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden />
            Community spaces are moderated with care. If you’re in crisis, please
            seek emergency help or contact a crisis line — The Porch is not a
            crisis service.
          </p>
        </div>
      </section>

      <section className="px-1 pb-2 md:px-1.5">
        <div className="overflow-hidden rounded-[2rem] bg-[#F3EBE0] px-3 py-14 md:rounded-[2.75rem] md:px-4 md:py-16">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              Ready to pull up a chair?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/80 md:text-lg">
              Explore The Porch in the LoveJoy app — or start in the patient
              portal and continue on your phone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/download/patient"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
              >
                Download the app
                <span aria-hidden>→</span>
              </Link>
              <a
                href={siteConfig.patientPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Explore in patient portal
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
