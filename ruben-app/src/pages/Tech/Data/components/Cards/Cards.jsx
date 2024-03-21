import "./cards.css";
function Cards() {
  return (
    <div className="cloud-data-cards-wrapper">
      <div className="cloud-data-cards-container">
        <div className="cloud-data-card">
          <div className="cloud-data-card-header">Value</div>
          <div className="cloud-data-card-title">
            Future Proof Data Infrastructure
          </div>
          <p className="cloud-data-card-paragraph">
            Reduce manual work required to maintain your data servers and
            improve data accessibility and collaboration. Implement Cloud Data
            Lakes, Data Warehouses, BI Tools to future-proof your organization
            against ever-growing amount of data.
          </p>
        </div>
        <div className="cloud-data-card">
          <div className="cloud-data-card-header">Value</div>
          <div className="cloud-data-card-title">
            Optimize Data Infrastructure Costs
          </div>
          <p className="cloud-data-card-paragraph">
            Pay for resources on a usage basis, avoiding upfront investments in
            hardware and reducing overall operational expenses. Cloud Data
            services offer efficient resource allocation and cost management,
            ensuring only utilized resources are paid.
          </p>
        </div>
        <div className="cloud-data-card">
          <div className="cloud-data-card-header">Value</div>
          <div className="cloud-data-card-title">Kick-off Your AI Journey</div>
          <p className="cloud-data-card-paragraph">
            Data plays a foundational and critical role in supporting artificial
            intelligence (AI) by serving as the fuel that trains and enhances AI
            models. Moving your data to cloud is the first and most important
            step on your AI journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
