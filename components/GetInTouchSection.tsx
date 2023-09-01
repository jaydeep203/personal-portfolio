import React from 'react'
import { Button } from './exportLayout'

const GetInTouchSection = () => {
  return (
    <div
        className='
            w-full
            px-6
            py-20
            flex 
            flex-col
            items-center
            justify-center
            gap-10
        '
    >
        <p 
            className='
                font-bold
                text-white
                text-5xl
                flex
                flex-col
                justify-center
                items-center
                gap-5
            '
        >
            Let's brew something 
            <span>greate together!</span>
        </p>
        <Button
            label='Get in touch'
        />
    </div>
  )
}

export default GetInTouchSection