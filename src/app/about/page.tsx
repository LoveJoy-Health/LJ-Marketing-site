import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  HeartHandshake,
  Stethoscope,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "LoveJoy Health makes behavioral healthcare easier to find, easier to navigate, and easier to stay connected to.",
  path: "/about",
});

const audiences: {
  title: string;
  href: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}[] = [
  {
    title: "Individuals",
    href: "/for-individuals",
    Icon: UserRound,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Providers",
    href: "/for-providers",
    Icon: Stethoscope,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Care Navigators",
    href: "/for-navigators",
    Icon: HeartHandshake,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Organizations",
    href: "/for-organizations",
    Icon: Building2,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "Communities",
    href: "/the-porch",
    Icon: Users,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Preload blended hero portrait (CSS background, not next/image) */}
      <link rel="preload" as="image" href="/images/about-hero.png" />

      {/* 1. Hero — navy atmosphere + photo blend (same family as homepage) */}
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
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(105deg,#042268_0%,rgba(4,34,104,0.45)_22%,rgba(4,34,104,0.12)_42%,transparent_58%)]"
          />
          <div
            aria-hidden
            className="about-hero-photo-blend pointer-events-none absolute inset-x-0 bottom-0 top-[22%] z-[1] md:inset-y-0 md:left-auto md:right-0 md:top-0 md:w-[58%] lg:w-[62%]"
          />

          <div className="relative z-10">
            <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-3 pb-12 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:px-4 md:pb-14 md:pt-10 lg:pb-16">
              <div className="max-w-xl">
                <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-gold md:text-xs">
                  About
                </p>
                <h1 className="animate-fade-up delay-100 mt-3 font-display text-4xl leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
                  About LoveJoy Health.
                </h1>
                <p className="animate-fade-up delay-200 mt-5 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
                  We&apos;re building behavioral healthcare that&apos;s easier to
                  find, easier to navigate, and easier to stay connected to.
                </p>
              </div>

              <div
                className="animate-soft-rise relative mx-auto min-h-[14rem] w-full max-w-md md:min-h-[20rem] md:max-w-none lg:min-h-[22rem]"
                role="img"
                aria-label="A behavioral health clinician and patient in conversation during a supportive consultation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
              Our story
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
              Why we started LoveJoy
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Getting the right mental health support shouldn&apos;t feel like
                a maze. Too often, people know they need help — but don&apos;t
                know where to begin, who to trust, or how to stay connected once
                care starts.
              </p>
              <p>
                Providers and organizations face the same fragmentation: people
                fall through the gaps between appointments, referrals get lost,
                and support that should feel continuous instead feels
                disconnected.
              </p>
              <p>
                LoveJoy Health was created to{" "}
                <Link
                  href="/#how-it-works"
                  className="font-semibold text-[#2563EB] underline decoration-[#2563EB]/40 underline-offset-4 transition hover:text-navy hover:decoration-navy"
                >
                  change that.
                </Link>
              </p>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.75rem] md:max-w-none md:rounded-[2rem] lg:aspect-[5/6]">
            <Image
              src="/images/about-story.png"
              alt="A multi-generational family walking together outdoors, smiling and connected"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="photo-bw object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 3. What We Believe */}
      <section className="bg-[#F7F3EC] px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
              What we believe
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-navy-deep md:text-4xl lg:text-[2.75rem]">
              Mental health care is personal.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              We believe technology should remove barriers, not create them. It
              should strengthen relationships, support real conversations, and
              help the people involved in care work together more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-0">
          <div className="md:pr-12 lg:pr-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
              Mission
            </p>
            <p className="mt-4 font-display text-2xl leading-snug tracking-tight text-navy-deep md:text-3xl">
              Make behavioral health support easier to access, easier to
              navigate, and easier to continue.
            </p>
            <div
              aria-hidden
              className="mt-6 h-1 w-14 rounded-full bg-gold md:w-16"
            />
          </div>
          <div className="border-t border-border pt-10 md:border-l md:border-t-0 md:pl-12 md:pt-0 lg:pl-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
              Vision
            </p>
            <p className="mt-4 font-display text-2xl leading-snug tracking-tight text-navy-deep md:text-3xl">
              A future where mental health care is within reach for everyone who
              needs it—and support stays with them.
            </p>
            <div
              aria-hidden
              className="mt-6 h-1 w-14 rounded-full bg-gold md:w-16"
            />
          </div>
        </div>
      </section>

      {/* 5. Who We Serve */}
      <section className="bg-white px-3 pb-16 md:px-4 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
              Who we serve
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
              We work alongside individuals, providers, organizations, and
              communities to create a more connected behavioral health
              experience.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {audiences.map(({ title, href, Icon, iconBg, iconColor }) => (
              <div key={title} className="flex flex-col">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg} ${iconColor}`}
                >
                  <Icon className="h-6 w-6" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-deep">
                  {title}
                </h3>
                <Link
                  href={href}
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] transition hover:text-navy"
                >
                  Learn more
                  <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA band */}
      <section className="bg-[#EAF2FF] px-3 py-14 md:px-4 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              Care that stays with you.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              We&apos;re committed to building tools that help people find the
              right support, stay engaged in their journey, and feel less alone
              along the way.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:shrink-0">
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
            >
              Learn about our approach
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/about/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Contact LoveJoy
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
