import React from "react";
import MobileScreen from "./MobileScreen"; // Assuming you have a MobileScreen component
import PokiTokiLogo from "/PokiTokiLogo.png";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";

const PokiTokiHomePage = () => {
  return (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-blue-900 to-purple-700 p-6">
        {/* Logo */}
        <img src={PokiTokiLogo} alt="Poki Toki Logo" className="w-40 mb-6" />

        {/* Auth Buttons */}
        <button className="btn btn-primary w-3/4 mb-2">Login</button>
        <button className="btn btn-secondary w-3/4 mb-4">Sign Up</button>

        {/* Social Auth */}
        <div className="flex space-x-4">
          <a href="#" className="text-pink-500 text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-600 text-2xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-yellow-500 text-2xl">
            <FaGoogle />
          </a>
        </div>
      </div>
  );
};

export default PokiTokiHomePage;
