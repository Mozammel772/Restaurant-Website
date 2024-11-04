import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Catagory.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";

const Catagory = () => {
  return (
    <div className="my-20">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          autoPlay: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Catagory;
