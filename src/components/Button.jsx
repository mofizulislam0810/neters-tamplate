import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Button = ({ size, btnName, icon, bg, ...rest }) => {
    return (
        <button {...rest} className={`${size ? size : " w-full mt-6"} ${bg ? "bg-primary text-white" : "border-2 border-primary text-primary"}  text-sm  font-bold rounded-full 
    px-10 py-2 hover:scale-105 duration-300`}>
            {
                icon ? <div className='flex gap-3 items-center font-Sans'>
                    <AiOutlineSearch className='text-sm' /> {btnName}
                </div> : <>{btnName}</>
            }
        </button>
    )
}

export default Button