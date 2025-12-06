import { faFacebookF, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NewsLetterFomr from './ui/NewsLetterForm'
import NewsLetterForm from './ui/NewsLetterForm'

const Footer = () => {
    return (
        <footer className='bg-primary-200 pt-16'>
            <div className="container mx-auto px-5 py-10 text-white">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="md:col-span-2">
                        <div className="space-y-5">
                            <a className="inline-block font-bold hover:text-hover-100 hover:scale-105 transition-transform duration-200" href="/">
                                <span className='font-extrabold text-2xl'>NovaStack Technologies</span>
                            </a>
                            <p>Providing the simplest solution for the most complex problem.</p>
                            <h4 className="text-2xl font-bold">Join Newsletter</h4>
                            <NewsLetterForm />
                            <ul className="flex gap-4">
                                <li className='p-2 bg-primary-100 rounded-md'>
                                    <FontAwesomeIcon icon={faFacebookF} className='h-4 w-4 text-white' />
                                </li>
                                <li className='p-2 bg-primary-100 rounded-md'>
                                    <FontAwesomeIcon icon={faTwitter} className='h-4 w-4 text-white' />
                                </li>
                                <li className='p-2 bg-primary-100 rounded-md'>
                                    <FontAwesomeIcon icon={faInstagram} className='h-4 w-4 text-white' />
                                </li>
                                <li className='p-2 bg-primary-100 rounded-md'>
                                    <FontAwesomeIcon icon={faPinterest} className='h-4 w-4 text-white' />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <div className="space-y-5">
                            <h3 className='text-2xl font-bold'>Our Service</h3>
                            <ul className="space-y-3">
                                <li><a href="/service1">Service 1</a></li>
                                <li><a href="/service1">Service 2</a></li>
                                <li><a href="/service1">Service 3</a></li>
                                <li><a href="/service1">Service 4</a></li>
                                <li><a href="/service1">Service 5</a></li>
                                <li><a href="/service1">Service 6</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <div className="space-y-5">
                            <h3 className='text-2xl font-bold'>Quick Links</h3>
                            <ul className="space-y-3">
                                <li><a href="/service1">Home</a></li>
                                <li><a href="/service1">About</a></li>
                                <li><a href="/service1">Contact</a></li>
                                <li><a href="/service1">Career</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <div className="space-y-5">
                            <h3 className='text-2xl font-bold'>Contacts</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a className='flex items-start gap-3' href="mailto:novastack@technology.com">
                                        <span className='p-2 bg-primary-100 rounded-md'> <FontAwesomeIcon className='h-4 w-4 text-white' icon={faEnvelope} /></span>
                                        <span>novastack@technology.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='flex items-start gap-3' href="tel:01145798358">
                                        <span className='p-2 bg-primary-100 rounded-md'> <FontAwesomeIcon className='h-4 w-4 text-white' icon={faPhone} /></span>
                                        <span> 01145798358</span>
                                    </a>
                                </li>
                                <li>
                                    <a className='flex items-start gap-3' href="https://maps.app.goo.gl/9nEucGDiMbrpdMFr8" target="_blank">
                                        <span className='p-2 bg-primary-100 rounded-md'><FontAwesomeIcon className='h-4 w-4 text-white' icon={faLocationDot} /></span>
                                        <span>215- 2481 kaladar Avenue Ottawa, ON K1V 8B9, Canada.</span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 border-t border-white py-5">
                <p className='text-center text-white'>
                    <span> © 2025 </span>
                    <a href="/"> NovaStack Technologies </a>
                    <span> All Rights Reserved </span>
                </p>
            </div>
        </footer >
    )
}

export default Footer