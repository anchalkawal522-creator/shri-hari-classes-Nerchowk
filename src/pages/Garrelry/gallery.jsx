import "./gallery.css";

function Gallery() {
  const images = [
    "../../../public/g2.webp",
    "../../../public/g4.webp",
    "../../../public/g5.webp",
    "../../../public/gallery.webp",
    "../../../public/g4.webp",
    "../../../public/gallery1.webp",
  ];

  return (
    <div className="gallery-page">
      <h1>Our Achievers & Gallery</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;