import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 Relative bottom-0 left-0 w-full">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        <nav>
          <ul className="flex justify-center space-x-6">
            <li>
              <NavLink 
                to="/about" 
                className="hover:underline transition duration-300 ease-in-out" 
                activeClassName="font-bold"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/check-plant" 
                className="hover:underline transition duration-300 ease-in-out" 
                activeClassName="font-bold"
              >
                Check Plant
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;