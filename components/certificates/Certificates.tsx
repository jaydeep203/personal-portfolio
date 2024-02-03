"use client";

import Card from '@/components/certificates/Card';
import React from 'react';
import {FcKindle} from "react-icons/fc";
import {GrReactjs} from "react-icons/gr";
import {FaJava} from "react-icons/fa";
import { Certificate, User } from '@prisma/client';

interface certificatesProps{
  certificates: Certificate[];
  user: User | null;
}

const Certificates:React.FC<certificatesProps> = ({
  certificates,
  user
}) => {
  return (
    <div className='
      w-full
      flex 
      flex-col
      gap-4
      
    '>
      <h1 className='text-xl ml-3 sm:text-3xl text-white font-bold'>Resume & Certificates</h1>

      <div
        className='
        w-full
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-3
      '
      >

      
          <Card
            icon={FcKindle}
            title='Resume'
            description={user?.resumeDescription || ""}
            verifyLink={user?.resume || "/"}
          />
          {
            certificates.map(({title, description, icon, verifyLink},index) => (
              <Card 
                  key={index}
                  title={title}
                  description={description}
                  verifyLink={verifyLink}
                  iconName={icon}
              />
            ))
          }
          
      </div>
    </div>
  )
}

export default Certificates;