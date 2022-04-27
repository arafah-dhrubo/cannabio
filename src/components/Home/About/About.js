import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-5/6 flex items-center gap-5 my-28">
        <div>
            <img alt="banner" src="https://t7m4d5f5.stackpathcdn.com/wp-content/uploads/2021/05/farm5@1920x-1536x1103.png"/>
            </div>
        <div>
            <p className="text-green-700 font-bold text-sm">ABOUT US</p>
            <h1 className="text-3xl font-bold">Welcome to Cannabio</h1>
            <p className="text-justify mt-4 mb-8">Our store uses only certified and high quality product. We are carefully managing each stage of manufacturing process, formulation and ingredients. We have accurate testing to ensure our products have the highest levels of quality, potency and purity. Our CBD’s products give you safe access to the full potential of cannabinoids anytime.</p>
            <Link to="/contact" className="text-white bg-green-600 px-4 py-3 rounded-full">Contact Us</Link>
        </div>
    </div>
  )
}

export default About