export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
*{
    date: "October 2024",
    title: "Paper accepted at IEEE 2024",
    description: "Our work on few-shot learning in medical image analysis has been accepted at IEEE-EBMS International Conference on Biomedical and Health Informatics 2024.",
    link: "https://bhi.embs.org/2024/",
  }
*{
    date: "September 2024",
    title: "Paper accepted at ML4H 2024",
    description: "Our work on deep learning for biomedical image analysis has been accepted at ML4H 2024.",
    link: "https://ahli.cc/ml4h/",
  }
];
