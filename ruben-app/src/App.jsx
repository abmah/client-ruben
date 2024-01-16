import "./App.css";
import Home from "./pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Cookies from "./pages/Cookies/Cookies";
import Infrastructure from "./pages/Tech/Infrastructure/Infrastructure";
import Data from "./pages/Tech/Data/Data";
import Security from "./pages/Tech/Security/Security";
import Collaboration from "./pages/Tech/Collaboration/Collaboration";
import DigitalExperts from "./pages/Talent/DigitalExperts/DigitalExperts";
import Strategy from "./pages/Talent/Strategy/Strategy";

function App() {
  return (
    <>
      <Header />
      <Cookies />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/data" element={<Data />} />
        <Route path="/security" element={<Security />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/digital-experts" element={<DigitalExperts />} />
        <Route path="/strategy-consultants" element={<Strategy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
