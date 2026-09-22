import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  category: string;
  readingMinutes: number;
};

export type Post = PostMeta & { content: string };

function readFileForSlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  return fs.readFileSync(filePath, "utf8");
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostMeta[] {
  const posts = getAllSlugs().map((slug) => {
    const raw = readFileForSlug(slug);
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title as string,
      excerpt: data.excerpt as string,
      metaDescription: (data.metaDescription as string) ?? data.excerpt,
      date: data.date as string,
      category: data.category as string,
      readingMinutes: Math.ceil(readingTime(content).minutes),
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const raw = readFileForSlug(slug);
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title as string,
      excerpt: data.excerpt as string,
      metaDescription: (data.metaDescription as string) ?? data.excerpt,
      date: data.date as string,
      category: data.category as string,
      readingMinutes: Math.ceil(readingTime(content).minutes),
      content,
    };
  } catch {
    return null;
  }
}
