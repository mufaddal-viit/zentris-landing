"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CaretDown, CheckCircle } from "@phosphor-icons/react";

export const fieldCls =
  "h-12 w-full rounded-xl border border-line bg-surface/70 px-4 text-[15px] text-ink placeholder:text-muted/70 outline-none transition focus:border-navy focus:bg-white focus:ring-4 focus:ring-navy/10";
export const labelCls = "block text-sm font-medium text-navy-ink";

const inputCls = `${fieldCls} mt-1.5 short:h-11`;
const primaryBtn =
  "inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-navy text-base font-semibold text-white transition-colors hover:bg-navy-deep short:h-12";

type Step = "contact" | "details" | "done";

function StepLabel({ n }: { n: 1 | 2 }) {
  return (
    <div className="flex items-center gap-3 text-[13px] font-medium text-muted">
      <span>Step {n} of 2</span>
      <span className="flex gap-1" aria-hidden>
        <span className="h-1 w-6 rounded-full bg-green" />
        <span className={`h-1 w-6 rounded-full ${n === 2 ? "bg-green" : "bg-line"}`} />
      </span>
    </div>
  );
}

// First touch asks only for name, email and interest; the request is captured at step 1.
// Company and phone are an optional second step that helps tailor the proposal.
export default function HeroForm() {
  const [step, setStep] = useState<Step>("contact");
  const [firstName, setFirstName] = useState("");
  const companyRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (step === "details") companyRef.current?.focus();
  }, [step]);

  function onContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = String(new FormData(e.currentTarget).get("name") ?? "").trim();
    setFirstName(name.split(/\s+/)[0] ?? "");
    setStep("details");
  }

  function onDetails(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep("done");
  }

  return (
    <div className="p-6 sm:p-8 short:p-6" aria-live="polite">
      {step === "done" && (
        <div className="flex flex-col items-start py-8" role="status">
          <CheckCircle weight="duotone" className="h-12 w-12 text-green" />
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-navy-ink">Proposal requested</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            A training advisor will contact you within one business day with a tailored plan.
          </p>
        </div>
      )}

      {step === "contact" && (
        <form onSubmit={onContact} className="space-y-4 short:space-y-3">
          <div>
            <StepLabel n={1} />
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-green-deep">
              Get a free training proposal
            </h2>
            <p className="mt-1.5 text-[15px] text-muted">Three quick details and we will tailor a plan.</p>
          </div>
          <label className={labelCls}>
            Full name
            <input required name="name" autoComplete="name" placeholder="Your name" className={inputCls} />
          </label>
          <label className={labelCls}>
            Business email
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={inputCls}
            />
          </label>
          <label className={labelCls}>
            Training interest
            <span className="relative mt-1.5 block">
              <select
                required
                name="interest"
                defaultValue=""
                className={`${fieldCls} appearance-none pr-11 short:h-11`}
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option>Safety training</option>
                <option>Corporate &amp; management training</option>
                <option>Firefighting training</option>
                <option>Equipment operator certification</option>
                <option>Not sure yet</option>
              </select>
              <CaretDown
                weight="bold"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              />
            </span>
          </label>
          <button type="submit" className={primaryBtn}>
            Request proposal
            <ArrowRight weight="bold" className="h-4 w-4" />
          </button>
          <p className="text-[13px] text-muted">No commitment. We reply within one business day.</p>
        </form>
      )}

      {step === "details" && (
        <form onSubmit={onDetails} className="space-y-4 short:space-y-3">
          <div>
            <StepLabel n={2} />
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-green-deep">
              {firstName ? `Thanks, ${firstName}.` : "Thanks."} Your request is in.
            </h2>
            <p className="mt-1.5 text-[15px] text-muted">
              Add your company and phone so we can tailor the proposal. Both are optional.
            </p>
          </div>
          <label className={labelCls}>
            Company
            <input
              ref={companyRef}
              name="company"
              autoComplete="organization"
              placeholder="Company name"
              className={inputCls}
            />
          </label>
          <label className={labelCls}>
            Phone
            <input type="tel" name="phone" autoComplete="tel" placeholder="+971" className={inputCls} />
          </label>
          <button type="submit" className={primaryBtn}>
            Send details
            <ArrowRight weight="bold" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setStep("done")}
            className="w-full text-center text-[15px] font-semibold text-muted underline-offset-4 hover:text-navy-ink hover:underline"
          >
            Skip for now
          </button>
        </form>
      )}
    </div>
  );
}
