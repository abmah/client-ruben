import RightFacingArrow from "../../assets/right-facing-arrow.svg";
import RightFacingArrowBlue from "../../assets/right-facing-arrow-blue.svg";

export default function MobileMenu() {
  return (
    <div className="mobile-menu-content">
      <div className="mobile-menu-header"></div>
      <div className="mobile-menu-main-item">
        <p>About</p>
        <div className="right-facing-arrow about-mobile-menu-arrow">
          <img src={RightFacingArrowBlue} alt="right-facing-arrow" />
        </div>
      </div>
      <div className="mobile-menu-main-item mobile-menu-main-item-second">
        <p>Talent Augmentation</p>
        <div className="right-facing-arrow">
          <img src={RightFacingArrow} alt="right-facing-arrow" />
        </div>
      </div>
      <div className="mobile-menu-main-item mobile-menu-main-item-third">
        <p>Skills Uplifting</p>
        <div className="right-facing-arrow">
          <img src={RightFacingArrow} alt="right-facing-arrow" />
        </div>
      </div>
      <div className="mobile-menu-main-item mobile-menu-main-item-last">
        <p>Tech Transformation</p>
        <div className="right-facing-arrow">
          <img src={RightFacingArrow} alt="right-facing-arrow" />
        </div>
      </div>
    </div>
  );
}
