import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ scrollToSection }) {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <nav className="nav">
        <a href="/" className="logo">
          My Logo
        </a>
        <ul className={isMobile ? "nav-links mobile" : "nav-links"}>
          <li>
            <button
              onClick={() => {
                scrollToSection("home");
                toggleMenu();
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("projects");
                toggleMenu();
              }}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("expreience");
                toggleMenu();
              }}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("contact");
                toggleMenu();
              }}
            >
              Contact
            </button>
          </li>
        </ul>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
