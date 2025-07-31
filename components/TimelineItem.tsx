"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TimelineExperience } from "./Timeline";
import { TechnologyLogos } from "@/components/TechnologyLogos";
import Image from "next/image";

interface TimelineItemProps {
  experience: TimelineExperience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect and re-observe to allow re-triggering
          observer.disconnect();
          setTimeout(() => {
            if (itemRef.current) {
              observer.observe(itemRef.current);
            }
          }, 100);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`relative flex items-start timeline-item ${
        isVisible ? 'animate' : ''
      } ${
        isEven 
          ? 'md:flex-row' 
          : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline circle */}
      <div className={`absolute -left-1.5 md:left-1/2 md:transform md:-translate-x-1/2 top-6 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center z-10 transition-all duration-400 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}>
        <Image 
          src={experience.organizationIcon} 
          alt={experience.organizationIconAlt}
          width={28}
          height={28}
          className="w-5 h-5 md:w-7 md:h-7 object-contain"
        />
      </div>

      {/* Content card */}
      <div className={`ml-12 md:ml-0 md:w-1/2 ${
        isEven ? 'md:pr-8' : 'md:pl-8'
      }`}>
        <Card className={`hover:shadow-md transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-x-0' : `opacity-0 translate-x-16 ${ isEven ? 'md:-translate-x-16' : 'md:translate-x-16' }`
        }`}>
          <CardContent className="px-6 py-1">
            {/* Title and Organization */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {experience.title}
              </h3>
              <p className="text-muted-foreground font-medium">
                {experience.organization}
              </p>
            </div>

            {/* Description */}
            <div className="mb-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology logos */}
            <div className="mb-4">
              <TechnologyLogos technologies={experience.technologies} />
            </div>

            {/* Date (on mobile) */}
            <div className={`text-xs text-muted-foreground md:hidden`}>
              {experience.endDate 
                ? `${experience.startDate} - ${experience.endDate}`
                : experience.startDate
              }
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Date on opposite side for large devices */}
      <div className={`hidden md:block md:w-1/2 ${
        isEven ? 'md:pl-8' : 'md:pr-8'
      }`}>
        <div className={`text-s text-muted-foreground mt-6 ${
          isEven ? 'text-left' : 'text-right'
        } transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {experience.endDate 
            ? `${experience.startDate} - ${experience.endDate}`
            : experience.startDate
          }
        </div>
      </div>
    </div>
  );
} 