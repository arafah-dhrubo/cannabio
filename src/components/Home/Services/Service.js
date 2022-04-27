import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

const Service = props => {


  return (
    <div className="bg-white p-3 rounded-xl hover:shadow-xl hover:shadow-green-200">
      <Link to={`/service/${props.item.id}`} className="hover:text-green-700">
        <div className="rounded-lg bg-green-200 px-3"  height="50px" width="20px">
        <img src={props.item.image} alt="" className='object-contain h-48 w-96' />
      </div>
        <div className="mt-2 mb-2">
          <h1 className="md:text-lg font-semibold">{props.item.name}</h1>
          
          <div className='text-center'>
            <StarRatings starDimension="20px"
              starSpacing="2px" numberOfStars={props.item.rating} starRatedColor={'green'} />
          </div>
          <p className='text-center font-bold'>${props.item.price}</p>
        </div>
      <div className='flex justify-center'>
      <Link to="" className='text-white transition  duration-0 hover:duration-150 ease-in-out bg-green-600 px-3 py-2 hover:rounded-br-full hover:rounded-tl-none rounded-tl-full rounded-bl-full rounded-tr-full'>Add to Cart</Link>
        </div>
        </Link>
    </div>
  )
}

export default Service