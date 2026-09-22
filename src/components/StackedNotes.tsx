const NOTES = [
  { text: "Being the first name they see when they search, not the third", bg: "bg-navy", color: "text-white" },
  { text: "Never missing a follow up on a quote again", bg: "bg-butter", color: "text-ink" },
  { text: "Watching the calendar fill without chasing a single review yourself", bg: "bg-rust", color: "text-white" },
];

export default function StackedNotes() {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[360px]">
      {NOTES.map((note, i) => (
        <div
          key={note.text}
          className={`absolute w-[280px] rounded-[10px] p-6 shadow-card ${note.bg} ${note.color}`}
          style={{
            top: `${i * 70}px`,
            left: `${i % 2 === 0 ? 10 : 60}px`,
            transform: `rotate(${i === 0 ? -6 : i === 1 ? 4 : -3}deg)`,
            zIndex: i + 1,
          }}
        >
          <p className="font-heading text-[17px] leading-snug">{note.text}</p>
        </div>
      ))}
    </div>
  );
}
