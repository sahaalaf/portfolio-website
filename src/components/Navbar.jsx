import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'About', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' }
];

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = navLinks.find(link => link.href === location.pathname)?.name || '';
    setActiveLink(currentPath);
  }, [location.pathname]);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between w-full py-6 md:px-0 md:py-4 bg-transparent">
      <div className="flex-shrink-0">
        <h3 className="text-lg md:text-2xl font-extrabold text-white">Sahal.</h3>
      </div>
      <div className="relative md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isMenuOpen && (
          <div className="absolute top-7 left-[-80px] bg-custom-bg p-4 z-10 rounded-2xl  ">
            <div className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`text-white font-light ${activeLink === link.name ? 'border-b-2 border-purple-600' : 'hover:text-gray-400'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex-grow md:flex md:justify-center md:space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => handleLinkClick(link.name)}
            className={`text-white font-light ${activeLink === link.name ? 'border-b-2 border-purple-600' : 'hover:text-gray-400'}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
