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
                        <h2 className='text-2xl md:text-4xl font-bold'>Innovative Software Solution Provider Allover Bangladesh</h2>
                        <h3 className='text-lg md:text-xl font-bold'>Company Overview</h3>
                        <p><a href="/">NovaStack Technologies</a> is one of the best software company in Bangladesh. Dynamics Software Ltd provides all type of software &amp; solutions. Our main services are Desktop software solution, Web applications (Laravel, WordPress, .NET), Mobile applications. Dynamic Software Ltd established on 2012.</p>
                        <p>We have more than 10 years of experience and have more than 500 happy clients. We have experienced team with more than 10 years experienced software engineers and junior software engineers. Our team consists of experienced software engineers, business analyst, support engineers, testers etc. We believe in quality work rather than quantity.</p>
                        <p>Dynamic Software Ltd offers comprehensive and integrated software solutions suite with Pharmacy management system, Hospital management system, POS, ERP, VAT, Accounting, HR, E-commerce and custom mobile app. And all the software solutions fully developed on the latest technology for on-premise or on cloud installation.</p>
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
                        <img src="https://www.dynamicsoftwareltd.com/wp-content/uploads/2022/12/company-img.png" alt="why-choose-us" />
                    </div>

                </div>
                <div className="flex flex-wrap md:flex-nowrap">

                    <div className="company-content">
                        <h3 className='text-lg md:text-xl font-bold'>Vision</h3>
                        <p>Our Vision is to be a leading Software Solution company in IT sector and progress in our current position in market. We know that Customer’s growth is our growth, so we commit our customers to help in achieving their business goals.</p>
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