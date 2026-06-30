import "./nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/image.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = "916230020555";
    const message =
      "Hello Shri Hari Classes, I want to know more about your courses.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-all">

          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          {/* Toggle Button */}
          <div className="toggle-btn" onClick={toggleMenu}>
            ☰
          </div>

          <div className={`menu ${menuOpen ? "active" : ""}`}>
            <ul>
              <li onClick={closeMenu}><Link to="/">Home</Link></li>
              <li onClick={closeMenu}><Link to="/about">About</Link></li>
              <li onClick={closeMenu}><Link to="/courses">Courses</Link></li>
              <li onClick={closeMenu}><Link to="/facilities">Facilities</Link></li>
              <li onClick={closeMenu}><Link to="/gallery">Gallery</Link></li>
              <li onClick={closeMenu}><Link to="/contact">Contact</Link></li>

              <button onClick={openWhatsApp}>
                WhatsApp
              </button>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;