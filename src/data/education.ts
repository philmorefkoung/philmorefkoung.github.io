export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024—Present",
    institution: "University of Texas at Dallas",
    degree: "M.Sc. in Mathematics with Concentration in Data Science)",
    advisor: "Prof. Baris Coskunuzer",
    thesis: "Topological Machine Learning for Medical Image Analysis"
  },
  {
    year: "2019—2023",
    institution: "University of Texas at Dallas",
    degree: "B.S. in Data Science",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
