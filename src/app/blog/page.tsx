import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Marketing Blog for Local Service Businesses",
  description:
    "Practical guides on local SEO, Google Business Profile, reviews and paid marketing for HVAC companies, electricians, plumbers, therapists and other local service businesses.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="border-b border-line bg-cream-2 pb-16 pt-16">
        <div className="container-wide">
          <h1 className="font-heading text-[36px] font-medium text-ink balance md:text-[48px]">
            Marketing Blog for Local Service Businesses
          </h1>
          <p className="mt-4 max-w-[600px] text-[17px] leading-relaxed text-ink-2">
            Straight answers on local SEO, Google Business Profile, reviews and paid
            marketing, written for HVAC companies, electricians, plumbers, therapists and
            other local service businesses.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-wide grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex h-full flex-col rounded-[8px] border-[1.5px] border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="text-[11px] font-bold uppercase tracking-wide text-rust">
                  {post.category}
                </span>
                <h2 className="mt-2 font-heading text-[19px] leading-snug text-ink">
                  {post.title}
                </h2>
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
      </section>
    </>
  );
}
