"use client";

import React from 'react'
import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
        <ClipLoader color='#22c55e' size={40} />
    </div>
  )
}

export default Loading