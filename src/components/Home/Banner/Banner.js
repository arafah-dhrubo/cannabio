import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className="bg-green-100">
            <div className="flex md:w-5/6 mx-auto w-11/12 justify-between items-center md:flex-row flex-col-reverse">
                <div className="text-center pb-12">
                    <h1 className="text-4xl md:text-5xl uppercase">Medical</h1>
                    <h1 className="text-5xl md:text-6xl uppercase font-semibold">Cannabies</h1>
                    <h1 className="text-3xl md:text-4xl uppercase">Dispansary</h1>
                    <p className="text-gray-800 font-semibold mt-10 mb-8">We have large collection of CBD products. Browse our products</p>
                    <Link to="/" className="px-6 py-3 rounded-full bg-green-600 text-white">Shop Now</Link>
                </div>
                <div className="my-16" style={{
                    backgroundImage: `url("https://i.ibb.co/3kDjcGf/curcles.png")`, backgroundSize: "contain", backgroundRepeat: "no-repeat"
                }}>
                    <img alt="" className="w-4/6 md:ml-auto " src="https://t7m4d5f5.stackpathcdn.com/wp-content/uploads/2021/05/store1@1920x-1536x1430.png" />
                </div>
            </div>
        </div>
    )
}

export default Banner