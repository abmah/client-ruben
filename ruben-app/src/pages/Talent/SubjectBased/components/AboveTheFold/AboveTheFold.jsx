import "./above-the-fold.css";

import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./subject.json";
import { Link } from "react-router-dom";
function AboveTheFold() {
  const container = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  const handleLearnMoreClick = () => {
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="talent-subject-above-the-fold-wrapper">
      <div className="talent-subject-above-the-fold-container">
        <div className="talent-subject-above-the-fold-left-section-wrapper">
          <div className="talent-subject-above-the-fold-left-section">
            <h1 className="talent-subject-above-the-fold-main-title">
              Highly specialized <strong> Subject Matter Experts</strong> for
              hourly based consultancy
            </h1>
            <div className="talent-subject-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="talent-subject-learn-more-button"
              >
                Learn More
              </button>
              <Link
                to="/contact"
                className="talent-subject-get-in-contact-button"
              >
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div
          ref={container}
          className="talent-subject-above-the-fold-img"
          alt="subject"
        ></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
