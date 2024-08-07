"use client";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Card from "@/app/admin/components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Project } from "@prisma/client"
import ProjectCardFlowbit from "./ProjectCardFlowbit";

interface carouselProps{
    projects: Project[];
}

export function ProjectScroll({projects}:carouselProps) {

  return (
    <Carousel
        plugins={[
            Autoplay({
              delay:4000
            })
        ]}
        opts={{
            align: "start",
            loop:true
        }}
      className="w-full mx-auto sm:w-full max-h-[100vh] sm:max-h-60vmax"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="basis-[90%] md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <ProjectCardFlowbit project={project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  )
}
