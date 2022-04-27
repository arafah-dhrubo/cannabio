import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hook/useAuth'
import {RiBarChartHorizontalLine} from 'react-icons/ri'
const Header = () => {
    const { user, logout } = useAuth();
  
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top w-full z-50 bg-green-900 ">
                <div className="container">
                    <div className="md:w-1/6 w-2/6">
                        <Link to="/"><img alt="logo"
                            src={"https://i.ibb.co/GczsJyh/Cannabio.png"}
                            className="w-full" />
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <RiBarChartHorizontalLine className='text-white text-3xl'/>
                    </button>
                    <div className="collapse navbar-collapse ms-auto" id="navbarNav">
                        <ul className="navbar-nav  ms-auto">
                        <li className="nav-item">
                                <Link to="/" className="block text-white py-2 pr-4 pl-3 " >Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/" className="block text-white py-2 pr-4 pl-3 " >About</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/" className="block text-white py-2 pr-4 pl-3 " >Shop</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/" className="block text-white py-2 pr-4 pl-3 " >FAQ</Link>
                            </li>

                            {!user?.displayName && <li><Link className="text-white block py-2 pr-4 pl-3 bg-green-700  transition  duration-0 hover:duration-150 ease-in-out hover:rounded-br-full hover:rounded-tl-none rounded-tl-full rounded-bl-full rounded-tr-full" to="/login">Login</Link></li>}

                            {user?.displayName && <li><div className="gap-2 flex items-center ml-10"><span className="text-green-400">{user?.displayName}</span><button className="text-white block py-2 pr-4 pl-3 hover:rounded-br-full bg-green-700 hover:rounded-tl-none rounded-tl-full rounded-bl-full rounded-tr-full" onClick={logout}>Logout</button></div></li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header