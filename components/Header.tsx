import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    return (
        <header className=''>
            <div className="bg-primary-200 px-5 py-1">
                <div className="">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <ul className="flex gap-8">
                                <li>
                                    <FontAwesomeIcon icon={faFacebookF} className='h-4 w-4 text-white' />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTwitter} className='h-4 w-4 text-white' />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faInstagram} className='h-4 w-4 text-white' />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPinterest} className='h-4 w-4 text-white' />
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="flex gap-6">
                                <div className="flex gap-2 items-center">
                                    <span><FontAwesomeIcon className='h-4 w-4 text-white' icon={faPhone} /></span>
                                    <span><a className='text-sm text-white' href="tel:01720579057">01145798358</a></span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span><FontAwesomeIcon className='h-4 w-4 text-white' icon={faEnvelope} /></span>
                                    <span><a className='text-sm text-white' href="mailto:novastack@technology.com">novastack@technology.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-full bg-white px-5 py-2">
                <div className="flex justify-between items-center py-4">
                    <div className="">
                        <a className="inline-block font-bold hover:text-hover-100 hover:scale-105 transition-transform duration-200" href="/">
                            <span className='font-extrabold'>NovaStack Technologies</span>
                        </a>
                    </div>
                    <nav id="">
                        <ul className="flex items-center gap-8">
                            <li><a className="inline-block font-bold text-primary hover:text-hover-100 hover:scale-105 transition-transform duration-200" href="/" aria-current="page">HOME</a></li>
                            <li><a className="inline-block font-bold text-primary hover:text-hover-100 hover:scale-105 transition-transform duration-200" href="/about">ABOUT</a></li>
                            <li><a className="inline-block font-bold text-primary hover:text-hover-100 hover:scale-105 transition-transform duration-200" href="/contact">CONTACT</a></li>
                        </ul>
                    </nav>
                    <div className="block md:hidden">
                        <a className="inline-block font-bold hover:text-hover-100 hover:scale-105 transition-transform duration-200" href="/">
                            <span>NovaStack Technologies</span>
                        </a>
                    </div>
                    <div className="block md:hidden">
                        <span className=""></span>
                        <span className=""></span>
                        <span className=""></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header