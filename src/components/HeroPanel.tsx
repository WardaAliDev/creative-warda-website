const RESULTS = [
  { name: "Your Business", rating: "4.9", reviews: "128", active: true },
  { name: "Competitor A", rating: "4.6", reviews: "84", active: false },
  { name: "Competitor B", rating: "4.4", reviews: "51", active: false },
];

export default function HeroPanel() {
  return (
    <div className="relative">
      <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-butter/25 blur-2xl" aria-hidden="true" />
      <div className="relative rounded-[14px] border border-line bg-white shadow-card">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 rounded-full bg-cream-2 px-3 py-1 text-[11px] text-ink-3">
            google.com/maps
          </span>
        </div>
        <div className="p-5">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-ink-3">
            Results near you
          </p>
          <div className="flex flex-col gap-2">
            {RESULTS.map((r, i) => (
              <div
                key={r.name}
                className={`flex items-center gap-3 rounded-[8px] border px-3 py-2.5 ${
                  r.active ? "border-rust bg-rust-light" : "border-line bg-white"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                    r.active ? "bg-rust text-white" : "bg-cream-3 text-ink-3"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className={`text-[13px] font-bold ${r.active ? "text-rust" : "text-ink"}`}>
                    {r.name}
                  </p>
                  <p className="text-[11px] text-ink-3">
                    {r.rating} stars, {r.reviews} reviews
                  </p>
                </div>
                {r.active && (
                  <span className="rounded-[3px] bg-rust px-1.5 py-0.5 text-[9px] font-bold text-white">
                    Booked today
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3.5 text-center text-[12.5px] font-semibold text-ink-3">
        Where you rank decides who calls.
      </p>
    </div>
  );
}
