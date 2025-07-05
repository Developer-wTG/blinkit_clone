import React, { useContext, useEffect, useState } from 'react'
import Header from './common-components/Header';
import Footers from './common-components/Footer';
import { BlinkitContext } from './context/WebsiteContext';

const Cart = () => {

  let { cart, setcart,total,settotal } = useContext(BlinkitContext)
    let sum=0;
  useEffect(()=>{
    cart.forEach((v)=>{
      sum+=(v.quantity)*(v.price)
      
    })
    settotal(sum)
  },[cart])
  

  return (

    <div className="container mx-auto mt-10">
      <Header/>
      
    <div className=" grid grid-cols-[70%_auto] shadow-md my-10">
      <div className="">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">3 Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
        </div>
         {cart.length == 0
          ?
          "Non item is added to cart"
          :
          (cart.length > 0) ?
            cart.map((v, i) => {
              return (<Cartitem v={v} key={i}/> )
                
            })
            :
            "Please wait"
        }

      </div>

      

      <div id="summary" className=" px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between py-5">
          <span>Total Amount</span> <span>{(total).toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-5">
          <span>GST</span> <span>18%</span>
        </div>

        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{((total*18/100)+(total)).toFixed(2)}</span>
          </div>
          <button  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
    <Footers/>
  </div>
  )
}

export default Cart
  

let Cartitem=({v})=>{
  let { cart, setcart,deletebtn } = useContext(BlinkitContext)
  const [counter,setcounter]=useState(v.quantity || 1)

  useEffect(()=>{
let newdata=cart.filter((pro,i)=>{
  if(pro.id==v.id){
    return pro.quantity=counter
  }
  return v
})
setcart(newdata)
  },[counter])
return(
   <div className=" bg-white px-10 py-10">
        
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5">
            <div className="w-20">
              <img className="h-24" src={v.image} alt=""/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{v.title}</span>
              <span className="text-red-500 text-xs">{v.brand}</span>
              <span className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={()=>deletebtn(v.id)} >Remove</span>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
          <button onClick={()=>  counter>1 ?  setcounter(counter-1) :""} >-</button>
           

            <input className="mx-2 border text-center w-8" type="text" value={counter}/>
            <button onClick={()=>counter<=9 ?  setcounter(counter+1) :""}>+</button>

            
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">{v.price}</span>
          <span className="text-center w-1/5 font-semibold text-sm">{((v.price)*(v.quantity)).toFixed(2)}</span>
        </div>

        
      </div>
)
  
  
  
 
}
 