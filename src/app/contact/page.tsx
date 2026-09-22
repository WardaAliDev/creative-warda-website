import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Creative Warda. Free Marketing Audit",
  description:
    "Book a free marketing audit. Find out exactly why you are losing calls to competitors and how to fix it.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-cream py-20">
      <div className="container-wide grid gap-14 md:grid-cols-2">
        <div>
          <h1 className="font-heading text-[36px] font-medium text-ink balance md:text-[44px]">
            Get Your Free Marketing Audit
          </h1>
          <p className="mt-4 max-w-[440px] text-[17px] leading-relaxed text-ink-2">
            Tell us about your business and we will review your Google presence, your
            website and your reviews, then tell you exactly what is costing you calls.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-wide text-rust">Email</p>
              <a href={`mailto:${SITE.email}`} className="mt-1 block text-[16px] text-ink">
                {SITE.email}
              </a>
            </div>
            <div>
              <p className="text-[13px] font-bold uppercase tracking-wide text-rust">Markets</p>
              <p className="mt-1 text-[16px] text-ink">UK, US and worldwide</p>
            </div>
            <div>
              <p className="text-[13px] font-bold uppercase tracking-wide text-rust">
                Response time
              </p>
              <p className="mt-1 text-[16px] text-ink">Within one business day</p>
            </div>
          </div>
        </div>

        <div className="rounded-[8px] border border-line bg-white p-7 shadow-card">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
