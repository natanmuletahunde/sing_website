/* eslint-disable no-unused-vars */
// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-black bg-opacity-50 p-4 fixed top-0 left-0 z-10">
      <nav className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-white mb-4">Sing Song  Website</h1>
        <ul className="flex justify-center gap-x-8">
          <li>
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/list" className="text-white hover:underline">
              List of Music
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
