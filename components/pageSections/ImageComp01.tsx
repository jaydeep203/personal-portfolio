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
          w-[90%]
          md:w-[55%]
          mb-3
        '
    >
      <h1 className='text-white mx-3 my-2 p-2 text-lg md:text-2xl font-bold'>My Projects</h1>
      <p className='text-neutral-300 mx-3 mb-2 px-2'>Click on Imge to Visit the project</p>
      <Slider {...settings}>
        
        {
          projects?.map((project) => (
            <div key={project.pname}>
            <Link href={project.link || "/"}  className=' my-auto
            '>
              <Image
                src={project.image || "/BackgroundImg.jpeg"}
                className="md:w-[50vmax] w-[80vw] border-[1px] border-solid border-white rounded-[1.7rem] "
                alt="Images"
                height={300}
                width={300}
                
              />
            </Link>

            <h1 className='text-white'>{project.pname}</h1>
            <p className='text-neutral-300'>{project.description}</p>

            </div>
          ))
        }
        
      </Slider>
      
    </div>
  )
}



