"use client";

import Image from 'next/image'
import React from 'react';
import { BioTyped } from './DynamicTyped';
import ScrollAnimation from '../animation/ScrollAnimation';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import {Github, Linkedin} from "lucide-react";



interface BioProps{
  avatar?:string | null;
  bio:string | null | undefined;
}




const Bio:React.FC<BioProps> = ({
  avatar,
  bio
}) => {
  
  const router = useRouter();

  const handleSkillBtn = (e:any) => {
    e.preventDefault();
    const skillsElement = document.querySelector("#skills") as HTMLElement | 0;

    if(skillsElement)
    {
      window.scrollTo({
        top: skillsElement?.offsetTop || 0,
        behavior: 'smooth'
      });
    }
    
  }


  return (
    
      <div 
      id='bio'
      className='
        w-full
        flex
        justify-center
        items-center
      '>
        <div
          className='
            group
            w-full
            py-2
            m-3
            md:p-6
            md:px-10
            md:m-8
            gap-3
            grid
            grid-cols-1
            md:grid-cols-2

          '
        >
            <div
              
              className='
                m-auto
                w-full
                py-3
                md:p-3
                md:w-[70%]
                rounded-xl
              '
            >
              <Image
                height={400}
                width={400}
                src={ avatar || "/images/placeholder.png"}
                alt='avatar'
                className='
                  rounded-full
                  mx-auto
                  group-hover:border-white
                  group-hover:border-[1px]
                  group-hover:border-solid
                  md:group-hover:scale-110
                  transition
                '
              />
            </div>
          <ScrollAnimation>
            <div
              className='
                p-6
              '
            >
              <ScrollAnimation>
                <h1 className='text-neutral-100 font-bold text-xl'>Bio</h1>
              </ScrollAnimation>
              <hr className='text-white' />
              
                <p className='p-5 text-neutral-300 '>
                  {bio}
                </p>
              
              <div className='flex flex-row gap-5'>
                <ScrollAnimation>
                  <Button 
                    onClick={handleSkillBtn}
                    className='bg-white hover:bg-neutral-300 text-black font-bold px-4'
                  >
                    Skills
                  </Button>
                </ScrollAnimation>
                <ScrollAnimation>
                  <Button 
                    onClick={() => router.push("/projects")}
                    className='bg-white hover:bg-neutral-300 text-black font-bold px-4'
                  >Projects</Button>
                </ScrollAnimation>
                <ScrollAnimation>
                  <a href="https://github.com/jaydeep203" rel='noopener noreferrer' target='_blank' >
                    <Button 
                      size="icon"
                      variant="ghost"
                      className='text-white bg-opacity-10 hover:bg-opacity-40 hover:bg-black hover:text-neutral-300'
                    >  
                        <Github className='h-5 w-5' /> 
                      
                    </Button>
                  </a> 
                </ScrollAnimation>
                <ScrollAnimation>
                  <a href="https://www.linkedin.com/in/jaydeep-deshpande-68601822a/" rel='noopener noreferrer' target='_blank' >
                    <Button 
                      size="icon"
                      variant="ghost"
                      className='text-white bg-opacity-10 hover:bg-opacity-40 hover:bg-black hover:text-neutral-300'
                    >  
                      <Linkedin className='h-5 w-5' /> 
                    </Button>
                  </a> 
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    
  )
}

export default Bio;