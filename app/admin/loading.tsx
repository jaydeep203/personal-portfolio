"use client";

import React from 'react'
import { BounceLoader } from 'react-spinners';

const loading = () => {
  return (
    <div className='h-full flex items-center justify-center'>
        <BounceLoader color='#22c55e' size={40} />
    </div>
  )
}

export default loading