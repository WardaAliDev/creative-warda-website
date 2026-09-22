import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { SITE } from "@/lib/site";
import ArrowRight from "@/components/ArrowRight";
import EyebrowTag from "@/components/EyebrowTag";
import Sticker from "@/components/Sticker";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${SITE.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="mt-10 font-heading text-[24px] text-ink" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="mt-7 font-heading text-[19px] text-ink" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mt-4 text-[16px] leading-relaxed text-ink-2" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="font-semibold text-rust underline" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-bold text-ink" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mt-4 list-disc pl-5 text-[16px] leading-relaxed text-ink-2" {...props} />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="border-b border-line bg-cream-2 pb-12 pt-14">
        <div className="container-wide max-w-[720px]">
          <div className="flex items-center gap-2 text-[12px] text-ink-3">
            <Link href="/blog" className="hover:text-rust">Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>
          <h1 className="mt-4 font-heading text-[32px] font-medium text-ink balance md:text-[40px]">
            {post.title}
          </h1>
          <p className="mt-3 text-[13.5px] text-ink-3">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            &middot; {post.readingMinutes} min read
          </p>
        </div>
      </section>

      <section className="bg-cream py-14">
        <div className="container-wide max-w-[720px]">
          <article>
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>
        </div>
      </section>

      <div
        className="divider-checkered"
        style={{ "--tile-color": "var(--color-brown)", "--tile-base": "var(--color-cream)" } as React.CSSProperties}
      />

      <section className="relative overflow-hidden bg-cream py-22">
        <Sticker name="cat-phone" className="bottom-[2%] left-[2%] sm:bottom-[4%] sm:left-[4%]" size={260} rotate={-6} />
        <div className="container-wide text-center">
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
        </div>
      </section>

      <div
        className="divider-checkered"
        style={{ "--tile-color": "var(--color-brown)", "--tile-base": "var(--color-cream)" } as React.CSSProperties}
      />
    </>
  );
}
