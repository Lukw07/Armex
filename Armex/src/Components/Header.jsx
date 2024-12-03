import React, { useState } from "react";
import "../styles/Navbar.css"; // Pro externí styly, uprav dle potřeby
import logo from "../assets/logo_armax.png";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <header>
      <nav className="navbar">
        <a href="#">
        <img className="logo" src={logo} alt="spacex logo" />
        </a>
        <ul
          id="ul-navigation"
          className={`nav-ul ${isMenuVisible ? "visible" : ""}`}
          data-visible={isMenuVisible ? "true" : "false"}
        >
          <li className="nav-li">
            <a href="#">Firma</a>
          </li>
          <li className="nav-li">
            <a href="#">Kariera</a>
          </li>
          <li className="nav-li">
            <a href="#">Kontakt</a>
          </li>
        </ul>
        <button
          className="mobile-toggle"
          aria-controls="ul-navigation"
          aria-expanded={isMenuVisible}
          onClick={toggleMenu}
        >
          <span className="sr-only">Menu</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
