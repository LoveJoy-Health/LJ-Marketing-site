import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  HandHeart,
  HeartHandshake,
  MessageCircle,
  MessageCircleHeart,
  Phone,
  Rainbow,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";
import { isExternalHref, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Crisis Resources",
  description:
    "If you or someone you know is in crisis, free confidential help is available 24/7. Call or text 988, or find other trusted crisis support resources.",
};

type SupportAction = {
  href: string;
  label: string;
  note?: string;
};

type SupportCard = {
  title: string;
  description: string;
  Icon: LucideIcon;
  actions: SupportAction[];
};

const supportCards: SupportCard[] = [
  {
    title: "Veterans Crisis Line",
    description: "Confidential support for Veterans, service members, and their families.",
    Icon: HandHeart,
    actions: [
      { href: "tel:988", label: "Call 988, then press 1" },
      { href: "sms:838255", label: "Text 838255" },
      {
        href: "https://www.veteranscrisisline.net/",
        label: "Chat online",
      },
    ],
  },
  {
    title: "SAMHSA National Helpline",
    description:
      "Treatment referral and information for mental health and substance use — 24/7, free and confidential.",
    Icon: Users,
    actions: [
      {
        href: "tel:18006624357",
        label: "Call 1-800-662-HELP (4357)",
      },
      {
        href: "https://www.samhsa.gov/find-help",
        label: "samhsa.gov/find-help",
      },
    ],
  },
  {
    title: "The Trevor Project",
    description: "Crisis support for LGBTQ+ young people under 25.",
    Icon: Rainbow,
    actions: [
      { href: "tel:18664887386", label: "Call 1-866-488-7386" },
      { href: "sms:678678&body=START", label: "Text START to 678678" },
      {
        href: "https://www.thetrevorproject.org/get-help/",
        label: "Chat online",
      },
    ],
  },
  {
    title: "Crisis Text Line",
    description: "Free 24/7 text support with a trained crisis counselor.",
    Icon: MessageCircleHeart,
    actions: [
      { href: "sms:741741&body=HOME", label: "Text HOME to 741741" },
      {
        href: "https://www.crisistextline.org/",
        label: "crisistextline.org",
      },
    ],
  },
];

function ResourceLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = isExternalHref(href);
  const shared = {
    href,
    className,
    ...(external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {}),
  };

  if (external || href.startsWith("tel:") || href.startsWith("sms:")) {
    return <a {...shared}>{children}</a>;
  }

  return <Link {...shared}>{children}</Link>;
}

