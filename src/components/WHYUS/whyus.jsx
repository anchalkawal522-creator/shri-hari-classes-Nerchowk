import "./why.css";
import { Link } from "react-router-dom";

import g2 from "../../assets/g2.webp";
import boy from "../../assets/boy.png";
import chemistryStudent from "../../assets/chemisty student.png";

import g4 from "../../assets/g4.webp";
import g5 from "../../assets/g5.webp";
import gallery from "../../assets/gallery.webp";

function Whyus() {

  const galleryImages = [
    g2,
    g4,
    g5,
    gallery,
  ];

  return (
    <section className="results-testimonial-gallery">

      {/* RESULTS */}
      <div className="card results-card">
        <h2>Our Top Results</h2>

        <div className="results-container">

          <div className="student-box">
            <img src={g2} alt="result" />
            <div>
              <h4>SR 21st</h4>
              <p>MBBS</p>
              <span>Tanisha kashav</span>
            </div>
          </div>

          <div className="student-box">
            <img src={boy} alt="result" />
            <div>
              <h4>IGMC Shimla</h4>
              <p>NEET 2025</p>
              <span>Rohit Verma</span>
            </div>
          </div>

          <div className="student-box">
            <img src={chemistryStudent} alt="result" />
            <div>
              <h4>Marks: 485/500</h4>
              <p>HP BOARD</p>
              <span>Megha Thakur</span>
            </div>
          </div>

        </div>

        <a href="/gallery" className="view-btn">
          View More on Gallery
        </a>
      </div>

      {/* TESTIMONIAL */}
      <div className="card testimonial-card">
        <h2>What Students Say</h2>
        <div className="quote">❝</div>

        <p className="review">
          Shri Hari Classes has been a game changer for me.
          The teachers are very supportive and the study material is excellent.
        </p>

        <div className="stars">★★★★★</div>

        <h4>Tanisha kasshav</h4>
        <span>NEET 2025 Qualified</span>
      </div>

      {/* GALLERY */}
      <div className="card gallery-car">

        <div className="gallery-top">
          <h2>Gallery</h2>
          <Link to="/gallery">View All →</Link>
        </div>

        <div className="gallery">
          {galleryImages.map((img, index) => (
            <img key={index} src={img} alt={`gallery-${index}`} />
          ))}
        </div>

      </div>

    </section>
  );
}

export default Whyus;