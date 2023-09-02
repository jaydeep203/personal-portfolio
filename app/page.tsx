import {Hero, ImageComp, SkillCarousel, Quotes} from '@/components/exportPages';
import GetInTouchSection from '@/components/GetInTouchSection';
import ParticlesBackground from '@/components/Particles/ParticleBackground';
import ProjectsSection from '@/components/projectsSection/ProjectsSection';
import getCurrentUser from './actions/getCurrentUser';
import getProjects from './actions/getProjects';
import getUser from './actions/getUser';

export default async function Home() {

  const currentUser = await getCurrentUser();
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
          w-[85%]
        '
      >

      
      {/* <div className='relative -z-[1]'>
        <ParticlesBackground />
      </div> */}
      
        <Hero />
        <ImageComp 
          projects={projects}
        />
        <SkillCarousel />
        <Quotes
          avatar={user?.avatar}
          bio={user?.bio}
        /> 
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
