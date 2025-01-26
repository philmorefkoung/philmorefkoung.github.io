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
    title: "Abstract accepted at IEEE 2024",
    description: "Our work on few-shot learning in medical image analysis has been accepted at IEEE-EBMS International Conference on Biomedical and Health Informatics 2024.",
    link: "https://bhi.embs.org/2024/",
  }
*{
    date: "September 2024",
    title: "Paper accepted at ML4H 2024",
    description: "Our work on deep learning for biomedical image analysis has been accepted at ML4H 2024.",
    link: "https://ahli.cc/ml4h/",
  }
*{
    date: "September 2024",
    title: "Research accepted at Third Annual Workshop on Imaging and Data Science",
    description: "Our work on deep learning for biomedical image analysis has been accepted at the Third Annual Workshop on Imaging and Data Science hosted by UT Southwestern and UT Dallas.",
    link: "https://imaging.utdallas.edu/workshop/",
  }
*{
    date: "August 2024",
    title: "Paper accepted at TACCSTER 2024",
    description: "Our work on deep learning for biomedical image analysis has been accepted at TACCSTER 2024 hosted by UT Austin.",
    link: "https://repositories.lib.utexas.edu/items/c8f3bc24-70ca-40b1-ae61-7b056dddadf4",
  }
];
