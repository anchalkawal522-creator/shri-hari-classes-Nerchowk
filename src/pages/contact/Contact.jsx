import { useState } from "react";
import "./contact.css";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoTimeOutline,
} from "react-icons/io5";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxRV5kQm3Iuj9JgFEcViY99_dywuJgNS9S0dtBjHLt5WsWsE73PK4uOhVXByb_QMERF/exec";

  const openWhatsApp = () => {
    const phoneNumber = "916230020555";
    const text =
      "Hello Shri Hari Classes, I want to know more about your courses.";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const openLocation = () => {
    window.open(
      "https://www.google.com/maps/search/shri+hari+classes",
      "_blank"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      name,
      phone,
      email,
      course,
      message,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      alert("Enquiry Submitted Successfully!");

      setName("");
      setPhone("");
      setEmail("");
      setCourse("");
      setMessage("");
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-heading">
          <h1>Contact Us</h1>
          <p>
            Have questions? Fill out the form and our team will contact you
            shortly.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Left Side */}
          <div className="contact-info">
            <h2>Shri Hari Classes</h2>

            <div className="info-box">
              <IoLocationOutline className="icon" />
              <div>
                <h4>Address</h4>
                <p>
                  2nd Floor, Near PNB,
                  <br />
                  Ner Chowk, Mandi,
                  <br />
                  Himachal Pradesh - 175008
                </p>
              </div>
            </div>

            <div className="info-box">
              <IoCallOutline className="icon" />
              <div>
                <h4>Phone</h4>
                <p>062300 20555</p>
              </div>
            </div>

            <div className="info-box">
              <IoMailOutline className="icon" />
              <div>
                <h4>Email</h4>
                <p>info@shrihariclasses.com</p>
              </div>
            </div>

            <div className="info-box">
              <IoTimeOutline className="icon" />
              <div>
                <h4>Working Hours</h4>
                <p>Monday - Saturday</p>
                <p>9:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="contact-buttons">
              <button onClick={openLocation}>View Location</button>
              <button onClick={openWhatsApp}>WhatsApp</button>
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-form">
            <h2>Enquiry Form</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                <option value="">Select Course</option>
                <option>CBSE Boards</option>
                <option>NEET</option>
                <option>JEE</option>
                <option>Engineering Entrance</option>
                <option>Government Exams</option>
                <option>NDA</option>
                <option>ICAR</option>
                <option>Nursing</option>
                <option>MNS</option>
                <option>IISER / NEST</option>
                <option>Physics</option>
                <option>Biology</option>
                <option>Chemistry</option>
                <option>JEE Main</option>
                <option>JEE Advanced</option>
                <option>HP Board</option>
                <option>NEET Crash Course</option>
                <option>JEE Crash Course</option>
                <option>NDA Crash Course</option>
              </select>

              <textarea
                rows="5"
                placeholder="Write your message (Optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;