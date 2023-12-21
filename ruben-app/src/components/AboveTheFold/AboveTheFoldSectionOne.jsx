import LandingGray from "../../assets/landing-gray.svg";

function AboveTheFoldSectionOne() {
  return (
    <div className="above-the-fold-section above-the-fold-section-one">
      <img
        className="above-the-fold-gray-image"
        src={LandingGray}
        alt="above-the-fold-gray-image"
      />
      <div className="above-the-fold-right-section">
        <h1 className="above-the-fold-main-text">
          Supercharge Your Transformation Projects with{" "}
          <strong className="above-the-fold-main-text-bold">
            Talent Augmentation
          </strong>
        </h1>
        <p className="above-the-fold-sub-text">
          Flexibly assign high caliber experts to strengthen your projects
        </p>
        <div className="above-the-fold-buttons-container">
          <button className="above-the-fold-button">View Services</button>
          <button className="above-the-fold-button">Let&apos;s Talk</button>
        </div>
        <div className="above-the-fold-section-navigation">
          <div className="above-the-fold-section-navigation-child">
            <div className="above-the-fold-section-navigation-child-line "></div>
            <p className="above-the-fold-section-navigation-child-selected">
              Talent Augmentation
            </p>
          </div>
          <div className="above-the-fold-section-navigation-child">
            <div className="above-the-fold-section-navigation-child-line-disabled"></div>
            <p>Skills Uplifting</p>
          </div>
          <div className="above-the-fold-section-navigation-child">
            <div className="above-the-fold-section-navigation-child-line-disabled"></div>
            <p>Tech Transformation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboveTheFoldSectionOne;
