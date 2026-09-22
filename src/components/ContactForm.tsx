"use client";

import { useRef, useState } from "react";
import { SITE } from "@/lib/site";

const COUNTRIES = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Ireland",
  "New Zealand",
  "Other",
];

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch(SITE.formspreeEndpoint, {
        method: "POST",
        body: new FormData(formRef.current),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(`Something went wrong. Please email ${SITE.email} directly.`);
      }
    } catch {
      setError(`Something went wrong. Please email ${SITE.email} directly.`);
    }
    setSending(false);
  };

  if (submitted) {
    return (
      <div className="rounded-[8px] border border-line bg-cream-2 p-8 text-center">
        <p className="font-heading text-[22px] text-ink">Request received.</p>
        <p className="mt-2 text-[15px] text-ink-2">
          We will get back to you within one business day with your audit.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[13px] font-semibold text-ink">Name</label>
          <input id="name" name="name" required className="rounded-[6px] border border-line px-3.5 py-2.5 text-[15px] outline-none focus:border-rust" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="business" className="text-[13px] font-semibold text-ink">Business name</label>
          <input id="business" name="business" required className="rounded-[6px] border border-line px-3.5 py-2.5 text-[15px] outline-none focus:border-rust" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-[13px] font-semibold text-ink">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@business.com"
          className="rounded-[6px] border border-line px-3.5 py-2.5 text-[15px] outline-none focus:border-rust"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="city" className="text-[13px] font-semibold text-ink">City</label>
          <input id="city" name="city" required className="rounded-[6px] border border-line px-3.5 py-2.5 text-[15px] outline-none focus:border-rust" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="country" className="text-[13px] font-semibold text-ink">Country</label>
          <select
            id="country"
            name="country"
            required
            defaultValue=""
            className="rounded-[6px] border border-line bg-white px-3.5 py-2.5 text-[15px] outline-none focus:border-rust"
          >
            <option value="" disabled>Select your country</option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="industry" className="text-[13px] font-semibold text-ink">What kind of business is it</label>
        <input id="industry" name="industry" placeholder="HVAC, electrical, plumbing, therapy practice, other" className="rounded-[6px] border border-line px-3.5 py-2.5 text-[15px] outline-none focus:border-rust" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[13px] font-semibold text-ink">What is going on right now</label>
        <textarea id="message" name="message" rows={4} required className="rounded-[6px] border border-line px-3.5 py-2.5 text-[15px] outline-none focus:border-rust" />
      </div>
      {error && <p className="text-[14px] text-rust">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-rust px-6 py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-rust-hover disabled:opacity-60"
      >
        {sending ? "Sending" : "Send My Audit Request"}
      </button>
    </form>
  );
}
