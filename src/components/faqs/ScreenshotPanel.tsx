"use client";

import { useEffect, useId, useState } from "react";
import type { GuideImage } from "@/lib/providerOnboardingGuide";

export function ScreenshotPanel({
  images,
  className,
}: {
  images: GuideImage[];
  className?: string;
}) {
  const [openSrc, setOpenSrc] = useState<GuideImage | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!openSrc) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenSrc(null);
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openSrc]);

  return (
    <>
      <div className={`space-y-4 ${className ?? ""}`}>
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenSrc(image)}
            className="block w-full overflow-hidden rounded-2xl border border-border bg-white text-left shadow-[0_8px_24px_rgba(2,24,72,0.08)] ring-1 ring-black/[0.03] transition hover:ring-navy/20"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              loading={image.priority && index === 0 ? "eager" : "lazy"}
              className="h-auto w-full"
            />
            <span className="sr-only">Open larger view</span>
          </button>
        ))}
      </div>

      {openSrc ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/80 p-4"
          onClick={() => setOpenSrc(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-2xl bg-white p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <p id={titleId} className="text-sm font-medium text-navy-deep">
                {openSrc.alt}
              </p>
              <button
                type="button"
                onClick={() => setOpenSrc(null)}
                className="shrink-0 rounded-full border border-border px-3 py-1 text-xs font-semibold text-navy"
              >
                Close
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={openSrc.src} alt={openSrc.alt} className="h-auto w-full" />
          </div>
        </div>
      ) : null}
    </>
  );
}
