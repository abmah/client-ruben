import "./faq.css";
import Faq from "react-faq-component";
import FaqImage from "../../../../../assets/faq.svg";

import ExpandLogo from "../../../../../assets/expand.svg";
import CollapseLogo from "../../../../../assets/collapse.svg";

let data = {
  rows: [
    {
      title: "What is Google Workspace?",
      content:
        "Google Workspace is a suite of cloud-based collaboration and productivity tools by Google, including Gmail, Google Docs, Google Drive, Google Meet, and more, designed to streamline communication and collaboration within organizations.",
    },
    {
      title: "How is Google Workspace different from G Suite?",
      content:
        "Google Workspace is the evolution of G Suite, offering the same set of collaboration tools with enhanced features. It reflects Google's integrated approach to productivity, emphasizing communication and collaboration.",
    },
    {
      title: "What applications are included in Google Workspace?",
      content:
        "Google Workspace includes Gmail, Google Calendar, Google Drive, Google Docs, Google Sheets, Google Slides, Google Meet, Google Forms, and other collaborative tools for communication and productivity.",
    },
    {
      title: "How does Google Workspace support remote work and collaboration?",
      content:
        "Google Workspace facilitates remote work by providing real-time collaboration on documents, video conferencing through Google Meet, and centralized storage on Google Drive, enabling seamless collaboration regardless of location.",
    },
    {
      title: "Is Google Workspace suitable for small businesses?",
      content:
        "Yes, Google Workspace is suitable for businesses of all sizes, offering scalable plans tailored to the needs of small, medium, and large enterprises. It provides a cost-effective and collaborative solution for organizations.",
    },
    {
      title: "Can I use my own domain with Google Workspace?",
      content:
        "Yes, Google Workspace allows users to use their own domain for email addresses, providing a professional and branded communication experience.",
    },
    {
      title: "How is data security handled in Google Workspace?",
      content:
        "Google Workspace employs robust security measures, including encryption, multi-factor authentication, and compliance certifications, ensuring the protection and privacy of user data.",
    },
    {
      title: "Can I access Google Workspace applications offline?",
      content:
        "Yes, many Google Workspace applications, including Google Docs and Google Sheets, support offline access, allowing users to work without an internet connection. Changes made offline will sync when the connection is restored.",
    },
    {
      title: "What are the pricing plans for Google Workspace?",
      content:
        "Google Workspace offers various pricing plans, including Business Starter, Business Standard, Business Plus, and Enterprise editions. The pricing is per user per month and varies based on the features included in each plan.",
    },
    {
      title:
        "How does Google Workspace integrate with other third-party applications?",
      content:
        "Google Workspace supports integration with a wide range of third-party applications through the Google Workspace Marketplace, allowing users to enhance their productivity by connecting with tools and services they use regularly.",
    },
  ],
};

function ExpandingLogo() {
  return (
    <img
      src={ExpandLogo}
      alt="expand"
      className="cloud-collaboration-expanding-logo"
    ></img>
  );
}

function CollapsingLogo() {
  return (
    <img
      src={CollapseLogo}
      alt="collapse"
      className="cloud-collaboration-collapsing-logo"
    ></img>
  );
}

function FAQ() {
  return (
    <div className="cloud-collaboration-faq-wrapper">
      <div className="cloud-collaboration-faq-container">
        <div className="cloud-collaboration-faq-left-section">
          <img
            src={FaqImage}
            alt="faq"
            className="cloud-collaboration-faq-image"
          />
          <h1 className="cloud-collaboration-faq-title">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="cloud-collaboration-faq-section-container">
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
