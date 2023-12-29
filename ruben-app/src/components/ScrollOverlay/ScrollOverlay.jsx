import { useState, useEffect } from "react";
import "./scroll-overlay.css";

function ScrollOverlay() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Check if the user has scrolled more than 300 pixels
      if (scrollY > 1600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div className={`scroll-overlay-wrapper ${isScrolled ? "hidden" : ""}`}>
      <div className="scroll-overlay-container">
        <div className={`scroll-overlay ${isScrolled ? "hidden" : ""}`}>
          <p className="scroll-overlay-text">SCROLL</p>
          <div className="scroll-overlay-line"></div>
        </div>
      </div>
    </div>
  );
}

export default ScrollOverlay;
