import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import HeroSection from "./HeroSection";
import OurProducts from "./OurProducts";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Ghee from "./Ghee";
import Honey from "./Honey";
import BS from "./BS";

// Import carousel styles (if needed for your project)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Defining Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <OurProducts />
              <WhyChooseUs />
              <Gallery />
            </>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/bestseller" element={<BS />} />
        <Route path="/ghee" element={<Ghee />} />
        <Route path="/honey" element={<Honey />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
