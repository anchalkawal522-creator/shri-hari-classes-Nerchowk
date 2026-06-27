import "./footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoGlobeOutline,
} from "react-icons/io5";

import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import logo from "../../assets/image.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Sri Hari Classes Logo" />

          <p>
            Guiding students towards success with quality education,
            discipline and dedication.
          </p>

          <div className="social-icons">
            <div className="icon"><FaFacebookF /></div>
            <div className="icon"><FaInstagram /></div>
            <div className="icon"><FaYoutube /></div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li className="active">Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>Results</li>
            <li>Gallery</li>
            <li>Reviews</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Courses */}
        <div className="footer-courses">
          <h2>Our Courses</h2>

          <ul>
            <li>CBSE Exam</li>
            <li>NEET Coaching</li>
            <li>JEE Coaching</li>
            <li>NDA Coaching</li>
            <li>Government Exam Coaching</li>
          </ul>

          <Link to="/courses">
            <button>
              View All Courses
              <MdKeyboardArrowRight />
            </button>
          </Link>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h2>Contact Us</h2>

          <div className="contact-item">
            <IoLocationOutline />
            <p>2nd Floor, near PNB, Ner Chowk, Himachal Pradesh 175008</p>
          </div>

          <div className="contact-item">
            <IoCallOutline />
            <p>062300 20555</p>
          </div>

          <div className="contact-item">
            <IoMailOutline />
            <p>srihariclasses@gmail.com</p>
          </div>

          <div className="contact-item">
            <IoGlobeOutline />
            <p>www.sriharidigitech.com</p>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 Sri Hari Classes. All Rights Reserved.</p>

        <div className="bottom-links">
          <p>Privacy Policy</p>
          <span>|</span>
          <p>Terms & Conditions</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;