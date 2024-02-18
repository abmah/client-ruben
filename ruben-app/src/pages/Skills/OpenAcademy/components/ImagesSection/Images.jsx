import GoodCompany from "./good-company.svg";
import TalentAug from "./talent-aug.svg";
import "./images.css";

function Images() {
  return (
    <div className="skills-academy-images-wrapper">
      <div className="skills-academy-images-container">
        <div className="skills-academy-image-parent">
          <div className="skills-academy-image-text">
            <div className="skills-academy-image-text-title">
              What will you learn ?
            </div>
            <div className="skills-academy-image-text-subtitle">
              Our trainings are focused on purely practical skills
            </div>
            <div className="skills-academy-image-text-paragraph">
              Some of the skills you will acquire with our trainings: how to
              create, run & optimize search campaigns, build awareness and reach
              your audience with display ads, implement and track your social
              media and email marketing campaigns and measure your performance
              as well as analyse and visualize marketing data
            </div>
          </div>
          <img
            src={GoodCompany}
            alt="blank image"
            className="skills-academy-image skills-academy-image-top"
          />
        </div>{" "}
        <div className="skills-academy-image-parent">
          {" "}
          <img
            src={TalentAug}
            alt="blank image"
            className="skills-academy-image"
          />
          <div className="skills-academy-image-text">
            <div className="skills-academy-image-text-title">
              Comprehensive yet step by setp
            </div>
            <div className="skills-academy-image-text-subtitle">
              You can't learn everything in few days!
            </div>
            <div className="skills-academy-image-text-paragraph">
              We understand that transitioning from novice to expert takes time.
              Instead of intensive bootcamps that cover a vast learning journey
              in few days, the most effective approach is to proceed step by
              step: learn a new skill, apply, and repeat. With us you can opt
              for the complete program at your own pace or just choose specific
              topics of your interest.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
