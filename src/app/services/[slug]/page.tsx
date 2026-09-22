import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import EyebrowTag from "@/components/EyebrowTag";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { SITE } from "@/lib/site";
import ArrowRight from "@/components/ArrowRight";
import Sticker from "@/components/Sticker";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle.replace(/ \| Creative Warda$/, ""),
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: SITE.countries.map((name) => ({ "@type": "Country", name })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="border-b border-line bg-navy pb-16 pt-14 text-white">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-[12px] text-white/60">
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white/85">{service.name}</span>
          </div>
          <h1 className="mt-4 max-w-[720px] font-heading text-[36px] font-medium balance md:text-[48px]">
            {service.name}
          </h1>
          <p className="mt-5 max-w-[620px] text-[17px] leading-relaxed text-white/75">
            {service.heroLead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-butter px-6 py-3.5 text-[14px] font-bold uppercase tracking-wide text-rust transition-colors hover:bg-butter-hover"
            >
              Get My Free Audit
              <ArrowRight className="stroke-[1.4]" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-bold text-white transition-colors hover:border-white"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Direct answer block, GEO/AEO */}
      <section className="border-b border-line bg-butter-light py-8">
        <div className="container-wide">
          <p className="max-w-[720px] text-[16px] leading-relaxed text-ink">
            <strong>In short:</strong> {service.answerBlock}
          </p>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-cream py-20">
        <div className="container-wide">
          <Reveal>
            <EyebrowTag icon="pin">The Real Problem</EyebrowTag>
            <h2 className="mt-3 font-heading text-[28px] font-medium text-ink balance md:text-[36px]">
              What is actually going wrong
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[8px] border border-line bg-line md:grid-cols-2">
            {service.problems.map((p, i) => (
              <Reveal key={p.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="h-full bg-cream p-7">
                  <p className="mb-1.5 text-[13px] font-bold text-rust">{p.title}</p>
                  <p className="text-[14.5px] leading-relaxed text-ink-2">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-rust-light py-16">
        <div className="container-wide grid gap-8 sm:grid-cols-3">
          {service.stats.map((s, i) => (
            <Reveal key={s.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <p className="font-heading text-[32px] text-rust">{s.value}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DELIVERABLES */}
      {service.subServices ? (
        service.subServices.map((sub, subIndex) => (
          <section key={sub.id} id={sub.id} className={subIndex % 2 === 0 ? "bg-cream py-20" : "bg-cream-2 py-20"}>
            <div className="container-wide">
              <Reveal>
                <EyebrowTag icon={subIndex === 0 ? "compass" : "sparkle"}>{sub.name}</EyebrowTag>
                <p className="mt-4 max-w-[680px] text-[16px] leading-relaxed text-ink">
                  {sub.answerBlock}
                </p>
              </Reveal>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sub.deliverables.map((d, i) => (
                  <Reveal key={d.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                    <div>
                      <h3 className="font-heading text-[17px] text-ink">{d.name}</h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{d.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))
      ) : (
        <section className="bg-cream py-20">
          <div className="container-wide">
            <Reveal>
              <EyebrowTag icon="sparkle">What is included</EyebrowTag>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.deliverables.map((d, i) => (
                <Reveal key={d.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div>
                    <h3 className="font-heading text-[17px] text-ink">{d.name}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{d.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS */}
      <section className="bg-cream-2 py-20">
        <div className="container-wide">
          <Reveal className="text-center">
            <EyebrowTag icon="compass" className="justify-center">The Process</EyebrowTag>
            <h2 className="mt-3 font-heading text-[28px] font-medium text-ink balance md:text-[36px]">
              How it gets set up
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="border-t-2 border-rust pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-rust">
                    {step.step}
                  </span>
                  <h3 className="mt-1.5 font-heading text-[17px] text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-butter-light py-20">
        <div className="container-wide">
          <Reveal>
            <EyebrowTag icon="chat">Frequently Asked Questions</EyebrowTag>
            <h2 className="mt-3 max-w-[600px] font-heading text-[28px] font-medium text-ink balance md:text-[36px]">
              Common questions
            </h2>
          </Reveal>
          <div className="mt-8">
            <Faq items={service.faqs} />
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="bg-cream-2 py-16">
        <div className="container-wide">
          <h2 className="font-heading text-[22px] text-ink">Other services</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-[6px] border border-line bg-white px-4 py-2 text-[13.5px] font-semibold text-ink transition-colors hover:border-rust hover:text-rust"
              >
                {s.name}
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
