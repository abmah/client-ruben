import "./Header.css";
import { useState } from "react";
import HeaderBackround from "../../assets/header-background.svg";
import HeaderBackgroundMobile from "../../assets/header-background-mobile.svg";
import DigitalFutureLogo from "../../assets/digital-future-logo.svg";
import MenuDropDown from "../../assets/menu-dropdown.svg";

import WhatsappLogo from "../../assets/whatsapp.svg";

import Talent from "./Talent";

import Skills from "./Skills";
import Tech from "./Tech";

import MobileMenu from "./MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const rotateStyle = isMenuOpen ? { transform: "rotate(180deg)" } : {};

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className={`header-menu-mobile ${isMenuOpen ? "menu-open" : ""}`}>
          <MobileMenu />
        </div>
        <div className="header-leftside">
          <img
            className="header-background"
            src={HeaderBackround}
            alt="Header-background"
          />
          <img
            className="header-background-mobile"
            src={HeaderBackgroundMobile}
            alt="Header-background"
          />
          <img
            className="digital-future-logo"
            src={DigitalFutureLogo}
            alt="digital-future-logo"
          />
          <div onClick={handleMenuToggle} className="header-menu-toggle-button">
            <p>Menu</p>
            <img
              className="header-drop-down-menu-toggle-logo"
              src={MenuDropDown}
              style={rotateStyle}
              alt="menu-drop-down"
            />
          </div>
          <div className="header-menu">
            <div className="menu-item">
              <p>About</p>
            </div>
            <div className="menu-item menu-item-talent">
              <p>Talent</p>
              <Talent />
            </div>
            <div className="menu-item menu-item-skills">
              <p>Skills</p>
              <Skills />
            </div>
            <div className="menu-item menu-item-tech">
              <p>Tech</p>
              <Tech />
            </div>
          </div>
        </div>
        <div className="header-rightside">
          <div className="whatsapp-logo-button">
            <img src={WhatsappLogo} alt="whatsapp-logo" />
          </div>

          <button className="contact-button">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
//https://unused-css.com/tools/clip-path-generator?p=22JwDgXMBsA0BMCMsB0kAM8I1pArEnA7LBAUuvHLkgMwAs4OISIws01q1St1wYaNAsHaduvTEngEQlSNwQTUqNtkiZKeaQTDxqXXBQ5cefXfpyHRJsLEY1aw1Tbt1HkNbCjRQNqAG4ABwAPPz8AYiVI1CA
