import "./above-the-fold.css";
import AboutImage from "../../../../assets/about-img-hero.svg";

function AboveTheFold() {
  return (
    <div className="about-utf-above-the-fold-wrapper">
      <div className="about-utf-above-the-fold-container">
        <div className="about-utf-above-the-fold-left-section-wrapper">
          <div className="about-utf-above-the-fold-left-section">
            <p className="about-utf-above-the-fold-little-title">About</p>
            <h1 className="about-utf-above-the-fold-main-title">
              Lorem ipsum dolor sit amet,
              <br />
              <strong>consectetur adipiscing elit,</strong>
              <br />
              sed do eiusmod tempor
            </h1>
          </div>
        </div>
        <img
          className="about-utf-above-the-fold-img"
          src={AboutImage}
          alt="about-img"
        />
      </div>
    </div>
  );
}

export default AboveTheFold;
