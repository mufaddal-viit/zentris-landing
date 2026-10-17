"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Clock, GraduationCap, CaretDown } from "@phosphor-icons/react";
import type { Course } from "@/lib/content";
import Illustration from "./Illustration";

/* Featured programs: auto-advancing carousel, contained within the page width.
   Cards per view come from --per (1 phone, 2 tablet, 3 desktop). The first three
   cards are cloned onto the end so the loop always moves forward seamlessly. */
const GAP = 24;
const MAX_PER = 3;
const INTERVAL = 4000;

function FeaturedCard({ c, hidden }: { c: Course; hidden?: boolean }) {
  return (
    <article
      aria-hidden={hidden || undefined}
      className="group flex shrink-0 flex-col"
      style={{ flexBasis: `calc((100% - (var(--per) - 1) * ${GAP}px) / var(--per))` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
        {c.image && (
          <Image
            src={c.image}
            alt={hidden ? "" : c.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
          tabIndex={hidden ? -1 : undefined}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[15px] font-semibold text-green transition-colors hover:text-white"
        >
          Enquire about this course <ArrowRight weight="bold" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function FeaturedRail({ courses, heading }: { courses: Course[]; heading: ReactNode }) {
  const n = courses.length;
  const slides = [...courses, ...courses.slice(0, MAX_PER)];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const backAfterJump = useRef(false);

  const next = useCallback(() => {
    setAnimate(true);
    setIndex((i) => Math.min(i + 1, n));
  }, [n]);

  const prev = () => {
    if (index > 0) {
      setAnimate(true);
      setIndex(index - 1);
      return;
    }
    // At the start: jump silently to the cloned copy at the end, then slide back one.
    backAfterJump.current = true;
    setAnimate(false);
    setIndex(n);
  };

  // After sliding onto the clones, snap back to the real first card without animating.
  const onTransitionEnd = () => {
    if (index >= n) {
      setAnimate(false);
      setIndex(0);
    }
  };

  // Re-enable the transition two frames after a silent jump, so the jump itself never animates.
  useEffect(() => {
    if (animate) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        setAnimate(true);
        if (backAfterJump.current) {
          backAfterJump.current = false;
          setIndex(n - 1);
        }
      });
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [animate, n]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(next, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, next]);

  const active = index % n;
  const arrow =
    "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-navy-deep";

  return (
    <div className="container-x">
      <div className="flex items-end justify-between gap-8">
        {heading}
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button onClick={prev} aria-label="Previous course" className={arrow}>
            <ArrowLeft weight="bold" className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Next course" className={arrow}>
            <ArrowRight weight="bold" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className="mt-12 overflow-hidden lg:mt-16"
        role="region"
        aria-roledescription="carousel"
        aria-label="Best-selling safety certifications"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
          setPaused(true);
        }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - (touchX.current ?? 0);
          if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
          touchX.current = null;
          setPaused(false);
        }}
      >
        <div
          className={`flex gap-6 [--per:1] md:[--per:2] lg:[--per:3] ${
            animate ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0" : ""
          }`}
          style={{ transform: `translateX(calc(${-index} * (100% + ${GAP}px) / var(--per)))` }}
          onTransitionEnd={(e) => e.target === e.currentTarget && onTransitionEnd()}
        >
          {slides.map((c, i) => (
            <FeaturedCard key={`${c.title}-${i}`} c={c} hidden={i >= n} />
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center gap-2" role="tablist" aria-label="Choose a course">
        {courses.map((c, i) => (
          <button
            key={c.title}
            role="tab"
            aria-selected={i === active}
            aria-label={c.title}
            onClick={() => {
              setAnimate(true);
              setIndex(i);
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === active ? "w-8 bg-green" : "w-2 bg-white/25 hover:bg-white/50"
            }`}
          />
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
