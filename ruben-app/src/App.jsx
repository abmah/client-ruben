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
        <Route path="collaboration" element={<Collaboration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
