import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className="bg-green-100 mt-5">
            <div className="flex md:w-5/6 mx-auto w-11/12 justify-between items-center md:flex-row flex-col-reverse">
                <div className="text-center pb-12">
                    <h1 className="text-4xl md:text-5xl uppercase">Medical</h1>
                    <h1 className="text-5xl md:text-6xl uppercase font-semibold">Cannabies</h1>
                    <h1 className="text-3xl md:text-4xl uppercase">Dispansary</h1>
                    <p className="text-gray-800 font-semibold mt-10 mb-8">We have large collection of CBD products. Browse our products</p>
                    <Link to="/" className="text-white transition  duration-0 hover:duration-150 ease-in-out bg-green-600 px-4 py-3 hover:rounded-br-full hover:rounded-tl-none rounded-tl-full rounded-bl-full rounded-tr-full">Shop Now</Link>
                </div>
                <div className="my-16" style={{
                    backgroundImage: `url("https://i.ibb.co/3kDjcGf/curcles.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat"
                }}>
                    <img alt="" className="w-4/6 md:ml-auto " src="https://i.ibb.co/936nxM4/main-02-slider.png" />
                </div>
            </div>
        </div>
    )
}

export default Banner