export default function CrisisResourcesPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-white px-3 pb-10 pt-6 lg:px-4 md:pb-12 md:pt-8">
        <div className="mx-auto max-w-screen-2xl">
          <h1 className="font-display text-4xl tracking-tight text-navy-deep md:text-5xl">
            Crisis Resources
          </h1>

          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.4fr_0.85fr] lg:gap-10">
            <div>
              <p className="text-lg font-semibold leading-snug text-navy-deep md:text-xl">
                You don&apos;t have to navigate a crisis alone.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                If you or someone you know is in immediate danger or experiencing
                a life-threatening emergency,{" "}
                <a
                  href="tel:911"
                  className="font-semibold text-navy-deep underline-offset-2 hover:underline"
                >
                  call 911
                </a>{" "}
                or go to the nearest emergency department.
              </p>
            </div>

            <aside className="rounded-2xl bg-navy-soft px-5 py-5 md:px-6 md:py-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm">
                  <Shield className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <p className="text-sm leading-relaxed text-navy-deep md:text-base">
                  <span className="font-semibold">You matter.</span> Help is
                  available, and there is hope.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 988 banner */}
      <section
        aria-labelledby="lifeline-heading"
        className="bg-navy px-3 py-10 lg:px-4 md:py-12"
      >
        <div className="mx-auto grid max-w-screen-2xl items-center gap-8 lg:grid-cols-[auto_1fr_auto] lg:gap-12">
          <div
            className="mx-auto flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-xl bg-white p-3 text-center shadow-sm md:h-32 md:w-32"
            aria-hidden
          >
            <span className="font-display text-3xl font-bold leading-none tracking-tight text-navy md:text-4xl">
              988
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase leading-tight tracking-wide text-navy/80 md:text-[10px]">
              Suicide &amp; Crisis
              <br />
              Lifeline
            </span>
          </div>

          <div className="text-center lg:text-left">
            <h2
              id="lifeline-heading"
              className="font-display text-2xl tracking-tight text-white md:text-3xl"
            >
              Need immediate emotional or mental support?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
              The 988 Suicide &amp; Crisis Lifeline is free, confidential, and
              available 24/7 for anyone in distress.
            </p>
          </div>

          <ul className="mx-auto flex w-full max-w-sm flex-col gap-4 lg:mx-0 lg:w-72">
            <li>
              <a
                href="tel:988"
                className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/15"
              >
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span>
                  <span className="block text-sm font-semibold text-white">
                    Call 988
                  </span>
                  <span className="mt-0.5 block text-xs text-white/70">
                    Talk to a trained crisis counselor
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="sms:988"
                className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/15"
              >
                <MessageCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span>
                  <span className="block text-sm font-semibold text-white">
                    Text 988
                  </span>
                  <span className="mt-0.5 block text-xs text-white/70">
                    Text with a crisis counselor
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://988lifeline.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/15"
              >
                <ExternalLink
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span>
                  <span className="block text-sm font-semibold text-white">
                    Chat with 988
                  </span>
                  <span className="mt-0.5 block text-xs text-white/70">
                    Chat online at{" "}
                    <span className="underline underline-offset-2">
                      988lifeline.org
                    </span>
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Other ways to get support */}
      <section className="bg-white px-3 py-14 lg:px-4 md:py-16">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
            Other ways to get support
          </h2>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {supportCards.map(({ title, description, Icon, actions }) => (
              <li
                key={title}
                className="flex flex-col rounded-2xl border border-border bg-white p-5 shadow-[0_1px_2px_rgba(4,34,104,0.04)] md:p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-soft text-navy">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-xl tracking-tight text-navy-deep">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {description}
                </p>
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {actions.map((action) => (
                    <li key={`${title}-${action.label}`}>
                      <ResourceLink
                        href={action.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition hover:text-navy-deep hover:underline hover:underline-offset-2"
                      >
                        {action.label}
                        {isExternalHref(action.href) ? (
                          <ExternalLink
                            className="h-3.5 w-3.5 shrink-0 opacity-60"
                            aria-hidden
                          />
                        ) : null}
                      </ResourceLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Non-emergency band */}
      <section
        aria-labelledby="non-emergency-heading"
        className="border-y border-border bg-[#EAF2FF] px-3 py-10 lg:px-4 md:py-12"
      >
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm">
              <HeartHandshake
                className="h-6 w-6"
                strokeWidth={1.75}
                aria-hidden
              />
            </span>
            <div>
              <h2
                id="non-emergency-heading"
                className="font-display text-xl tracking-tight text-navy-deep md:text-2xl"
              >
                If this isn&apos;t an emergency, but you need support
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                Sometimes you may be struggling without being in immediate
                danger. LoveJoy can help you explore ongoing behavioral health
                support.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:shrink-0">
            <ResourceLink
              href={siteConfig.findProviderUrl}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:brightness-105"
            >
              Find a Provider
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ResourceLink>
            <Link
              href="/for-individuals"
              className="inline-flex items-center gap-2 rounded-full border border-navy/25 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:border-navy/40"
            >
              Explore Support Options
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section
        aria-label="Emergency disclaimer"
        className="bg-[#FDECEC] px-3 py-6 lg:px-4 md:py-7"
      >
        <div className="mx-auto flex max-w-screen-2xl gap-3 md:gap-4">
          <AlertTriangle
            className="mt-0.5 h-5 w-5 shrink-0 text-[#C62828]"
            strokeWidth={2}
            aria-hidden
          />
          <p className="text-sm leading-relaxed text-navy-deep md:text-base">
            <span className="font-semibold">
              LoveJoy Health is not an emergency service.
            </span>{" "}
            LoveJoy does not provide emergency response services. If you believe
            you or another person is in immediate danger,{" "}
            <a
              href="tel:911"
              className="font-semibold underline-offset-2 hover:underline"
            >
              call 911
            </a>{" "}
            or go to the nearest emergency department.
          </p>
        </div>
      </section>
    </>
  );
}
