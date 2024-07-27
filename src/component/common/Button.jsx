import React from 'react'

const Button = ({text,bg,className}) => {
  return (
    <button className={`py-[7px] px-[27px] bg-[#FE7235] text-white rounded-lg ${className} `}>{text}</button>
  )
}

export default Button