
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
                gap-10
            '
        >
            <Header 
                techs={techstack?.techs}
                pname={project?.pname}
                description={project?.description}
            />
            <ImageComponent
                image={project?.image}
            />
            <ButtonComponent
                link={project?.link}
                isButton={isButton}
            />
            
        </div>
    </div>
  )
}

export default ProjectsSection;