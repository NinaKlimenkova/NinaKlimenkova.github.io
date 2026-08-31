export interface NavigationItem {
  label: string;
  path: string;
}

export interface SocialLink {
  label: "LinkedIn" | "Google Scholar";
  url: string;
}

export const siteConfig = {
  name: "Nina Klimenkova",
  role: "PhD Student in Data Science",
  title: "Nina Klimenkova — Data Science Research",
  description:
    "Nina Klimenkova researches human-centered data discovery, table unionability, human-in-the-loop systems, and collaborative intelligence.",
  locale: "en_US",
  socialImage: "images/social-preview.png",
  socialImageAlt: "Nina Klimenkova, PhD Student in Data Science at Worcester Polytechnic Institute.",
  email: "nklimenkova@wpi.edu",
  cvPath: "pdfs/Nina_Klimenkova_CV.pdf",
  affiliation: "Worcester Polytechnic Institute",
  program: "Data Science Program",
  adviser: "Dr. Roee Shraga",
  researchStatement:
    "I am a PhD student in Data Science at Worcester Polytechnic Institute, advised by Dr. Roee Shraga. My research focuses on human-centered data discovery and integration, especially how people and large language models judge table unionability. I study how metacognitive signals—including confidence, decision time, and interaction traces—can improve label calibration, union search, and collaborative intelligence.",
  socialLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nina-klimenkova/",
    },
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=2hLQ2EMAAAAJ&hl=en",
    },
  ] satisfies SocialLink[],
  navigation: [
    { label: "Home", path: "" },
    { label: "Research", path: "research/" },
    { label: "Publications", path: "publications/" },
    { label: "Projects", path: "projects/" },
    { label: "Teaching/Service", path: "teaching/" },
    { label: "CV", path: "cv/" },
  ] satisfies NavigationItem[],
} as const;
