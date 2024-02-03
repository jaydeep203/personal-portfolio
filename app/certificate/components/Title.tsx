"use client";

import { companyIcons } from '@/components/icons/icons';
import React from 'react';

interface titleProps{
    title:string;
    companyName:string | null;
    companyLogo:string | null;
}

const Title:React.FC<titleProps> = ({
    title,
    companyName,
    companyLogo
}) => {
  return (
    <div className='
            text-white
            text-2xl
            flex
            gap-3
        ' >
            {title} - {companyName} {
                companyIcons.map(({Icon, name, color})=>(
                companyLogo===name && <Icon key={name} className={color} />
            ))
        } 
    </div>
  )
}

export default Title