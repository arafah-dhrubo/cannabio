import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../../../FakeDB/service.json'
const Service = () => {
    const {id}=useParams();
    const detail=Data?.find(item=>item.id==id)
    console.log(detail)
  return (
    <div className="w-5/6 my-12 mx-auto flex grid items-center grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-green-50 p-5 rounded-lg">
            <img src={detail.image} className=" md:w-3/6 md:mx-auto" alt="service"/>
        </div>
        <div>
        <h1 className='text-4xl text-green-800'>{detail.name}</h1>
        <div className='mt-2'>
        <p>{detail.desc}</p>
        </div>
        <div className='mt-2'>
        <p>{detail.sku}</p>
        <p>Ratinngs: {detail.ratings}/5</p>
        </div>
        <div className='mt-5'>
          <Link to="/" className='text-white px-3 py-2 bg-green-600'>Place Order</Link>
        </div>
        </div>
        </div>
  )
}

export default Service