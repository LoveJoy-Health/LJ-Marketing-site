"use client";

import Image from "next/image";
import { useState } from "react";

type LoveJoyLogoProps = {
  className?: string;
};

/** SVG fallback — used only if the brand PNG fails to load. */
function LoveJoyLogoFallback({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 228 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="LoveJoy Health"
    >
      <path
        d="M26 46C12.5 35.2 4 26.4 4 16.8 4 9.4 9.6 4 16.6 4c3.9 0 7.4 1.8 9.4 4.6C28 5.8 31.5 4 35.4 4 42.4 4 48 9.4 48 16.8 48 26.4 39.5 35.2 26 46Z"
        fill="#FFE612"
      />
      <path
        d="M26 18.5c2.2-4.8 7.2-7.4 12.4-6.2 1.4.3 2.7 1 3.8 1.9-4.6 1.8-7.9 5.4-9.2 10.1-.8 2.8-.7 5.5.1 8.1C28.8 27.8 26.8 23.4 26 18.5Z"
        fill="#042268"
        opacity="0.38"
      />
      <text
        x="58"
        y="27"
        fill="#FFFFFF"
        fontFamily="var(--font-body), ui-sans-serif, system-ui, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="0.06em"
      >
        LOVE
      </text>
      <text
        x="126"
        y="27"
        fill="#FFE612"
        fontFamily="var(--font-display), ui-serif, Georgia, serif"
        fontSize="22"
        fontStyle="italic"
        fontWeight="500"
        letterSpacing="0.04em"
      >
        JOY
      </text>
      <text
        x="126"
        y="43"
        fill="#FFFFFF"
        fontFamily="var(--font-body), ui-sans-serif, system-ui, sans-serif"
        fontSize="10"
        fontWeight="700"
        letterSpacing="0.3em"
      >
        HEALTH
      </text>
    </svg>
  );
}

/** Yellow/white wordmark PNG for navy headers and footers. */
export function LoveJoyLogo({ className = "h-10 w-auto" }: LoveJoyLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <LoveJoyLogoFallback className={className} />;
  }

  return (
    <Image
      src="/images/lovejoy-logo.png"
      alt="LoveJoy Health"
      width={981}
      height={207}
      priority
      className={`object-contain object-left ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
