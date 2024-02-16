import "../Header.css";
import TopLeftArrow from "../../../assets/top-right-arrow.svg";

import DigitalExperts from "../../../assets/digital-experts.svg";

import StrategyConsultants from "../../../assets/strategy-consultants.svg";

import OperationsConsultants from "../../../assets/operations-consultants.svg";

import SubjectBasedExperts from "../../../assets/subject-based-experts.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Talent() {
  const [isWrapperHidden, setWrapperHidden] = useState(false);
  let timeoutId;

  const handleSubMenuClick = () => {
    setWrapperHidden(false);

    // Clear previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a timeout to add the hidden class after 10 milliseconds
    timeoutId = setTimeout(() => {
      setWrapperHidden(true);
    }, 10);

    // Set another timeout to set isWrapperHidden back to false after 200 milliseconds
    setTimeout(() => {
      setWrapperHidden(false);
    }, 200);
  };
  return (
    <>
      <div
        className={`sub-menu sub-menu-talent ${
          isWrapperHidden ? "hidden" : ""
        }`}
      >
        <div className="sub-menu-first-item">
          <p className="sub-menu-first-item-title">Talent Augmentation</p>
          <div className="sub-menu-first-item-arrow">
            <img src={TopLeftArrow} alt="arrow" />
          </div>
        </div>
        <Link
          to="/digital-experts"
          onClick={handleSubMenuClick}
          className="sub-menu-item"
        >
          <img src={DigitalExperts} alt="digital-experts" />
          <p>Digital Experts</p>
        </Link>

        <Link
          to="/strategy-consultants"
          onClick={handleSubMenuClick}
          className="sub-menu-item"
        >
          <img src={StrategyConsultants} alt="strategy-consultants" />
          <p>Strategy Consultants</p>
        </Link>

        <Link
          to="/operations-consultants"
          onClick={handleSubMenuClick}
          className="sub-menu-item"
        >
          <img src={OperationsConsultants} alt="operations-consultants" />
          <p>Operations Consultants</p>
        </Link>

        <Link
          to="/subject-based-experts"
          onClick={handleSubMenuClick}
          className="sub-menu-item"
        >
          <img src={SubjectBasedExperts} alt="subject-based-experts" />
          <p>Subject Matter Experts</p>
        </Link>
      </div>
      <div
        className={`menu-active-wrapper ${isWrapperHidden ? "hidden" : ""}`}
      ></div>
    </>
  );
}

export default Talent;
