"use client";

import React from 'react'
import { SyncLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <SyncLoader color='#0ea5e9' size={30} />
    </div>
  )
}

export default Loading;