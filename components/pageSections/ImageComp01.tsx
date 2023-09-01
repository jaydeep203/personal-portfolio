"use client";
import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Project } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';


interface ImageCompProps{
  projects:Project[] | null;
}

export default function ImageComp({
  projects
}:ImageCompProps){

  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      speed:2000,
      autoplaySpeed:6000,
      cssEase:"linear"
    
  };

 


  return (
    <div 
        className='
          mx-auto
          w-[40%]
          mb-3
        '
    >
      <Slider {...settings}>
        
        {
          projects?.map((project) => (
            <Link href={project.link || "/"} key={project.pname} className='
            '>
              <Image
                src={project.image || "/BackgroundImg.jpeg"}
                className="w-[40vw] border-[1px] border-solid border-white rounded-[1.7rem] "
                alt="Images"
                height={300}
                width={300}
                
              />
            </Link>
          ))
        }
        
      </Slider>
    </div>
  )
}



