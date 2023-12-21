import LandingBlue from "../../assets/landing-blue.svg";

function AboveTheFoldSectionThree() {
  return (
    <div className="above-the-fold-section above-the-fold-section-three">
      <img
        className="above-the-fold-gray-image"
        src={LandingBlue}
        alt="above-the-fold-gray-image"
      />
      <div className="above-the-fold-right-section">
        <h1 className="above-the-fold-main-text">
          Transform Your Company with Modern, Cloud-Based{" "}
          <strong className="above-the-fold-main-text-bold">Tech</strong> Stack
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
            <div className="above-the-fold-section-navigation-child-line-disabled "></div>
            <p>Talent Augmentation</p>
          </div>
          <div className="above-the-fold-section-navigation-child">
            <div className="above-the-fold-section-navigation-child-line-disabled"></div>
            <p>Skills Uplifting</p>
          </div>
          <div className="above-the-fold-section-navigation-child">
            <div className="above-the-fold-section-navigation-child-line"></div>
            <p className="above-the-fold-section-navigation-child-selected">
              Tech Transformation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboveTheFoldSectionThree;
