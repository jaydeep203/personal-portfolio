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

interface carouselProps{
    projects: Project[];
}

export function ProjectScroll({projects}:carouselProps) {
  return (
    <Carousel
        plugins={[
            Autoplay({
            delay: 3000,
            }),
        ]}
        opts={{
            align: "start",
            loop:true
        }}
      className="w-full"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card isAdmin={false} projects={project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
