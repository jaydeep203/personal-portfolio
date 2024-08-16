import {Hero, SkillCarousel, Bio} from '@/components/exportPages';
import GetInTouchSection from '@/components/GetInTouchSection';
import ParticlesBackground from '@/components/Particles/ParticleBackground';
import ProjectsSection from '@/components/projectsSection/ProjectsSection';
import getProjects from './actions/getProjects';
import getUser from './actions/getUser';
import {ProjectScroll} from '@/components/pageSections/projectsScroll/ProjectScroll';
import Education from '@/components/Education';
import Certificates from '@/components/certificates/Certificates';
import getCertificates from './actions/getCertificates';
import getEducations from './actions/getEducations';
import getRandom from './actions/getRandom';
import ProjectCardFlowbit from '@/components/pageSections/projectsScroll/ProjectCardFlowbit';

export const revalidate = 0;

export default async function Home() {
  

  const projects = await getProjects();
  const certificates = await getCertificates();
  const educations = await getEducations();
  const user = await getUser();

  const projectIds = [
    "64f21d429deb9b023b13fa7d",
    "64f21e279deb9b023b13fa7e",
    "64f21f5c9deb9b023b13fa7f",
    "64f220699deb9b023b13fa80",
    "64f2217f9deb9b023b13fa81",
    "6599817e2e84f2e15782928f",
    "65b61397fa59499161b47db7",
    "65b614b4fa59499161b47db9",
  ];
  const index = Math.floor(Math.random()*projectIds.length);
  const projectId = projectIds[index];

  const randomProject = await getRandom(projectId);

  
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

        
        <Bio
          avatar={user?.avatar}
          bio={user?.bio}
        /> 
        
        <Certificates certificates={certificates} user={user} />

        <Education educations={educations} />


        <SkillCarousel /> 
        

        
          <ProjectsSection
            i="0"
            isButton={true}
            project={randomProject}
          />
        
        
          <GetInTouchSection />
        
      </div>
    </div>
    </>
  )
}
