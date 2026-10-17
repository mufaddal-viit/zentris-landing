"use client";

import { useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Clock, GraduationCap, CaretDown } from "@phosphor-icons/react";
import type { Course } from "@/lib/content";
import Illustration from "./Illustration";

/* Featured programs: horizontal, swipeable rail.
   Cards start on the container edge but scroll out to the viewport edge. */
const edge = "max(var(--gutter), calc((100% - 1600px) / 2 + var(--gutter)))";
const railPad = { paddingInline: edge, scrollPaddingInline: edge } as const;

function FeaturedCard({ c }: { c: Course }) {
  return (
    <article className="group flex w-[82vw] max-w-[420px] shrink-0 flex-col sm:w-[380px] xl:w-[420px]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
        {c.image && (
          <Image
            src={c.image}
            alt={c.title}
            fill
            sizes="420px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        )}
        {c.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-green px-3 py-1 text-[13px] font-semibold text-white">
            {c.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <div className="flex items-center gap-5 text-sm text-white/60">
          <span className="inline-flex items-center gap-1.5">
            <Clock weight="duotone" className="h-4 w-4 text-green" /> {c.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <GraduationCap weight="duotone" className="h-4 w-4 text-green" /> {c.level}
          </span>
        </div>
        <h3 className="t-h3 mt-3 text-white">{c.title}</h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-white/65">{c.blurb}</p>
        <Link
          href="#contact"
          className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[15px] font-semibold text-green transition-colors hover:text-white"
        >
          Enquire about this course <ArrowRight weight="bold" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function FeaturedRail({ courses, heading }: { courses: Course[]; heading: ReactNode }) {
  const rail = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 400) + 24), behavior: "smooth" });
  };
  return (
    <div>
      <div className="container-x flex items-end justify-between gap-8">
        {heading}
        <div className="hidden shrink-0 gap-2 sm:flex">
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous courses"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-navy-deep"
        >
          <ArrowLeft weight="bold" className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Next courses"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-navy-deep"
        >
          <ArrowRight weight="bold" className="h-5 w-5" />
        </button>
        </div>
      </div>
      <div ref={rail} className="rail mt-12 flex gap-6 overflow-x-auto pb-2 lg:mt-16" style={railPad}>
        {courses.map((c) => (
          <FeaturedCard key={c.title} c={c} />
        ))}
      </div>
    </div>
  );
}

/* General courses: photo grid with progressive reveal */

function CourseCard({ c, className = "" }: { c: Course; className?: string }) {
  return (
    <Link href="#contact" className={`group relative flex-col overflow-hidden rounded-2xl bg-surface ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        {c.image && (
          <Image
            src={c.image}
            alt=""
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        )}
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-navy-ink shadow-sm">
          <Clock weight="bold" className="h-3.5 w-3.5 text-green-deep" />
          {c.duration}
        </span>
      </div>
      <div className="relative flex flex-1 flex-col p-5 pb-6">
        {c.art && (
          <Illustration
            name={c.art}
            className="absolute -bottom-3 -right-2 h-32 w-auto opacity-[0.17] transition-opacity duration-500 group-hover:opacity-30"
          />
        )}
        <p className="relative text-sm font-medium text-green-deep">{c.level}</p>
        <h3 className="relative mt-1.5 max-w-[85%] font-display text-xl font-semibold leading-snug tracking-tight text-navy-ink">
          {c.title}
        </h3>
        <p className="relative mt-2 max-w-[85%] text-[15px] leading-relaxed text-muted">{c.blurb}</p>
        <span className="relative mt-auto inline-flex items-center gap-2 pt-4 text-[15px] font-semibold text-navy-ink">
          <span className="underline decoration-navy-ink/20 decoration-2 underline-offset-4 transition-colors group-hover:decoration-green">
            View course details
          </span>
          <ArrowRight weight="bold" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function CourseGrid({ courses, initial = 8 }: { courses: Course[]; initial?: number }) {
  const [all, setAll] = useState(false);
  const shown = all ? courses : courses.slice(0, initial);
  return (
    <>
      <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mt-16">
        {shown.map((c, i) => (
          // Phones start with half the set to keep the scroll short
          <CourseCard key={c.title} c={c} className={!all && i >= initial / 2 ? "hidden sm:flex" : "flex"} />
        ))}
      </div>
      {courses.length > initial && (
        <div className="mt-14 flex items-center gap-6">
          <span className="h-px flex-1 bg-line" />
          <button
            onClick={() => setAll((v) => !v)}
            aria-expanded={all}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-navy-ink/20 px-6 text-[15px] font-semibold text-navy-ink transition-colors hover:border-navy-ink"
          >
            {all ? "Show fewer courses" : `Show all ${courses.length} courses`}
            <CaretDown weight="bold" className={`h-4 w-4 transition-transform ${all ? "rotate-180" : ""}`} />
          </button>
          <span className="h-px flex-1 bg-line" />
        </div>
      )}
    </>
  );
}
