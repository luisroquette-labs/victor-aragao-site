import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victor Aragão — Microbiologia e Imunologia Oral",
  description:
    "Cirurgião-dentista e cientista. PhD em Microbiologia e Imunologia oral (FOP/UNICAMP). Pesquiso como as bactérias da boca escapam do sistema imune.",
  openGraph: {
    title: "Victor Aragão — Microbiologia e Imunologia Oral",
    description:
      "Cirurgião-dentista e cientista. PhD em Microbiologia e Imunologia oral (FOP/UNICAMP).",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
