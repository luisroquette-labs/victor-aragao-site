import Link from "next/link";
import Reveal from "@/components/Reveal";
import Biofilm from "@/components/Biofilm";
import { BASE } from "./base";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StreakDivider from "@/components/StreakDivider";
import Marquee from "@/components/Marquee";
import StatCounter from "@/components/StatCounter";
import Accordion from "@/components/Accordion";
import Timeline from "@/components/Timeline";
import BlogCard from "@/components/BlogCard";
import {
  person,
  about,
  offerings,
  research,
  tatame,
  contact,
  stats,
  marquee,
  researchThemes,
  trajectory,
  faq,
} from "./content";
import { posts } from "./posts";

export default function Page() {
  return (
    <main>
      <SiteHeader />

      {/* ---------------- HERO ---------------- */}
      <header className="hero" id="top">
        <Biofilm />
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">{person.eyebrow}</p>
            <h1>{person.name}</h1>
            <p className="thesis">
              Cirurgião-dentista com doutorado em microbiologia. Uno{" "}
              <span className="stain">ciência de verdade</span> e prática — no consultório,
              no palco e na bancada.
            </p>
            <div className="roleline">
              <span>PhD em Microbiologia e Imunologia</span>
              <span>FOP/UNICAMP</span>
              <span>Faixa preta de Jiu-Jitsu</span>
            </div>
            <div className="btn-row">
              <a className="btn btn-primary" href="#servicos">
                Como posso ajudar
              </a>
              <a className="btn btn-ghost" href="#contato">
                Conversar
              </a>
            </div>
          </div>
          <div>
            <div className="plate plate--photo">
              <img src={`${BASE}/victor.jpg`} alt="Victor Aragão" />
            </div>
            <p className="plate-cap">Specimen · V. Aragão · FOP/UNICAMP</p>
          </div>
        </div>
      </header>

      {/* ---------------- STATS ---------------- */}
      <section className="section stats-band">
        <div className="wrap">
          <Reveal className="stats-grid">
            {stats.map((s) => (
              <StatCounter key={s.label} n={s.n} suffix={s.suffix} label={s.label} />
            ))}
            <div className="stat">
              <span className="stat-n stat-n--text">Faixa preta</span>
              <span className="stat-label">Jiu-Jitsu Brasileiro</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <Marquee items={marquee} />

      {/* ---------------- SOBRE ---------------- */}
      <section className="section about" id="sobre">
        <div className="wrap">
          <Reveal className="about-grid">
            <div>
              <p className="sec-label">Sobre</p>
              <h2>
                Uma microbiologia de <span className="stain stain--teal">detalhe</span>.
              </h2>
            </div>
            <div>
              <p className="lead">{about.lead}</p>
              <p className="body">{about.body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVIÇOS ---------------- */}
      <section className="section offerings" id="servicos">
        <div className="wrap">
          <Reveal>
            <p className="sec-label">Como posso ajudar</p>
            <h2 className="offer-heading">{offerings.heading}</h2>
          </Reveal>
          <Reveal className="offer-grid">
            {offerings.items.map((o) => (
              <article className="offer" key={o.tag}>
                <span className="offer-tag">{o.tag}</span>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <a className="offer-cta" href="#contato">
                  {o.cta} →
                </a>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <StreakDivider />

      {/* ---------------- LINHA DE PESQUISA (BENTO) ---------------- */}
      <section className="section" id="pesquisa">
        <div className="wrap">
          <Reveal className="research-head">
            <p className="sec-label">Linha de pesquisa</p>
            <h2>O que investigo.</h2>
            <p className="summary">{research.summary}</p>
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

      {/* ---------------- TRAJETÓRIA ---------------- */}
      <section className="section trajectory">
        <div className="wrap">
          <Reveal>
            <p className="sec-label">Trajetória</p>
            <h2>Da graduação à bancada de ponta.</h2>
          </Reveal>
          <Timeline items={trajectory} />
        </div>
      </section>

      {/* ---------------- PUBLICAÇÕES ---------------- */}
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

      {/* ---------------- FAQ ---------------- */}
      <section className="section faq-section">
        <div className="wrap">
          <Reveal className="faq-grid">
            <div className="faq-head">
              <p className="sec-label">Perguntas frequentes</p>
              <h2>A ciência, sem jargão.</h2>
              <p className="faq-note">
                Dúvidas comuns sobre microbioma, bactérias e saúde bucal — respondidas de
                forma direta.
              </p>
            </div>
            <Accordion items={faq} />
          </Reveal>
        </div>
      </section>

      {/* ---------------- BLOG ---------------- */}
      <section className="section blog-teaser" id="blog">
        <div className="wrap">
          <Reveal className="blog-teaser-head">
            <div>
              <p className="sec-label">Do laboratório para você</p>
              <h2>Escrevo sobre o que pesquiso.</h2>
            </div>
            <Link className="btn btn-ghost" href="/blog">
              Ver todos os artigos →
            </Link>
          </Reveal>
          <Reveal className="blog-grid">
            {posts.slice(0, 3).map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- TATAME ---------------- */}
      <section className="section tatame" id="tatame">
        <div className="wrap">
          <Reveal>
            <p className="sec-label">{tatame.label}</p>
            <p className="line">{tatame.line}</p>
            <p className="body">{tatame.body}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CONTATO ---------------- */}
      <section className="section contact" id="contato">
        <div className="wrap">
          <Reveal>
            <p className="sec-label">{contact.label}</p>
            <h2>{contact.heading}</h2>
            <p className="line">{contact.line}</p>
            <div className="contact-actions">
              <a
                className="btn btn-primary"
                href={contact.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no {contact.links[0].label}
              </a>
              <div className="contact-links">
                {contact.links.slice(1).map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
