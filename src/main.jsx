import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Buymenu from './Buymenu.jsx';
import Productmenu from './Productmenu.jsx';
import Cart from './Cart.jsx';
import WebsiteContext from './context/WebsiteContext.jsx';
import Login from './login.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WebsiteContext>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/buymenu' element={<Buymenu />} />
          <Route path='/productmenu/:id?' element={<Productmenu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          </Routes>
      </BrowserRouter>
      </WebsiteContext>
  </StrictMode>
)
