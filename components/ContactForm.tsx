import React from 'react'
import ThemeButton from './ui/ThemeButton'

const ContactForm = () => {
    return (
        <section className="py-10 md:py-28 px-3 md:p-0 bg-skyblue-100">
            <div className="container mx-auto space-y-10">
                <div className='text-center max-w-[600px] mx-auto space-y-6'>
                    <span>Contact Us</span>
                    <h2 className='text-2xl md:text-4xl font-bold md:font-extrabold'>Let Us Know About Your Project Idea!</h2>
                    <p>Do you have any project idea? or any proposal send it to us. We are here to make your idea real.</p>
                </div>
                <div className='flex flex-wrap md:flex-nowrap items-center'>
                    <div className='w-full flex justify-center'>
                        <img className='animate-pulse' src={'/contact-image.png'} alt='image' />
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <form className="w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="bg-gray-100 rounded-md px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="bg-gray-100 rounded-md px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col">
                                <textarea
                                    placeholder="Your Message"
                                    className="bg-gray-100 rounded-md px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none
                                    h-32           
                                    md:h-56 
                                    "
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <ThemeButton style="" >
                                Send Message
                            </ThemeButton>

                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ContactForm