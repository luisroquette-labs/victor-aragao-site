import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PostCover from "@/components/PostCover";
import { posts, getPost } from "../../posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artigo — Victor Aragão" };
  return { title: `${post.title} — Victor Aragão`, description: post.dek };
}

function fmt(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main>
      <SiteHeader />
      <article className="article">
        <div className="article-wrap">
          <div className="article-meta">
            <span>{fmt(post.date)}</span>
            <span>{post.readingMinutes} min de leitura</span>
            <span>{post.tags.join(" · ")}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="article-dek">{post.dek}</p>
          <div className="article-cover">
            <PostCover seed={post.slug} className="post-cover" />
          </div>
          {post.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </section>
          ))}
          <div className="article-takeaway">
            <p>{post.takeaway}</p>
          </div>
          <div className="article-tags">
            {post.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <Link className="back-link" href="/blog">
            ← Todos os artigos
          </Link>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
