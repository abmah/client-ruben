import "./cards.css";
function Cards() {
  return (
    <div className="skills-programs-cards-wrapper">
      <div className="skills-programs-cards-container">
        <div className="skills-programs-card">
          <div className="skills-programs-card-header">Use Case</div>
          <div className="skills-programs-card-title">
            Digital Accelerator Programs
          </div>
          <p className="skills-programs-card-paragraph">
            Designed to educate key stakeholders (employees, customers,
            resellers) through carefully crafted training curriculum, focused on
            digital skills.
          </p>
        </div>
        <div className="skills-programs-card">
          <div className="skills-programs-card-header">Use Case</div>
          <div className="skills-programs-card-title">
            Sector Focused Education
          </div>
          <p className="skills-programs-card-paragraph">
            Education initiatives built to generate a specific, digital-focused
            impact on local SMEs from specific industries and sectors (e.g.
            government, tourism, startups etc).
          </p>
        </div>
        <div className="skills-programs-card">
          <div className="skills-programs-card-header">Use Case</div>
          <div className="skills-programs-card-title">Scale Up Programs</div>
          <p className="skills-programs-card-paragraph">
            Training Programs built to deliver a specific, tangible, measurable
            growth results, e.g. business growth or digital activation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
