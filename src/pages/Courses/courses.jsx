import "./courses.css";
import { Link } from "react-router-dom";

function Courses() {
const courses = [
  {
    title: "CBSE Boards",
    desc: "Class 9th - 12th Preparation",
    img: "/src/assets/cbsc.jpg",
  },
  {
    title: "NEET",
    desc: "Medical Entrance Preparation",
    img: "/src/assets/neetcou.avif",
  },
  {
    title: "JEE",
    desc: "Engineering Entrance Preparation",
    img: "/src/assets/jee.avif",
  },
  {
    title: "Engineering Entrance",
    desc: "Advanced Engineering Coaching",
    img: "/src/assets/eng enter.avif",
  },
  {
    title: "Government Exams",
    desc: "SSC, Banking & Other Exams",
    img: "/src/assets/govt.avif",
  },
  {
    title: "NDA",
    desc: "National Defence Academy",
    img: "/src/assets/nda.avif",
  },
  {
    title: "ICAR",
    desc: "Agriculture Entrance Preparation",
    img: "/src/assets/icar.avif",
  },
  {
    title: "Nursing",
    desc: "B.Sc Nursing Entrance Coaching",
    img: "/src/assets/nurcing.webp",
  },
  {
    title: "MNS",
    desc: "Military Nursing Services",
    img: "/src/assets/mns.avif",
  },
  {
    title: "IISER / NEST",
    desc: "Science Entrance Preparation",
    img: "/src/assets/nest.avif",
  },
  {
    title: "Physics",
    desc: "Physics Olympiad & Board Exams",
    img: "/src/assets/physics.avif",
  },
  {
    title: "Biology",
    desc: "Biology Entrance & Board Exams",
    img: "/src/assets/bio.avif",
  },
  {
    title: "Chemistry",
    desc: "Chemistry Entrance & Board Exams",
    img: "/src/assets/cam.avif",
  },
  {
    title: "JEE Main",
    desc: "Complete JEE Main Preparation",
    img: "/src/assets/jee main.avif",
  },
  {
    title: "JEE Advanced",
    desc: "Advanced Level Preparation",
    img: "/src/assets/jee adva.avif",
  },
  {
    title: "HP Board",
    desc: "HPBOSE Classes & Preparation",
    img: "/src/assets/hp b.avif",
  },
  {
    title: "NEET Crash Course",
    desc: "Quick Revision & Test Series",
    img: "/src/assets/neet crash.jpg",
  },
  {
    title: "JEE Crash Course",
    desc: "Fast-track JEE Preparation",
    img: "/src/assets/jee cra.avif",
  },
  {
    title: "NDA Crash Course",
    desc: "Special NDA Revision Program",
    img: "/src/assets/nda cra.avif",
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
        {courses.map((course, index) => (
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