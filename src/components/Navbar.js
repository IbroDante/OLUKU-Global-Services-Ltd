import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <FaPhone className="top-bar-icon" />
              <a href="tel:08025551994">080-2555-1994</a>
            </span>
            <span className="top-bar-item">
              <FaEnvelope className="top-bar-icon" />
              <a href="mailto:oluku.globalservices@gmail.com">
                oluku.globalservices@gmail.com
              </a>
            </span>
          </div>
          <div className="top-bar-right">
            <span>RC: 2025440</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-content">
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">
              <span className="logo-letter">O</span>
              <span className="logo-letter-sub">G</span>
            </div>
            <div className="logo-text">
              <span className="logo-name">OLUKU</span>
              <span className="logo-tagline">Global Services Ltd</span>
            </div>
          </Link>

          <div className={`nav-links ${isOpen ? 'nav-links-active' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? 'nav-link-active' : ''
                }`}
              >
                {link.label}
                <span className="nav-link-underline"></span>
              </Link>
            ))}
            <Link to="/contact" className="nav-cta-btn">
              Get a Quote
            </Link>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;