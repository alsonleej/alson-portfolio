export interface TechnologyIcon {
  icon: string;
  type: "icon" | "img";
  src?: string;
}

export const technologyIcons: Record<string, TechnologyIcon> = {
  "React": { icon: "devicon-react-original colored", type: "icon" },
  "Python": { icon: "devicon-python-plain", type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  "JavaScript": { icon: "devicon-javascript-plain colored", type: "icon" },
  "TypeScript": { icon: "devicon-typescript-plain colored", type: "icon" },
  "HTML": { icon: "devicon-html5-plain colored", type: "icon" },
  "CSS": { icon: "devicon-css3-plain colored", type: "icon" },
  "TailwindCSS": { icon: "devicon-tailwindcss-plain colored", type: "icon" },
  "Bootstrap": { icon: "devicon-bootstrap-plain colored", type: "icon" },
  "jQuery": { icon: "devicon-jquery-plain colored", type: "icon" },
  "Flask": { icon: "devicon-flask-original colored", type: "icon" },
  "SQLite": { icon: "devicon-sqlite-plain colored", type: "icon" },
  "AWS": { icon: "devicon-amazonwebservices-original colored", type: "img", src: "https://img.icons8.com/m_outlined/600/FD7E14/amazon-web-services.png" },
  "MATLAB": { icon: "devicon-matlab-plain colored", type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" },
  "VBA": { icon: "devicon-vba-plain", type: "img", src: "https://www.svgrepo.com/show/374159/vba.svg" },
  "Power Automate": { icon: "devicon-powerautomate-plain", type: "img", src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_Power_Automate.svg" },
  "C": { icon: "devicon-c-plain colored", type: "icon" },
  "R": { icon: "devicon-r-plain colored", type: "icon" },
  "Bash": { icon: "devicon-bash-plain", type: "icon" },
  "Vite": { icon: "devicon-vitejs-plain", type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  "Next.js": { icon: "devicon-nextjs-original colored", type: "icon" },
  "Linux": { icon: "devicon-linux-plain colored", type: "icon" },
  "Git": { icon: "devicon-git-plain colored", type: "icon" },
  "GitHub": { icon: "devicon-github-original colored", type: "icon" },
  "Vim": { icon: "devicon-vim-plain colored", type: "icon" },
  "Vercel": { icon: "devicon-vercel-original", type: "img", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  "cURL": { icon: "devicon-curl-plain colored", type: "img", src: "https://curl.se/logo/curl-logo.svg" },
  "Arduino": { icon: "devicon-arduino-plain colored", type: "icon" },
  "Fusion360": { icon: "devicon-fusion360-plain colored", type: "img", src: "https://www.softexia.com/wp-content/uploads/2024/04/Autodesk_Fusion_360.webp" },
  "Phaser.js": { icon: "devicon-phaser-plain colored", type: "img", src: "https://cdn.phaser.io/images/logo/logo-download.png" },
  "Tiled": { icon: "devicon-tiled-plain colored", type: "img", src: "https://gitlab.com/uploads/-/system/project/avatar/14373156/3e584313743dc13ce67465bb7f443a8c.png" },
  "Jest": { icon: "devicon-jest-plain colored", type: "icon" },
};

export default technologyIcons;
