import { useState } from "react";
import Navbar from "./navbar";
import HeroSection from "./HeroSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurProducts from "./OurProducts";
import BestsellerPage from "./BestSellerPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import Gallery from "./Gallery";
import Footer from "./Footer";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroSection />,
  },
  {
    path: "/products",
    element: <OurProducts />,
  },
  {
    path: "/bestseller",
    element: <BestsellerPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar should be outside the RouterProvider so it's visible on every route */}
      <Navbar />

      {/* RouterProvider handles all routing */}
      <RouterProvider router={router} />
      <OurProducts/>
      <WhyChooseUs/>
      <Gallery/>
      <Footer/>
    </>
  );
}

export default App;
