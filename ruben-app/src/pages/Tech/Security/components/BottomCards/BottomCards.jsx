import "./bottom-cards.css";

function BottomCards() {
  return (
    <div className="cloud-security-bottom-cards-wrapper">
      <div className="cloud-security-bottom-cards-container">
        <h1 className="cloud-security-bottom-cards-title">
          A value proposition that stand out
        </h1>
        <div className="cloud-security-bottom-cards-parent">
          <div className="cloud-security-bottom-card">
            <div className="cloud-security-bottom-card-header-circle"></div>
            <div className="cloud-security-bottom-card-title">
              Easy Deployment
            </div>
            <div className="cloud-security-bottom-card-subtitle">
              With offices in Dubai and Riyadh and footprint in all GCC
              countries we can easily deploy our team onsite
            </div>
          </div>
          <div className="cloud-security-bottom-card cloud-security-bottom-card-orange">
            <div className="cloud-security-bottom-card-header-circle"></div>
            <div className="cloud-security-bottom-card-title">
              Multi Certified
            </div>
            <div className="cloud-security-bottom-card-subtitle">
              Our engineers hold certifications from top cloud vendors like GCP,
              AWS, Azure.
            </div>
          </div>
          <div className="cloud-security-bottom-card cloud-security-bottom-card-blue">
            <div className="cloud-security-bottom-card-header-circle"></div>
            <div className="cloud-security-bottom-card-title">
              Solution Agnostic
            </div>
            <div className="cloud-security-bottom-card-subtitle">
              We are capable in extending full scope support with multi-cloud
              environments including GCP, AWS and Azure
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomCards;
