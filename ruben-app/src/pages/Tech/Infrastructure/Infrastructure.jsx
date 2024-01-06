import AboveTheFold from "./components/AboveTheFold/AboveTheFold";
import BottomCards from "./components/BottomCards/BottomCards";
import Cards from "./components/Cards/Cards";
import Images from "./components/ImagesSection/Images";
import LetsTalk from "./components/LetsTalk/LetsTalk";
import Services from "./components/Services/Services";

function Infrastructure() {
  return (
    <>
      <AboveTheFold />
      <Cards />
      <Images />
      <Services />
      <BottomCards />
      <LetsTalk />
    </>
  );
}

export default Infrastructure;
