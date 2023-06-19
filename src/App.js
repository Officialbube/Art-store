import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auction, Drop, Home, Market } from './Pages';
import { Header, Footer } from './Components';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/market" element={ <Market/> }/>
        <Route path="/auction" element={ <Auction/> }/>
        <Route path="/drop" element={ <Drop/> }/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
