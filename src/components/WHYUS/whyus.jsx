import "./why.css";
import { Link } from "react-router-dom";
function Whyus() {

  return (
    <section className="results-testimonial-gallery">
      <div className="card results-card">

        <h2> Our Top Results</h2>

        <div className="results-container">

          <div className="student-box">
            <img src="/public/g2.webp" alt="" />

            <div>
              <h4>SR 21st</h4>
              <p>MBBS</p>

              <span>Tanisha kashav</span>
            </div>
          </div>

          <div className="student-box">
            <img src="/public/boy.png" alt="" />

            <div>
              <h4>IGMC Shimla</h4>
              <p>NEET 2025</p>

              <span>Rohit Verma</span>
            </div>
          </div>

          <div className="student-box">
            <img src="/public/chemisty student.png" alt="" />

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

      <div className="card testimonial-card">

        <h2>What Students Say</h2>
            <div className="quote">❝</div>

        <p className="review">
          Shri Hari Classes has been a game changer for me.
          The teachers are very supportive and the study
          material is excellent.
        </p>

        <div className="stars">★★★★★</div>

        <h4>Tanisha kasshav</h4>

        <span>NEET 2025 Qualified</span>

      </div>
        <div className="card gallery-car">
           <div className="gallery-top">

          <h2>Gallery</h2>

          <Link to="/gallery">View All → </Link>

        </div>

        <div className="gallery">

       <img src="/public/g2.webp" alt="" />
              <img src="/public/g4.webp" alt="" />
               <img src="/public/g5.webp" alt="" />
              <img src="/public/gallery.webp" alt="" />
              <img src="/public/g4.webp" alt="" />
              <img src="/public/gallery.webp" alt="" />
              


        </div>

      </div>

    </section>
  );
}

export default Whyus;