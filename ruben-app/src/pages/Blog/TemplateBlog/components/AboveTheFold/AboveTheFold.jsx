import "./abovethefold.css";
import BlogATFRightSectionImage from "./people-image.jpg";
import RightFacingArrow from "./Arrow.svg";
function AboveTheFold() {
  return (
    <div className="blog-above-the-fold-wrapper">
      <div className="blog-above-the-fold-container">
        <div className="blog-above-the-fold-left-section">
          <div className="blog-above-the-fold-left-section-container">
            <div className="blog-atf-left-section-header">
              Home <img src={RightFacingArrow} alt="arrow" /> Blog
            </div>
            <div className="blog-atf-left-section-main-text">
              7 Reasons why Lorem ipsum dolor sit{" "}
              <strong className="blog-atf-left-section-main-text-highlight">
                {" "}
                amet, consectetur adipiscing
              </strong>
              elit, sed do eiusmod tempo incid
            </div>
          </div>
        </div>
        <div className="blog-above-the-fold-right-section">
          <img src={BlogATFRightSectionImage} alt="blog-atf-image" />
        </div>
      </div>
    </div>
  );
}

export default AboveTheFold;
