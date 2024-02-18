import "./bottom-cards.css";

function BottomCards() {
  return (
    <div className="skills-academy-bottom-cards-wrapper">
      <div className="skills-academy-bottom-cards-container">
        <h1 className="skills-academy-bottom-cards-title">
          A value proposition that stand out
        </h1>
        <div className="skills-academy-bottom-cards-parent">
          <div className="skills-academy-bottom-card">
            <div className="skills-academy-bottom-card-header-circle"></div>
            <div className="skills-academy-bottom-card-title">
              Limited Number of Participants
            </div>
            <div className="skills-academy-bottom-card-subtitle">
              We accept a maximum of 10 participants for each training, allowing
              for enough time to learn the applied skills.
            </div>
          </div>
          <div className="skills-academy-bottom-card skills-academy-bottom-card-orange">
            <div className="skills-academy-bottom-card-header-circle"></div>
            <div className="skills-academy-bottom-card-title">
              Portfolio of Trainers
            </div>
            <div className="skills-academy-bottom-card-subtitle">
              Our certified trainers with experience in top companies will help
              the audience get the most out of the training.
            </div>
          </div>
          <div className="skills-academy-bottom-card skills-academy-bottom-card-blue">
            <div className="skills-academy-bottom-card-header-circle"></div>
            <div className="skills-academy-bottom-card-title">
              Recommended Quality
            </div>
            <div className="skills-academy-bottom-card-subtitle">
              We have a track record of delivering full-fledged training and
              scale up programs for top tech brands.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomCards;
