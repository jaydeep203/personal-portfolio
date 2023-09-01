import React from 'react';

interface inputProps {
    type?:string;
    required?:boolean;
    placeholder:string;
    value:string;
    style?:string;
    isDisabled?:boolean;
    onChange:(event: React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input = ({
  type='text', 
  required, 
  placeholder, 
  value, 
  style,
  isDisabled, 
  onChange
}:inputProps) => {
  return (
    <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        onChange={onChange}
        className={`
          py-[1vmax]
          px-[2vmax]
          m-[1vmax]
          border-solid
          border-[1px]
          rounded-[30px]
          outline-none
          border-[rgba(0, 0, 0, 0.192)]
          ${style? style: null}
        `}

    />
  )
}

export default Input