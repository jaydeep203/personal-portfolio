"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

// interface Array{
//     title: string;
//     time: number;
// };

// interface DynamicTypedProps{
//     array: Array[];
// }

interface bioProps{
  bio?:string | null | undefined;
}

export const BioTyped = ({bio}:bioProps) => {
    return (
      <TypeAnimation
        sequence={[
          1000,
          bio? bio : ""
        ]}
        wrapper="span"
        cursor={false}
        repeat={1}
        className=''
        style={{ display: 'inline-block' }}
      />
    );
  };


export const TitleTyped = () => {
    return (
      <TypeAnimation
        sequence={[
          1000,
          "Jaydeep"
        ]}
        wrapper="span"
        cursor={false}
        repeat={1}
        className='text-sky-500'
        style={{ display: 'inline-block' }}
      />
    );
  };
  

  

 
const DynamicTyped = () => {
  return (
    <TypeAnimation
      sequence={[
        3000,
        'Designer', 
        3000, 
        'Developer', 
        3000, 
        'Engineer'
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ display: 'inline-block' }}
    />
  );
};

export default DynamicTyped;
