import { useState } from "react";
import "../Header.css";
import TopLeftArrow from "../../../assets/top-right-arrow.svg";
import InfrastructureModernization from "../../../assets/infrastructure-modernization.svg";
import DataAnalytics from "../../../assets/data-analytics.svg";
import ProductivityandCollaboration from "../../../assets/productivity-and-collaboration.svg";
import SecurityandCompliance from "../../../assets/SecurityandCompliance.svg";
import { Link } from "react-router-dom";

function Tech() {
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
        className={`sub-menu sub-menu-tech ${isWrapperHidden ? "hidden" : ""}`}
      >
        <div className="sub-menu-first-item sub-menu-first-item-tech">
          <p className="sub-menu-first-item-title">Tech Transformation</p>
          <div className="sub-menu-first-item-arrow">
            <img src={TopLeftArrow} alt="arrow" />
          </div>
        </div>
        <Link
          to="/infrastructure"
          className="sub-menu-item"
          onClick={handleSubMenuClick}
        >
          <img src={InfrastructureModernization} alt="digital-experts" />
          <p>Infrastructure Modernization</p>
        </Link>

        <Link to="/data" className="sub-menu-item" onClick={handleSubMenuClick}>
          <img src={DataAnalytics} alt="strategy-consultants" />
          <p>Data, Analytics</p>
        </Link>

        <Link
          to="/collaboration"
          className="sub-menu-item"
          onClick={handleSubMenuClick}
        >
          <img
            src={ProductivityandCollaboration}
            alt="operations-consultants"
          />
          <p>Productivity and Collaboration</p>
        </Link>

        <Link
          to="/security"
          className="sub-menu-item"
          onClick={handleSubMenuClick}
        >
          <img src={SecurityandCompliance} alt="security-and-compliance" />
          <p>Security and Compliance</p>
        </Link>
      </div>
      <div
        className={`menu-active-wrapper ${isWrapperHidden ? "hidden" : ""}`}
      ></div>
    </>
  );
}

export default Tech;
