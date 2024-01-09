import "./above-the-fold.css";
import Security from "../../../../../assets/security.svg";
function AboveTheFold() {
  return (
    <div className="tech-security-above-the-fold-wrapper">
      <div className="tech-security-above-the-fold-container">
        <div className="tech-security-above-the-fold-left-section-wrapper">
          <div className="tech-security-above-the-fold-left-section">
            <h1 className="tech-security-above-the-fold-main-title">
              Modernize You <strong>Infrastructure</strong> to Scale and
              Innovate
            </h1>
            <div className="tech-security-above-the-fold-button-container">
              <button className="tech-security-learn-more-button">
                Learn More
              </button>
              <button className="tech-security-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <img
          className="tech-security-above-the-fold-img"
          src={Security}
          alt="security"
        />
      </div>
    </div>
  );
}

export default AboveTheFold;
