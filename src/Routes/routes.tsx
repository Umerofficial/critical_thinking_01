import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/Home";
import MapBoxPage from "../pages/Map/MapBoxPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function AppRoutes() {
  const location = useLocation(); // Get the current location

  // Determine if the current path is "/market-analysis"
  const isMarketAnalysis = location.pathname === "/market-analysis";

  return (
    <>
      {!isMarketAnalysis && <Header />}{" "}
      {/* Render Header only if not on market-analysis */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/market-analysis" element={<MapBoxPage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
      {!isMarketAnalysis && <Footer />}{" "}
      {/* Render Footer only if not on market-analysis */}
    </>
  );
}

export default AppRoutes;
