"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X, Phone, MapPin, Clock, EnvelopeSimple, ArrowRight } from "@phosphor-icons/react";
import { company, nav } from "@/lib/content";
import { Button } from "./ui";

const topBarItems = [
  { icon: MapPin, text: company.address },
  { icon: Clock, text: company.hours },
  { icon: EnvelopeSimple, text: company.email, href: `mailto:${company.email}` },
];

function TopBar() {
  // The loop shifts by half the track, so each half (two copies) must be wider than a large screen.
  // Only the first half is exposed to screen readers.
  const track = [...topBarItems, ...topBarItems, ...topBarItems, ...topBarItems];
  return (
    <div
      className="marquee hidden overflow-hidden bg-navy-deep text-[13px] text-white/80 md:block"
      style={{ ["--marquee-duration" as string]: "40s" }}
    >
      <div className="marquee-track h-10 items-center">
        {track.map((it, i) => {
          const content = (
            <>
              <it.icon weight="fill" className="h-3.5 w-3.5 shrink-0 text-green" />
              {it.text}
            </>
          );
          const hidden = i >= topBarItems.length * 2;
          return (
            <span key={i} className="flex items-center whitespace-nowrap" aria-hidden={hidden || undefined}>
              {it.href ? (
                <a href={it.href} tabIndex={hidden ? -1 : undefined} className="flex items-center gap-2 px-8 transition-colors hover:text-white">
                  {content}
                </a>
              ) : (
                <span className="flex items-center gap-2 px-8">{content}</span>
              )}
              <span className="h-1 w-1 rounded-full bg-green/70" />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <TopBar />
      <header
        id="top"
        className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-[0_1px_0_var(--line),0_8px_24px_-16px_rgba(11,34,57,0.25)]" : "shadow-[0_1px_0_var(--line)]"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6 lg:h-20">
          <Link href="#top" className="flex shrink-0 items-center" aria-label={company.name}>
            <Image src="/brand/logo.svg" alt={company.name} width={212} height={38} priority className="h-8 w-auto lg:h-9" />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1" aria-label="Main">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`${n.href === "#top" ? "hidden xl:block" : ""} rounded-full px-3 py-2 xl:px-4 text-[15px] font-medium text-navy-ink/80 transition-colors hover:bg-surface hover:text-navy-ink`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={company.phoneHref}
              className="hidden items-center gap-2 text-[15px] font-semibold text-navy-ink hover:text-green-deep xl:flex"
            >
              <Phone weight="duotone" className="h-5 w-5 text-green" />
              {company.phone}
            </a>
            <Button href="#contact">Free training proposal</Button>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-5 w-5" weight="bold" /> : <List className="h-5 w-5" weight="bold" />}
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-white lg:hidden">
            <nav className="container-x flex flex-col pb-10 pt-4" aria-label="Mobile">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-4 font-display text-2xl font-semibold tracking-tight text-navy-ink"
                >
                  {n.label}
                  <ArrowRight className="h-5 w-5 text-muted" />
                </Link>
              ))}
              <div className="mt-8 grid gap-3">
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex h-13 items-center justify-center rounded-full bg-green font-semibold text-white">
                  Free training proposal
                </a>
                <a
                  href={company.phoneHref}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-line font-semibold text-navy-ink"
                >
                  <Phone weight="duotone" className="h-5 w-5 text-green" />
                  {company.phone}
                </a>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-muted">
                {company.address}
                <br />
                {company.hours}
              </p>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
