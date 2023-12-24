import { useState } from "react";
import RightFacingArrow from "../../assets/right-facing-arrow.svg";
import RightFacingArrowBlue from "../../assets/right-facing-arrow-blue.svg";
import LeftFacingArrow from "../../assets/left-facing-arrow.svg";
import WhatsappLogo from "../../assets/whatsapp.svg";

import "./Header.css";
import PropTypes from "prop-types";

import About from "./About";
import Talent from "./Talent";
import Skills from "./Skills";
import Tech from "./Tech";

SubMenu.propTypes = {
  goBack: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

function SubMenu({ goBack, children }) {
  return (
    <>
      <div className="mobile-go-back-arrow" onClick={goBack}>
        <img src={LeftFacingArrow} alt="left-facing-arrow" />
      </div>
      <div>{children}</div>
    </>
  );
}

export default function MobileMenu() {
  const [currentLevel, setCurrentLevel] = useState("main");

  const handleGoBack = () => {
    setCurrentLevel("main");
  };

  const handleUpdateCurrentLevel = (item) => {
    setCurrentLevel(item);
  };

  const renderSubMenuContent = () => {
    // Customize sub-menu content based on the current main item
    switch (currentLevel) {
      case "main":
        return null; // No sub-menu content for main level
      case "subAbout":
        return <About />;
      case "subTalent":
        return <Talent />;
      case "subSkills":
        return <Skills />;
      case "subTech":
        return <Tech />;
      default:
        return null;
    }
  };

  return (
    <div className={`mobile-menu-content ${currentLevel}`}>
      <div className="mobile-menu-header"></div>

      {currentLevel === "main" ? (
        // Render main menu items
        <>
          <div className="mobile-menu-main-item">
            <p>About</p>
            <div className="right-facing-arrow about-mobile-menu-arrow">
              <img src={RightFacingArrowBlue} alt="right-facing-arrow" />
            </div>
          </div>
          <div
            className="mobile-menu-main-item mobile-menu-main-item-second"
            onClick={() => handleUpdateCurrentLevel("subTalent")}
          >
            <p>Talent Augmentation</p>
            <div className="right-facing-arrow">
              <img src={RightFacingArrow} alt="right-facing-arrow" />
            </div>
          </div>
          <div
            className="mobile-menu-main-item mobile-menu-main-item-third"
            onClick={() => handleUpdateCurrentLevel("subSkills")}
          >
            <p>Skills Uplifting</p>
            <div className="right-facing-arrow">
              <img src={RightFacingArrow} alt="right-facing-arrow" />
            </div>
          </div>
          <div
            className="mobile-menu-main-item mobile-menu-main-item-last"
            onClick={() => handleUpdateCurrentLevel("subTech")}
          >
            <p>Tech Transformation</p>
            <div className="right-facing-arrow">
              <img src={RightFacingArrow} alt="right-facing-arrow" />
            </div>
          </div>
        </>
      ) : (
        // Render sub-menu when a main item is clicked
        <div className="mobile-menu-sub-item">
          <SubMenu goBack={handleGoBack}>{renderSubMenuContent()}</SubMenu>
        </div>
      )}
      <div className="mobile-menu-bottom">
        <div className="whatsapp-logo-button">
          <img src={WhatsappLogo} alt="whatsapp-logo" />
        </div>

        <button className="contact-button">Contact</button>
      </div>
    </div>
  );
}
