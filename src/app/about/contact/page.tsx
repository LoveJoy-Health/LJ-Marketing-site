import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  HeartHandshake,
  Lock,
  MessageCircle,
  Newspaper,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { isExternalHref, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with LoveJoy Health — business, care, providers, organizations, media, and security.",
};

type ContactLink = {
  href: string;
  label: string;
};

type ContactCard = {
  title: string;
  body: string;
  Icon: LucideIcon;
  links: ContactLink[];
};

const contactCards: ContactCard[] = [
  {
    title: "Contact",
    body: "Questions about LoveJoy, partnerships, or general business inquiries — email our team and we’ll get back to you.",
    Icon: MessageCircle,
    links: [
      {
        href: `mailto:${siteConfig.contactEmail}`,
        label: siteConfig.contactEmail,
      },
    ],
  },
  {
    title: "Find care",
    body: "Looking for support for yourself or someone you love? Explore how LoveJoy helps individuals start care.",
    Icon: HeartHandshake,
    links: [
      { href: "/for-individuals", label: "For individuals" },
      { href: siteConfig.findProviderUrl, label: "Find a provider" },
    ],
  },
  {
    title: "Providers",
    body: "Join the LoveJoy network or sign in to manage your practice tools and patient connections.",
    Icon: Stethoscope,
    links: [
      { href: "/for-providers", label: "For providers" },
      { href: siteConfig.providerSignInUrl, label: "Provider sign-in" },
    ],
  },
  {
    title: "Care Navigators",
    body: "Coordinate caseloads, follow-ups, and care gaps — or sign in to the Navigator Portal.",
    Icon: HeartHandshake,
    links: [
      { href: "/for-navigators", label: "For care navigators" },
      { href: siteConfig.navigatorSignInUrl, label: "Navigator sign-in" },
    ],
  },
  {
    title: "Organizations",
    body: "Health plans, employers, and community partners — learn how LoveJoy expands access, or request a demo.",
    Icon: Building2,
    links: [
      { href: "/for-organizations", label: "For organizations" },
      {
        href: `mailto:${siteConfig.contactEmail}?subject=Request%20a%20demo`,
        label: "Request a demo",
      },
    ],
  },
  {
    title: "Media",
    body: "Press and media inquiries are welcome. Reach our team for interviews, logos, or story requests.",
    Icon: Newspaper,
    links: [
      {
        href: `mailto:${siteConfig.contactEmail}?subject=Press%20inquiry`,
        label: siteConfig.contactEmail,
      },
    ],
  },
  {
    title: "Security",
    body: "Questions about privacy, compliance, or how we protect health information — review our practices or email us.",
    Icon: Lock,
    links: [
      { href: "/security-compliance", label: "Security & compliance" },
      {
        href: `mailto:${siteConfig.contactEmail}?subject=Security%20inquiry`,
        label: siteConfig.contactEmail,
      },
    ],
  },
];

function ContactCardLink({ href, label }: ContactLink) {
  const className =
    "font-semibold text-navy underline-offset-4 transition hover:text-navy-deep hover:underline";

  if (isExternalHref(href) || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        {...(isExternalHref(href)
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        description="Whether you’re seeking care, joining as a provider, partnering as an organization, or reaching out for press — here’s how we can help."
      />

      <section className="bg-white px-4 py-16 md:px-6 xl:px-8 md:py-20">
        <div className="site-container">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-navy-deep md:text-4xl">
              How can we help?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Choose the path that fits — each card points you to the right
              email, page, or portal. No form required.
            </p>
          </div>

          <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
            {contactCards.map(({ title, body, Icon, links }, index) => (
              <li
                key={title}
                className={
                  index >= 3
                    ? "lg:border-t lg:border-border lg:pt-12"
                    : "lg:pb-12"
                }
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-soft text-navy">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-navy-deep">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {body}
                </p>
                <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm md:text-base">
                  {links.map((link, linkIndex) => (
                    <span
                      key={`${link.href}-${link.label}`}
                      className="inline-flex items-baseline gap-x-3"
                    >
                      {linkIndex > 0 ? (
                        <span className="text-border" aria-hidden>
                          ·
                        </span>
                      ) : null}
                      <ContactCardLink {...link} />
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-16 border-t border-border pt-10 md:mt-20 md:pt-12">
            <p className="text-sm uppercase tracking-[0.16em] text-muted">
              Headquarters
            </p>
            <p className="mt-3 font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
              {siteConfig.address}
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-3 inline-block text-base font-semibold text-navy transition hover:text-navy-deep"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>
      </section>

      <section
        aria-label="Crisis resources"
        className="border-t border-border bg-[#F7F9FC] px-4 py-10 md:px-6 xl:px-8 md:py-12"
      >
        <div className="site-container">
          <p className="max-w-3xl text-sm leading-relaxed text-muted md:text-base">
            If you or someone you know is in crisis or needs immediate help,
            please call{" "}
            <a
              href="tel:911"
              className="font-semibold text-navy-deep underline-offset-2 hover:underline"
            >
              911
            </a>
            . To talk with someone now, call or text the 988 Suicide &amp;
            Crisis Lifeline at{" "}
            <a
              href="tel:988"
              className="font-semibold text-navy-deep underline-offset-2 hover:underline"
            >
              988
            </a>
            .{" "}
            <Link
              href="/resources/crisis"
              className="font-semibold text-navy underline-offset-2 hover:underline"
            >
              View crisis resources
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
