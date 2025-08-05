import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaArrowLeft } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Show back button if not on home page
  const showBack = location.pathname !== '/';                                                                    

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center relative">
        <div className="flex items-center">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="mr-4 text-[#0d3570] text-2xl md:hidden"
              aria-label="Go Back"
            >
              <FaArrowLeft />
            </button>
          )}
          {/* Logo */}
          <img
            src="https://i.postimg.cc/d1dtt8BS/99090909.jpg" // <-- Replace with your logo path if needed
            alt="Logo"
            className="w-10 h-10 mr-3 rounded-full object-cover"
          />
          <div className="text-xl font-bold text-[#0d3570]">THE USMLE HORIZON</div>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-[#0d3570] font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/pricing" className="hover:text-blue-600">Pricing</Link></li>
          <li><Link to="/services" className="hover:text-blue-600">iMD subscription</Link></li>
          <li><Link to="/research" className="hover:text-blue-600">Research Publications</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          
        </ul>
        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl text-blue-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white text-blue-700 shadow-md flex flex-col items-center py-4 z-50 md:hidden animate-fade-in">
            <li className="py-2 w-full text-center">
              <Link to="/" className="hover:text-blue-600 block" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="py-2 w-full text-center">
              <Link to="/pricing" className="hover:text-blue-600 block" onClick={() => setMenuOpen(false)}>Pricing</Link>
            </li>
            <li className="py-2 w-full text-center">
              <Link to="/services" className="hover:text-blue-600 block" onClick={() => setMenuOpen(false)}>iMD subscription</Link>
            </li>
            <li className="py-2 w-full text-center">
              <Link to="/research" className="hover:text-blue-600 block" onClick={() => setMenuOpen(false)}>Research Publications</Link>
            </li>
            <li className="py-2 w-full text-center">
              <Link to="/contact" className="hover:text-blue-600 block" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>

          </ul>
        )}
      </nav>
      {/* Main Content */}
      <main className="flex-1">{children}</main>
      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-4">
        © {new Date().getFullYear()} THE USMLE HORIZON . All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;