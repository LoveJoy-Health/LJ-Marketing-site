"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Download, Maximize2, Minimize2 } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { LoveJoyLogo } from "@/components/LoveJoyLogo";
import { advisors, leadership, type TeamMember } from "@/lib/team";
import { siteConfig } from "@/lib/site";

type Slide = {
  kicker: string;
  title: string;
  render: () => ReactNode;
};

const apps = [
  {
    name: "Patient application",
    body: "Access, assessments, telehealth, messaging, Osiris, and The Porch.",
    image: "/images/homepage-mockup.png",
    alt: "LoveJoy patient application",
  },
  {
    name: "Patient portal",
    body: "Web front door for directory, scheduling, appointments, and care-team messaging.",
    image: "/images/individuals-hero.png",
    alt: "Person using LoveJoy on the web",
  },
  {
    name: "Clinician application",
    body: "Scheduling, visits, documentation, and assessment assignment.",
    image: "/images/providers-hero.png",
    alt: "Clinicians using the LoveJoy provider tools",
  },
  {
    name: "Care management",
    body: "Caseload, outreach, and social needs.",
    image: "/images/navigators-hero.png",
    alt: "Care manager coordinating support",
  },
  {
    name: "Organization portal",
    body: "Roster, programs, and operational and outcome reporting.",
    image: "/images/organizations-hero.png",
    alt: "Organization leaders reviewing program data",
  },
] as const;

function DeckPortrait({ person }: { person: TeamMember }) {
  return (
    <article className="flex flex-col">
      <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-gold md:h-24 md:w-24">
        {person.imageSrc ? (
          <Image
            src={person.imageSrc}
            alt={person.imageAlt ?? person.name}
            fill
            className="photo-bw object-cover object-top"
            sizes="96px"
          />
        ) : null}
      </div>
      <h3 className="mt-3 text-sm font-semibold text-navy-deep">{person.name}</h3>
      <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-navy">
        {person.title}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-muted">{person.bio}</p>
    </article>
  );
}

