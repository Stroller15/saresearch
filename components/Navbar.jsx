"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-black  text-lg font-bold flex items-center">
            <Image src="/logo.jpeg" alt="Logo" className="h-8 mr-2 text-xl" width={50} height={500}/>
            S&A Research
          </a>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex items-center text-black ">
            <a href="/" className="text-xl font-bold mx-4">Home</a>
            <a href="/about" className="text-xl font-semibold mx-4">About</a>
            <a href="/services" className="text-xl font-semibold mx-4">Our Services</a>
            <a href="/research" className="text-xl font-semibold mx-4">Research Report</a>
            <a href="/careers" className="block  text-xl font-semibold py-2">Career</a>
            <a href="/contact" className=" text-xl font-semibold mx-4">Contact Us</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mx-5">
          <a href="/" className="block text-black text-xl font-semibold py-2">Home</a>
          <a href="/about" className="block text-black  text-xl font-semibold py-2">About</a>
          <a href="/services" className="block text-black  text-xl font-semibold py-2">Our Services</a>
          <a href="/research" className="block text-black text-xl font-semibold py-2">Research Report</a>
          <a href="/careers" className="block text-black  text-xl font-semibold py-2">Career</a>
          <a href="/contact" className="block text-black text-xl font-semibold py-2">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
