import React from 'react'

const NewsLetterForm = () => {
    return (
        <div>
            <input type="email" placeholder='Your mail' className='px-4 py-2 bg-transparent border-b border-t border-l border-white text-sm text-white rounded-l-md focus:outline-none' />
            <button className='bg-primary-100 text-white px-4 py-2 rounded-r-md'>Subscribe</button>
        </div>
    )
}

export default NewsLetterForm