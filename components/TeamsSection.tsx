'use client'
import { teamMembers } from '@/constants'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TeamsSection = () => {
    return (
        <section className="py-10 md:py-28 px-5 md:p-0 bg-skyblue-100">
            <div className="container mx-auto space-y-10">
                <div className='text-center max-w-[600px] mx-auto space-y-6'>
                    <span>Our Team</span>
                    <h2 className='text-2xl md:text-4xl font-bold md:font-extrabold'>Meet Our Expert Team</h2>
                    <p>We are a dedicated group of professionals committed to innovation, quality, and your success.</p>
                </div>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{

                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper pt-10 pb-16"
                >
                    {teamMembers.map((member) => (
                        <SwiperSlide key={member.id}>
                            <div key={member.id} className="flex flex-col items-center text-center">

                                {/* Image */}
                                <img
                                    className="object-cover w-36 h-36 mb-4 rounded-full shadow-lg"
                                    src={member.image}
                                    alt={`Portrait of ${member.name}`}
                                />

                                {/* Name */}
                                <h3 className="text-xl font-bold text-gray-900">
                                    {member.name}
                                </h3>

                                {/* Title */}
                                <p className="text-indigo-600 font-medium">
                                    {member.title}
                                </p>

                                {/* Social Icons */}
                                <div className="mt-2 flex space-x-3 text-gray-400">

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    )
}

export default TeamsSection