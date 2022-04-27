import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-green-100 py-20'>
      <div className='grid w-5/6 mx-auto  grid-cols-1 md:grid-cols-2'>
        <div className='grid grid-cols-2 '>
        <div>
          <h1 className='flex items-center gap-1 mb-2 font-semibold text-lg underline underline-offset-8 decoration-wavy  decoration-green-600'> <img src="https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/Marijuana.png" className='w-1/12 mr-2' alt="" />Menu</h1>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li>
              <Link to='/'>FAQ</Link></li>
            <li>
              <Link to='/'>Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h1 className='flex items-center gap-1 mb-2 font-semibold text-lg underline underline-offset-8 decoration-wavy  decoration-green-600'> <img src="https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/Marijuana.png" className='w-1/12 mr-2' alt="" />Products</h1>
          <ul>
            <li><Link to='/'>CBD oil</Link></li>
            <li>
              <Link to='/'>CBD Candy</Link></li>
            <li>
              <Link to='/'>CBD Tablets</Link></li>
          </ul>
        </div>
        </div>
      <div>
      <form>
      <h1 className='flex items-center gap-1 mb-2 font-semibold text-lg mt-3 underline underline-offset-8 decoration-wavy  decoration-green-600'> <img src="https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/Marijuana.png" className='w-1/12 mr-2' alt="" />Subscribe to our newsletter</h1>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control  hover:rounded-br-full hover:rounded-tl-none rounded-tl-full rounded-bl-full rounded-tr-full" placeholder="Email address"/>
            <button class="bg-green-600 px-6 py-2 text-white border-none rounded-full" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Footer