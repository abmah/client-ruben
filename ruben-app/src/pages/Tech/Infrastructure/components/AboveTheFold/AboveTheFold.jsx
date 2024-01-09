import "./above-the-fold.css";
import Infrastructure from "../../../../../assets/infrastructure.svg";
function AboveTheFold() {
  return (
    <div className="tech-infra-above-the-fold-wrapper">
      <div className="tech-infra-above-the-fold-container">
        <div className="tech-infra-above-the-fold-left-section-wrapper">
          <div className="tech-infra-above-the-fold-left-section">
            <h1 className="tech-infra-above-the-fold-main-title">
              Modernize You <strong>Infrastructure</strong> to Scale and
              Innovate
            </h1>
            <div className="tech-infra-above-the-fold-button-container">
              <button className="tech-infra-learn-more-button">
                Learn More
              </button>
              <button className="tech-infra-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <img
          className="tech-infra-above-the-fold-img"
          src={Infrastructure}
          alt="infrastructure"
        />
      </div>
    </div>
  );
}

export default AboveTheFold;
