"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TechnologyLogos } from "@/components/TechnologyLogos";
import { Project } from "@/data/my";
import { ExternalLink, Github } from "lucide-react";
import { ProjectDialog } from "@/components/ProjectDialog";
import Image from "next/image";

// Helper function to check if a URL is a video based on file extension
const isVideo = (url: string) => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card 
        className="h-full bg-background/50 backdrop-blur-sm border-border hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <CardContent className="px-6 py-0 sm:py-6">
          {/* Image/Video Section */}
          <div className="relative mb-6 rounded-lg overflow-hidden bg-muted/20">
            {isVideo(project.media[0]) ? (
              <video
                src={project.media[0]}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 object-cover"
              />
            ) : (
              <Image
                src={project.media[0]}
                alt={project.title}
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
            )}
          </div>

          {/* Content Section */}
          <div className="space-y-4">
            {/* Title */}
            <h3 className="text-xl font-semibold text-foreground">
              {project.title}
              <div className="text-sm text-muted-foreground">
                {project.date}
              </div>
              
            </h3>


            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Technology Stack */}
            <div className="space-y-2">
              <TechnologyLogos technologies={project.technologies} />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, '_blank');
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              )}
              {project.websiteUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.websiteUrl, '_blank');
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Website
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <ProjectDialog
        project={project}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
} 