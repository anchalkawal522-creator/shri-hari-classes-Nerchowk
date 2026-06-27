import "./footer.css";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLocationOutline, IoCallOutline, IoGlobeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import logo from "../../assets/image.png";

function Footer() {

  const openInstagram = () => {
    window.open("https://www.instagram.com/srihariclasses/?hl=en", "_blank");
  };

  const openFacebook = () => {
    window.open("https://www.facebook.com/sriharidigitech/", "_blank");
  };
    


  const openlocation = () => {
    const url=`https://www.google.com/maps/place/Sri+Hari+Classes/@31.6073849,76.9131114,17.29z/data=!4m6!3m5!1s0x39051f73b288990b:0x341371ccdb76da52!8m2!3d31.6072814!4d76.9129998!16s%2Fg%2F11tt27f8gy?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D`;
    window.open(url,"_blank");
  }
  const makecall= ()=>{
    window.open("tel:916230020555");

  }

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" />

          <p>
            Guiding students towards success with quality education,
            discipline and dedication.
          </p>

          <div className="social-icons">
            <div className="icon" onClick={openFacebook}>
              <FaFacebookF />
            </div>

            <div className="icon" onClick={openInstagram}>
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h2>Quick Links</h2>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* COURSES */}
        <div className="footer-courses">
          <h2>Our Courses</h2>

          <ul>
            <li><Link to="/courses">CBSE Exam</Link></li>
            <li><Link to="/courses">NEET Coaching</Link></li>
            <li><Link to="/courses">JEE Coaching</Link></li>
            <li><Link to="/courses">NDA Coaching</Link></li>
            <li><Link to="/courses">Government Exam Coaching</Link></li>
          </ul>

          <Link to="/courses">
            <button>
              View All Courses <MdKeyboardArrowRight />
            </button>
          </Link>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h2>Contact Us</h2>

          <div className="contact-item" onClick={openlocation}>
            <IoLocationOutline />
            <p>2nd Floor, Ner Chowk, Himachal Pradesh 175008</p>
          </div>

          <div className="contact-item" onClick={makecall}>
            <IoCallOutline />
            <p>062300 20555</p>
          </div>

          <div className="contact-item">
            <IoGlobeOutline />
            <p>www.sriharidigitech.com</p>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2024 Sri Hari Classes. All Rights Reserved.</p>

        <div className="bottom-links">
          <Link to="/">Privacy Policy</Link>
          <span>|</span>
          <Link to="/">Terms & Conditions</Link>
        </div>
      </div>

    </footer>
  );
}

export default Footer;