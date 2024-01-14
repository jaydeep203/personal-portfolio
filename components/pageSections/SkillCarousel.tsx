"use client";
import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { skillsIcons } from "../icons/icons";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";



const SkillCarousel = () => {

  const router = useRouter();
    
    return (
      <div
      id="skills"
      className='
        h-[100vh]
        w-full
        mt-3
        flex
        justify-center
        items-center
      '
      >
          

          <ScrollAnimation>
            <div className="h-[70%] px-3 py-7 w-full flex flex-col justify-center items-center gap-3 bg-slate-800 bg-opacity-0 sm:bg-opacity-20">
              <ScrollAnimation>
                <h2 className="font-bold text-sky-500">
                  SKILLS
                </h2>
              </ScrollAnimation>

              <ScrollAnimation>
                <h1 className="text-white font-bold text-xl sm:text-3xl">
                  MY TECHSTACK
                </h1>
              </ScrollAnimation>

              <div className="flex flex-row gap-5 py-5 my-3 max-w-full overflow-x-scroll no-scrollbar">
                {
                  skillsIcons?.map(({Icon, name, color})=>(
                    <div className="
                      text-slate-300 
                      bg-slate-700 
                      py-12
                      px-12
                      sm:px-8
                      w-[20%]
                      flex 
                      flex-col
                      gap-5
                      justify-center
                      items-center  
                      rounded-[5rem]
                      bg-opacity-30
                      hover:scale-[1.1]
                      hover:-translate-y-2
                      hover:text-green-500
                      transition
                      text-3xl
                      sm:text-5xl
                    
                "
                  key={name}
                >
                  <ScrollAnimation>
                    <Icon />
                  </ScrollAnimation>
                  <ScrollAnimation>
                    <h1 className="opacity-60 text-sm md:text-[1rem]">{name}</h1>
                  </ScrollAnimation>
                </div>
                  ))
                }
                
              </div>

            <Button
              variant="secondary"
              title="Projects"
              onClick={() => router.push("/projects")}
            >
              See All Projects
            </Button>
            </div>
          </ScrollAnimation>


        </div>
    );
}




export default SkillCarousel