import "./cards.css";
function Cards() {
  return (
    <div className="cloud-security-cards-wrapper">
      <div className="cloud-security-cards-container">
        <div className="cloud-security-card">
          <div className="cloud-security-card-header">Use Case</div>
          <div className="cloud-security-card-title">CSPM</div>
          <p className="cloud-security-card-paragraph">
            Cloud Security Posture Management and cloud asset inventory
            monitoring will dramatically reduce security risks.
          </p>
        </div>
        <div className="cloud-security-card">
          <div className="cloud-security-card-header">Use Case</div>
          <div className="cloud-security-card-title">Zero Trust</div>
          <p className="cloud-security-card-paragraph">
            Add additional verification at every data access points to secure
            from attacks and protect employee accounts.
          </p>
        </div>
        <div className="cloud-security-card">
          <div className="cloud-security-card-header">Use Case</div>
          <div className="cloud-security-card-title">DevSec Ops</div>
          <p className="cloud-security-card-paragraph">
            Detect and contain breaches and correct misconfigurations more
            efficiently with modern security tooling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
