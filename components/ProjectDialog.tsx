"use client";

import { useState, useEffect } from "react";
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
  type CarouselApi,
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto px-8">
        
        <div className="space-y-4 md:space-y-6">
          {/* Media Carousel */}
          {project.media.length > 0 && (
            <div className="space-y-4">
              <div className="relative px-0 md:px-12">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  setApi={setApi}
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
                      <CarouselPrevious className="hidden md:flex" />
                      <CarouselNext className="hidden md:flex" />
                    </>
                  )}
                </Carousel>
                
                {/* Mobile Dot Indicators */}
                {project.media.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4 md:hidden">
                    {project.media.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          current === index 
                            ? 'bg-primary' 
                            : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                )}
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
            <p className="text-muted-foreground leading-relaxed text-sm md:text-lg">
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