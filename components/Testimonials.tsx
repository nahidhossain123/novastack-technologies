'use client'
import React from 'react'
import ThemeButton from './ui/ThemeButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonials } from '@/constants'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
    return (
        <section className="py-10 md:py-28 px-5 md:p-0 bg-skyblue-100">
            <div className="container mx-auto space-y-10">
                <div className='text-center max-w-[600px] mx-auto space-y-6'>
                    <span>Testimonials</span>
                    <h2 className='text-2xl md:text-4xl font-bold md:font-extrabold'>What Our Respected Client’s Say</h2>
                    <p>You should not believe on our words explore our respected clients reviews here.</p>
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
                    }}
                    className="mySwiper pt-10 pb-16"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="flex flex-col justify-center items-center h-full bg-white rounded-md p-10 relative my-10 text-center">
                                <div className='absolute -top-5 border border-primary-200 rounded-md'>
                                    <img
                                        className="h-12 w-12 rounded-md object-cover"
                                        src={testimonial.avatar}
                                        alt={`Avatar of ${testimonial.name}`}
                                    />
                                </div>
                                <p className="flex-grow text-lg italic text-gray-700 leading-relaxed mb-6">
                                    "{testimonial.quote}"
                                </p>

                                <div>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-primary-100">
                                        {testimonial.title}
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    )
}

export default Testimonials