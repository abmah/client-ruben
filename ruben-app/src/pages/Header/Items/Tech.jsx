import "../Header.css";
import TopLeftArrow from "../../../assets/top-right-arrow.svg";

import InfrastructureModernization from "../../../assets/infrastructure-modernization.svg";

import DataAnalytics from "../../../assets/data-analytics.svg";

import ProductivityandCollaboration from "../../../assets/productivity-and-collaboration.svg";

import SecurityandCompliance from "../../../assets/SecurityandCompliance.svg";

import { Link } from "react-router-dom";

function Tech() {
  return (
    <>
      <div className="sub-menu sub-menu-tech">
        <div className="sub-menu-first-item sub-menu-first-item-tech ">
          <p className="sub-menu-first-item-title">Tech Transformation</p>
          <div className="sub-menu-first-item-arrow">
            <img src={TopLeftArrow} alt="arrow" />
          </div>
        </div>
        <Link to="/infrastructure" className="sub-menu-item">
          <img src={InfrastructureModernization} alt="digital-experts" />
          <p>Infrastructure Modernization</p>
        </Link>

        <Link to="/data" className="sub-menu-item">
          <img src={DataAnalytics} alt="strategy-consultants" />
          <p>Data, Analytics</p>
        </Link>

        <Link to="/collaboration" className="sub-menu-item">
          <img
            src={ProductivityandCollaboration}
            alt="operations-consultants"
          />
          <p>Productivity and Collaboration</p>
        </Link>

        <Link to="/security" className="sub-menu-item">
          <img src={SecurityandCompliance} alt="hourly-based-experts" />
          <p>Security and Compliance</p>
        </Link>
      </div>{" "}
      <div className="menu-active-wrapper"> </div>
    </>
  );
}

export default Tech;
