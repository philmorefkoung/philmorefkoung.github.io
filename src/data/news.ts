export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "February 2025",
    title: "Research accepted at SIAM CSE 2025",
    description: "Our work on topological machine learning has been accepted by the SIAM Conference on Computational Science and Engineering 2025, we will be hosting a 2 hour minisymposteria.",
    link: "https://meetings.siam.org/sess/dsp_programsess.cfm?SESSIONCODE=82486",
  },
  {
    date: "October 2024",
    title: "Abstract accepted at IEEE 2024",
    description: "Our work on few-shot learning in medical image analysis has been accepted at IEEE-EBMS International Conference on Biomedical and Health Informatics 2024.",
    link: "https://bhi.embs.org/2024/",
  },
  {
    date: "September 2024",
    title: "Paper accepted at ML4H 2024",
    description: "Our paper on deep learning for biomedical image analysis has been accepted at ML4H 2024.",
    link: "https://ahli.cc/ml4h/",
  },
  {
    date: "September 2024",
    title: "Research accepted at Third Annual Workshop on Imaging and Data Science",
    description: "I will be presenting my work on machine learning at the Third Annual Workshop on Imaging and Data Science hosted by UT Southwestern Medical Center and UT Dallas",
    link: "https://imaging.utdallas.edu/workshop/",
  },
  {
    date: "August 2024",
    title: "Poster accepted at TACCSTER 2024",
    description: "I will be going to the Texas Advanced Computing Center at UT Austin to present my work on deep learning in medical image analysis.",
    link: "https://repositories.lib.utexas.edu/items/c8f3bc24-70ca-40b1-ae61-7b056dddadf4",
  },
];
