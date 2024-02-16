import "./above-the-fold.css";

import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./strategy-hero-img.json";
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
    <div className="talent-strategy-above-the-fold-wrapper">
      <div className="talent-strategy-above-the-fold-container">
        <div className="talent-strategy-above-the-fold-left-section-wrapper">
          <div className="talent-strategy-above-the-fold-left-section">
            <h1 className="talent-strategy-above-the-fold-main-title">
              Pre-vetted <strong>Strategy Consultant</strong> Contractors in
              start-stop model
            </h1>
            <div className="talent-strategy-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="talent-strategy-learn-more-button"
              >
                Learn More
              </button>
              <Link
                to="/contact"
                className="talent-strategy-get-in-contact-button"
              >
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div
          ref={container}
          className="talent-strategy-above-the-fold-img"
          alt="strategy"
        ></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
