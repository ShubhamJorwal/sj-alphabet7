import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import { Pagination,Autoplay } from 'swiper/modules';

import './homeslider.scss';
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;




const HomeSlider = () => {

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(`${apiUrl}/get_slider`); // Adjust endpoint as needed
        setBanners(response.data.result); // Update to match your API response structure
      } catch (error) {
        console.error('Error fetching banner images:', error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div id="swipermyswhome1">
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
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img src={banner?.image} alt={banner.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;