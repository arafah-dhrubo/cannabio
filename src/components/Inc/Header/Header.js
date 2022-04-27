import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hook/useAuth'
import {RiBarChartHorizontalLine} from 'react-icons/ri'
const Header = () => {
    const { user, logout } = useAuth();
  
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  bg-gray-900">
                <div className="container-fluid">
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

                            {!user?.email && <li><Link className="text-white block py-2 pr-4 pl-3" to="/login">Login</Link></li>}

                            {user?.email && <li><div className="gap-2 flex items-center ml-10"><span className="text-green-400">{user?.displayName}</span><button className="text-white block py-2 pr-4 pl-3" onClick={logout}>Logout</button></div></li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header