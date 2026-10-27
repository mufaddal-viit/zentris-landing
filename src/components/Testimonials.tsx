import { Star, Quotes } from "@phosphor-icons/react/ssr";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "./ui";

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-500" role="img" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} weight="fill" className="h-3.5 w-3.5" />
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

function ReviewCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="w-[360px] shrink-0 rounded-2xl bg-white p-6 sm:w-[400px]">
      <Stars />
      <blockquote className="mt-4 text-[15px] leading-relaxed text-ink">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
          {initials(t.name)}
        </span>
        <div>
          <div className="text-sm font-semibold text-navy-ink">{t.name}</div>
          <div className="text-xs text-muted">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  // Duplicate for seamless loop
  const track = [...testimonials, ...testimonials];

  return (
    <section className="bg-surface py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          title="What HSE and L&D leaders say about us"
          body="Trusted by training managers and safety officers across the UAE."
        />
      </div>

      <div
        className="marquee mt-12 overflow-hidden lg:mt-16"
        style={{ ["--marquee-duration" as string]: "35s" }}
      >
        <div className="marquee-track gap-5 px-2.5">
          {track.map((t, i) => (
            <ReviewCard
              key={`${t.name}-${i}`}
              t={t}
              aria-hidden={i >= testimonials.length || undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
