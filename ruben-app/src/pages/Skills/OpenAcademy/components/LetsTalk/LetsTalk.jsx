import "./lets-talk.css";
import LetsTalkLogo from "../../../../../assets/lets-talk-logo.svg";
import TopRightArrow from "../../../../../assets/top-right-arrow.svg";

function LetsTalk() {
  return (
    <div className="skills-academy-lets-talk-section-wrapper">
      <div className="skills-academy-lets-talk-section-container">
        <img
          src={LetsTalkLogo}
          alt="lets-talk"
          className="skills-academy-lets-talk-section-image"
        ></img>
        <h1 className="skills-academy-lets-talk-section-title">Let’s Talk!</h1>
        <p className="skills-academy-lets-talk-section-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exerc.
        </p>
        <button className="skills-academy-lets-talk-section-button">
          <p>CONTACT US</p>
          <div className="skills-academy-contact-us-button-img">
            <img src={TopRightArrow} alt="top-right-arrow" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default LetsTalk;