function SlideChrome({
  index,
  children,
  tone = "light",
  scroll = false,
}: {
  index: number;
  children: ReactNode;
  tone?: "light" | "navy";
  scroll?: boolean;
}) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <div
      className={`slide-chrome relative flex h-full flex-col p-5 md:p-8 lg:p-10 print:max-h-none print:min-h-0 print:overflow-visible ${
        scroll
          ? "max-h-[min(78vh,56rem)] min-h-[34rem] overflow-y-auto md:min-h-[40rem]"
          : "min-h-[34rem] overflow-hidden md:min-h-[38rem]"
      } ${tone === "navy" ? "bg-navy-atmosphere text-white" : "bg-white text-navy-deep"}`}
    >
      <div
        className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold md:h-10 md:w-10 ${
          tone === "navy"
            ? "bg-gold text-navy-deep"
            : "bg-navy text-gold"
        }`}
      >
        {n}
      </div>
      {children}
    </div>
  );
}

const slides: Slide[] = [
  {
    kicker: "LoveJoy Health",
    title: "The operating system for behavioral health care.",
    render: () => (
      <SlideChrome index={0} tone="navy">
        <div
          aria-hidden
          className="bg-starfield pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[52%] max-lg:hidden">
          <Image
            src="/images/lady-daughter.png"
            alt=""
            fill
            className="photo-bw object-cover object-[center_20%] opacity-80"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#042268] via-[#042268]/55 to-transparent" />
        </div>
        <div className="relative z-10 flex max-w-xl flex-1 flex-col justify-center">
          <LoveJoyLogo className="h-8 w-auto md:h-9" />
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            LoveJoy Health
          </p>
          <h2 className="mt-3 font-display text-3xl leading-[1.1] tracking-tight md:text-5xl">
            The operating system for{" "}
            <span className="text-gold">behavioral health care.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/80 md:text-base">
            We coordinate the journey from referral to lasting engagement. The
            electronic health record remains the system of record. LoveJoy
            Health, Inc. is a Medicare behavioral health provider organization.
          </p>
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
            lovejoy.health — Houston
          </p>
        </div>
      </SlideChrome>
    ),
  },
  {
    kicker: "The problem",
    title: "A large share of patients referred to behavioral health never complete an initial visit.",
    render: () => (
      <SlideChrome index={1}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
          The problem
        </p>
        <h2 className="mt-2 max-w-3xl font-display text-2xl leading-tight tracking-tight md:text-4xl">
          A large share of patients referred to behavioral health{" "}
          <span className="text-navy">never complete an initial visit.</span>
        </h2>
        <div className="mt-8 grid flex-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ul className="space-y-5">
            {[
              {
                value: "55%",
                body: "of referred patients completed a behavioral health appointment within 90 days (BMC Primary Care, 2026; 8,959 patients).",
              },
              {
                value: "20–50%",
                body: "Mental health no-show rates, versus about 10–18% in primary care.",
              },
            ].map((stat) => (
              <li key={stat.value} className="flex items-start gap-4">
                <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-navy px-1 text-center font-display text-lg leading-none whitespace-nowrap text-white">
                  {stat.value}
                </span>
                <p className="pt-3 text-sm leading-relaxed text-muted">{stat.body}</p>
              </li>
            ))}
          </ul>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">
              Referral journey
            </p>
            <ol className="space-y-2">
              {[
                { label: "Referred", width: "100%" },
                { label: "Booked", width: "82%" },
                { label: "Attended", width: "64%" },
                { label: "Ongoing care", width: "48%" },
              ].map((row) => (
                <li key={row.label}>
                  <div
                    className="rounded-md bg-navy px-3 py-2.5 text-sm font-semibold text-white"
                    style={{ width: row.width }}
                  >
                    {row.label}
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Schematic of leakage — not LoveJoy outcomes. The 55% figure is
              published research, not a LoveJoy result.
            </p>
          </div>
        </div>
        <p className="mt-6 border-t border-border pt-4 text-sm font-medium text-navy">
          This is an access and continuity failure — with implications for
          revenue, quality measurement, and cost of care.
        </p>
      </SlideChrome>
    ),
  },
  {
    kicker: "The interval",
    title: "Existing systems optimize the encounter. They do not manage the interval between encounters.",
    render: () => (
      <SlideChrome index={2}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
          The interval
        </p>
        <h2 className="mt-2 max-w-4xl font-display text-2xl leading-tight tracking-tight md:text-3xl lg:text-4xl">
          Existing systems optimize the encounter. They do not manage the
          interval between encounters.
        </h2>
        <div className="mt-8 grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "EHR",
              body: "Documentation, orders, and billing for the visit.",
            },
            {
              title: "Telehealth & messaging",
              body: "The synchronous session and the inbox.",
            },
            {
              title: "LoveJoy",
              body: "Outreach, assessments, care management, between-visit engagement, and reporting — adjacent to the chart.",
              featured: true,
            },
            {
              title: "Consumer apps",
              body: "Direct-to-consumer therapy and content, without an organizational care model.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-5 ${
                "featured" in card
                  ? "bg-navy text-white ring-2 ring-gold"
                  : "bg-navy-soft"
              }`}
            >
              <h3
                className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                  "featured" in card ? "text-gold" : "text-navy"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  "featured" in card ? "text-white/85" : "text-muted"
                }`}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-xl bg-navy px-4 py-3 text-sm font-semibold text-white">
          LoveJoy sits adjacent to the EHR. It does not replace it.
        </p>
      </SlideChrome>
    ),
  },
  {
    kicker: "The platform",
    title: "One platform for clinicians, care managers, patients, and administrators.",
    render: () => (
      <SlideChrome index={3}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
          The platform
        </p>
        <h2 className="mt-2 max-w-4xl font-display text-2xl leading-tight tracking-tight md:text-3xl">
          One platform for the clinicians, care managers, patients, and
          administrators responsible for behavioral health.
        </h2>
        <ol className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-navy md:text-[11px]">
          {[
            "Referral & access",
            "Treatment",
            "Care management",
            "Between-visit engagement",
            "Outcomes reporting",
          ].map((step, i, arr) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-full bg-navy-soft px-3 py-2">{step}</span>
              {i < arr.length - 1 ? (
                <span className="hidden text-gold sm:inline" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              role: "Patient",
              body: "Enter care, complete assessments, attend visits, stay engaged between appointments.",
            },
            {
              role: "Clinician",
              body: "Visit workflow, documentation, assessment assignment, and social-need handoff.",
            },
            {
              role: "Care manager",
              body: "Who is overdue, missed, or blocked — outreach and social needs.",
            },
            {
              role: "Organization",
              body: "Roster, programs, and reporting on access, continuity, and outcomes.",
            },
          ].map((col) => (
            <div key={col.role} className="rounded-2xl bg-navy-soft p-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                {col.role}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{col.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm font-medium text-navy">
          Contract value is tied to access, continuity, and measurable clinical
          and social outcomes.
        </p>
      </SlideChrome>
    ),
  },
  {
    kicker: "Product",
    title: "Production applications on a shared clinical record.",
    render: () => (
      <SlideChrome index={4}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
          Product
        </p>
        <h2 className="mt-2 font-display text-2xl leading-tight tracking-tight md:text-3xl">
          Production applications on a shared clinical record.
        </h2>
        <div className="mt-6 grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {apps.map((app) => (
            <article
              key={app.name}
              className="overflow-hidden rounded-2xl border border-border bg-navy-soft"
            >
              <div className="relative h-28">
                <Image
                  src={app.image}
                  alt={app.alt}
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
              <div className="p-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-navy">
                  {app.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {app.body}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted">
          Osiris and The Porch are continuity features on the patient
          application. The patient portal is the web front door for access.
        </p>
      </SlideChrome>
    ),
  },
  {
    kicker: "Customers",
    title: "We start with community behavioral health organizations.",
    render: () => (
      <SlideChrome index={5}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
          Customers
        </p>
        <h2 className="mt-2 font-display text-2xl leading-tight tracking-tight md:text-3xl">
          We start with community behavioral health organizations.
        </h2>
        <div className="mt-8 grid flex-1 gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-2xl bg-navy p-6 text-white md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Start here
            </p>
            <p className="mt-3 font-display text-2xl">
              FQHCs, CCBHCs, and community mental health organizations.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Coordination is a condition of payment and certification. They
              already employ the care team and lose people between referral and
              ongoing care.
            </p>
            <p className="mt-5 text-sm">
              <strong className="text-gold">Buyer.</strong> COO, behavioral
              health director, or clinical director.
            </p>
            <p className="mt-2 text-sm">
              <strong className="text-gold">First deployment.</strong> One
              defined population with referral or continuity leakage. The EHR is
              unchanged.
            </p>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
              Expand later
            </p>
            <p className="mt-2 text-sm text-muted">Same product. Larger contract.</p>
            <ul className="mt-5 space-y-3 text-sm font-medium text-navy-deep">
              <li>Health-system behavioral health service lines</li>
              <li>Health plans</li>
              <li>Employers and universities</li>
            </ul>
          </div>
        </div>
        <p className="mt-5 rounded-xl bg-gold px-4 py-3 text-sm font-semibold text-navy-deep">
          Four markets on equal footing would mean the customer is not chosen.
          Community organizations are the beachhead.
        </p>
      </SlideChrome>
    ),
  },
  {
    kicker: "Market",
    title: "Demand, workforce constraint, and outcome accountability are simultaneous.",
    render: () => (
      <SlideChrome index={6}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
          Market
        </p>
        <h2 className="mt-2 max-w-3xl font-display text-2xl leading-tight tracking-tight md:text-3xl">
          Demand, workforce constraint, and outcome accountability are
          simultaneous.
        </h2>
        <div className="mt-8 grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: "1,356",
              body: "HRSA Health Center Program awardees (UDS 2025)",
            },
            {
              value: "539",
              body: "Certified Community Behavioral Health Clinics (National Council, year-end 2025)",
            },
            {
              value: "2,500+",
              body: "Community mental health centers (NACHC / SAMHSA; overlap with CCBHCs not de-duplicated)",
            },
            {
              value: "~$80–100B",
              body: "U.S. behavioral health services market, 2026 (source-dependent)",
            },
          ].map((stat) => (
            <div key={stat.value} className="rounded-2xl bg-navy-soft p-5">
              <p className="font-display text-3xl text-navy md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{stat.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-xl bg-gold-soft px-4 py-3 text-sm font-medium text-navy-deep">
          Software spend is a subset of services spend. LoveJoy sells to
          community delivery organizations first.
        </p>
      </SlideChrome>
    ),
  },
  {
    kicker: "Commercial model",
    title: "Organizations license the platform. LoveJoy also bills Medicare for care delivered on it.",
    render: () => (
      <SlideChrome index={7}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
          Commercial model
        </p>
        <h2 className="mt-2 max-w-4xl font-display text-2xl leading-tight tracking-tight md:text-3xl">
          Organizations license the platform. LoveJoy also bills Medicare for
          care delivered on it.
        </h2>
        <div className="mt-8 grid flex-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-navy p-6 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Growth engine
            </p>
            <h3 className="mt-2 font-display text-2xl">Platform license</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Annual subscription and implementation for patient, clinician,
              care-management, and organization applications. Additional sites
              expand on the same license.
            </p>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">
              Proof engine
            </p>
            <h3 className="mt-2 font-display text-2xl text-navy-deep">
              Medicare care
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              LoveJoy bills Medicare for behavioral health furnished by
              enrolled clinicians on the same software. That demonstrates the
              workflow is operational — it is not the company&apos;s growth
              engine.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm font-semibold text-navy">
          Software is what organizations buy. Medicare billing proves the
          clinical workflow runs.
        </p>
      </SlideChrome>
    ),
  },
  {
    kicker: "Implementation",
    title: "We start with one population and prove the improvement in 90 days.",
    render: () => (
      <SlideChrome index={8}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
          Implementation
        </p>
        <h2 className="mt-2 font-display text-2xl leading-tight tracking-tight md:text-3xl">
          One population. 90 days. Prove the improvement.
        </h2>
        <div className="mt-8 grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              n: "1",
              when: "Weeks 1–2",
              title: "Scope",
              body: "Define the referred population, map the workflow, train the team. EHR unchanged.",
            },
            {
              n: "2",
              when: "Weeks 3–10",
              title: "Run workflow",
              body: "Referral, scheduling, attendance, assessment, outreach, and status back to the referring clinician.",
            },
            {
              n: "3",
              when: "Weeks 11–13",
              title: "Measure",
              body: "Referral completion, days to first appointment, attendance, continuation at 30 days.",
            },
            {
              n: "4",
              when: "Week 14+",
              title: "Expand",
              body: "Additional clinics and service lines under the same license.",
            },
          ].map((step) => (
            <div key={step.n} className="rounded-2xl bg-navy-soft p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
                {step.when}
              </p>
              <h3 className="mt-2 font-display text-xl text-navy-deep">
                {step.n}. {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm font-semibold text-navy">
          Low lift. EHR unchanged. Expansion is the outcome of proof.
        </p>
      </SlideChrome>
    ),
  },
  {
    kicker: "Current status",
    title: "Production software, Medicare enrollment, and CMS ACCESS participation.",
    render: () => (
      <SlideChrome index={9} scroll>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
          Current status
        </p>
        <h2 className="mt-2 font-display text-2xl leading-tight tracking-tight md:text-3xl">
          Production software, Medicare enrollment, and CMS ACCESS
          participation.
        </h2>
        <div className="mt-8 grid flex-1 gap-4 sm:grid-cols-3">
          {[
            {
              label: "Software",
              status: "Live",
              body: "Patient application and portal, clinician, care management, and organization applications — including Osiris and The Porch.",
            },
            {
              label: "Medicare",
              status: "Enrolled",
              body: "Behavioral health provider organization (NPI 1124868229). Licensed clinical social worker on panel. Texas Medicaid in process.",
            },
            {
              label: "CMS ACCESS",
              status: "Participant",
              body: "CMS Innovation Center ACCESS Model, behavioral health track. Outcomes-aligned Medicare payment — not a software contract.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-border p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
                {item.label}
              </p>
              <p className="mt-2 font-display text-2xl text-navy-deep">
                {item.status}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
          Live products
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Patient application",
              links: [
                { label: "iOS", href: siteConfig.appStore.ios },
                { label: "Android", href: siteConfig.appStore.android },
              ],
            },
            {
              name: "Patient portal",
              links: [
                { label: "patients.lovejoy.health", href: siteConfig.patientPortalUrl },
              ],
            },
            {
              name: "Clinician web",
              links: [
                { label: "providers.lovejoy.health", href: siteConfig.providerPortalUrl },
              ],
            },
            {
              name: "Clinician application",
              links: [
                { label: "iOS", href: siteConfig.providerAppStore.ios },
                { label: "Android", href: siteConfig.providerAppStore.android },
              ],
            },
            {
              name: "Care management",
              links: [
                {
                  label: "navigators.lovejoy.health",
                  href: siteConfig.navigatorPortalUrl,
                },
              ],
            },
            {
              name: "Organization portal",
              links: [
                {
                  label: "organizations.lovejoy.health",
                  href: siteConfig.organizationPortalUrl,
                },
              ],
            },
          ].map((product) => (
            <li key={product.name} className="rounded-xl bg-navy-soft px-3 py-2.5">
              <p className="text-xs font-semibold text-navy-deep">{product.name}</p>
              <p className="mt-1 flex flex-wrap gap-x-2 gap-y-0.5 text-xs">
                {product.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-navy underline-offset-2 hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted">
          Next evidence: contracted community organizations and patients through
          the workflow. Those are not claimed here.
        </p>
      </SlideChrome>
    ),
  },
  {
    kicker: "Leadership",
    title: "Experience in payer operations, provider delivery, and behavioral health growth.",
    render: () => (
      <SlideChrome index={10} scroll>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
          Leadership
        </p>
        <h2 className="mt-2 font-display text-2xl leading-tight tracking-tight md:text-3xl">
          Leadership at the intersection of healthcare, technology, and
          operations.
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {leadership.map((person) => (
            <DeckPortrait key={person.name} person={person} />
          ))}
        </div>
      </SlideChrome>
    ),
  },
  {
    kicker: "Advisors",
    title: "Clinical and strategic advisors.",
    render: () => (
      <SlideChrome index={11} scroll>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
          Advisors
        </p>
        <h2 className="mt-2 font-display text-2xl leading-tight tracking-tight md:text-3xl">
          Clinical and strategic advisors.
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((person) => (
            <DeckPortrait key={person.name} person={person} />
          ))}
        </div>
      </SlideChrome>
    ),
  },
  {
    kicker: "Get started",
    title: "Organizations license the platform. Price follows organization size.",
    render: () => (
      <SlideChrome index={12}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
          Get started
        </p>
        <h2 className="mt-2 font-display text-2xl leading-tight tracking-tight md:text-3xl">
          Organizations license the platform. First contract is one referred
          population.
        </h2>
        <div className="mt-8 grid flex-1 gap-3 md:grid-cols-3">
          {[
            { label: "Single-site clinic", range: "$18,000–$36,000" },
            { label: "Multi-site provider", range: "$48,000–$96,000" },
            { label: "Health system / large", range: "$120,000–$240,000" },
          ].map((tier, i) => (
            <div
              key={tier.label}
              className={`rounded-2xl p-5 ${
                i === 2 ? "bg-gold text-navy-deep" : "bg-navy-soft"
              }`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                {tier.label}
              </p>
              <p className="mt-3 font-display text-2xl">{tier.range}</p>
              <p className="mt-2 text-xs opacity-80">Indicative annual license</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted">
          Indicative ranges pending the first signed software contracts. Plus a
          one-time implementation fee. ACCESS is Medicare payment for
          LoveJoy-furnished care — not this license.
        </p>
        <Link
          href="/about/contact"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
        >
          Talk with us
          <span aria-hidden>→</span>
        </Link>
      </SlideChrome>
    ),
  },
];

type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
};

type FullscreenDocument = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void> | void;
};

function getFullscreenElement() {
  const doc = document as FullscreenDocument;
  return document.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
}

export function StoryDeck() {
  const [index, setIndex] = useState(0);
  const [nativeFullscreen, setNativeFullscreen] = useState(false);
  const [cssFullscreen, setCssFullscreen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const labelId = useId();
  const total = slides.length;
  const slide = slides[index];
  const isFullscreen = nativeFullscreen || cssFullscreen;

  const go = useCallback(
    (nextIndex: number) => {
      setIndex(((nextIndex % total) + total) % total);
    },
    [total],
  );

  const previous = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  const toggleFullscreen = useCallback(async () => {
    const node = frameRef.current;
    if (!node) return;
    const doc = document as FullscreenDocument;
    const fsNode = node as FullscreenElement;
    const active = getFullscreenElement();

    if (cssFullscreen) {
      setCssFullscreen(false);
      return;
    }

    try {
      if (active) {
        if (document.exitFullscreen) await document.exitFullscreen();
        else doc.webkitExitFullscreen?.();
        return;
      }
      if (node.requestFullscreen) {
        await node.requestFullscreen();
        return;
      }
      if (fsNode.webkitRequestFullscreen) {
        await fsNode.webkitRequestFullscreen();
        return;
      }
      setCssFullscreen(true);
    } catch {
      setCssFullscreen(true);
    }
  }, [cssFullscreen]);

  const downloadPdf = useCallback(() => {
    window.print();
  }, []);

  useEffect(() => {
    function onFullscreenChange() {
      const active = getFullscreenElement() === frameRef.current;
      setNativeFullscreen(active);
      if (active) setCssFullscreen(false);
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (!cssFullscreen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [cssFullscreen]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && cssFullscreen) {
        setCssFullscreen(false);
        return;
      }
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        setIndex((current) => (current + 1) % total);
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        setIndex((current) => (current - 1 + total) % total);
      }
      if (event.key === "Home") {
        event.preventDefault();
        setIndex(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        setIndex(total - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cssFullscreen, total]);

  const toolbar = (
    <div className="story-deck-controls flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={toggleFullscreen}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold text-navy transition hover:border-navy/30"
      >
        {isFullscreen ? (
          <Minimize2 className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
        ) : (
          <Maximize2 className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
        )}
        {isFullscreen ? "Exit full screen" : "Full screen"}
      </button>
      <button
        type="button"
        onClick={downloadPdf}
        title="Opens the print dialog — choose Save as PDF"
        className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition ${
          isFullscreen
            ? "bg-gold text-navy-deep hover:bg-white"
            : "bg-navy text-white hover:bg-navy-deep"
        }`}
      >
        <Download className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
        Download PDF
      </button>
    </div>
  );

  return (
    <div
      ref={frameRef}
      className={`story-deck-root mx-auto max-w-7xl bg-atmosphere ${
        cssFullscreen ? "is-css-fullscreen" : ""
      }`}
    >
      <div className="story-deck-screen">
        <div className="story-deck-toolbar mb-4 flex justify-end">{toolbar}</div>
        <div className="story-deck-stage flex items-stretch gap-3 md:gap-4">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous slide"
            className="story-deck-nav my-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-md ring-1 ring-navy/10 transition hover:bg-gold"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden strokeWidth={2} />
          </button>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-labelledby={labelId}
            className={`story-deck-frame relative min-w-0 flex-1 overflow-hidden rounded-[1.75rem] shadow-[0_24px_80px_rgba(2,24,72,0.16)] md:rounded-[2.5rem] ${
              index === 0 ? "bg-navy-atmosphere" : "bg-white"
            }`}
            onTouchStart={(event) => {
              touchStartX.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              const start = touchStartX.current;
              const end = event.changedTouches[0]?.clientX;
              touchStartX.current = null;
              if (start == null || end == null) return;
              const delta = start - end;
              if (Math.abs(delta) < 48) return;
              if (delta > 0) next();
              else previous();
            }}
          >
            <div
              id={labelId}
              className="sr-only"
              aria-live="polite"
            >{`Slide ${index + 1} of ${total}: ${slide.title}`}</div>

            <div className="relative h-full">{slide.render()}</div>
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="story-deck-nav my-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-md ring-1 ring-navy/10 transition hover:bg-gold"
          >
            <ChevronRight className="h-5 w-5" aria-hidden strokeWidth={2} />
          </button>
        </div>

        <div className="story-deck-status mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p
            className={`text-sm font-medium ${
              isFullscreen ? "text-white/75" : "text-muted"
            }`}
          >
            Slide {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            <span className={`mx-2 ${isFullscreen ? "text-white/30" : "text-border"}`}>
              ·
            </span>
            {slide.kicker}
          </p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {slides.map((item, i) => (
              <button
                key={item.kicker}
                type="button"
                aria-label={`Go to slide ${i + 1}: ${item.kicker}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition ${
                  i === index
                    ? isFullscreen
                      ? "w-7 bg-gold"
                      : "w-7 bg-navy"
                    : isFullscreen
                      ? "w-2 bg-white/30 hover:bg-white/60"
                      : "w-2 bg-border hover:bg-navy/40"
                }`}
              />
            ))}
          </div>
          <p
            className={`hidden text-xs md:block ${
              isFullscreen ? "text-white/55" : "text-muted"
            }`}
          >
            Arrow keys or swipe to move
          </p>
        </div>
      </div>

      <div className="story-deck-print hidden" aria-hidden>
        {slides.map((item, i) => (
          <div key={`${i}-${item.kicker}`} className="story-deck-print-page">
            {item.render()}
          </div>
        ))}
      </div>
    </div>
  );
}
