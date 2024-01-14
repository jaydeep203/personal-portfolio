"use client";
import React from 'react';
import {AiOutlineDownCircle} from "@/components/icons/icons";
import DynamicTyped, { TitleTyped } from './DynamicTyped';
import ScrollAnimation from '../animation/ScrollAnimation';
import { Button } from '../ui/button';
import {Presentation, Info, Book, Computer, Stars, Link2} from "lucide-react";
import { useRouter } from 'next/navigation';

const Hero = () => {
    const router = useRouter();
    const handleScrollBtn = (e:any) => {
        e.preventDefault();
        const skillsElement = document.querySelector("#bio") as HTMLElement | 0;
    
        if(skillsElement)
        {
          window.scrollTo({
            top: skillsElement?.offsetTop || 0,
            behavior: 'smooth'
          });
        }
        
      }
    const handleProjectsBtn = () => {
        router.push("/projects");
        
      }
    const handleEducationBtn = (e:any) => {
        e.preventDefault();
        const skillsElement = document.querySelector("#education") as HTMLElement | 0;
    
        if(skillsElement)
        {
          window.scrollTo({
            top: skillsElement?.offsetTop || 0,
            behavior: 'smooth'
          });
        }
        
      }
    const handleSkillsBtn = (e:any) => {
        e.preventDefault();
        const skillsElement = document.querySelector("#skills") as HTMLElement | 0;
    
        if(skillsElement)
        {
          window.scrollTo({
            top: skillsElement?.offsetTop || 0,
            behavior: 'smooth'
          });
        }
        
      }
    const handleCertificatesBtn = () => {
        router.push("/certificate");
      }
    const handleInTouchBtn = (e:any) => {
        e.preventDefault();
        const skillsElement = document.querySelector("#footer") as HTMLElement | 0;
    
        if(skillsElement)
        {
          window.scrollTo({
            top: skillsElement?.offsetTop || 0,
            behavior: 'smooth'
          });
        }
        
      }
  return (
    <div 
        
        className='
            group
            w-full
            h-screen
            flex
            flex-col
            justify-center
            items-center
            text-center
            bg-transparent
            text-white
        '
    >
        {/* <Image 
            src={"/BackgroundImg.jpeg"}
            alt='Background'
            fill
            className='LandingPageImg'
            style={{objectFit:'cover', objectPosition:"center"}}
        /> */}
        <ScrollAnimation>
            <div
                className=''
            >
                <h1 className='
                    font-semibold
                    lg:text-[5rem]
                    md:text-[3rem]
                    sm:text-[2.7rem]
                    text-[2.7rem]
                '>I am <TitleTyped /> </h1>
                <div className='
                    lg:text-[3rem]
                    md:text-[2.2rem]
                    sm:text-[2rem]
                    text-[2rem]
                '>
                    <DynamicTyped />
                </div>
                
                
            </div>
        </ScrollAnimation>
        <ScrollAnimation>
            <div className='
                mt-5
                lg:font-[2px]
                lg:text-[1.7rem]
                opacity-[0.7]
                md:text-[1rem]
                md:font-[1.5px]
                sm:text-[0.8rem]
                sm:font-[1.2px]
                text-[1rem]
                font-[1.2px]
            '>
                <p>Crafting Products to shape tomorrow</p>
                <p>aspiring Engineer to design and develope the porducts</p>

            </div>
        </ScrollAnimation>
        <div className='flex flex-row gap-4 mt-5'>
            <Button
                onClick={handleProjectsBtn}
                title='Projects'
                variant="outline"
                className='bg-slate-900 flex flex-row gap-2'
                
            > 
                <Presentation />
                <span className='hidden md:flex'>Projects</span>
            </Button>
            <Button
                onClick={handleScrollBtn}
                title='About'
                variant="outline"
                className='bg-slate-900 hidden md:flex flex-row gap-2 '
            >
                <Info />
                <span className='hidden md:flex'>About</span>
            </Button>
            <Button
                onClick={handleEducationBtn}
                title='Education'
                variant="outline"
                className='bg-slate-900 flex flex-row gap-2'

            >
                <Book />
                <span className='hidden md:flex'>Education</span>
            </Button>
            <Button
                onClick={handleSkillsBtn}
                title='Skills'
                variant="outline"
                className='bg-slate-900 flex flex-row gap-2'

            >
                <Computer />
                <span className='hidden md:flex'>Skills</span>
            </Button>
            <Button
                onClick={handleCertificatesBtn}
                title='Certeficates'
                variant="outline"
                className='bg-slate-900 flex flex-row gap-2'

            >
                <Stars />
                <span className='hidden md:flex'>Certificates</span>
            </Button>
            <Button 
                onClick={handleInTouchBtn}
                title='Get in Touch'
                variant="outline"
                className='bg-slate-900 hidden md:flex flex-row gap-2'
            >
                <Link2 />
                <span className='hidden md:flex'>Get in Touch</span>
            </Button>
        </div>
        <div 
            onClick={handleScrollBtn}
            
            className='
            text-neutral-300
            transition
            hover:cursor-pointer
            group-hover:translate-y-12'
        >
            <AiOutlineDownCircle 
                size={40}
                className='
                    mt-3
                    text-white
                    font-bold
                    transition
                    group-hover:scale-110
                '
            />
            Scroll
        </div>
    </div>
  )
}

export default Hero;