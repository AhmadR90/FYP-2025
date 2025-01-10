// import React from 'react'
// import { Link } from 'react-router-dom'
// const Header = () => {
//   return (
//     <>
//     <header className="bg-green-600 text-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         <div className="text-2xl font-bold">
//           <Link to="/" className="hover:text-green-200">
//             PlantVision
//           </Link>
//         </div>
//         <nav className="flex space-x-6">
//           <Link to="/" className="hover:text-green-200">
//             Home
//           </Link>
//           <Link to="/about" className="hover:text-green-200">
//             About
//           </Link>
//           <Link to="/features" className="hover:text-green-200">
//             Features
//           </Link>
//           <Link to="/contact" className="hover:text-green-200">
//             Contact
//           </Link>
//         </nav>
//         <Link to="/get-started">
//           <button className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-md">
//             Get Started
//           </button>
//         </Link>
//       </div>
//     </header> </>
//   )
// }

// export default Header
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-green-600 text-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <Link to="/" className="hover:text-green-200">
//             PlantVision
//           </Link>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           className="text-white md:hidden focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             {isMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Navigation Links */}
//         <nav
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } md:flex md:items-center md:space-x-6`}
//         >
//           <Link to="/" className="block py-2 md:py-0 hover:text-green-200">
//             Home
//           </Link>
//           <Link to="/about" className="block py-2 md:py-0 hover:text-green-200">
//             About
//           </Link>
//           <Link
//             to="/features"
//             className="block py-2 md:py-0 hover:text-green-200"
//           >
//             Features
//           </Link>
//           <Link
//             to="/contact"
//             className="block py-2 md:py-0 hover:text-green-200"
//           >
//             Contact
//           </Link>
//         </nav>

//         {/* Call-to-Action Button */}
//         <div className="hidden md:block">
//           <Link to="/get-started">
//             <button className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-md">
//               Get Started
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Mobile CTA Button */}
//       {isMenuOpen && (
//         <div className="md:hidden text-center mt-4">
//           <Link to="/get-started">
//             <button className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-md">
//               Get Started
//             </button>
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons from React Icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-green-200">
          PlantVision
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" /> // Close icon
          ) : (
            <FiMenu className="w-6 h-6" /> // Menu icon
          )}
        </button>

        {/* Navigation Links */}
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
