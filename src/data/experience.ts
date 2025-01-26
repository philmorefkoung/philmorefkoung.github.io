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
    date: "January 2024 - Present",
    title: "Graduate Machine Learning Researcher",
    company: "Topological Machine Learning Group",
    description:
      "Developed novel algorithms for biomedical image classification using topological data analysis.",
    advisor: "Prof. Baris Coskunuzer",
    companyUrl: "https://sites.google.com/view/topo-ml",
  },
  {
    date: "December 2022 - August 2023",
    title: "Intern",
    company: "Blinkfire Analytics",
    description:
      "Helped train and deploy deep learning models to segment objects from videos/images and track sponsor KPIs",
    // manager: "Elise Brown",
    companyUrl: "https://www.blinkfire.com/landing",
  },
];
