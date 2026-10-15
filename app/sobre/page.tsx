import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import { about, trajectory } from "../content";

export const metadata: Metadata = {
  title: "Sobre — Victor Aragão",
  description:
    "Victor Aragão: cirurgião-dentista e doutor em Microbiologia e Imunologia pela FOP/UNICAMP. Ciência de verdade, do laboratório à prática.",
};

export default function SobrePage() {
  return (
    <main>
      <SiteHeader />
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Sobre</p>
          <h1>Um dentista que virou cientista.</h1>
          <p className="page-dek">{about.lead}</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap about-grid">
          <div>
            <p className="sec-label">Quem sou</p>
            <h2>
              Ciência de <span className="stain stain--teal">verdade</span>.
            </h2>
          </div>
          <div>
            <p className="lead">{about.body}</p>
            <p className="body">
              Levo o rigor da bancada para cada decisão clínica, cada palestra e cada projeto
              de consultoria. Acredito que ciência boa só cumpre seu papel quando sai do
              laboratório e chega às pessoas.
            </p>
          </div>
        </div>
      </section>

      <section className="section trajectory">
        <div className="wrap">
          <Reveal>
            <p className="sec-label">Trajetória</p>
            <h2>O caminho até aqui.</h2>
          </Reveal>
          <Timeline items={trajectory} />
        </div>
      </section>

      <section className="section contact">
        <div className="wrap">
          <Reveal>
            <p className="sec-label">Vamos conversar</p>
            <h2>Quer trabalhar comigo?</h2>
            <p className="line">
              Avaliação clínica, palestra, consultoria ou pesquisa — comece por aqui.
            </p>
            <div className="btn-row">
              <Link className="btn btn-primary" href="/#contato">
                Entrar em contato
              </Link>
              <Link className="btn btn-ghost" href="/#servicos">
                Ver serviços
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
