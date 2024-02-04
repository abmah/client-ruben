import "./banner.css";

import YellowArrows from "./yellow-arrows.svg";
import GrayArrows from "./gray-arrows.svg";
import WhiteArrows from "./white-arrows.svg";
import Circles from "./circle.svg";
function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="banner-container">
        <div className="banner-left-section">
          Join companies like Google, BAT, Bain Vector, Unilever, Costa and many
          more who trusted our services.
        </div>
        <div className="banner-middle-section">
          <div className="middle-section-background"></div>
          <p>
            We offer one-stop-shop experience for enterprise transformation,
            accelerating go-to-market in 3 critical areas for transformation
            projects: Talent, Technology, Skills.
          </p>
          <img className="banner-circles" src={Circles} alt="circles" />
        </div>
        <div className="banner-right-section">
          <img src={YellowArrows} alt="arrow" />
          <img src={GrayArrows} alt="arrow" />
          <img src={WhiteArrows} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
