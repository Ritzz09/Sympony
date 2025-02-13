import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Pagination } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
// SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);

import './gallery.css';
import zero from "./Gallery/clinic.jpeg";
import one from "./Gallery/1.jpeg";
import Two from "./Gallery/2.jpeg";
import Three from "./Gallery/3.jpeg";
import Four from "./Gallery/4.jpeg";
import Five from "./Gallery/5.jpeg";
// import Six from "./Gallery/6.jpeg";
// import Seven from "./Gallery/7.jpeg";
// import Eight from "./Gallery/8.jpeg";
// import Nine from "./Gallery/9.jpeg";

const gallery = [
    {
        
        url: zero
    },
    {
        
        url: one
    },
    {
       
        url: Two
    },
    {
       
        url: Three
    },
    {
       
        url: Four
    },
    {
       
        url: Five
    },
    // {
       
    //     url: Six
    // },
    // {
       
    //     url: Seven
    // },
    // {
       
    //     url: Eight
    // },
    // {
       
    //     url: Nine
    // },
];

const Gallery = () => {
  return (

    <div id="gallery" className="gallery" style={{ position: 'relative' }}>
        <div className="text-center">
            <div className="section-title1">
                <h2>Gallery</h2>
                <p style={{ textAlign: 'center'}}>
                <h4>Our Smiles, Our Pride </h4>
                {/* <br></br>See the Transformation Through Our Patient Success Stories */}
                </p>
            </div>
        </div>
        <Swiper 
        className='slider'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        loop={true}
        pagination={{clickable: true}}

        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        breakpoints={{
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            },
            1560: {
                slidesPerView: 3
            },
        }}
        
        >
              {
                  gallery.map((data, index) => (
                      <SwiperSlide key={index}>
                          <img src={data.url} alt={`Gallery ${index + 1}`} className="gallery-image" />
                      </SwiperSlide>
                  ))
              }

        </Swiper>

    </div>
  );
};

export default Gallery;
