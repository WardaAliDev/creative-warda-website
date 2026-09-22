export default function CornerText() {
  const label = "MARKETING FOR LOCAL SERVICE BUSINESSES";

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-2 top-1/2 z-10 hidden -translate-y-1/2 [writing-mode:vertical-rl] xl:block"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink-3/50">
          {label}
        </span>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed right-2 top-1/2 z-10 hidden -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] xl:block"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink-3/50">
          {label}
        </span>
      </div>
    </>
  );
}
