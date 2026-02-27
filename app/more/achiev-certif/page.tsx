import CardAchievement from '@/components/ui/CardAchievement';
import { mixedDataDua } from '@/lib/AchivmentSertif';
import Link from 'next/link';
import React from 'react'

export default function page() {


  return (
    <section className="section" id="projects">
      <h2 className="section-title fade-in">
        <Link href="/">
          <span className="section-title-highlight">⬅️</span>
        </Link>
        [ CERTIFICATION AND achievement ]
      </h2>
      <div className="">
        {mixedDataDua.map((random, index) => (
          <CardAchievement
            key={index}
            titleCompletion={random.titleCompletion}
            provider={random.provider}
            time={random.time}
            type={random.type}
          />
        ))}
      </div>
    </section>
  );
}
