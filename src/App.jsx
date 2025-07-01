
import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import Header from './common-components/Header';
import Footers from './common-components/Footer';
import { FcClock } from "react-icons/fc";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ✅ Reusable ProductSlider Component
const ProductSlider = ({ products, title }) => {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({
        left: dir === "left" ? -width : width,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const scrollWidth = sliderRef.current.scrollWidth;
      const currentScroll = sliderRef.current.scrollLeft;
      const maxScroll = scrollWidth - sliderRef.current.offsetWidth;

      if (currentScroll >= maxScroll) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto my-6">
      <h2 className="text-xl font-semibold mb-3 px-6">{title}</h2>

      {/* Arrows */}
      <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100">
        <ChevronLeft size={24} />
      </button>
      <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100">
        <ChevronRight size={24} />
      </button>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-4 scroll-smooth px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, i) => (
          <div key={i} className="min-w-[200px] max-w-[200px] bg-white rounded-lg shadow-sm border flex-shrink-0 hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-t" />
            <div className="p-2">
              <span className="flex items-center text-xs text-gray-500">
                <FcClock className="mr-1" />
                {product.deliveryTime}
              </span>
              <h3 className="text-sm font-semibold mt-1">{product.name}</h3>
              <p className="text-xs text-gray-600">{product.size}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm font-semibold">₹{product.price}</span>
                <button className="text-green-700 border border-green-700 rounded px-3 py-1 text-xs hover:bg-green-700 hover:text-white">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Sample 7 Product Groups
const products1 = [{
  name: "Milk",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
  deliveryTime: "13 mins",
  size: "500 ml",
  price: 28},
  {name: "Amul Masti Cup Curd",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603",
  deliveryTime: "13 mins",
  size: "200g",
  price: 24},
  {name: "Vijay Stone Ground Wheat Brown Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de613aee-7992-4848-8644-52792012ab56.jpg?ts=1726484663",
  deliveryTime: "13 mins",
  size: "400g",
  price: 48},
  {name: "Vijay Premium White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/df49cda4-0b40-40d1-a05a-35f9f5b8175a.jpg?ts=1726485653",
  deliveryTime: "13 mins",
  size: "600g",
  price:55 },
  {name: "Amul Salted Butter",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
  deliveryTime: "13 mins",
  size: "100g",
  price:62 },
  {name: "Vijay Soft White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/42dde89d-f708-4988-9ee7-a5dd782ad5ec.jpg?ts=1726484641",
  deliveryTime: "13 mins",
  size: "400g",
  price:40 },
  {name: "Egg First Protein White Eggs",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/80dc07f4-442e-4605-ab01-1996582b4d1f.jpg?ts=1726473647",
  deliveryTime: "13 mins",
  size: "6 pieces",
  price:60 },
  {name: "Vijay Sliced Wheat Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/58e328c0-bf9c-4871-89f4-43966ac9a286.jpg?ts=1726484656",
  deliveryTime: "13 mins",
  size: "200g",
  price: 22},
  {name: "Vijay Jumbo White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7451feb4-7824-4a87-8ae4-af81eb36e490.jpg?ts=1734600315",
  deliveryTime: "13 mins",
  size: "500g",
  price:48 },
  {name: "Amul Blend Diced Cheese",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ecf2f055-233c-450f-a0ef-5da6070b60c3.jpg?ts=1706182144",
  deliveryTime: "13 mins",
  size: "200g",
  price: 125},
  {name: "Amul Pure Milk Cheese Slices",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
  deliveryTime: "13 mins",
  size: "200g",
  price:145 },
  {name: "Vijay Pav Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/76575a61-7b42-49bc-95a0-675c17578346.jpg?ts=1726484605",
  deliveryTime: "13 mins",
  size: "1 pack (9 pieces)",
  price:38 },

 
];

const products2 = [{
  name: "Milk",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
  deliveryTime: "13 mins",
  size: "500 ml",
  price: 28},
  {name: "Amul Masti Cup Curd",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603",
  deliveryTime: "13 mins",
  size: "200g",
  price: 24},
  {name: "Vijay Stone Ground Wheat Brown Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de613aee-7992-4848-8644-52792012ab56.jpg?ts=1726484663",
  deliveryTime: "13 mins",
  size: "400g",
  price: 48},
  {name: "Vijay Premium White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/df49cda4-0b40-40d1-a05a-35f9f5b8175a.jpg?ts=1726485653",
  deliveryTime: "13 mins",
  size: "600g",
  price:55 },
  {name: "Amul Salted Butter",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
  deliveryTime: "13 mins",
  size: "100g",
  price:62 },
  {name: "Vijay Soft White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/42dde89d-f708-4988-9ee7-a5dd782ad5ec.jpg?ts=1726484641",
  deliveryTime: "13 mins",
  size: "400g",
  price:40 },
  {name: "Egg First Protein White Eggs",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/80dc07f4-442e-4605-ab01-1996582b4d1f.jpg?ts=1726473647",
  deliveryTime: "13 mins",
  size: "6 pieces",
  price:60 },
  {name: "Vijay Sliced Wheat Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/58e328c0-bf9c-4871-89f4-43966ac9a286.jpg?ts=1726484656",
  deliveryTime: "13 mins",
  size: "200g",
  price: 22},
  {name: "Vijay Jumbo White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7451feb4-7824-4a87-8ae4-af81eb36e490.jpg?ts=1734600315",
  deliveryTime: "13 mins",
  size: "500g",
  price:48 },
  {name: "Amul Blend Diced Cheese",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ecf2f055-233c-450f-a0ef-5da6070b60c3.jpg?ts=1706182144",
  deliveryTime: "13 mins",
  size: "200g",
  price: 125},
  {name: "Amul Pure Milk Cheese Slices",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
  deliveryTime: "13 mins",
  size: "200g",
  price:145 },
  {name: "Vijay Pav Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/76575a61-7b42-49bc-95a0-675c17578346.jpg?ts=1726484605",
  deliveryTime: "13 mins",
  size: "1 pack (9 pieces)",
  price:38 },
];

const products3 = [{
  name: "Milk",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
  deliveryTime: "13 mins",
  size: "500 ml",
  price: 28},
  {name: "Amul Masti Cup Curd",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603",
  deliveryTime: "13 mins",
  size: "200g",
  price: 24},
  {name: "Vijay Stone Ground Wheat Brown Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de613aee-7992-4848-8644-52792012ab56.jpg?ts=1726484663",
  deliveryTime: "13 mins",
  size: "400g",
  price: 48},
  {name: "Vijay Premium White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/df49cda4-0b40-40d1-a05a-35f9f5b8175a.jpg?ts=1726485653",
  deliveryTime: "13 mins",
  size: "600g",
  price:55 },
  {name: "Amul Salted Butter",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
  deliveryTime: "13 mins",
  size: "100g",
  price:62 },
  {name: "Vijay Soft White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/42dde89d-f708-4988-9ee7-a5dd782ad5ec.jpg?ts=1726484641",
  deliveryTime: "13 mins",
  size: "400g",
  price:40 },
  {name: "Egg First Protein White Eggs",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/80dc07f4-442e-4605-ab01-1996582b4d1f.jpg?ts=1726473647",
  deliveryTime: "13 mins",
  size: "6 pieces",
  price:60 },
  {name: "Vijay Sliced Wheat Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/58e328c0-bf9c-4871-89f4-43966ac9a286.jpg?ts=1726484656",
  deliveryTime: "13 mins",
  size: "200g",
  price: 22},
  {name: "Vijay Jumbo White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7451feb4-7824-4a87-8ae4-af81eb36e490.jpg?ts=1734600315",
  deliveryTime: "13 mins",
  size: "500g",
  price:48 },
  {name: "Amul Blend Diced Cheese",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ecf2f055-233c-450f-a0ef-5da6070b60c3.jpg?ts=1706182144",
  deliveryTime: "13 mins",
  size: "200g",
  price: 125},
  {name: "Amul Pure Milk Cheese Slices",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
  deliveryTime: "13 mins",
  size: "200g",
  price:145 },
  {name: "Vijay Pav Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/76575a61-7b42-49bc-95a0-675c17578346.jpg?ts=1726484605",
  deliveryTime: "13 mins",
  size: "1 pack (9 pieces)",
  price:38 },
];

const products4 = [{
  name: "Milk",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
  deliveryTime: "13 mins",
  size: "500 ml",
  price: 28},
  {name: "Amul Masti Cup Curd",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603",
  deliveryTime: "13 mins",
  size: "200g",
  price: 24},
  {name: "Vijay Stone Ground Wheat Brown Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de613aee-7992-4848-8644-52792012ab56.jpg?ts=1726484663",
  deliveryTime: "13 mins",
  size: "400g",
  price: 48},
  {name: "Vijay Premium White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/df49cda4-0b40-40d1-a05a-35f9f5b8175a.jpg?ts=1726485653",
  deliveryTime: "13 mins",
  size: "600g",
  price:55 },
  {name: "Amul Salted Butter",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
  deliveryTime: "13 mins",
  size: "100g",
  price:62 },
  {name: "Vijay Soft White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/42dde89d-f708-4988-9ee7-a5dd782ad5ec.jpg?ts=1726484641",
  deliveryTime: "13 mins",
  size: "400g",
  price:40 },
  {name: "Egg First Protein White Eggs",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/80dc07f4-442e-4605-ab01-1996582b4d1f.jpg?ts=1726473647",
  deliveryTime: "13 mins",
  size: "6 pieces",
  price:60 },
  {name: "Vijay Sliced Wheat Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/58e328c0-bf9c-4871-89f4-43966ac9a286.jpg?ts=1726484656",
  deliveryTime: "13 mins",
  size: "200g",
  price: 22},
  {name: "Vijay Jumbo White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7451feb4-7824-4a87-8ae4-af81eb36e490.jpg?ts=1734600315",
  deliveryTime: "13 mins",
  size: "500g",
  price:48 },
  {name: "Amul Blend Diced Cheese",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ecf2f055-233c-450f-a0ef-5da6070b60c3.jpg?ts=1706182144",
  deliveryTime: "13 mins",
  size: "200g",
  price: 125},
  {name: "Amul Pure Milk Cheese Slices",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
  deliveryTime: "13 mins",
  size: "200g",
  price:145 },
  {name: "Vijay Pav Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/76575a61-7b42-49bc-95a0-675c17578346.jpg?ts=1726484605",
  deliveryTime: "13 mins",
  size: "1 pack (9 pieces)",
  price:38 },
];

const products5 = [{
  name: "Milk",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
  deliveryTime: "13 mins",
  size: "500 ml",
  price: 28},
  {name: "Amul Masti Cup Curd",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603",
  deliveryTime: "13 mins",
  size: "200g",
  price: 24},
  {name: "Vijay Stone Ground Wheat Brown Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de613aee-7992-4848-8644-52792012ab56.jpg?ts=1726484663",
  deliveryTime: "13 mins",
  size: "400g",
  price: 48},
  {name: "Vijay Premium White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/df49cda4-0b40-40d1-a05a-35f9f5b8175a.jpg?ts=1726485653",
  deliveryTime: "13 mins",
  size: "600g",
  price:55 },
  {name: "Amul Salted Butter",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
  deliveryTime: "13 mins",
  size: "100g",
  price:62 },
  {name: "Vijay Soft White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/42dde89d-f708-4988-9ee7-a5dd782ad5ec.jpg?ts=1726484641",
  deliveryTime: "13 mins",
  size: "400g",
  price:40 },
  {name: "Egg First Protein White Eggs",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/80dc07f4-442e-4605-ab01-1996582b4d1f.jpg?ts=1726473647",
  deliveryTime: "13 mins",
  size: "6 pieces",
  price:60 },
  {name: "Vijay Sliced Wheat Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/58e328c0-bf9c-4871-89f4-43966ac9a286.jpg?ts=1726484656",
  deliveryTime: "13 mins",
  size: "200g",
  price: 22},
  {name: "Vijay Jumbo White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7451feb4-7824-4a87-8ae4-af81eb36e490.jpg?ts=1734600315",
  deliveryTime: "13 mins",
  size: "500g",
  price:48 },
  {name: "Amul Blend Diced Cheese",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ecf2f055-233c-450f-a0ef-5da6070b60c3.jpg?ts=1706182144",
  deliveryTime: "13 mins",
  size: "200g",
  price: 125},
  {name: "Amul Pure Milk Cheese Slices",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
  deliveryTime: "13 mins",
  size: "200g",
  price:145 },
  {name: "Vijay Pav Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/76575a61-7b42-49bc-95a0-675c17578346.jpg?ts=1726484605",
  deliveryTime: "13 mins",
  size: "1 pack (9 pieces)",
  price:38 },
];

const products6 = [{
  name: "Milk",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
  deliveryTime: "13 mins",
  size: "500 ml",
  price: 28},
  {name: "Amul Masti Cup Curd",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603",
  deliveryTime: "13 mins",
  size: "200g",
  price: 24},
  {name: "Vijay Stone Ground Wheat Brown Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de613aee-7992-4848-8644-52792012ab56.jpg?ts=1726484663",
  deliveryTime: "13 mins",
  size: "400g",
  price: 48},
  {name: "Vijay Premium White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/df49cda4-0b40-40d1-a05a-35f9f5b8175a.jpg?ts=1726485653",
  deliveryTime: "13 mins",
  size: "600g",
  price:55 },
  {name: "Amul Salted Butter",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
  deliveryTime: "13 mins",
  size: "100g",
  price:62 },
  {name: "Vijay Soft White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/42dde89d-f708-4988-9ee7-a5dd782ad5ec.jpg?ts=1726484641",
  deliveryTime: "13 mins",
  size: "400g",
  price:40 },
  {name: "Egg First Protein White Eggs",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/80dc07f4-442e-4605-ab01-1996582b4d1f.jpg?ts=1726473647",
  deliveryTime: "13 mins",
  size: "6 pieces",
  price:60 },
  {name: "Vijay Sliced Wheat Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/58e328c0-bf9c-4871-89f4-43966ac9a286.jpg?ts=1726484656",
  deliveryTime: "13 mins",
  size: "200g",
  price: 22},
  {name: "Vijay Jumbo White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7451feb4-7824-4a87-8ae4-af81eb36e490.jpg?ts=1734600315",
  deliveryTime: "13 mins",
  size: "500g",
  price:48 },
  {name: "Amul Blend Diced Cheese",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ecf2f055-233c-450f-a0ef-5da6070b60c3.jpg?ts=1706182144",
  deliveryTime: "13 mins",
  size: "200g",
  price: 125},
  {name: "Amul Pure Milk Cheese Slices",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
  deliveryTime: "13 mins",
  size: "200g",
  price:145 },
  {name: "Vijay Pav Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/76575a61-7b42-49bc-95a0-675c17578346.jpg?ts=1726484605",
  deliveryTime: "13 mins",
  size: "1 pack (9 pieces)",
  price:38 },
];

const products7 = [{
  name: "Milk",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
  deliveryTime: "13 mins",
  size: "500 ml",
  price: 28},
  {name: "Amul Masti Cup Curd",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603",
  deliveryTime: "13 mins",
  size: "200g",
  price: 24},
  {name: "Vijay Stone Ground Wheat Brown Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de613aee-7992-4848-8644-52792012ab56.jpg?ts=1726484663",
  deliveryTime: "13 mins",
  size: "400g",
  price: 48},
  {name: "Vijay Premium White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/df49cda4-0b40-40d1-a05a-35f9f5b8175a.jpg?ts=1726485653",
  deliveryTime: "13 mins",
  size: "600g",
  price:55 },
  {name: "Amul Salted Butter",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
  deliveryTime: "13 mins",
  size: "100g",
  price:62 },
  {name: "Vijay Soft White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/42dde89d-f708-4988-9ee7-a5dd782ad5ec.jpg?ts=1726484641",
  deliveryTime: "13 mins",
  size: "400g",
  price:40 },
  {name: "Egg First Protein White Eggs",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/80dc07f4-442e-4605-ab01-1996582b4d1f.jpg?ts=1726473647",
  deliveryTime: "13 mins",
  size: "6 pieces",
  price:60 },
  {name: "Vijay Sliced Wheat Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/58e328c0-bf9c-4871-89f4-43966ac9a286.jpg?ts=1726484656",
  deliveryTime: "13 mins",
  size: "200g",
  price: 22},
  {name: "Vijay Jumbo White Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7451feb4-7824-4a87-8ae4-af81eb36e490.jpg?ts=1734600315",
  deliveryTime: "13 mins",
  size: "500g",
  price:48 },
  {name: "Amul Blend Diced Cheese",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ecf2f055-233c-450f-a0ef-5da6070b60c3.jpg?ts=1706182144",
  deliveryTime: "13 mins",
  size: "200g",
  price: 125},
  {name: "Amul Pure Milk Cheese Slices",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
  deliveryTime: "13 mins",
  size: "200g",
  price:145 },
  {name: "Vijay Pav Bread",
  image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/76575a61-7b42-49bc-95a0-675c17578346.jpg?ts=1726484605",
  deliveryTime: "13 mins",
  size: "1 pack (9 pieces)",
  price:38 },
];

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1320px] mx-auto">

        {/* Static Banners/Images */}
        {/* Images section start */}
        <section className=''>
          <figure><img src="/Group-33704.jpg" alt="" /></figure>

          <figure className='flex m-0 p-0'><img src="/pharmacy-WEB.jpg" alt="" className='w-[26.5%] me-[10px] mt-[10px]' />
            <img src="/Pet-Care_WEB.jpg" alt="" className='w-[26.5%] me-[10px] mt-[10px]' />
            <img src="/babycare-WEB.jpg" alt="" className='w-[26.5%] me-[10px] mt-[10px]' />
          </figure>
          <figure className='flex w-[1320px]'>
            <Link to={`/buymenu`} ><img src="/paan-corner_web.png" className='w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-2_10.png" className='w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-3_9.png" className='w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-4_9.png" className='w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-5_4.png" className='w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-6_5.png" className='w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-7_3.png" className='w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-8_4.png" className='w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-9_3.png" className='w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-10.png" className='w-[132px]' alt="" />
</Link>          </figure>
          <figure className='flex'>
            <Link to={`/buymenu`} ><img src="/Slice-11.png" className=' w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-12.png" className=' w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-13.png" className=' w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-14.png" className=' w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-15.png" className=' w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-16.png" className=' w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-17.png" className=' w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-18.png" className=' w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-19.png" className=' w-[132px]' alt="" /></Link>
            <Link to={`/buymenu`} ><img src="/Slice-20.png" className=' w-[132px]' alt="" /></Link>


          </figure>

        </section>

        {/* ✅ 7 Product Sliders */}
        <ProductSlider title="Dairy & Milk" products={products1} />
        <ProductSlider title="Salt & Spices" products={products2} />
        <ProductSlider title="Butter & Ghee" products={products3} />
        <ProductSlider title="Tea & Coffee" products={products4} />
        <ProductSlider title="Juices & Beverages" products={products5} />
        <ProductSlider title="Eggs & Bakery" products={products6} />
        <ProductSlider title="Instant Foods" products={products7} />
      </div>
      
      <Footers />
    </>
  );
}
export { ProductSlider }





export default App



