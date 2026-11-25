type BylineProps = {
  author: string;
  date: string; // ISO date, e.g. "2026-11-25"
};

const fmt = new Intl.DateTimeFormat("de-DE", { day: "numeric", month: "long", year: "numeric" });

/** Byline row under every H1: author, date and the short ownership disclosure (UWG §5a(4)). */
export function Byline({ author, date }: BylineProps) {
  return (
    <dl className="byline">
      <div>
        <dt>Verfasser</dt>
        <dd>{author}</dd>
      </div>
      <div>
        <dt>Stand</dt>
        <dd>
          <time dateTime={date}>{fmt.format(new Date(`${date}T12:00:00Z`))}</time>
        </dd>
      </div>
      <div className="byline__disclosure">
        <dt>Betreiber</dt>
        <dd>Betrieben von Telju Fitness BeNeLux B.V., einem der verglichenen Hersteller.</dd>
      </div>
    </dl>
  );
}
