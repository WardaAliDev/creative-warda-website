import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { INDUSTRIES } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries We Work With",
  description:
    "Creative Warda works with HVAC companies, electricians, plumbers, therapists and counselors, contractors and other local service businesses across the UK and USA.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-line bg-cream-2 pb-16 pt-16">
        <div className="container-wide">
          <h1 className="font-heading text-[36px] font-medium text-ink balance md:text-[48px]">
            Industries We Work With
          </h1>
          <p className="mt-4 max-w-[600px] text-[17px] leading-relaxed text-ink-2">
            We work with local service businesses that win or lose customers based on how
            they show up on Google. Here is who that usually includes.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <Link
                href={`/industries/${ind.slug}`}
                className="flex h-full flex-col rounded-[8px] border-[1.5px] border-line bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-rust hover:shadow-card"
              >
                <h2 className="font-heading text-[20px] text-ink">{ind.name}</h2>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-2">
                  {ind.summary}
                </p>
                <span className="mt-5 text-[13px] font-bold text-rust">Learn more</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
