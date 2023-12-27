import LandingYellow from "../../../assets/landing-yellow.svg";
import "../above-the-fold.css";
function AboveTheFoldSectionTwo() {
  return (
    <div className="above-the-fold-section above-the-fold-section-two">
      <img
        className="above-the-fold-gray-image"
        src={LandingYellow}
        alt="above-the-fold-gray-image"
      />
      <div className="above-the-fold-right-section">
        <h1 className="above-the-fold-main-text">
          Supercharge Your Transformation Projects with{" "}
          <strong className="above-the-fold-main-text-bold">
            Skills Uplifting
          </strong>
        </h1>
        <p className="above-the-fold-sub-text">
          Future-proof internal workforce with modern tech stack skillset
          trainings
        </p>
        <div className="above-the-fold-buttons-container">
          <button className="above-the-fold-button">View Services</button>
          <button className="above-the-fold-button lets-talk-button">
            Let&apos;s Talk
          </button>
        </div>
        <div className="above-the-fold-section-navigation">
          <div className="above-the-fold-section-navigation-child">
            <div className="above-the-fold-section-navigation-child-line-disabled navigation-line-blue "></div>
            <p>Talent Augmentation</p>
          </div>
          <div className="above-the-fold-section-navigation-child">
            <div className="above-the-fold-section-navigation-child-line navigation-line-blue"></div>
            <p className="above-the-fold-section-navigation-child-selected">
              Skills Uplifting
            </p>
          </div>
          <div className="above-the-fold-section-navigation-child">
            <div className="above-the-fold-section-navigation-child-line-disabled navigation-line-blue"></div>
            <p>Tech Transformation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboveTheFoldSectionTwo;
