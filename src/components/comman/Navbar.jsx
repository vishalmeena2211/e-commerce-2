// import { useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { CiSettings } from 'react-icons/ci'
import { CiSearch } from 'react-icons/ci'

const Navbar = () => {

  const { cart } = useSelector((state) => state);
  const [isDropdownOpen, setDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <div >
      <nav className="flex justify-between items-center h-30 w-11/12 h-28 mx-auto border-box text-xl">



        <div className="flex items-center w-full text-black mr-5 space-x-6">
          <NavLink to="/">
            <div className="ml-5 mr-20 text-black">
              {/* <p className="font-bold text-3xl"><span className="text-orange-500 text-5xl">E</span>-<span className="text-orange-500 text-5xl">C</span>ommers</p> */}

              <img src="https://template.hasthemes.com/sinp/sinp/assets/images/logo/logo.webp" alt="" />
            </div>
          </NavLink>
          <div className="group relative" ref={dropdownRef}>
            <NavLink to="/" onClick={toggleDropdown}>
              <p className="hover:text-orange-500">Home</p>
            </NavLink>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white p-2 rounded-md shadow-lg">
                <NavLink to="/">Dropdown Item 1</NavLink>
                <NavLink to="/">Dropdown Item 2</NavLink>
                {/* Add more dropdown items as needed */}
              </div>
            )}
          </div>
          <NavLink to="/shops">
            <p className="hover:text-orange-500">Shops</p>
          </NavLink>
          <NavLink to="/">
            <p className="hover:text-orange-500">About Us</p>
          </NavLink>
          <NavLink to="/">
            <p className="hover:text-orange-500">Contact</p>
          </NavLink>
          <NavLink to="/">
            <p className="hover:text-orange-500">Features</p>
          </NavLink>
          {/* <NavLink to="/login">
              <p className="hover:text-orange-500">Login</p>
            </NavLink>
            <NavLink to="/signup">
              <p className="hover:text-orange-500">SignUp</p>
            </NavLink> */}

        </div>

        <div className="flex gap-5">

          <NavLink to="/search">
            <div className="relative">
              <CiSearch className="text-3xl hover:text-orange-500" />
            </div>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative ">
              <GiShoppingCart className="text-3xl hover:text-orange-500" />
              {
                cart.length > 0 &&
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-black"
                >{cart.length}</span>
              }

            </div>
          </NavLink>

          <NavLink to="/setting">
            <div className="relative mr-8">
              <CiSettings className="text-3xl hover:text-orange-500" />
            </div>
          </NavLink>

        </div>
      </nav>
    </div>
  )
};

export default Navbar;
