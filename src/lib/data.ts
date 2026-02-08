import { TimelineEntry, SkillCategory, Service } from "./types";

export const personalInfo = {
  name: "Calvin Cheng",
  title: "Frontend Software Engineer",
  location: "Montreal, QC",
  bio: "Self-taught software developer with an electrical engineering background. I traded circuits for code and never looked back — building clean, user-focused web applications with modern technologies.",
  email: "calvin.cheng.software@gmail.com",
  github: "https://github.com/ChengCalvin",
  linkedin: "https://www.linkedin.com/in/calvincheng95/",
};

export const timeline: TimelineEntry[] = [
  {
    year: "Present",
    title: "Frontend Software Engineer",
    subtitle: "Generix Group",
    description:
      "Leading migration from legacy Preact to modern React for a CMS platform serving 3,000+ warehouse management pages. Designed hybrid routing architecture and unified navigation across frameworks. Championed an AI-powered internal knowledge search initiative presented to C-suite.",
    type: "work",
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    subtitle: "onepoint",
    description:
      "Built React frontend components for a smart building platform with Autodesk Forge 3D visualization. Developed recurring payment functionality using Java and Moneris API integration.",
    type: "work",
  },
  {
    year: "2021",
    title: "Software Developer",
    subtitle: "Thirdbridge",
    description:
      "Developed the feedback modal for Circle K's EasyFuel app and implemented a Firebase Dynamic Links referral system. Built production features used by thousands of users.",
    type: "work",
  },
  {
    year: "2021",
    title: "Operation & Support Analyst",
    subtitle: "Onepoint @ Société Générale",
    description:
      "Resolved trading system incidents and ensured regulatory compliance for stock trades. Refined team documentation and streamlined operational processes.",
    type: "work",
  },
  {
    year: "2020",
    title: "Freelance Web Developer",
    subtitle: "REL Realty Advisors",
    description:
      "Led development of the founder's first website using Next.js, with email integration (EmailJS), reCAPTCHA, and internationalization (i18n).",
    type: "project",
  },
  {
    year: "2020",
    title: "E-Sport Statistic Tracker",
    subtitle: "Full-Stack Learning Project",
    description:
      "Built a full-stack application using React, Redux, Node.js, Express, and MongoDB. Deepened my understanding of the entire web development stack.",
    type: "project",
  },
  {
    year: "2019",
    title: "Self-Taught Journey Begins",
    subtitle: "Learning React, JavaScript & Python",
    description:
      "Started learning web development through online resources and personal projects. Focused on React, JavaScript fundamentals, and Python.",
    type: "learning",
  },
  {
    year: "2018",
    title: "Electrical Engineering Career",
    subtitle: "Zimmer Biomet & CAE",
    description:
      "Worked on system & electrical requirements compliance at Zimmer Biomet and electrical systems CAD at CAE. Great experience, but I discovered my passion lay elsewhere.",
    type: "work",
  },
  {
    year: "2018",
    title: "Bachelor of Electrical Engineering",
    subtitle: "Graduation",
    description:
      "Graduated with a degree in Electrical Engineering. The analytical thinking and problem-solving skills I gained continue to shape my approach to software development.",
    type: "education",
  },
];

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Interactive, performant web apps built with React, Next.js, and TypeScript. From SPAs to complex dashboards — pixel-perfect and accessible.",
    icon: "Code",
  },
  {
    title: "Website Builds",
    description:
      "End-to-end website design and development. Responsive, SEO-friendly sites tailored to your brand and ready to launch.",
    icon: "Globe",
  },
  {
    title: "Migration & Modernization",
    description:
      "Upgrading legacy codebases to modern frameworks. Incremental migration strategies that keep your product running while improving the stack.",
    icon: "RefreshCw",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Material UI"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub Actions", "Docker", "VS Code", "Firebase"],
  },
];
