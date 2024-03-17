import "./cards.css";
function Cards() {
  return (
    <div className="cloud-adoption-cards-wrapper">
      <div className="cloud-adoption-cards-container">
        <div className="cloud-adoption-card">
          <div className="cloud-adoption-card-header">Value</div>
          <div className="cloud-adoption-card-title">
            Future Proof Your IT Infrastructure
          </div>
          <p className="cloud-adoption-card-paragraph">
            Create a sturdy infrastructure to lay the foundation for your
            success. Every business embraces its individual IT strategy, and we
            are here to help you tailor yours based on your workloads,
            objectives, and priorities.
          </p>
        </div>
        <div className="cloud-adoption-card">
          <div className="cloud-adoption-card-header">Value</div>
          <div className="cloud-adoption-card-title">
            Maximize IT Cost Efficiency
          </div>
          <p className="cloud-adoption-card-paragraph">
            We evaluate your existing infrastructure and provide suggestions for
            streamlined processes and workflows, pinpointing opportunities for
            cost optimization and ensuring your IT expenditures align with
            business objectives.
          </p>
        </div>
        <div className="cloud-adoption-card">
          <div className="cloud-adoption-card-header">Value</div>
          <div className="cloud-adoption-card-title">
            Kick-off Your Serverless Journey
          </div>
          <p className="cloud-adoption-card-paragraph">
            The unique advantage of cloud technology is serverless architectures
            that automatically scale based on demand. By abstracting away manual
            infrastructure management it allows to always deliver maximum
            performance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
