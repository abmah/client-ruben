import "./cards.css";
function Cards() {
  return (
    <div className="talent-operations-cards-wrapper">
      <div className="talent-operations-cards-container">
        <div className="talent-operations-card">
          <div className="talent-operations-card-header">Use Case</div>
          <div className="talent-operations-card-title">Interim Management</div>
          <p className="talent-operations-card-paragraph">
            Experienced Consultants with years of specialisation in the field
            can engage as interim stream leaders or CXOs, providing
            organizations with immediate leadership and specialized expertise in
            optimization and cost cutting projects. The flexibility and
            objective perspective they bring can contribute significantly to
            success.
          </p>
        </div>
        <div className="talent-operations-card">
          <div className="talent-operations-card-header">Use Case</div>
          <div className="talent-operations-card-title">
            Strengthen Consultancy Teams
          </div>
          <p className="talent-operations-card-paragraph">
            Contractors provide flexibility in team composition, allowing
            organizations to scale up or down or add industry-specific knowledge
            to the team. With this flexibility organizations can tailor the
            skill set to match the unique requirements of each project.
          </p>
        </div>
        <div className="talent-operations-card">
          <div className="talent-operations-card-header">Use Case</div>
          <div className="talent-operations-card-title">
            Strengthen Transformation Teams
          </div>
          <p className="talent-operations-card-paragraph">
            In-house operations consultant can offer a flexible, cost-effective
            approach in addressing specific organizational challenge. Typically
            this kind of engagement comes with lower overhead costs compared to
            employment or hiring a strategy consultancy agencies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
