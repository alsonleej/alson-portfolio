"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { TechnologyLogos } from "@/components/TechnologyLogos";
import { Project } from "@/data/my";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Helper function to check if a URL is a video based on file extension
const isVideo = (url: string) => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

export function ProjectDialog({ project, isOpen, onClose }: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto px-8">
        
        <div className="space-y-6">
          {/* Media Carousel */}
          {project.media.length > 0 && (
            <div className="space-y-4">
              <div className="relative px-12">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {project.media.map((item, index) => (
                      <CarouselItem key={index}>
                        <div className="relative rounded-lg overflow-hidden bg-muted/20">
                          {isVideo(item) ? (
                            <video
                              src={item}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-64 object-cover"
                            />
                          ) : (
                            <Image
                              src={item}
                              alt={`${project.title} - Image ${index + 1}`}
                              width={800}
                              height={256}
                              className="w-full h-64 object-cover"
                            />
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.media.length > 1 && (
                    <>
                      <CarouselPrevious />
                      <CarouselNext />
                    </>
                  )}
                </Carousel>
              </div>
            </div>
          )}

        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-foreground">
            {project.title}
          </DialogTitle>
        </DialogHeader>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Technology Stack */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Tech Stack</h4>
              <TechnologyLogos technologies={project.technologies} />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              )}
              {project.websiteUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.websiteUrl, '_blank')}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Website
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 