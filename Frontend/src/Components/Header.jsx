import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import UserProfile from "./UserProfile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo without navigation */}
        <div className="flex items-center gap-3 cursor-default">
          <img
            className="h-10 w-10 object-contain rounded-xl"
            src="https://i.pinimg.com/474x/64/70/58/64705813776018a21668babb859a11b3.jpg"
            alt="PlantVision Logo"
          />
          <span className="text-2xl font-bold">PlantVision</span>
        </div>

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

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          {/* Moved the links here to be before the Logout button */}
          {["Home", "About", "check-plant"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block py-2 md:py-0 hover:text-green-200"
            >
              {item}
            </NavLink>
          ))}

          {/* Call-to-Action Button and User Profile */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/login"
              className="hidden md:block bg-green-800 hover:bg-green-700 font-bold px-4 py-2 rounded-md"
            >
              Logout
            </NavLink>
            <UserProfile />
          </div>
        </nav>
      </div>

      {/* Mobile CTA Button */}
      {isMenuOpen && (
        <div className="md:hidden text-center mt-4">
          <NavLink
            to="/login"
            className="bg-green-800 hover:bg-green-700 font-bold px-4 py-2 rounded-md"
          >
            Logout
          </NavLink>
          <UserProfile />
        </div>
      )}
    </header>
  );
};

export default Header;