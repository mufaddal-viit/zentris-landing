import { Certificate } from "@phosphor-icons/react/ssr";
import { accreditations } from "@/lib/content";
import { SectionHeading } from "./ui";

export default function Accreditations() {
  return (
    <section className="bg-surface py-20 sm:py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            title="Approved and recognised"
            body="Our programs are approved by accredited bodies and aligned to international standards, so certificates are accepted by authorities, auditors and clients."
          />
        </div>
        <ul className="grid gap-px overflow-hidden rounded-3xl bg-line sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3">
          {accreditations.map((a) => (
            <li key={a.name} className="flex items-center gap-4 bg-white p-6 lg:p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy/[0.07] text-navy">
                <Certificate weight="duotone" className="h-7 w-7" />
              </span>
              <div>
                <div className="font-display text-lg font-bold tracking-tight text-navy-ink">{a.name}</div>
                <div className="text-sm text-muted">{a.sub}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
