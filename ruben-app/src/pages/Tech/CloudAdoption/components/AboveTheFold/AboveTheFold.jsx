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
    <div className="tech-cloud-above-the-fold-wrapper">
      <div className="tech-cloud-above-the-fold-container">
        <div className="tech-cloud-above-the-fold-left-section-wrapper">
          <div className="tech-cloud-above-the-fold-left-section">
            <h1 className="tech-cloud-above-the-fold-main-title">
              Modernize Your <strong> IT Infrastructure</strong> with our Cloud
              Adoption and Managed Services
            </h1>
            <div className="tech-cloud-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="tech-cloud-learn-more-button"
              >
                Learn More
              </button>
              <Link to="/contact" className="tech-cloud-get-in-contact-button">
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div className="tech-cloud-above-the-fold-img-container">
          <img
            className="tech-cloud-above-the-fold-main-image"
            src={OpenAcademy}
            alt="open-cloud"
          />
          <img className="tech-cloud-shape" src={SquareShape} alt="shape" />
          <img
            className="tech-cloud-shape-mobile"
            src={ShapeMobile}
            alt="shape"
          />
          {/* <img className="tech-cloud-shape-two" src={ShapeTwo} alt="shape" /> */}
        </div>
      </div>
    </div>
  );
}

export default AboveTheFold;
