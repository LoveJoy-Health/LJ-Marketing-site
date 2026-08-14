import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import {
  Activity,
  BadgeCheck,
  ClipboardList,
  FileCheck2,
  MessageSquare,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  ProviderInteriorCtaBand,
  ProviderInteriorHero,
  ProviderRelatedNav,
} from "@/components/ProviderInterior";

export const metadata: Metadata = buildPageMetadata({
  title: "Provider Requirements",
  description:
    "Who can join LoveJoy, what credentials we look for, and how to prepare for provider review.",
  path: "/for-providers/requirements",
});

const audiences: {
  title: string;
  body: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}[] = [
  {
    title: "Therapists & Counselors",
    body: "LCSW, LPC, LMFT and other independently licensed clinicians.",
    Icon: MessageSquare,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Psychiatric Providers",
    body: "Psychiatrists, PMH-NPs and other prescribing professionals.",
    Icon: Stethoscope,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "Psychologists",
    body: "Assessment, therapy and specialized behavioral care.",
    Icon: Activity,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    title: "Coaches & Support Professionals",
    body: "Approved non-clinical support roles across the care journey.",
    Icon: Users,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
];

const checklist: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Active professional license",
    body: "A current license (or approved credential) in the state(s) where you practice, with no unresolved sanctions that would block network participation.",
    Icon: BadgeCheck,
  },
  {
    title: "Identity & practice details",
    body: "Legal name, NPI where applicable, practice address, specialties, and the modalities you offer (therapy, medication support, coaching, and more).",
    Icon: ClipboardList,
  },
  {
    title: "Credentials for review",
    body: "Upload license documentation and any supporting materials our provider team needs to verify eligibility before you go live.",
    Icon: FileCheck2,
  },
];

const readiness = [
  "Confirm the states and telehealth rules that apply to your license.",
  "Decide whether you'll participate via insurance, self-pay, organization programs — or a mix.",
  "Prepare a clear specialty focus so patients can find the right fit.",
  "Be ready to complete profile details: bio, availability patterns, and care offerings.",
];

export default function ProviderRequirementsPage() {
  return (
    <>
      <ProviderInteriorHero
        title="Provider requirements for joining LoveJoy."
        description="LoveJoy is built for behavioral health professionals who want to deliver care, stay connected between visits, and work within a network designed for real clinical workflows."
      />

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            Who can join
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            We welcome licensed clinicians and approved support professionals
            who share our focus on accessible, connected behavioral healthcare.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04]"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
                >
                  <item.Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-deep">
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

      <section className="bg-white px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
            What we typically need
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Exact documentation can vary by role and state. During onboarding,
            our team will confirm what applies to you.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {checklist.map((item) => (
              <li
                key={item.title}
                className="rounded-[1.5rem] border border-border bg-atmosphere/60 p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-soft text-navy">
                  <item.Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-atmosphere px-3 py-16 md:px-4 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              How review works
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              After you create an account and complete your profile, LoveJoy
              reviews your credentials before you start seeing patients on the
              platform. Review helps protect patients and keeps the network
              aligned with professional standards.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              If something is missing or unclear, our provider team will follow
              up so you know exactly what to update.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_10px_32px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.04] md:p-8">
            <h3 className="font-display text-2xl text-navy-deep">
              Prepare before you apply
            </h3>
            <ul className="mt-6 space-y-3">
              {readiness.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProviderRelatedNav
        links={[
          { href: "/for-providers/platform", label: "Next: Platform" },
          { href: "/for-providers/onboarding", label: "Onboarding" },
        ]}
      />

      <ProviderInteriorCtaBand
        title="Ready to see if you qualify?"
        description="Start your application, or contact our provider team if you have questions about credentials or eligibility."
      />
    </>
  );
}
