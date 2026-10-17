import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { projects } from "@/lib/content";
import { Button, SectionHeading } from "./ui";

export default function Projects() {
  return (
    <section id="projects" className="bg-white pb-20 sm:pb-24 lg:pb-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Recent training projects"
            body="A snapshot of programs delivered for construction, logistics and industrial clients across the Emirates."
          />
          <Button href="#contact" variant="outline" className="w-fit shrink-0">
            Discuss your project
          </Button>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-3 lg:mt-16">
          {projects.map((p) => (
            <Link key={p.title} href="#contact" className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute left-4 top-4 flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-navy-ink">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col pt-6">
                <div className="text-sm font-medium text-green-deep">{p.client}</div>
                <h3 className="t-h3 mt-2 flex items-start justify-between gap-4 text-navy-ink">
                  {p.title}
                  <ArrowUpRight weight="bold" className="mt-1 h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-green-deep" />
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
