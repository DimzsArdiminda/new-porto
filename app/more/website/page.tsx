import CardFitur from '@/components/ui/CardFitur'
import { DataPorto } from '@/lib/Website';
import Link from 'next/link';
import React from 'react'

export default function page() {
  return (
    <section
      className="section"
      id="projects"
      style={{ background: "var(--bg-secondary)" }}
    >
      <h2 className="section-title fade-in">
        <Link href="/">
          <span className="section-title-highlight">⬅️</span>
        </Link>
        [ Featured Projects - Website ]
      </h2>
      <div className="projects-grid">
         {DataPorto.map((item, index) =>
         (<CardFitur key={index} {...item} />)
        )}
      </div>
    </section>
  );
}
