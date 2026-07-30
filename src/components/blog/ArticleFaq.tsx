"use client";

import { useState } from "react";
import type { BlogFaqItem } from "@/lib/blog-data";

export default function ArticleFaq({ faq }: { faq: BlogFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="article-faq-heading" className="mt-16">
      <h2
        id="article-faq-heading"
        className="font-display text-2xl font-bold text-foreground"
      >
        Questions fréquentes
      </h2>
      <div className="mt-6 space-y-3">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-xl border border-gold/15 bg-charcoal-card"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-base font-semibold text-foreground">
                  {item.question}
                </span>
                <span
                  className={`shrink-0 text-xl text-gold transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-foreground/75">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
