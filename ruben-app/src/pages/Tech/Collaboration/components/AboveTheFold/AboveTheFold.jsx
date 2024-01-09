import "./above-the-fold.css";
import CollaborationImage from "../../../../../assets/teams.svg";
function AboveTheFold() {
  return (
    <div className="tech-collaboration-above-the-fold-wrapper">
      <div className="tech-collaboration-above-the-fold-container">
        <div className="tech-collaboration-above-the-fold-left-section-wrapper">
          <div className="tech-collaboration-above-the-fold-left-section">
            <h1 className="tech-collaboration-above-the-fold-main-title">
              Modernize You <strong>Infrastructure</strong> to Scale and
              Innovate
            </h1>
            <div className="tech-collaboration-above-the-fold-button-container">
              <button className="tech-collaboration-learn-more-button">
                Learn More
              </button>
              <button className="tech-collaboration-get-in-contact-button">
                Get in contact
              </button>
            </div>
          </div>
        </div>
        <img
          className="tech-collaboration-above-the-fold-img"
          src={CollaborationImage}
          alt="collaboration"
        />
      </div>
    </div>
  );
}

export default AboveTheFold;
