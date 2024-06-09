"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="p-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <a href="/" className="text-white text-lg font-semibold flex items-center">
            <Image src="/logo.jpeg" alt="Logo" className="h-8 mr-2 text-xl" width={100} height={500}/>
            S&A Research
          </a>
        </div>
        <div className="flex items-center ">
          <a href="/" className="text-white text-xl font-semibold mx-4">Home</a>
          <a href="/about" className="text-white text-xl font-semibold mx-4">About</a>
          <a href="/services" className="text-white text-xl font-semibold mx-4">Our Services</a>
          <a href="/research" className="text-white text-xl font-semibold mx-4">Research Report</a>
          <a href="/contact" className="text-white text-xl font-semibold mx-4">Contact Us</a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
