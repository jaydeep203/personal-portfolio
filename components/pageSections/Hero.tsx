import React from 'react';
import {AiOutlineDownCircle} from "@/components/icons/icons";

const Hero = () => {
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
        <div
            className=''
        >
            <h1 className='
                font-semibold
                lg:text-[5rem]
                md:text-[3rem]
                sm:text-[2.7rem]
                text-[2.7rem]
            '>I am Jaydeep</h1>
            <div className='
                flex
                flex-col
                lg:text-[3rem]
                lg:gap-5
                lg:flex-row
                md:gap-3
                md:text-[2.2rem]
                md:flex-row
                sm:gap-3
                sm:text-[2rem]
                sm:flex-row
                gap-3
                text-[2rem]
            '>
                <p>Designer |</p>
                <p>Developer |</p>
                <p>Engineer</p>
            </div>
            
        </div>
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

        <div>
            <AiOutlineDownCircle 
                size={40}
                className='
                    mt-3
                    text-white
                    font-bold
                    transition
                    group-hover:scale-110
                    group-hover:translate-y-12
                '
            />
        </div>
    </div>
  )
}

export default Hero;