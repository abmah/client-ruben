import "./cards.css";
function Cards() {
  return (
    <div className="talent-subject-cards-wrapper">
      <div className="talent-subject-cards-container">
        <div className="talent-subject-card">
          <div className="talent-subject-card-header">Use Case</div>
          <div className="talent-subject-card-title">Cut Time-to-Insight</div>
          <p className="talent-subject-card-paragraph">
            You can quickly access highly specialized, technical skills and
            knowledge of SMEs on an as-needed basis, without the time and effort
            required for a lengthy hiring process. This agility is essential for
            addressing immediate challenges or seizing time-sensitive
            opportunities.
          </p>
        </div>
        <div className="talent-subject-card">
          <div className="talent-subject-card-header">Use Case</div>
          <div className="talent-subject-card-title">Solve Problems</div>
          <p className="talent-subject-card-paragraph">
            Flexible arrangements allow you to address your short-term or
            intermittent project needs, especially in areas where highly
            complicated problems require solving. You can engage subject matter
            experts as needed to help finalize deliverables or tasks.
          </p>
        </div>
        <div className="talent-subject-card">
          <div className="talent-subject-card-header">Use Case</div>
          <div className="talent-subject-card-title">Transfer Knowledge</div>
          <p className="talent-subject-card-paragraph">
            SMEs can share their expertise and best practices with internal
            teams during their hourly engagements, contributing to knowledge
            transfer and building internal capabilities in areas where your
            organization does not have the required experience and experts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
