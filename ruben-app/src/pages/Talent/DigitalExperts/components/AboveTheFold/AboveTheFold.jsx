import "./above-the-fold.css";
import DigitalFuture from "../../../../../assets/digital-experts-logo.svg";
import lottie from "lottie-web";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import animationData from "./digital-hero-img.json";

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

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      animation.destroy();
    };
  }, []); // Empty dependency array to run the effect only once

  const handleLearnMoreClick = () => {
    // console.log("clicked");
    window.scrollBy({
      top: 400,
      behavior: "smooth", // Optionally, you can change this to "auto" for instant scrolling
    });
  };

  return (
    <div className="talent-digital-above-the-fold-wrapper">
      <div className="talent-digital-above-the-fold-container">
        <div className="talent-digital-above-the-fold-left-section-wrapper">
          <div className="talent-digital-above-the-fold-left-section">
            <h1 className="talent-digital-above-the-fold-main-title">
              Pre-vetted interim <strong>Digital Expert</strong> Contractors in
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
        <div
          ref={container}
          className="talent-digital-above-the-fold-img"
          src={DigitalFuture}
          alt="digital-future"
        ></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
