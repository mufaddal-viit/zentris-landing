"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CaretDown, CheckCircle } from "@phosphor-icons/react";

export const fieldCls =
  "h-12 w-full rounded-xl border border-line bg-surface/70 px-4 text-[15px] text-ink placeholder:text-muted/70 outline-none transition focus:border-navy focus:bg-white focus:ring-4 focus:ring-navy/10";
export const labelCls = "block text-sm font-medium text-navy-ink";

export default function HeroForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <div className="p-6 sm:p-8 short:p-6">
      {done ? (
        <div className="flex flex-col items-start py-8" role="status">
          <CheckCircle weight="duotone" className="h-12 w-12 text-green" />
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-navy-ink">Proposal requested</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            A training advisor will contact you within one business day with a tailored plan.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4 short:space-y-3">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy-ink">Get a free training proposal</h2>
            <p className="mt-1.5 text-[15px] text-muted">Tell us about your team and we will tailor a plan.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <label className={labelCls}>
              Full name <span className="text-green-deep">*</span>
              <input required name="name" autoComplete="name" placeholder="Your name" className={`${fieldCls} mt-1.5 short:h-11`} />
            </label>
            <label className={labelCls}>
              Company
              <input name="company" autoComplete="organization" placeholder="Company name" className={`${fieldCls} mt-1.5 short:h-11`} />
            </label>
            <label className={labelCls}>
              Business email <span className="text-green-deep">*</span>
              <input required type="email" name="email" autoComplete="email" placeholder="you@company.com" className={`${fieldCls} mt-1.5 short:h-11`} />
            </label>
            <label className={labelCls}>
              Phone
              <input type="tel" name="phone" autoComplete="tel" placeholder="+971" className={`${fieldCls} mt-1.5 short:h-11`} />
            </label>
          </div>
          <label className={labelCls}>
            Training interest
            <span className="relative mt-1.5 block">
              <select name="interest" defaultValue="" className={`${fieldCls} appearance-none pr-11 short:h-11`}>
              <option value="" disabled>
                Select a category
              </option>
              <option>Safety training</option>
              <option>Corporate &amp; management training</option>
              <option>Firefighting training</option>
              <option>Equipment operator certification</option>
              <option>Not sure yet</option>
              </select>
              <CaretDown weight="bold" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            </span>
          </label>
          <button
            type="submit"
            className="inline-flex h-13 w-full items-center short:h-12 justify-center gap-2 rounded-full bg-navy text-base font-semibold text-white transition-colors hover:bg-navy-deep"
          >
            Request proposal
            <ArrowRight weight="bold" className="h-4 w-4" />
          </button>
          <p className="text-[13px] text-muted">No commitment. We reply within one business day.</p>
        </form>
      )}
    </div>
  );
}
