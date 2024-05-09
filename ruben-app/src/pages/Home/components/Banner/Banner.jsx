import "./banner.css";

import Star from "./star.svg";
import Cloud from "./cloud.svg";
import light from "./light.svg";
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
          <div className="middle-section-background-one"></div>
          <div className="middle-section-background-two"></div>

          <p>
            <span className="banner-middle-section-header">What we do</span>
            <br />
            We are a one-stop-shop for enterprise agility, helping to accelerate
            the go-to-market in 3 critical transformation areas:
            <br /> Talent, Technology, Skills.
          </p>
        </div>
        <div className="banner-right-section">
          <img
            src={Star}
            alt="star"
            className="banner-star banner-small-image"
          />
          <img
            src={Cloud}
            alt="cloud"
            className="banner-cloud banner-small-image"
          />
          <img
            src={light}
            alt="light"
            className="banner-light banner-small-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
