import GoodCompany from "./good-company.svg";
import TalentAug from "./talent-aug.svg";
import "./images.css";

function Images() {
  return (
    <div className="cloud-adoption-images-wrapper">
      <div className="cloud-adoption-images-container">
        <div className="cloud-adoption-image-parent">
          <div className="cloud-adoption-image-text">
            <div className="cloud-adoption-image-text-title">
              Cloud Adoption Strategy
            </div>
            <div className="cloud-adoption-image-text-subtitle">
              We support to define directions and outcomes
            </div>
            <div className="cloud-adoption-image-text-paragraph">
              A successful cloud transformation relies on a well-defined Cloud
              Strategy, serving as the foundation. This strategy provides
              guidance to the entire organization, outlining the objectives and
              reasons behind the transformation, and clearly articulating the
              criteria for success in both business and IT outcomes.
            </div>
          </div>
          <img
            src={GoodCompany}
            alt="blank image"
            className="cloud-adoption-image cloud-adoption-image-top"
          />
        </div>{" "}
        <div className="cloud-adoption-image-parent">
          {" "}
          <img
            src={TalentAug}
            alt="blank image"
            className="cloud-adoption-image"
          />
          <div className="cloud-adoption-image-text">
            <div className="cloud-adoption-image-text-title">
              Cloud Migration Support
            </div>
            <div className="cloud-adoption-image-text-subtitle">
              Our team of Solutions Architects, Cloud Engineers, and Project
              Managers will put you on the right execution path
            </div>
            <div className="cloud-adoption-image-text-paragraph">
              Our team will create deployment-ready landing zone and assist in
              configuring resource management, identity and access management
              (IAM), networking, billing management, logging and monitoring.
              Disaster readiness plans will be developed, prioritizing the
              resilience to mission-critical operations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
