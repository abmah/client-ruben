import "./above-the-fold.css";
import Data from "../../../../../assets/data.svg";
function AboveTheFold() {
  return (
    <div className="tech-data-above-the-fold-wrapper">
      <div className="tech-data-above-the-fold-container">
        <div className="tech-data-above-the-fold-left-section-wrapper">
          <div className="tech-data-above-the-fold-left-section">
            <h1 className="tech-data-above-the-fold-main-title">
              Modernize You <strong>Infrastructure</strong> to Scale and
              Innovate
            </h1>
            <div className="tech-data-above-the-fold-button-container">
              <button className="tech-data-learn-more-button">
                Learn More
              </button>
              <button className="tech-data-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <img className="tech-data-above-the-fold-img" src={Data} alt="data" />
      </div>
    </div>
  );
}

export default AboveTheFold;
