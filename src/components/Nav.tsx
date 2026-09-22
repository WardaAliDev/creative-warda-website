"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkColor = scrolled ? "text-ink" : "text-white";
  const linkColorMuted = scrolled ? "text-ink/70 hover:text-ink" : "text-white/80 hover:text-white";
  const logoColor = scrolled ? "text-rust" : "text-butter";
  const ctaClasses = scrolled
    ? "bg-rust text-white hover:bg-rust-hover"
    : "bg-butter text-rust hover:bg-butter-hover";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-cream shadow-sm" : "border-transparent bg-brown"
      }`}
    >
      <div className="container-wide grid h-[68px] grid-cols-[1fr_auto_1fr] items-center">
        <Link href="/" className="flex items-center justify-self-start" onClick={() => setOpen(false)}>
          <span className="flex flex-col items-center leading-none">
            <span className={`font-heading text-[26px] leading-none transition-colors ${logoColor}`}>
              Creative
            </span>
            <span className={`pl-[0.38em] text-[8.5px] font-semibold uppercase tracking-[0.38em] transition-colors ${logoColor}`}>
              WARDA
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 justify-self-center lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[13.5px] font-semibold whitespace-nowrap transition-colors ${
                  isActive(link.href) ? linkColor : linkColorMuted
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-self-end">
          <Link
            href="/contact"
            className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide transition-colors lg:inline-flex ${ctaClasses}`}
          >
            Book a Consultation
          </Link>

          <button
            aria-label="Toggle menu"
            className={`p-1 transition-colors lg:hidden ${linkColor}`}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-[2px] w-[22px] rounded bg-current" />
            <span className="my-[5px] block h-[2px] w-[22px] rounded bg-current" />
            <span className="block h-[2px] w-[22px] rounded bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`flex flex-col border-t px-6 pb-6 pt-4 lg:hidden ${
            scrolled ? "border-line bg-cream" : "border-white/10 bg-brown"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b py-3 text-left text-[15px] font-semibold ${
                scrolled ? "border-ink/10 text-ink/90" : "border-white/10 text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`mt-4 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-bold uppercase tracking-wide ${ctaClasses}`}
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
