import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Smartphone, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = buildPageMetadata({
  title: "Download LoveJoy Apps",
  description:
    "Get the LoveJoy patient app or the LoveJoy Provider app — choose the download page that fits how you use LoveJoy.",
  path: "/download",
});

const apps = [
  {
    href: "/download/patient",
    eyebrow: "For individuals",
    title: "Patient app",
    body: "Find support, stay connected with your care team, and keep moving forward between visits.",
    cta: "Get the Patient App",
    Icon: Smartphone,
  },
  {
    href: "/download/provider",
    eyebrow: "For providers",
    title: "Provider app",
    body: "Today's schedule, secure visits, and patient context — built for care on the go.",
    cta: "Get the Provider App",
    Icon: Stethoscope,
  },
] as const;

export default function DownloadIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Get the apps"
        title="Download LoveJoy apps"
        description="Choose the app that matches how you use LoveJoy — for your own care journey, or for delivering care as a provider."
      />
      <section className="bg-white px-3 pb-16 pt-10 md:px-4 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {apps.map(({ href, eyebrow, title, body, cta, Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col rounded-3xl bg-atmosphere p-7 transition ring-1 ring-black/[0.04] hover:ring-navy/20 md:p-9"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-soft text-navy transition group-hover:bg-navy group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                </span>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
                  {eyebrow}
                </p>
                <h2 className="mt-2 font-display text-2xl tracking-tight text-navy-deep md:text-3xl">
                  {title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
                  {body}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition group-hover:text-navy-deep">
                  {cta}
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
