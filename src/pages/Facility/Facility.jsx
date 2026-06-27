import {
  FaChalkboardTeacher,
  FaWifi,
  FaUserGraduate,
  FaShieldAlt,
} from "react-icons/fa";
import "./facility.css";

export default function Facilities() {
const facilities = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Modren Classrooms",
    desc: "Modern classrooms equipped with smart boards, projectors, and interactive learning tools.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Quality Education",
    desc: "Comprehensive learning with a strong academic foundation and concept-based teaching.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Best Results",
    desc: "Consistent outstanding academic performance with excellent board and competitive exam results.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Personalized Attention",
    desc: "Individual guidance and regular progress tracking to help every student achieve their full potential.",
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
    desc: "24×7 CCTV surveillance and a secure campus environment for students.",
  },
];

  return (
    <section className="facility-page">
      <div className="facility-wrapper">
        <div className="facility-heading">
          <h2>Our Facilities</h2>
          <p>
            We provide a modern learning environment with excellent facilities
            to help students achieve academic excellence.
          </p>
        </div>

        <div className="facility-cards">
          {facilities.map((item, index) => (
            <div className="facility-item" key={index}>
              <div className="facility-icon">{item.icon}</div>
              <h3 className="facility-title">{item.title}</h3>
              <p className="facility-description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}