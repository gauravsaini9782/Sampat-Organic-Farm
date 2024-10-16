import { useState } from "react";
import Navbar from "./navbar";
import HeroSection from "./HeroSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurProducts from "./OurProducts";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import Gallery from "./Gallery";
import Footer from "./Footer";
import BestsellerPage from "./BestSellerPage";
import Ghee from "./Ghee";
import Honey from "./Honey"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HeroSection />
                <OurProducts />
                <WhyChooseUs />
                <Gallery />
              </div>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/bestseller" element={<BestsellerPage />} />
          <Route path="/ghee" element={<Ghee />} />
          <Route path="/honey" element={<Honey/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
