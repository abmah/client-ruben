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
    <div className="tech-data-above-the-fold-wrapper">
      <div className="tech-data-above-the-fold-container">
        <div className="tech-data-above-the-fold-left-section-wrapper">
          <div className="tech-data-above-the-fold-left-section">
            <h1 className="tech-data-above-the-fold-main-title">
              Modernize Your <strong>Data Infrastructure </strong> through Cloud
              Adoption and Migration
            </h1>
            <div className="tech-data-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="tech-data-learn-more-button"
              >
                Learn More
              </button>
              <Link to="/contact" className="tech-data-get-in-contact-button">
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div className="tech-data-above-the-fold-img-container">
          <img
            className="tech-data-above-the-fold-main-image"
            src={OpenAcademy}
            alt="open-data"
          />
          <img className="tech-data-shape" src={SquareShape} alt="shape" />
          <img
            className="tech-data-shape-mobile"
            src={ShapeMobile}
            alt="shape"
          />
          {/* <img className="tech-data-shape-two" src={ShapeTwo} alt="shape" /> */}
        </div>
      </div>
    </div>
  );
}

export default AboveTheFold;
