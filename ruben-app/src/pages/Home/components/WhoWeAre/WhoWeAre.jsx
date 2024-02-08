import TopRightArrow from "../../../../assets/top-right-arrow.svg";
import "./whoweare.css";

import PersonOne from "./people/person-one.webp";
import PersonTwo from "./people/person-two.webp";
import PersonThree from "./people/person-three.webp";
import PersonFour from "./people/person-four.webp";
import PersonFive from "./people/person-five.webp";
import PersonSix from "./people/person-six.webp";
import PersonSeven from "./people/person-seven.webp";
import { Link } from "react-router-dom";

function WhoWeAre() {
  return (
    <div className="who-we-are-wrapper">
      <div className="who-we-are-container">
        <h1 className="who-we-are-title">Who We Are</h1>
        <h1 className="who-we-are-subtitle">
          We are improvers, resolvers, change advocates and engineers
        </h1>
        <Link to="/about" className="who-we-are-button">
          <p>About us</p>
          <div className="achievement-button-arrow">
            <img src={TopRightArrow} alt="top-right-arrow" />
          </div>
        </Link>

        <div className="people-images-container">
          <img
            src={PersonOne}
            alt="person-one"
            className="person-image person-image-one"
          />
          <img
            src={PersonTwo}
            alt="person-two"
            className="person-image person-image-two"
          />
          <img
            src={PersonThree}
            alt="person-three"
            className="person-image person-image-three"
          />
          <img
            src={PersonFour}
            alt="person-four"
            className="person-image person-image-four"
          />
          <img
            src={PersonFive}
            alt="person-five"
            className="person-image person-image-five"
          />
          <img
            src={PersonSix}
            alt="person-six"
            className="person-image person-image-six"
          />
          <img
            src={PersonSeven}
            alt="person-seven"
            className="person-image person-image-seven"
          />
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
