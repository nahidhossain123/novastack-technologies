import React from 'react'
import ThemeButton from './ui/ThemeButton'
import { services } from '@/constants/services'

const Services = () => {
    return (
        <section className="py-28">
            <div className="container mx-auto space-y-10">
                <div className='text-center max-w-[600px] mx-auto space-y-6'>
                    <span>Smart Services</span>
                    <h2 className='text-2xl md:text-4xl font-bold md:font-extrabold'>We Provide All Kinds Of Tech Solutions</h2>
                    <p>Find our most used and latest software here.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="p-6 border rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-white relative" // Added 'relative' for positioning the delete button
                        >
                            <span className="text-3xl block mb-2">{service.icon}</span>
                            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="alm-btn-wrap" >
                    <ThemeButton
                        style={''}

                    >Load More
                    </ThemeButton>
                </div>

            </div>


        </section >
    )
}

export default Services