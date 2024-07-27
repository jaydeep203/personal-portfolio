"use client";
import { Project } from '@prisma/client';
import React from 'react';
import {ExternalLink} from "lucide-react";
import { FaGithub } from 'react-icons/fa6';

const ProjectCardFlowbit = ({
  project
}:{ project: Project }) => {
  return (
    

  <div className="
    max-w-sm 
    bg-gray-800
    bg-opacity-30
     hover:border 
    border-gray-200 
    rounded-lg shadow 
    ">
      <a href="#">
          <img className="rounded-t-lg" src={project.image || ""} alt="project image" />
      </a>
      <div className="p-5">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {project.pname}
              </h5>
          </a>
          <p className="mb-3 font-normal text-neutral-300">
            {project.description?.slice(0,100)}...
          </p>

          <div className='flex flex-row gap-3'>

            <a href={project.link || "#"} className="
                  inline-flex 
                  items-center 
                  px-3 py-2 
                  text-sm 
                  font-medium 
                  text-center 
                  text-white
                  bg-gray-800 rounded-lg 
                  hover:text-neutral-300
                  border-[0.5px]
                  border-white
                  border-solid
                "
              >
                Live <ExternalLink className='h-4 w-4 ml-2' />
            </a>
            <a href={project.link || "#"} className="
                  inline-flex 
                  items-center 
                  px-3 py-2 
                  text-sm 
                  font-medium 
                  text-center 
                  text-black
                  bg-white rounded-lg 
                  hover:bg-neutral-300 
                  focus:ring-4 focus:outline-none 
                  focus:ring-blue-300
                "
              >
                <FaGithub className='h-4 w-4' />
            </a>


          </div>
          
      </div>
  </div>

  )
}

export default ProjectCardFlowbit