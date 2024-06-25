import "./bottom-cards.css";

function BottomCards() {
  return (
    <div className="talent-digital-bottom-cards-wrapper">
      <div className="talent-digital-bottom-cards-container">
        <h1 className="talent-digital-bottom-cards-title">
          A value proposition that stand out
        </h1>
        <div className="talent-digital-bottom-cards-parent">
          <div className="talent-digital-bottom-card">
            <div className="talent-digital-bottom-card-header-circle"></div>
            <div className="talent-digital-bottom-card-title">Save time</div>
            <div className="talent-digital-bottom-card-subtitle">
              Start the project almost immediately after sharing the
              requirements
            </div>
          </div>
          <div className="talent-digital-bottom-card talent-digital-bottom-card-orange">
            <div className="talent-digital-bottom-card-header-circle"></div>
            <div className="talent-digital-bottom-card-title">
              No commitment
            </div>
            <div className="talent-digital-bottom-card-subtitle">
              Incur costs only if you accept the final candidate from us
            </div>
          </div>
          <div className="talent-digital-bottom-card talent-digital-bottom-card-blue">
            <div className="talent-digital-bottom-card-header-circle"></div>
            <div className="talent-digital-bottom-card-title">
              Safe and secure
            </div>
            <div className="talent-digital-bottom-card-subtitle">
              We diligently check background and references of our candidates
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomCards;
