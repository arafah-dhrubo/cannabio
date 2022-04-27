import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

const Service = props => {


  return (
    <div className="bg-white p-3 rounded-xl">
      <Link to={`/service/${props.item.id}`}><div className="rounded-lg bg-green-200 px-5">
        <img src={props.item.image} alt="" />
      </div>
        <div className="mt-2 mb-2">
          <h1 className="text-lg font-semibold">{props.item.name}</h1>
          <div className='text-center'>
            <StarRatings starDimension="20px"
              starSpacing="2px" numberOfStars={props.item.rating} starRatedColor={'green'} />
          </div>
        </div>
      <div className='flex justify-center'>
      <Link to="" className='text-white bg-green-600 px-3 py-2 rounded'>Add to Cart</Link>
        </div>
        </Link>
    </div>
  )
}

export default Service