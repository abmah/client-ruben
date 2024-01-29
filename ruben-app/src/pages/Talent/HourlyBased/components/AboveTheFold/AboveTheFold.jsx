import "./above-the-fold.css";
import Hourly from "../../../../../assets/hourly-logo.svg";
import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./hourly.json";
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
    <div className="talent-hourly-above-the-fold-wrapper">
      <div className="talent-hourly-above-the-fold-container">
        <div className="talent-hourly-above-the-fold-left-section-wrapper">
          <div className="talent-hourly-above-the-fold-left-section">
            <h1 className="talent-hourly-above-the-fold-main-title">
              Modernize You <strong>hourly Experts</strong> to Scale and
              Innovate
            </h1>
            <div className="talent-hourly-above-the-fold-button-container">
              <button className="talent-hourly-learn-more-button">
                Learn More
              </button>
              <button className="talent-hourly-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <div
          ref={container}
          className="talent-hourly-above-the-fold-img"
          src={Hourly}
          alt="hourly"
        ></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
