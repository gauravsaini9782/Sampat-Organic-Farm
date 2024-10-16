// src/components/Gallery.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "/images/honey tree.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "/images/cow 2.jpg",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "/images/cow 3.avif",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "/images/cow 1.jpg",
      alt: "Image 4",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
