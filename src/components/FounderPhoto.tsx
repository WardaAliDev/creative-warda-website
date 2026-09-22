import Image from "next/image";

export default function FounderPhoto({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[14px] shadow-card ${className}`}>
      <Image
        src="/images/warda-founder.jpg"
        alt="Warda, founder of Creative Warda"
        width={760}
        height={950}
        className="aspect-[4/5] w-full object-cover"
        priority
      />
    </div>
  );
}
