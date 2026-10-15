import Reveal from "./Reveal";

export default function Timeline({
  items,
}: {
  items: { year: string; title: string; text: string }[];
}) {
  return (
    <ol className="timeline">
      {items.map((it) => (
        <Reveal as="li" key={it.title} className="tl-item">
          <span className="tl-node" aria-hidden="true" />
          <span className="tl-year">{it.year}</span>
          <h3 className="tl-title">{it.title}</h3>
          <p className="tl-text">{it.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
