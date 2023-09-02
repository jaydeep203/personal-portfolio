"use client";
import React from 'react'
import Header from './Header';
import ImageComponent from './ImageComponent';
import { IconType } from 'react-icons';
import { useRouter } from 'next/navigation';

import {BiLogoTypescript} from "react-icons/bi";
import {TbBrandNextjs} from "react-icons/tb";
import {AiFillHtml5} from "react-icons/ai";
import { Project } from '@prisma/client';
import Link from 'next/link';

interface ProjectsSectionProps {
    project?:Project | null;
    isButton?:boolean;
}



const ProjectsSection:React.FC<ProjectsSectionProps> = ({
    project,
    isButton
}) => {



    const router = useRouter();

    const testIcons = [
        BiLogoTypescript,
        TbBrandNextjs,
        AiFillHtml5
    ]

  return (
    <div 
        className='
            w-full
            rounded-lg
            group
            hover:bg-slate-900
            hover:border-white
            hover:border-solid
            hover:boder-[1px]
            transition
        '
    >
        <div
            className='
                w-full
                p-3
                md:p-8
                flex
                flex-col
                gap-10
            '
        >
            <Header 
                icons={testIcons} 
                pname={project?.pname}
                description={project?.description}
            />
            <ImageComponent
                image={project?.image}
            />
            <div className='
                w-full
                p-6
                flex
                items-center
                justify-center
            '>
                {
                    isButton ? (
                        <button 
                            onClick={() => router.push("/projects")}
                            className='
                                px-4
                                py-3
                                text-neutral-100
                                font-semibold
                                text-sm
                                rounded-md
                                transition
                                bg-slate-800
                                hover:bg-slate-700
                                hover:text-neutral-300
                                group-hover:border-white
                                group-hover:border-[1px]
                                group-hover:border-solid
                            '
                            >
                                Show more work
                            </button>
                    ) : (
                            <Link 
                                href={project?.link || "/" }
                                className='
                                    px-4
                                    py-3
                                    text-neutral-100
                                    font-semibold
                                    text-sm
                                    rounded-md
                                    transition
                                    bg-slate-800
                                    hover:bg-slate-700
                                    hover:text-neutral-300
                                    group-hover:border-white
                                    group-hover:border-[1px]
                                    group-hover:border-solid
                            '
                            >
                                Visit website
                            </Link>
                    )
                }
                
            </div>
        </div>
    </div>
  )
}

export default ProjectsSection;