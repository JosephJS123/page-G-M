import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import cliente1 from "../../img/cliente1.jpg";
import cliente2 from "../../img/cliente2.jpg";
import cliente3 from "../../img/cliente3.jpg";
import cliente4 from "../../img/cliente4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clients = [
    {
      img: cliente1,
      review:
        "Muy agradecida con ustedes por la decoración hermosa de mi cumpleaños, los volvería a contratar sin ninguna duda.",
    },
    {
      img: cliente2,
      review:
        "La fiesta de mi hija quedó muy bonita, salieron las mejores fotos, muchas gracias G&M.",
    },
    {
      img: cliente3,
      review:
        "Espectacular el show, muy divertido para todos niños y adultos, saludos y muchas gracias.",
    },
    {
      img: cliente4,
      review:
        "Muy bonito el show y la decoración, y lo mejor es que todo fue muy barato, gracias totales.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Nuestros clientes se llevan </span>
        <span>Lo Mejor </span>
        <span>de nosotros...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="foto cliente" />
                <span style={{color : darkMode ? "var(--blueCard)" : ""}}>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
