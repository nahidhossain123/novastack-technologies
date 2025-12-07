'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import ThemeButton from './ui/ThemeButton'
import { FormData, FormErrors } from '@/types';

const ContactForm = () => {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({
        name: "",
        email: "",
        message: "",
    });

    // Handle input changes
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Validate form
    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!form.message.trim()) {
            newErrors.message = "Message is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Submit handler
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            console.log("Form Data:", form);

            setForm({ name: "", email: "", message: "" });
        }
    };

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
                            <div className='w-full space-y-2'>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full bg-gray-100 rounded-md px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.name && (<p className='text-red-500 text-sm italic ml-3'>{errors.name}</p>)}
                            </div>

                            <div className='w-full space-y-2'>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full bg-gray-100 rounded-md px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.email && (<p className='text-red-500 text-sm italic ml-3'>{errors.email}</p>)}
                            </div>

                            <div className='w-full space-y-2'>
                                <textarea
                                    placeholder="Your Message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full bg-gray-100 rounded-md px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none
                                    h-32           
                                    md:h-56 
                                    "
                                ></textarea>
                                {errors.message && (<p className='text-red-500 text-sm itali ml-3'>{errors.message}</p>)}
                            </div>

                            {/* Submit Button */}
                            <ThemeButton style="" onButtonClick={handleSubmit} >
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