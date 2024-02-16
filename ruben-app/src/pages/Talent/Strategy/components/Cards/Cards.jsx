import "./cards.css";
function Cards() {
  return (
    <div className="talent-strategy-cards-wrapper">
      <div className="talent-strategy-cards-container">
        <div className="talent-strategy-card">
          <div className="talent-strategy-card-header">Use Case</div>
          <div className="talent-strategy-card-title">
            Assemble Strategy Teams
          </div>
          <p className="talent-strategy-card-paragraph">
            Contractors can be quickly onboarded, allowing organizations to
            assemble consultancy teams rapidly in response to immediate needs.
            This agility is beneficial when dealing with time-sensitive projects
            or sudden shifts in business requirements.
          </p>
        </div>
        <div className="talent-strategy-card">
          <div className="talent-strategy-card-header">Use Case</div>
          <div className="talent-strategy-card-title">
            Strenghten Strategy Teams
          </div>
          <p className="talent-strategy-card-paragraph">
            Contractors provide flexibility in team composition, allowing
            organizations to scale up or down or add industry-specific knowledge
            to the team. With this flexibility organizations can tailor the
            skill set to match the unique requirements of each project.
          </p>
        </div>
        <div className="talent-strategy-card">
          <div className="talent-strategy-card-header">Use Case</div>
          <div className="talent-strategy-card-title">Inhouse Strategy</div>
          <p className="talent-strategy-card-paragraph">
            In-house strategy contractor can offer a flexible, cost-effective
            approach in adressing a specific organizational challenge. Typically
            this kind of engagmeent comes with lower overhead costs compared to
            employment or hiring a strategy consultancy agencies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
