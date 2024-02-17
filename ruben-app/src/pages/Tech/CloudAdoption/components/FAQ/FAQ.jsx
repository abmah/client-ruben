import "./faq.css";
import Faq from "react-faq-component";
import FaqImage from "../../../../../assets/faq.svg";

import ExpandLogo from "../../../../../assets/expand.svg";
import CollapseLogo from "../../../../../assets/collapse.svg";

let data = {
  rows: [
    {
      title:
        "What are the primary advantages of adopting cloud technology for businesses?",
      content:
        "Cloud adoption offers benefits such as increased scalability, cost savings, enhanced flexibility, and improved access to advanced technologies.",
    },
    {
      title:
        "How can organizations address data security concerns when migrating to the cloud?",
      content:
        "Cloud service providers implement robust security measures, including encryption, identity management, and compliance certifications, to ensure data security in the cloud.",
    },
    {
      title:
        "What factors should be considered when choosing between different cloud service models (IaaS, PaaS, SaaS)?",
      content:
        "Considerations include the level of control desired, scalability needs, and the management responsibilities organizations are willing to delegate to the cloud provider.",
    },
    {
      title:
        "How does cloud adoption contribute to scalability and flexibility in IT infrastructure?",
      content:
        "Cloud technology allows organizations to scale resources up or down based on demand, providing flexibility to adapt quickly to changing business requirements.",
    },
    {
      title:
        "What are common challenges faced during the cloud adoption process, and how can they be overcome?",
      content:
        "Challenges include data migration complexities and integration issues. Organizations can address these by thorough planning, leveraging cloud-native tools, and engaging experienced partners.",
    },
    {
      title:
        "How does cloud adoption impact the roles and responsibilities of existing IT staff?",
      content:
        "Cloud adoption may shift IT roles towards strategic planning, automation, and governance, requiring upskilling to manage cloud-based environments effectively.",
    },
    {
      title:
        "How can organizations optimize cost management and control expenses in the cloud environment?",
      content:
        "Implementing cost monitoring tools, rightsizing resources, and leveraging reserved instances are strategies to optimize cloud costs.",
    },
    {
      title:
        "What considerations are important when migrating legacy applications to the cloud?",
      content:
        "Assessing application compatibility, addressing dependencies, and implementing a phased migration approach are crucial considerations for a successful migration.",
    },
    {
      title:
        "In what ways does cloud adoption contribute to overall digital transformation efforts?",
      content:
        "Cloud adoption facilitates agility, innovation, and improved collaboration, driving digital transformation by enabling organizations to rapidly respond to market changes.",
    },
    {
      title:
        "How can organizations ensure a smooth transition and minimize downtime during the cloud migration process?",
      content:
        "Detailed planning, conducting thorough testing, and implementing gradual migration strategies, such as a phased approach, help minimize disruptions and ensure a smooth transition.",
    },
  ],
};

function ExpandingLogo() {
  return (
    <img
      src={ExpandLogo}
      alt="expand"
      className="cloud-adoption-expanding-logo"
    ></img>
  );
}

function CollapsingLogo() {
  return (
    <img
      src={CollapseLogo}
      alt="collapse"
      className="cloud-adoption-collapsing-logo"
    ></img>
  );
}

function FAQ() {
  return (
    <div className="cloud-adoption-faq-wrapper">
      <div className="cloud-adoption-faq-container">
        <div className="cloud-adoption-faq-left-section">
          <img src={FaqImage} alt="faq" className="cloud-adoption-faq-image" />
          <h1 className="cloud-adoption-faq-title">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="cloud-adoption-faq-section-container">
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
