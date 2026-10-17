import { Quotes, Star } from "@phosphor-icons/react/ssr";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "./ui";

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} role="img" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} weight="fill" className="h-4 w-4" />
      ))}
    </div>
  );
}

const initials = (n: string) =>
  n
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

export default function Testimonials() {
  const featured = testimonials.find((t) => t.featured)!;
  const rest = testimonials.filter((t) => !t.featured);
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading title="What HSE and L&D leaders say about us" />
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12">
          <figure className="relative flex flex-col justify-between rounded-3xl bg-navy p-8 text-white sm:p-10 lg:col-span-6 lg:p-12">
            <div>
              <Quotes weight="fill" className="h-10 w-10 text-green" />
              <blockquote className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight sm:text-[1.75rem]">
                {featured.quote}
              </blockquote>
            </div>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green text-sm font-bold">
                {initials(featured.name)}
              </span>
              <div>
                <div className="font-semibold">{featured.name}</div>
                <div className="text-sm text-white/70">{featured.role}</div>
              </div>
              <Stars className="ml-auto hidden text-green sm:flex" />
            </figcaption>
          </figure>
          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-6 lg:grid-cols-1">
            {rest.map((t) => (
              <figure key={t.name} className="flex flex-col justify-between rounded-3xl bg-surface p-7 lg:flex-row lg:items-start lg:gap-8">
                <blockquote className="text-[17px] leading-relaxed text-ink lg:flex-1">{t.quote}</blockquote>
                <figcaption className="mt-6 lg:mt-0 lg:w-48 lg:shrink-0">
                  <Stars className="text-amber-500" />
                  <div className="mt-2 text-[15px] font-semibold text-navy-ink">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
