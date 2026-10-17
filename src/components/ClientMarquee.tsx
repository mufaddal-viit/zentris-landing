import { clients } from "@/lib/content";

export default function ClientMarquee() {
  const track = [...clients, ...clients];
  return (
    <section className="border-y border-line bg-white py-10 lg:py-12">
      <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
        <p className="shrink-0 text-[15px] font-medium text-muted lg:w-56">Trusted by teams across the UAE</p>
        <div className="marquee relative min-w-0 flex-1 overflow-hidden" style={{ ["--marquee-duration" as string]: "45s" }}>
          <div className="marquee-track items-center">
            {track.map((c, i) => (
              <span
                key={`${c}-${i}`}
                aria-hidden={i >= clients.length}
                className="mx-8 whitespace-nowrap font-display text-2xl font-bold tracking-tight text-navy-ink/35"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
