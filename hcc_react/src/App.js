import React from "react";
import Home from "../src/pages/Home";
import People from "../src/pages/People";
import { Routes, Route } from "react-router-dom";
import Lectures from "../src/pages/Lectures";
import Publications from "../src/pages/Publications";
import Professor from "../src/pages/People/Professor";
import Introduction from "../src/pages//Introduction";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../src/components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Introduction" element={<Introduction />} />
        <Route exact path="/People" element={<People />} />
        <Route exact path="/Lectures" element={<Lectures />} />
        <Route exact path="/Professor" element={<Professor />} />
        <Route exact path="/Publications" element={<Publications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
