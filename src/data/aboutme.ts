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
  title: "Ph.D. Student",
  institution: "UT Southwestern Medical Center",
  // Note that links work in the description
  description: "I'm a Health Data Science Ph.D. student at <a href='https://www.utsouthwestern.edu/'>UT Southwestern Medical Center</a>. I previously did my MS/BS in Math/Data Science at <a href='https://www.utdallas.edu/'>UT Dallas</a> where I was fortunate to be advised by <a href='https://personal.utdallas.edu/~coskunuz/'>Prof. Baris Coskunuzer</a>. <br /><br /> My research interests lie in the intersection of computer vision techniques, machine learning algorithms, medical image analysis, and topological deep learning. <br /><br /> In my free time I enjoy playing video games and travelling. Some games I was top rated in are: League of Legends (Grandmaster), Counter-Strike (FACEIT Level 10), and Hearthstone (Rank 1).",
  email: "philmore.koung@utsouthwestern.edu",
  imageUrl:
    "https://images.unsplash.com/photo-1727460458279-0d0392190b1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.com/citations?user=H9kHnQsAAAAJ&hl=en",
  githubUsername: "philmorefkoung",
  linkedinUsername: "philmorekoung",
  //twitterUsername: "philmorekoung",
  //blogUrl: "https://",
  cvUrl: "https://drive.google.com/file/d/1lhuC0OdJrKe1lk5QXuQTZ1LqXiwbxrdY/view?usp=sharing",
  institutionUrl: "https://osph.utsouthwestern.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
