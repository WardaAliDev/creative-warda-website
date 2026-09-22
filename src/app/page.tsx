import Link from "next/link";
import type { Metadata } from "next";
import RotatingWord from "@/components/RotatingWord";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import EyebrowTag, { ICONS } from "@/components/EyebrowTag";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Faq from "@/components/Faq";
import Sticker from "@/components/Sticker";
import ArrowRight from "@/components/ArrowRight";
import FounderPhoto from "@/components/FounderPhoto";
import { SERVICES } from "@/lib/services";
import { INDUSTRIES } from "@/lib/industries";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketing Agency for Local Service Businesses",
  description: SITE.description,
  alternates: { canonical: "/" },
};

const PAIN_POINTS = [
  {
    title: "Buried under competitors with fewer years in business",
    body: "Search your own service and your own city on Google right now. If a business half your age is ranking above you, the problem is not your work. It is your visibility.",
  },
  {
    title: "A website that gets visitors but not calls",
    body: "Traffic shows up in your analytics, but the phone does not ring. No clear reason to call right now, not built for a phone screen, and visitors quietly leave for the next result.",
  },
  {
    title: "Past customers who never hear from you again",
    body: "You did the work well. Then nothing. No follow-up, no reminder, no review request. Every one of those silences is a repeat booking that went to someone else instead.",
  },
  {
    title: "No time left for marketing once the jobs are done",
    body: "You are the one doing the work, quoting the jobs and running the business. By the time the day is done, posting online or chasing reviews is the last thing on your mind. It stays that way every week.",
  },
];

const STATS = [
  { value: "3 of 4", label: "local searches end in a call to one of the top three results on the map" },
  { value: "5 to 7x", label: "more expensive to win a new customer than to keep one you already have" },
  { value: "3 to 6 months", label: "typical timeframe to see real ranking movement from local SEO" },
];

const SERVICE_ACCENTS = [
  { bg: "bg-blue-tint" },
  { bg: "bg-lavender-deep" },
  { bg: "bg-pink-tint" },
  { bg: "bg-brown", text: "text-white" },
];


const SERVICE_HIGHLIGHTS = [
  ["Local SEO", "Google Business Profile", "Review generation"],
  ["Quote follow-ups", "Missed call text-back", "Google & Local Services Ads"],
  ["Mobile-first build", "Fast load speed", "Built to convert"],
  ["12 posts a month", "Reels & short video", "Monthly content calendar"],
];

const TESTIMONIALS = [
  { quote: "Working with this team took the guesswork out of our marketing. Calls started coming in within weeks, and we finally know where every lead is coming from.", name: "Client Name", role: "Business, City", placeholder: true },
  { quote: "We went from barely showing up on Google to being one of the first calls people make. The reporting is simple and nothing feels like guesswork anymore.", name: "Client Name", role: "Business, City", placeholder: true },
  { quote: "They took over everything we never had time for and it just works. We check in once a month and the results speak for themselves.", name: "Client Name", role: "Business, City", placeholder: true },
];

const BLOG_CARD_STYLE = ["border-navy", "border-rust", "border-butter", "border-navy"];

