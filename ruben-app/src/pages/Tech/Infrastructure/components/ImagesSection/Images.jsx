import BlankImage from "../../../../../assets/infra-image-blank.svg";
import "./images.css";

function Images() {
  return (
    <div className="tech-infra-images-wrapper">
      <div className="tech-infra-images-container">
        <div className="tech-infra-image-parent">
          <div className="tech-infra-image-text">
            <div className="tech-infra-image-text-title">
              Lorem ipsum dolor sit amet consect
            </div>
            <div className="tech-infra-image-text-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </div>
            <div className="tech-infra-image-text-paragraph">
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </div>
          </div>
          <img
            src={BlankImage}
            alt="blank image"
            className="tech-infra-image"
          />
        </div>{" "}
        <div className="tech-infra-image-parent">
          {" "}
          <img
            src={BlankImage}
            alt="blank image"
            className="tech-infra-image"
          />
          <div className="tech-infra-image-text">
            <div className="tech-infra-image-text-title">
              Lorem ipsum dolor sit amet consect
            </div>
            <div className="tech-infra-image-text-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </div>
            <div className="tech-infra-image-text-paragraph">
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
