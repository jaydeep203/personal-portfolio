
import ButtonComponent from '@/components/projectsSection/ButtonComponent'
import React from 'react';
import {SiCoursera, FaHackerrank} from "@/components/icons/icons";
import getCertificates from '../actions/getCertificates';
import getUser from '../actions/getUser';
import Title from './components/Title';

export const revalidate = 0;

const page = async() => {
    const certificates = await getCertificates();
    const user = await getUser();

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
                p-1
                lg:p-8
                rounded-lg
                text-white
                gap-6
                flex
                flex-col
            '>
                <div className='
                    p-1
                    lg:p-4
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
                            w-full
                            h-[80vh]
                            lg:w-[40vw]
                            lg:h-[50rem]
                        '
                        src={user?.resumePreview || ""}
                        >
                    </iframe>
                    <ButtonComponent 
                        lable='Download Resume'
                        link={user?.resume || "/"}
                        style='bg-sky-500 hover:bg-sky-600'
                    />
                </div>
                {
                    certificates.map(({id, title, companyName, companyLogo, previewLink, verifyLink}) => (
                        <div 
                            key={id}
                            className='
                            p-1
                            lg:p-4
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
                                <Title 
                                    title={title}
                                    companyName={companyName}
                                    companyLogo={companyLogo}
                                />
                                
                            </h1>
                            
                            <iframe
                                className='
                                    w-full
                                    h-[35vh]
                                    lg:w-[40vw]
                                    lg:h-[30rem]
                                '
                                src={previewLink || ""}
                                >
                            </iframe>
                            <ButtonComponent 
                                lable='View Credentials'
                                link={verifyLink || "/"}
                                style='bg-sky-500 hover:bg-sky-600'
                            />
                        </div>
                    ))
                }
                
                
                
            </div>
        </div>
    </div>
  )
}

export default page