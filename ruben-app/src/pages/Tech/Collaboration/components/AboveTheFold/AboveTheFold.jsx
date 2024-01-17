import "./above-the-fold.css";
import CollaborationImage from "../../../../../assets/teams.svg";

import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./teams.json";

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
    <div className="tech-collaboration-above-the-fold-wrapper">
      <div className="tech-collaboration-above-the-fold-container">
        <div className="tech-collaboration-above-the-fold-left-section-wrapper">
          <div className="tech-collaboration-above-the-fold-left-section">
            <h1 className="tech-collaboration-above-the-fold-main-title">
              Modernize You <strong>Infrastructure</strong> to Scale and
              Innovate
            </h1>
            <div className="tech-collaboration-above-the-fold-button-container">
              <button className="tech-collaboration-learn-more-button">
                Learn More
              </button>
              <button className="tech-collaboration-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <div
          className="tech-collaboration-above-the-fold-img"
          ref={container}
          src={CollaborationImage}
          alt="collaboration"
        ></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
