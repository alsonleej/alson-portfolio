"use client";

import { technologyIcons } from "@/data/logos";
import Image from "next/image";

export function LogoMarquee() {
    // Convert technologyIcons to the format expected by LogoMarquee
    const skills = Object.entries(technologyIcons).map(([name, tech]) => ({
        icon: tech.icon,
        name: name,
        type: tech.type,
        src: tech.src
    }));

    return (
        <div 
            className="animate-marquee flex"
        >
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-8 items-center min-w-max px-5">
            {skills.map((skill, skillIndex) => (
              <div key={`${setIndex}-${skillIndex}`} className="text-center">
                {skill.type === "img" && skill.src ? (
                  <Image src={skill.src} width={48} height={48} className="w-12 h-12 mb-2 mx-auto" alt={skill.name} />
                ) : (
                  <i className={`${skill.icon} text-4xl mb-2`}></i>
                )}
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
}