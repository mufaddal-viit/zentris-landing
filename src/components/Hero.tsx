import { CheckCircle, SealCheck, ArrowRight } from "@phosphor-icons/react/ssr";
import HeroForm from "./HeroForm";
import UaeMap from "./UaeMap";
import { Button } from "./ui";
import { stats } from "@/lib/content";

const proof = [
  "Approved by accredited bodies",
  "On-site or in-centre delivery",
  "Certified industry trainers",
  "Aligned to UAE regulations",
];

// Fade the western emirates out so the map reads as texture behind the copy.
const fade = "[mask-image:linear-gradient(to_right,transparent,black_45%)]";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Desktop: hero fills the first screen below the header */}
      <div className="container-x relative grid pb-16 pt-10 sm:pt-14 xl:min-h-[calc(100svh-120px)] xl:grid-cols-12 xl:items-center xl:gap-12 xl:py-10 short:py-6">
        {/* Copy */}
        <div className="relative z-10 flex flex-col xl:col-span-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-[13px] font-medium text-navy-ink shadow-[0_0_0_1px_var(--line)]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green/12 text-green-deep">
              <SealCheck weight="fill" className="h-4 w-4" />
            </span>
            KHDA-approved training provider in Dubai
          </span>

          <h1 className="t-display mt-6 max-w-[20ch] text-navy-ink short:mt-4">
            Boost your business with expert management &amp; safety training.
          </h1>

          <p className="t-lead mt-6 max-w-[56ch] text-muted short:mt-4">
            Tailored, hands-on corporate and occupational safety programs that
            build leadership, reduce risk and keep your workforce compliant
            across the UAE.
          </p>

          <div className="relative mt-7 short:hidden">
            {/* Phones and tablets: UAE map behind the copy, Dubai in the free space beside this list */}
            <UaeMap
              className={`pointer-events-none absolute -right-[81px] -top-[73px] -z-10 h-[360px] w-[457px] sm:-right-[117px] sm:-top-[148px] sm:h-[520px] sm:w-[660px] xl:hidden ${fade}`}
            />
            <ul className="grid max-w-xl gap-x-6 gap-y-2.5 text-[15px] text-navy-ink sm:grid-cols-2">
              {proof.map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <CheckCircle
                    weight="fill"
                    className="h-5 w-5 shrink-0 text-green"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row short:mt-6">
            <Button href="#products" size="lg">
              View our trainings
              <ArrowRight weight="bold" className="h-4 w-4" />
            </Button>
            <Button href="#contact" size="lg" variant="outline">
              Talk to an advisor
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-y-6 sm:grid-cols-4 xl:mt-10 short:mt-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-l border-navy-ink/15 pl-4 sm:pl-5"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight text-navy-ink sm:text-[2.125rem]">
                  {s.value}
                </dd>
                <dd className="mt-1 text-sm leading-snug text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Proposal form */}
        <div className="relative mt-12 xl:col-span-5 xl:mt-0">
          <div className="relative max-w-2xl xl:ml-auto xl:max-w-[480px]">
            {/* Desktop: UAE map spreads left behind the copy, with Dubai just beside the form */}
            <UaeMap
              className={`pointer-events-none absolute -top-[150px] right-[calc(100%-169px)] hidden h-[880px] w-[1117px] xl:block ${fade}`}
            />
            {/* Green top accent and a soft tint that fades to white keep the card on-brand */}
            <div className="relative z-10 overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_rgba(24,186,96,0.18),0_30px_60px_-28px_rgba(11,34,57,0.35)]">
              <span className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-green/[0.08] to-transparent" aria-hidden />
              <span className="absolute inset-x-0 top-0 h-1.5 bg-green" aria-hidden />
              <div className="relative">
                <HeroForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
