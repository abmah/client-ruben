import "../Header.css";
import TopLeftArrow from "../../../assets/top-right-arrow.svg";

import DigitalExperts from "../../../assets/digital-experts.svg";

import StrategyConsultants from "../../../assets/strategy-consultants.svg";

import OperationsConsultants from "../../../assets/operations-consultants.svg";

import SubjectBasedExperts from "../../../assets/subject-based-experts.svg";
function About() {
  return (
    <div className="sub-menu">
      <div className="sub-menu-first-item">
        <p className="sub-menu-first-item-title">Talent Augmentation</p>
        <div className="sub-menu-first-item-arrow">
          <img src={TopLeftArrow} alt="arrow" />
        </div>
      </div>
      <div className="sub-menu-item">
        <img src={DigitalExperts} alt="digital-experts" />
        <p>Digital Experts</p>
      </div>

      <div className="sub-menu-item">
        <img src={StrategyConsultants} alt="strategy-consultants" />
        <p>Strategy Consultants</p>
      </div>

      <div className="sub-menu-item">
        <img src={OperationsConsultants} alt="operations-consultants" />
        <p>Operations Consultants</p>
      </div>

      <div className="sub-menu-item">
        <img src={SubjectBasedExperts} alt="subject-based-experts" />
        <p>Subject Matter Experts</p>
      </div>
    </div>
  );
}

export default About;
