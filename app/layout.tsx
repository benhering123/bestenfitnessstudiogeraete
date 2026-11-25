import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Barlow_Condensed, Literata } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Literata({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://xn--bestenfitnessstudiogerte-ccc.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Welche Geräte braucht ein Fitnessstudio? | bestenfitnessstudiogeräte.de",
    template: "%s | bestenfitnessstudiogeräte.de",
  },
  description:
    "Ein Planungshandbuch für Gründer und Betreiber, die ein neues Studio einrichten: welche Geräte Sie brauchen und worauf Sie bei der Auswahl achten.",
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#e6ecec",
  colorScheme: "light",
};

const NAV = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

function Wordmark() {
  return (
    <Link href="/" className="wordmark" translate="no" aria-label="bestenfitnessstudiogeräte.de, zur Startseite">
      <span aria-hidden="true" className="wordmark__pre">besten&shy;fitness</span>
      <span aria-hidden="true" className="wordmark__room">
        studio
        <svg className="wordmark__door" viewBox="0 0 20 20" focusable="false">
          <path d="M1 19 V1" />
          <path d="M1 1 A18 18 0 0 1 19 19" strokeDasharray="2 2" />
        </svg>
      </span>
      <span aria-hidden="true" className="wordmark__post">geräte</span>
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#inhalt">
          Zum Inhalt springen
        </a>
        <header className="sheet-head">
          <Wordmark />
          <nav aria-label="Hauptnavigation">
            <ul className="nav">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main id="inhalt">{children}</main>

        <footer className="titleblock">
          <div className="titleblock__cell titleblock__cell--wide">
            <span className="titleblock__key">Betreiber</span>
            <p className="titleblock__val">
              Betrieben von Telju Fitness BeNeLux B.V., einem der verglichenen Hersteller.
            </p>
          </div>
          <div className="titleblock__cell">
            <span className="titleblock__key">Projekt</span>
            <p className="titleblock__val">bestenfitnessstudiogeräte.de</p>
          </div>
          <div className="titleblock__cell">
            <span className="titleblock__key">Blatt</span>
            <ul className="titleblock__links">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
        <script defer src="/_vercel/insights/script.js"></script>
      </body>
    </html>
  );
}
