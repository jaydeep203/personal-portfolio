
import ButtonComponent from '@/components/projectsSection/ButtonComponent'
import React from 'react';
import {SiCoursera, FaHackerrank} from "@/components/icons/icons";

const page = () => {
  return (
    <div
        className='
            w-full
            flex
            items-center
            justify-center
        '
    >
        <div className='
            mt-[5rem]
            w-full
            sm:w-[80%]
        '>
            <div className='
                w-full
                p-8
                rounded-lg
                text-white
                gap-6
                flex
                flex-col
            '>
                <div className='
                    p-4
                    hover:bg-slate-900
                    rounded-lg
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                ' >
                    <h1 className='
                        text-white
                        text-2xl
                    ' >
                        Resume
                    </h1>
                    <iframe
                        className='
                            w-[40vw]
                            h-[50rem]
                        '
                        src="https://drive.google.com/file/d/1uKBH--Ep5J_3m4gliAAej19-hjVDYuff/preview"
                        >
                    </iframe>
                    <ButtonComponent 
                        lable='Download Resume'
                        link='https://drive.google.com/uc?export=view&id=1uKBH--Ep5J_3m4gliAAej19-hjVDYuff'
                        style='bg-sky-500 hover:bg-sky-600'
                    />
                </div>
                <div className='
                    p-4
                    hover:bg-slate-900
                    rounded-lg
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                ' >
                    <h1 className='
                        text-white
                        text-2xl
                        flex
                        gap-3
                    ' >
                        Advanced React by Meta - Coursera <SiCoursera className='text-sky-500' />
                    </h1>
                    
                    <iframe
                        className='
                            w-[40vw]
                            h-[30rem]
                        '
                        src="https://drive.google.com/file/d/1cotKbIzLHly_XhGPVRnsVfBIb0YkOyiZ/preview"
                        >
                    </iframe>
                    <ButtonComponent 
                        lable='View Credentials'
                        link='https://coursera.org/share/21c3cba78219131c617cd30ab8ee10a4'
                        style='bg-sky-500 hover:bg-sky-600'
                    />
                </div>
                <div className='
                    p-4
                    hover:bg-slate-900
                    rounded-lg
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                ' >
                    <h1 className='
                        text-white
                        text-2xl
                    ' >
                        Java OOPs Concepts - Newton School
                    </h1>
                    
                    <iframe
                        className='
                            w-[40vw]
                            h-[28rem]
                        '
                        src="https://drive.google.com/file/d/1ttDnnkUcNheiY1ciXnQNkubnIbjUuFI3/preview"
                        >
                    </iframe>
                    <ButtonComponent 
                        lable='View Credentials'
                        link='https://my.newtonschool.co/course/hfv2eid9fs/certificate/utsan1hxr07w/verify'
                        style='bg-sky-500 hover:bg-sky-600'
                    />
                </div>
                <div className='
                    p-4
                    hover:bg-slate-900
                    rounded-lg
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                ' >
                    <h1 className='
                        text-white
                        text-2xl
                        flex
                        gap-3
                    ' >
                        Java - HackerRank <FaHackerrank className='text-green-500' />
                    </h1>
                    
                    <iframe
                        className='
                            w-[40vw]
                            h-[30rem]
                        '
                        src="https://drive.google.com/file/d/18oSbMdfU7o98U03p0oOOKeO2EN5faX82/preview"
                        >
                    </iframe>
                    <ButtonComponent 
                        lable='View Credentials'
                        link='https://www.hackerrank.com/certificates/9926270a0120'
                        style='bg-sky-500 hover:bg-sky-600'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page