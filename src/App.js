import React from 'react';
import { BrowserRouter, Route, RouterProvider, Routes, ScrollRestoration } from 'react-router-dom';
import { Auction, Drop, Home, Market } from './Pages';
import { Header, Footer } from './Components';
import './App.css';
import Product from './Components/product/Product';
import Cart from './Pages/cart/Cart';


function App() {
  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/drop" element={<Drop />} />
        <Route path="/market/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
