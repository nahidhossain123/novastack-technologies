'use client'
import React from 'react'
import ThemeButton from './ui/ThemeButton'
import { useRouter } from 'next/navigation';
import { HeroSectionTypes } from '@/types';

const HeroSection = ({ children }: HeroSectionTypes) => {
    const router = useRouter();
    return (
        <section className="bg-secondary-100 h-full relative">
            <div className='h-full flex justify-center items-center'>
                {children}
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

export default HeroSection