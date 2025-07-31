"use client";

import { TimelineItem } from "@/components/TimelineItem";

export interface TimelineExperience {
  id: string;
  title: string;
  organization: string;
  description: string[];
  startDate: string;
  endDate?: string;
  technologies: string[];
  organizationIcon: string;
  organizationIconAlt: string;
}

interface TimelineProps {
  experiences: TimelineExperience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary" />
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <TimelineItem 
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </div>
  );
} 