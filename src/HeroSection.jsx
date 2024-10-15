import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  // Carousel settings for autoplay, arrows, and responsiveness
  const settings = {
    dots: true, // Shows navigation dots at the bottom
    infinite: true,
    speed: 600, // Slightly slower transition for smoother effect
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // 3.5 seconds per slide
    arrows: true, // Shows arrow buttons for navigation
    fade: true, // Adds fade effect for slide transition
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className=" py-10 relative z-0"> {/* Adjusted padding */}
      {/* Overlay to handle navbar */}
      <div className="absolute top-0 left-0 right-0 z-10">
        {/* Your navbar goes here */}
      </div>

      <Slider {...settings}>
        {/* First Slide */}
        <div className="w-full h-auto">
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src="/images/cow 2.jpg"
              alt="Fresh & Organic"
              className="w-full h-[50vh] object-cover brightness-75" 
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <div className="text-center text-white px-4 lg:px-8">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4 drop-shadow-lg"> {/* Decreased font size */}
                  Fresh & Organic Food
                </h1>
                <p className="text-base mb-6 drop-shadow-lg"> {/* Decreased font size */}
                  Discover a wide range of fresh, organic, and sustainably grown
                  foods straight from farms to your table.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg"> {/* Adjusted padding */}
                  Explore Our Products
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="w-full h-auto">
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src="/images/cow 1.jpg"
              alt="Healthy Eating"
              className="w-full h-[50vh] object-cover brightness-75" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 lg:px-8">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4 drop-shadow-lg"> {/* Decreased font size */}
                  Healthy Eating Starts Here
                </h1>
                <p className="text-base mb-6 drop-shadow-lg"> {/* Decreased font size */}
                  From fresh organic produce to farm-to-table ingredients, make
                  the best choice for your family.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg"> {/* Adjusted padding */}
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </section>
    
  );
};

export default HeroSection;
