import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1480px] mx-auto px-4 text-white gap-[200px] bg-transparent">
      <h1 className="w-full text-3xl font-bold">JURN.</h1>
      <ul className="hidden md:flex w-[1600px] justify-between bg-transparent">
        <li className="p-4 relative group cursor-pointer">
          <span className="relative">
            Home
            <span className="absolute inset-x-0  bottom-[-7px] h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </li>
        <li className="p-4 relative group cursor-pointer">
          <span className="relative">
            About-us
            <span className="absolute inset-x-0 bottom-[-7px] h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </li>
        <li className="p-4 relative group cursor-pointer">
          <span className="relative">
            Services
            <span className="absolute inset-x-0 bottom-[-7px] h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </li>
        <li className="p-4 relative group cursor-pointer">
          <span className="relative">
            News
            <span className="absolute inset-x-0 bottom-[-7px] h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </li>
        <button className="relative overflow-hidden rounded-md bg-[#FA9021] px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110 h-[50px] w-[180px]">
          Contact
        </button>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold  m-4">JURN.</h1>

        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About-us</li>
          <li className="p-4 border-b border-gray-600">servicess</li>
          <li className="p-4 border-b border-gray-600">News</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
