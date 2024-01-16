import "./above-the-fold.css";
import Strategy from "../../../../../assets/strategy-logo.svg";
function AboveTheFold() {
  return (
    <div className="talent-strategy-above-the-fold-wrapper">
      <div className="talent-strategy-above-the-fold-container">
        <div className="talent-strategy-above-the-fold-left-section-wrapper">
          <div className="talent-strategy-above-the-fold-left-section">
            <h1 className="talent-strategy-above-the-fold-main-title">
              Modernize You <strong>strategy Experts</strong> to Scale and
              Innovate
            </h1>
            <div className="talent-strategy-above-the-fold-button-container">
              <button className="talent-strategy-learn-more-button">
                Learn More
              </button>
              <button className="talent-strategy-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <img
          className="talent-strategy-above-the-fold-img"
          src={Strategy}
          alt="strategy"
        />
      </div>
    </div>
  );
}

export default AboveTheFold;
