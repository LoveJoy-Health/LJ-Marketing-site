import type { Metadata } from "next";
import Link from "next/link";
import { Smartphone, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Download LoveJoy Apps",
  description:
    "Get the LoveJoy patient app or the LoveJoy Provider app — choose the download page that fits how you use LoveJoy.",
};

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
    <section className="bg-white px-4 pb-16 pt-6 md:px-6 xl:px-8 md:pb-24 md:pt-10">
      <div className="site-container">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy md:text-xs">
          Get the apps
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl leading-[1.08] tracking-tight text-navy-deep md:text-5xl">
          Download LoveJoy apps
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Choose the app that matches how you use LoveJoy — for your own care
          journey, or for delivering care as a provider.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
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
  );
}
