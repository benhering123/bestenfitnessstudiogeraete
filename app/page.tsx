import { Byline } from "./byline";

const REGISTER = [
  { sheet: "A-01", title: "Geräteliste für ein neues Studio", scope: "Welche Geräte jede Zone braucht." },
  { sheet: "B-01 bis B-05", title: "Vergleiche", scope: "Fünf Gegenüberstellungen von Gerätetypen und Bauweisen." },
  { sheet: "C-01 bis C-05", title: "Worauf Sie achten", scope: "Fünf Leitfäden für die Auswahl." },
  { sheet: "D-01 bis D-02", title: "Über den Betreiber", scope: "Zwei Beiträge über Telju Fitness." },
];

function FloorPlan() {
  return (
    <figure className="plan">
      <svg
        viewBox="-40 -44 700 520"
        role="img"
        aria-labelledby="plan-title"
        className="plan__svg"
      >
        <title id="plan-title">
          Schematischer Grundriss eines Studios mit fünf Zonen: Cardio, geführte Kraftgeräte, Freihantel,
          Funktionsfläche sowie Empfang und Umkleiden.
        </title>

        {/* axis bubbles */}
        <g className="plan__axis">
          {["A", "B", "C", "D"].map((l, i) => (
            <g key={l} transform={`translate(${[0, 200, 440, 640][i]} -26)`}>
              <line y1="10" y2="26" />
              <circle r="11" />
              <text dy="4.5">{l}</text>
            </g>
          ))}
          {["1", "2", "3"].map((l, i) => (
            <g key={l} transform={`translate(-26 ${[0, 260, 440][i]})`}>
              <line x1="10" x2="26" />
              <circle r="11" />
              <text dy="4.5">{l}</text>
            </g>
          ))}
        </g>

        {/* zone fill: guided strength, the zone this handbook starts with */}
        <rect className="plan__zone" x="200" y="0" width="240" height="260" />

        {/* machines */}
        <g className="plan__kit">
          {[40, 100, 160, 220].map((y) => (
            <g key={`c${y}`}>
              <rect x="24" y={y} width="62" height="26" rx="3" />
              <rect x="114" y={y} width="62" height="26" rx="3" />
            </g>
          ))}
          {[36, 104, 172].map((y) => (
            <g key={`k${y}`}>
              <rect x="228" y={y} width="48" height="48" />
              <rect x="296" y={y} width="48" height="48" />
              <rect x="364" y={y} width="48" height="48" />
            </g>
          ))}
          {[40, 140].map((y) => (
            <g key={`f${y}`}>
              <rect x="470" y={y} width="56" height="66" />
              <rect x="556" y={y} width="56" height="66" />
              <line x1="462" x2="534" y1={y + 33} y2={y + 33} />
              <line x1="548" x2="620" y1={y + 33} y2={y + 33} />
            </g>
          ))}
          <rect className="plan__open" x="236" y="296" width="368" height="112" />
        </g>

        {/* walls */}
        <g className="plan__walls">
          <path d="M0 0 H640 V440 H120 M60 440 H0 V0" />
          <path d="M200 0 V300 M0 300 H200 V400" />
          <path d="M440 0 V200" />
          <path d="M200 260 H260 M380 260 H640" />
        </g>
        {/* entrance door swing */}
        <g className="plan__door">
          <line x1="60" y1="440" x2="60" y2="380" />
          <path d="M60 380 A60 60 0 0 1 120 440" />
        </g>

        <g className="plan__labels">
          <text x="100" y="22">Cardio</text>
          <text x="320" y="22">Kraft geführt</text>
          <text x="540" y="22">Freihantel</text>
          <text x="420" y="360">Funktionsfläche</text>
          <text x="100" y="356">Empfang</text>
        </g>
      </svg>
      <figcaption>Schema der Zonen eines Studios, nicht maßstäblich.</figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <section className="lead">
        <div className="lead__text">
          <h1>Welche Geräte braucht Ihr Fitnessstudio?</h1>
          <Byline author="[Autorenname folgt]" date="2026-11-25" />
          <div className="lead__intro">
            <p>
              Sie richten ein neues Studio ein oder bauen ein bestehendes um. Dieses Handbuch geht die
              Fläche Zone für Zone durch: welche Geräte in welche Zone gehören und worauf Sie beim Kauf achten.
            </p>
            <p>
              Es richtet sich an Studios mit 300 bis 800&nbsp;m² Fläche. Heimtraining und gebrauchte Geräte
              sind nicht Thema dieses Handbuchs.
            </p>
          </div>
        </div>
        <FloorPlan />
      </section>

      <section className="register" aria-labelledby="register-title">
        <h2 id="register-title">Inhalt dieses Handbuchs</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Blatt</th>
              <th scope="col">Thema</th>
              <th scope="col">Stand</th>
            </tr>
          </thead>
          <tbody>
            {REGISTER.map((row) => (
              <tr key={row.sheet}>
                <td className="register__sheet">{row.sheet}</td>
                <td>
                  <strong>{row.title}</strong>
                  <span>{row.scope}</span>
                </td>
                <td className="register__state">in Arbeit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
