import React, { useContext, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { BlinkitContext } from '../context/WebsiteContext';
import Cookies from "js-cookie"

const Header = () => {
    let { cart } = useContext(BlinkitContext)
    let mytoken = Cookies.get('blinkit-token')
    let routes = useNavigate()
    useEffect(() => {
        if (!mytoken) {
            routes("/login")
        }
    }, [])
    let logoutpage = () => {
        Cookies.remove('blinkit-token')
        routes("/login")
    }
    return (
        <header className='sticky top-0 left-0 w-full z-50 bg-white shadow-md'>
            <div className='flex items-center justify-between max-w-[1200px] mx-auto px-4 py-3'>

                {/* Logo */}
                <div className="w-[100px]">
                    <Link to={`/`}><img src="/download.svg" alt="Logo" className="w-full h-auto" /></Link>
                </div>

                {/* Location Info */}
                <div className="flex flex-col justify-center w-[200px]">
                    <p className='text-[16px] font-bold'>Delivery in 13 minutes</p>
                    <p className='text-sm text-gray-600'>Jodhpur, Rajasthan, India</p>
                </div>

                {/* Search */}
                <div className='flex items-center w-[40%] relative'>
                    <IoSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' size={20} />
                    <input
                        type="search"
                        placeholder="Search for products"
                        className='w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
                    />
                </div>

                {/* Login */}
                <div className='text-center px-4'>
                    <button className='text-green-700 font-semibold hover:underline'>
                        {mytoken ?
                            <span onClick={logoutpage} >Log Out</span>
                            :
                            <Link to={"/login"} ><span>Login</span></Link>
                        }
                    </button>
                </div>

                {/* My Cart Button */}
                <div>
                    <Link to={`/cart`} >

                        <button type="button" className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">

                            <span className="sr-only">Notifications</span>
                            Cart
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold dark:border-gray-900 text-white bg-red-500 border-1  border-white rounded-full -top-2 -end-2 ">{cart.length}</div>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
// {cart.length}
