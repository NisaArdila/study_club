import React, { useState } from 'react';
import { Link } from 'react-scroll'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-400 text-white fixed w-full shadow-lg z-10 mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-white">Portofolio.byme</h1>
          <div className="hidden md:flex space-x-4">
            <Link
              to="Hero"
              smooth={true}
              duration={500}
              className="hover:text-yellow-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="About"
              smooth={true}
              duration={500}
              className="hover:text-yellow-300 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="Project"
              smooth={true}
              duration={500}
              className="hover:text-yellow-300 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              className="hover:text-yellow-300 cursor-pointer"
            >
              Contact
            </Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-yellow-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <Link
            to="Home"
            smooth={true}
            duration={500}
            className="block px-4 py-2 text-sm hover:text-yellow-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="About"
            smooth={true}
            duration={500}
            className="block px-4 py-2 text-sm hover:text-yellow-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="Projects"
            smooth={true}
            duration={500}
            className="block px-4 py-2 text-sm hover:text-yellow-300 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            className="block px-4 py-2 text-sm hover:text-yellow-300 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;