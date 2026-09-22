export const ICONS = {
  camera: (
    <>
      <path d="M4 8.5C4 7.67 4.67 7 5.5 7H8L9 5.5H15L16 7H18.5C19.33 7 20 7.67 20 8.5V17C20 17.83 19.33 18.5 18.5 18.5H5.5C4.67 18.5 4 17.83 4 17V8.5Z" />
      <circle cx="12" cy="12.5" r="3.1" />
    </>
  ),
  chat: (
    <path d="M4 5.5H20V15.5H10.5L6.5 19V15.5H4V5.5Z" />
  ),
  sparkle: (
    <path d="M12 3.5L13.4 9.2L19 10.6L13.4 12L12 17.7L10.6 12L5 10.6L10.6 9.2L12 3.5Z" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M15 9L13 14L9 15L11 10L15 9Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21C12 21 18 14.6 18 10.2C18 6.8 15.3 4 12 4C8.7 4 6 6.8 6 10.2C6 14.6 12 21 12 21Z" />
      <circle cx="12" cy="10.2" r="2.2" />
    </>
  ),
};

export type EyebrowIcon = keyof typeof ICONS;

export default function EyebrowTag({
  icon,
  children,
  className = "",
  light = false,
}: {
  icon: EyebrowIcon;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] ${
        light ? "text-white/85" : "text-rust"
      } ${className}`}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        aria-hidden="true"
      >
        {ICONS[icon]}
      </svg>
      {children}
    </span>
  );
}
