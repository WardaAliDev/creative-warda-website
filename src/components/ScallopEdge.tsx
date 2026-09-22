export default function ScallopEdge({
  bump,
  base,
  flip = false,
  size = 26,
}: {
  bump: string;
  base: string;
  flip?: boolean;
  size?: number;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        height: size,
        backgroundColor: base,
        backgroundImage: `radial-gradient(circle at ${size / 2}px ${flip ? size : 0}px, ${bump} ${
          size / 2 - 1
        }px, transparent ${size / 2}px)`,
        backgroundSize: `${size}px ${size}px`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: flip ? "bottom center" : "top center",
        transform: flip ? "rotate(180deg)" : undefined,
      }}
    />
  );
}
