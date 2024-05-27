import "./bottom-cards.css";

function BottomCards() {
  return (
    <div className="talent-subject-bottom-cards-wrapper">
      <div className="talent-subject-bottom-cards-container">
        <h1 className="talent-subject-bottom-cards-title">
          A value proposition that stand out
        </h1>
        <div className="talent-subject-bottom-cards-parent">
          <div className="talent-subject-bottom-card">
            <div className="talent-subject-bottom-card-header-circle"></div>
            <div className="talent-subject-bottom-card-title">Save time</div>
            <div className="talent-subject-bottom-card-subtitle">
              start the project almost immediately after sharing the
              requirements
            </div>
          </div>
          <div className="talent-subject-bottom-card talent-subject-bottom-card-orange">
            <div className="talent-subject-bottom-card-header-circle"></div>
            <div className="talent-subject-bottom-card-title">
              No commitment
            </div>
            <div className="talent-subject-bottom-card-subtitle">
              incur costs only if you accept the final candidate from us
            </div>
          </div>
          <div className="talent-subject-bottom-card talent-subject-bottom-card-blue">
            <div className="talent-subject-bottom-card-header-circle"></div>
            <div className="talent-subject-bottom-card-title">
              Safe and secure
            </div>
            <div className="talent-subject-bottom-card-subtitle">
              we diligently check background and references of our candidates
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomCards;
