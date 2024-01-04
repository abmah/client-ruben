import "../infrastructure.css";
import Infrastructure from "../../../../assets/infrastructure.svg";
function AboveTheFold() {
  return (
    <div className="infra-above-the-fold-wrapper">
      <div className="infra-above-the-fold-container">
        <div className="infra-above-the-fold-left-section-wrapper">
          <div className="infra-above-the-fold-left-section">
            <h1 className="infra-above-the-fold-main-title">
              Modernize You <strong>Infrastructure</strong> to Scale and
              Innovate
            </h1>
            <div className="infra-above-the-fold-button-container">
              <button className="infra-learn-more-button">Learn More</button>
              <button className="infra-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <img
          className="infra-above-the-fold-img"
          src={Infrastructure}
          alt="infrastructure"
        />
      </div>
    </div>
  );
}

export default AboveTheFold;
