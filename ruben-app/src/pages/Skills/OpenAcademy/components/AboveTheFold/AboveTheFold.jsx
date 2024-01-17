import "./above-the-fold.css";
import OpenAcademy from "../../../../../assets/academy-experts-logo.svg";
function AboveTheFold() {
  return (
    <div className="skills-academy-above-the-fold-wrapper">
      <div className="skills-academy-above-the-fold-container">
        <div className="skills-academy-above-the-fold-left-section-wrapper">
          <div className="skills-academy-above-the-fold-left-section">
            <h1 className="skills-academy-above-the-fold-main-title">
              Modernize You <strong>academy Experts</strong> to Scale and
              Innovate
            </h1>
            <div className="skills-academy-above-the-fold-button-container">
              <button className="skills-academy-learn-more-button">
                Learn More
              </button>
              <button className="skills-academy-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <img
          className="skills-academy-above-the-fold-img"
          src={OpenAcademy}
          alt="open-academy"
        />
      </div>
    </div>
  );
}

export default AboveTheFold;
