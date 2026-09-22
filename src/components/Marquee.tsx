const ITEMS = [
  "Local SEO",
  "Google Business Profile",
  "Website Design",
  "Marketing Automation",
  "Paid Marketing",
  "Social Media Management",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden bg-butter py-3.5">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-2.5 px-7 text-[12px] font-bold uppercase tracking-wide text-ink/75"
          >
            <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-brown" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
