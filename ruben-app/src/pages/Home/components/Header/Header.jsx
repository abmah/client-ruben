import "./Header.css";
import { useState } from "react";
import HeaderBackround from "../../../../assets/header-background.svg";
import HeaderBackgroundMobile from "../../../../assets/header-background-mobile.svg";
import DigitalFutureLogo from "../../../../assets/digital-future-logo.svg";
import MenuDropDown from "../../../../assets/menu-dropdown.svg";
import WhatsappLogo from "../../../../assets/whatsapp.svg";
import Talent from "./Items/Talent";
import Skills from "./Items/Skills";
import Tech from "./Items/Tech";
import MobileMenu from "./Items/MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const rotateStyle = isMenuOpen ? { transform: "rotate(180deg)" } : {};

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className={`header-menu-mobile ${isMenuOpen ? "menu-open" : ""}`}>
          <MobileMenu
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
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
          <button className="whatsapp-logo-button">
            <img src={WhatsappLogo} alt="whatsapp-logo" />
          </button>

          <button className="contact-button">Contact</button>
          <select
            className="language-change-button language-change-pc"
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="EN">EN</option>
            <option value="AR">AR</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
