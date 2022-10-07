import React from "react";
import "./Gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "../../img/pic1.jpg";
import pic2 from "../../img/pic2.jpg";
import pic3 from "../../img/pic3.jpg";
import pic4 from "../../img/pic4.jpg";
import pic5 from "../../img/pic5.jpg";
import pic6 from "../../img/pic6.jpg";
import pic7 from "../../img/pic7.jpg";
import pic8 from "../../img/pic8.jpg";
import pic9 from "../../img/pic9.jpg";
import pic10 from "../../img/pic10.jpg";
import pic11 from "../../img/pic11.jpg";
import pic12 from "../../img/pic12.jpg";
import show1 from "../../img/show1.jpg";
import show2 from "../../img/show2.jpg";
import show3 from "../../img/show3.jpg";
import show4 from "../../img/show4.jpg";
import show5 from "../../img/show5.jpg";
import show6 from "../../img/show6.jpg";
import show7 from "../../img/show7.jpg";
import show8 from "../../img/show8.jpg";
import show9 from "../../img/show9.jpg";
import show10 from "../../img/show10.jpg";
import show11 from "../../img/show11.jpg";
import show12 from "../../img/show12.jpg";
import "swiper/css";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Gallery = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="gallery" id="Gallery">
      {/* Heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Trabajos Recientes</span>
      <span>Galeria</span>

      {/* Slider Decoracion*/}
      <Swiper
        id="Deco"
        spaceBetween={30}
        breakpoints={{
          // when window max-width 480px
          480: {
            width: 480,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1240: {
            width: 1240,
            slidesPerView: 3,
          },
        }}
        grabCursor={true}
        className="gallery-slider"
      >
        <SwiperSlide>
          <img src={pic1} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic5} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic6} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic7} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic8} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic9} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic10} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic11} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic12} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
      </Swiper>

      {/* Slider Shows*/}
      <Swiper
        id="Show"
        spaceBetween={30}
        breakpoints={{
          // when window max-width 480px
          480: {
            width: 480,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1240: {
            width: 1240,
            slidesPerView: 3,
          },
        }}
        grabCursor={true}
        className="gallery-slider"
      >
        <SwiperSlide>
          <img src={show1} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show2} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show3} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show4} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show5} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show6} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show7} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show8} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show9} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show10} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show11} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={show12} alt="foto galeria" width={627} height={391} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
