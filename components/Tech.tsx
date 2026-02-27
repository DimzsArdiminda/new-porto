import React from "react";
import CardAchievement from "./ui/CardAchievement";
import { mixedData } from "@/lib/AchivmentSertif";


export default function Tech() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title fade-in">
        [ CERTIFICATION AND achievement ]
      </h2>
      <div className="">
        {mixedData.map((achievement, index) => (
          <CardAchievement
            key={index}
            titleCompletion={achievement.titleCompletion}
            provider={achievement.provider}
            time={achievement.time}
            type={achievement.type}
          />
        ))}
      </div>
      <div className="w-full size-8 text-end mt-10">
        <a href="/achiev-certif" className="more-link">
          More
        </a>
      </div>
    </section>
  );
}
