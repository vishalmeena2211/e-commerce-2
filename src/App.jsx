import { Routes } from "react-router-dom";
import Navbar from "./components/comman/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import React, { useEffect, useState } from 'react';
import './index.css'
import Footer from "./components/comman/Footer";
// import Banner from "./components/comman/Banner";
import Otp from "./components/Otp";
import Product from "./components/Product";
import SettingPage from "./pages/SettingPage";
import SearchPage from "./pages/SearchPage";
import AboutUs from "./pages/AboutUs";
import ProductSearchResultPage from "./pages/ProductSearchResultPage";
// import Settings from "./components/Setting";




const App = () => {
  
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  const [scrolling, setScrolling] = useState(false);


  
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY + window.scrollY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('scroll', updateCursorPosition);
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('scroll', updateCursorPosition);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (<div className="relative">
        {/* <Banner/> */}
        <div className={`fixed ${ scrolling && "bg-gray-200 "}  z-10 w-screen top-0`}>
        <Navbar className=""/>
          
        </div>
          {/* <Settings/> */}

          
        <div
        className="cursor-circle"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      ></div>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shops" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/otp" element={<Otp/>} />
          <Route path="/setting" element={<SettingPage/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/result" element={<ProductSearchResultPage/>} />
        </Routes>
        <div className="mt-44">

        <Footer/>
        </div>
  </div>)
};

export default App;
