
import React from 'react'
import Header from './Header';
import ImageComponent from './ImageComponent';
import { IconType } from 'react-icons';

import {BiLogoTypescript} from "react-icons/bi";
import {TbBrandNextjs} from "react-icons/tb";
import {AiFillHtml5} from "react-icons/ai";
import { Project } from '@prisma/client';
import ButtonComponent from './ButtonComponent';
import getTechstack from '@/app/actions/getTechstack';
import ScrollAnimation from '../animation/ScrollAnimation';
import { Button } from '../ui/button';
import {FaGithub} from "@/components/icons/icons";

interface ProjectsSectionProps {
    project?:Project | null;
    isButton?:boolean;
}



const ProjectsSection:React.FC<ProjectsSectionProps> = async({
    project,
    isButton
}) => {

    const techstack = await getTechstack(project?.id);
    const techIcons = techstack?.techs;

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
                    gap-6
                '
            >
                <div className='grid grid-cols-1 md:grid-cols-2'>

                    <Header 
                        techs={techstack?.techs}
                        pname={project?.pname}
                        description={project?.description}
                    />

                    <ImageComponent
                        image={project?.image}
                    />

                </div>

                    {/* <Header 
                        techs={techstack?.techs}
                        pname={project?.pname}
                        description={project?.description}
                    />

                    <ImageComponent
                        image={project?.image}
                    /> */}
                
                    <div className='
                        flex
                        flex-row
                        items-center
                        justify-center
                    '>
                        <ButtonComponent
                            link={project?.link}
                            isButton={isButton}
                        />

                        <Button className='
                            w-fit
                            bg-neutral-100
                            text-black
                            hover:bg-neutral-200
                            hover:text-neutral-900
                        '>
                            <a href={project?.repositoryLink || ""} className='
                                flex
                                flex-row 
                                gap-2
                                items-center
                            '>
                                Github <FaGithub />
                            </a>
                        </Button>
                    </div>
                

                
            </div>
        
        
    </div>
  )
}

export default ProjectsSection;