import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import party from "../../img/party.png";
import Humble from "../../img/humble.png";
import contrato from "./ShowG&M.pdf";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Nuestros increíbles
        </span>
        <span>Servicios</span>
        <span>
          <br />
        </span>
        <a href={contrato} download>
          <button className="button s-button">Ver Contrato</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Decoraciones"}
            detail={"Flores, mesas romanas, cilindros, aros, etc."}
          />
        </motion.div>

        {/* Second Card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={party}
            heading={"Shows Infantiles"}
            detail={"Animadora, DJ, Muñecos, Hora loca y mucho más."}
          />
        </motion.div>

        {/* Third Card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Contrato"}
            detail={
              "Contamos con un contrato profesional que puede descargar sin ningún compromiso."
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
