import "./faq.css";
import Faq from "react-faq-component";
import FaqImage from "../../../../../assets/faq.svg";

import ExpandLogo from "../../../../../assets/expand.svg";
import CollapseLogo from "../../../../../assets/collapse.svg";
let data = {
  rows: [
    {
      title:
        "Why should our organization consider outsourced customized training programs?",
      content:
        "Outsourced customized training programs offer specialized expertise, tailored content, and flexibility to meet your organization's unique needs, enhancing the effectiveness of training initiatives.",
    },
    {
      title:
        "How can your training programs be customized for our specific requirements?",
      content:
        "Training providers work closely with your organization to understand its goals, challenges, and culture, creating bespoke content and delivery methods aligned with your specific needs.",
    },
    {
      title:
        "What advantages do customized training programs have over off-the-shelf solutions?",
      content:
        "Customized training programs address specific challenges and goals unique to your organization, ensuring relevance, engagement, and practical applicability for participants.",
    },
    {
      title:
        "Can your training programs accommodate various learning styles and preferences?",
      content:
        "Yes, customized training programs can be designed to incorporate diverse learning styles, ensuring that the content resonates with a broad audience.",
    },
    {
      title:
        "How your training programs save time and resources for our organization?",
      content:
        "Outsourcing allows your organization to leverage the expertise of training professionals, reducing the time and resources spent on in-house program development and delivery.",
    },
    {
      title:
        "How your training programs stay current with industry trends and best practices?",
      content:
        "Training providers often have industry experts who continuously update content to reflect the latest trends and best practices, ensuring the training remains relevant.",
    },
    {
      title:
        "Can outsourced training programs be delivered virtually or in-person?",
      content:
        "Yes, training programs can be adapted to various delivery formats, including virtual, in-person, or blended approaches, depending on your organization's preferences and needs.",
    },
    {
      title:
        "What metrics can be used to measure the success of outsourced training programs?",
      content:
        "Metrics may include improvements in performance, revenue growth, employee satisfaction, knowledge retention, and the application of newly acquired skills on the job.",
    },
    {
      title:
        "Can outsourced training programs be adapted for global teams with diverse cultural backgrounds?",
      content:
        "Yes, training content can be customized to be culturally sensitive and relevant, ensuring its effectiveness across diverse global teams.",
    },
    {
      title:
        "Can outsourced training programs be scaled for both small and large organizations?",
      content:
        "Yes, training providers can scale programs to accommodate the size of your organization, ensuring consistency and effectiveness across different scales.",
    },
    {
      title:
        "How can we ensure the confidentiality of sensitive information when outsourcing training programs?",
      content:
        "We ensure robust confidentiality agreements and security measures in place to protect sensitive organizational information.",
    },
  ],
};
function ExpandingLogo() {
  return (
    <img
      src={ExpandLogo}
      alt="expand"
      className="skills-programs-expanding-logo"
    ></img>
  );
}

function CollapsingLogo() {
  return (
    <img
      src={CollapseLogo}
      alt="collapse"
      className="skills-programs-collapsing-logo"
    ></img>
  );
}

function FAQ() {
  return (
    <div className="skills-programs-faq-wrapper">
      <div className="skills-programs-faq-container">
        <div className="skills-programs-faq-left-section">
          <img src={FaqImage} alt="faq" className="skills-programs-faq-image" />
          <h1 className="skills-programs-faq-title">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="skills-programs-faq-section-container">
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
