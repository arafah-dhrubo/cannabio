import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
   <div className='bg-green-900 py-28'>
      <div className="grid text-white grid-cols-1 md:grid-cols-2 mx-auto w-5/6 flex items-center gap-5">
      <div>
        <img alt="banner" src="http://calmes.like-themes.com/wp-content/uploads/2021/01/about-plate.png" />
      </div>
      <div>
        <div className='text-center'>
          <div className="w-1/12 mx-auto">
            <img className="w-3/6 mx-auto" alt="logo" src="https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/Marijuana.png" />
          </div>
          <p className="font-bold text-sm">ABOUT US</p>
          <h1 className="text-3xl font-bold underline underline-offset-8 decoration-wavy  decoration-green-300">Welcome to Cannabio</h1>
        </div>
        <p className="text-justify mt-4 mb-8">Our store uses only certified and high quality product. We are carefully managing each stage of manufacturing process, formulation and ingredients. We have accurate testing to ensure our products have the highest levels of quality, potency and purity. Our CBD’s products give you safe access to the full potential of cannabinoids anytime.</p>
        <Link to="/contact" className="text-white transition text-center duration-0 hover:duration-150 ease-in-out bg-green-600 px-4 py-3 hover:rounded-br-full hover:rounded-tl-none rounded-tl-full rounded-bl-full rounded-tr-full">Contact Us</Link>
      </div>

    </div>
   </div>
  )
}

export default About