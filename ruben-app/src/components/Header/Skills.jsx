import "./Header.css";
import TopLeftArrow from "../../assets/top-right-arrow.svg";

import OpenAcademy from "../../assets/open-academy.svg";

import CustomizedPrograms from "../../assets/customized-programs.svg";

function Skills() {
  return (
    <div className="sub-menu sub-menu-skills">
      <div className="sub-menu-first-item sub-menu-first-item-skills">
        <p className="sub-menu-first-item-title ">Skills Uplifting</p>
        <div className="sub-menu-first-item-arrow">
          <img src={TopLeftArrow} alt="arrow" />
        </div>
      </div>
      <div className="sub-menu-item">
        <img src={OpenAcademy} alt="digital-experts" />
        <p>Open Academy</p>
      </div>

      <div className="sub-menu-item">
        <img src={CustomizedPrograms} alt="strategy-consultants" />
        <p>Customized Programs</p>
      </div>
    </div>
  );
}

export default Skills;
