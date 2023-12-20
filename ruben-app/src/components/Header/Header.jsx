import "./Header.css";

import HeaderBackround from "../../assets/header-background.svg";
import DigitalFutureLogo from "../../assets/digital-future-logo.svg";

import WhatsappLogo from "../../assets/whatsapp.svg";

import Talent from "./Talent";

import Skills from "./Skills";
import Tech from "./Tech";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="header-leftside">
          <img
            className="header-background"
            src={HeaderBackround}
            alt="Header-background"
          />
          <img
            className="digital-future-logo"
            src={DigitalFutureLogo}
            alt="digital-future-logo"
          />
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
