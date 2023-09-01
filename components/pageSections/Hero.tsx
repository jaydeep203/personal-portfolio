import React from 'react';

const Hero = () => {
  return (
    <div 
        
        className='
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
            
        >
            <h1 className='
                font-semibold
                text-[5rem]
            '>I am Jaydeep</h1>
            <div className='
                flex
                flex-row
                text-[3rem]
                gap-5
            '>
                <p>Designer |</p>
                <p>Developer |</p>
                <p>Engineer</p>
            </div>
            
        </div>
        <div className='
            mt-5
            font-[2px]
            text-[1.7rem]
            opacity-[0.7]
        '>
            <p>Crafting Products to shape tomorrow</p>
            <p>aspiring Engineer to design and develope the porducts</p>

        </div>
    </div>
  )
}

export default Hero;