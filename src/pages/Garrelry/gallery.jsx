import "./gallery.css";

import g2 from "../../assets/g2.webp";
import g4 from "../../assets/g4.webp";
import g5 from "../../assets/g5.webp";
import gallery from "../../assets/gallery.webp";
import gallery1 from "../../assets/gallery1.webp";

function Gallery() {
  const images = [g2, g4, g5, gallery, gallery1];

  return (
    <div className="gallery-page">
      <h1>Our Achievers & Gallery</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;