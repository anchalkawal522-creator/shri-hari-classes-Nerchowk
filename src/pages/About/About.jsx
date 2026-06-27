import "./About.css";
import { FaBookOpen, FaUsers, FaAward, FaBullseye } from "react-icons/fa";

function About() {
  return (
    <div className="about-page">

      <div className="about-banner">

        <span>ABOUT US</span>

        <h1>Shaping Futures Through Quality Education</h1>

        <p>
          Shri Hari Classes is committed to providing quality education,
          experienced guidance and a positive learning environment that
          helps students achieve excellence in academics and competitive exams.
        </p>

      </div>

      <div className="feature-section">

        <div className="feature-card">
          <FaBookOpen />
          <h3>Concept Based Learning</h3>
          <p>
            Strong fundamentals and practical understanding for long-term success.
          </p>
        </div>

        <div className="feature-card">
          <FaUsers />
          <h3>Expert Faculty</h3>
          <p>
            Dedicated teachers with years of experience and guidance.
          </p>
        </div>

        <div className="feature-card">
          <FaBullseye />
          <h3>Personal Attention</h3>
          <p>
            Regular tests and doubt sessions to track progress.
          </p>
        </div>

        <div className="feature-card">
          <FaAward />
          <h3>Excellent Results</h3>
          <p>
            Helping students achieve their academic and career goals.
          </p>
        </div>

      </div>

      <div className="stats-section">

        <div className="stat-box">
          <h1>1000+</h1>
          <p>Students Guided</p>
        </div>

        <div className="stat-box">
          <h1>95%</h1>
          <p>Success Rate</p>
        </div>

        <div className="stat-box">
          <h1>15+</h1>
          <p>Expert Faculty</p>
        </div>

        <div className="stat-box">
          <h1>10+</h1>
          <p>Years Experience</p>
        </div>

      </div>

    </div>
  );
}

export default About;