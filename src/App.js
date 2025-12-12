import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Ensure correct imports
import "./index.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Correctly wrap your entire app with BrowserRouter */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
