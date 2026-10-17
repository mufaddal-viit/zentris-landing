import Image from "next/image";
import { CheckCircle, SealCheck, MapPin, ArrowRight } from "@phosphor-icons/react/ssr";
import HeroForm from "./HeroForm";
import { Button } from "./ui";
import { stats } from "@/lib/content";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80";

const proof = [
  "Approved by accredited bodies",
  "On-site or in-centre delivery",
  "Certified industry trainers",
  "Aligned to UAE regulations",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="container-x relative grid pb-16 pt-10 sm:pt-14 lg:pb-20 xl:grid-cols-12 xl:gap-12 xl:py-20 2xl:gap-16">
        {/* Copy */}
        <div className="flex flex-col justify-center xl:col-span-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-[13px] font-medium text-navy-ink shadow-[0_0_0_1px_var(--line)]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green/12 text-green-deep">
              <SealCheck weight="fill" className="h-4 w-4" />
            </span>
            KHDA-approved training provider in Dubai
          </span>

          <h1 className="t-display mt-6 max-w-[20ch] text-navy-ink">
            Boost your business with expert management &amp; safety training.
          </h1>

          <p className="t-lead mt-6 max-w-[56ch] text-muted">
            Tailored, hands-on corporate and occupational safety programs that build leadership, reduce risk and keep
            your workforce compliant across the UAE.
          </p>

          <ul className="mt-7 grid max-w-xl gap-x-6 gap-y-2.5 text-[15px] text-navy-ink sm:grid-cols-2">
            {proof.map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <CheckCircle weight="fill" className="h-5 w-5 shrink-0 text-green" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#products" size="lg">
              View our trainings
              <ArrowRight weight="bold" className="h-4 w-4" />
            </Button>
            <Button href="#contact" size="lg" variant="outline">
              Talk to an advisor
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-navy-ink/15 pl-4 sm:pl-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight text-navy-ink sm:text-[2.125rem]">
                  {s.value}
                </dd>
                <dd className="mt-1 text-sm leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Proposal card with site photo */}
        <div className="mt-12 xl:col-span-5 xl:mt-0 xl:self-center">
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_rgba(14,42,71,0.06),0_30px_60px_-28px_rgba(11,34,57,0.35)] md:grid md:grid-cols-2 xl:block">
            <div className="relative h-56 sm:h-72 md:h-auto md:min-h-full xl:h-56 2xl:h-64">
              <Image
                src={HERO_IMAGE}
                alt="A team of site workers in hard hats and hi-vis vests on a construction site"
                fill
                priority
                sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-[60%_center]"
              />
              <span className="absolute bottom-4 left-4 inline-flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-[13px] font-medium text-navy-ink backdrop-blur">
                <MapPin weight="fill" className="h-4 w-4 shrink-0 text-green" />
                On your site, or at our Al Rigga centre
              </span>
            </div>
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
}
