import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='my-28 md:w-3/6 mx-auto text-center'>
            <h1 className='text-5xl font-semibold'>Ooops. <span className='text-green-600'>Page Not Found!</span></h1>
            <p className='mt-3 w-5/6 mx-auto text-2xl mb-6'>The page you are looking for doesnt exist.
                Looks like you are in the wrong place.
                Let us guide you back!
            </p>
            <Link to="/" className='hover:rounded-br-full hover:rounded-tl-none rounded-tl-full rounded-bl-full rounded-tr-full bg-green-600 text-white px-4 py-3'>Go to homepage</Link>
           
        </div>
    )
}

export default NotFound