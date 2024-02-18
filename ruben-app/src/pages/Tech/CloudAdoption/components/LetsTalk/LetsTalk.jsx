import "./lets-talk.css";
import LetsTalkLogo from "../../../../../assets/lets-talk-logo.svg";
import TopRightArrow from "../../../../../assets/top-right-arrow.svg";
import { Link } from "react-router-dom";

function LetsTalk() {
  return (
    <div className="cloud-adoption-lets-talk-section-wrapper">
      <div className="cloud-adoption-lets-talk-section-container">
        <img
          src={LetsTalkLogo}
          alt="lets-talk"
          className="cloud-adoption-lets-talk-section-image"
        ></img>
        <h1 className="cloud-adoption-lets-talk-section-title">Let’s Talk!</h1>
        <p className="cloud-adoption-lets-talk-section-subtitle">
          Contact us for inquiries, feedback, or any assistance you may need.
          Our team is ready to respond promptly to discuss and clarify any
          questions you may have.
        </p>
        <Link to="/contact" className="cloud-adoption-lets-talk-section-button">
          <p>CONTACT US</p>
          <div className="cloud-adoption-contact-us-button-img">
            <img src={TopRightArrow} alt="top-right-arrow" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LetsTalk;