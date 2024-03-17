import CloudStrategy from "./cloud-strategy.svg";
import CloudMigration from "./cloud-migration.svg";
import "./images.css";

function Images() {
  return (
    <div className="cloud-collaboration-images-wrapper">
      <div className="cloud-collaboration-images-container">
        <div className="cloud-collaboration-image-parent">
          <div className="cloud-collaboration-image-text">
            <div className="cloud-collaboration-image-text-title">
              Workforce Productivity Strategy
            </div>
            <div className="cloud-collaboration-image-text-subtitle">
              We support to define directions and outcomes
            </div>
            <div className="cloud-collaboration-image-text-paragraph">
              A successful cloud transformation for workforce productivity
              relies on a well-defined strategy, serving as the foundation. This
              strategy outlines the objectives behind the transformation and
              articulates success criteria: increased productivity, optimized
              remote work capabilities, data security.
            </div>
          </div>
          <img
            src={CloudStrategy}
            alt="blank image"
            className="cloud-collaboration-image cloud-collaboration-image-top"
          />
        </div>{" "}
        <div className="cloud-collaboration-image-parent">
          {" "}
          <img
            src={CloudMigration}
            alt="blank image"
            className="cloud-collaboration-image"
          />
          <div className="cloud-collaboration-image-text">
            <div className="cloud-collaboration-image-text-title">
              Migration Support
            </div>
            <div className="cloud-collaboration-image-text-subtitle">
              Our team of Certified Workspace Administrators and Project
              Managers will put you on the right migration path
            </div>
            <div className="cloud-collaboration-image-text-paragraph">
              Our team will map all sources of data in your current work
              environemnt (like files, emails, contacts) and migrate to Google
              Workspace without any downtime. With a customized roll-out and
              trainings plan, designed to promote a shared purpose, our experts
              help drive adoption and efficiency.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
