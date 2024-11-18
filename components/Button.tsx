import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    buttonText: string,
    link: string,
}

const Button: React.FC<ButtonProps> = ({
    buttonText,
    link
}) => {
  return (
    <Link className="bg-[#325c51] text-sm rounded-full hover:bg-[#354843] text-white w-[136px] h-[50px] justify-center items-center flex transition-all ease-in delay-50" href={link}>{buttonText}</Link>
  )
}

export default Button
