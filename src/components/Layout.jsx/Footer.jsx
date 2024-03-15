import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer shadow bg-tertiary mt-5">
      <div className="px-5 flex flex-col md:flex-row justify-between items-center py-5 ">
        <div className="flex items-center gap-2 md:gap-5 text-white text-md">
          2024 &copy;
          <span className="font-bold md:text-3xl text-gray-700">
            NK<span className="text-blue-600">Flix</span>
          </span>
          <span>|</span> All rights Reserved
        </div>
        <div className="flex items-center gap-2">
          <Link className="text-blue-600 font-semibold">Disclaimer</Link>
          <Link className="text-blue-600 font-semibold">Contact</Link>
          <Link className="text-blue-600 font-semibold">Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
