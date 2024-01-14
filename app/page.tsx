import {Hero, ImageComp, SkillCarousel, Quotes} from '@/components/exportPages';
import GetInTouchSection from '@/components/GetInTouchSection';
import ParticlesBackground from '@/components/Particles/ParticleBackground';
import ProjectsSection from '@/components/projectsSection/ProjectsSection';
import getProjects from './actions/getProjects';
import getUser from './actions/getUser';
import {ProjectScroll} from '@/components/pageSections/projectsScroll/ProjectScroll';
import Education from '@/components/Education';

export const revalidate = 0;

export default async function Home() {
  

  const projects = await getProjects();
  const user = await getUser();



  const project = projects?.[0];

  
  return (
    <>
    
    <div
      className='
        w-full
        h-full
        flex
        flex-col
        overflow-auto
      '
    >
      <div
        className='
          mx-auto
          w-full
          sm:w-[85%]
        '
      >

      
      <div className='relative -z-[1]'>
        <ParticlesBackground />
      </div> 
      
        <Hero />
        

        <ProjectScroll projects={projects} />

        
        <Quotes
          avatar={user?.avatar}
          bio={user?.bio}
        /> 

        
        <Education />

        <SkillCarousel /> 
        


        {/* put icons array */}

        
          <ProjectsSection
            isButton={true}
            project={project}
          />
        

        
          <GetInTouchSection />
        
      </div>
    </div>
    </>
  )
}
