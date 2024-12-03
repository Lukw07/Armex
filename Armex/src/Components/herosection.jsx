import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section" aria-label="Background image">
      <div className="hero-section-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Armax</h1>
          <p className="hero-subtitle">Přijďte se podívat co děláme</p>
          <a href="#" className="hero-button">
            Co vyrábíme?
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


