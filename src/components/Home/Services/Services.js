import React from 'react'
import Data from "../../../FakeDB/service.json"
import Service from './Service'
const Services = () => {
    const service = Data.map(item=><Service item={item}/>)
  return (
   <div className="bg-green-50">
       <div className="w-5/6 mx-auto py-28">
          <div className="w-1/12 mx-auto">
          <img className="w-3/6 mx-auto" alt="Service" src="https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/Marijuana.png"/>
          </div>
           <div className="text-center"><p className="text-green-600 text-sm font-bold">OUR BESTSELLERS</p>
           <h1 className="font-bold text-4xl">Online Shop</h1></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">{service}</div>
   </div>
   </div>
  )
}

export default Services