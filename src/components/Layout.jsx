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
              className="mr-4 text-blue-900 text-2xl md:hidden"
              aria-label="Go Back"
            >
              <FaArrowLeft />
            </button>
          )}
          <div className="text-2xl font-bold text-blue-900">THE USMLE HORIZON</div>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-blue-900 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/pricing" className="hover:text-blue-600">Pricing</Link></li>
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
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 z-50 md:hidden animate-fade-in">
            <li className="py-2 w-full text-center">
              <Link to="/" className="hover:text-blue-600 block" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="py-2 w-full text-center">
              <Link to="/pricing" className="hover:text-blue-600 block" onClick={() => setMenuOpen(false)}>Pricing</Link>
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