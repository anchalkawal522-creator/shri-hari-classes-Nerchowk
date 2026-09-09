import { useEffect, useState } from "react";
import "./courses.css";

import cbseImg from "../../assets/cbsc.jpg";
import neetImg from "../../assets/neetcou.avif";
import jeeImg from "../../assets/jee.avif";
import engImg from "../../assets/eng enter.avif";
import govtImg from "../../assets/govt.avif";
import ndaImg from "../../assets/nda.avif";
import icarImg from "../../assets/icar.avif";
import nursingImg from "../../assets/nurcing.webp";
import mnsImg from "../../assets/mns.avif";
import nestImg from "../../assets/nest.avif";
import physicsImg from "../../assets/physics.avif";
import bioImg from "../../assets/bio.avif";
import chemImg from "../../assets/cam.avif";
import jeeMainImg from "../../assets/jee main.avif";
import jeeAdvImg from "../../assets/jee adva.avif";
import hpImg from "../../assets/hp b.avif";
import neetCrashImg from "../../assets/neet crash.jpg";
import jeeCrashImg from "../../assets/jee cra.avif";
import ndaCrashImg from "../../assets/nda cra.avif";

const courseImages = {
  "cbsc.jpg": cbseImg,
  "neetcou.avif": neetImg,
  "jee.avif": jeeImg,
  "eng enter.avif": engImg,
  "govt.avif": govtImg,
  "nda.avif": ndaImg,
  "icar.avif": icarImg,
  "nurcing.webp": nursingImg,
  "mns.avif": mnsImg,
  "nest.avif": nestImg,
  "physics.avif": physicsImg,
  "bio.avif": bioImg,
  "cam.avif": chemImg,
  "jee main.avif": jeeMainImg,
  "jee adva.avif": jeeAdvImg,
  "hp b.avif": hpImg,
  "neet crash.jpg": neetCrashImg,
  "jee cra.avif": jeeCrashImg,
  "nda cra.avif": ndaCrashImg,
};

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error(err));
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "916230020555";
    const message =
      "Hello Shri Hari Classes, I want to know more about your courses.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="courses-page">
      <div className="hero-course">
        <h1>Our Courses</h1>
        <p>
          Expert Guidance • Best Faculty • Regular Tests • Doubt Sessions
        </p>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img
              src={courseImages[course.image]}
              alt={course.title}
            />

            <div className="course-content">
              <h2>{course.title}</h2>
              <p>{course.desc}</p>

              <button onClick={openWhatsApp}>
                More details on whatsapp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;