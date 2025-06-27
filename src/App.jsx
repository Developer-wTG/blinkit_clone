

import { useState } from 'react'
import './App.css'
import React from "react";
import Header from './common-components/Header'
import Footers from './common-components/Footer';




  
function App() {
  const [count, setcount] = useState(0)
  
  
  return (
    <>
      <Header />
      <div className="max-w-[1320px] mx-auto">
        {/* Images section start */}
        <section className=''>
          <figure><img src="/Group-33704.jpg" alt="" /></figure>

          <figure className='flex m-0 p-0'><img src="/pharmacy-WEB.jpg" alt="" className='w-[26.5%] me-[10px] mt-[10px]' />
            <img src="/Pet-Care_WEB.jpg" alt="" className='w-[26.5%] me-[10px] mt-[10px]' />
            <img src="/babycare-WEB.jpg" alt="" className='w-[26.5%] me-[10px] mt-[10px]' />
          </figure>
          <figure className='flex'>
            <img src="/paan-corner_web.png" className='w-[10%]' alt="" />
            <img src="/Slice-2_10.png" className='w-[10%]' alt="" />
            <img src="/Slice-3_9.png" className='w-[10%]' alt="" />
            <img src="/Slice-4_9.png" className='w-[10%]' alt="" />
            <img src="/Slice-5_4.png" className='w-[10%]' alt="" />
            <img src="/Slice-6_5.png" className='w-[10%]' alt="" />
            <img src="/Slice-7_3.png" className='w-[10%]' alt="" />
            <img src="/Slice-8_4.png" className='w-[10%]' alt="" />
            <img src="/Slice-9_3.png" className='w-[10%]' alt="" />
            <img src="/Slice-10.png" className='w-[10%]' alt="" />
          </figure>
          <figure className='flex'>
            <img src="/Slice-11.png" className=' w-[10%]' alt="" />
            <img src="/Slice-12.png" className=' w-[10%]' alt="" />
            <img src="/Slice-13.png" className=' w-[10%]' alt="" />
            <img src="/Slice-14.png" className=' w-[10%]' alt="" />
            <img src="/Slice-15.png" className=' w-[10%]' alt="" />
            <img src="/Slice-16.png" className=' w-[10%]' alt="" />
            <img src="/Slice-17.png" className=' w-[10%]' alt="" />
            <img src="/Slice-18.png" className=' w-[10%]' alt="" />
            <img src="/Slice-19.png" className=' w-[10%]' alt="" />
            <img src="/Slice-20.png" className=' w-[10%]' alt="" />


          </figure>

        </section>
        {/* Images section end */}
        {/* Dairy, Bread & Eggs start*/}
        <section className='border'>
          

        </section>
        {/* Dairy, Bread & Eggs end*/}
      </div>
      <Footers />
    </>
  )
}

export default App