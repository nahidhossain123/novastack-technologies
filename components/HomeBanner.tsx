'use client'
import React from 'react'
import ThemeButton from './ui/ThemeButton'
import { useRouter } from 'next/navigation'

const HomeBanner = () => {
    const router = useRouter()
    return (
        <div className="h-screen flex flex-wrap md:flex-nowrap justify-end items-center container">
            <div className="w-full text-center md:text-start md:max-w-[450px] xl:max-w-[650px]">
                <div className="space-y-5 pt-16 md:p-0 md:space-y-10">
                    <h1 className='text-primary-200 text-4xl md:text-4xl xl:text-6xl font-bold'>Trusted Effective Service and Solutions</h1>
                    <h3 className='text-primary-200 text-lg md:text-2xl font-bold'>NovaStack Technologies</h3>
                    <p><a href="/">NovaStack Technologies</a> is one of the oldest and best software solution provider in Bangladesh. NovaStack Technologies provides all kinds of software solutions all over the country. POS Retails software’s, Vat Management, ERP System, Web application development, Apps Development and much more.</p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <ThemeButton
                            onButtonClick={() => {
                                router.push('contact')
                            }}
                            style={''}
                        >
                            Contact Us
                        </ThemeButton>
                        <ThemeButton
                            onButtonClick={() => {
                                router.push('about')
                            }}
                            style={'!bg-transparent !text-black !border-black'}
                        >
                            Contact Us
                        </ThemeButton>
                    </div>
                </div>
            </div>
            <div className="flex justify-center animate-pulse">
                <img src="/banner-software-team-image.webp" alt="" className=" w-[75%] md:w-full" />
            </div>
        </div>
    )
}

export default HomeBanner