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
          <Link to="/" className="navbar-logo" aria-label="Oluku Global Services Ltd — Home">
            <img
              src="/images/brand/oluku-emblem.png"
              alt=""
              className="navbar-emblem"
              width="385"
              height="420"
              aria-hidden="true"
            />
            <span className="navbar-logo-text">
              <span className="navbar-logo-name">OLUKU</span>
              <span className="navbar-logo-tagline">Global Services Ltd</span>
            </span>
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