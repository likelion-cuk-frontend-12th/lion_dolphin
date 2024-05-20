import React from "react";
import { Route, Routes } from "react-router-dom";
// import One from "./toUpper.js";
import Main from "./Main";
import About from "./pages/About";
import Introduction from "./pages/Introduction";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/introduction" element={<Introduction />} />
    </Routes>
  );
}
