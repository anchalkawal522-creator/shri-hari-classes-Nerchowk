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
function Courses() {

const Courses = [
  {
    title: "CBSE Boards",
    desc: "Class 9th - 12th Preparation",
    img: cbseImg,
  },
  {
    title: "NEET",
    desc: "Medical Entrance Preparation",
    img: neetImg,
  },
  {
    title: "JEE",
    desc: "Engineering Entrance Preparation",
    img: jeeImg,
  },
  {
    title: "Engineering Entrance",
    desc: "Advanced Engineering Coaching",
    img: engImg,
  },
  {
    title: "Government Exams",
    desc: "SSC, Banking & Other Exams",
    img: govtImg,
  },
  {
    title: "NDA",
    desc: "National Defence Academy",
    img: ndaImg,
  },
  {
    title: "ICAR",
    desc: "Agriculture Entrance Preparation",
    img: icarImg,
  },
  {
    title: "Nursing",
    desc: "B.Sc Nursing Entrance Coaching",
    img: nursingImg,
  },
  {
    title: "MNS",
    desc: "Military Nursing Services",
    img: mnsImg,
  },
  {
    title: "IISER / NEST",
    desc: "Science Entrance Preparation",
    img: nestImg,
  },
  {
    title: "Physics",
    desc: "Physics Olympiad & Board Exams",
    img: physicsImg,
  },
  {
    title: "Biology",
    desc: "Biology Entrance & Board Exams",
    img: bioImg,
  },
  {
    title: "Chemistry",
    desc: "Chemistry Entrance & Board Exams",
    img: chemImg,
  },
  {
    title: "JEE Main",
    desc: "Complete JEE Main Preparation",
    img: jeeMainImg,
  },
  {
    title: "JEE Advanced",
    desc: "Advanced Level Preparation",
    img: jeeAdvImg,
  },
  {
    title: "HP Board",
    desc: "HPBOSE Classes & Preparation",
    img: hpImg,
  },
  {
    title: "NEET Crash Course",
    desc: "Quick Revision & Test Series",
    img: neetCrashImg,
  },
  {
    title: "JEE Crash Course",
    desc: "Fast-track JEE Preparation",
    img: jeeCrashImg,
  },
  {
    title: "NDA Crash Course",
    desc: "Special NDA Revision Program",
    img: ndaCrashImg,
  },
];
  const openWhatsApp = () => {
    const phoneNumber = "916230020555";
    const message =
      "Hello Shri Hari Classes, I want to know more about your courses.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
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
        {Courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.img} alt="" />

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