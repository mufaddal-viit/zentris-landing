import Image from "next/image";
import { SlidersHorizontal, GlobeHemisphereEast, HardHat } from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";
import { whyChoose } from "@/lib/content";
import { Button, SectionHeading } from "./ui";
import Illustration from "./Illustration";

const icons: Record<string, Icon> = {
  tailored: SlidersHorizontal,
  standards: GlobeHemisphereEast,
  handson: HardHat,
};

export default function WhyChoose() {
  return (
    <section id="why" className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 xl:grid-cols-12 xl:items-end xl:gap-16">
          <div className="relative xl:col-span-5">
            {/* Crew illustration sits faintly behind the heading */}
            <Illustration
              name="crew"
              className="absolute -right-6 -top-16 -z-10 w-[300px] opacity-[0.1] sm:w-[400px] xl:-right-4 xl:-top-28 xl:w-[460px]"
            />
            <SectionHeading
              title="Training built around how your teams actually work"
              body="Founded by industry experts in management, occupational safety and firefighting, ZENTRIS delivers programs that are practical, compliant and measurable."
            />
            <Button href="#contact" variant="outline" className="mt-8">
              Speak to a training advisor
            </Button>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl xl:col-span-7 xl:aspect-[16/8]">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80"
              alt="Delegates in a classroom training session"
              fill
              sizes="(min-width: 1280px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-y-12 md:grid-cols-3 md:gap-x-10 lg:mt-20 lg:gap-x-16">
          {whyChoose.map((w) => {
            const Icon = icons[w.icon];
            return (
              <div key={w.title} className="border-t-2 border-navy-ink pt-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10 text-green-deep">
                  <Icon weight="duotone" className="h-8 w-8" />
                </span>
                <h3 className="t-h3 mt-6 text-navy-ink">{w.title}</h3>
                <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-muted">{w.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
