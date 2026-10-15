import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BlogCard from "@/components/BlogCard";
import { posts } from "../posts";

export const metadata: Metadata = {
  title: "Blog — Victor Aragão",
  description:
    "Ciência sem jargão: microbioma oral, bactérias, biofilme e imunidade, explicados por Victor Aragão.",
};

export default function BlogIndex() {
  return (
    <main>
      <SiteHeader />
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Do laboratório para você</p>
          <h1>Ciência sem jargão.</h1>
          <p className="page-dek">
            O que eu pesquiso, explicado para quem não é da área — microbioma, bactérias,
            biofilme e imunidade.
          </p>
        </div>
      </header>
      <section className="blog-index">
        <div className="wrap">
          <div className="blog-grid">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
