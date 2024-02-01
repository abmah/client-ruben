import ContactUs from "../Components/ContactUs/ContactUs";
import AboveTheFold from "./components/AboveTheFold/AboveTheFold";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import OurStory from "./components/OurStory/OurStory";
import OurValues from "./components/OurValues/OurValues";

function About() {
  return (
    <>
      <AboveTheFold />
      <OurStory />
      <OurValues />
      <MeetTheTeam />
      <ContactUs />
    </>
  );
}

export default About;
