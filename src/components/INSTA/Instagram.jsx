import "./instagram.css";
import { FaSquareInstagram } from "react-icons/fa6";

function Instagram() {

  const openInstagram = () => {
    window.open(
      "https://www.instagram.com/srihariclasses/?hl=en",
      "_blank"
    );
  };

  return (
    <div className="instagram-section">

      <div className="heading-instagram">
        <h1>Follow Us On Instagram</h1>
        <p>Latest updates from Shri Hari Classes</p>
      </div>

      <div className="instagram-grid">

        <div className="insta-card" onClick={openInstagram}>
          <img src="/public/g5.webp" alt="" />
                    <div className="icon-insta">
            <FaSquareInstagram  />

          </div>
        </div>

        <div className="insta-card" onClick={openInstagram}>
          <img src="/g2.webp" alt="" />
                    <div className="icon-insta">
            <FaSquareInstagram  />

          </div>
        </div>
                <div className="insta-card" onClick={openInstagram}>
          <img src="/public/g4.webp" alt="" />
          <div className="icon-insta">
            <FaSquareInstagram  />

          </div>
        </div>

      </div>

    </div>
  );
}

export default Instagram;