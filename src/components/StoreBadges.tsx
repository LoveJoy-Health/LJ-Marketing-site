import { siteConfig } from "@/lib/site";

type StoreBadgesProps = {
  className?: string;
  /** Defaults to patient app store links */
  iosUrl?: string;
  androidUrl?: string;
};

export function StoreBadges({
  className = "",
  iosUrl = siteConfig.appStore.ios,
  androidUrl = siteConfig.appStore.android,
}: StoreBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={iosUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 items-center gap-2.5 rounded-lg bg-black px-3.5 text-white transition hover:bg-neutral-900"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M16.365 12.21c-.02-2.14 1.75-3.17 1.83-3.22-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.78-3.25.78-.67 0-1.71-.76-2.81-.74-1.45.02-2.79.84-3.54 2.14-1.51 2.62-.39 6.5 1.08 8.63.72 1.04 1.58 2.2 2.71 2.16 1.09-.04 1.5-.7 2.81-.7 1.31 0 1.68.7 2.82.68 1.17-.02 1.91-1.06 2.62-2.11.83-1.2 1.17-2.36 1.19-2.42-.03-.01-2.28-.87-2.3-3.42zm-2.16-6.36c.6-.73 1-1.74.89-2.75-.86.03-1.9.57-2.52 1.3-.55.64-1.04 1.67-.91 2.65 1.03.08 2-.52 2.54-1.2z" />
        </svg>
        <span className="flex flex-col leading-none">
          <span className="text-[9px] opacity-80">Download on the</span>
          <span className="text-sm font-semibold tracking-tight">App Store</span>
        </span>
      </a>
      <a
        href={androidUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 items-center gap-2.5 rounded-lg bg-black px-3.5 text-white transition hover:bg-neutral-900"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M3.6 2.9c-.3.3-.5.8-.5 1.4v15.4c0 .6.2 1.1.5 1.4l.1.1 8.6-8.6v-.2L3.7 2.8l-.1.1zm11.3 6.5-2.1 2.1 2.1 2.1 4.9-2.8c.7-.4.7-1 0-1.4l-4.9-2.8v2.8zM13.4 13.4 11.2 15.6l4.1 4.1c.7.4 1.5.1 1.5-.7v-5.2l-3.4-.4zm-2.2-2.9L3.2 2.3l.1-.1c.3-.2.7-.2 1.2.1l8.8 5.1-2.1 2.1zM11.2 15.6l-2.2 2.2 5.8 3.4c.5.3.9.3 1.2.1l.1-.1-4.9-5.6z" />
        </svg>
        <span className="flex flex-col leading-none">
          <span className="text-[9px] opacity-80">GET IT ON</span>
          <span className="text-sm font-semibold tracking-tight">Google Play</span>
        </span>
      </a>
    </div>
  );
}
