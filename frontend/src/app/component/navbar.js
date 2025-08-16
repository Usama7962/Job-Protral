"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoBagRemoveOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <IoBagRemoveOutline className="text-2xl" />
          <h1 className="text-2xl font-bold">Job Portal</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/landingpage" className="hover:underline">Home</Link>
          <Link href="/job" className="hover:underline">Jobs</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
        {/* Desktop Auth */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="hover:underline pt-2">Login</Link>
          <Link href="/register" className="hover:underline border-0 bg-[#309689] px-4 py-2 rounded-xl">Register</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
            {isOpen ? <IoClose className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <Link href="/Landingpage" className="block hover:underline">Home</Link>
          <Link href="/jobs" className="block hover:underline">Jobs</Link>
          <Link href="/about" className="block hover:underline">About</Link>
          <Link href="/contact" className="block hover:underline">Contact</Link>
          <hr className="border-gray-600" />
          <Link href="/login" className="block hover:underline">Login</Link>
          <Link href="/register" className="block bg-green-500 text-white px-4 py-2 rounded-xl">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
