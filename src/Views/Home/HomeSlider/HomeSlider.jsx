import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';

import './homeslider.scss';

const HomeSlider = () => {
  return (
    <div id='swipermyswhome1'>
         <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        {/* <SwiperSlide><img src="/assets/Banner02xs.webp" alt="" /></SwiperSlide> */}
        {/* <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
       
            
          >
          <SwiperSlide><img src="https://opt-v3-files.raksahb.com/banner/31/BaccaratBetAndWinDesk.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://opt-v3-files.raksahb.com/banner/31/AviatorDesktopENG.jpg" alt="" /></SwiperSlide>
          </Swiper>
          </SwiperSlide>
        <SwiperSlide><img src="https://opt-v3-files.raksahb.com/banner/31/27thAviatriX_Desktop%28E%29.jpg" alt="" /></SwiperSlide> */}
        {/* <SwiperSlide><img src="https://opt-v3-files.raksahb.com/banner/31/AviatorDesktopENG.jpg" alt="" /></SwiperSlide> */}
        {/* <SwiperSlide><img src="https://opt-v3-files.raksahb.com/banner/31/BaccaratBetAndWinDesk.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://opt-v3-files.raksahb.com/banner/31/BaccaratBetAndWinDesk.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://opt-v3-files.raksahb.com/banner/31/BaccaratBetAndWinDesk.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://opt-v3-files.raksahb.com/banner/31/27thAviatriX_Desktop%28E%29.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://opt-v3-files.raksahb.com/banner/31/BaccaratBetAndWinDesk.jpg" alt="" /></SwiperSlide> */}
        {/* <SwiperSlide><img src="/assets/Banner03xs.webp" alt="" /></SwiperSlide> */}
        {/* <SwiperSlide><img src="/assets/Banner01xs.webp" alt="" /></SwiperSlide> */}
        <SwiperSlide><img src="/Final_Assets/banners/01.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/Final_Assets/banners/launching_soon.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/Final_Assets/banners/01.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/Final_Assets/banners/01.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSlider
