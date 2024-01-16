import "./above-the-fold.css";
import Hourly from "../../../../../assets/hourly-logo.svg";
function AboveTheFold() {
  return (
    <div className="talent-hourly-above-the-fold-wrapper">
      <div className="talent-hourly-above-the-fold-container">
        <div className="talent-hourly-above-the-fold-left-section-wrapper">
          <div className="talent-hourly-above-the-fold-left-section">
            <h1 className="talent-hourly-above-the-fold-main-title">
              Modernize You <strong>hourly Experts</strong> to Scale and
              Innovate
            </h1>
            <div className="talent-hourly-above-the-fold-button-container">
              <button className="talent-hourly-learn-more-button">
                Learn More
              </button>
              <button className="talent-hourly-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <img
          className="talent-hourly-above-the-fold-img"
          src={Hourly}
          alt="hourly"
        />
      </div>
    </div>
  );
}

export default AboveTheFold;
