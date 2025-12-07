'use client'
import React from 'react'
import ThemeButton from './ui/ThemeButton'
import { services } from '@/constants'

const Services = () => {
    return (
        <section className="py-10 md:py-28 px-5 md:p-0">
            <div className="container mx-auto space-y-10">
                <div className='text-center max-w-[600px] mx-auto space-y-6'>
                    <span>Smart Services</span>
                    <h2 className='text-2xl md:text-4xl font-bold md:font-extrabold'>We Provide All Kinds Of Tech Solutions</h2>
                    <p>Find our most used and latest software here.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id.toString()}
                            className="flex flex-col items-center justify-center px-6 py-24 rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-white text-center space-y-5" // Added 'relative' for positioning the delete button
                        >
                            <span className="text-3xl block mb-2">{service.icon}</span>
                            <h3 className="text-xl font-semibold text-primary-200 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                            <a href='/' className='font-bold'>Know More</a>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center" >
                    <ThemeButton
                        onButtonClick={() => {
                            //call api to load more services
                        }}

                    >Load More
                    </ThemeButton>
                </div>

            </div>


        </section >
    )
}

export default Services