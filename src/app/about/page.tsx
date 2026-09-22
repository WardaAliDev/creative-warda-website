import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import EyebrowTag from "@/components/EyebrowTag";
import FounderPhoto from "@/components/FounderPhoto";
import ArrowRight from "@/components/ArrowRight";
import Sticker from "@/components/Sticker";

export const metadata: Metadata = {
  title: "About Creative Warda",
  description:
    "Creative Warda is a marketing agency built specifically for local service businesses, from HVAC companies to electricians to therapists, across the UK and USA.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "We work on results, not activity",
    body: "Posts, ads and articles do not matter on their own. Calls, bookings and rankings do. Every piece of work we do ties back to one of those three outcomes.",
  },
  {
    title: "No lock-in contracts",
    body: "If the work is not moving the numbers, you should be free to walk away without penalty. We would rather earn the relationship every month than rely on a contract to keep it.",
  },
  {
    title: "One point of contact",
    body: "You are not passed between departments or account managers. You speak to the person actually doing the work.",
  },
  {
    title: "Specific to your business, not generic",
    body: "A therapy practice and an HVAC company do not need the same website or the same tone. We build around what your customers actually need to see before they call.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* FOUNDER BIO */}
      <section className="bg-cream py-20">
        <div className="container-wide grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <FounderPhoto className="max-w-[380px] tilt-left" />
          </Reveal>
          <Reveal delay={2}>
            <EyebrowTag icon="sparkle">Founder, Creative Warda</EyebrowTag>
            <h1 className="mt-4 font-heading text-[34px] font-medium text-ink balance md:text-[42px]">
              By the way, I am Warda
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
              I started Creative Warda because too many good local service businesses were
              losing work to competitors who were not better, just louder on Google. An
              HVAC company with twenty years of five star jobs sitting behind a competitor
              with two years and a better review strategy never sat right with me.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
              I do not believe local service businesses need a generic digital marketing
              agency that also happens to take on trade clients. They need someone who
              understands that a missed call at 9pm is a real problem, that a slow website is
              a lost job, and that the owner running the business rarely has an hour spare to
              think about any of it. That is the only kind of client I work with, and it is
              the only kind of marketing I do.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3.5 text-[14px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-rust-hover"
            >
              Book Your Free Audit
              <ArrowRight className="stroke-[1.4]" />
            </Link>
          </Reveal>
        </div>
      </section>

      <div
        className="divider-checkered"
        style={{ "--tile-color": "var(--color-rust)", "--tile-base": "var(--color-cream)" } as React.CSSProperties}
      />

      <section className="bg-cream-2 py-20">
        <div className="container-wide max-w-[680px]">
          <Reveal>
            <EyebrowTag icon="compass">Why This Niche</EyebrowTag>
            <h2 className="mt-3 font-heading text-[26px] text-ink balance">
              Why local service businesses specifically
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
              HVAC companies, electricians, plumbers, therapists and contractors are not
              chosen the way most products are chosen. Someone has a problem right now, they
              search Google, and they call one of the first few names they see. The business
              that wins is rarely the cheapest or even the best. It is the one that showed up
              first, looked trustworthy, and made it easy to say yes.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
              That single pattern, visibility plus trust plus a fast response, is what
              decides who gets the call across almost every local service business. It is
              also the pattern most marketing agencies get wrong, because they are built for
              e-commerce brands or national companies with a completely different buying
              process.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
              Creative Warda exists to do that one pattern well, for the businesses that
              actually depend on it. Not a broad digital marketing agency that happens to
              take on local clients, but a specialist in exactly this kind of business.
            </p>
          </Reveal>
        </div>
      </section>

      <div
        className="divider-checkered"
        style={{ "--tile-color": "var(--color-butter)", "--tile-base": "var(--color-cream-2)" } as React.CSSProperties}
      />

      <section className="bg-cream py-20">
        <div className="container-wide">
          <Reveal>
            <EyebrowTag icon="pin">How We Work</EyebrowTag>
            <h2 className="mt-3 font-heading text-[26px] text-ink balance">
              What working with us looks like
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="rounded-[14px] border-[1.5px] border-line bg-white p-6">
                  <h3 className="font-heading text-[18px] text-ink">{v.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2">{v.body}</p>
                </div>
              </Reveal>
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
