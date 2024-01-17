import "./above-the-fold.css";
import Infrastructure from "../../../../../assets/infrastructure.svg";

import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./infrastructure.json";

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
    <div className="tech-infra-above-the-fold-wrapper">
      <div className="tech-infra-above-the-fold-container">
        <div className="tech-infra-above-the-fold-left-section-wrapper">
          <div className="tech-infra-above-the-fold-left-section">
            <h1 className="tech-infra-above-the-fold-main-title">
              Modernize You <strong>Infrastructure</strong> to Scale and
              Innovate
            </h1>
            <div className="tech-infra-above-the-fold-button-container">
              <button className="tech-infra-learn-more-button">
                Learn More
              </button>
              <button className="tech-infra-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <div
          ref={container}
          className="tech-infra-above-the-fold-img"
          src={Infrastructure}
          alt="infrastructure"
        ></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
