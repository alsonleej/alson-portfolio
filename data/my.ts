/** This is the single source of truth for all data. 
/*  Update text here and the changes will be reflected in the website.
/*  Update the media files in the /public/projects/ folders, and name them in numerical order. npm run dev will run the pre-dev script to load in the media files.
/*  Be sure to compress the media files to reduce file size. Vercel Hobby max total deployment size is 100MB.
/*  For projects, pls put the most recent ones at the top of the list.

*/
import { TimelineExperience } from "@/components/Timeline";

export interface Project {
  id: string;
  title: string;
  date?: string;
  description: string;
  media: string[];
  technologies: string[];
  githubUrl?: string;
  websiteUrl?: string;
}

// Helper function to generate media paths for a project with mixed file types
const getProjectMedia = (projectId: string, mediaFiles: string[]): string[] => {
  return mediaFiles.map(file => `/projects/${projectId}/${file}`);
};

export const projects: Project[] = [
  {
    id: "VisEyeQ Safety Monitoring Dashboard",
    title: "VisEyeQ Safety Monitoring Dashboard",
    date: "2025",
    description: "A B2B SaaS cloud-based dashboard to visualize real-time safety alerts and incident analytics in warehouses, powered by AI/ML and IoT sensors.",
    media: getProjectMedia("VisEyeQ Safety Monitoring Dashboard", ["0.mp4", "1.mp4", "2.png", "3.png", "4.png", "5.png", "6.png"]),
    technologies: [
      "React",
      "TypeScript", 
      "TailwindCSS",
      "Vite",
      "AWS",
    ],
    websiteUrl: "https://viseyeq.com"
  },
  {
    id: "Shift Happens",
    title: "Shift Happens",
    date: "2025",
    description: "A puzzle-platformer game consisting of 8 mind-bending levels, where you must navigate through a series of interconnected puzzles to collect the lost Fragments.",
    media: getProjectMedia("Shift Happens", ["0.mp4", "1.mp4", "2.mp4", "3.mp4", "4.png", "5.png", "6.png", "7.png"]),
    technologies: [
      "Phaser.js",
      "JavaScript",
      "Tiled",
      "Vercel"
    ],
    githubUrl: "https://github.com/Lousycat/Shift-Happens",
    websiteUrl: "https://shift-happens-drab.vercel.app"
  },
  {
    id: "Source Academy",
    title: "Source Academy",
    date: "2025",
    description: "Implemented critical bugfixes and new features for the Source Academy platform, used by 1,200+ undergraduates annually for programming education.",
    media: getProjectMedia("Source Academy", ["0.mp4", "1.mp4", "2.mp4"]),
    technologies: [
      "JavaScript",
      "TypeScript",
      "Jest",
      "React"
    ],
    githubUrl: "https://github.com/source-academy/",
    websiteUrl: "https://sourceacademy.org"
  },
  {
    id: "Robot Ball Thrower",
    title: "Robot Ball Thrower",
    date: "2025",
    description: "A lightweight robot that climbs a ramp and throws balls over a wall. I designed the CAD rendering and schematic of the robot in Fusion360, and programmed the servo motor in Arduino C to throw the ball.",
    media: getProjectMedia("Robot Ball Thrower", ["0.mp4", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"]),
    technologies: [
      "Arduino",
      "C",
      "Fusion360"
    ]
    
  },
  {
    id: "Sudoku Solver",
    title: "Sudoku Solver",
    date: "2024",
    description: "A Sudoku solver application that can solve any valid Sudoku puzzle using backtracking algorithms.",
    media: getProjectMedia("Sudoku Solver", ["0.mp4", "1.mp4"]),
    technologies: [
      "Python",
      "Flask",
      "HTML",   
      "CSS",
      "JavaScript"
    ],
    githubUrl: "https://github.com/alsonleej/sudokusolver",
    websiteUrl: "https://sudokusolver-beryl.vercel.app"
  },
  {
    id: "Personal Website v1",
    title: "Personal Website v1",
    date: "2024",
    description: "My first personal website built with vanilla HTML, CSS, and JavaScript.",
    media: getProjectMedia("Personal Website v1", ["0.mp4", "1.png", "2.png"]),
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],
    githubUrl: "https://github.com/alsonleej/alsonleej.github.io",
    websiteUrl: "https://alsonleej.github.io/"
  },
  {
    id: "docautofiller",
    title: "Excel VBA Automation System",
    date: "2023",
    description: "Developed a custom Excel VBA macro and database system to streamline administrative forms, reducing processing time by 50% and eliminating human error.",
    media: getProjectMedia("docautofiller", ["0.mp4", "1.png"]),
    technologies: [
      "VBA",
      "Excel"
    ],
    githubUrl: "https://github.com/alsonleej/docautofiller"
  },
  {
    id: "namecardsgenerator",
    title: "Name Cards Generator",
    date: "2023",
    description: "A tool to easily generate professional name cards and gift cards with customizable templates. Just fill up names in Excel and click a button!",
    media: getProjectMedia("namecardsgenerator", ["0.mp4", "1.png"]),
    technologies: [
      "VBA",
      "PowerPoint"
    ],
    githubUrl: "https://github.com/alsonleej/namecardgenerator"
  },

];

export const experiences: TimelineExperience[] = [
  {
    id: "viseyeq",
    title: "Founding Software Engineer",
    organization: "VisEyeQ",
    description: [
      "River Venture-backed AI startup revolutionising warehouse safety powered by AI/ML and IoT",
      "Developed a B2B SaaS cloud-based dashboard to visualize real-time safety alerts and incident analytics in warehouses, using React, TypeScript, TailwindCSS, and deployed on AWS Amplify for CI/CD",
      "Integrated IoT-enabled wearables with frontend using custom APIs via AWS API Gateway to surface live hazard data",
      "Engineered a secure authentication flow with AWS Cognito, supporting both email and Google OAuth sign-in options",
      "Designed and implemented AWS Lambda functions to compute injury cost savings and return-on-investment (ROI) metrics",
      "Managed persistent data with AWS DynamoDB for user input and incident history; streamed hazard footage from AWS S3 buckets",
      "Collaborated with cross-functional team for Demo Day pitch (Jun 2025) and StartupSG Founder Grant application; targeting pilot deployments by Aug 2025"
    ],
    startDate: "Feb 2025",
    endDate: "Present",
    technologies: [
      "React",
      "TypeScript", 
      "TailwindCSS",
      "Vite",
      "AWS",
      "cURL"
    ],
    organizationIcon: "/viseyeq.png",
    organizationIconAlt: "VisEyeQ"
  },
  {
    id: "source-academy",
    title: "Open Source Contributor",
    organization: "Source Academy",
    description: [
      "Experiential environment as education tool to teach programming classes",
      "Implemented 7 critical bugfixes and 3 new features used by 1,200+ undergraduates every year for learning",
      "Co-developed the CSE Machine, a Source-to-Javascript interpreter",
      "Co-engineered core features of the Source language, including its control flow, instruction execution order and built-in functions",
      "Developed 10 high-coverage unit and integration tests using Jest, including edge cases for control flow and instruction evaluation",
      "Selected to present project at NUS STePS conference to potential investors and government agencies"
    ],
    startDate: "Jan 2025",
    endDate: "May 2025",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Jest",
      "React"
    ],
    organizationIcon: "https://about.sourceacademy.org/assets/sourcepower.ico",
    organizationIconAlt: "Source Academy"
  },
  {
    id: "saf-lancer",
    title: "Signal Operator",
    organization: "Singapore Armed Forces Lancer",
    description: [
      "Set-up industrial-scale networking capabilities, including installation and maintenance of networking hardware and software",
      "Upgraded camp-wide IT infrastructure to support WiFi 6 while tripling load-bearing capacity and endpoints, leading to a 200% increase in broadband coverage",
      "Developed a custom Excel VBA macro and database system to streamline administrative forms, re-designed workflow by reducing processing time by 50% and eliminating human error"
    ],
    startDate: "Jan 2022",
    endDate: "May 2024",
    technologies: [
      "VBA",
      "Excel",
    ],
    organizationIcon: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Crest_of_Singapore_Army.svg/1200px-Crest_of_Singapore_Army.svg.png",
    organizationIconAlt: "Singapore Armed Forces"
  }
];

export const titles: string = `seek serendipity.
build SaaS tools.
make websites.
look to the future.
engineer software.
like to learn.`;

export const desc: string = `
...a believer in **using tech** for **impact**. 

...engineering solutions to **scale**.

...always learning **new technologies**.

...trying to keep up a regular **gym** and **running** routine.

...reading about **finance**, **nutrition**, and **mental well-being**.

...a Computer Science undergraduate at the **National University of Singapore.** `

export default {
  experiences, desc, titles, projects
};
