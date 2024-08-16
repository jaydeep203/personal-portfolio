"use client";
import ProjectsSection from '@/components/projectsSection/ProjectsSection'
import React, {useEffect, useState } from 'react'
import axios from 'axios';
import { Project } from '@prisma/client';
import { Button } from '@/components/ui/button';
import LoaderElement from './LoaderElement';
import LoadMoreElement from './LoadMoreElement';

export const revalidate =0;

const Page = () => {

  const [projects, setProjects] = useState<Project[]>([]);
  const [skip, setSkip] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [lastScroll, setLastScroll] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    setLoadingMore(true);
    setError(null);
  
    try {
      const response = await axios.get(`https://portfolio-server-wl2m.onrender.com/api/v1/project?skip=${skip}&limit=5`);
      if (response.data.length > 0) {
        setProjects(prevItems => prevItems?[...prevItems, ...response.data] : response.data);
        setLastScroll((projects.length-1).toString());
      } else {
        setHasMore(false);
      }

    } catch (error:any) {
      console.error(error);
      setError("Failed to load projects.");
    } finally {
      setLoadingMore(false);
      setLoading(false);
    }

  };



  useEffect(() => {
    fetchData();
  },[skip]);


  
  useEffect(() => {
    if (lastScroll !== null) {
      document.getElementById(lastScroll)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [projects]);
  

  if(loading){
    return <LoaderElement />
  }

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
                    i={i.toString()}
                    project={project}
                  />
              </div>
            ))
          }

          

          <div className="mx-auto flex items-center justify-center">
            <div
              className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]"
            >
                <div
                  className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"
                ></div>
                <div className="relative z-20 flex w-full rounded-[0.60rem] p-1">
                    <Button disabled={!hasMore}
                      onClick={()=> setSkip(prevSkip => prevSkip + 1)}
                        className='bg-white text-black hover:bg-neutral-300 hover:text-neutral-700'
                      >
                      {loadingMore? "Loading More..." : "Load More Projects"}
                    </Button>
                </div>
            </div>
          </div>

          {loadingMore && <LoadMoreElement />}
          {error && <p>Error: {error}</p>}

        </div>
    </div>
  )
}

export default Page