import Image from 'next/image'
import React from 'react';

interface BioProps{
  avatar?:string | null;
  bio:string | null | undefined;
}

const Bio:React.FC<BioProps> = ({
  avatar,
  bio
}) => {
  return (
    <div className='
      w-full
      h-screen
      flex
      justify-center
      items-center
    '>
      <div
        className='
          w-full
          p-6
          px-10
          m-8
          grid
          grid-cols-2
        '
      >
        <div
          className='
            bg-neutral-400
            p-3
            m-auto
            w-[70%]
            rounded-xl
          '
        >
          <Image
            height={400}
            width={400}
            src={ avatar || "/images/placeholder.png"}
            alt='avatar'
            className='
              rounded-3xl
              mx-auto
              hover:scale-110
              transition
            '
          />
        </div>
        <div
          className='
            p-6
          '
        >
          <h1 className='text-neutral-100 font-bold text-xl'>Bio</h1>
          <hr className='text-white' />
          <p className='p-5 text-neutral-300'>
            {bio}
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Bio