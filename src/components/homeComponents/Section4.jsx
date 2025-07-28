import React from "react";
import { FaUtensils, FaStar } from "react-icons/fa";
import "../../styles/HomePageStyles/Section4.css"
import { useNavigate } from "react-router-dom";

const Section4 = () => {
  const navigate = useNavigate();
  const handleMenuClick = () => {
    navigate('/menu')
  }
  return (
    <div className="section4">
      <div className="menu-cta-container">
        <div className="stars-decoration">
          <FaStar className="star-icon" />
          <FaStar className="star-icon" />
          <FaStar className="star-icon" />
        </div>
        <h2 className="menu-cta-title">Taste Our Menu</h2>
        <button className="menu-btn minimalist" onClick={handleMenuClick}>
          <FaUtensils className="btn-icon" />
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default Section4;
