export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Diagnosing Blood Diseases and Disorders with Topological Deep Learning",
    description:
      "Utilized deep learning and topological data analysis to diagnose blood diseases and disorders from cytomorphological images with 99.7% test accuracy",
    technologies: ["Python", "PyTorch"],
    projectUrl: "https://github.com/philmorefkoung/TopoVita-X",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1671543331725-cf7a540817f7?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/philmorefkoung/TopoVita-X",
  },
  {
    title: "Topological Few Shot Learning for Biomedical Imaging",
    description:
      "Demonstrated the efficacy of topological features as an alternative in AI-driven biomedical image classification by achieving up to 5-10% increased test accuracy over traditional models",
    technologies: ["Python", "PyTorch", "TensorFlow"],
    projectUrl: "https://github.com/philmorefkoung/Fewshot-Topological-Machine-Learning",
    imageUrl:
      "https://images.unsplash.com/photo-1631563019676-dade0dbdb8fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/philmorefkoung/Fewshot-Topological-Machine-Learning",
  },
  {
    title: "Topological Machine Learning for Low Data Medical Imaging",
    description:
      "Developed novel augmented deep learning models for medical image analysis on 18 different datasets and over 500,000 images, achieving up to 30% increased test AUROC over baseline models",
    technologies: ["Python", "PyTorch", "TensorFlow"],
    projectUrl: "https://github.com/Kausta/topo-net",
    imageUrl:
      "https://images.unsplash.com/photo-1631048008444-cd48b97b5564?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/Kausta/topo-net",
  },
  {
    title: "Retrieval Augmented Generation AI Agent for Resume and Job Matching",
    description:
      "Created an AI Agent using Meta's Llama 2 to match the best resumes to a given job description.",
    technologies: ["Python", "Large Language Models", "RAG"],
    projectUrl: "https://github.com/philmorefkoung/LLaMA2-chatbot-with-RAG/blob/main/Report.pdf",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/philmorefkoung/LLaMA2-chatbot-with-RAG",
  },
  {
    title: "Luxury Watch Dataset",
    description:
      "A dataset containing over 280,000 real-world watch listings from chrono24, the world's largest online watch marketplace.",
    technologies: ["Python", "Web scraping"],
    projectUrl: "https://www.kaggle.com/datasets/philmorekoung11/luxury-watch-listings",
    imageUrl:
      "https://images.unsplash.com/photo-1584378687113-8739c327634c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/philmorefkoung/Webscrapped-Watch-Dataset",
  },
];
