"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/components/TestimonialCard";

const CARD_BG = ["bg-navy text-white", "bg-butter text-ink", "bg-rust text-white"];

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(.16,.8,.3,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((t, i) => (
          <div key={t.name + i} className="w-full shrink-0 px-1">
            <div className={`mx-auto max-w-[560px] rounded-[16px] p-9 text-center ${CARD_BG[i % CARD_BG.length]}`}>
              <span className="font-heading text-[44px] leading-none opacity-40">&ldquo;</span>
              <p className="mx-auto mt-1 max-w-[440px] text-[17px] italic leading-relaxed">
                {t.quote}
              </p>
              <p className="mt-6 text-[14px] font-bold">{t.name}</p>
              <p className="text-[13px] opacity-70">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {items.map((t, i) => (
          <button
            key={t.name + i}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-7 bg-rust" : "w-2.5 bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
