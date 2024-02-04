"use client";

import React from 'react'
import { PropagateLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <PropagateLoader color='#0ea5e9' size={30} />
    </div>
  )
}

export default Loading;