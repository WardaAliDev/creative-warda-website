import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { INDUSTRIES, Industry } from "@/lib/industries";
import { SERVICES } from "@/lib/services";
import ArrowRight from "@/components/ArrowRight";
import EyebrowTag from "@/components/EyebrowTag";
import Sticker from "@/components/Sticker";

export function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ slug: ind.slug }));
}

function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle.replace(/ \| Creative Warda$/, ""),
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <section className="border-b border-line bg-navy pb-16 pt-14 text-white">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-[12px] text-white/60">
            <Link href="/industries" className="hover:text-white">Industries</Link>
            <span>/</span>
            <span className="text-white/85">{industry.name}</span>
          </div>
          <h1 className="mt-4 max-w-[680px] font-heading text-[34px] font-medium balance md:text-[44px]">
            Marketing for {industry.name}
          </h1>
          <p className="mt-5 max-w-[600px] text-[17px] leading-relaxed text-white/75">
            {industry.summary}
          </p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container-wide max-w-[680px]">
          <Reveal>
            <p className="text-[16px] leading-relaxed text-ink-2">{industry.detail}</p>
            <div className="mt-8 rounded-[8px] border border-line bg-cream-2 p-6">
              <p className="text-[13px] font-bold uppercase tracking-wide text-rust">
                A search that decides the outcome
              </p>
              <p className="mt-1.5 font-heading text-[20px] text-ink">
                &ldquo;{industry.searchExample}&rdquo;
              </p>
              <p className="mt-1.5 text-[14px] text-ink-2">
                Whoever ranks in the top three when this gets typed nearby usually gets the
                call. We make sure that is you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-2 py-16">
        <div className="container-wide">
          <h2 className="font-heading text-[24px] text-ink">Where to start</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {SERVICES.slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-[8px] border border-line bg-white p-5 transition-colors hover:border-rust"
              >
                <p className="font-heading text-[16px] text-ink">{s.name}</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-2">
                  {s.cardSummary}
                </p>
              </Link>
            ))}
          </div>
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
