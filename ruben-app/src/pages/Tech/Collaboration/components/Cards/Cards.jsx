import "./cards.css";
function Cards() {
  return (
    <div className="cloud-collaboration-cards-wrapper">
      <div className="cloud-collaboration-cards-container">
        <div className="cloud-collaboration-card">
          <div className="cloud-collaboration-card-header">Use Case</div>
          <div className="cloud-collaboration-card-title">
            Google Workspace / Gsuit
          </div>
          <p className="cloud-collaboration-card-paragraph">
            GWS is a suite of office tools including Gmail, Docs, Sheets, Slides
            etc., with real-time editing and collaboration features. GWS
            incorporates robust data security and access to data from Cloud
            enabling efficient collaboration and remote work.
          </p>
        </div>
        <div className="cloud-collaboration-card">
          <div className="cloud-collaboration-card-header">Use Case</div>
          <div className="cloud-collaboration-card-title">
            Chrome OS / Android OS
          </div>
          <p className="cloud-collaboration-card-paragraph">
            Chrome OS and Chromebooks are designed for robust security (no
            viruses) and quick startup, efficient performance as well as
            automated cloud-pushed updates. This makes the life-time of Chrome
            OS devices outperform any other office OS solutions.
          </p>
        </div>
        <div className="cloud-collaboration-card">
          <div className="cloud-collaboration-card-header">Use Case</div>
          <div className="cloud-collaboration-card-title">Generative AI</div>
          <p className="cloud-collaboration-card-paragraph">
            Use tools like Dueat AI, Gemini to optimize workforce productivity
            and embrace generative AI technologies to support their daily work
            tasks, like: language translation, information research, creating
            content, reports and marketing materials.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
