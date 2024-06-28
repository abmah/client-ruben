import "./bottom-cards.css";

function BottomCards() {
  return (
    <div className="cloud-collaboration-bottom-cards-wrapper">
      <div className="cloud-collaboration-bottom-cards-container">
        <h1 className="cloud-collaboration-bottom-cards-title">
          A value proposition that stand out
        </h1>
        <div className="cloud-collaboration-bottom-cards-parent">
          <div className="cloud-collaboration-bottom-card">
            <div className="cloud-collaboration-bottom-card-header-circle"></div>
            <div className="cloud-collaboration-bottom-card-title">
              Easy Deployment
            </div>
            <div className="cloud-collaboration-bottom-card-subtitle">
              With offices in Dubai and Riyadh and footprint in all GCC
              countries we can easily deploy our team onsite
            </div>
          </div>
          <div className="cloud-collaboration-bottom-card cloud-collaboration-bottom-card-orange">
            <div className="cloud-collaboration-bottom-card-header-circle"></div>
            <div className="cloud-collaboration-bottom-card-title">
              Certified Admins
            </div>
            <div className="cloud-collaboration-bottom-card-subtitle">
              Our engineers are among few in MENA to be officially certified by
              Google as GWS Administrators.
            </div>
          </div>
          <div className="cloud-collaboration-bottom-card cloud-collaboration-bottom-card-blue">
            <div className="cloud-collaboration-bottom-card-header-circle"></div>
            <div className="cloud-collaboration-bottom-card-title">
              Mixed Licencing
            </div>
            <div className="cloud-collaboration-bottom-card-subtitle">
              We offer mixed licencing, allowing to keep some employees on
              cost-efficient licences and others on top-tier storage and
              security.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomCards;
