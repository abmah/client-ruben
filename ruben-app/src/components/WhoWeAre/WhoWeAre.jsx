import TopRightArrow from "../../assets/top-right-arrow.svg";
import "./whoweare.css";

import PersonOne from "./people/person-one.png";
import PersonTwo from "./people/person-two.png";
import PersonThree from "./people/person-three.png";
import PersonFour from "./people/person-four.png";
import PersonFive from "./people/person-five.png";
import PersonSix from "./people/person-six.png";
import PersonSeven from "./people/person-seven.png";

function WhoWeAre() {
  return (
    <div className="who-we-are-wrapper">
      <div className="who-we-are-container">
        <h1 className="who-we-are-title">Who We Are</h1>
        <h1 className="who-we-are-subtitle">
          Lorem Ipsum is simply dummy text of the printing{" "}
        </h1>
        <button className="who-we-are-button">
          <p>BUTTON</p>
          <div className="achievement-button-arrow">
            <img src={TopRightArrow} alt="top-right-arrow" />
          </div>
        </button>

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
