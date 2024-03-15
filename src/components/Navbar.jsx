import React from "react";
import Search from "/search.svg";

const Navbar = () => {
  return (
    <div className="shadow h-14 bg-slate-200">
      <div className="flex justify-between items-center px-5 h-[100%] max-w-screen-2xl mx-auto">
        <div className="font-bold md:text-3xl text-gray-700">
          NK <span className="text-blue-600">Flix</span>
        </div>
        <form className="relative">
          <input className="border rounded py-1.5 pl-1 focus:outline-none focus:border-blue-500" placeholder="Search" />
          <button className="btn__search absolute top-1/2 right-[5%] transform -translate-y-1/2 z-1">
            <img className="w-5 h-5 object-cover" src={Search} alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
