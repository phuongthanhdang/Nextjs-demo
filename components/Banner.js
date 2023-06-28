"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
// import "../styles/header.css";
const images = [
  "https://raw.githubusercontent.com/devat-youtuber/travel-nextjs13beta-images/main/bn1.jpg",
  "https://raw.githubusercontent.com/devat-youtuber/travel-nextjs13beta-images/main/bn2.jpg",
  "https://raw.githubusercontent.com/devat-youtuber/travel-nextjs13beta-images/main/bn3.jpg",
];
export function Banner() {
  return (
    <section id="home" className="banner">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        loop={true}
        className="img-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            {/* <picture>
                <img src={image} alt={image}></img>
               </picture> */}
            <Image
              src={image}
              alt={image}
              width={1920}
              height={1280}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="box">
        <strong>
          Explore the World <i className="fa-solid fa-globe"></i>
        </strong>
        <h1>Its a Big Word Out There, go Explore</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          perspocoatis!
        </p>
        <a href="#">Explore Now</a>
      </div>
    </section>
  );
}
