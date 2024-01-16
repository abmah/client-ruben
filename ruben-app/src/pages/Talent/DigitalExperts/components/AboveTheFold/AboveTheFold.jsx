import "./above-the-fold.css";
import DigitalFuture from "../../../../../assets/digital-experts-logo.svg";
function AboveTheFold() {
  return (
    <div className="talent-digital-above-the-fold-wrapper">
      <div className="talent-digital-above-the-fold-container">
        <div className="talent-digital-above-the-fold-left-section-wrapper">
          <div className="talent-digital-above-the-fold-left-section">
            <h1 className="talent-digital-above-the-fold-main-title">
              Modernize You <strong>Digital Experts</strong> to Scale and
              Innovate
            </h1>
            <div className="talent-digital-above-the-fold-button-container">
              <button className="talent-digital-learn-more-button">
                Learn More
              </button>
              <button className="talent-digital-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <img
          className="talent-digital-above-the-fold-img"
          src={DigitalFuture}
          alt="digital-future"
        />
      </div>
    </div>
  );
}

export default AboveTheFold;
