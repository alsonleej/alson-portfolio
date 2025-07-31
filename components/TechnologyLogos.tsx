"use client";

import { technologyIcons } from "@/data/logos";
import Image from "next/image";

/**
 * Chips to display technologies used in a project
 * Includes icons and text
 */

interface TechnologyLogosProps {
  technologies: string[];
}

export function TechnologyLogos({ technologies }: TechnologyLogosProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => {
        const techInfo = technologyIcons[tech];
        if (!techInfo) {
          return (
            <div key={tech} className="text-xs bg-muted px-2 py-1 rounded">
              {tech}
            </div>
          );
        }

        return (
          <div key={tech} className="flex items-center gap-1 bg-muted px-2 py-1 rounded">
            {techInfo.type === "img" && techInfo.src ? (
              <Image 
                src={techInfo.src} 
                alt={tech}
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            ) : (
              <i className={`${techInfo.icon} text-base`}></i>
            )}
            <span className="text-xs font-medium">{tech}</span>
          </div>
        );
      })}
    </div>
  );
} 