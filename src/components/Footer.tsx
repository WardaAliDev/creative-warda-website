import Link from "next/link";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

function SocialIcon({ type }: { type: "instagram" | "facebook" | "linkedin" }) {
  if (type === "instagram") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  if (type === "facebook") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14.5 8.5H16.5V5.3C16.16 5.26 15.02 5.17 13.7 5.17C10.94 5.17 9.2 6.78 9.2 9.72V12H6.5V15.3H9.2V21H12.6V15.3H15.24L15.66 12H12.6V10.06C12.6 9.1 12.9 8.5 14.5 8.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.6" cy="8.2" r="1.15" fill="currentColor" />
      <path d="M6.6 11h2v7h-2v-7z" fill="currentColor" />
      <path
        d="M10.4 11h1.9v0.95c0.55-0.75 1.3-1.15 2.3-1.15 1.75 0 2.9 1.15 2.9 3.3V18h-2v-3.5c0-1.05-0.5-1.7-1.4-1.7-0.9 0-1.6 0.6-1.7 1.6V18h-2v-7z"
        fill="currentColor"
      />
    </svg>
  );
}

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_ITEMS = [
  { key: "instagram" as const, label: "Instagram" },
  { key: "facebook" as const, label: "Facebook" },
  { key: "linkedin" as const, label: "LinkedIn" },
];

export default function Footer() {
  const tickerWords = [
    "Local SEO",
    "Google Business Profile",
    "Website Design",
    "Marketing Automation",
    "Paid Marketing",
    "Social Media Management",
  ];
  const tickerTrack = [...tickerWords, ...tickerWords, ...tickerWords];

  return (
    <footer>
      <div className="overflow-hidden border-b border-white/10 bg-brown py-3.5">
        <div className="marquee-track flex w-max whitespace-nowrap">
          {tickerTrack.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="inline-flex items-center gap-2.5 px-6 text-[12px] font-bold uppercase tracking-wide text-white"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-butter" />
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-brown pb-8 pt-14 text-white">
        <div className="container-wide grid gap-10 py-6 text-center md:grid-cols-3 md:items-center md:text-left">
          <div>
            <h3 className="mb-4 text-[12px] font-bold uppercase tracking-wide text-butter">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-[14px] text-white/75">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-script text-[56px] leading-none text-butter">Creative Warda</p>
            <p className="mt-3 max-w-[300px] text-[14px] leading-relaxed text-white/70">
              Marketing for local service businesses. Google rankings, websites, reviews and
              ads, handled every month.
            </p>
          </div>

          <div className="md:text-right">
            <h3 className="mb-4 text-[12px] font-bold uppercase tracking-wide text-butter">
              Socials
            </h3>
            <ul className="flex flex-col gap-2.5 text-[14px] text-white/75 md:items-end">
              {SOCIAL_ITEMS.map((item) => {
                const url = SOCIAL_LINKS[item.key];
                return (
                  <li key={item.key}>
                    <a
                      href={url || "#"}
                      target={url ? "_blank" : undefined}
                      rel={url ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 transition-colors hover:text-white"
                    >
                      <SocialIcon type={item.key} />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="container-wide mt-8 flex flex-col items-center gap-2 border-t border-white/15 py-6 text-[12.5px] text-white/60 md:flex-row md:justify-between">
          <span>Copyright {new Date().getFullYear()} Creative Warda. All rights reserved.</span>
          <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
        </div>
      </div>
    </footer>
  );
}
