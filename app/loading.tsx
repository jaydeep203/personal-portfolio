"use client";

import React from 'react'
import { CircleLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <CircleLoader color='#22c55e' size={60} />
    </div>
  )
}

export default Loading;