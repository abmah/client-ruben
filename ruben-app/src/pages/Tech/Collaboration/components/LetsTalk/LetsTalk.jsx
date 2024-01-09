import "./lets-talk.css";
import LetsTalkLogo from "../../../../../assets/lets-talk-logo.svg";
import TopRightArrow from "../../../../../assets/top-right-arrow.svg";

function LetsTalk() {
  return (
    <div className="tech-collaboration-lets-talk-section-wrapper">
      <div className="tech-collaboration-lets-talk-section-container">
        <img
          src={LetsTalkLogo}
          alt="lets-talk"
          className="tech-collaboration-lets-talk-section-image"
        ></img>
        <h1 className="tech-collaboration-lets-talk-section-title">
          Let’s Talk!
        </h1>
        <p className="tech-collaboration-lets-talk-section-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exerc.
        </p>
        <button className="tech-collaboration-lets-talk-section-button">
          <p>CONTACT US</p>
          <div className="tech-collaboration-contact-us-button-img">
            <img src={TopRightArrow} alt="top-right-arrow" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default LetsTalk;
