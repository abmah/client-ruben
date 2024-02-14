import "./cards.css";
function Cards() {
  return (
    <div className="talent-digital-cards-wrapper">
      <div className="talent-digital-cards-container">
        <div className="talent-digital-card">
          <div className="talent-digital-card-header">Use Case</div>
          <div className="talent-digital-card-title">Interim Management</div>
          <p className="talent-digital-card-paragraph">
            High profile leaders, bringing wealth of specialized experience in
            digital strategies and technologies. Their temporary presence allows
            for rapid adaptation to evolving technological landscapes and allows
            to facilitate knowledge transfer to existing teams, leaving a
            lasting impact.
          </p>
        </div>
        <div className="talent-digital-card">
          <div className="talent-digital-card-header">Use Case</div>
          <div className="talent-digital-card-title">Augmenting New Skills</div>
          <p className="talent-digital-card-paragraph">
            Enhance capabilities of your team with temporary injection of
            specialized skills. Augmenting new skills allows to implement
            cutting-edge technologies and enhance problem-solving capabilities,
            fostering innovation and efficiency in addressing complex challenges
            within the digital landscape.
          </p>
        </div>
        <div className="talent-digital-card">
          <div className="talent-digital-card-header">Use Case</div>
          <div className="talent-digital-card-title">
            Boosting Team Capacity
          </div>
          <p className="talent-digital-card-paragraph">
            Adding temporary resources is essential when scaling operations,
            meeting growing demands, and ensuring timely project delivery. It
            enables teams to handle increased workloads efficiently, capitalize
            on emerging opportunities, and maintain a responsive and agile
            approach.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
