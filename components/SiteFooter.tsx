import Link from "next/link";
import Logo from "./Logo";
import { contact } from "@/app/content";

export default function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div className="foot-col">
          <span className="foot-brand">
            <Logo size={28} />
            Victor Aragão
          </span>
          <p className="foot-tagline">
            Cientista e cirurgião-dentista. Microbiologia e imunologia oral — da bancada
            para a sociedade.
          </p>
        </div>
        <nav className="foot-col">
          <span className="foot-head">Navegar</span>
          <Link href="/">Início</Link>
          <Link href="/pesquisa">Pesquisa</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#servicos">Serviços</Link>
          <Link href="/#contato">Contato</Link>
        </nav>
        <nav className="foot-col">
          <span className="foot-head">Conectar</span>
          {contact.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="wrap foot-base">
        <span>Victor Aragão Abreu de Freitas</span>
        <span>Microbiologia &amp; Imunologia oral</span>
      </div>
    </footer>
  );
}
