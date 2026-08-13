"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const connectedRoles = [
  {
    id: "patient",
    label: "Patient",
    href: "/for-individuals",
    blurb: "Find care, stay engaged, track progress",
    position: "left-1/2 top-0 -translate-x-1/2",
    labelPlacement: "above" as const,
    /** Popover grows toward diagram center */
    popoverClass: "left-1/2 top-full mt-2 -translate-x-1/2 sm:mt-2.5",
    photo: "/images/lady-daughter.png",
    photoAlt: "Mother and child representing a patient family",
    photoClass: "object-cover object-[center_18%]",
  },
  {
    id: "provider",
    label: "Provider",
    href: "/for-providers",
    blurb: "Deliver care and see the whole journey",
    position: "right-0 top-1/2 -translate-y-1/2",
    labelPlacement: "below" as const,
    popoverClass: "right-full top-1/2 mr-2.5 -translate-y-1/2 sm:mr-3",
    photo: "/images/providers-hero.png",
    photoAlt: "Clinicians collaborating over care",
    photoClass: "object-cover object-[32%_28%]",
  },
  {
    id: "navigator",
    label: "Navigator",
    href: "/for-navigators",
    blurb: "Coordinate resources and close gaps",
    position: "bottom-0 left-1/2 -translate-x-1/2",
    labelPlacement: "below" as const,
    popoverClass: "bottom-full left-1/2 mb-2 -translate-x-1/2 sm:mb-2.5",
    photo: "/images/navigators-hero.png",
    photoAlt: "Care navigator in a supportive conversation",
    photoClass: "object-cover object-[58%_20%]",
  },
  {
    id: "organization",
    label: "Organization",
    href: "/for-organizations",
    blurb: "Improve access, engagement, and outcomes",
    position: "left-0 top-1/2 -translate-y-1/2",
    labelPlacement: "below" as const,
    popoverClass: "left-full top-1/2 ml-2.5 -translate-y-1/2 sm:ml-3",
    photo: "/images/organizations-hero.png",
    photoAlt: "Organization leaders reviewing outcomes together",
    photoClass: "object-cover object-[55%_28%]",
  },
] as const;

type Role = (typeof connectedRoles)[number];

function prefersCoarsePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

function RoleNode({
  role,
  open,
  onOpenChange,
}: {
  role: Role;
  open: boolean;
  onOpenChange: (id: string | null) => void;
}) {
  const tipId = useId();
  const rootRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        onOpenChange(null);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onOpenChange(null);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <div
      className={`absolute flex flex-col items-center gap-1.5 ${role.position} ${
        open ? "z-30" : "z-10"
      }`}
    >
      {role.labelPlacement === "above" ? (
        <span className="pointer-events-none text-[11px] font-semibold text-navy md:text-xs">
          {role.label}
        </span>
      ) : null}

      <Link
        ref={rootRef}
        href={role.href}
        aria-describedby={open ? tipId : undefined}
        aria-expanded={open}
        className="group relative block rounded-full outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        onMouseEnter={() => {
          if (!prefersCoarsePointer()) onOpenChange(role.id);
        }}
        onMouseLeave={() => {
          if (!prefersCoarsePointer()) onOpenChange(null);
        }}
        onFocus={() => onOpenChange(role.id)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            onOpenChange(null);
          }
        }}
        onClick={(event) => {
          if (!prefersCoarsePointer()) return;
          if (!open) {
            event.preventDefault();
            onOpenChange(role.id);
          }
        }}
      >
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-[-7px] rounded-full border border-dashed border-[#C4A000]/80 transition duration-300 motion-reduce:animate-none motion-reduce:scale-100 ${
            open
              ? "scale-110 animate-platform-ring-pulse opacity-100"
              : "scale-100 opacity-0 group-hover:scale-110 group-hover:animate-platform-ring-pulse group-hover:opacity-100 group-focus-visible:scale-110 group-focus-visible:animate-platform-ring-pulse group-focus-visible:opacity-100"
          }`}
        />
        <span
          className={`relative block h-[3.25rem] w-[3.25rem] overflow-hidden rounded-full ring-[3px] ring-white transition duration-300 ease-out motion-reduce:scale-100 motion-reduce:transition-none md:h-16 md:w-16 ${
            open
              ? "scale-110 shadow-[0_14px_32px_rgba(2,24,72,0.28)] ring-[#C4A000]/70"
              : "shadow-[0_8px_20px_rgba(2,24,72,0.18)] group-hover:scale-110 group-hover:shadow-[0_14px_32px_rgba(2,24,72,0.28)] group-hover:ring-[#C4A000]/55 group-focus-visible:scale-110 group-focus-visible:shadow-[0_14px_32px_rgba(2,24,72,0.28)] group-focus-visible:ring-[#C4A000]/55"
          }`}
        >
          <Image
            src={role.photo}
            alt={role.photoAlt}
            fill
            sizes="64px"
            className={`photo-bw ${role.photoClass}`}
          />
        </span>

        <span
          id={tipId}
          role="tooltip"
          className={`pointer-events-none absolute z-30 w-[11.5rem] rounded-xl bg-navy-deep px-3 py-2.5 text-left shadow-[0_16px_40px_rgba(2,24,72,0.28)] ring-1 ring-white/10 transition duration-200 motion-reduce:transition-none sm:w-[12.5rem] ${
            role.popoverClass
          } ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "scale-95 opacity-0"
          }`}
        >
          <span className="block text-xs font-semibold text-gold">
            {role.label}
          </span>
          <span className="mt-0.5 block text-[11px] leading-snug text-white/80">
            {role.blurb}
          </span>
        </span>
      </Link>

      {role.labelPlacement === "below" ? (
        <span className="pointer-events-none text-[11px] font-semibold text-navy md:text-xs">
          {role.label}
        </span>
      ) : null}
    </div>
  );
}

export function ConnectedDiagram() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[20rem] overflow-visible sm:max-w-[22rem] lg:max-w-[24rem]">
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-[14%] h-[72%] w-[72%]"
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="#5B9FE8"
          strokeWidth="0.7"
          strokeDasharray="2.2 2.8"
          opacity="0.55"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="#C4A000"
          strokeWidth="0.7"
          strokeDasharray="2.2 2.8"
          strokeDashoffset="2.5"
          opacity="0.5"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 flex h-[4.75rem] w-[4.75rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_14px_36px_rgba(2,24,72,0.16)] ring-1 ring-black/[0.04] md:h-[5.5rem] md:w-[5.5rem]">
        <Image
          src="/images/logo-icon-circle.png"
          alt="LoveJoy"
          width={88}
          height={88}
          className="h-[90%] w-[90%] object-contain"
        />
      </div>

      {connectedRoles.map((role) => (
        <RoleNode
          key={role.id}
          role={role}
          open={openId === role.id}
          onOpenChange={setOpenId}
        />
      ))}
    </div>
  );
}
