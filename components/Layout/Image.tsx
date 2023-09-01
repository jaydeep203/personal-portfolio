import React from 'react';

interface imageProps {
    src?:string | null;
    style:string;
}

const Img = ({src, style}:imageProps) => {
  return (
    <>
    
        <img
            src={src || "/BackgroundImg.jpeg"} 
            alt="Image"
            className={style}
        />
    </>
  )
}

export default Img;