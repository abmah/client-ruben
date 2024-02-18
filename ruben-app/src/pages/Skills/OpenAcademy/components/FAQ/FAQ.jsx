import "./faq.css";
import Faq from "react-faq-component";
import FaqImage from "../../../../../assets/faq.svg";

import ExpandLogo from "../../../../../assets/expand.svg";
import CollapseLogo from "../../../../../assets/collapse.svg";

let data = {
  rows: [
    {
      title: "Are your trainings suitable for beginners?",
      content:
        "Absolutely. Digital marketing training often starts with foundational concepts, making it accessible for beginners. The courses typically progress to advanced topics to cater to diverse skill levels. Our goal is to teach you how to run a digital marketing campaign from scratch.",
    },
    {
      title: "Which specific certifications I can receive?",
      content:
        "After completing the training, you will take official tests from Google to get 4 certifications (Google Analytics, Google Search Ads, Google Display Ads, Google Tag Manager). Our training and guidance will guarantee you have all the knowledge to successfully pass these tests and get officially certified by Google.",
    },
    {
      title: "Will I get access to training materials?",
      content:
        "Yes, in addition to the live workshop training, you will have access to all the training material material, so you can review and test your knowledge at home.",
    },
    {
      title: "Are the trainings theoretical or practical?",
      content:
        "The trainings mostly focused on practical skills. In addition to learning about all the tools and strategies of digital advertising, you will implement your training by running live accounts on various platforms.",
    },
    {
      title:
        "Can I apply the knowledge gained from digital marketing training to my business?",
      content:
        "Yes, the practical knowledge acquired can be directly applied to your business. You'll learn how to develop and implement digital strategies tailored to your specific industry and target audience.",
    },
    {
      title: "What formats do digital marketing training programs offer?",
      content: "Our trainings are onsite, in Dubai Internet City.",
    },
    {
      title:
        "Will digital marketing training cover the latest industry trends?",
      content:
        "Yes, our trainers stay updated with industry trends. You'll learn about the latest tools, techniques, and best practices to keep your skills current.",
    },
    {
      title:
        "How can digital marketing training help me understand analytics and data?",
      content:
        "Training programs cover analytics tools and methodologies, enabling you to interpret data, measure campaign performance, and make data-driven decisions to optimize marketing strategies.",
    },
    {
      title:
        "Can I network with professionals during digital marketing training?",
      content:
        "Yes, we facilitate networking opportunities. You can connect with instructors, industry experts, and fellow participants, fostering valuable relationships within the digital marketing community.",
    },
    {
      title:
        "Is digital marketing training a worthwhile investment for businesses?",
      content:
        "Absolutely. Investing in digital marketing training for you or your team enhances their skills, improves marketing efficiency, and ensures your business stays competitive in the rapidly evolving digital landscape. Your return on investment will be immediate and measurable.",
    },
  ],
};
function ExpandingLogo() {
  return (
    <img
      src={ExpandLogo}
      alt="expand"
      className="skills-academy-expanding-logo"
    ></img>
  );
}

function CollapsingLogo() {
  return (
    <img
      src={CollapseLogo}
      alt="collapse"
      className="skills-academy-collapsing-logo"
    ></img>
  );
}

function FAQ() {
  return (
    <div className="skills-academy-faq-wrapper">
      <div className="skills-academy-faq-container">
        <div className="skills-academy-faq-left-section">
          <img src={FaqImage} alt="faq" className="skills-academy-faq-image" />
          <h1 className="skills-academy-faq-title">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="skills-academy-faq-section-container">
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
