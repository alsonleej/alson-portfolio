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

export const resume: string = "ALSON_LEE_Resume_2026.pdf";

export const projects: Project[] = [
  {
    id: "FIBO SkiErg Challenge System",
    title: "FIBO SkiErg Challenge System",
    date: "2026",
    description: "A 30-second SkiErg challenge for Kisi's booth at FIBO Cologne 2026. Visitors registered on a kiosk, got a QR ticket from a label printer, scanned in at a Kisi reader to start, and climbed a real-time leaderboard. Includes a live booth analytics dashboard. Used by 367 participants.",
    media: getProjectMedia("FIBO SkiErg Challenge System", ["0.mp4", "1.jpg", "2.jpg", "3.jpg", "4.jpg"]),
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "Node.js",
      "tRPC",
      "SQLite",
      "Raspberry Pi"
    ]
  },
  {
    id: "VisEyeQ Safety Monitoring Dashboard",
    title: "Safety Monitoring Dashboard",
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
    id: "kisi",
    title: "Fullstack Software Engineer Intern",
    organization: "Kisi",
    description: [
      "Developed the frontend and backend (servers, database), including creating custom API, for Kisi's guest management and access control system demo at FIBO Cologne 2026 event, used by 367 participants.",
      "Migrated a third-party camera integration from **Firestore** to **PostgreSQL**, with **no downtime**, using dual-writes, a backfill and staged read cutover, saving **$500/mth** on infrastructure costs across **600+** customers",
      "Built and own an integration with Rhombus, an enterprise security camera company, end to end (React, Node.js, PostgreSQL, Terraform), and **migrated** existing customers onto it",
      "Owned **4 production apps**: visitor check-in kiosks, room and desk booking, badge printing, and camera integration",
      "Shipped a **custom form builder** for **2 products** within a week of a customer request, covering the schema, shared backend, admin UI and docs",
      "Provisioned **GCP secrets** via Terraform for secure deployment",
    ],
    startDate: "Jan 2026",
    endDate: "Present",
    technologies: [
      "React",
      "TailwindCSS",
      "TypeScript", 
      "Vite",
      "Python",
      "Bottle",
      "cURL",
      "SQL"
    ],
    organizationIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEVKUv////9IUP8/SP9DS/+mqf9bYv+Pk/9HT/87RP9FTf9BSv89Rv80Pv83Qf86Q//Y2f/7+/9PV/+rrv/39//h4v/n6P/v8P+Fiv/R0/95fv/Iyv+UmP9wdf+2uP9XXv90ev/Cxf+Jjv9jaf/e4P+6vf+Znf9/hP9qcP8pNf/U1v/z8//Awv+prP+dof+ws/9d0S0xAAAExElEQVR4nO3caXuiOgAF4JigQoig1NYFrQuOOtN6+///3QX3pbXVHJ5mOuf91g/GnCIhK0IQEREREREREREREREREREREREREREREREREREREf2bpK+9nJbyu2sCJ30vaERhbbiY1uvdcZbkfyn/x+SUntFZ/XXWrhx56j30E6P0d1cOQMfJdNKpvKc1Wy2N+eBKegqtlJ+MDKN+2n433u5aVpPIfy/gYFXFWiX4iDJUg6dr8TbSLL78sZrJ5x+8UQ2eMNTzq5fvoLcMzr/dqzufUEbTL1y/nclInX7cX7qeUCW9m76+PW+cVEAm77dOriSUweDmCjST8LiIYOZyQq3TO2rQ7gZHZZhfDicMazfcgcceGkeFzLH5kAnV8ItN6KU03tdC95HpCrCEZmFRi6beVUMmLVi2DVRC07WqRnPfuQrQjSkoobK5goXmrqMa/YHkOsAk9IbWFUm3/ZsA3ZhCEvqIm+d589AI/7Mv6gQioVSPiKrU1z04eGOKSBiBflijYjwlR5jC9gAJwymoLk/r1iYAlbZjn1CKu5/0595MXl4D/LiwTxhNcLXJ8t9po4krr2CdUNs/KA6akRDxPd33K6wTYoc7C0+oN2SB9gk9u97auadIeLePMa+yTCgVeMQ69bRtB/CMZUJ0dSqPAXqqxjJhjO4nV/peDVugXUJ4B6RSmQTgEaJdQvMArUyhnWjsI98uYQSf+8s74MGd0z0fsEpYwvxtpdL7DRmp7FklVFVoXbZ+Y7ttVgljcBdyI7tt2vwzNgll8gKty9bqFVqcTUI9hlZlp4ftmNokRPcgtzrYu9smIX6NYa2NfcjaJAxKaWgqLew/ziahwj6a95xpS6UsoUdTcOaJLxPYFNQp7DPIJiF+YLGB/cfZJAQP5ErChN+R0JkR8D9wH5bVljozxpf+T38eCsyy4SVn+jTCwKcS1xzql5pnaFV22itocRwfXgNdWDtI3RnjS1HKPE3VnXmaElYtCg7NtQmF3vtSaLk0XyozaF02UpfmvEVUwjxG16V1izKm9V8EuDNouX6YQCtTeHVr/VDE2HYvN3RrDRg/sd+MHVvHFwY8K7xwbS+G8LD1eWwID7xb33pPFHYNcayFcWxPlPCRT/1e7OC+Ntj+2Vyr5uLeRCFxu0Oqbu4vxTU2s/Vedvf2COd3DqZtaImiLi7u80YtlS7Wx/Sc3KsvpA8Y7Fc35y3gY07MmRmdWfeWX+NNUW6emREiHFpGTKNtSRF6cwDq7Jqyu316+1PdBj27BTt/qGymFtP94Tw5cvX8Yf5YzO7+7z9Hf8MZ0jxicuctND86B4yfvkOe5fbv2iTVGZujMgx2OhicUMhgcfOiaSq94yIMfMUO/E4FT09u+vpO9/ydCvCFAvx7MfpfP2PSepPh6cdLWOzBv9tEq+4Xp3QntYv38JSwYIdPKKQXLz6/jq3nJLh8B48BD/DLSZjTjezXtYFsqzkIL95Ns/5gtw42KOEdQ2t+oPtv77eLnd68FocffO/6vWdQ5b1aTGqjRouH3vFN+TKbDJbSfBTvLyS1ihqRP1oO++NhlpioEXg/531tB1JKX/v+D3zlHhERERERERERERERERERERERERERERERERERERHRd/gfN85lhrNNKQoAAAAASUVORK5CYII=",
    organizationIconAlt: "Kisi"
  },
  {
    id: "viseyeq",
    title: "Founding Software Engineer",
    organization: "VisEyeQ",
    description: [
      "River Venture-backed AI startup revolutionising warehouse safety powered by IoT",
      "Developed a B2B SaaS cloud-based dashboard analysing data from IP cameras, IoT wearables and ML models",
      "Integrated IoT-enabled wearables with frontend using custom APIs via AWS API Gateway",
      "Engineered secure authentication using AWS Cognito with email & Google OAuth",
      "Built AWS Lambda functions to compute injury cost savings and ROI",
      "Managed persistent user/incident data with AWS DynamoDB; streamed video from AWS S3"
    ],
    startDate: "Feb 2025",
    endDate: "Dec 2025",
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
      "Online programming environment and visual debugger to teach programming classes",
      "Implemented 7 bugfixes and 3 new features used by 1,200+ undergraduates",
      "Co-developed CSE Machine, a Source-to-JavaScript interpreter",
      "Engineered core features: control flow, instruction order, and built-ins",
      "Wrote 10 high-coverage Jest test cases for unit/integration testing",
      "Selected presenter at NUS STePS conference"
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
      "Upgraded camp-wide IT infrastructure to support WiFi 6",
      "Tripled load-bearing capacity and endpoints, leading to a 200% increase in broadband coverage",
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

...always down for a game of **pool** or **snooker**.

...a Computer Science undergraduate at the **National University of Singapore.** `

export default {
  resume,experiences, desc, titles, projects, 
};
