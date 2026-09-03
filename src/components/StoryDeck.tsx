"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Download, Maximize2, Minimize2 } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

const DECK_PDF = "/investors/LoveJoy_Health_Investor_Deck_v6.pdf";

type Slide = {
  kicker: string;
  title: string;
  image: string;
};

const slides: Slide[] = [
  {
    kicker: "LoveJoy Health",
    title: "Behavioral health technology and care delivery infrastructure",
    image: "/images/deck-slides/01-lovejoy-health.png",
  },
  {
    kicker: "Problem",
    title: "Behavioral health organizations lose patients between referral and ongoing care.",
    image: "/images/deck-slides/02-problem.png",
  },
  {
    kicker: "Solution",
    title: "One behavioral health infrastructure from access through outcomes.",
    image: "/images/deck-slides/03-solution.png",
  },
  {
    kicker: "Platform",
    title: "Four connected products. One shared intelligence and data layer.",
    image: "/images/deck-slides/04-platform.png",
  },
  {
    kicker: "Product",
    title: "Live products across the behavioral health care journey",
    image: "/images/deck-slides/05-product.png",
  },
  {
    kicker: "Customers",
    title: "Organizations responsible for behavioral health access, engagement and outcomes.",
    image: "/images/deck-slides/06-customers.png",
  },
  {
    kicker: "Business Model",
    title: "Two complementary revenue streams",
    image: "/images/deck-slides/07-business-model.png",
  },
  {
    kicker: "Market Opportunity",
    title: "A focused initial market with significant expansion potential",
    image: "/images/deck-slides/08-market.png",
  },
  {
    kicker: "Competition",
    title: "Existing solutions address parts of the behavioral health journey. LoveJoy connects the operating model.",
    image: "/images/deck-slides/09-competition.png",
  },
  {
    kicker: "Go-to-Market",
    title: "Focused go-to-market driving adoption, outcomes and growth.",
    image: "/images/deck-slides/10-gtm.png",
  },
  {
    kicker: "Progress",
    title: "Built, live and ready for the first paid organizational deployment",
    image: "/images/deck-slides/11-progress.png",
  },
  {
    kicker: "Team",
    title: "Experienced team building behavioral health infrastructure and care delivery.",
    image: "/images/deck-slides/12-team.png",
  },
  {
    kicker: "The Raise",
    title: "Raising $750K–$1M Pre-Seed",
    image: "/images/deck-slides/13-the-raise.png",
  },
];

type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
};

type FullscreenDocument = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void> | void;
};

function getFullscreenElement() {
  const doc = document as FullscreenDocument;
  return document.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
}