const PACKAGES = [
  {
    icon: "pin" as const,
    tag: "Google + Reviews",
    name: "Local Visibility",
    tagline: "For businesses that just need to show up first",
    price: "£400",
    included: [
      "Google Business Profile setup and management",
      "Local SEO foundations",
      "Citation and directory listings cleanup",
      "Automated post-job review requests",
      "Weekly Google posts and photo updates",
      "Competitor ranking snapshot",
      "Monthly ranking and review report",
    ],
    timeline: "Live within 2 weeks. No lock-in contracts, cancel anytime with 30 days notice.",
    featured: false,
  },
  {
    icon: "sparkle" as const,
    tag: "Full System",
    name: "Full Growth System",
    tagline: "For businesses ready to hand off marketing completely",
    price: "£1,000",
    included: [
      "Everything in Local Visibility",
      "Marketing automation and quote follow-ups",
      "Google Ads and Local Services Ads management",
      "Social media management, 12 posts a month",
      "Mobile-first website included",
      "One dedicated point of contact",
    ],
    timeline: "Live within 3 to 4 weeks. No lock-in contracts, cancel anytime with 30 days notice.",
    featured: true,
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-brown pt-24 md:pt-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <Sticker name="camera" className="left-[4%] top-[16%]" size={160} rotate={-8} />
        <Sticker name="stamp" className="right-[5%] top-[22%]" size={130} rotate={7} />
        <Sticker name="starburst" className="bottom-[10%] left-[10%]" size={110} rotate={0} />
        <div className="container-wide relative flex flex-1 flex-col items-center justify-center pb-16 text-center">
          <div className="hidden sm:block">
            <EyebrowTag icon="compass" className="justify-center" light>
              Marketing For Local Service Businesses
            </EyebrowTag>
          </div>
          <h1 className="mt-5 max-w-[620px] font-heading text-[42px] font-semibold leading-[1.1] text-white balance md:text-[58px]">
            Marketing That Gets Local Businesses <RotatingWord colorClassName="text-butter" />
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-white/75">
            We help local service businesses, from HVAC companies to electricians to
            therapists, dominate Google, generate more reviews and turn website visitors
            into booked jobs. Done for you, every month.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-lavender px-7 py-3.5 text-[14px] font-bold uppercase tracking-wide text-brown transition-colors hover:bg-lavender-deep"
          >
            Get My Free Audit
            <ArrowRight className="stroke-[1.4]" />
          </Link>
        </div>
        <Marquee />
      </section>

      {/* PAIN POINTS */}
      <section className="bg-cream py-22">
        <div className="container-wide">
          <Reveal className="mx-auto max-w-[640px] text-center">
            <EyebrowTag icon="pin" className="justify-center">Common Problems</EyebrowTag>
            <h2 className="mt-3 font-heading text-[32px] font-medium text-ink balance md:text-[42px]">
              Sound familiar?
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-ink-2">
              These are the problems local service business owners bring to us every week.
              If any of them sound like your business, that is exactly where we come in.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {PAIN_POINTS.map((p, i) => (
              <Reveal key={p.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div
                  className={`h-full rounded-[14px] border-[1.5px] border-line bg-white p-7 transition-colors hover:border-rust ${
                    i % 2 === 0 ? "tilt-left" : "tilt-right"
                  }`}
                >
                  <span className="mb-2 block text-[13px] font-bold text-rust">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-[19px] text-ink">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-butter-light py-22">
        <div className="container-wide">
          <Reveal className="text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink-3">
              Everything your business needs online
            </p>
            <h2 className="mx-auto mt-3 max-w-[560px] font-heading text-[34px] font-medium leading-tight text-brown balance md:text-[46px]">
              Four ways we get your phone ringing
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {SERVICES.map((s, i) => {
              const accent = SERVICE_ACCENTS[i % SERVICE_ACCENTS.length];
              const tilt = i % 2 === 0 ? "sm:tilt-left" : "sm:tilt-right";
              const offset = i % 2 === 1 ? "sm:mt-10" : "";
              return (
                <Reveal key={s.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <Link
                    href={`/services/${s.slug}`}
                    className={`group block h-full rounded-[18px] bg-white p-8 shadow-card transition-transform hover:!rotate-0 hover:-translate-y-1 ${tilt} ${offset}`}
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full font-heading text-[17px] ${accent.bg} ${accent.text ?? "text-brown"}`}
                    >
                      0{i + 1}
                    </span>
                    <span className="mt-5 block text-[11px] font-bold uppercase tracking-wide text-rust">
                      {s.tag}
                    </span>
                    <h3 className="mt-1.5 font-heading text-[23px] text-ink transition-colors group-hover:text-rust">
                      {s.name}
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-2">
                      {s.cardSummary}
                    </p>
                    <ul className="mt-5 flex flex-col gap-1.5">
                      {SERVICE_HIGHLIGHTS[i % SERVICE_HIGHLIGHTS.length].map((h) => (
                        <li key={h} className="flex items-center gap-2 text-[13px] text-ink-2">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-rust">
                      See how it works
                      <ArrowRight className="stroke-[1.4]" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT ME TEASER */}
      <section className="bg-cream-2 py-22">
        <div className="container-wide grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="mx-auto max-w-[320px]">
              <FounderPhoto className="tilt-left" />
              <p className="mt-4 text-center font-script text-[22px] leading-tight text-brown">
                Local businesses, real results, no fluff.
              </p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <EyebrowTag icon="sparkle">Founder, Creative Warda</EyebrowTag>
            <h2 className="mt-3 font-heading text-[28px] font-medium text-brown balance md:text-[36px]">
              By the way, I am Warda
            </h2>
            <p className="mt-4 max-w-[480px] text-[16px] leading-relaxed text-brown/80">
              I started Creative Warda after watching good local service businesses lose
              work to competitors who were not better, just louder on Google. I work with
              a small number of businesses at a time, and every one of them gets my
              actual attention, not a template handed off to a junior account manager.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brown px-7 py-3.5 text-[14px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-brown-hover"
            >
              Read The Full Story
              <ArrowRight className="stroke-[1.4]" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="relative overflow-hidden bg-cream py-22">
        <Sticker name="pretzel" className="right-[6%] top-[6%]" size={120} rotate={10} />
        <div className="container-wide">
          <Reveal className="text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink-3">
              How we work together
            </p>
            <h2 className="mt-3 font-heading text-[32px] font-medium text-ink balance md:text-[42px]">
              Two packages. Pick your starting point
            </h2>
          </Reveal>
          <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
            {PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div
                  className={`flex flex-col rounded-[16px] border-[1.5px] p-8 ${
                    pkg.featured
                      ? "border-rust bg-rust text-white"
                      : "border-line bg-white text-ink"
                  }`}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className={pkg.featured ? "text-butter" : "text-rust"}
                    aria-hidden="true"
                  >
                    {ICONS[pkg.icon]}
                  </svg>
                  <span
                    className={`mt-3 text-[11px] font-bold uppercase tracking-wide ${
                      pkg.featured ? "text-butter" : "text-rust"
                    }`}
                  >
                    {pkg.tag}
                  </span>
                  <h3 className="mt-2 font-heading text-[28px]">{pkg.name}</h3>
                  <span
                    className={`mt-4 inline-block w-fit rounded-full px-3.5 py-1.5 text-[13px] font-semibold ${
                      pkg.featured ? "bg-white/15 text-white" : "bg-butter-light text-rust"
                    }`}
                  >
                    {pkg.tagline}
                  </span>
                  <p className="mt-6">
                    <span className="font-heading text-[38px]">{pkg.price}</span>
                    <span className={pkg.featured ? "text-white/70" : "text-ink-3"}>/mo</span>
                  </p>
                  <p
                    className={`mt-6 text-[11px] font-bold uppercase tracking-wide ${
                      pkg.featured ? "text-white/70" : "text-ink-3"
                    }`}
                  >
                    What&apos;s included
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {pkg.included.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2 text-[14px] leading-relaxed ${
                          pkg.featured ? "text-white/85" : "text-ink-2"
                        }`}
                      >
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${pkg.featured ? "bg-butter" : "bg-rust"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p
                    className={`mt-6 text-[13px] leading-relaxed ${
                      pkg.featured ? "text-white/70" : "text-ink-3"
                    }`}
                  >
                    {pkg.timeline}
                  </p>
                  <Link
                    href="/contact"
                    className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-bold uppercase tracking-wide transition-colors ${
                      pkg.featured
                        ? "bg-butter text-rust hover:bg-butter-hover"
                        : "border-[1.5px] border-rust text-rust hover:bg-rust-light"
                    }`}
                  >
                    Book Your Free Audit
                    <ArrowRight className="stroke-[1.4]" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={3}>
            <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[16px] border-[1.5px] border-dashed border-rust/40 bg-butter-light/50 p-7 text-center sm:flex-row sm:text-left">
              <p className="max-w-[440px] text-[15px] leading-relaxed text-ink-2">
                Do not need the full package? We can mix and match individual services and
                build something custom around exactly what your business needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brown px-7 py-3.5 text-[14px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-brown-hover"
              >
                Let&apos;s Talk
                <ArrowRight className="stroke-[1.4]" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative overflow-hidden bg-butter-light py-22">
        <Sticker name="globe" className="right-[4%] top-[8%]" size={150} rotate={6} />
        <div className="container-wide">
          <Reveal>
            <EyebrowTag icon="sparkle">Who We Help</EyebrowTag>
            <h2 className="mt-3 font-heading text-[32px] font-medium text-ink balance md:text-[42px]">
              Who we work with
            </h2>
            <p className="mt-3 max-w-[560px] text-[17px] leading-relaxed text-ink-2">
              We specialise in local service businesses, the kind of company someone finds
              by searching Google when they need help nearby.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="block h-full rounded-[14px] border border-line bg-white p-6 transition-colors hover:border-rust"
                >
                  <h3 className="font-heading text-[18px] text-ink">{ind.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{ind.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-rust py-22">
        <div className="container-wide">
          <Reveal>
            <EyebrowTag icon="sparkle" light>The Numbers</EyebrowTag>
            <h2 className="mt-3 font-heading text-[32px] font-medium text-white balance md:text-[38px]">
              Real numbers behind local visibility
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <p className="font-heading text-[38px] text-butter">{s.value}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-white/80">{s.label}</p>
              </Reveal>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-butter px-6 py-3.5 text-[14px] font-bold uppercase tracking-wide text-rust transition-colors hover:bg-butter-hover"
          >
            Get My Free Audit
            <ArrowRight className="stroke-[1.4]" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="relative overflow-hidden bg-cream py-22">
        <Sticker name="flower-bouquet" className="left-[4%] top-[8%]" size={150} rotate={-6} />
        <Sticker name="cloud" className="right-[5%] bottom-[10%]" size={130} rotate={5} />
        <div className="container-wide">
          <Reveal className="text-center">
            <EyebrowTag icon="chat" className="justify-center">What Clients Say</EyebrowTag>
            <h2 className="mt-3 font-heading text-[32px] font-medium text-ink balance md:text-[42px]">
              This space is reserved for your first reviews
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[17px] leading-relaxed text-ink-2">
              Creative Warda is just getting started, so these are placeholders, not real
              quotes. Swap them for genuine client feedback as soon as you have it.
            </p>
          </Reveal>
          <div className="mt-12">
            <TestimonialCarousel items={TESTIMONIALS} />
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      {posts.length > 0 && (
        <section className="bg-cream-2 py-22">
          <div className="container-wide">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <EyebrowTag icon="chat">From The Blog</EyebrowTag>
                  <h2 className="mt-3 font-heading text-[32px] font-medium text-ink balance md:text-[38px]">
                    Straight answers, no fluff
                  </h2>
                </div>
                <Link href="/blog" className="text-[14px] font-bold text-rust">
                  View all articles
                </Link>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={`flex h-full flex-col rounded-[14px] border-t-[6px] bg-white p-6 shadow-card transition-transform hover:-translate-y-1 ${BLOG_CARD_STYLE[i % BLOG_CARD_STYLE.length]}`}
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wide text-rust">
                      {post.category}
                    </span>
                    <h3 className="mt-2 font-heading text-[18px] leading-snug text-ink">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-2">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 text-[12.5px] text-ink-3">
                      {post.readingMinutes} min read
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <div
        className="divider-checkered"
        style={{ "--tile-color": "var(--color-brown)", "--tile-base": "var(--color-butter-light)" } as React.CSSProperties}
      />

      {/* FAQ */}
      <section className="bg-butter-light py-22">
        <div className="container-wide max-w-[760px]">
          <Reveal className="text-center">
            <EyebrowTag icon="chat" className="justify-center">Frequently Asked Questions</EyebrowTag>
            <h2 className="mt-3 font-heading text-[32px] font-medium text-ink balance md:text-[42px]">
              Questions before you get started
            </h2>
          </Reveal>
          <div className="mt-10">
            <Faq
              items={[
                {
                  q: "How is this different from a general digital marketing agency?",
                  a: "We only work with local service businesses, the kind of company someone finds by searching Google when they need help nearby. That focus means every recommendation is built around how these businesses actually get chosen, not generic marketing advice borrowed from e-commerce or national brands.",
                },
                {
                  q: "Do I need to sign a contract?",
                  a: "No. Everything runs month to month. If the work is not moving your numbers, you are free to walk away without penalty. We would rather earn the relationship every month than rely on a contract to keep it.",
                },
                {
                  q: "How quickly will I see results?",
                  a: "It depends on the service. Paid ads can bring calls within the first week. Google Business Profile improvements often show movement within a month. Local SEO typically takes 3 to 6 months for meaningful, lasting ranking change.",
                },
                {
                  q: "Do you work with businesses outside HVAC, electrical and plumbing?",
                  a: "Yes. We work with any local service business where customers search Google to find and choose a provider nearby, including therapists, contractors, landscapers and similar service-based businesses.",
                },
                {
                  q: "How much does it cost to get started?",
                  a: "Our Local Visibility package starts at 400 pounds a month, and the Full Growth System starts at 1,000 pounds a month. Both are month to month with no setup fee. If neither fits, we will put together something custom.",
                },
                {
                  q: "What happens after I book a free audit?",
                  a: "We review your Google presence, your website and your reviews, then send you a clear breakdown of what is working and what is costing you calls. There is no obligation to sign up afterward, the audit is genuinely free.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <div
        className="divider-checkered"
        style={{ "--tile-color": "var(--color-brown)", "--tile-base": "var(--color-cream)" } as React.CSSProperties}
      />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-cream py-22">
        <Sticker name="cat-phone" className="bottom-[2%] left-[2%] sm:bottom-[4%] sm:left-[4%]" size={260} rotate={-6} />
        <div className="container-wide text-center">
          <Reveal>
            <EyebrowTag icon="sparkle" className="justify-center">Ready When You Are</EyebrowTag>
            <h2 className="mx-auto mt-3 max-w-[640px] font-heading text-[32px] font-bold leading-[1.05] tracking-tight text-brown balance md:text-[46px]">
              Ready to get your business booked solid?
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[16px] text-ink-2">
              A free audit of your Google presence, your website and your reviews. No
              obligation, no lock-in contracts.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brown px-7 py-4 text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-brown-hover"
            >
              Get My Free Audit
              <ArrowRight className="stroke-[1.4]" />
            </Link>
          </Reveal>
        </div>
      </section>

      <div
        className="divider-checkered"
        style={{ "--tile-color": "var(--color-brown)", "--tile-base": "var(--color-cream)" } as React.CSSProperties}
      />
    </>
  );
}
