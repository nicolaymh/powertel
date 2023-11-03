import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { carrousell } from "../assets/image/carrousell/carrousell";

export default function Carrousell() {
  const navigate = useNavigate();
  return (
    <>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {carrousell.map((item) => (
          <SwiperSlide
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="cursor-pointer filter hover:brightness-110 transition duration-300 ease-in-out"
          >
            <img src={item.image} alt={item.desc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";

// const Carrousell = () => {
//   const [swiper, setSwiper] = useState(null);

//   const handleNext = () => {
//     if (swiper !== null) {
//       swiper.slideNext();
//     }
//   };

//   const handlePrev = () => {
//     if (swiper !== null) {
//       swiper.slidePrev();
//     }
//   };

//   return (
//     <div className="w-screen">
//       <Swiper
//         onSwiper={setSwiper}
//         spaceBetween={30}
//         slidesPerView={1}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//       >
//         <SwiperSlide>
//           <img
//             src="https://via.placeholder.com/800x400/FF0000/FFFFFF"
//             alt="Slide 1"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://via.placeholder.com/800x400/00FF00/FFFFFF"
//             alt="Slide 2"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://via.placeholder.com/800x400/0000FF/FFFFFF"
//             alt="Slide 3"
//           />
//         </SwiperSlide>
//       </Swiper>
//       <div>
//         <button className="swiper-button-prev" onClick={handlePrev}></button>
//         <button className="swiper-button-next" onClick={handleNext}></button>
//       </div>
//     </div>
//   );
// };

// export default Carrousell;
