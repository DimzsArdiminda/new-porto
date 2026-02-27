interface AchievementCertification {
  titleCompletion: string;
  provider: string;
  time: string;
  type: "certification" | "achievement";
}

export const Certification: AchievementCertification[] = [
  {
    titleCompletion:
      "ENGLISH PROFICIENCY TEST (EPT) - TOEFL EPT (Pre-Advanced)",
    provider: "Universitas Negeri Malang",
    time: "Feb 2026",
    type: "certification",
  },
  {
    titleCompletion: "Introduction to Machine Learning",
    provider: "Hacker X",
    time: "Dec 2023",
    type: "certification",
  },
  {
    titleCompletion: "Fundamentals of Project Management, Dicoding Indonesia",
    provider: "Hacker X",
    time: "Dec 2023",
    type: "certification",
  },
  {
    titleCompletion: "OS Certification Course",
    provider: "Hacker X",
    time: "Jan 2024",
    type: "certification",
  },
  {
    titleCompletion: "Fundamentals of Procedural Programming with Python",
    provider: "Dicoding Indonesia",
    time: "Jan 2024",
    type: "certification",
  },
  {
    titleCompletion: "Fundamentals of Structured Query Language (SQL)",
    provider: "Dicoding Indonesia",
    time: "Jan 2024",
    type: "certification",
  },
  {
    titleCompletion: "Fundamentals of Data Visualization",
    provider: "Dicoding Indonesia",
    time: "Feb 2024",
    type: "certification",
  },
  {
    titleCompletion: "Fundamentals of Data Science",
    provider: "Dicoding Indonesia",
    time: "Jan 2024",
    type: "certification",
  },
  {
    titleCompletion: "Getting Started with Python Programming",
    provider: "Dicoding Indonesia",
    time: "Jan 2024",
    type: "certification",
  },
  {
    titleCompletion: "Advanced Text Editor Usage for Beginners",
    provider: "Dicoding Indonesia",
    time: "Jan 2024",
    type: "certification",
  },
];

export const Achievement: AchievementCertification[] = [
  {
    titleCompletion:
      "Gold Medal - Innovations Developments Explorations and Applications in Techno-Science Festival",
    provider: "State University Of Malang",
    time: "2024",
    type: "achievement",
  },
  {
    titleCompletion: "Funding Program - Community Service Field",
    provider: "Pekan Ilmiah Mahasiswa Nasional, Pusat Prestasi Nasional",
    time: "2023",
    type: "achievement",
  },
  {
    titleCompletion: "Gold Medal -  Tech and Trade Expo 2024",
    provider: "State University Of Malang",
    time: "2024",
    type: "achievement",
  },
  {
    titleCompletion: "Bronze Medal - Indonesia Inventors Day",
    provider:
      " Indonesian Invention and Innovation Promotion Association (INNOPA)",
    time: "2024",
    type: "achievement",
  },
  {
    titleCompletion: "Silver Medal - Lomba Design Pembelajaran Berbasis IT",
    provider: "State University Of Makasar",
    time: "2025",
    type: "achievement",
  },
  {
    titleCompletion:
      "Bronze Medal - International Capstone Expo With Theme Technology for Society",
    provider: "State University Of Malang, Indonesia",
    time: "2024",
    type: "achievement",
  },
  {
    titleCompletion:
      "Finalist - Student Creativity festival, Electrical Engineering Student Association",
    provider: " State University Of Malang, Indonesia",
    time: "2023",
    type: "achievement",
  },
  {
    titleCompletion: "Participant - HackFest 2024",
    provider: "GDSC Indonesia",
    time: "2024 ",
    type: "achievement",
  },
  {
    titleCompletion:
      "Participant - Hackfest Hackathon : Build to Billions 2025",
    provider: "Ciputra University",
    time: "2025 ",
    type: "achievement",
  },
];

const globalKey = "__achievementShuffled";

function getShuffled(): AchievementCertification[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g: any = globalThis as unknown;
    if (!g[globalKey]) {
        g[globalKey] = [...Certification, ...Achievement].sort(
        () => Math.random() - 0.5,
        );
    }
    return g[globalKey];
}

const shuffled = getShuffled();

export const mixedData: AchievementCertification[] = shuffled.slice(0, 5);
export const mixedDataDua: AchievementCertification[] = shuffled.slice(5);
