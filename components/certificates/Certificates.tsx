"use client";

import Card from '@/components/certificates/Card';
import React from 'react';
import {FcKindle} from "react-icons/fc";
import {GrReactjs} from "react-icons/gr";
import {FaJava} from "react-icons/fa";

const Certificates = () => {
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
        flex 
        flex-col
        sm:flex-row
        gap-3
      '
      >

      
          <Card
            icon={FcKindle}
            title='Resume'
            description='Full Stack Web Developer with a strong command of front-end and back-end technologies.
              Passionate about creating seamless user experiences and staying current with industry best practices.
            '
            link='https://drive.google.com/uc?export=view&id=1uKBH--Ep5J_3m4gliAAej19-hjVDYuff'
          />
          <Card
            icon={GrReactjs}
            title='Advanced ReactJs'
            description='completed an advanced React.js course on Coursera, mastering state management and advanced concepts. 
                        Enhanced proficiency in React.js for building robust and scalable solutions.'
            link='https://coursera.org/share/21c3cba78219131c617cd30ab8ee10a4'
          />
          <Card
            icon={FaJava}
            title="OOP's in Java"
            description='Done Object-Oriented Programming (OOP) concepts in Java through a comprehensive course. 
                          Developed a strong foundation in encapsulation, inheritance, and polymorphism. '
            link='https://my.newtonschool.co/course/hfv2eid9fs/certificate/utsan1hxr07w/verify'
          />
          <Card
            icon={FaJava}
            title='Java Programming'
            description='Acquired foundational skills in Java programming and problem-solving through a comprehensive course. 
                        Demonstrated proficiency in core Java concepts, data structures, and algorithmic problem-solving.'
            link='https://www.hackerrank.com/certificates/9926270a0120'
          />
      </div>
    </div>
  )
}

export default Certificates;