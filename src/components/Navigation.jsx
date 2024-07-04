// src/components/Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../assets/logo.jpg';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  // Inline styles
  const styles = {
    navbar: {
      backgroundColor: '#007bff',
      borderRadius: '15px',
      overflow: 'hidden',
      padding: '5px 10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    logo: {
      width: '40px', // Reduced size to match smaller navbar
      height: '40px',
      borderRadius: '50%',
      marginRight: '8px',
    },
    brandText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '1rem', // Adjusted font size for smaller navbar
    },
    navLink: {
      color: '#fff',
      marginRight: '10px',
      textDecoration: 'none',
      padding: '5px 0', // Reduced padding to decrease height
    },
    navLinkHover: {
      color: '#00bfff',
      textDecoration: 'underline',
    },
    navItem: {
      marginBottom: '0', // Remove margin for items in the navbar
    },
  };

  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container-fluid d-flex align-items-center">
        <div className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="IEEE CSE Logo"
            style={styles.logo}
          />
          <Link to="/" style={styles.brandText}>
            IEEE CSE
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
          style={{ borderColor: '#fff' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={styles.navItem}>
              <Link
                className="nav-link"
                aria-current="page"
                to="/home"
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color}
                onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
              >
                Home
              </Link>
            </li>
            <li className="nav-item" style={styles.navItem}>
              <Link
                className="nav-link"
                to="/about"
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color}
                onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
              >
                AboutUs
              </Link>
            </li>
            <li className="nav-item" style={styles.navItem}>
              <Link
                className="nav-link"
                to="/anveshana"
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color}
                onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
              >
                Anveshana
              </Link>
            </li>
            <li className="nav-item" style={styles.navItem}>
              <Link
                className="nav-link"
                to="/aavishkar"
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color}
                onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
              >
                Avishkaar
              </Link>
            </li>
            <li className="nav-item" style={styles.navItem}>
              <Link
                className="nav-link"
                to="/contact"
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color}
                onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
              >
                ContactUs
              </Link>
            </li>
            <li className="nav-item" style={styles.navItem}>
              <Link
                className="nav-link"
                to="/event"
                style={styles.navLink}
                onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color}
                onMouseLeave={(e) => e.target.style.color = styles.navLink.color}
              >
                Event Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
