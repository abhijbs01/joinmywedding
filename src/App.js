import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Wedding from "./Pages/Wedding";
import Press from "./Pages/Press";
import Contactus from "./Pages/Contactus";
import Faq from "./Pages/Faq";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="home-section">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/press" element={<Press />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
