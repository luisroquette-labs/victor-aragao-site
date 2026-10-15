import Link from "next/link";
import PostCover from "./PostCover";
import type { Post } from "@/app/posts";

function fmt(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-cover">
        <PostCover seed={post.slug} className="post-cover" />
        <span className="blog-card-tag">{post.tags[0]}</span>
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span>{fmt(post.date)}</span>
          <span>{post.readingMinutes} min de leitura</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.dek}</p>
        <span className="blog-card-link">Ler artigo →</span>
      </div>
    </Link>
  );
}
