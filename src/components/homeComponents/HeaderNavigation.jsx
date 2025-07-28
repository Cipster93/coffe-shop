import React, { useState } from "react";
import "../../styles/HeaderStyles/HeaderNavigation.css"
import { FaCoffee } from "react-icons/fa";
import { Link } from 'react-router-dom';


const HeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header-navigation">
      <div className="navigation-container">
        <div
          className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`navigation-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/menu" onClick={closeMenu}>
            Menu
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>

      <div className="hero-container">
        <FaCoffee className="hero-icon" />
        <h1 className="hero-title">Coffe Shop</h1>
        <h2 className="hero-subtitle">Savor your moment of relaxation</h2>
      </div>
    </div>
  );
};

export default HeaderNavigation;
