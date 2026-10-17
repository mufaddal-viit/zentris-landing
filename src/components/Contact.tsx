"use client";

import { useState, type FormEvent } from "react";
import { EnvelopeSimple, MapPin, Phone, Clock, CheckCircle, ArrowRight, CaretDown } from "@phosphor-icons/react";
import { company, socials } from "@/lib/content";
import { SectionHeading, SocialIcon } from "./ui";
import { fieldCls, labelCls } from "./HeroForm";
import UaeMap from "./UaeMap";

function Select({ name, placeholder, options }: { name: string; placeholder: string; options: string[] }) {
  return (
    <span className="relative mt-1.5 block">
      <select name={name} defaultValue="" className={`${fieldCls} appearance-none bg-white pr-11`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <CaretDown weight="bold" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
    </span>
  );
}

export default function Contact() {
  const [done, setDone] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  const info = [
    { icon: Phone, label: "Call us", value: company.phone, href: company.phoneHref },
    { icon: EnvelopeSimple, label: "Email us", value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: "Visit us", value: company.address },
    { icon: Clock, label: "Working hours", value: company.hours },
  ];
  const input = `${fieldCls} mt-1.5 bg-white`;

  return (
    <section id="contact" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            title="Let's plan your next training program"
            body="Share your requirements and a training advisor will come back with a tailored proposal, schedule and quotation."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {info.map((i) => (
              <li key={i.label} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green/10 text-green-deep">
                  <i.icon weight="duotone" className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm text-muted">{i.label}</div>
                  {i.href ? (
                    <a href={i.href} className="mt-0.5 block break-words font-semibold text-navy-ink hover:text-green-deep">
                      {i.value}
                    </a>
                  ) : (
                    <div className="mt-0.5 font-semibold text-navy-ink">{i.value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="relative mt-10 overflow-hidden rounded-3xl bg-navy-deep p-7 text-white">
            <UaeMap className="pointer-events-none absolute -right-20 top-1/2 h-[190%] w-auto -translate-y-[42%]" />
            <div className="relative max-w-[60%]">
              <div className="font-display text-xl font-semibold tracking-tight">Al Rigga, Dubai</div>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                Training at our centre, or on-site anywhere in the seven emirates.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-green"
                  >
                    <SocialIcon name={s.key} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-surface p-6 sm:p-10">
            {done ? (
              <div className="flex flex-col items-start py-16" role="status">
                <CheckCircle weight="duotone" className="h-12 w-12 text-green" />
                <h3 className="t-h3 mt-4 text-navy-ink">Message sent</h3>
                <p className="mt-2 text-[15px] text-muted">Thanks for reaching out. We will respond within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <label className={labelCls}>
                  Full name <span className="text-green-deep">*</span>
                  <input required name="name" autoComplete="name" placeholder="Your name" className={input} />
                </label>
                <label className={labelCls}>
                  Company
                  <input name="company" autoComplete="organization" placeholder="Company name" className={input} />
                </label>
                <label className={labelCls}>
                  Business email <span className="text-green-deep">*</span>
                  <input required type="email" name="email" autoComplete="email" placeholder="you@company.com" className={input} />
                </label>
                <label className={labelCls}>
                  Phone
                  <input type="tel" name="phone" autoComplete="tel" placeholder="+971" className={input} />
                </label>
                <label className={labelCls}>
                  Number of delegates
                  <Select name="size" placeholder="Select" options={["1 to 5", "6 to 20", "21 to 50", "50+"]} />
                </label>
                <label className={labelCls}>
                  Training interest
                  <Select
                    name="interest"
                    placeholder="Select a category"
                    options={[
                      "Safety training",
                      "Corporate & management training",
                      "Firefighting training",
                      "Equipment operator certification",
                    ]}
                  />
                </label>
                <label className={`${labelCls} sm:col-span-2`}>
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your team, site and timelines"
                    className={`${input} h-auto py-3.5`}
                  />
                </label>
                <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[13px] text-muted">We reply within one business day.</p>
                  <button
                    type="submit"
                    className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-green px-8 text-base font-semibold text-white transition-colors hover:bg-green-deep"
                  >
                    Send message <ArrowRight weight="bold" className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
