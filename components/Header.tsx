'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation'



const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const pathName = usePathname();
    console.log('Pathname', pathName)
    return (
        <header className=''>
            <div className="bg-primary-200 px-5 py-1">
                <div className="">
                    <div className="flex flex-wrap justify-end sm:justify-between items-center">
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
            <div className="absolute w-full bg-primary-100 md:bg-white px-5 py-2 z-10">
                <div className="flex justify-between items-center py-4">
                    <div className="">
                        <a className="inline-block font-extrabold hover:scale-105 transition-transform duration-200 italic text-white md:text-primary-200" href="/">
                            <span className='font-extrabold'>NovaStack Technologies</span>
                        </a>
                    </div>
                    <nav className='fixed left-0 top-[121px] p-5 z-10 w-full h-screen bg-primary-200 md:h-auto md:w-auto md:bg-white md:p-0 md:static transition-all'
                        style={{
                            left: isOpenMenu ? '0%' : '-100%'
                        }}
                    >
                        <ul className="flex flex-col md:flex-row md:items-center gap-8">
                            <li><a className={`inline-block font-bold text-primary hover:text-hover-100 hover:scale-105 transition-transform duration-200 ${pathName === '/' ? 'text-white md:text-primary-200' : 'text-black'}`} href="/" aria-current="page">HOME</a></li>
                            <li><a className={` inline-block font-bold text-primary hover:text-hover-100 hover:scale-105 transition-transform duration-200 ${pathName === '/about' ? 'text-white md:text-primary-200' : 'text-black'}`} href="/about">ABOUT</a></li>
                            <li><a className={`inline-block font-bold text-primary hover:text-hover-100 hover:scale-105 transition-transform duration-200 ${pathName === '/contact' ? 'text-white md:text-primary-200' : 'text-black'}`} href="/contact">CONTACT</a></li>
                        </ul>
                    </nav>
                    <div
                        onClick={() => {
                            setIsOpenMenu(prevState => !prevState)
                        }}
                        className="block md:hidden space-y-1">
                        <span className={`block w-8 h-1 bg-white rounded-md transition-all ${isOpenMenu ? "translate-y-2 rotate-45" : ''}`}></span>
                        <span className={`block w-8 h-1 bg-white rounded-md transition-all ${isOpenMenu ? "-translate-x-20 opacity-0" : ''}`}></span>
                        <span className={`block w-8 h-1 bg-white rounded-md transition-all ${isOpenMenu ? "-translate-y-2 -rotate-45" : ''}`}></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header