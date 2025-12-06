'use client'
import React from 'react'
import ThemeButton from './ui/ThemeButton'
import { useRouter } from 'next/navigation';

const Hero = () => {
    const router = useRouter();
    return (
        <section className="bg-secondary-100 h-screen ">
            <div className='h-full flex justify-center items-center'>
                <div className="flex items-center container">
                    <div className="max-w-[650px]">
                        <div className="space-y-10">
                            <h1 className='text-primary-200 text-6xl font-bold'>Trusted Effective Service and Solutions</h1>
                            <h3 className='text-primary-200 text-2xl font-bold'>NovaStack Technologies</h3>
                            <p><a href="/">Dynamic Software Ltd</a> is one of the oldest and best software solution provider in Bangladesh. Dynamic Software Ltd provides all kinds of software solutions all over the country. POS Retails software’s, Vat Management, ERP System, Web application development, Apps Development and much more.</p>
                            <div className="flex gap-4">
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
                    <div className="">
                        <div className="banner-image animate-pulse">
                            <img src="https://www.dynamicsoftwareltd.com/wp-content/uploads/2022/12/banner-software-team-image.png" alt="" className="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shapes">
                <div className="absolute animate-move top-[50%] left-[0%]">
                    <img src="/shapes/shape1.png" alt="shape" />
                </div>
                <div className="absolute top-[15%] left-[5%] animate-pulse">
                    <img src="/shapes/shape2.png" alt="shape" />
                </div>
                <div className="absolute animate-spin bottom-[10%] left-[40%]">
                    <img src="/shapes/shape3.png" alt="shape" />
                </div>
                <div className="absolute animate-spin top-[20%] left-[30%]">
                    <img src="/shapes/shape4.png" alt="shape" />
                </div>
                <div className="absolute animate-move bottom-[20%] right-[20%]">
                    <img src="/shapes/shape5.png" alt="shape" />
                </div>
                <div className="absolute animate-move top-[10%] right-[30%]">
                    <img src="/shapes/shape6.png" alt="shape" />
                </div>
            </div>
        </section>
    )
}

export default Hero