export interface DatedProfileEntry {
  title: string;
  organization: string;
  date: string;
  description?: string;
  details?: string[];
}

export const academicProfile = {
  education: [
    {
      title: "PhD in Data Science",
      organization: "Worcester Polytechnic Institute",
      date: "August 2024–present",
      description: "Data Science Program; advised by Dr. Roee Shraga.",
    },
    {
      title: "Master of Business Administration: Business Analytics",
      organization: "University of Tennessee at Chattanooga",
      date: "August 2022–May 2024",
    },
    {
      title: "Bachelor of Computer Science with a Data Analytics concentration",
      organization: "Taras Shevchenko National University of Kyiv",
      date: "September 2018–July 2022",
    },
  ] satisfies DatedProfileEntry[],
  researchRole: {
    title: "Research Assistant",
    organization: "Worcester Polytechnic Institute",
    date: "January 2025–present",
    description:
      "Research on human and large-language-model judgments of table unionability, metacognitive signals, label calibration, and human–AI combinations for data discovery.",
  } satisfies DatedProfileEntry,
  teaching: {
    title: "Teaching Assistant, Knowledge Discovery and Data Mining",
    organization: "Worcester Polytechnic Institute",
    date: "Fall 2025",
    description:
      "Led weekly office hours and supported students across data preprocessing, feature engineering, classification, clustering, pattern mining, anomaly detection, text and graph mining, and evaluation.",
    details: [
      "Created rubrics and graded assignments and examinations.",
      "Provided timely feedback at project milestones.",
      "Supported exam logistics and academic integrity.",
    ],
  } satisfies DatedProfileEntry,
  mentoring: {
    title: "PhD Mentor, WPI Data Science REU",
    organization: "Worcester Polytechnic Institute",
    date: "Summers 2025 and 2026",
    description:
      "Mentored an undergraduate through a ten-week Data Science and AI research project.",
    details: [
      "Set project milestones and held weekly check-ins.",
      "Coached on Python and guided the literature review and experiment design.",
      "Emphasized methodology and model evaluation.",
    ],
  } satisfies DatedProfileEntry,
  service: {
    title: "Women in Data Science Worldwide Ambassador",
    organization: "Worcester, Massachusetts",
    date: "August 2024–present",
    description:
      "Represents Women in Data Science in the campus and local community and helps plan events that support current and future participants in data science.",
  } satisfies DatedProfileEntry,
  skills: {
    programming: ["Python", "R", "SAS", "C++", "SQL", "Java"],
    tools: [
      "PyTorch",
      "Knowledge Graphs",
      "Large Language Models",
      "Hadoop MapReduce",
      "Spark",
      "LaTeX",
      "Power BI",
      "Tableau",
      "AWS",
    ],
  },
} as const;
