import CloudStrategy from "./cloud-strategy.svg";
import CloudMigration from "./cloud-migration.svg";
import "./images.css";

function Images() {
  return (
    <div className="cloud-security-images-wrapper">
      <div className="cloud-security-images-container">
        <div className="cloud-security-image-parent">
          <div className="cloud-security-image-text">
            <div className="cloud-security-image-text-title">
              Cloud Security Strategy
            </div>
            <div className="cloud-security-image-text-subtitle">
              We support to define directions and outcomes
            </div>
            <div className="cloud-security-image-text-paragraph">
              No matter your industry, security threats like phishing,
              ransomware, and denial-of-service (DoS) attacks are significant
              risk. Well-defined cloud security strategy is essential for
              protecting data, maintaining regulatory compliance and ensuring
              business continuity in an increasingly complex digital landscape.
            </div>
          </div>
          <img
            src={CloudStrategy}
            alt="blank image"
            className="cloud-security-image cloud-security-image-top"
          />
        </div>{" "}
        <div className="cloud-security-image-parent">
          {" "}
          <img
            src={CloudMigration}
            alt="blank image"
            className="cloud-security-image"
          />
          <div className="cloud-security-image-text">
            <div className="cloud-security-image-text-title">
              Cloud DevSec Ops
            </div>
            <div className="cloud-security-image-text-subtitle">
              Our team of Solutions Architects, Cloud Engineers will put you on
              the right security execution path
            </div>
            <div className="cloud-security-image-text-paragraph">
              Maintaining a proactive rather than reactive stance against cyber
              attacks as well as implementing the right tech-stack for proactive
              monitoring will help you continously assess and strengthen your
              Cloud security posture to protect your data, your customers, and
              your teams from evolving threats.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
