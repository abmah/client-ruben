import "./faq.css";
import Faq from "react-faq-component";
import FaqImage from "../../../../../assets/faq.svg";

import ExpandLogo from "../../../../../assets/expand.svg";
import CollapseLogo from "../../../../../assets/collapse.svg";

const data = {
  rows: [
    {
      title: "What is talent augmentation?",
      content:
        "Talent augmentation involves supplementing an organization's workforce with external professionals, often on a temporary basis, to fill skill gaps, meet project demands, or address specific needs without the long-term commitment of hiring full-time employees.",
    },
    {
      title: "How is talent augmentation different from traditional hiring?",
      content:
        "Talent augmentation allows organizations to quickly access specialized skills without the lengthy recruitment process, providing flexibility to scale up or down as needed. Unlike traditional hiring, it offers a more agile and cost-effective approach to workforce management.",
    },
    {
      title:
        "What types of skills can be augmented through talent augmentation services?",
      content:
        "Talent augmentation can cover a wide range of skills, including but not limited to software development, project management, strategy marketing, data analysis, strategy, cybersecurity, and design, depending on the specific needs of the organization.",
    },
    {
      title: "How does the talent augmentation process work?",
      content:
        "Organizations typically partner with talent augmentation providers like us who assess their needs, identify skill requirements, and then source and deploy qualified professionals. The augmented talent works collaboratively with the in-house team on specific projects or tasks.",
    },
    {
      title: "What are the benefits of talent augmentation?",
      content:
        "Benefits include access to specialized skills, increased flexibility to adapt to changing project requirements, faster project delivery, cost-effectiveness compared to hiring full-time staff, and the ability to scale resources up or down based on demand.",
    },
    {
      title: "How is the quality of augmented talent ensured?",
      content:
        "We employ rigorous screening processes to ensure the expertise and professionalism of our candidates as well as check references, and assess previous work experience to maintain high-quality standards.",
    },
    {
      title:
        "Can talent augmentation be a long-term solution for staffing needs?",
      content:
        "Yes, talent augmentation can be a long-term solution based on the organization's requirements. It provides flexibility, allowing businesses to extend or reduce the duration of engagements according to evolving needs.",
    },
    {
      title: "How does talent augmentation impact team dynamics?",
      content:
        "When integrated seamlessly, augmented talent can enhance team dynamics by bringing fresh perspectives, diverse skills, and valuable experiences. Clear communication and collaboration are key to ensuring a positive impact on team dynamics.",
    },
    {
      title:
        "Can talent augmentation be customized for specific industry requirements?",
      content:
        "Yes, talent augmentation services are often tailored to meet the specific needs and compliance requirements of various industries, ensuring that the augmented talent aligns with the unique challenges and regulations of the client's sector.",
    },
    {
      title: "What is the cost structure associated with talent augmentation?",
      content:
        "The cost structure varies based on factors such as the level of expertise required, project duration, and the specific skills needed. Talent augmentation is often cost-effective compared to hiring full-time employees as it eliminates long-term commitments and associated overhead costs.",
    },
  ],
};

function ExpandingLogo() {
  return (
    <img
      src={ExpandLogo}
      alt="expand"
      className="talent-strategy-expanding-logo"
    ></img>
  );
}

function CollapsingLogo() {
  return (
    <img
      src={CollapseLogo}
      alt="collapse"
      className="talent-strategy-collapsing-logo"
    ></img>
  );
}

function FAQ() {
  return (
    <div className="talent-strategy-faq-wrapper">
      <div className="talent-strategy-faq-container">
        <div className="talent-strategy-faq-left-section">
          <img src={FaqImage} alt="faq" className="talent-strategy-faq-image" />
          <h1 className="talent-strategy-faq-title">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="talent-strategy-faq-section-container">
          <Faq
            data={data}
            config={{
              animate: true,
              openOnload: 0,
              expandIcon: <ExpandingLogo />,
              collapseIcon: <CollapsingLogo />,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
