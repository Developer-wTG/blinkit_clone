import React, {  createContext, useEffect, useState } from 'react'


export const BlinkitContext=createContext()

const WebsiteContext = ({children}) => {
    const [cart,setcart]=useState(JSON.parse(localStorage.getItem("items")) ?? [])
    useEffect(()=>{
      localStorage.setItem("items",JSON.stringify(cart))
    },[cart])

      const deletebtn = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setcart(updatedCart);
    localStorage.setItem("items", JSON.stringify(updatedCart));
  };
    

    const [total,settotal]=useState(0)
  return (
   <BlinkitContext value={{cart,setcart,total,settotal,deletebtn}} >
    {children}
    </BlinkitContext>
  )
}

export default WebsiteContext

    
