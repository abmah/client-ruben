import "./faq.css";
import Faq from "react-faq-component";
import FaqImage from "../../../../../assets/faq.svg";

import ExpandLogo from "../../../../../assets/expand.svg";
import CollapseLogo from "../../../../../assets/collapse.svg";

let data = {
  rows: [
    {
      title: "How secure is data stored in the cloud?",
      content:
        "Cloud providers implement robust security measures, including encryption, access controls, and compliance certifications, ensuring data stored in the cloud is well-protected.",
    },
    {
      title:
        "What is multi-factor authentication (MFA), and why is it important for cloud security?",
      content:
        "MFA adds an extra layer of security by requiring users to provide multiple forms of identification before accessing cloud services, reducing the risk of unauthorized access.",
    },
    {
      title:
        "How can organizations ensure compliance with industry regulations in the cloud?",
      content:
        "Cloud providers offer compliance certifications, and organizations can implement security controls and practices to align with industry-specific regulations, ensuring compliance in the cloud environment.",
    },
    {
      title: "What role does encryption play in cloud security?",
      content:
        "Encryption secures data by converting it into a coded format, making it unreadable without the appropriate decryption keys. It is essential for protecting data both in transit and at rest.",
    },
    {
      title:
        "How does cloud security differ from on-premises security practices?",
      content:
        "Cloud security involves shared responsibility between the cloud provider and the customer. While providers secure the infrastructure, customers are responsible for securing their data, applications, and access controls.",
    },
    {
      title:
        "What measures can organizations take to secure cloud-based applications?",
      content:
        "Secure coding practices, regular vulnerability assessments, and continuous monitoring are essential for securing cloud-based applications and preventing potential threats.",
    },
    {
      title:
        "How can organizations protect against unauthorized access to cloud resources?",
      content:
        "Implementing strong access controls, regularly reviewing and updating permissions, and utilizing multi-factor authentication are effective measures to prevent unauthorized access to cloud resources.",
    },
    {
      title:
        "What is the significance of continuous monitoring in cloud security?",
      content:
        "Continuous monitoring allows organizations to detect and respond to security threats in real-time, providing insights into potential risks and ensuring a proactive security posture.",
    },
    {
      title:
        "Can cloud providers guarantee 100% security, and what is the shared responsibility model?",
      content:
        "No system can guarantee 100% security. The shared responsibility model clarifies the division of security responsibilities between the cloud provider and the customer, emphasizing the collaborative effort needed for a secure environment.",
    },
    {
      title:
        "How can organizations prepare for and respond to security incidents in the cloud?",
      content:
        "Developing an incident response plan, conducting regular drills, and leveraging cloud-native security tools help organizations prepare for and effectively respond to security incidents in the cloud.",
    },
  ],
};

function ExpandingLogo() {
  return (
    <img
      src={ExpandLogo}
      alt="expand"
      className="cloud-security-expanding-logo"
    ></img>
  );
}

function CollapsingLogo() {
  return (
    <img
      src={CollapseLogo}
      alt="collapse"
      className="cloud-security-collapsing-logo"
    ></img>
  );
}

function FAQ() {
  return (
    <div className="cloud-security-faq-wrapper">
      <div className="cloud-security-faq-container">
        <div className="cloud-security-faq-left-section">
          <img src={FaqImage} alt="faq" className="cloud-security-faq-image" />
          <h1 className="cloud-security-faq-title">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="cloud-security-faq-section-container">
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
