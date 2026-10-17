import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Users, DownloadSimple, SealCheck } from "@phosphor-icons/react/ssr";
import { featuredCourses, generalCourses, corporateCourses } from "@/lib/content";
import { Button, SectionHeading } from "./ui";
import { CourseGrid, FeaturedRail } from "./CourseBrowsers";
import Illustration from "./Illustration";

function FeaturedSection() {
  return (
    <div className="bg-navy-deep py-20 sm:py-24 lg:py-32">
      <FeaturedRail
        courses={featuredCourses}
        heading={
          <SectionHeading
            title="Our best-selling safety certifications"
            body="High-demand, hands-on programs trusted by contractors, facilities teams and industrial operators across the UAE."
            dark
          />
        }
      />
      <div className="container-x mt-12">
        <Button href="#contact" variant="white">
          Request the full catalogue
        </Button>
      </div>
    </div>
  );
}

function GeneralSection() {
  return (
    <div className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="General safety training courses"
            body="Short, focused courses that satisfy regulatory requirements and build day-to-day workplace safety competence."
          />
          <Button href="#contact" variant="outline" className="w-fit shrink-0">
            <DownloadSimple weight="bold" className="h-4 w-4" />
            Download schedule
          </Button>
        </div>
        <CourseGrid courses={generalCourses} />
      </div>
    </div>
  );
}

function CorporateSection() {
  return (
    <div className="bg-surface py-20 sm:py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              title="Corporate training for leaders and teams"
              body="KHDA-approved programs that sharpen leadership, communication, sales and productivity skills across your organization."
            />
            <Button href="#contact" variant="secondary" className="mt-8">
              Plan a corporate program
            </Button>
            {/* Engineers reviewing plans fill the space under the sticky heading */}
            <div className="mt-14 hidden items-end gap-6 opacity-25 lg:flex" aria-hidden>
              <Illustration name="engineers" className="h-64 w-auto xl:h-72" />
              <Illustration name="blueprint" className="h-56 w-auto xl:h-64" />
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
          {corporateCourses.map((c) => (
            <article key={c.title} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_var(--line)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                {c.image && (
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                )}
                {c.tag && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-navy-ink">
                    <SealCheck weight="fill" className="h-4 w-4 text-green" />
                    {c.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="t-h3 text-navy-ink">{c.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{c.blurb}</p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
                  <div className="flex items-center gap-4 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock weight="duotone" className="h-4 w-4 text-navy" /> {c.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users weight="duotone" className="h-4 w-4 text-navy" /> {c.level}
                    </span>
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-navy-ink hover:text-green-deep"
                  >
                    Enquire <ArrowRight weight="bold" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products">
      <FeaturedSection />
      <GeneralSection />
      <CorporateSection />
    </section>
  );
}
