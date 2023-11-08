import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="wrapper bg-[#0d0a12] w-[calc(100vw - 3.5rem)] h-full">
        <Routes>
          <Route element={<Layout />}>
            {/* Child routes within the Layout component */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
