import GoodCompany from "./good-company.svg";
import TalentAug from "./talent-aug.svg";
import "./images.css";

function Images() {
  return (
    <div className="talent-subject-images-wrapper">
      <div className="talent-subject-images-container">
        <div className="talent-subject-image-parent">
          <div className="talent-subject-image-text">
            <div className="talent-subject-image-text-title">
              Flexible and Rapid Talent Augmentation
            </div>
            <div className="talent-subject-image-text-subtitle">
              Quickly assemble the teams you need and get things done - from
              quick turnarounds to big transformations
            </div>
            <div className="talent-subject-image-text-paragraph">
              You can rely on our contractor database or let us find the high
              quality experts for your custom needs. All that with one invoice,
              employment formalities on us, while maintaining highest level of
              confidentiality at all time.
            </div>
          </div>
          <img
            src={GoodCompany}
            alt="blank image"
            className="talent-subject-image talent-subject-image-top"
          />
        </div>{" "}
        <div className="talent-subject-image-parent">
          {" "}
          <img
            src={TalentAug}
            alt="blank image"
            className="talent-subject-image"
          />
          <div className="talent-subject-image-text">
            <div className="talent-subject-image-text-title">
              This is how good companies find good company
            </div>
            <div className="talent-subject-image-text-subtitle">
              Proof of quality: we have a track record with top brands, e.g. in
              Technology, FMCG, Consulting industries.
            </div>
            <div className="talent-subject-image-text-paragraph">
              We take extra effort to eliminate risks and we diligently check
              background and references of our candidates and prioritise
              confidentiality of all stakeholders.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
