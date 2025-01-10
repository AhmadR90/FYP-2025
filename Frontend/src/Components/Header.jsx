


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        <Link to="/" className="text-2xl font-bold flex gap-3 hover:text-green-200">
        <img className="h-10 w-10 object-contain rounded-xl" src="https://i.pinimg.com/474x/64/70/58/64705813776018a21668babb859a11b3.jpg" alt="" />
          PlantVision
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" /> 
          ) : (
            <FiMenu className="w-6 h-6" /> 
          )}
        </button>

        
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          {["Home", "About", "Features", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block py-2 md:py-0 hover:text-green-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Call-to-Action Button */}
        <Link
          to="/get-started"
          className="hidden md:block bg-green-800 hover:bg-green-700 px-4 py-2 rounded-md"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile CTA Button */}
      {isMenuOpen && (
        <div className="md:hidden text-center mt-4">
          <Link
            to="/get-started"
            className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-md"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
