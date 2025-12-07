import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContactInfo = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 justify-center items-center container mx-auto py-10 md:py-28">
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-full space-y-3">
                <div className='bg-primary-200 w-10 h-10 rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='h-4 w-4 text-white' icon={faPhone} />
                </div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-full space-y-3">
                <div className='bg-primary-200 w-10 h-10 rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='h-4 w-4 text-white' icon={faEnvelope} />
                </div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">info@example.com</p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-full space-y-3">
                <div className='bg-primary-200 w-10 h-10 rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='h-4 w-4 text-white' icon={faLocationDot} />
                </div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-600">New York, USA</p>
            </div>

        </div>
    )
}

export default ContactInfo