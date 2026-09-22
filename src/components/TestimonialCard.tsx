export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  placeholder?: boolean;
};

export default function TestimonialCard({ t, tilt }: { t: Testimonial; tilt?: "left" | "right" }) {
  return (
    <div
      className={`flex h-full flex-col rounded-[14px] border-[1.5px] p-6 ${
        t.placeholder
          ? "border-dashed border-rust/40 bg-rust-light"
          : "border-line bg-white"
      } ${tilt === "left" ? "tilt-left" : tilt === "right" ? "tilt-right" : ""}`}
    >
      <span className="font-heading text-[34px] leading-none text-rust/40">&ldquo;</span>
      <p className="mt-1 flex-1 text-[15px] italic leading-relaxed text-ink-2">{t.quote}</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-[13px] font-bold text-butter">
          {t.placeholder ? "?" : t.name.charAt(0)}
        </div>
        <div>
          <p className="text-[13.5px] font-bold text-ink">{t.name}</p>
          <p className="text-[12.5px] text-ink-3">{t.role}</p>
        </div>
      </div>
    </div>
  );
}
