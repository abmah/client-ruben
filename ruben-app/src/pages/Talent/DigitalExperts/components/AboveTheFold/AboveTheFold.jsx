import "./above-the-fold.css";
import DigitalFuture from "../../../../../assets/digital-experts-logo.svg";
import lottie from "lottie-web";
import { useRef, useEffect } from "react";

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
  return (
    <div className="talent-digital-above-the-fold-wrapper">
      <div className="talent-digital-above-the-fold-container">
        <div className="talent-digital-above-the-fold-left-section-wrapper">
          <div className="talent-digital-above-the-fold-left-section">
            <h1 className="talent-digital-above-the-fold-main-title">
              Pre-vetted interim <strong>Digital Experts</strong> Contractors in
              start-stop model
            </h1>
            <div className="talent-digital-above-the-fold-button-container">
              <button className="talent-digital-learn-more-button">
                Learn More
              </button>
              <button className="talent-digital-get-in-contact-button">
                Get in contact
              </button>
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
