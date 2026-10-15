import type { MetadataRoute } from "next";
import { posts } from "./posts";

export const dynamic = "force-static";

// Troque pelo domínio real quando o Victor tiver um.
const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://luisroquette-labs.github.io/victor-aragao-site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/sobre", "/pesquisa", "/blog"].map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date("2026-10-15"),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
  const articles = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date + "T00:00:00"),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...pages, ...articles];
}
