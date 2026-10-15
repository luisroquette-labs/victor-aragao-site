import Link from "next/link";
import Logo from "./Logo";

export default function SiteHeader() {
  return (
    <nav className="site-header">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Victor Aragão — início">
          <Logo size={34} />
          <span>Victor Aragão</span>
        </Link>
        <div className="nav-links">
          <Link href="/pesquisa">Pesquisa</Link>
          <Link href="/blog">Blog</Link>
          <Link className="brand-cta" href="/#contato">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}
