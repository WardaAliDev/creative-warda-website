import Image from "next/image";

const STICKERS = {
  van: "/stickers/van.png",
  pretzel: "/stickers/pretzel.png",
  "phone-handset": "/stickers/phone-handset.png",
  "flower-single": "/stickers/flower-single.png",
  camera: "/stickers/camera.png",
  "flower-bouquet": "/stickers/flower-bouquet.png",
  stamp: "/stickers/stamp.png",
  starburst: "/stickers/starburst.png",
  cloud: "/stickers/cloud.png",
  globe: "/stickers/globe.png",
  kitten: "/stickers/kitten.png",
  "cat-phone": "/stickers/cat-phone.png",
} as const;

export type StickerName = keyof typeof STICKERS;

export default function Sticker({
  name,
  className = "",
  size = 96,
  rotate = 0,
}: {
  name: StickerName;
  className?: string;
  size?: number;
  rotate?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute hidden select-none sm:block ${className}`}
      style={{
        width: "clamp(56px, 9vw, " + size + "px)",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <Image
        src={STICKERS[name]}
        alt=""
        width={size}
        height={size}
        className="h-auto w-full drop-shadow-md"
        aria-hidden="true"
      />
    </div>
  );
}
