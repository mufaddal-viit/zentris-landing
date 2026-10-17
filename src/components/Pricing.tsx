import { Check } from "@phosphor-icons/react/ssr";
import { pricing } from "@/lib/content";
import { Button, SectionHeading } from "./ui";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Simple, transparent training packages"
            body="Choose a plan that fits your headcount. All packages include certification and training records."
          />
          <p className="max-w-xs text-sm text-muted lg:text-right">
            Prices are indicative and exclusive of VAT. Group discounts available for 25+ delegates.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-8 lg:p-10 ${
                p.featured ? "bg-navy-deep text-white" : "bg-surface"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className={`t-h3 ${p.featured ? "text-white" : "text-navy-ink"}`}>{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full bg-green px-3 py-1 text-[13px] font-semibold text-white">Most popular</span>
                )}
              </div>
              <p className={`mt-2 text-[15px] leading-relaxed lg:min-h-[3.25rem] ${p.featured ? "text-white/70" : "text-muted"}`}>{p.desc}</p>
              <div className={`mt-8 border-t pt-8 ${p.featured ? "border-white/15" : "border-navy-ink/10"}`}>
                <span className="font-display text-5xl font-bold tracking-tight">{p.price}</span>
                <span className={`ml-2 text-[15px] ${p.featured ? "text-white/70" : "text-muted"}`}>{p.unit}</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3.5 text-[15px]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check weight="bold" className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${p.featured ? "text-green" : "text-green-deep"}`} />
                    <span className={p.featured ? "text-white/90" : "text-ink"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button href="#contact" variant={p.featured ? "primary" : "outline"} size="lg" className="mt-10 w-full">
                {p.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
