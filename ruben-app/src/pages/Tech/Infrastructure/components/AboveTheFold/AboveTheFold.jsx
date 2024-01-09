import "./above-the-fold.css";
import Infrastructure from "../../../../../assets/infrastructure.svg";
function AboveTheFold() {
  return (
    <div className="tech-above-the-fold-wrapper">
      <div className="tech-above-the-fold-container">
        <div className="tech-above-the-fold-left-section-wrapper">
          <div className="tech-above-the-fold-left-section">
            <h1 className="tech-above-the-fold-main-title">
              Modernize You <strong>Infrastructure</strong> to Scale and
              Innovate
            </h1>
            <div className="tech-above-the-fold-button-container">
              <button className="tech-learn-more-button">Learn More</button>
              <button className="tech-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <img
          className="tech-above-the-fold-img"
          src={Infrastructure}
          alt="infrastructure"
        />
      </div>
    </div>
  );
}

export default AboveTheFold;
