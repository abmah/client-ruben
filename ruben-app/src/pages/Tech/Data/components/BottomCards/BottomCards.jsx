import "./bottom-cards.css";

function BottomCards() {
  return (
    <div className="cloud-data-bottom-cards-wrapper">
      <div className="cloud-data-bottom-cards-container">
        <h1 className="cloud-data-bottom-cards-title">
          A value proposition that stand out
        </h1>
        <div className="cloud-data-bottom-cards-parent">
          <div className="cloud-data-bottom-card">
            <div className="cloud-data-bottom-card-header-circle"></div>
            <div className="cloud-data-bottom-card-title">Easy Deployment</div>
            <div className="cloud-data-bottom-card-subtitle">
              With offices in Dubai and Riyadh and footprint in all GCC
              countries we can easily deploy our team onsite
            </div>
          </div>
          <div className="cloud-data-bottom-card cloud-data-bottom-card-orange">
            <div className="cloud-data-bottom-card-header-circle"></div>
            <div className="cloud-data-bottom-card-title">Multi Certified</div>
            <div className="cloud-data-bottom-card-subtitle">
              Our engineers hold certifications from top cloud vendors like GCP,
              AWS, Azure.
            </div>
          </div>
          <div className="cloud-data-bottom-card cloud-data-bottom-card-blue">
            <div className="cloud-data-bottom-card-header-circle"></div>
            <div className="cloud-data-bottom-card-title">
              Solution Agnostic
            </div>
            <div className="cloud-data-bottom-card-subtitle">
              We are capable in extending full scope support with comprehensive
              set Of cloud product environments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomCards;
