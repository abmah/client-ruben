import "./above-the-fold.css";
import CollaborationImage from "../../../../../assets/teams.svg";

import lottie from "lottie-web";
import { useRef, useEffect } from "react";

import animationData from "./teams.json";
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

    // Cleanup function to stop the animation when the component unmounts
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
    <div className="cloud-collaboration-above-the-fold-wrapper">
      <div className="cloud-collaboration-above-the-fold-container">
        <div className="cloud-collaboration-above-the-fold-left-section-wrapper">
          <div className="cloud-collaboration-above-the-fold-left-section">
            <h1 className="cloud-collaboration-above-the-fold-main-title">
              Amplify <strong> productivity and collaboration</strong> through
              Cloud Office Tools
            </h1>
            <div className="cloud-collaboration-above-the-fold-button-container">
              <button
                onClick={handleLearnMoreClick}
                className="cloud-collaboration-learn-more-button"
              >
                Learn More
              </button>
              <Link
                to="/contact"
                className="cloud-collaboration-get-in-contact-button"
              >
                Get in contact
              </Link>
            </div>
          </div>
        </div>
        <div
          className="cloud-collaboration-above-the-fold-img"
          ref={container}
          src={CollaborationImage}
          alt="collaboration"
        ></div>
      </div>
    </div>
  );
}

export default AboveTheFold;
