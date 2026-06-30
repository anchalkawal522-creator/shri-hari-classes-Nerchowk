import "./nav.css";
import { Link } from "react-router-dom";

import logo from "../../assets/image.png";

function Navbar() {

  const openWhatsApp = () => {
    const phoneNumber = "916230020555";
    const message =
      "Hello Shri Hari Classes, I want to know more about your courses.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-all">

          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>

              <button
                onClick={openWhatsApp}
                style={{
                  background: "#25D366",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
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