import "./our-values.css";
import OurVlauesImage from "../../../../assets/our-values.svg";

function OurValues() {
  return (
    <div className="about-our-values-wrapper">
      <div className="about-our-values-container">
        <h2 className="about-our-values-title">Our Values</h2>

        <div className="about-our-values-card-container">
          <div className="about-our-values-card">
            <img
              className="about-our-values-card-img"
              src={OurVlauesImage}
              alt="our-values-icon"
            />
            <h3 className="about-our-values-card-title">Value 1</h3>
            <p className="about-our-values-card-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="about-our-values-card-border"></div>
          </div>
          <div className="about-our-values-card">
            <img
              className="about-our-values-card-img"
              src={OurVlauesImage}
              alt="our-values-icon"
            />
            <h3 className="about-our-values-card-title">Value 1</h3>
            <p className="about-our-values-card-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="about-our-values-card-border"></div>
          </div>
          <div className="about-our-values-card">
            <img
              className="about-our-values-card-img"
              src={OurVlauesImage}
              alt="our-values-icon"
            />
            <h3 className="about-our-values-card-title">Value 1</h3>
            <p className="about-our-values-card-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="about-our-values-card-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
