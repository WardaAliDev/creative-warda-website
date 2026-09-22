import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/services";
import ArrowRight from "@/components/ArrowRight";
import EyebrowTag from "@/components/EyebrowTag";
import Sticker from "@/components/Sticker";

export const metadata: Metadata = {
  title: "Marketing Services for Local Service Businesses",
  description:
    "Local SEO, Google Business Profile management, website design, marketing automation, paid marketing and social media management for local service businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-cream-2 pb-16 pt-16">
        <div className="container-wide">
          <h1 className="font-heading text-[36px] font-medium text-ink balance md:text-[48px]">
            Marketing Services for Local Service Businesses
          </h1>
          <p className="mt-4 max-w-[600px] text-[17px] leading-relaxed text-ink-2">
            Everything a local service business needs to rank higher, generate more reviews
            and convert website visitors into booked jobs. Click any service to see exactly
            what is included, how it works and what results to expect.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-wide grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <Link
                href={`/services/${s.slug}`}
                className="flex h-full flex-col rounded-[8px] border-[1.5px] border-line bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-rust hover:shadow-card"
              >
                <span className="mb-3 text-[11px] font-bold uppercase tracking-wide text-rust">
                  {s.tag}
                </span>
                <h2 className="font-heading text-[20px] text-ink">{s.name}</h2>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-2">
                  {s.cardSummary}
                </p>
                <span className="mt-5 text-[13px] font-bold text-rust">See how it works</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <div
        className="divider-checkered"
        style={{ "--tile-color": "var(--color-brown)", "--tile-base": "var(--color-cream)" } as React.CSSProperties}
      />

      <section className="relative overflow-hidden bg-cream py-22">
        <Sticker name="cat-phone" className="bottom-[2%] left-[2%] sm:bottom-[4%] sm:left-[4%]" size={260} rotate={-6} />
        <div className="container-wide text-center">
          <EyebrowTag icon="sparkle" className="justify-center">Ready When You Are</EyebrowTag>
          <h2 className="mx-auto mt-3 max-w-[640px] font-heading text-[32px] font-bold leading-[1.05] tracking-tight text-brown balance md:text-[46px]">
            Ready to get your business booked solid?
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[16px] text-ink-2">
            A free audit of your Google presence, your website and your reviews. No
            obligation, no lock-in contracts.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brown px-7 py-4 text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-brown-hover"
          >
            Get My Free Audit
            <ArrowRight className="stroke-[1.4]" />
          </Link>
        </div>
      </section>

      <div
        className="divider-checkered"
        style={{ "--tile-color": "var(--color-brown)", "--tile-base": "var(--color-cream)" } as React.CSSProperties}
      />
    </>
  );
}
