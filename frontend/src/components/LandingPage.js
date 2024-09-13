import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import gif from "../Assets/login.gif"; 

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-white z-20">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-24" />
        </div>
        {/* Navbar Items */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-900 hover:text-teal-500 font-bold">
            Home
          </Link>
          <Link to="#" className="text-gray-900 hover:text-teal-500 font-bold">
            About us
          </Link>
          <Link to="#" className="text-gray-900 hover:text-teal-500 font-bold">
            Contact
          </Link>
        </div>
        {/* Login / Get Started Buttons */}
        <div className="flex space-x-4">
          <button className="text-gray-900 hover:text-teal-500 font-bold border-2 px-4 rounded-full border-gray-900">
            Login
          </button>
          <Link to="/form">
            <button className="bg-[#348aa7] text-white py-2 px-4 rounded-full hover:bg-teal-600 font-bold">
              Get started
            </button>
          </Link>
        </div>
      </nav>

      {/* GIF Section with Overlay Content */}
      <div className="relative flex items-center w-full h-screen bg-white p-16 mt-24">
        {/* Background GIF */}
        <img
          src={gif}
          alt="Mental Health AI GIF"
          className="absolute top-0 end-2 mt-[-60px] w-4/5 z-0"
        />

        {/* Overlay Content */}
        <div className="relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Revolutionizing Mental
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Health Care with AI
            </h1>
          </div>
          <div className="flex items-center mt-6">
            <Link to="/form">
              <button className="bg-[#348aa7] text-white py-3 px-6 rounded-full hover:bg-teal-600">
                Get started
              </button>
            </Link>
            <div className="ml-6">
              <p className="text-black text-lg">
                Connect with your personal therapist
              </p>
              <p className="text-black text-lg mt-[-10px]">
                now for free
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;
