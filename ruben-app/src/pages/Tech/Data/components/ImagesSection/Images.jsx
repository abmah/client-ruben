import GoodCompany from "./good-company.svg";
import TalentAug from "./talent-aug.svg";
import "./images.css";

function Images() {
  return (
    <div className="cloud-data-images-wrapper">
      <div className="cloud-data-images-container">
        <div className="cloud-data-image-parent">
          <div className="cloud-data-image-text">
            <div className="cloud-data-image-text-title">
              Cloud Data Strategy
            </div>
            <div className="cloud-data-image-text-subtitle">
              We support to define directions and outcomes
            </div>
            <div className="cloud-data-image-text-paragraph">
              A successful cloud transformation in data relies on a well-defined
              Strategy, serving as the foundation. This strategy provides
              guidance to the entire organization, outlining the objectives and
              reasons behind the transformation, and clearly articulating the
              criteria for success.
            </div>
          </div>
          <img
            src={GoodCompany}
            alt="blank image"
            className="cloud-data-image cloud-data-image-top"
          />
        </div>{" "}
        <div className="cloud-data-image-parent">
          {" "}
          <img src={TalentAug} alt="blank image" className="cloud-data-image" />
          <div className="cloud-data-image-text">
            <div className="cloud-data-image-text-title">
              Data Migration Support
            </div>
            <div className="cloud-data-image-text-subtitle">
              Our team of Solutions Architects, Cloud Engineers, and Project
              Managers will put you on the right execution path
            </div>
            <div className="cloud-data-image-text-paragraph">
              Our team will create deployment-ready landing zone and assist in
              configuring resource management, identity and access management
              (IAM), networking, billing management, logging and monitoring.
              Disaster readiness plans will be developed, prioritizing the
              resilience to critical data.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
