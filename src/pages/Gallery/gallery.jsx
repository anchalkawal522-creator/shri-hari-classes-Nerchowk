import "./gallery.css";
import g11 from "../../assets/g11.webp"
import g10 from "../../assets/g10.webp"
import g6 from "../../assets/g6.webp"
import g9 from "../../assets/g9.webp"
import g8 from "../../assets/g8.webp"
import g2 from "../../assets/g2.webp";
import g7 from "../../assets/g7.webp";
import g4 from "../../assets/g4.webp";
import g5 from "../../assets/g5.webp";
import gallery from "../../assets/gallery.webp";
import gallery1 from "../../assets/gallery1.webp";
import g12 from "../../assets/g12.png"

function Gallery() {
  const images = [g2, g4, g5, gallery, gallery1, g6, g7, g8, g9,g10,g11, g12 ];

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