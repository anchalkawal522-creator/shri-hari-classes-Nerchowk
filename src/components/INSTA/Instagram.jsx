import "./instagram.css";
import { FaSquareInstagram } from "react-icons/fa6";

import g5 from "../../assets/g5.webp";
import g2 from "../../assets/g2.webp";
import g4 from "../../assets/g4.webp";

function Instagram() {

  const openInstagram = () => {
    window.open(
      "https://www.instagram.com/srihariclasses/?hl=en",
      "_blank"
    );
  };

  const images = [g5, g2, g4];

  return (
    <div className="instagram-section">

      <div className="heading-instagram">
        <h1>Follow Us On Instagram</h1>
        <p>Latest updates from Sri Hari Classes</p>
      </div>

      <div className="instagram-grid">

        {images.map((img, index) => (
          <div className="insta-card" key={index} onClick={openInstagram}>
            <img src={img} alt={`insta-${index}`} />
            <div className="icon-insta">
              <FaSquareInstagram />
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Instagram;