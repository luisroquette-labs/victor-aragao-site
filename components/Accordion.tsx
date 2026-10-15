"use client";

import { useState } from "react";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="accordion">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`acc-item ${isOpen ? "is-open" : ""}`} key={it.q}>
            <button
              className="acc-q"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{it.q}</span>
              <span className="acc-icon" aria-hidden="true" />
            </button>
            <div className="acc-a">
              <p>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
