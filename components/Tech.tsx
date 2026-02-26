import React from "react";
import CardAchivment from "./ui/CardAchivment";

export default function Tech() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title fade-in">
        [ SERTIFICATION AND achievement ]
      </h2>
      <div className="">
        <CardAchivment
          titleCompletion=" ENGLISH PROFICIENCY TEST (EPT) - TOEFL EPT (Pre-Advanced)"
          provider="Universitas Negeri Malang"
          time="Feb 2026"
          type="certification"
        />
        <CardAchivment
          titleCompletion=" Introduction to Machine Learning"
          provider="Hacker X"
          time="Dec 2023"
          type="certification"
        />
        <CardAchivment
          titleCompletion="Fundamentals of Project Management, Dicoding Indonesia"
          provider="Hacker X"
          time="Dec 2023"
          type="certification"
        />
        <CardAchivment
          titleCompletion="OS Certification Course"
          provider="Hacker X"
          time="Jan 2024"
          type="certification"
        />
        <CardAchivment
          titleCompletion=" Fundamentals of Procedural Programming with Python"
          provider="Dicoding Indonesia"
          time="Jan 2024"
          type="certification"
        />
        <CardAchivment
          titleCompletion=" Fundamentals of Structured Query Language (SQL)"
          provider="Dicoding Indonesia"
          time="Jan 2024"
          type="certification"
        />
        <CardAchivment
          titleCompletion="Fundamentals of Data Visualization"
          provider="Dicoding Indonesia"
          time="Feb 2024"
          type="certification"
        />
        <CardAchivment
          titleCompletion=" Fundamentals of Data Science "
          provider="Dicoding Indonesia"
          time=" Jan 2024"
          type="certification"
        />
        <CardAchivment
          titleCompletion=" Getting Started with Python Programming "
          provider="Dicoding Indonesia"
          time=" Jan 2024"
          type="certification"
        />
        <CardAchivment
          titleCompletion=" Advanced Text Editor Usage for Beginners "
          provider="Dicoding Indonesia"
          time=" Jan 2024"
          type="certification"
        />
      </div>
    </section>
  );
}
