import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaChevronUp,
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Footer CTA */}
      <div className="footer-cta">
        <div className="container footer-cta-content">
          <div className="footer-cta-text">
            <h2>Ready to Start Your Next Project?</h2>
            <p>
              Let's build something extraordinary together. Contact us today
              for a free consultation.
            </p>
          </div>
          <Link to="/contact" className="footer-cta-btn">
            Get Started <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Company Info */}
          <div className="footer-col footer-about">
            <div className="footer-logo">
              <div className="logo-icon footer-logo-icon">
                <span className="logo-letter">O</span>
                <span className="logo-letter-sub">G</span>
              </div>
              <div className="logo-text">
                <span className="logo-name">OLUKU</span>
                <span className="logo-tagline">Global Services Ltd</span>
              </div>
            </div>
            <p className="footer-description">
              A CAC-registered company delivering excellence in property
              development and fish farming since 2019. Building Nigeria's
              future, one project at a time.
            </p>
            <div className="footer-social">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
    aria-label="Twitter"
  >
    <FaTwitter />
  </a>
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
</div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/"><FaArrowRight className="footer-link-icon" /> Home</Link></li>
              <li><Link to="/about"><FaArrowRight className="footer-link-icon" /> About Us</Link></li>
              <li><Link to="/services"><FaArrowRight className="footer-link-icon" /> Services</Link></li>
              <li><Link to="/projects"><FaArrowRight className="footer-link-icon" /> Projects</Link></li>
              <li><Link to="/gallery"><FaArrowRight className="footer-link-icon" /> Gallery</Link></li>
              <li><Link to="/contact"><FaArrowRight className="footer-link-icon" /> Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/services"><FaArrowRight className="footer-link-icon" /> Property Acquisition</Link></li>
              <li><Link to="/services"><FaArrowRight className="footer-link-icon" /> Property Development</Link></li>
              <li><Link to="/services"><FaArrowRight className="footer-link-icon" /> Fish Farming</Link></li>
              <li><Link to="/services"><FaArrowRight className="footer-link-icon" /> Fish Processing</Link></li>
              <li><Link to="/services"><FaArrowRight className="footer-link-icon" /> Distribution</Link></li>
              <li><Link to="/services"><FaArrowRight className="footer-link-icon" /> Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <div>
                  <strong>Head Office:</strong>
                  <p>
                    No. 1, Road 3, Zone 'C', Besides Inuwa Hotel, Kuduru,
                    Bwari-Abuja
                  </p>
                </div>
              </div>
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <div>
                  <strong>Farm Address:</strong>
                  <p>
                    Km 4, Along Nigerian Law School, Kuchiko, Bwari, Abuja
                  </p>
                </div>
              </div>
              <div className="footer-contact-item">
                <FaPhone className="footer-contact-icon" />
                <div>
                  <a href="tel:08025551994">080-2555-1994</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <FaEnvelope className="footer-contact-icon" />
                <div>
                  <a href="mailto:oluku.globalservices@gmail.com">
                    oluku.globalservices@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            &copy; {new Date().getFullYear()} Oluku Global Services Limited.
            All Rights Reserved. | RC: 2025440 | Powered by <a href="https://www.plugtech.onrender.com" target="_blank" rel="noopener noreferrer">Plug Technology</a>
          </p>
          <button
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaChevronUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;