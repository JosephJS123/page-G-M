import React from "react";
import { Link } from "react-scroll";
import "./Card.css";

const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoji} alt="emoticon" width={121} height={156} />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link spy={true} to={heading === "Decoraciones" ? "Deco" : "Show"} smooth={true} activeClass="activeClass">
        <button className={heading === "Contrato" ? "hide-button" : "c-button"}>
          VER GALERIA
        </button>
      </Link>
    </div>
  );
};

export default Card;
