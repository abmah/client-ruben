import "./above-the-fold.css";

import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./cloud-adoption.json";
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
    <div className="cloud-adoption-above-the-fold-wrapper">
      <div className="cloud-adoption-above-the-fold-container">
        <div className="cloud-adoption-above-the-fold-left-section-wrapper">
          <div className="cloud-adoption-above-the-fold-left-section">
            <h1 className="cloud-adoption-above-the-fold-main-title">
              Modernize Your
              <br /> <strong> IT Infrastructure</strong> <br />
              with our Cloud Adoption and Managed Services
            </h1>
            <div className="cloud-adoption-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="cloud-adoption-learn-more-button"
              >
                Learn More
              </button>
              <Link
                to="/contact"
                className="cloud-adoption-get-in-contact-button"
              >
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div
          ref={container}
          className="cloud-adoption-above-the-fold-img"
          alt="adoptionstructure"
        ></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
