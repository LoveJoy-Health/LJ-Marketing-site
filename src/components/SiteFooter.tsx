import Link from "next/link";
import type { ReactNode, SVGProps } from "react";
import { LoveJoyLogo } from "@/components/LoveJoyLogo";
import {
  footerNav,
  legalNav,
  organizationNav,
  providerNav,
  resourcesNav,
  siteConfig,
} from "@/lib/site";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.324 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.324 3.608-.975.975-2.242 1.262-3.608 1.324-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.324-3.608.975-.975 2.242-1.262 3.608-1.324C8.416 2.175 8.796 2.163 12 2.163Zm0 1.838c-3.15 0-3.523.012-4.766.069-1.04.048-1.605.218-1.98.593-.375.375-.545.94-.593 1.98-.057 1.243-.069 1.616-.069 4.766s.012 3.523.069 4.766c.048 1.04.218 1.605.593 1.98.375.375.94.545 1.98.593 1.243.057 1.616.069 4.766.069s3.523-.012 4.766-.069c1.04-.048 1.605-.218 1.98-.593.375-.375.545-.94.593-1.98.057-1.243.069-1.616.069-4.766s-.012-3.523-.069-4.766c-.048-1.04-.218-1.605-.593-1.98-.375-.375-.94-.545-1.98-.593-1.243-.057-1.616-.069-4.766-.069Zm0 3.338a4.662 4.662 0 1 1 0 9.324 4.662 4.662 0 0 1 0-9.324Zm0 7.486a2.824 2.824 0 1 0 0-5.648 2.824 2.824 0 0 0 0 5.648Zm5.338-7.762a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0Z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}

const socialLinks = [
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: siteConfig.social.facebook,
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-3 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr_1fr_1fr] md:px-4">
        <div>
          <LoveJoyLogo className="h-12 w-auto" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Connected behavioral healthcare — linking people, providers, and
            organizations on one platform for better outcomes.
          </p>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Download the apps
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/download"
                className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-gold hover:text-gold"
              >
                Get the apps
              </Link>
              <Link
                href="/download/patient"
                className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-gold hover:text-gold"
              >
                Patient app
              </Link>
              <Link
                href="/download/provider"
                className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-gold hover:text-gold"
              >
                Provider app
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Resources
          </p>
          <ul className="mt-4 space-y-2.5">
            {resourcesNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            For providers
          </p>
          <ul className="mt-4 space-y-2.5">
            {providerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            For organizations
          </p>
          <ul className="mt-4 space-y-2.5">
            {organizationNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Legal
          </p>
          <ul className="mt-4 space-y-2.5">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Visit
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            {siteConfig.address}
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="mt-3 inline-block text-sm text-white/80 transition hover:text-white"
          >
            {siteConfig.contactEmail}
          </a>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <SocialIconLink key={label} href={href} label={label}>
                <Icon className="h-5 w-5" />
              </SocialIconLink>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-3 py-5 text-xs text-white/45 md:px-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
