import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import StreakDivider from "@/components/StreakDivider";
import { research, researchThemes, trajectory } from "../content";

export const metadata: Metadata = {
  title: "Pesquisa — Victor Aragão",
  description:
    "Linha de pesquisa em microbiologia e imunologia oral: Streptococcus sanguinis, biofilme, evasão imune e peptídeos antimicrobianos. Publicações revisadas por pares.",
};

export default function PesquisaPage() {
  return (
    <main>
      <SiteHeader />
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Microbiologia e imunologia oral · FOP/UNICAMP</p>
          <h1>Pesquisa.</h1>
          <p className="page-dek">{research.summary}</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="sec-label">Temas</p>
            <h2>O que investigo.</h2>
          </Reveal>
          <Reveal className="bento">
            {researchThemes.map((r, i) => (
              <article className={`bento-cell bento-cell--${i}`} key={r.title}>
                <span className="bento-tag">{r.tag}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <StreakDivider />

      <section className="section publications">
        <div className="wrap">
          <Reveal className="research-head">
            <p className="sec-label">{research.label}</p>
            <h2>{research.heading}</h2>
            <p className="summary">Pesquisa revisada por pares. Clique para ler no periódico.</p>
          </Reveal>
          <ul className="pubs">
            {research.publications.map((p) => (
              <Reveal as="li" key={p.url}>
                <a className="pub" href={p.url} target="_blank" rel="noopener noreferrer">
                  <span className="yr">{p.year}</span>
                  <span>
                    <span className="ttl">{p.title}</span>
                    <span className="jr">{p.journal}</span>
                  </span>
                  <span className="arrow">Ler no periódico →</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section trajectory">
        <div className="wrap">
          <Reveal>
            <p className="sec-label">Trajetória</p>
            <h2>Da graduação à bancada de ponta.</h2>
          </Reveal>
          <Timeline items={trajectory} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
