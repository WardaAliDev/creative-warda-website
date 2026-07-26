import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="relative z-40 bg-secondary">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/CWyellow.png"
            alt="Creative Warda logo"
            className="h-16 w-16 object-contain"
          />
        </a>

        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:text-primary/80"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#contact"
            className="rounded-full bg-dark/90 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Book Free Consultation →
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-dark"
          >
            Let's Talk
          </a>
          <button
            className="p-2 text-primary hover:text-primary/80 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="w-full md:hidden pt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-4 py-3 text-sm font-semibold text-primary transition hover:bg-slate-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cart"
                className="rounded-full px-4 py-3 text-sm font-semibold text-primary transition hover:bg-slate-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart (0)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
