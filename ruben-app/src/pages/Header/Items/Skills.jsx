import "../Header.css";
import TopLeftArrow from "../../../assets/top-right-arrow.svg";

import OpenAcademy from "../../../assets/open-academy.svg";

import CustomizedPrograms from "../../../assets/customized-programs.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

function Skills() {
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
        className={`sub-menu sub-menu-skills ${
          isWrapperHidden ? "hidden" : ""
        }`}
      >
        <div className="sub-menu-first-item sub-menu-first-item-skills">
          <p className="sub-menu-first-item-title sub-menu-first-item-title-skills">
            Skills Uplifting
          </p>
          <div className="sub-menu-first-item-arrow">
            <img src={TopLeftArrow} alt="arrow" />
          </div>
        </div>
        <Link
          to="open-academy"
          onClick={handleSubMenuClick}
          className="sub-menu-item"
        >
          <img src={OpenAcademy} alt="digital-experts" />
          <p>Open Academy</p>
        </Link>

        <Link
          to="customized-programs"
          onClick={handleSubMenuClick}
          className="sub-menu-item"
        >
          <img src={CustomizedPrograms} alt="strategy-consultants" />
          <p>Customized Programs</p>
        </Link>
      </div>
      <div className={`menu-active-wrapper ${isWrapperHidden ? "hidden" : ""}`}>
        {" "}
      </div>
    </>
  );
}

export default Skills;
