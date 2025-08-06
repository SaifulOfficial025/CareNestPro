import React from "react";
import CareLogo from "../../../public/CareLogo.png"; // ✅ replace with your logo
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#031b27] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Section: Logo & Description */}
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <img src={CareLogo} alt="CareNestPro Logo" className="h-8 mr-2" />
            <h1 className="text-xl font-semibold">
              CareNest<span className="text-[#00b3a4]">Pro</span>
            </h1>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            A leading, trusted caregiving solution in Nigeria and across Africa.
          </p>
        </div>

        {/* Middle Section: Links */}
        <div className="flex-1">
          <h3 className="font-semibold mb-3">About Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Safety Center</a></li>
          </ul>
        </div>

        {/* Right Section: App Store Buttons */}
        <div className="flex-1 flex flex-col space-y-3">
          <button className="flex items-center justify-center gap-2 bg-white text-black rounded-md px-4 py-2 shadow hover:bg-gray-100 transition">
            <IoLogoGooglePlaystore className="h-5" />
            <span className="text-sm font-medium">Get on Android</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-black rounded-md px-4 py-2 shadow hover:bg-gray-100 transition">
            <FaApple className="h-5" />
            <span className="text-sm font-medium">Get on iPhone</span>
          </button>
        </div>
      </div>

      {/* Bottom Line */}
      <hr className="border-gray-700 my-6" />
      
      {/* Bottom Row: Copyright & Social Icons */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© All rights are reserved to CareNestPro</p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#"><FaLinkedin className="text-white text-3xl" /></a>
          <a href="#"><FaInstagramSquare className="text-white text-3xl" /></a>
          <a href="#"><FaFacebook className="text-white text-3xl" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
