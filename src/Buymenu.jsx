import React, { useCallback, useEffect, useState } from 'react';
import { FcClock } from 'react-icons/fc';
import Header from './common-components/Header';
import Footers from './common-components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Buymenu = () => {

  let [pdata, setdata] = useState([])
  const [updataUrl,setupdataUrl]=useState("")


  let displaydata = () => {
    let Api;
    if(updataUrl==""){
      Api="https://dummyjson.com/products?limit=200"
    }
    else{
      Api=updataUrl
    }

  
    axios.get(Api)
      .then((response) => {
        setdata(response.data.products);

      })
      .catch((error) => {
        console.log(error.message);

      })
  }
  // showcategory
  const [storecategory, setstorecategory] = useState([])


  let showcategory = () => {
    axios.get("https://dummyjson.com/products/categories")
      .then((response) => {
        setstorecategory(response.data);

      })
      .catch((error) => {
        console.log(error.message);

      })
  }





  useEffect(() => { displaydata()
      }, [updataUrl]
  )
  useEffect(()=>{showcategory()},[])


  //get url
  let getUrl=useCallback((cat)=>{
    setupdataUrl(cat)
  },[])


  return (
    <div className="max-w-[1320px] mx-auto border h-screen">
      <Header />
      <section className='font-medium text-[17px] p-4'>Buy Snacks & More Online</section>
      <section className='flex border h-[calc(100%-48px)]'>

        {/* Categories Sidebar */}
        <aside className='w-[200px] border-r overflow-y-auto p-2'>
          <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
           {storecategory.length > 0 ?
            storecategory.map((v, i) => { return (<Category key={i} items={v} getUrl={getUrl} />) })
            :
            (
              <p className="col-span-6 text-center">Please wait...</p>
            )}
          </ul>
        </aside>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-6 gap-4">
            {pdata.length > 0 ? (
              pdata.map((v, i) => <Card key={i} v={v} />)
            ) : (
              <p className="col-span-6 text-center">Please wait...</p>
            )}
          </div>
        </div>



      </section>
      <Footers />
    </div>
  );
}

export default Buymenu;

const Card = ({ v }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition">
      <Link to={`/productmenu/${v.id}`}><img src={v.thumbnail} alt={v.title} className="w-full  object-cover rounded-t" /></Link>
      <div className="p-2">
        <span className="flex items-center text-xs text-gray-500">
          <FcClock className="mr-1" />
          30 mins
        </span>
        <h3 className="text-sm font-semibold mt-1">{v.title}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{v.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-semibold">₹{v.price}</span>
          <Link to={`/cart`} ><button className="text-green-700 border border-green-700 rounded px-3 py-1 text-xs hover:bg-green-700 hover:text-white">
            Add
          </button></Link>
        </div>
      </div>
    </div>
  );
};

const Category = ({ items,getUrl }) => {
  


  return (<li onClick={()=>{getUrl(items.url)}} class="list-none w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">{items.name}</li>)
}



