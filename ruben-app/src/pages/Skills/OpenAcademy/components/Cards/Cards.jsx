import "./cards.css";
function Cards() {
  return (
    <div className="skills-academy-cards-wrapper">
      <div className="skills-academy-cards-container">
        <div className="skills-academy-card">
          <div className="skills-academy-card-header">Use Case</div>
          <div className="skills-academy-card-title">Learn for the job</div>
          <p className="skills-academy-card-paragraph">
            If you aim to enter or progress in the thriving digital industry,
            you're in the right spot. This course provides comprehensive
            knowledge of the essential tools required for a career in this
            field. It also enables advancing your practical skills in managing
            digital campaigns.
          </p>
        </div>
        <div className="skills-academy-card">
          <div className="skills-academy-card-header">Use Case</div>
          <div className="skills-academy-card-title">Grow your own company</div>
          <p className="skills-academy-card-paragraph">
            Digital campaigns are a powerful tool for business growth, offering
            a targeted approach to reach potential customers. Through our
            guidance you will learn how online channels such as social media,
            search engines, and email can enhance your company's visibility and
            help generate leads.
          </p>
        </div>
        <div className="skills-academy-card">
          <div className="skills-academy-card-header">Use Case</div>
          <div className="skills-academy-card-title">
            Get officialy certified
          </div>
          <p className="skills-academy-card-paragraph">
            You will have an opportunity to acquire up to 3-level
            certifications. The certifications from Google / META are
            acknowledged by prominent tech and digital companies in GCC region.
            In addition you will be recognized by KHDA approved certificates and
            the DFME issued certifications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
