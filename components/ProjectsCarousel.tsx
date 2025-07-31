"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/data/my";

interface ProjectsCarouselProps {
  projects: Project[];
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {projects.map((project) => (
          <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
} 