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
    <div className="tech-collab-above-the-fold-wrapper">
      <div className="tech-collab-above-the-fold-container">
        <div className="tech-collab-above-the-fold-left-section-wrapper">
          <div className="tech-collab-above-the-fold-left-section">
            <h1 className="tech-collab-above-the-fold-main-title">
              Amplify<strong> productivity and collaboration</strong> through
              Cloud Office Tools
            </h1>
            <div className="tech-collab-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="tech-collab-learn-more-button"
              >
                Learn More
              </button>
              <Link to="/contact" className="tech-collab-get-in-contact-button">
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div className="tech-collab-above-the-fold-img-container">
          <img
            className="tech-collab-above-the-fold-main-image"
            src={OpenAcademy}
            alt="open-collab"
          />
          <img className="tech-collab-shape" src={SquareShape} alt="shape" />
          <img
            className="tech-collab-shape-mobile"
            src={ShapeMobile}
            alt="shape"
          />
          {/* <img className="tech-collab-shape-two" src={ShapeTwo} alt="shape" /> */}
        </div>
      </div>
    </div>
  );
}

export default AboveTheFold;
