import React, { useState } from "react";
import "./Navbar.css";
// import cladByWayne from "../../assets/logos/clad-black-icon.jpg";
import { FiMenu, FiX } from "react-icons/fi";
// import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div className="navbar">
      <div className="navbar__container">
        {/* <img
          src={cladByWayne}
          alt="Clad By Wayne logo"
          className="navbar__logo"
        /> */}
        img
        <div>
          <ul className={click ? "navbar__openedOptions" : "navbar__options"}>
            <a to="#home" smooth onClick={closeMenu}>
              <li>Home</li>
            </a>
            <a to="#about" smooth onClick={closeMenu}>
              <li>About</li>
            </a>
            <a to="#works" smooth onClick={closeMenu}>
              <li>Works</li>
            </a>
            <a to="#socials" smooth onClick={closeMenu}>
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        <div className="navbar__hamburger" onClick={handleClick}>
          {click ? <FiX color="#ffd700" /> : <FiMenu color="#ffd700" />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
