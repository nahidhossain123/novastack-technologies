import React from 'react'

const ThemeButton = ({ children, onButtonClick, style }) => {
    return (
        <button
            onClick={onButtonClick}
            className={`
            relative
            border
            border-primary-200
            bg-primary-200
            text-white 
            px-4 
            py-2 
            rounded-sm
            before:content-[""]
            before:absolute 
            before:h-[50%] 
            before:w-full 
            before:top-0
            before:left-full
            before:z-[-1]
            before:bg-white 
            before:duration-500
            before:transition-all 
            after:content-[""]
            after:absolute 
            after:h-[50%] 
            after:w-full 
            after:bottom-0
            after:right-full
            after:z-[-1]
            after:bg-white  
            after:duration-500
            after:transition-all
            hover:before:left-0
            hover:after:right-0
            hover:text-black
            z-1
            overflow-hidden
            ${style}
    `}>
            {children}
        </button>
    )
}

export default ThemeButton