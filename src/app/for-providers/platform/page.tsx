import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  Activity,
  Building2,
  Calendar,
  ClipboardList,
  HeartPulse,
  Laptop,
  MessageSquare,
  Smartphone,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import { StoreBadges } from "@/components/StoreBadges";
import {
  ProviderInteriorCtaBand,
  ProviderInteriorHero,
  ProviderRelatedNav,
} from "@/components/ProviderInterior";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Provider Platform",
  description:
    "Explore LoveJoy for providers — portal and app tools for scheduling, telehealth, documentation, messaging, and between-visit insights.",
  path: "/for-providers/platform",
});

const workflowSteps: {
  number: string;
  title: string;
  body: string;
  Icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Prepare",
    body: "See today's schedule, review patient context, and know what needs attention before the visit.",
    Icon: Calendar,
  },
  {
    number: "02",
    title: "Deliver",
    body: "Connect through secure video and keep the session focused on care — not logistics.",
    Icon: Video,
  },
  {
    number: "03",
    title: "Document",
    body: "Complete notes, care plans, and follow-ups without leaving your workflow.",
    Icon: ClipboardList,
  },
  {
    number: "04",
    title: "Stay connected",
    body: "Message patients, review check-ins, and stay aware of what happens between visits.",
    Icon: MessageSquare,
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

const surfaces: {
  title: string;
  body: string;
  Icon: LucideIcon;
  cta: { href: string; label: string; external?: boolean };
}[] = [
  {
    title: "Provider Portal",
    body: "Run your day from the web — schedule, documentation, messaging, and patient context in one place.",
    Icon: Laptop,
    cta: {
      href: siteConfig.providerPortalUrl,
      label: "Open Provider Portal",
      external: true,
    },
  },
  {
    title: "LoveJoy Provider App",
    body: "Stay productive on the go with today's schedule, secure visits, and quick access between sessions.",
    Icon: Smartphone,
    cta: { href: "/download/provider", label: "Get the Provider App" },
  },
];

export default function ProviderPlatformPage() {
  return (
    <>
      <ProviderInteriorHero
        title="Everything you need to deliver connected care."
        description="LoveJoy gives behavioral health providers HIPAA-aware tools for visits, documentation, and the moments between sessions — on the web and on mobile."
      />

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            Your practice. Wherever you need it.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {surfaces.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-soft text-navy">
                  <item.Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-2xl text-navy-deep">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {item.body}
                </p>
                {item.cta.external ? (
                  <a
                    href={item.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
                  >
                    {item.cta.label} →
                  </a>
                ) : (
                  <Link
                    href={item.cta.href}
                    className="mt-5 inline-flex text-sm font-semibold text-navy transition hover:text-navy-deep"
                  >
                    {item.cta.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <StoreBadges
              iosUrl={siteConfig.providerAppStore.ios}
              androidUrl={siteConfig.providerAppStore.android}
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            A connected care workflow
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {workflowSteps.map((step) => (
              <div key={step.number}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-white">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl text-navy-deep">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
                <span className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-soft text-navy">
                  <step.Icon className="h-4 w-4" aria-hidden strokeWidth={1.75} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              Know more than what happens in the appointment.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              See assessments, mood trends, and care activity so you can prepare
              — and follow through — with fuller context.
            </p>
            <ul className="mt-8 space-y-3">
              {insights.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-navy-soft text-navy">
                    <Icon className="h-4 w-4" aria-hidden strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium text-navy-deep">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              Spend more time on care. Less time managing it.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Tools that support the full visit cycle — before, during, and after
              — so less of your day is spent chasing logistics.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {workflowColumns.map((col) => (
                <div key={col.title}>
                  <h3 className="text-sm font-semibold text-navy-deep">
                    {col.title}
                  </h3>
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
          </div>
        </div>
      </section>

      <ProviderRelatedNav
        links={[
          {
            href: "/for-providers/participation",
            label: "Next: Participation",
          },
          { href: "/for-providers/requirements", label: "Requirements" },
        ]}
      />

      <ProviderInteriorCtaBand
        title="See LoveJoy in action."
        description="Join the network, sign in to the portal, or request a demo to walk through provider workflows with our team."
      />
    </>
  );
}
