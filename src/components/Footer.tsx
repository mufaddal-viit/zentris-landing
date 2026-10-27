import Image from "next/image";
import Link from "next/link";
import { company, socials } from "@/lib/content";
import { Phone, ArrowRight, CalendarCheck, Headset } from "@phosphor-icons/react/ssr";
import { Button, SocialIcon } from "./ui";
import UaeMap from "./UaeMap";

const columns = [
  {
    title: "Connect With Us",
    links: ["Contact", "Free Training Proposal", "Support", "Pricing", "Careers"],
  },
  {
    title: "Our Company",
    links: ["About ZENTRIS", "Why ZENTRIS", "Our Trainers", "Success Stories", "Blogs"],
  },
  {
    title: "Trainings",
    links: ["Safety Training", "Corporate Training", "Firefighting Training", "Equipment Certification", "Rescue Programs"],
  },
  {
    title: "Industries",
    links: ["Construction", "Oil & Gas", "Logistics & Warehousing", "Facilities Management", "Manufacturing", "Hospitality"],
  },
  {
    title: "Resources",
    links: ["Training Calendar", "Course Catalogue", "Accreditations", "Knowledge Center", "Policies"],
  },
];

export function PreFooter() {
  return (
    <section className="relative overflow-hidden bg-navy-ink py-24 text-white sm:py-28 lg:py-32">
      {/* Decorative map background */}
      <UaeMap className="uae-map-dark pointer-events-none absolute -right-20 top-1/2 h-[500px] w-[640px] -translate-y-1/2 opacity-30 lg:-right-8 lg:h-[600px] lg:w-[760px]" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-green">
            Let&rsquo;s work together
          </p>
          <h2 className="t-h2 mt-4 max-w-[22ch]">
            Let&rsquo;s plan your next training program
          </h2>
          <p className="t-lead mt-5 max-w-2xl text-white/65">
            Whether you need to upskill ten people or certify an entire workforce,
            we&rsquo;ll build a program around your schedule, site and standards.
          </p>
        </div>

        {/* Action cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:max-w-3xl lg:gap-5">
          <a
            href="#contact"
            className="group flex items-start gap-5 rounded-2xl bg-white/[0.07] p-6 transition-colors hover:bg-white/[0.12]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green text-white">
              <CalendarCheck weight="duotone" className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <div className="font-display text-lg font-semibold tracking-tight">
                Request a free proposal
              </div>
              <p className="mt-1 text-sm leading-relaxed text-white/60">
                Tell us your team size and training needs — we&rsquo;ll send a tailored plan within one business day.
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-green transition-colors group-hover:text-green-deep">
                Get started
                <ArrowRight weight="bold" className="h-3.5 w-3.5" />
              </span>
            </div>
          </a>

          <a
            href={company.phoneHref}
            className="group flex items-start gap-5 rounded-2xl bg-white/[0.07] p-6 transition-colors hover:bg-white/[0.12]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
              <Headset weight="duotone" className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <div className="font-display text-lg font-semibold tracking-tight">
                Talk to an advisor
              </div>
              <p className="mt-1 text-sm leading-relaxed text-white/60">
                Call us directly and speak with a training consultant who knows your industry.
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
                {company.phone}
                <ArrowRight weight="bold" className="h-3.5 w-3.5" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Image src="/brand/logo.svg" alt={company.name} width={212} height={38} className="h-9 w-auto" />
            <p className="mt-6 text-sm leading-relaxed text-muted">{company.tagline}</p>
            <address className="mt-6 space-y-2 text-sm not-italic text-muted">
              <div>{company.address}</div>
              <div>
                <a href={company.phoneHref} className="text-navy-ink hover:text-green-deep">
                  {company.phone}
                </a>
              </div>
              <div>
                <a href={`mailto:${company.email}`} className="text-navy-ink hover:text-green-deep">
                  {company.email}
                </a>
              </div>
            </address>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5">
            {columns.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-base font-semibold tracking-tight text-navy-ink">{c.title}</h4>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <Link href="#contact" className="text-[15px] text-muted transition-colors hover:text-green-deep">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-xs leading-relaxed text-muted">
            <div>
              Copyright &copy; {new Date().getFullYear()} {company.shortName}. All rights reserved.
              {" | "}
              <Link href="#" className="hover:text-navy-ink">Privacy</Link>
              {" | "}
              <Link href="#" className="hover:text-navy-ink">Terms of Use</Link>
              {" | "}
              <Link href="#" className="hover:text-navy-ink">Cookies</Link>
            </div>
            <div className="mt-1">
              <Link href="#" className="hover:text-navy-ink">Training Terms</Link>
              {" | "}
              <Link href="#" className="hover:text-navy-ink">Certificate Verification</Link>
              {" | "}
              <Link href="#" className="hover:text-navy-ink">Refund Policy</Link>
            </div>
          </div>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-navy-ink transition-colors hover:bg-surface hover:text-green-deep"
              >
                <SocialIcon name={s.key} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
