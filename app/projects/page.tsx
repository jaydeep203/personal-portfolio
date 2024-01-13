import ProjectsSection from '@/components/projectsSection/ProjectsSection'
import React from 'react'
import getProjects from '../actions/getProjects';
import getTechstack from '../actions/getTechstack';

export const revalidate =0;

const Page = async() => {

  const projects = await getProjects();

  

  return (
    <div
      className='
        w-full
        py-6
        flex
        flex-col
        items-center
        justify-center
      '
    >
        <div 
          className='
            w-full
            mt-[5rem]
            flex
            flex-col
            items-center
            justify-center
          '
        >
          <div
            className='
              py-3
            '
          >
            <h1 className='text-white text-3xl font-bold'>
              Projects
            </h1>
          </div>

          {
            projects?.map((project, i) => (
              <div key={i} className='w-full sm:w-[80%] my-5'>
                <ProjectsSection 
                  project={project}
                />
              </div>
            ))
          }

        </div>
    </div>
  )
}

export default Page