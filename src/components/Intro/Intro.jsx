import React from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import portada from "../../img/portada.jpg";
import Crown from "../../img/crown.png";
import partyemoji from "../../img/partyemoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Face from "@iconscout/react-unicons/icons/uil-facebook";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="Navbar">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hola! Somos</span>
          <span>G&M Producciones</span>
          <span>
            Empresa dedicada a la decoración de fiestas, quinceañeros,
            aniversarios, promociones, bodas y a la animación de shows
            infantiles.
          </span>
        </div>
        <Link spy={true} to={"Contact"} smooth={true} activeClass="activeClass">
          <button className="button i-button">Contrátenos</button>
        </Link>
        <div className="i-icons">
          <a
            href="https://www.facebook.com/caroldita"
            target="_blank"
            rel="noreferrer"
          >
            <Face color="#f985c5" size="4rem" />
          </a>
          <a
            href="https://www.instagram.com/josephangelo.2000/"
            target="_blank"
            rel="noreferrer"
          >
            <Insta color="#f985c5" size="4rem" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="mancha azul" />
        <img src={Vector2} alt="mancha rosa" />
        <img
          src={portada}
          alt="portada"
          width={350}
          height={406}
          className="portada"
        />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={partyemoji}
          alt="emoji de fiesta"
          width={255}
          height={234}
        />
        <motion.div
          initial={{ top: "-12%", left: "88%" }}
          whileInView={{ left: "69%" }}
          transition={transition}
          style={{ top: "-12%", left: "70%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Shows" txt2="Infantiles" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "16rem" }}
          whileInView={{ left: "-4.5rem" }}
          transition={transition}
          style={{ top: "16rem", left: "-5.5rem" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Las mejores" txt2="Decoraciones" />
        </motion.div>
        {/* BLUR DIVS */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "13rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
