import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeroSection>
                <div className="py-48 space-y-3">
                    <h2 className='text-2xl md:text-4xl font-bold'>Contact Us</h2>
                    <span className='block text-center'>|</span>
                    <div className="">
                        <ul className='flex items-center gap-3'>
                            <li><a className='font-bold' href="/">Home</a></li>
                            <span className='w-4 h-4 bg-primary-200'></span>
                            <li className="text-primary-100 font-bold"> Contact Us</li>
                        </ul>
                    </div>
                </div>
            </HeroSection>
            <ContactInfo />
            <ContactForm />
        </div>
    )
}

export default page