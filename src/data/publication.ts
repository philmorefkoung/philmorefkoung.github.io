export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "Under Review",
    title: "Diagnosing Blood Diseases and Disorders with Topological Deep Learning",
    authors: "Philmore F. Koung, Saba Fatema, Nagehan Pakasticali, Hung S. Luu, Baris Coskunuzer",
    paperUrl: "https://www.medrxiv.org/content/10.1101/2025.01.21.25320908v1",
    codeUrl: "https://github.com/philmorefkoung/TopoVita-X",
    tldr: "Using topological deep learning to improve classification accuracy of cytomorphological images.",
    imageUrl:
      "https://unsplash.com/photos/a-person-holding-a-blue-balloon-in-the-air-ZZd4FJwUGHU",
  },
  {
    year: "2024",
    conference: "ML4H",
    title: "Topological Machine Learning for Low Data Medical Imaging",
    authors: "Brighton Nuwagira, Caner Korkmaz, Philmore Koung, Baris Coskunuzer",
    paperUrl: "",
    codeUrl: "https://github.com/Kausta/topo-net",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Augmenting deep learning models with Betti vectors to improve model robustness in medical image analysis",
    imageUrl:
      "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2024",
    conference: "TACCSTER",
    title: "Low Data Medical Imaging using Topological Machine Learning",
    authors: "Brighton Nuwagira, Caner Korkmaz, Philmore Koung, Baris Coskunuzer",
    paperUrl: "https://repositories.lib.utexas.edu/items/c8f3bc24-70ca-40b1-ae61-7b056dddadf4",
    codeUrl: "https://github.com/philmorefkoung/TopoMed-ML4H-2024",
    tldr: "Improved deep learning models' robustness in low data settings",
  },
];
