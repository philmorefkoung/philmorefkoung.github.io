export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "August 2025 - Present",
    title: "Graduate Teaching Assistant",
    company: "UT Southwestern Medical Center",
    description:
      "Fall 25 - QDS 5401 - Introduction to Biostatistics and Programming",
    companyUrl: "https://osph.utsouthwestern.edu/",
  },
  {
    date: "January 2024 - August 2025",
    title: "Graduate Machine Learning Researcher",
    company: "Topological Machine Learning Group",
    description:
      "Developed novel deep learning algorithms for biomedical image classification using topological data analysis.",
    advisor: "Prof. Baris Coskunuzer",
    companyUrl: "https://sites.google.com/view/topo-ml",
  },
  {
    date: "August 2023 - December 2023",
    title: "Data Science Capstone",
    company: "PriceSenz",
    description:
      "Developed a Talent Matchmaking Chat Bot using Llama, Retrieval Augmented Generation, and Chain-of-Thought Prompting.",
    // manager: "Elise Brown",
    companyUrl: "https://pricesenz.com/",
  },
  {
    date: "December 2022 - August 2023",
    title: "Data Science Intern",
    company: "Blinkfire Analytics",
    description:
      "Helped train and deploy deep learning models to segment and classify objects from videos/images and track sponsor KPIs",
    // manager: "Elise Brown",
    companyUrl: "https://www.blinkfire.com/landing",
  },
];
