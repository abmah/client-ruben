import "./Header.css";

import HeaderBackround from "../../assets/header-background.svg";
import DigitalFutureLogo from "../../assets/digital-future-logo.svg";

import WhatsappLogo from "../../assets/whatsapp.svg";
import TopLeftArrow from "../../assets/top-right-arrow.svg";

import DigitalExperts from "../../assets/digital-experts.svg";

import StrategyConsultants from "../../assets/strategy-consultants.svg";

import OperationsConsultants from "../../assets/operations-consultants.svg";

import HourlyBasedExperts from "../../assets/hourly-based-experts.svg";

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
              <div className="sub-menu">
                <div className="sub-menu-first-item">
                  <p className="sub-menu-first-item-title">
                    Talent Augmentation
                  </p>
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
                  <img
                    src={OperationsConsultants}
                    alt="operations-consultants"
                  />
                  <p>Operations Consultants</p>
                </div>

                <div className="sub-menu-item">
                  <img src={HourlyBasedExperts} alt="hourly-based-experts" />
                  <p>Hourly Based Experts</p>
                </div>
              </div>
            </div>
            <div className="menu-item">Talent</div>
            <div className="menu-item"> Skills</div>
            <div className="menu-item">Tech</div>
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
