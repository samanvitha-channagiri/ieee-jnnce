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

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <img
            src={logo}
            alt="IEEE CSE Logo"
            className="img-fluid rounded-circle me-2" // Apply rounded corners and margin
            width="50" // Increase the size to make it more noticeable
            height="50"
          />

        <Link className="navbar-brand" to="/"><span className="fw-bold text-highlight">IEEE JNNCE</span></Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/anveshana">Anveshana</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aavishkar">Avishkar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          

           
            

          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
