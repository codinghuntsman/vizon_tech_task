import React from "react";
import "./Navbar.css";
import image from "../../../src/images/v_image.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#37accc] h-24 border border-b border-gray-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[#37accc] font_style">
              <li>
                <a href="/">Home</a>
              </li>
              <li tabIndex="0">
                <a href="/product" className="justify-between">
                  Product
                </a>
              </li>
              <li>
                <a href="club">Club</a>
              </li>
              <li>
                <a href="/get">Get in Touch</a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-3">
            <img className="w-5 lg:w-10" src={image} alt="avatar" />
            <a href="/kkkk" className="normal-case text-sm md:text-xl lg:text-2xl text-white tracking-widest font_style">
              VIZON Tech
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-white tracking-widest font_style text-xl">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/product">Product</a>
            </li>
            <li>
              <a href="/club">Club</a>
            </li>
            <li>
              <a href="/get">Get in Touch</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
