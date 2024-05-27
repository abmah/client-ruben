import "./above-the-fold.css";
import OpenAcademy from "./young-man-listening-music-study-session.jpg";
import SquareShape from "./shape.svg";
import ShapeMobile from "./shape-mobile.svg";

import { Link } from "react-router-dom";
function AboveTheFold() {
  const handleLearnMoreClick = () => {
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  };
  return (
    <div className="talent-digital-above-the-fold-wrapper">
      <div className="talent-digital-above-the-fold-container">
        <div className="talent-digital-above-the-fold-left-section-wrapper">
          <div className="talent-digital-above-the-fold-left-section">
            <h1 className="talent-digital-above-the-fold-main-title">
              Pre-vetted interim <strong> Digital Expert</strong> Contractors in
              start-stop model
            </h1>
            <div className="talent-digital-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="talent-digital-learn-more-button"
              >
                Learn More
              </button>
              <Link
                to="/contact"
                className="talent-digital-get-in-contact-button"
              >
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div className="talent-digital-above-the-fold-img-container">
          <img
            className="talent-digital-above-the-fold-main-image"
            src={OpenAcademy}
            alt="open-digital"
          />
          <img className="talent-digital-shape" src={SquareShape} alt="shape" />
          <img
            className="talent-digital-shape-mobile"
            src={ShapeMobile}
            alt="shape"
          />
        </div>
      </div>
    </div>
  );
}

export default AboveTheFold;
