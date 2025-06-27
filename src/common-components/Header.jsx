import React from 'react'
import { IoSearch } from "react-icons/io5";


const Header = () => {
    return (
        <div>
            <header className='flex max-w-[100%]'>
                <div className="w-[10%] border p-[20px]">
                    <img src="/download.svg" alt="" />
                </div>
                <div className="flex w-[90%] border">
                    <section className="w-[15%]  text-center">
                        <p className='text-[19.5px] font-bold ' >Delivery in 13 minutes</p>
                        <p className='m-0 p-0'>Jodhpur, Rajasthan, India
                        </p>
                    </section>
                    <section className=' w-[63%] '>
                        <IoSearch className='icon' /><input type="search" className='border mt-[14.5px] p-[6px] w-[95%] ms-[28px] rounded-[10px] z-[-3]' />
                    </section>
                    <section className=' p-[15px] text-[25px] w-[9%] text-center '>
                        <h3>Login</h3>
                    </section>
                    <section className='w-[13%] '>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-[15px] ms-[60px] p-[50px]">My Cart</button>
                    </section>
                </div>

            </header>
        </div>
    )
}

export default Header
