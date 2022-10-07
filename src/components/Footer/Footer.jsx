import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Face from "@iconscout/react-unicons/icons/uil-facebook";
import wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Hecho con 💗 G&M - Producciones</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/josephangelo.2000/"
            target="_blank"
            rel="noreferrer"
          >
            <Insta color="white" size="3rem" />
          </a>

          <a
            href="https://www.facebook.com/caroldita"
            target="_blank"
            rel="noreferrer"
          >
            <Face color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
