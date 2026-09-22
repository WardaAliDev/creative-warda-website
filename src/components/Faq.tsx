"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export function FaqSchema({ items }: { items: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FaqSchema items={items} />
      <div className="grid items-start gap-4 md:grid-cols-2">
        {items.map((item, i) => {
          const open = openIndex === i;
          return (
            <div
              key={item.q}
              className={`rounded-[14px] border-[1.5px] bg-white p-5 transition-colors ${
                open ? "border-rust" : "border-rust/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-heading text-[16px] leading-snug text-ink">
                  {item.q}
                </span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[1.5px] text-[15px] font-bold transition-colors ${
                    open ? "border-rust bg-rust text-white" : "border-line text-rust"
                  }`}
                >
                  {open ? "−" : "+"}
                </span>
              </button>
              {open && (
                <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
