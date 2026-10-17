"use client";

import { faqs } from "@/lib/content";
import { SectionHeading } from "./ui";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="bg-surface py-20 sm:py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          title="Frequently asked questions"
          body="Everything you need to know about our training programs, certifications and booking process."
          className="mx-auto text-center"
        />

        <Accordion className="mx-auto mt-14 max-w-3xl divide-y divide-navy-ink/10">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-none"
            >
              <AccordionTrigger className="py-5 text-base font-semibold text-navy-ink hover:text-green-deep hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted leading-relaxed">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
