"use client";
import ProjectsSection from '@/components/projectsSection/ProjectsSection'
import React, { useCallback, useEffect, useState } from 'react'
import getProjects from '../actions/getProjects';
import getTechstack from '../actions/getTechstack';
import ScrollAnimation from '@/components/animation/ScrollAnimation';
import axios from 'axios';
import { Project } from '@prisma/client';

export const revalidate =0;

const Page = () => {

  const [projects, setProjects] = useState<Project[]>([]);
  const [skip, setSkip] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  console.log(projects);


  const fetchData = async () => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch(`https://portfolio-server-wl2m.onrender.com/api/v1/project?skip=${skip}&limit=18`);
      const data = await response.json();
      if (data.length > 0) {
        setProjects(prevItems => [...prevItems, ...data]);
        setSkip(prevSkip => prevSkip + 1);
      } else {
        setHasMore(false);
      }

    } catch (error:any) {
      console.error(error);
      setError("Failed to load projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  // const handleScroll = useCallback(() => {
  //   // if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
  //   //   return;
  //   // }
  //   // fetchData();

  //   if (loading || !hasMore) return;

  //   const threshold = 300;
  //   const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
  //   const bottomPosition = document.documentElement.offsetHeight - threshold;

  //   if (scrollPosition >= bottomPosition && !loading) {
  //     fetchData();
  //   }
  // }, [loading, hasMore]);

  // useEffect(() => {
  //   const debouncedHandleScroll = debounce(handleScroll, 200);
  //   window.addEventListener('scroll', debouncedHandleScroll);
  //   return () => window.removeEventListener('scroll', debouncedHandleScroll);
  // }, [handleScroll]);

  // function debounce(func: () => void, wait: number) {
  //   let timeout: NodeJS.Timeout;
  //   return () => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(func, wait);
  //   };
  // }

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

          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}

        </div>
    </div>
  )
}

export default Page