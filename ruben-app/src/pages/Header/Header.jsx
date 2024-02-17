import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import HeaderBackround from "../../assets/header-background.svg";
import HeaderBackgroundMobile from "../../assets/header-background-mobile.svg";
import DigitalFutureLogo from "../../assets/digital-future-logo.svg";
import MenuDropDown from "../../assets/menu-dropdown.svg";
import WhatsappLogo from "../../assets/whatsapp.svg";
import Talent from "./Items/Talent";
import Skills from "./Items/Skills";
import Tech from "./Items/Tech";
import MobileMenu from "./Items/MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const rotateStyle = isMenuOpen ? { transform: "rotate(180deg)" } : {};

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Close the menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
    // scroll to the top of the page
    window.scrollTo(0, 0);
  }, [location]);

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
          <Link to="/">
            <img
              className="digital-future-logo"
              src={DigitalFutureLogo}
              alt="digital-future-logo"
            />
          </Link>
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
            <Link to="about" className="menu-item">
              <p>About</p>
            </Link>
            <div className="menu-item menu-item-talent">
              <p>Talent</p>
              <Talent />
            </div>
            <div className="menu-item menu-item-skills">
              <p>Skills</p>
              <Skills />
            </div>
            <div className="menu-item menu-item-tech">
              <p>Cloud</p>
              <Tech />
            </div>
          </div>
        </div>
        <div className="header-rightside">
          <button className="whatsapp-logo-button">
            <img src={WhatsappLogo} alt="whatsapp-logo" />
          </button>

          <Link to="contact" className="contact-button">
            Contact
          </Link>
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
