import React, { useContext, useEffect, useState } from 'react'
import Header from './common-components/Header'
import Footers from './common-components/Footer'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { BlinkitContext } from './context/WebsiteContext'
 import { ToastContainer, toast } from 'react-toastify';

const Productmenu = () => {
  const [singledata, setsingledata] = useState({})
  const [selectedImage, setSelectedImage] = useState("");

  console.log("singledata", singledata);
  let { cart, setcart } = useContext(BlinkitContext)





  let pId = useParams().id

  let productdetails = () => {
    axios.get(`https://dummyjson.com/products/${pId}`)
      .then((response) => {
        setsingledata(response.data);
        setSelectedImage(response.data.thumbnail);

      })
      .catch((error) => {
        console.log(error.message);

      })
  }



  useEffect(() => { productdetails() }, [])

  let addtocart = (sdata) => {
    
    let ProductObj={
      id:sdata.id,
      image:sdata.thumbnail,
      title:sdata.title,
      price:sdata.price,
      brand:sdata.brand,
      quantity:1
    }
    let IsInCart=cart.some((v,i)=>{
      if(v.id==ProductObj.id){
        return true
      }
    })
    if(IsInCart==true){
      toast.error("This Item Is Already Added")

    }
    else{
    setcart([...cart,ProductObj])
     toast.success("Added !");}
   
  }
  




  return (
    <div>
      <ToastContainer />
      <Header />
      <div className="w-[1320px]  mx-auto flex">



        <section className="w-1/2 p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center">
          <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-lg shadow-inner">
            <img className="max-h-full object-contain" src={selectedImage} alt="Main product" />
          </div>
          <div className="flex gap-4 mt-6">
            {singledata.images?.map((v, i) => {
              return (
                <img src={v} key={i} onClick={() => setSelectedImage(v)} className="w-20 h-20 rounded-lg border border-gray-300 object-cover shadow-sm hover:scale-105 transition" alt="" />
              )
            })}
          </div>
        </section>

        <section className="w-[660px] to-good p-6 bg-gradient-to-br from-[#7F00FF] via-[#E100FF] to-[#FF416C] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] text-white flex flex-col justify-between">
          <div className="space-y-5 backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-inner border border-white/20">
            <h1 className="text-4xl font-extrabold drop-shadow-lg">{singledata.title}</h1>
            <p className="text-lg font-light leading-relaxed">{singledata.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <p><span className="font-semibold">Weight:</span> {singledata.weight || "N/A"}</p>
              <p><span className="font-semibold">Price:</span> ₹ {singledata.price}</p>
              <p><span className="font-semibold">Availability:</span> {singledata.availabilityStatus || "In stock"}</p>
              <p><span className="font-semibold">Rating:</span> ⭐ {singledata.rating}</p>
              <p><span className="font-semibold">Return:</span> {singledata.returnPolicy || "7 days return"}</p>
              <p><span className="font-semibold">Warranty:</span> {singledata.warrantyInformation || "1 year"}</p>
              <p><span className="font-semibold">Shipping:</span> {singledata.shippingInformation || "Free delivery"}</p>
            </div>
          </div>

          <div className="mt-8 text-center">

            <button
              type="button" onClick={() => addtocart(singledata)}
              className="bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-800 transition-all text-white font-bold rounded-full px-8 py-4 shadow-xl hover:shadow-2xl text-lg"
            >
              🛒 Add to Cart
            </button>

          </div>
        </section>
      </div>
      <Footers />
    </div>
  )
}

export default Productmenu


