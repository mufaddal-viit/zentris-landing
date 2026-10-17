import Image from "next/image";
import Link from "next/link";
import { company, socials } from "@/lib/content";
import { Phone } from "@phosphor-icons/react/ssr";
import { Button, SocialIcon } from "./ui";

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
    <section className="bg-navy py-20 text-white sm:py-24 lg:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <h2 className="t-h2 max-w-[18ch]">See ZENTRIS training in action</h2>
          <p className="t-lead mt-5 max-w-2xl text-white/75">
            Book a 30-minute consultation tailored to your workforce, and invest in upskilling and safety for your teams.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch xl:flex-row xl:justify-end">
          <Button href="#contact" size="lg">
            Request your free proposal
          </Button>
          <Button href={company.phoneHref} size="lg" variant="white">
            <Phone weight="duotone" className="h-5 w-5 text-green-deep" />
            {company.phone}
          </Button>
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
