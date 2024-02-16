import "./above-the-fold.css";
import Operations from "../../../../../assets/operations-logo.svg";
import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./operations.json";
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
    <div className="talent-operations-above-the-fold-wrapper">
      <div className="talent-operations-above-the-fold-container">
        <div className="talent-operations-above-the-fold-left-section-wrapper">
          <div className="talent-operations-above-the-fold-left-section">
            <h1 className="talent-operations-above-the-fold-main-title">
              Pre-vetted <strong> Operations Consultants</strong> in start-stop
              model
            </h1>
            <div className="talent-operations-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="talent-operations-learn-more-button"
              >
                Learn More
              </button>
              <Link
                to="/contact"
                className="talent-operations-get-in-contact-button"
              >
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div
          ref={container}
          className="talent-operations-above-the-fold-img"
          src={Operations}
          alt="operations-future"
        ></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
