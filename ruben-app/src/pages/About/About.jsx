import ContactUs from "../Components/ContactUs/ContactUs";
import AboveTheFold from "./components/AboveTheFold/AboveTheFold";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import OurStory from "./components/OurStory/OurStory";
import OurValues from "./components/OurValues/OurValues";
import TrustedBy from "./components/TrustedBy/TrustedBy";

function About() {
  return (
    <>
      <AboveTheFold />
      <OurStory />
      <OurValues />
      <MeetTheTeam />
      <TrustedBy />
      <ContactUs />
    </>
  );
}

export default About;
