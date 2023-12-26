"use client";

import { Button } from '@/components/exportLayout';
import { Project } from '@prisma/client';
import Image from 'next/image';
import React, { useState } from 'react';
import {BiSolidEdit, BiSolidTrash} from "react-icons/bi";
import { useRouter } from 'next/navigation';



interface cardProps {
  projects: Project;
}

const Card: React.FC<cardProps> = ({
    projects
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClick = () => {
    setIsLoading(true);

    router.push(`/admin/${projects.id}`);

    setIsLoading(false);

  }

  return (
    <>
      <div className='
        p-3
        flex
        justify-center
      '>
        <div className='
          bg-white
          w-[25vw]
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
              w-[20vw]
              h-[30vh]
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
          <h1 className='text-lg font-bold text-black'>
            {projects?.pname}
          </h1>
          <p className='text-sm text-neutral-700'>
            {projects?.description}
          </p>
          <p className='text-sm text-neutral-700'>
            {projects?.link}
          </p>
          
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
        </div>
      </div>

      
    </>
  )
}

export default Card