import "./App.css";
import Home from "./pages/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/Home/components/Footer/Footer";
import Header from "./pages/Home/components/Header/Header";
import Cookies from "./pages/Home/components/Cookies/Cookies";

function App() {
  return (
    <Router>
      <Header />
      <Cookies />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
