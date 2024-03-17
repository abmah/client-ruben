import GoodCompany from "./cust-training.svg";
import TalentAug from "./digital-biz.svg";
import "./images.css";

function Images() {
  return (
    <div className="skills-programs-images-wrapper">
      <div className="skills-programs-images-container">
        <div className="skills-programs-image-parent">
          <div className="skills-programs-image-text">
            <div className="skills-programs-image-text-title">
              Customized Training Curriculum
            </div>
            <div className="skills-programs-image-text-subtitle">
              Our team will help in creating a training format that serves your
              needs.
            </div>
            <div className="skills-programs-image-text-paragraph">
              We provide a variety of delivery options, whether your group is
              small or large, ranging from private team sessions to multi-day
              workshops, one-on-one sessions or remote online training for teams
              dispersed across locations, we will customize a solution that fits
              your needs.
            </div>
          </div>
          <img
            src={GoodCompany}
            alt="blank image"
            className="skills-programs-image skills-programs-image-top"
          />
        </div>{" "}
        <div className="skills-programs-image-parent">
          {" "}
          <img
            src={TalentAug}
            alt="blank image"
            className="skills-programs-image"
          />
          <div className="skills-programs-image-text">
            <div className="skills-programs-image-text-title">
              Digital & Business Focused
            </div>
            <div className="skills-programs-image-text-subtitle">
              Our team will support in creating outcome driven training
              journeys.
            </div>
            <div className="skills-programs-image-text-paragraph">
              We have an intensive experience of creating accelerator programs
              built to generate impact (revenue growth, digital activation,
              job-readiness) for key stakeholders (employees, customers,
              resellers) through carefully crafted training curriculum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
