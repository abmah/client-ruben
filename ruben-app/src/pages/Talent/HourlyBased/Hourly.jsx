import AboveTheFold from "./components/AboveTheFold/AboveTheFold";
import BottomCards from "./components/BottomCards/BottomCards";
import Cards from "./components/Cards/Cards";
import FAQ from "./components/FAQ/FAQ";
import Images from "./components/ImagesSection/Images";
import LetsTalk from "./components/LetsTalk/LetsTalk";
import Services from "./components/Services/Services";

function Hourly() {
  return (
    <>
      <AboveTheFold />
      <Cards />
      <Images />
      <Services />
      <BottomCards />
      <LetsTalk />
      <FAQ />
    </>
  );
}

export default Hourly;
