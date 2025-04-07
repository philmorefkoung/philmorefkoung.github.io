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
    "I'm a final-year <a href='https://www.utdallas.edu/'>Master's student</a> at UT Dallas where I am fortunate to be supervised by <a href='https://personal.utdallas.edu/~coskunuz/'>Prof. Baris Coskunuzer</a>. I have a background in deep learning and artificial intelligence for predictive analytics and data analysis. My current work focuses on augmenting deep learning models with topological data analysis to improve classification accuracy in the domain of biomedical imaging. <br /> <br /> I have extensively used languages such as Python, SQL, and R and have experience using statistical methods and machine learning in my research. <br /> <br /> I have published and presented my work to a wide variety of audiences from Radiologists/Neuroscientists at UT Southwestern Medical Center, Research Scientists at UT Austin, industry ML experts at SIAM CSE 25, and my peers at UT Dallas. <br /> <br /> In my free time I enjoy playing video games. Some games I was top rated in are: League of Legends (Grandmaster / 0.01% peak), Counter-Strike (FACEIT Level 10 / Top 1000 North America), and Hearthstone (Rank 1 Peak / 0.003%). I also enjoy travelling where my most recent trip was to Taiwan.",
  email: "philmore.koung@gmail.com",
  imageUrl:
    "https://images.unsplash.com/photo-1727460458279-0d0392190b1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.com/citations?user=H9kHnQsAAAAJ&hl=en",
  githubUsername: "philmorefkoung",
  linkedinUsername: "philmorekoung",
  //twitterUsername: "philmorekoung",
  blogUrl: "https://",
  cvUrl: "https://drive.google.com/file/d/1lhuC0OdJrKe1lk5QXuQTZ1LqXiwbxrdY/view?usp=sharing",
  institutionUrl: "https://www.utdallas.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
