import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the people behind LoveJoy Health — leadership and advisors building a more connected behavioral care experience.",
};

type ProfileLinkKind = "linkedin" | "website";

type TeamMember = {
  name: string;
  title: string;
  bio: string;
  imageSrc?: string;
  imageAlt?: string;
  initials?: string;
  profileHref?: string;
  profileKind?: ProfileLinkKind;
};

const leadership: TeamMember[] = [
  {
    name: "Lovemore Chirombo",
    title: "Founder & CEO",
    bio: "Healthcare and technology leader with experience spanning CareFirst BlueCross BlueShield and Northrop Grumman. Focused on making behavioral healthcare easier to find, navigate, and stay connected to.",
    imageSrc: "/images/team/lovemore.png",
    imageAlt: "Portrait of Lovemore Chirombo",
    profileHref: "https://www.linkedin.com/in/lovemore/",
  },
  {
    name: "Ellwood Lane",
    title: "Chief Operating Officer",
    bio: "Operations leader focused on building scalable organizations, reliable delivery, and the systems that help LoveJoy grow with care quality at the center.",
    imageSrc: "/images/team/ellwood.png",
    imageAlt: "Portrait of Ellwood Lane",
    profileHref: "https://www.linkedin.com/in/ellwood-lane-51312922/",
  },
  {
    name: "Prince Enweani",
    title: "Chief Technology Officer",
    bio: "Technology executive responsible for platform architecture and engineering — building secure, scalable products that connect people, providers, and organizations.",
    imageSrc: "/images/team/prince.png",
    imageAlt: "Portrait of Prince Enweani",
    profileHref: "https://www.linkedin.com/in/prince-enweani/",
  },
  {
    name: "Marisa Mott",
    title: "Chief Growth Officer",
    bio: "Growth leader with experience at Carrot, Quartet, and UHS. Focused on partnerships, market expansion, and helping more communities reach LoveJoy.",
    imageSrc: "/images/team/marisa.png",
    imageAlt: "Portrait of Marisa Mott",
    profileHref: "https://www.linkedin.com/in/marisa-mott-m-s-4aaa83119",
  },
  {
    name: "Mallory Williams",
    title: "Lead Therapist",
    bio: "Clinical leader dedicated to provider experience and treatment excellence — ensuring LoveJoy’s care model stays grounded in real therapeutic practice.",
    imageSrc: "/images/team/mallory.png",
    imageAlt: "Portrait of Mallory Williams",
  },
];

const advisors: TeamMember[] = [
  {
    name: "Dr. Chad Pendleton",
    title: "Healthcare & Health Plan Advisor",
    bio: "Former CEO of Amerigroup Tennessee. Advises LoveJoy on health plan strategy, population health, and scaling behavioral access across covered communities.",
    imageSrc: "/images/team/chad.png",
    imageAlt: "Portrait of Dr. Chad Pendleton",
    profileHref: "https://www.linkedin.com/in/chadpendleton/",
  },
  {
    name: "Dr. Ibukun Odutola",
    title: "Behavioral Health Advisor",
    bio: "CEO of Victory Health Solutions. Brings deep behavioral health clinical and operational insight to LoveJoy’s care model and provider experience.",
    imageSrc: "/images/team/ibukun.png",
    imageAlt: "Portrait of Dr. Ibukun Odutola",
    profileHref: "https://www.linkedin.com/in/ibukunodutola/",
  },
  {
    name: "Dr. Eboni January",
    title: "Medical & Maternal Health Advisor",
    bio: "Board-certified OB-GYN advising on medical and maternal health intersections with behavioral care — so support reaches people when they need it most.",
    imageSrc: "/images/team/eboni.png",
    imageAlt: "Portrait of Dr. Eboni January",
    profileHref: "https://www.doctorej.com/",
    profileKind: "website",
  },
  {
    name: "Chris Lorenzo",
    title: "Culture & Community Advisor",
    bio: "Entrepreneur and record producer advising on culture, community engagement, and building trust with the audiences LoveJoy serves.",
    imageSrc: "/images/team/chris.png",
    imageAlt: "Portrait of Chris Lorenzo",
  },
  {
    name: "Mike James",
    title: "Advisor",
    bio: "Former NBA champion and mental health advocate. Advises LoveJoy on athlete and community mental health awareness, stigma reduction, and reaching people where they are.",
    imageSrc: "/images/team/mike-james.png",
    imageAlt: "Portrait of Mike James",
  },
];

function LinkedInGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function GlobeGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function ProfileLink({
  name,
  href,
  kind = "linkedin",
}: {
  name: string;
  href?: string;
  kind?: ProfileLinkKind;
}) {
  if (!href) return null;

  const isWebsite = kind === "website";
  const ariaLabel = isWebsite
    ? `${name} website`
    : `${name} on LinkedIn`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-navy transition hover:border-navy/40 hover:bg-navy-soft"
    >
      {isWebsite ? (
        <GlobeGlyph className="h-4 w-4" />
      ) : (
        <LinkedInGlyph className="h-4 w-4" />
      )}
    </a>
  );
}

function InitialsPortrait({
  initials,
  name,
  className,
}: {
  initials: string;
  name: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder portrait for ${name}`}
      className={`flex items-center justify-center bg-navy-soft text-navy ${className ?? ""}`}
    >
      <span className="font-display text-3xl font-semibold tracking-wide md:text-4xl">
        {initials}
      </span>
    </div>
  );
}

function PerspectivesIcon() {
  return (
    <div className="relative mx-auto h-28 w-28 shrink-0 md:mx-0 md:h-32 md:w-32">
      <div
        aria-hidden
        className="absolute -right-1 -top-1 h-20 w-20 rounded-full bg-gold/80 md:h-24 md:w-24"
      />
      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#D6E6F7] ring-1 ring-[#C5D8EF]">
        <svg
          viewBox="0 0 64 64"
          className="h-12 w-12 text-navy md:h-14 md:w-14"
          fill="none"
          aria-hidden
        >
          <circle cx="24" cy="22" r="7" fill="currentColor" opacity="0.9" />
          <circle cx="40" cy="22" r="7" fill="currentColor" opacity="0.75" />
          <circle cx="32" cy="30" r="7" fill="currentColor" />
          <path
            d="M12 48c2.5-8 8-12 12-12s9.5 4 12 12"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M28 48c2.5-8 8-12 12-12s9.5 4 12 12"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M20 50c2.5-7 7.5-10.5 12-10.5S41.5 43 44 50"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function HeartMark() {
  return (
    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold md:h-16 md:w-16">
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 md:h-8 md:w-8"
        aria-hidden
        fill="none"
      >
        <path
          d="M16 26C8.5 20.2 4 15.2 4 10.2 4 6 7.2 3 11 3c2.2 0 4.2 1 5 2.6C16.8 4 18.8 3 21 3c3.8 0 7 3 7 7.2 0 5-4.5 10-12 15.8Z"
          fill="#042268"
        />
      </svg>
    </span>
  );
}

export default function TeamPage() {
  return (
    <>
      <link rel="preload" as="image" href="/images/team/team-hero.png" />

      {/* 1. Hero */}
      <section className="relative bg-white px-0.5 pb-10 pt-2 text-navy-deep md:px-1 md:pb-14 md:pt-3">
        <div className="hero-shell bg-team-hero-atmosphere relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(234,242,255,0.7),transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(105deg,#ffffff_0%,rgba(255,255,255,0.92)_20%,rgba(245,248,252,0.55)_38%,rgba(234,242,255,0.18)_52%,transparent_66%)]"
          />
          <div
            aria-hidden
            className="team-hero-photo-blend pointer-events-none absolute inset-x-0 bottom-0 top-[28%] z-[1] md:inset-y-0 md:left-auto md:right-0 md:top-0 md:w-[56%] lg:w-[60%]"
          />

          <div className="relative z-10">
            <div className="relative mx-auto grid max-w-screen-2xl items-center gap-8 px-3 pb-12 pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-6 lg:px-4 md:pb-14 md:pt-10 lg:pb-16">
              <div className="max-w-xl">
                <h1 className="animate-fade-up font-display text-4xl leading-[1.08] tracking-tight text-navy-deep md:text-5xl lg:text-[3.5rem]">
                  The people behind{" "}
                  <em className="font-display italic text-[#C9A400]">LoveJoy.</em>
                </h1>
                <p className="animate-fade-up delay-100 mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                  LoveJoy brings together experience across healthcare,
                  behavioral health, technology, operations, and community to
                  build a more connected care experience.
                </p>
              </div>

              <div
                className="animate-soft-rise relative mx-auto min-h-[14rem] w-full max-w-md md:min-h-[20rem] md:max-w-none lg:min-h-[22rem]"
                role="img"
                aria-label="LoveJoy team collaborating around a table"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Leadership Team */}
      <section className="bg-white px-3 py-16 lg:px-4 md:py-20">
        <div className="mx-auto max-w-screen-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
            Leadership Team
          </p>

          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {leadership.map((person) => (
              <li key={person.name} className="flex flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-navy-soft">
                  {person.imageSrc ? (
                    <Image
                      src={person.imageSrc}
                      alt={person.imageAlt ?? person.name}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 18vw"
                      className="photo-bw object-cover object-top"
                    />
                  ) : (
                    <InitialsPortrait
                      initials={person.initials ?? "?"}
                      name={person.name}
                      className="h-full w-full"
                    />
                  )}
                </div>
                <h2 className="mt-4 text-base font-semibold text-navy-deep md:text-lg">
                  {person.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-[#5B9FE8]">
                  {person.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {person.bio}
                </p>
                <ProfileLink
                  name={person.name}
                  href={person.profileHref}
                  kind={person.profileKind}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Interstitial */}
      <section className="bg-[#E8F0F8] px-3 py-14 lg:px-4 md:py-16">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
          <PerspectivesIcon />
          <div className="max-w-3xl text-center md:text-left">
            <h2 className="font-display text-2xl tracking-tight text-navy-deep md:text-3xl lg:text-[2.25rem]">
              Built from different perspectives.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Better behavioral healthcare requires more than technology. Our
              team brings together clinical experience, healthcare operations,
              product design, engineering, growth, and lived understanding of
              the systems people have to navigate.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Clinical & Strategic Advisors */}
      <section className="bg-white px-3 py-16 lg:px-4 md:py-20">
        <div className="mx-auto max-w-screen-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
            Clinical &amp; Strategic Advisors
          </p>

          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {advisors.map((person) => (
              <li key={person.name} className="flex flex-col items-start">
                <div className="relative h-36 w-36 overflow-hidden rounded-full bg-navy-soft md:h-40 md:w-40">
                  {person.imageSrc ? (
                    <Image
                      src={person.imageSrc}
                      alt={person.imageAlt ?? person.name}
                      fill
                      sizes="160px"
                      className="photo-bw object-cover object-top"
                    />
                  ) : (
                    <InitialsPortrait
                      initials={person.initials ?? "?"}
                      name={person.name}
                      className="h-full w-full rounded-full"
                    />
                  )}
                </div>
                <h2 className="mt-4 text-base font-semibold text-navy-deep md:text-lg">
                  {person.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-[#5B9FE8]">
                  {person.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {person.bio}
                </p>
                <ProfileLink
                  name={person.name}
                  href={person.profileHref}
                  kind={person.profileKind}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="bg-white px-3 pb-16 lg:px-4 md:pb-20">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col gap-8 rounded-[1.75rem] bg-navy-deep px-6 py-10 md:flex-row md:items-center md:justify-between md:gap-10 md:rounded-[2rem] md:px-10 md:py-12">
            <div className="flex max-w-2xl flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
              <HeartMark />
              <div>
                <h2 className="font-display text-2xl tracking-tight text-white md:text-3xl">
                  Different backgrounds. One mission.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
                  We&apos;re building LoveJoy around a shared belief: behavioral
                  healthcare should be easier to access, easier to navigate, and
                  easier to stay connected to.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 md:shrink-0">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-navy-soft hover:text-navy-deep"
              >
                Learn about LoveJoy
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/about/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-6 py-3 text-sm font-semibold text-navy-deep transition hover:bg-transparent hover:text-white"
              >
                Work with us
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
