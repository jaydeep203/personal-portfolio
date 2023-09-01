"use client";
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge';

interface InputProps 
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  disabled,
  ...props
},ref) => {
  return (
    <input 
      type={type}
      className={twMerge(`
        py-[1vmax]
        px-[2vmax]
        m-[1vmax]
        border-solid
        border-[1px]
        rounded-[30px]
        outline-none
        border-[rgba(0, 0, 0, 0.192)]
      `,
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  )
});

Input.displayName = "Input";

export default Input;