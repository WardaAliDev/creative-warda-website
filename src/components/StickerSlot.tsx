export default function StickerSlot({
  className = "",
  size = 110,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute hidden items-center justify-center rounded-full border-2 border-dashed border-white/25 lg:flex ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="text-center text-[10px] font-bold uppercase leading-tight tracking-wide text-white/40">
        Sticker
        <br />
        slot
      </span>
    </div>
  );
}
