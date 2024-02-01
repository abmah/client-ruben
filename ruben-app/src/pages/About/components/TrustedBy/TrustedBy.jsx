import GenericLogo from "../../../../assets/generic-logo.svg";
import "./trusted-by.css";
function TrustedBy() {
  return (
    <div className="trusted-by-wrapper">
      <div className="trusted-by-container">
        <div className="trusted-by-left-section">
          <h1 className="trusted-by-main-title">Trusted By</h1>
          <p className="trusted-by-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.{" "}
          </p>
        </div>
        <div className="trusted-by-right-section">
          <div className="trusted-by-item">
            <img src={GenericLogo} alt="company-logo" />
          </div>
          <div className="trusted-by-item">
            <img src={GenericLogo} alt="company-logo" />
          </div>
          <div className="trusted-by-item">
            <img src={GenericLogo} alt="company-logo" />
          </div>
          <div className="trusted-by-item">
            <img src={GenericLogo} alt="company-logo" />
          </div>
          <div className="trusted-by-item">
            <img src={GenericLogo} alt="company-logo" />
          </div>
          <div className="trusted-by-item">
            <img src={GenericLogo} alt="company-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedBy;
