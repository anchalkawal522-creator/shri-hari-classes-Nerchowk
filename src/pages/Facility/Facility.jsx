import {
  FaChalkboardTeacher,
  FaDesktop,
  FaWifi,
  FaUserGraduate,
  FaShieldAlt,
} from "react-icons/fa";
import "./facility.css";
export default function Facilities() {
  const facilities = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Smart Classrooms",
      desc: "Modern classrooms equipped with smart boards, projectors, and interactive learning tools.",
    },

    {
      icon: <FaWifi />,
      title: "Free Wi-Fi",
      desc: "High-speed Wi-Fi available throughout the campus for students and staff.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Experienced Faculty",
      desc: "Highly qualified and experienced teachers dedicated to student success.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Campus",
      desc: "24×7 CCTV surveillance and secure campus environment for students.",
    },

  ];

  return (
    <section className="facilities-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Facilities</h2>
          <p>
            We provide a modern learning environment with excellent facilities
            to help students achieve academic excellence.
          </p>
        </div>

        <div className="facility-grid">
          {facilities.map((item, index) => (
            <div className="facility-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}