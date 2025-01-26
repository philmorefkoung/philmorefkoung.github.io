export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Philmore Koung",
  title: "Data Scientist",
  institution: "University of Texas at Dallas",
  // Note that links work in the description
  description:
    "I'm a final-year <a href='https://www.utdallas.edu/'>Master's student</a> working on improving deep learning algorithms for biomedical image analysis. My work focuses on augmenting deep learning models with topological data analysis to improve classification accuracy.",
  email: "philmore.koung@gmail.com",
  imageUrl:
    "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.com/citations?user=H9kHnQsAAAAJ&hl=en",
  githubUsername: "philmorefkoung",
  linkedinUsername: "philmorekoung",
  twitterUsername: "philmorekoung",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.utdallas.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
