"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 500;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`fixed bottom-6 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold shadow-[0_12px_32px_rgba(2,24,72,0.28)] ring-2 ring-gold/80 transition duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 md:bottom-8 md:right-8 md:h-14 md:w-14 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="h-5 w-5 md:h-6 md:w-6"
        fill="none"
      >
        <path
          d="M5 11.5 10 6.5 15 11.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
