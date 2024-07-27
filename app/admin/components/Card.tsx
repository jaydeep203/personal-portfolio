"use client";

import { Project } from '@prisma/client';
import Image from 'next/image';
import React, { useState } from 'react';
import {BiSolidEdit, BiSolidTrash, BiLogoGithub} from "react-icons/bi";
import useEditProjectModal from '@/hooks/useEditProjectModal';
import ScrollAnimation from '@/components/animation/ScrollAnimation';
import ButtonComponent from '@/components/projectsSection/ButtonComponent';
import { Button } from '@/components/exportLayout';
import { useRouter } from 'next/navigation';



interface cardProps {
  projects: Project;
  isAdmin: boolean;
}

const Card: React.FC<cardProps> = ({
    projects,
    isAdmin
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const editProject = useEditProjectModal();
  const router = useRouter();

  const handleClick = () => {
    setIsLoading(true);
    editProject.onSet(projects.id);

    editProject.onOpen();
    setIsLoading(false);
  }



  return (
    <>
      <div className='
        flex
        justify-center
      '>
        <div className='
          bg-gray-800
          bg-opacity-30
          md:min-h-[37vmax]
          w-full
          min-h-[70vh]
          sm:w-[25vw]
          p-4
          flex
          flex-col
          justify-center
          items-center
          gap-5
          rounded-lg
          hover:border-neutral-400
          hover:border-solid
          hover:border-[1px]
        '>
          <div 
            className='
              relative
              rounded-t-lg
              w-full
              h-[20vh]
              sm:w-[20vw]
              sm:h-[30vh]
            '
          >
            <Image
              fill
              className='object-cover'
              alt='project screen.'
              src={projects?.image || ""}
            />
          </div>
          <hr className='w-full text-neutral-700' />
          <ScrollAnimation>
            <h1 className='text-lg font-bold text-white'>
              {projects?.pname}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation>
            <p className='text-sm text-neutral-300'>
              {projects?.description}
            </p>
          </ScrollAnimation>
          <div className='
            w-full
            flex
            flex-row
            items-center
          '>
            <ScrollAnimation>
                <ButtonComponent link={projects?.link}  />
            </ScrollAnimation>
            <ScrollAnimation>
              <Button 
                label='Github'
                icon={BiLogoGithub}
                onClick={() => router.replace(projects.repositoryLink || "")}
                style='bg-neutral-100 hover:bg-neutral-200 text-black hover:text-neutral-900 py-2'
                iconClass='text-black w-6 h-6'
              />
            </ScrollAnimation>
          </div>
          
          {
            isAdmin && (
              <>
              
                <hr className='w-full text-neutral-900' />

                <Button 
                  label='Edit'
                  onClick={handleClick}
                  isDisabled={isLoading}
                  icon={BiSolidEdit}
                  style='w-full'
                />

                <Button 
                  label='Delete'
                  isDisabled={isLoading}
                  icon={BiSolidTrash}
                  style='w-full bg-red-700 hover:bg-red-500'
                />

              </>
            )
          }
        </div>
      </div>

      
    </>
  )
}

export default Card