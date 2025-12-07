'use client'
import React from 'react'
import ThemeButton from './ui/ThemeButton'
import { useRouter } from 'next/navigation'

const CompanyOverview = () => {
    const router = useRouter()
    return (
        <section className="p-5 md:p-0 py-10 md:py-28">
            <div className="container mx-auto space-y-10">
                <div className="flex flex-wrap md:flex-nowrap">
                    <div className="max-w-[800px] space-y-5">
                        <span>About Us</span>
                        <h2 className='text-2xl md:text-4xl font-bold'>Innovative Software Solution Provider</h2>
                        <h3 className='text-lg md:text-xl font-bold'>Company Overview</h3>
                        <p><a href="/">Novastack Technology</a>is a dynamic and innovative technology company dedicated to delivering cutting-edge solutions in software development, cloud computing, and digital transformation. We specialize in creating scalable, efficient, and intelligent technology solutions that empower businesses to thrive in the digital era. With a commitment to excellence, innovation, and customer satisfaction, Novastack Technology partners with clients across industries to drive growth, optimize operations, and unlock the full potential of technology.</p>
                        <p>Our team of skilled professionals leverages the latest technologies and industry best practices to deliver solutions that are not only effective but also future-ready. At Novastack Technology, we believe in transforming ideas into impactful digital realities.</p>
                    </div>

                    <div className="
                    relative
                        before:content['']
                        before:absolute
                        before:w-1/2
                        before:h-20
                        before:rounded-md
                        before:bg-red-500
                        before:top-0
                         before:z-[-1]
                          after:content['']
                        after:absolute
                        after:w-1/2
                         after:h-20
                        after:rounded-md
                        after:bg-red-500
                        after:bottom-0
                        after:right-0
                        after:z-[-1]
                        p-5
                    ">
                        <img src="/company-img.webp" alt="why-choose-us" />
                    </div>

                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-5">

                    <div className="company-content">
                        <h3 className='text-lg md:text-xl font-bold'>Vision</h3>
                        <p>To be a global leader in innovative technology solutions, enabling businesses to embrace digital transformation and achieve sustainable growth</p>
                        <p>We believe in work with the accuracy and best quality. We want to be known as the reliable, innovative and user friendly software service provider in IT industry.</p>
                    </div>

                    <div className="company-content">
                        <h3 className='text-lg md:text-xl font-bold'>Mission</h3>
                        <p>Exceed client’s expectations by going beyond software to provide best Software solutions that transform data into knowledge, enabling them to solve their problems.</p>
                    </div>

                </div>
                <div className="" >
                    <ThemeButton
                        onButtonClick={() => {
                            router.push('/contact')
                        }}
                    >
                        Contact Us
                    </ThemeButton>
                </div>

            </div>
        </section>
    )
}

export default CompanyOverview