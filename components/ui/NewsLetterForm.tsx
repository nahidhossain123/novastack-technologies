'use client'
import React from 'react'
import ThemeButton from './ThemeButton'

const NewsLetterForm = () => {
    return (
        <div className='flex'>
            <input type="email" placeholder='Your mail' className='flex-1 px-4 py-4 bg-transparent border-b border-t border-l border-white text-sm text-white rounded-l-md focus:outline-none' />
            <ThemeButton onButtonClick={() => {
                //add subscribe code here
            }}
                style='!bg-primary-100 !px-10 !py-4 !font-bold'
            >
                Subscribe
            </ThemeButton>
        </div>
    )
}

export default NewsLetterForm