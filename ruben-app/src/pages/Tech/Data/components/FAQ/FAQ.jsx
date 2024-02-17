import "./faq.css";
import Faq from "react-faq-component";
import FaqImage from "../../../../../assets/faq.svg";

import ExpandLogo from "../../../../../assets/expand.svg";
import CollapseLogo from "../../../../../assets/collapse.svg";
let data = {
  rows: [
    {
      title:
        "Why should an organization consider moving its data to the cloud?",
      content:
        "Moving data to the cloud provides scalability, flexibility, and cost-efficiency, allowing organizations to adapt to changing data needs, access advanced analytics, and optimize resource utilization.",
    },
    {
      title:
        "What are the security measures in place to protect data in the cloud?",
      content:
        "Cloud service providers implement robust security measures, including encryption, access controls, and compliance certifications, ensuring data integrity and protection.",
    },
    {
      title:
        "How does the cloud support large-scale data storage and processing?",
      content:
        "Cloud platforms offer scalable storage solutions and data processing services, allowing organizations to handle large volumes of data efficiently and cost-effectively.",
    },
    {
      title:
        "What considerations are important when migrating existing data to the cloud?",
      content:
        "Considerations include data transfer methods, compatibility with cloud platforms, and potential downtime. A well-planned migration strategy is essential for a smooth transition.",
    },
    {
      title:
        "How can the cloud enhance data analytics capabilities for businesses?",
      content:
        "Cloud-based analytics tools provide organizations with advanced capabilities such as real-time analytics, machine learning, and data visualization, enabling informed decision-making.",
    },
    {
      title:
        "What is the role of data governance in a cloud-based data environment?",
      content:
        "Data governance ensures data quality, compliance, and security in the cloud, establishing policies and processes to govern data throughout its lifecycle.",
    },
    {
      title:
        "How can organizations manage and control costs associated with cloud data storage?",
      content:
        "Implementing cost-monitoring tools, optimizing storage resources, and utilizing tiered storage options are strategies to manage and control cloud data storage costs.",
    },
    {
      title:
        "What is the impact of the cloud on data accessibility and collaboration within organizations?",
      content:
        "Cloud platforms enhance data accessibility, enabling remote collaboration, real-time updates, and seamless sharing of data across teams, fostering collaboration and productivity.",
    },
    {
      title:
        "How can the cloud address compliance requirements for sensitive data?",
      content:
        "Cloud providers offer compliance certifications and features such as encryption and access controls, helping organizations meet regulatory requirements and protect sensitive data.",
    },
    {
      title:
        "How does the cloud support disaster recovery and data backup strategies?",
      content:
        "Cloud platforms provide scalable and resilient infrastructure, allowing organizations to implement robust disaster recovery and backup solutions, ensuring data availability and continuity.",
    },
  ],
};

function ExpandingLogo() {
  return (
    <img
      src={ExpandLogo}
      alt="expand"
      className="cloud-data-expanding-logo"
    ></img>
  );
}

function CollapsingLogo() {
  return (
    <img
      src={CollapseLogo}
      alt="collapse"
      className="cloud-data-collapsing-logo"
    ></img>
  );
}

function FAQ() {
  return (
    <div className="cloud-data-faq-wrapper">
      <div className="cloud-data-faq-container">
        <div className="cloud-data-faq-left-section">
          <img src={FaqImage} alt="faq" className="cloud-data-faq-image" />
          <h1 className="cloud-data-faq-title">Frequently Asked Questions</h1>
        </div>
        <div className="cloud-data-faq-section-container">
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
