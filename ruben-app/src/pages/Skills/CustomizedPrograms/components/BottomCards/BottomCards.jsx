import "./bottom-cards.css";

function BottomCards() {
  return (
    <div className="skills-programs-bottom-cards-wrapper">
      <div className="skills-programs-bottom-cards-container">
        <h1 className="skills-programs-bottom-cards-title">
          A value proposition that stand out
        </h1>
        <div className="skills-programs-bottom-cards-parent">
          <div className="skills-programs-bottom-card">
            <div className="skills-programs-bottom-card-header-circle"></div>
            <div className="skills-programs-bottom-card-title">
              Streamlined Deployment
            </div>
            <div className="skills-programs-bottom-card-subtitle">
              With offices in Dubai and Riyadh and footprint in all GCC
              countries we can easily deploy our training teams onsite
            </div>
          </div>
          <div className="skills-programs-bottom-card skills-programs-bottom-card-orange">
            <div className="skills-programs-bottom-card-header-circle"></div>
            <div className="skills-programs-bottom-card-title">
              Portfolio of Trainers
            </div>
            <div className="skills-programs-bottom-card-subtitle">
              Our certified trainers with experience in top companies will help
              the audience get the most out of the training.
            </div>
          </div>
          <div className="skills-programs-bottom-card skills-programs-bottom-card-blue">
            <div className="skills-programs-bottom-card-header-circle"></div>
            <div className="skills-programs-bottom-card-title">
              Recommended Quality
            </div>
            <div className="skills-programs-bottom-card-subtitle">
              We have a track record of delivering full-fledged training and
              scale up programs for top tech brands
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomCards;