export function StoryDeck() {
  const [index, setIndex] = useState(0);
  const [nativeFullscreen, setNativeFullscreen] = useState(false);
  const [cssFullscreen, setCssFullscreen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const labelId = useId();
  const total = slides.length;
  const slide = slides[index];
  const isFullscreen = nativeFullscreen || cssFullscreen;

  const go = useCallback(
    (nextIndex: number) => {
      setIndex(((nextIndex % total) + total) % total);
    },
    [total],
  );

  const previous = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  const toggleFullscreen = useCallback(async () => {
    const node = frameRef.current;
    if (!node) return;
    const doc = document as FullscreenDocument;
    const fsNode = node as FullscreenElement;
    const active = getFullscreenElement();

    if (cssFullscreen) {
      setCssFullscreen(false);
      return;
    }

    try {
      if (active) {
        if (document.exitFullscreen) await document.exitFullscreen();
        else doc.webkitExitFullscreen?.();
        return;
      }
      if (node.requestFullscreen) {
        await node.requestFullscreen();
        return;
      }
      if (fsNode.webkitRequestFullscreen) {
        await fsNode.webkitRequestFullscreen();
        return;
      }
      setCssFullscreen(true);
    } catch {
      setCssFullscreen(true);
    }
  }, [cssFullscreen]);

  useEffect(() => {
    function onFullscreenChange() {
      const active = getFullscreenElement() === frameRef.current;
      setNativeFullscreen(active);
      if (active) setCssFullscreen(false);
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (!cssFullscreen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [cssFullscreen]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && cssFullscreen) {
        setCssFullscreen(false);
        return;
      }
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        setIndex((current) => (current + 1) % total);
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        setIndex((current) => (current - 1 + total) % total);
      }
      if (event.key === "Home") {
        event.preventDefault();
        setIndex(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        setIndex(total - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cssFullscreen, total]);

  const toolbar = (
    <div className="story-deck-controls flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={toggleFullscreen}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold text-navy transition hover:border-navy/30"
      >
        {isFullscreen ? (
          <Minimize2 className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
        ) : (
          <Maximize2 className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
        )}
        {isFullscreen ? "Exit full screen" : "Full screen"}
      </button>
      <a
        href={DECK_PDF}
        download="LoveJoy_Health_Investor_Deck_v6.pdf"
        title="Download the investor deck PDF"
        className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition ${
          isFullscreen
            ? "bg-gold text-navy-deep hover:bg-white"
            : "bg-navy text-white hover:bg-navy-deep"
        }`}
      >
        <Download className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
        Download PDF
      </a>
    </div>
  );

  return (
    <div
      ref={frameRef}
      className={`story-deck-root mx-auto max-w-7xl bg-atmosphere ${
        cssFullscreen ? "is-css-fullscreen" : ""
      }`}
    >
      <div className="story-deck-screen">
        <div className="story-deck-toolbar mb-4 flex justify-end">{toolbar}</div>
        <div className="story-deck-stage flex items-stretch gap-3 md:gap-4">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous slide"
            className="story-deck-nav my-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-md ring-1 ring-navy/10 transition hover:bg-gold"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden strokeWidth={2} />
          </button>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-labelledby={labelId}
            className="story-deck-frame relative min-w-0 flex-1 overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_80px_rgba(2,24,72,0.16)] md:rounded-[2.5rem]"
            onTouchStart={(event) => {
              touchStartX.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              const start = touchStartX.current;
              const end = event.changedTouches[0]?.clientX;
              touchStartX.current = null;
              if (start == null || end == null) return;
              const delta = start - end;
              if (Math.abs(delta) < 48) return;
              if (delta > 0) next();
              else previous();
            }}
          >
            <div
              id={labelId}
              className="sr-only"
              aria-live="polite"
            >{`Slide ${index + 1} of ${total}: ${slide.title}`}</div>

            <div className="relative aspect-video w-full">
              <Image
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-contain object-center"
                sizes="(min-width: 1280px) 1120px, 92vw"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="story-deck-nav my-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-md ring-1 ring-navy/10 transition hover:bg-gold"
          >
            <ChevronRight className="h-5 w-5" aria-hidden strokeWidth={2} />
          </button>
        </div>

        <div className="story-deck-status mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p
            className={`text-sm font-medium ${
              isFullscreen ? "text-white/75" : "text-muted"
            }`}
          >
            Slide {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            <span className={`mx-2 ${isFullscreen ? "text-white/30" : "text-border"}`}>
              ·
            </span>
            {slide.kicker}
          </p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {slides.map((item, i) => (
              <button
                key={item.kicker}
                type="button"
                aria-label={`Go to slide ${i + 1}: ${item.kicker}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition ${
                  i === index
                    ? isFullscreen
                      ? "w-7 bg-gold"
                      : "w-7 bg-navy"
                    : isFullscreen
                      ? "w-2 bg-white/30 hover:bg-white/60"
                      : "w-2 bg-border hover:bg-navy/40"
                }`}
              />
            ))}
          </div>
          <p
            className={`hidden text-xs md:block ${
              isFullscreen ? "text-white/55" : "text-muted"
            }`}
          >
            Arrow keys or swipe to move
          </p>
        </div>
      </div>
    </div>
  );
}
